#!/usr/bin/env node
/**
 * Walk every locale file, find [TODO:lang] / empty placeholders (including
 * those inside arrays like choices[].text), translate using Lovable AI Gateway,
 * and write results back in place. Preserves JSON structure (arrays stay arrays).
 *
 * Usage:
 *   node scripts/ai-translate-todos.mjs            # all langs
 *   node scripts/ai-translate-todos.mjs es it fr   # subset
 *   BATCH=50 CONCURRENCY=8 node scripts/ai-translate-todos.mjs
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const LOCALES_DIR = join(ROOT, "src/locales");
const SOURCE = "en";

const API_KEY = process.env.LOVABLE_API_KEY;
if (!API_KEY) { console.error("LOVABLE_API_KEY missing"); process.exit(1); }

const MODEL = process.env.MODEL || "google/gemini-2.5-flash";
const BATCH = parseInt(process.env.BATCH || "50", 10);
const CONCURRENCY = parseInt(process.env.CONCURRENCY || "8", 10);
const MAX_RETRIES = 4;

const LANG_NAMES = {
  es: "Spanish (Spain)", "pt-BR": "Brazilian Portuguese", fr: "French",
  de: "German", it: "Italian", pl: "Polish", ru: "Russian", tr: "Turkish",
  ja: "Japanese", ko: "Korean", ar: "Arabic",
};

const allLangs = readdirSync(LOCALES_DIR).filter((e) =>
  statSync(join(LOCALES_DIR, e)).isDirectory() && e !== SOURCE
);
const requested = process.argv.slice(2);
const langs = requested.length ? requested : allLangs;

function walkJson(dir, base = dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walkJson(full, base));
    else if (entry.endsWith(".json")) out.push(full.replace(base + "/", ""));
  }
  return out;
}

// Walk two parallel structures (source en + target), call visit(srcStr, tgtStr, setter)
function walkParallel(src, tgt, setter) {
  if (Array.isArray(src) && Array.isArray(tgt)) {
    for (let i = 0; i < src.length; i++) {
      walkParallel(src[i], tgt[i], (v) => { tgt[i] = v; });
    }
  } else if (src && typeof src === "object" && tgt && typeof tgt === "object") {
    for (const k of Object.keys(src)) {
      walkParallel(src[k], tgt[k], (v) => { tgt[k] = v; });
    }
  } else if (typeof src === "string") {
    setter._src = src;
    setter._tgt = typeof tgt === "string" ? tgt : "";
    setter(setter._tgt); // no-op write, but expose
    // We can't really collect via setter — handled below
  }
}

// Collect TODO/empty entries; returns [{path:[...], src, set(value)}]
function collect(src, tgt) {
  const out = [];
  function rec(s, t, parent, key) {
    if (Array.isArray(s)) {
      if (!Array.isArray(t)) { parent[key] = []; t = parent[key]; }
      for (let i = 0; i < s.length; i++) {
        if (t[i] === undefined) t[i] = (typeof s[i] === "object" ? (Array.isArray(s[i]) ? [] : {}) : "");
        rec(s[i], t[i], t, i);
      }
    } else if (s && typeof s === "object") {
      if (!t || typeof t !== "object" || Array.isArray(t)) { parent[key] = {}; t = parent[key]; }
      for (const k of Object.keys(s)) {
        if (t[k] === undefined) t[k] = (typeof s[k] === "object" ? (Array.isArray(s[k]) ? [] : {}) : "");
        rec(s[k], t[k], t, k);
      }
    } else if (typeof s === "string") {
      const cur = typeof t === "string" ? t : "";
      const needs = s.trim() !== "" && (cur.trim() === "" || /\[todo/i.test(cur));
      if (needs) {
        out.push({ src: s, set: (v) => { parent[key] = v; } });
      }
    }
  }
  // wrap root
  const wrap = { root: tgt };
  rec(src, tgt, wrap, "root");
  return { items: out, root: wrap.root };
}

async function callAI(messages, attempt = 0) {
  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
      body: JSON.stringify({ model: MODEL, messages, temperature: 0.2, response_format: { type: "json_object" } }),
    });
    if (res.status === 429 || res.status >= 500) throw new Error(`HTTP ${res.status}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const data = await res.json();
    return data.choices?.[0]?.message?.content || "";
  } catch (err) {
    if (attempt < MAX_RETRIES) {
      await new Promise((r) => setTimeout(r, 1500 * Math.pow(2, attempt)));
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
  if (s !== -1 && e > s) { try { return JSON.parse(t.slice(s, e + 1)); } catch {} }
  throw new Error("bad JSON from AI");
}

async function translateBatch(langName, items) {
  const payload = {};
  items.forEach((it, i) => { payload[String(i)] = it.src; });
  const sys = `You are a professional translator for a narrative Bible storytelling game. Translate every English string into ${langName}.
Rules:
- Preserve newline characters (\\n) exactly where they appear.
- Reverent, vivid, second-person narrative tone.
- Keep biblical names in their conventional ${langName} form.
- Keep UI strings short.
- Output a single JSON object whose keys are the SAME numeric string keys from the input and whose values are the translated strings. No extra keys, no commentary.`;
  const user = `Translate every value below to ${langName}. Return JSON with the same keys:\n${JSON.stringify(payload)}`;
  const content = await callAI([
    { role: "system", content: sys },
    { role: "user", content: user },
  ]);
  const parsed = extractJson(content) || {};
  return items.map((_, i) => {
    const v = parsed[String(i)] ?? parsed[i];
    return typeof v === "string" ? v : null;
  });
}

async function processLang(lang) {
  const langName = LANG_NAMES[lang] || lang;
  const sourceDir = join(LOCALES_DIR, SOURCE);
  const targetDir = join(LOCALES_DIR, lang);
  const files = walkJson(sourceDir);

  // Collect across all files
  const fileEntries = []; // { rel, srcJson, tgtJson, items }
  let total = 0;
  for (const rel of files) {
    const srcJson = JSON.parse(readFileSync(join(sourceDir, rel), "utf8"));
    let tgtJson;
    try { tgtJson = JSON.parse(readFileSync(join(targetDir, rel), "utf8")); }
    catch { tgtJson = Array.isArray(srcJson) ? [] : {}; }
    const { items, root } = collect(srcJson, tgtJson);
    if (items.length) {
      fileEntries.push({ rel, srcJson, tgtJson: root, items });
      total += items.length;
    }
  }
  if (!total) { console.log(`[${lang}] nothing to translate`); return; }
  console.log(`[${lang}] ${total} strings across ${fileEntries.length} files (batch=${BATCH}, concurrency=${CONCURRENCY})`);

  // Flat list of all items with backref
  const allItems = [];
  for (const fe of fileEntries) for (const it of fe.items) allItems.push(it);

  // Build batches
  const batches = [];
  for (let i = 0; i < allItems.length; i += BATCH) batches.push(allItems.slice(i, i + BATCH));

  let done = 0, cursor = 0, okCount = 0;
  async function worker() {
    while (cursor < batches.length) {
      const idx = cursor++;
      const batch = batches[idx];
      try {
        const out = await translateBatch(langName, batch);
        for (let i = 0; i < batch.length; i++) {
          const t = out[i];
          if (typeof t === "string" && t.trim() !== "" && !/\[todo/i.test(t)) {
            batch[i].set(t);
            okCount++;
          }
        }
      } catch (err) {
        console.error(`[${lang}] batch ${idx} failed: ${err.message}`);
      }
      done++;
      if (done % 5 === 0 || done === batches.length) console.log(`[${lang}] ${done}/${batches.length} batches`);
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, batches.length) }, worker));

  // Write back files
  for (const fe of fileEntries) {
    writeFileSync(join(targetDir, fe.rel), JSON.stringify(fe.tgtJson, null, 2) + "\n");
  }
  console.log(`[${lang}] applied ${okCount}/${total}`);
}

(async () => {
  for (const lang of langs) {
    console.log(`\n===== ${lang} =====`);
    try { await processLang(lang); }
    catch (e) { console.error(`[${lang}] fatal: ${e.message}`); }
  }
})();
