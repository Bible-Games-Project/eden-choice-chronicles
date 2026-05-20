import jesusArriving from "@/assets/sprites/demon-possessed/jesus-arriving.png";
import manTormented from "@/assets/sprites/demon-possessed/man-tormented.png";
import villagersFearful from "@/assets/sprites/demon-possessed/villagers-fearful.png";
import manKneeling from "@/assets/sprites/demon-possessed/man-kneeling.png";
import jesusCommanding from "@/assets/sprites/demon-possessed/jesus-commanding.png";
import manRestored from "@/assets/sprites/demon-possessed/man-restored.png";

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
