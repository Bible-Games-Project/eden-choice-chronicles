import leperDistant from "@/assets/sprites/healing-leper/leper-distant.png";
import leperKneeling from "@/assets/sprites/healing-leper/leper-kneeling.png";
import jesusCompassion from "@/assets/sprites/healing-leper/jesus-compassion.png";
import jesusTouching from "@/assets/sprites/healing-leper/jesus-touching.png";
import leperHealed from "@/assets/sprites/healing-leper/leper-healed.png";
import jesusBlessing from "@/assets/sprites/healing-leper/jesus-blessing.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const healingLeperSprites: Record<string, SpriteConfig> = {
  start: { left: leperDistant },
  hide_consequence: { left: leperDistant },
  approach: { left: leperDistant },
  anger_consequence: { left: leperDistant },
  turn_consequence: { left: leperDistant },
  kneel: { left: leperKneeling },
  demand_consequence: { left: leperKneeling },
  plea: { left: jesusCompassion },
  doubt_consequence: { left: jesusCompassion },
  touch: { left: jesusTouching },
  pull_consequence: { left: jesusTouching },
  warn_consequence: { left: jesusTouching },
  heal: { left: leperHealed },
  boast_consequence: { left: leperHealed },
  send: { left: jesusBlessing },
};
