import jesusDisciplesArriving from "@/assets/sprites/demon-possessed/jesus-disciples-arriving.png";
import manTormented from "@/assets/sprites/demon-possessed/man-tormented.png";
import villagersFearful from "@/assets/sprites/demon-possessed/villagers-fearful.png";
import manKneeling from "@/assets/sprites/demon-possessed/man-kneeling.png";
import jesusCommanding from "@/assets/sprites/demon-possessed/jesus-commanding.png";
import manRestored from "@/assets/sprites/demon-possessed/man-restored.png";
import jesusManPeaceful from "@/assets/sprites/demon-possessed/jesus-man-peaceful.png";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable transparent portraits: exactly 3 waist-up (man-tormented, jesus-commanding, man-restored), remaining sprites knee-up.
export const demonPossessedSprites: Record<string, SpriteConfig> = {
  start: { left: jesusDisciplesArriving },
  turn_back_consequence: { left: jesusDisciplesArriving },
  hide_consequence: { left: jesusDisciplesArriving },
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
  mourn_consequence: { left: manRestored },
  restored: { left: jesusManPeaceful },
};
