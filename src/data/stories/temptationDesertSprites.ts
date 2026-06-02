import jesusFasting from "@/assets/sprites/temptation/jesus-fasting.webp";
import devilStone from "@/assets/sprites/temptation/devil-stone.webp";
import jesusRefusing from "@/assets/sprites/temptation/jesus-refusing.webp";
import devilPointing from "@/assets/sprites/temptation/devil-pointing.webp";
import jesusCommanding from "@/assets/sprites/temptation/jesus-commanding.webp";
import jesusVictorious from "@/assets/sprites/temptation/jesus-victorious.webp";

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
