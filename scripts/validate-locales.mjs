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
    if (Array.isArray(v)) {
      v.forEach((item, i) => {
        const itemKey = `${key}[${i}]`;
        if (item && typeof item === "object") {
          Object.assign(out, flatten(item, itemKey));
        } else {
          out[itemKey] = item;
        }
      });
    } else if (v && typeof v === "object") {
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
let totalKeys = 0;
let totalPlaceholders = 0;

// First pass: count total keys in source
for (const rel of sourceFiles) {
  const srcKeys = Object.keys(flatten(loadJson(join(sourceDir, rel))));
  totalKeys += srcKeys.length;
}

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

    const tgtFlat = flatten(loadJson(join(langDir, rel)));
    const tgtKeys = new Set(Object.keys(tgtFlat));
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

    // Check for empty values and TODO placeholders
    const issues = Object.entries(tgtFlat)
      .filter(([_, value]) => {
        if (typeof value !== "string") return false;
        const val = value.trim();
        // Empty or contains [TODO (case-insensitive)
        return val === "" || /\[todo/i.test(val);
      })
      .map(([key, value]) => {
        const val = value.trim();
        if (val === "") return { key, issue: "empty" };
        return { key, issue: "untranslated" };
      });

    if (issues.length > 0) {
      const empty = issues.filter(i => i.issue === "empty");
      const untranslated = issues.filter(i => i.issue === "untranslated");
      
      if (empty.length > 0) {
        report.push(`[${lang}] ${rel} — ${empty.length} empty value(s):`);
        empty.forEach(({ key }) => report.push(`    ✗ ${key} (empty string)`));
        errors += empty.length;
      }
      
      if (untranslated.length > 0) {
        totalPlaceholders += untranslated.length;
        report.push(`[${lang}] ${rel} — ${untranslated.length} untranslated placeholder(s):`);
        untranslated.forEach(({ key }) => report.push(`    ⚠ ${key}`));
        errors += untranslated.length;
      }
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
  console.log(`✓ All ${langs.length - 1} locales match "${SOURCE_LANG}" (${sourceFiles.length} file(s), ${totalKeys.toLocaleString()} strings).`);
  process.exit(0);
} else {
  console.error(report.join("\n"));
  console.error(`\n✖ ${errors} issue(s) found across locales (${totalPlaceholders} untranslated placeholders).`);
  process.exit(1);
}
