import deborahJudging from "@/assets/sprites/deborah-barak/deborah-judging.webp";
import deborahCalling from "@/assets/sprites/deborah-barak/deborah-calling.webp";
import barakHesitant from "@/assets/sprites/deborah-barak/barak-hesitant.webp";
import deborahBarakTogether from "@/assets/sprites/deborah-barak/deborah-barak-together.webp";
import israeliteSoldiers from "@/assets/sprites/deborah-barak/israelite-soldiers.webp";
import sisera from "@/assets/sprites/deborah-barak/sisera.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const deborahBarakSprites: Record<string, SpriteConfig> = {
  start: { left: deborahJudging },
  ignore_consequence: { left: deborahJudging },
  self_consequence: { left: deborahJudging },
  call_barak: { left: deborahCalling },
  lead_consequence: { left: deborahCalling },
  barak_arrives: { left: barakHesitant },
  refuse_consequence: { left: barakHesitant },
  mock_consequence: { left: barakHesitant },
  march_to_tabor: { left: deborahBarakTogether },
  wait_consequence: { left: deborahBarakTogether },
  battle_kishon: { left: sisera },
  hold_consequence: { left: israeliteSoldiers },
  negotiate_consequence: { left: sisera },
  victory: { left: israeliteSoldiers },
  credit_consequence: { left: deborahBarakTogether },
  ending_faithful: { left: deborahJudging },
};
