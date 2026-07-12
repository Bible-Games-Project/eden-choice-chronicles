#!/usr/bin/env node
/**
 * Upgrade the CORRECT choice's `feedback` string across 5 target stories:
 *   rebekah, jacobEsau, jacobsDream, jacobWrestles, josephSold
 *
 * For each scene that has MORE THAN ONE choice:
 *   1. Parse the TS story file with the TypeScript AST to find the index of the
 *      choice with `isCorrect: true` and the current English `text` / `feedback`.
 *   2. Ask the Lovable AI Gateway to produce a short, Genesis-cited educational
 *      feedback (1–2 sentences) explaining why that action is what happened in
 *      Scripture. This is the string shown in the "Not quite!" overlay.
 *   3. Overwrite that feedback in en/scenes/<story>.json.
 *   4. Overwrite the same feedback in every non-English locale with
 *      "[TODO:<lang>] <english>" so the existing ai-translate-todos script picks
 *      it up on the next run.
 *
 * All other choices (incorrect ones + single-choice consequence scenes) are
 * left untouched to avoid disturbing existing translations.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const STORIES_DIR = join(ROOT, "src/data/stories");
const LOCALES_DIR = join(ROOT, "src/locales");

const STORIES = ["sermonMount", "lordsPrayer", "goodSamaritan", "prodigalSon", "richLazarus"];
const NON_EN = ["es", "pt-BR", "fr", "de", "it", "pl", "ru", "tr", "ja", "ko", "ar"];

const API_KEY = process.env.LOVABLE_API_KEY;
if (!API_KEY) { console.error("LOVABLE_API_KEY missing"); process.exit(1); }
const MODEL = process.env.MODEL || "google/gemini-2.5-flash";

// --------- TS parsing ---------
function getStr(node) {
  if (!node) return null;
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  return null;
}
function getProp(obj, name) {
  if (!ts.isObjectLiteralExpression(obj)) return null;
  for (const p of obj.properties) {
    if (ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === name) return p.initializer;
  }
  return null;
}
function extractScenes(sourceCode, storyId) {
  const sf = ts.createSourceFile(`${storyId}.ts`, sourceCode, ts.ScriptTarget.Latest, true);
  const expected = `${storyId}Scenes`;
  const scenes = {};
  function visit(node) {
    if (ts.isVariableStatement(node)) {
      const isExport = node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
      if (isExport) {
        for (const decl of node.declarationList.declarations) {
          if (ts.isVariableDeclaration(decl) && ts.isIdentifier(decl.name) && decl.name.text === expected) {
            const init = decl.initializer;
            if (init && ts.isObjectLiteralExpression(init)) {
              for (const prop of init.properties) {
                if (!ts.isPropertyAssignment(prop)) continue;
                const sceneId = ts.isIdentifier(prop.name) ? prop.name.text : (ts.isStringLiteral(prop.name) ? prop.name.text : null);
                if (!sceneId) continue;
                const obj = prop.initializer;
                if (!ts.isObjectLiteralExpression(obj)) continue;
                const title = getStr(getProp(obj, "title")) || "";
                const text = getStr(getProp(obj, "text")) || "";
                const choicesNode = getProp(obj, "choices");
                const choices = [];
                if (choicesNode && ts.isArrayLiteralExpression(choicesNode)) {
                  for (const el of choicesNode.elements) {
                    if (!ts.isObjectLiteralExpression(el)) continue;
                    const cText = getStr(getProp(el, "text")) || "";
                    const cFeedback = getStr(getProp(el, "feedback")) || "";
                    const isCorrectNode = getProp(el, "isCorrect");
                    let isCorrect = false;
                    if (isCorrectNode) {
                      if (isCorrectNode.kind === ts.SyntaxKind.TrueKeyword) isCorrect = true;
                    }
                    choices.push({ text: cText, feedback: cFeedback, isCorrect });
                  }
                }
                scenes[sceneId] = { title, text, choices };
              }
            }
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  return scenes;
}

// --------- AI gateway ---------
async function callAI(messages, attempt = 0) {
  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
      body: JSON.stringify({ model: MODEL, messages, temperature: 0.2, response_format: { type: "json_object" } }),
    });
    if (res.status === 429 || res.status >= 500) throw new Error(`HTTP ${res.status}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
    const data = await res.json();
    return data.choices?.[0]?.message?.content || "";
  } catch (err) {
    if (attempt < 4) {
      await new Promise((r) => setTimeout(r, 1500 * 2 ** attempt));
      return callAI(messages, attempt + 1);
    }
    throw err;
  }
}
function extractJson(text) {
  let t = text.trim();
  if (t.startsWith("```")) t = t.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
  try { return JSON.parse(t); } catch {}
  const s = t.indexOf("{"), e = t.lastIndexOf("}");
  if (s !== -1 && e > s) return JSON.parse(t.slice(s, e + 1));
  throw new Error("bad JSON");
}

async function generateFeedbacks(storyLabel, items) {
  // items: [{ key, sceneTitle, sceneText, correctText }]
  const payload = {};
  for (const it of items) {
    payload[it.key] = {
      scene_title: it.sceneTitle,
      scene_text: it.sceneText,
      correct_action: it.correctText,
    };
  }
  const sys = `You write short educational feedback shown in a Bible story game after a wrong answer.
For each entry, output ONE English sentence (max 2) that:
- Cites the specific book, chapter and verse where possible (e.g. "Exodus 2:3 —").
- States the biblical fact plainly. Never uses "you"; refer to the character by name.
- Never scolds. Warm, educational, factual.
- Must clearly match the "correct_action". If the correct_action is a soft/interpretive line, still cite the closest verse and describe what Scripture actually records.
- No commentary, no preface, no quotes around the whole sentence.
Return a single JSON object mapping each input key to its feedback string.`;
  const user = `Story: ${storyLabel}\nEntries:\n${JSON.stringify(payload, null, 2)}`;
  const content = await callAI([
    { role: "system", content: sys },
    { role: "user", content: user },
  ]);
  return extractJson(content);
}

const STORY_LABELS = {
  healingLeper: "The Healing of the Leper (Matthew 8:1-4, Mark 1:40-45, Luke 5:12-16)",
  centurionServant: "The Centurion's Servant (Matthew 8:5-13, Luke 7:1-10)",
  calmingStorm: "Jesus Calms the Storm (Matthew 8:23-27, Mark 4:35-41, Luke 8:22-25)",
  demonPossessed: "The Demon-Possessed Man (Matthew 8:28-34, Mark 5:1-20, Luke 8:26-39)",
  womanBlood: "The Woman with the Issue of Blood (Matthew 9:20-22, Mark 5:25-34, Luke 8:43-48)",
  jairusDaughter: "Jairus' Daughter (Matthew 9:18-26, Mark 5:21-43, Luke 8:40-56)",
  feeding5000: "The Feeding of the Five Thousand (Matthew 14:13-21, Mark 6:30-44, Luke 9:10-17, John 6:1-14)",
  walkingWater: "Jesus Walks on Water (Matthew 14:22-33, Mark 6:45-52, John 6:16-21)",
  blindMan: "The Man Born Blind (John 9:1-41)",
  lazarus: "The Raising of Lazarus (John 11:1-44)",
};

function chunk(arr, n) { const out = []; for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n)); return out; }

async function processStory(storyId) {
  const tsPath = join(STORIES_DIR, `${storyId}.ts`);
  const src = readFileSync(tsPath, "utf8");
  const scenes = extractScenes(src, storyId);

  // Build items: only scenes with >=2 choices AND a correct choice
  const items = [];
  for (const [sceneId, scene] of Object.entries(scenes)) {
    if (!scene.choices || scene.choices.length < 2) continue;
    const idx = scene.choices.findIndex((c) => c.isCorrect);
    if (idx < 0) continue;
    items.push({
      key: sceneId,
      idx,
      sceneTitle: scene.title,
      sceneText: scene.text,
      correctText: scene.choices[idx].text,
      currentFeedback: scene.choices[idx].feedback,
    });
  }
  console.log(`[${storyId}] ${items.length} correct-choice feedbacks to upgrade`);

  // Batch through AI
  const map = {};
  for (const batch of chunk(items, 8)) {
    const resp = await generateFeedbacks(STORY_LABELS[storyId], batch);
    for (const it of batch) {
      const val = resp?.[it.key];
      if (typeof val === "string" && val.trim()) map[it.key] = val.trim();
      else console.warn(`  ! no feedback returned for ${it.key}`);
    }
  }

  // Update EN JSON
  const enPath = join(LOCALES_DIR, "en", "scenes", `${storyId}.json`);
  const enJson = JSON.parse(readFileSync(enPath, "utf8"));
  let updatedEn = 0;
  for (const it of items) {
    const newFb = map[it.key];
    if (!newFb) continue;
    if (!enJson[it.key]?.choices?.[it.idx]) continue;
    enJson[it.key].choices[it.idx].feedback = newFb;
    updatedEn++;
  }
  writeFileSync(enPath, JSON.stringify(enJson, null, 2) + "\n", "utf8");
  console.log(`[${storyId}] EN updated: ${updatedEn} feedbacks`);

  // Update non-EN JSONs with [TODO:lang] markers so ai-translate-todos picks them up
  for (const lang of NON_EN) {
    const p = join(LOCALES_DIR, lang, "scenes", `${storyId}.json`);
    if (!existsSync(p)) continue;
    const j = JSON.parse(readFileSync(p, "utf8"));
    let n = 0;
    for (const it of items) {
      const newFb = map[it.key];
      if (!newFb) continue;
      if (!j[it.key]?.choices?.[it.idx]) continue;
      j[it.key].choices[it.idx].feedback = `[TODO:${lang}] ${newFb}`;
      n++;
    }
    writeFileSync(p, JSON.stringify(j, null, 2) + "\n", "utf8");
    console.log(`[${storyId}] ${lang}: ${n} feedbacks marked TODO`);
  }

  // Update TS file: naive string-based replacement of the exact feedback string
  // on lines that also contain isCorrect: true. Only replace when unique.
  let tsSrc = readFileSync(tsPath, "utf8");
  let tsCount = 0;
  for (const it of items) {
    const newFb = map[it.key];
    if (!newFb) continue;
    const oldFb = it.currentFeedback;
    if (!oldFb) continue;
    // Escape for regex
    const esc = oldFb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Match: feedback: "old", ...anything..., isCorrect: true  OR  isCorrect: true, ...feedback...
    // Simpler: replace only if the exact literal appears combined with isCorrect: true on the same short line
    const re = new RegExp(`feedback:\\s*"${esc}"(?=[^\\n]*isCorrect:\\s*true)`);
    const re2 = new RegExp(`(isCorrect:\\s*true[^\\n]*)feedback:\\s*"${esc}"`);
    const replacement = `feedback: ${JSON.stringify(newFb)}`;
    if (re.test(tsSrc)) { tsSrc = tsSrc.replace(re, replacement); tsCount++; }
    else if (re2.test(tsSrc)) { tsSrc = tsSrc.replace(re2, (m, pre) => pre + replacement); tsCount++; }
  }
  writeFileSync(tsPath, tsSrc, "utf8");
  console.log(`[${storyId}] TS updated: ${tsCount} feedbacks`);
}

for (const s of STORIES) {
  await processStory(s);
}
console.log("Done.");
