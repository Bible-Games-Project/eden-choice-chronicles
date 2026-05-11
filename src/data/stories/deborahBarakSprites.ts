import deborahJudging from "@/assets/sprites/deborah-barak/deborah-judging.png";
import deborahCalling from "@/assets/sprites/deborah-barak/deborah-calling.png";
import barakHesitant from "@/assets/sprites/deborah-barak/barak-hesitant.png";
import deborahBarakTogether from "@/assets/sprites/deborah-barak/deborah-barak-together.png";
import israeliteSoldiers from "@/assets/sprites/deborah-barak/israelite-soldiers.png";
import sisera from "@/assets/sprites/deborah-barak/sisera.png";

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
