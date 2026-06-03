#!/usr/bin/env node
/**
 * Driver: iteratively translate all locales to zero remaining placeholders.
 * Runs export → translate → repeat, shrinking batch size on later passes.
 *
 * Usage: node scripts/ai-translate-all.mjs [lang1 lang2 ...]
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const TODO = join(ROOT, "translations-to-do.json");

function run(cmd, args, env = {}) {
  try {
    execFileSync(cmd, args, { stdio: "inherit", env: { ...process.env, ...env }, cwd: ROOT });
  } catch (e) { /* keep going */ }
}

function exportTodo() {
  run("node", ["scripts/export-missing-translations.mjs"]);
  return JSON.parse(readFileSync(TODO, "utf8"));
}

const allLangs = ["es","pt-BR","fr","de","it","pl","ru","tr","ja","ko","ar"];
const requested = process.argv.slice(2);
const langs = requested.length ? requested : allLangs;

const passes = [
  { batch: 40, concurrency: 10 },
  { batch: 15, concurrency: 8 },
  { batch: 5, concurrency: 6 },
  { batch: 2, concurrency: 4 },
];

for (const lang of langs) {
  console.log(`\n===== ${lang} =====`);
  for (const p of passes) {
    const todo = exportTodo();
    const remaining = (todo[lang] || []).length;
    if (remaining === 0) { console.log(`[${lang}] complete`); break; }
    console.log(`[${lang}] pass batch=${p.batch} concurrency=${p.concurrency}, remaining=${remaining}`);
    run("node", ["scripts/ai-translate.mjs", lang], {
      BATCH: String(p.batch),
      CONCURRENCY: String(p.concurrency),
    });
  }
  const final = exportTodo();
  console.log(`[${lang}] final remaining: ${(final[lang] || []).length}`);
}
