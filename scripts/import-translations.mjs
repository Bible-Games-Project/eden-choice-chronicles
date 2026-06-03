#!/usr/bin/env node
/**
 * Import translations from a JSON file and apply them to locale files.
 * 
 * Expected input format (translations.json):
 * {
 *   "es": [
 *     { "file": "common.json", "key": "settings", "translation": "Configuración" }
 *   ]
 * }
 * 
 * Usage:
 *   node scripts/import-translations.mjs translations.json
 *   node scripts/import-translations.mjs translations.json --dry-run
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const LOCALES_DIR = join(ROOT, "src/locales");

const args = process.argv.slice(2);
const inputFile = args[0];
const dryRun = args.includes("--dry-run");

if (!inputFile) {
  console.error("❌ Usage: node scripts/import-translations.mjs <translations.json> [--dry-run]");
  process.exit(1);
}

const inputPath = join(ROOT, inputFile);
let translations;

try {
  translations = JSON.parse(readFileSync(inputPath, "utf8"));
} catch (err) {
  console.error(`❌ Failed to read ${inputPath}:`, err.message);
  process.exit(1);
}

function unflatten(flat) {
  const result = {};
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split(".");
    let current = result;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) current[parts[i]] = {};
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
  }
  return result;
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

let totalApplied = 0;
let totalSkipped = 0;

for (const [lang, items] of Object.entries(translations)) {
  console.log(`\n📝 Processing ${lang}...`);
  
  // Group by file
  const byFile = {};
  for (const item of items) {
    if (!byFile[item.file]) byFile[item.file] = [];
    byFile[item.file].push(item);
  }
  
  for (const [file, fileItems] of Object.entries(byFile)) {
    const filePath = join(LOCALES_DIR, lang, file);
    
    try {
      const currentData = JSON.parse(readFileSync(filePath, "utf8"));
      const flatData = flatten(currentData);
      let changed = 0;
      
      for (const item of fileItems) {
        const translation = item.translation || item.translated || item.value;
        
        if (!translation || translation.trim() === "") {
          totalSkipped++;
          continue;
        }
        
        // Skip if still has [TODO marker
        if (/\[todo/i.test(translation)) {
          totalSkipped++;
          continue;
        }
        
        flatData[item.key] = translation;
        changed++;
        totalApplied++;
      }
      
      if (changed > 0) {
        if (!dryRun) {
          const unflattened = unflatten(flatData);
          writeFileSync(filePath, JSON.stringify(unflattened, null, 2) + "\n");
        }
        console.log(`  ${dryRun ? "[DRY RUN]" : "✓"} ${file}: ${changed} translation(s) applied`);
      }
      
    } catch (err) {
      console.error(`  ❌ ${file}: ${err.message}`);
    }
  }
}

console.log(`\n${"=".repeat(50)}`);
console.log(`✅ Total applied: ${totalApplied.toLocaleString()}`);
if (totalSkipped > 0) {
  console.log(`⚠️  Total skipped: ${totalSkipped.toLocaleString()} (empty or still [TODO])`);
}
if (dryRun) {
  console.log(`\n💡 This was a dry run. Re-run without --dry-run to apply changes.`);
} else {
  console.log(`\n💡 Run 'make validate-locales' to verify all translations.`);
}
