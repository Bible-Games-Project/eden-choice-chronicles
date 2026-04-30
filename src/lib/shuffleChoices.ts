import { StoryChoice } from "@/data/stories/creation";

// Deterministic PRNG (mulberry32) seeded from a string so each scene visit
// has a stable order, but order varies across scenes / replays.
function hashString(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Shuffle choices deterministically based on a seed key.
 * Ensures the "correct" / positive answer does not always sit in the same slot.
 */
export function shuffleChoices(
  choices: StoryChoice[],
  seedKey: string,
): StoryChoice[] {
  if (!choices || choices.length <= 1) return choices;
  const rand = mulberry32(hashString(seedKey));
  const arr = choices.map((c, i) => ({ c, i, r: rand() }));
  arr.sort((a, b) => a.r - b.r);
  return arr.map((x) => x.c);
}
