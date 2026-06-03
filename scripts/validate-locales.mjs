#!/usr/bin/env node
/**
 * Validate locale JSON files against English (source of truth).
 *
 * Scans `src/locales/<lang>/...json` and compares every non-English file
 * to its English counterpart. Reports:
 *   - missing keys (present in en, missing in target)
 *   - extra keys   (present in target, not in en)
 *   - missing files (present in en, not in target)
 *
 * Exit code 1 if any discrepancy is found, 0 otherwise.
 * Intended for CI / GitHub Actions / pre-commit hooks.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const LOCALES_DIR = join(ROOT, "src/locales");
const SOURCE_LANG = "en";

function listLangs() {
  return readdirSync(LOCALES_DIR).filter((entry) => {
    const full = join(LOCALES_DIR, entry);
    return statSync(full).isDirectory();
  });
}

function walkJson(dir, base = dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      out.push(...walkJson(full, base));
    } else if (entry.endsWith(".json")) {
      out.push(relative(base, full));
    }
  }
  return out;
}

function flatten(obj, prefix = "") {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) {
      Object.assign(out, flatten(v, key));
    } else {
      out[key] = v;
    }
  }
  return out;
}

function loadJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

const langs = listLangs();
if (!langs.includes(SOURCE_LANG)) {
  console.error(`✖ Source language "${SOURCE_LANG}" not found in ${LOCALES_DIR}`);
  process.exit(1);
}

const sourceDir = join(LOCALES_DIR, SOURCE_LANG);
const sourceFiles = walkJson(sourceDir);

let errors = 0;
const report = [];

for (const lang of langs) {
  if (lang === SOURCE_LANG) continue;
  const langDir = join(LOCALES_DIR, lang);
  const langFiles = new Set(walkJson(langDir));

  for (const rel of sourceFiles) {
    const srcKeys = Object.keys(flatten(loadJson(join(sourceDir, rel))));

    if (!langFiles.has(rel)) {
      report.push(`[${lang}] MISSING FILE: ${rel} (${srcKeys.length} keys)`);
      errors++;
      continue;
    }

    const tgtKeys = new Set(Object.keys(flatten(loadJson(join(langDir, rel)))));
    const missing = srcKeys.filter((k) => !tgtKeys.has(k));
    const extra = [...tgtKeys].filter((k) => !srcKeys.includes(k));

    if (missing.length) {
      report.push(`[${lang}] ${rel} — missing ${missing.length} key(s):`);
      missing.forEach((k) => report.push(`    - ${k}`));
      errors += missing.length;
    }
    if (extra.length) {
      report.push(`[${lang}] ${rel} — extra ${extra.length} key(s) not in ${SOURCE_LANG}:`);
      extra.forEach((k) => report.push(`    + ${k}`));
      errors += extra.length;
    }
  }

  // Extra files in target not in source
  for (const rel of langFiles) {
    if (!sourceFiles.includes(rel)) {
      report.push(`[${lang}] EXTRA FILE (not in ${SOURCE_LANG}): ${rel}`);
      errors++;
    }
  }
}

if (errors === 0) {
  console.log(`✓ All ${langs.length - 1} locales match "${SOURCE_LANG}" (${sourceFiles.length} file(s)).`);
  process.exit(0);
} else {
  console.error(report.join("\n"));
  console.error(`\n✖ ${errors} discrepancy/discrepancies found across locales.`);
  process.exit(1);
}
