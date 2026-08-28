import shepherdWatching from "@/assets/sprites/shepherds/shepherd-watching.webp";
import shepherdsField from "@/assets/sprites/shepherds/shepherds-field.webp";
import shepherdFearful from "@/assets/sprites/shepherds/shepherd-fearful.webp";
import angelAppearing from "@/assets/sprites/shepherds/angel-appearing.webp";
import angelAnnouncing from "@/assets/sprites/shepherds/angel-announcing.webp";
import shepherdTraveling from "@/assets/sprites/shepherds/shepherd-traveling.webp";
import shepherdWorship from "@/assets/sprites/shepherds/shepherd-worship.webp";
import shepherdPraising from "@/assets/sprites/shepherds/shepherd-praising.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set matching each story moment.
export const shepherdsSprites: Record<string, SpriteConfig> = {
  start: { left: shepherdWatching },
  sleep_consequence: { left: shepherdsField },
  wander_consequence: { left: shepherdsField },
  light: { left: angelAppearing },
  run_consequence: { left: shepherdFearful },
  attack_consequence: { left: shepherdFearful },
  message: { left: angelAnnouncing },
  doubt_consequence: { left: angelAnnouncing },
  travel: { left: shepherdTraveling },
  wait_consequence: { left: shepherdTraveling },
  gifts_consequence: { left: shepherdsField },
  worship: { left: shepherdWorship },
  silence_consequence: { left: shepherdWorship },
  return: { left: shepherdPraising },
};
