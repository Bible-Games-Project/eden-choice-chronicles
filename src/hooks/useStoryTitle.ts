import { useState, useEffect } from "react";
import { useSettings } from "./useSettings";

// Cache: "storyId:lang" -> storyTitle string
const titleCache: Record<string, string> = {};

/**
 * Convert a storyId to the scene JSON filename stem.
 * Mirrors the getModuleName logic in useStoryScenes.ts.
 */
function getModuleName(storyId: string): string {
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
    "feeding-5000": "feeding5000",
  };
  if (specialCases[storyId]) return specialCases[storyId];
  return storyId.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

/**
 * Returns the translated story title for the given storyId in the current language.
 * Falls back to the English title, then to the storyId itself.
 */
export function useStoryTitle(storyId: string): string {
  const { language } = useSettings();
  const cacheKey = `${storyId}:${language}`;
  const [title, setTitle] = useState<string>(() => titleCache[cacheKey] ?? "");

  useEffect(() => {
    if (titleCache[cacheKey]) {
      setTitle(titleCache[cacheKey]);
      return;
    }

    const moduleName = getModuleName(storyId);

    async function load() {
      let resolvedTitle: string | undefined;

      // Try current language first
      try {
        const mod = await import(`@/locales/${language}/scenes/${moduleName}.json`);
        resolvedTitle = (mod.default as { storyTitle?: string }).storyTitle;
      } catch {
        // ignore
      }

      // Fall back to English
      if (!resolvedTitle && language !== "en") {
        try {
          const mod = await import(`@/locales/en/scenes/${moduleName}.json`);
          resolvedTitle = (mod.default as { storyTitle?: string }).storyTitle;
        } catch {
          // ignore
        }
      }

      const result = resolvedTitle ?? storyId;
      titleCache[cacheKey] = result;
      setTitle(result);
    }

    void load();
  }, [storyId, language, cacheKey]);

  return title;
}
