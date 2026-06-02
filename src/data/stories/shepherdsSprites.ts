import shepherdWatching from "@/assets/sprites/shepherds/shepherd-watching.webp";
import shepherdFearful from "@/assets/sprites/shepherds/shepherd-fearful.webp";
import angelAnnouncing from "@/assets/sprites/shepherds/angel-announcing.webp";
import shepherdTraveling from "@/assets/sprites/shepherds/shepherd-traveling.webp";
import shepherdWorship from "@/assets/sprites/shepherds/shepherd-worship.webp";
import shepherdPraising from "@/assets/sprites/shepherds/shepherd-praising.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const shepherdsSprites: Record<string, SpriteConfig> = {
  start: { left: shepherdWatching },
  sleep_consequence: { left: shepherdWatching },
  wander_consequence: { left: shepherdWatching },
  light: { left: shepherdFearful },
  run_consequence: { left: shepherdFearful },
  attack_consequence: { left: shepherdFearful },
  message: { left: angelAnnouncing },
  doubt_consequence: { left: angelAnnouncing },
  travel: { left: shepherdTraveling },
  wait_consequence: { left: shepherdTraveling },
  gifts_consequence: { left: shepherdTraveling },
  worship: { left: shepherdWorship },
  silence_consequence: { left: shepherdWorship },
  return: { left: shepherdPraising },
};
