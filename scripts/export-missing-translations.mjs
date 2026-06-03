#!/usr/bin/env node
/**
 * Export all [TODO:lang] placeholders to a format ready for translation.
 * 
 * Output: translations-to-do.json
 * Structure: { "es": [{ "file": "common.json", "key": "settings", "english": "Settings" }] }
 * 
 * Usage:
 *   node scripts/export-missing-translations.mjs
 *   node scripts/export-missing-translations.mjs --lang es  (only Spanish)
 *   node scripts/export-missing-translations.mjs --format csv
 */

import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const LOCALES_DIR = join(ROOT, "src/locales");
const SOURCE_LANG = "en";

const args = process.argv.slice(2);
const targetLang = args.find(a => a.startsWith("--lang="))?.split("=")[1];
const format = args.find(a => a.startsWith("--format="))?.split("=")[1] || "json";

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
      const rel = full.replace(base + "/", "");
      out.push(rel);
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

const langs = listLangs().filter(l => l !== SOURCE_LANG);
const targetLangs = targetLang ? [targetLang] : langs;

const sourceDir = join(LOCALES_DIR, SOURCE_LANG);
const sourceFiles = walkJson(sourceDir);

const result = {};
let totalMissing = 0;

for (const lang of targetLangs) {
  result[lang] = [];
  const langDir = join(LOCALES_DIR, lang);

  for (const rel of sourceFiles) {
    const sourceData = flatten(loadJson(join(sourceDir, rel)));
    const targetData = flatten(loadJson(join(langDir, rel)));

    for (const [key, englishValue] of Object.entries(sourceData)) {
      const translatedValue = targetData[key];
      
      // Check if it's a TODO placeholder or empty
      const needsTranslation = 
        !translatedValue ||
        (typeof translatedValue === "string" && translatedValue.trim() === "") ||
        (typeof translatedValue === "string" && /\[todo/i.test(translatedValue));

      if (needsTranslation) {
        result[lang].push({
          file: rel,
          key: key,
          english: englishValue,
          current: translatedValue || ""
        });
        totalMissing++;
      }
    }
  }
}

// Output based on format
if (format === "csv") {
  let csv = "Language,File,Key,English,Current\n";
  for (const [lang, items] of Object.entries(result)) {
    for (const item of items) {
      const escape = (str) => `"${String(str).replace(/"/g, '""')}"`;
      csv += `${lang},${escape(item.file)},${escape(item.key)},${escape(item.english)},${escape(item.current)}\n`;
    }
  }
  const outPath = join(ROOT, "translations-to-do.csv");
  writeFileSync(outPath, csv);
  console.log(`✅ Exported ${totalMissing} missing translations to ${outPath}`);
  
} else if (format === "markdown") {
  let md = "# Translations To-Do\n\n";
  md += `Total missing: **${totalMissing.toLocaleString()}** strings\n\n`;
  
  for (const [lang, items] of Object.entries(result)) {
    md += `## ${lang.toUpperCase()} (${items.length} strings)\n\n`;
    
    // Group by file
    const byFile = {};
    for (const item of items) {
      if (!byFile[item.file]) byFile[item.file] = [];
      byFile[item.file].push(item);
    }
    
    for (const [file, fileItems] of Object.entries(byFile)) {
      md += `### ${file}\n\n`;
      for (const item of fileItems.slice(0, 10)) {
        md += `- \`${item.key}\`: ${item.english}\n`;
      }
      if (fileItems.length > 10) {
        md += `- _(${fileItems.length - 10} more...)_\n`;
      }
      md += "\n";
    }
  }
  
  const outPath = join(ROOT, "translations-to-do.md");
  writeFileSync(outPath, md);
  console.log(`✅ Exported ${totalMissing} missing translations to ${outPath}`);
  
} else {
  // JSON format (default)
  const outPath = join(ROOT, "translations-to-do.json");
  writeFileSync(outPath, JSON.stringify(result, null, 2));
  console.log(`✅ Exported ${totalMissing} missing translations to ${outPath}`);
  console.log(`\nBreakdown by language:`);
  for (const [lang, items] of Object.entries(result)) {
    console.log(`  ${lang}: ${items.length.toLocaleString()} strings`);
  }
}
