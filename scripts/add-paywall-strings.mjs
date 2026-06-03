#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

const paywallStrings = {
  "paywallTitle": "Unlock Full Journey",
  "paywallCompletedPrefix": "You've completed the first",
  "paywallCompletedSuffix": "for free.",
  "paywallStoriesCount": "stories",
  "paywallUnlockPrefix": "Unlock all",
  "paywallUnlockSuffix": "across the Old & New Testament and continue your biblical journey.",
  "paywallFeature1": "All Bible stories — Old & New Testament",
  "paywallFeature2": "Unlimited replays & star rating system",
  "paywallFeature3": "One-time purchase, no subscription",
  "paywallButtonUnlock": "Unlock Full Game",
  "paywallButtonProcessing": "Processing…",
  "paywallRestore": "Restore previous purchase"
};

const langs = ["ar", "de", "es", "fr", "it", "ja", "ko", "pl", "pt-BR", "ru", "tr"];

for (const lang of langs) {
  const path = `src/locales/${lang}/common.json`;
  const content = JSON.parse(readFileSync(path, "utf8"));
  
  for (const [key, value] of Object.entries(paywallStrings)) {
    content[key] = `[TODO:${lang}] ${value}`;
  }
  
  writeFileSync(path, JSON.stringify(content, null, 2) + "\n");
  console.log(`✓ Updated ${lang}/common.json`);
}

console.log(`\n✅ Added paywall strings to ${langs.length} locales`);
