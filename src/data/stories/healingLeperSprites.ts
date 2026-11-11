import jesusDisciplesTraveling from "@/assets/sprites/healing-leper/jesus-disciples-traveling.webp";
import leperDistant from "@/assets/sprites/healing-leper/leper-distant.webp";
import leperKneeling from "@/assets/sprites/healing-leper/leper-kneeling.webp";
import jesusCompassion from "@/assets/sprites/healing-leper/jesus-compassion.webp";
import jesusReaching from "@/assets/sprites/healing-leper/jesus-reaching.webp";
import jesusTouchingLeper from "@/assets/sprites/healing-leper/jesus-touching-leper.webp";
import leperHealed from "@/assets/sprites/healing-leper/leper-healed.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable transparent portraits: exactly 3 waist-up, remaining sprites knee-up.
export const healingLeperSprites: Record<string, SpriteConfig> = {
  start: { left: jesusDisciplesTraveling },
  hide_consequence: { left: leperDistant },
  approach: { left: leperDistant },
  anger_consequence: { left: leperDistant },
  turn_consequence: { left: leperDistant },
  kneel: { left: leperKneeling },
  demand_consequence: { left: leperKneeling },
  plea: { left: jesusCompassion },
  doubt_consequence: { left: jesusCompassion },
  touch: { left: jesusReaching },
  pull_consequence: { left: jesusReaching },
  warn_consequence: { left: jesusReaching },
  heal: { left: jesusTouchingLeper },
  boast_consequence: { left: leperHealed },
  send: { left: jesusDisciplesTraveling },
};
