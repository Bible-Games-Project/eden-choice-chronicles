#!/usr/bin/env node
/**
 * Extract all story texts from TypeScript files to JSON locale files.
 * Uses TypeScript Compiler API for robust AST parsing.
 * Creates src/locales/<lang>/scenes/<storyId>.json for all 12 languages.
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const STORIES_DIR = join(ROOT, "src/data/stories");
const LOCALES_DIR = join(ROOT, "src/locales");

const LANGUAGES = ["en", "es", "pt-BR", "fr", "de", "it", "pl", "ru", "tr", "ja", "ko", "ar"];

// Story files end with the story name (not Effects, Images, Sprites)
function isStoryDataFile(filename) {
  return filename.endsWith(".ts") &&
    !filename.includes("Effects") &&
    !filename.includes("Images") &&
    !filename.includes("Sprites");
}

// Extract story ID from filename (e.g., "creation.ts" -> "creation")
function getStoryId(filename) {
  return filename.replace(/\.ts$/, "");
}

/**
 * Extract string literal value from a TypeScript node
 */
function getStringValue(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  return null;
}

/**
 * Extract a property value from an object literal
 */
function getPropertyValue(objectLiteral, propertyName) {
  if (!ts.isObjectLiteralExpression(objectLiteral)) return null;
  
  for (const property of objectLiteral.properties) {
    if (ts.isPropertyAssignment(property)) {
      const name = property.name;
      if (ts.isIdentifier(name) && name.text === propertyName) {
        return property.initializer;
      }
    }
  }
  return null;
}

/**
 * Extract choices array from a scene object
 */
function extractChoices(sceneObject) {
  const choices = [];
  const choicesNode = getPropertyValue(sceneObject, "choices");
  
  if (!choicesNode || !ts.isArrayLiteralExpression(choicesNode)) {
    return choices;
  }
  
  for (const element of choicesNode.elements) {
    if (ts.isObjectLiteralExpression(element)) {
      const textNode = getPropertyValue(element, "text");
      const feedbackNode = getPropertyValue(element, "feedback");
      
      const text = textNode ? getStringValue(textNode) : null;
      const feedback = feedbackNode ? getStringValue(feedbackNode) : null;
      
      if (text) {
        choices.push({
          text,
          feedback: feedback || ""
        });
      }
    }
  }
  
  return choices;
}

/**
 * Extract all scenes from a TypeScript source file using AST parsing
 */
function extractScenes(sourceCode, storyId) {
  const scenes = {};
  
  // Parse the TypeScript file into an AST
  const sourceFile = ts.createSourceFile(
    `${storyId}.ts`,
    sourceCode,
    ts.ScriptTarget.Latest,
    true
  );
  
  // Find the exported scenes variable (e.g., "export const creationScenes")
  const expectedVarName = `${storyId}Scenes`;
  
  function visit(node) {
    // Look for: export const <storyId>Scenes: Record<string, StoryScene> = { ... }
    if (ts.isVariableStatement(node)) {
      const hasExport = node.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
      
      if (hasExport) {
        for (const declaration of node.declarationList.declarations) {
          if (ts.isVariableDeclaration(declaration) &&
              ts.isIdentifier(declaration.name) &&
              declaration.name.text === expectedVarName) {
            
            // Found the scenes object
            const initializer = declaration.initializer;
            if (initializer && ts.isObjectLiteralExpression(initializer)) {
              // Extract each scene
              for (const property of initializer.properties) {
                if (ts.isPropertyAssignment(property)) {
                  const sceneId = ts.isIdentifier(property.name) ? property.name.text : null;
                  const sceneObject = property.initializer;
                  
                  if (sceneId && ts.isObjectLiteralExpression(sceneObject)) {
                    const titleNode = getPropertyValue(sceneObject, "title");
                    const textNode = getPropertyValue(sceneObject, "text");
                    
                    const title = titleNode ? getStringValue(titleNode) : "";
                    const text = textNode ? getStringValue(textNode) : "";
                    const choices = extractChoices(sceneObject);
                    
                    scenes[sceneId] = {
                      title,
                      text,
                      choices
                    };
                  }
                }
              }
            }
          }
        }
      }
    }
    
    ts.forEachChild(node, visit);
  }
  
  visit(sourceFile);
  return scenes;
}

/**
 * Create a locale JSON file for a story
 */
