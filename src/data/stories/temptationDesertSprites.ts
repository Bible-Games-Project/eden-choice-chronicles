import jesusFasting from "@/assets/sprites/temptation/jesus-fasting.png";
import devilStone from "@/assets/sprites/temptation/devil-stone.png";
import jesusRefusing from "@/assets/sprites/temptation/jesus-refusing.png";
import devilPointing from "@/assets/sprites/temptation/devil-pointing.png";
import jesusCommanding from "@/assets/sprites/temptation/jesus-commanding.png";
import jesusVictorious from "@/assets/sprites/temptation/jesus-victorious.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const temptationDesertSprites: Record<string, SpriteConfig> = {
  start: { left: jesusFasting },
  curse_consequence: { left: jesusFasting },
  leave_consequence: { left: jesusFasting },
  bread: { left: devilStone },
  obey_bread_consequence: { left: jesusRefusing },
  pinnacle: { left: devilPointing },
  leap_consequence: { left: jesusRefusing },
  boast_consequence: { left: jesusRefusing },
  kingdoms: { left: devilPointing },
  bow_consequence: { left: jesusCommanding },
  bargain_consequence: { left: jesusCommanding },
  departs: { left: jesusCommanding },
  chase_consequence: { left: jesusCommanding },
  rest: { left: jesusVictorious },
};
