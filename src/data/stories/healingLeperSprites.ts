import jesusDisciplesTraveling from "@/assets/sprites/healing-leper/jesus-disciples-traveling.png";
import leperDistant from "@/assets/sprites/healing-leper/leper-distant.png";
import leperKneeling from "@/assets/sprites/healing-leper/leper-kneeling.png";
import jesusCompassion from "@/assets/sprites/healing-leper/jesus-compassion.png";
import jesusReaching from "@/assets/sprites/healing-leper/jesus-reaching.png";
import jesusTouchingLeper from "@/assets/sprites/healing-leper/jesus-touching-leper.png";
import leperHealed from "@/assets/sprites/healing-leper/leper-healed.png";

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
