#!/usr/bin/env node
/**
 * AI-powered batch translator using Lovable AI Gateway.
 *
 * Reads translations-to-do.json (produced by export-missing-translations.mjs),
 * translates every [TODO:lang] placeholder using google/gemini-2.5-flash,
 * and writes results directly into src/locales/<lang>/...json.
 *
 * Usage:
 *   node scripts/ai-translate.mjs              # all languages
 *   node scripts/ai-translate.mjs es fr        # only listed languages
 *   BATCH=60 CONCURRENCY=10 node scripts/ai-translate.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const LOCALES_DIR = join(ROOT, "src/locales");
const TODO_FILE = join(ROOT, "translations-to-do.json");

const API_KEY = process.env.LOVABLE_API_KEY;
if (!API_KEY) {
  console.error("LOVABLE_API_KEY is missing");
  process.exit(1);
}

const MODEL = process.env.MODEL || "google/gemini-2.5-flash";
const BATCH = parseInt(process.env.BATCH || "40", 10);
const CONCURRENCY = parseInt(process.env.CONCURRENCY || "8", 10);
const MAX_RETRIES = 4;

const LANG_NAMES = {
  es: "Spanish (Spain)",
  "pt-BR": "Brazilian Portuguese",
  fr: "French",
  de: "German",
  it: "Italian",
  pl: "Polish",
  ru: "Russian",
  tr: "Turkish",
  ja: "Japanese",
  ko: "Korean",
  ar: "Arabic",
};

const requestedLangs = process.argv.slice(2);
const todo = JSON.parse(readFileSync(TODO_FILE, "utf8"));
const langs = requestedLangs.length ? requestedLangs : Object.keys(todo);

function flatten(obj, prefix = "") {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) Object.assign(out, flatten(v, key));
    else out[key] = v;
  }
  return out;
}
function unflatten(flat) {
  const result = {};
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split(".");
    let cur = result;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!cur[parts[i]] || typeof cur[parts[i]] !== "object") cur[parts[i]] = {};
      cur = cur[parts[i]];
    }
    cur[parts[parts.length - 1]] = value;
  }
  return result;
}

async function callAI(messages, attempt = 0) {
  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.2,
      }),
    });
    if (res.status === 429 || res.status >= 500) {
      throw new Error(`HTTP ${res.status}`);
    }
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);
    }
    const data = await res.json();
    return data.choices?.[0]?.message?.content || "";
  } catch (err) {
    if (attempt < MAX_RETRIES) {
      const wait = 1500 * Math.pow(2, attempt);
      await new Promise((r) => setTimeout(r, wait));
      return callAI(messages, attempt + 1);
    }
    throw err;
  }
}

function extractJson(text) {
  // Strip code fences if present
  let t = text.trim();
  if (t.startsWith("```")) {
    t = t.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
  }
  // Try direct parse
  try { return JSON.parse(t); } catch {}
  // Find first [ ... ] or { ... }
  const start = t.search(/[\[{]/);
  const end = Math.max(t.lastIndexOf("]"), t.lastIndexOf("}"));
  if (start !== -1 && end > start) {
    try { return JSON.parse(t.slice(start, end + 1)); } catch {}
  }
  throw new Error("Could not parse JSON from AI response");
}

async function translateBatch(lang, items) {
  const langName = LANG_NAMES[lang] || lang;
  const payload = items.map((it, i) => ({ i, text: it.english }));
  const sys = `You are a professional translator for a narrative Bible storytelling game.
Translate every English string into ${langName}.
Rules:
- Preserve newline characters (\\n) and any surrounding punctuation exactly.
- Keep the same tone: reverent, vivid, second-person narrative.
- Do not add quotes or commentary. Output ONLY a JSON array.
- Each output element: {"i": <index>, "t": "<translation>"}.
- Translate ALL ${payload.length} items, in order. Index must match input.
- Keep proper biblical names in their conventional ${langName} form.
- For very short UI strings, keep them short.`;
  const user = `Translate to ${langName}:\n${JSON.stringify(payload)}`;
  const content = await callAI([
    { role: "system", content: sys },
    { role: "user", content: user },
  ]);
  const parsed = extractJson(content);
  const arr = Array.isArray(parsed) ? parsed : parsed.translations || [];
  const map = new Map();
  for (const row of arr) {
    if (row && typeof row.i === "number" && typeof row.t === "string") {
      map.set(row.i, row.t);
    }
  }
  return items.map((_, i) => map.get(i) ?? null);
}

async function processLang(lang) {
  const items = (todo[lang] || []).filter((it) => typeof it.english === "string" && it.english.trim() !== "");
  if (!items.length) {
    console.log(`[${lang}] nothing to translate`);
    return;
  }
  console.log(`[${lang}] ${items.length} strings, batch=${BATCH}, concurrency=${CONCURRENCY}`);

  // Group items by file for later writing
  const byFile = new Map();
  // Build batches
  const batches = [];
  for (let i = 0; i < items.length; i += BATCH) batches.push(items.slice(i, i + BATCH));

  const results = new Array(batches.length);
  let done = 0;
  let cursor = 0;
  async function worker() {
    while (cursor < batches.length) {
      const idx = cursor++;
      try {
        results[idx] = await translateBatch(lang, batches[idx]);
      } catch (err) {
        console.error(`[${lang}] batch ${idx} failed: ${err.message}`);
        results[idx] = batches[idx].map(() => null);
      }
      done++;
      if (done % 5 === 0 || done === batches.length) {
        console.log(`[${lang}] ${done}/${batches.length} batches`);
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, batches.length) }, worker));

  // Flatten results back to items
  let okCount = 0;
  for (let b = 0; b < batches.length; b++) {
    const batch = batches[b];
    const out = results[b] || [];
    for (let i = 0; i < batch.length; i++) {
      const it = batch[i];
      const t = out[i];
      if (typeof t === "string" && t.trim() !== "" && !/\[todo/i.test(t)) {
        if (!byFile.has(it.file)) byFile.set(it.file, []);
        byFile.get(it.file).push({ key: it.key, translation: t });
        okCount++;
      }
    }
  }

  // Write back to locale files
  for (const [file, entries] of byFile) {
    const fp = join(LOCALES_DIR, lang, file);
    const current = JSON.parse(readFileSync(fp, "utf8"));
    const flat = flatten(current);
    for (const { key, translation } of entries) flat[key] = translation;
    writeFileSync(fp, JSON.stringify(unflatten(flat), null, 2) + "\n");
  }
  console.log(`[${lang}] applied ${okCount}/${items.length} translations across ${byFile.size} files`);
}

(async () => {
  for (const lang of langs) {
    if (!todo[lang]) {
      console.log(`[${lang}] not in todo file, skipping`);
      continue;
    }
    await processLang(lang);
  }
})();