function createLocaleFile(lang, storyId, scenes) {
  const scenesDir = join(LOCALES_DIR, lang, "scenes");
  mkdirSync(scenesDir, { recursive: true });
  
  const outputPath = join(scenesDir, `${storyId}.json`);
  
  if (lang === "en") {
    // English: use extracted texts as-is
    writeFileSync(outputPath, JSON.stringify(scenes, null, 2) + "\n", "utf8");
  } else {
    // Other languages: create structure with TODO placeholders
    const translated = {};
    
    for (const [sceneId, scene] of Object.entries(scenes)) {
      translated[sceneId] = {
        title: `[TODO:${lang}] ${scene.title}`,
        text: `[TODO:${lang}] ${scene.text}`,
        choices: scene.choices.map(c => ({
          text: `[TODO:${lang}] ${c.text}`,
          feedback: c.feedback ? `[TODO:${lang}] ${c.feedback}` : ""
        }))
      };
    }
    
    writeFileSync(outputPath, JSON.stringify(translated, null, 2) + "\n", "utf8");
  }
}

/**
 * Validate extraction by checking for common issues
 */
function validateScenes(storyId, scenes) {
  const issues = [];
  const sceneCount = Object.keys(scenes).length;
  let totalChoices = 0;
  let choicesWithFeedback = 0;
  
  for (const [sceneId, scene] of Object.entries(scenes)) {
    if (!scene.title) {
      issues.push(`Scene ${sceneId}: missing title`);
    }
    if (!scene.text) {
      issues.push(`Scene ${sceneId}: missing text`);
    }
    if (!scene.choices || scene.choices.length === 0) {
      issues.push(`Scene ${sceneId}: no choices found`);
    }
    
    totalChoices += scene.choices.length;
    choicesWithFeedback += scene.choices.filter(c => c.feedback).length;
  }
  
  return {
    sceneCount,
    totalChoices,
    choicesWithFeedback,
    issues
  };
}

// Main execution
console.log("🌍 Extracting story texts from TypeScript to JSON using AST parsing...\n");

const storyFiles = readdirSync(STORIES_DIR).filter(isStoryDataFile);
let extracted = 0;
let failed = 0;
const allStats = [];

for (const filename of storyFiles) {
  const storyId = getStoryId(filename);
  const filePath = join(STORIES_DIR, filename);
  
  try {
    const content = readFileSync(filePath, "utf8");
    const scenes = extractScenes(content, storyId);
    
    if (!scenes || Object.keys(scenes).length === 0) {
      console.log(`❌ ${storyId}: No scenes extracted`);
      failed++;
      continue;
    }
    
    // Validate extraction
    const stats = validateScenes(storyId, scenes);
    
    if (stats.issues.length > 0) {
      console.log(`⚠️  ${storyId}: ${stats.sceneCount} scenes, ${stats.totalChoices} choices`);
      console.log(`   Issues: ${stats.issues.join(", ")}`);
    }
    
    // Create files for all languages
    for (const lang of LANGUAGES) {
      createLocaleFile(lang, storyId, scenes);
    }
    
    console.log(`✓ ${storyId}: ${stats.sceneCount} scenes, ${stats.totalChoices} choices (${stats.choicesWithFeedback} with feedback) → ${LANGUAGES.length} languages`);
    extracted++;
    allStats.push({ storyId, ...stats });
    
  } catch (error) {
    console.log(`❌ ${storyId}: Error - ${error.message}`);
    failed++;
  }
}

console.log(`\n${"=".repeat(60)}`);
console.log(`✅ Extracted ${extracted} stories (${failed} failed)`);
console.log(`📁 Created ${extracted * LANGUAGES.length} locale files in src/locales/*/scenes/`);

// Summary statistics
const totalScenes = allStats.reduce((sum, s) => sum + s.sceneCount, 0);
const totalChoices = allStats.reduce((sum, s) => sum + s.totalChoices, 0);
const totalFeedback = allStats.reduce((sum, s) => sum + s.choicesWithFeedback, 0);

console.log(`\n📊 Summary:`);
console.log(`   Total scenes: ${totalScenes}`);
console.log(`   Total choices: ${totalChoices}`);
console.log(`   Choices with feedback: ${totalFeedback} (${Math.round(totalFeedback / totalChoices * 100)}%)`);
console.log(`   Average choices per story: ${Math.round(totalChoices / extracted)}`);

// Show top 5 stories by choice count
console.log(`\n🏆 Top 5 stories by choice count:`);
const top5 = allStats
  .sort((a, b) => b.totalChoices - a.totalChoices)
  .slice(0, 5);

top5.forEach((s, i) => {
  console.log(`   ${i + 1}. ${s.storyId}: ${s.totalChoices} choices, ${s.sceneCount} scenes`);
});

if (failed > 0) {
  console.log(`\n⚠️  ${failed} stories failed to extract. Check errors above.`);
  process.exit(1);
}

console.log(`\n✨ All done! Run "node scripts/validate-locales.mjs" to verify.`);
