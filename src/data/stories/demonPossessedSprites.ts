import jesusArriving from "@/assets/sprites/demon-possessed/jesus-arriving.webp";
import manTormented from "@/assets/sprites/demon-possessed/man-tormented.webp";
import villagersFearful from "@/assets/sprites/demon-possessed/villagers-fearful.webp";
import manKneeling from "@/assets/sprites/demon-possessed/man-kneeling.webp";
import jesusCommanding from "@/assets/sprites/demon-possessed/jesus-commanding.webp";
import manRestored from "@/assets/sprites/demon-possessed/man-restored.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const demonPossessedSprites: Record<string, SpriteConfig> = {
  start: { left: jesusArriving },
  turn_back_consequence: { left: jesusArriving },
  hide_consequence: { left: jesusArriving },
  tombs: { left: manTormented },
  mock_consequence: { left: manTormented },
  villagers: { left: villagersFearful },
  flee_consequence: { left: villagersFearful },
  argue_consequence: { left: villagersFearful },
  confront: { left: manKneeling },
  step_consequence: { left: manKneeling },
  command: { left: jesusCommanding },
  doubt_consequence: { left: jesusCommanding },
  cover_consequence: { left: jesusCommanding },
  pigs: { left: jesusCommanding },
  mourn_consequence: { left: jesusCommanding },
  restored: { left: manRestored },
};
