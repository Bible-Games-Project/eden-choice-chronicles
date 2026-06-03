import { useState, useEffect } from "react";
import { useSettings } from "./useSettings";
import type { StoryScene } from "@/data/stories/creation";

interface SceneTranslation {
  title: string;
  text: string;
  choices: Array<{
    text: string;
    feedback?: string;
  }>;
}

interface StoryTranslations {
  [sceneId: string]: SceneTranslation;
}

// Cache for loaded translations and metadata
const translationCache: Record<string, StoryTranslations> = {};
const metadataCache: Record<string, Record<string, StoryScene>> = {};

/**
 * Hook to load story scenes with i18n support.
 * 
 * Loads scene metadata (structure, nextScene, tags, etc.) from TypeScript files
 * and merges with translated text from JSON based on current language.
 * 
 * @param storyId - The story identifier (e.g., "creation", "adam-eve")
 * @returns Object with scenes, loading state, and error
 */
export function useStoryScenes(storyId: string) {
  const { language } = useSettings();
  const [scenes, setScenes] = useState<Record<string, StoryScene> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadScenes() {
      try {
        setLoading(true);
        setError(null);

        // Load metadata (structure) from TypeScript file
        const metadata = await loadMetadata(storyId);
        
        // Load translations from JSON
        const translations = await loadTranslations(storyId, language);

        if (cancelled) return;

        // Merge metadata with translations
        const mergedScenes = mergeScenes(metadata, translations);
        setScenes(mergedScenes);
      } catch (err) {
        if (!cancelled) {
          console.error(`Failed to load scenes for story "${storyId}":`, err);
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadScenes();

    return () => {
      cancelled = true;
    };
  }, [storyId, language]);

  return { scenes, loading, error };
}

/**
 * Load story metadata (structure, nextScene, tags, etc.) from TypeScript files.
 * Uses dynamic import with caching.
 */
async function loadMetadata(storyId: string): Promise<Record<string, StoryScene>> {
  // Check cache first
  if (metadataCache[storyId]) {
    return metadataCache[storyId];
  }

  // Convert storyId to the TypeScript module name
  // e.g., "adam-eve" -> "adamEve", "tower-babel" -> "babel"
  const moduleName = getModuleName(storyId);

  try {
    // Dynamically import the TypeScript file
    const module = await import(`@/data/stories/${moduleName}.ts`);
    const scenes = module[`${moduleName}Scenes`] as Record<string, StoryScene>;

    if (!scenes) {
      throw new Error(`No scenes export found for story "${storyId}"`);
    }

    // Cache it
    metadataCache[storyId] = scenes;
    return scenes;
  } catch (err) {
    throw new Error(`Failed to load metadata for story "${storyId}": ${err}`);
  }
}

/**
 * Load translations for a story from JSON files.
 * Uses dynamic import with caching.
 */
async function loadTranslations(
  storyId: string,
  language: string
): Promise<StoryTranslations> {
  const cacheKey = `${storyId}:${language}`;

  // Check cache first
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }

  try {
    // Dynamically import the JSON file
    const module = await import(`@/locales/${language}/scenes/${storyId}.json`);
    const translations = module.default as StoryTranslations;

    // Cache it
    translationCache[cacheKey] = translations;
    return translations;
  } catch (err) {
    throw new Error(`Failed to load translations for "${storyId}" in language "${language}": ${err}`);
  }
}

/**
 * Merge metadata (from TypeScript) with translations (from JSON).
 * Translations override text fields: title, text, choices[].text, choices[].feedback
 */
function mergeScenes(
  metadata: Record<string, StoryScene>,
  translations: StoryTranslations
): Record<string, StoryScene> {
  const merged: Record<string, StoryScene> = {};

  for (const [sceneId, metaScene] of Object.entries(metadata)) {
    const translation = translations[sceneId];

    if (!translation) {
      console.warn(`No translation found for scene "${sceneId}", using metadata text`);
      merged[sceneId] = metaScene;
      continue;
    }

    // Merge: keep all metadata fields, override text fields from translation
    merged[sceneId] = {
      ...metaScene,
      title: translation.title,
      text: translation.text,
      choices: metaScene.choices.map((choice, index) => {
        const translatedChoice = translation.choices[index];
        
        if (!translatedChoice) {
          console.warn(
            `No translation found for choice ${index} in scene "${sceneId}", using metadata text`
          );
          return choice;
        }

        return {
          ...choice,
          text: translatedChoice.text,
          feedback: translatedChoice.feedback ?? choice.feedback,
        };
      }),
    };
  }

  return merged;
}

/**
 * Convert storyId to the module name used in TypeScript imports.
 * 
 * Special cases:
 * - "adam-eve" -> "adamEve"
 * - "tower-babel" -> "babel"
 * - Most others follow pattern: "story-name" -> "storyName"
 */
function getModuleName(storyId: string): string {
  // Special case mappings
  const specialCases: Record<string, string> = {
    "tower-babel": "babel",
    "noah-flood": "noah",
    "call-abraham": "abraham",
    "sodom-gomorrah": "sodom",
    "rebekah-servant": "rebekah",
    "plagues-egypt": "plagues",
    "crossing-red-sea": "redSea",
    "manna-desert": "manna",
    "balaam-donkey": "balaam",
    "fall-jericho": "jericho",
    "sin-achan": "sinAchan",
    "samuel-called": "samuelCalled",
    "saul-king": "saulKing",
    "fall-jerusalem": "fallJerusalem",
    "wise-men": "wiseMen",
    "flight-egypt": "flightEgypt",
    "jesus-temple": "jesusTemple",
    "wedding-cana": "weddingCana",
    "woman-blood": "womanBlood",
    "raising-lazarus": "lazarus",
    "sermon-mount": "sermonMount",
    "lords-prayer": "lordsPrayer",
    "rich-man-lazarus": "richLazarus",
    "pharisee-tax": "phariseeTax",
    "woman-adultery": "womanAdultery",
    "road-emmaus": "emmaus",
  };

  if (specialCases[storyId]) {
    return specialCases[storyId];
  }

  // Convert kebab-case to camelCase
  return storyId.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}
