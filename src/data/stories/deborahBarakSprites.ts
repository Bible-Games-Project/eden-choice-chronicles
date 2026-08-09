import deborahJudging from "@/assets/sprites/deborah-barak/deborah-judging.webp";
import deborahReceiving from "@/assets/sprites/deborah-barak/deborah-receiving.webp";
import deborahCommanding from "@/assets/sprites/deborah-barak/deborah-commanding.webp";
import barakHesitant from "@/assets/sprites/deborah-barak/barak-hesitant.webp";
import barakLeading from "@/assets/sprites/deborah-barak/barak-leading.webp";
import deborahBarakTogether from "@/assets/sprites/deborah-barak/deborah-barak-together.webp";
import israeliteSoldiers from "@/assets/sprites/deborah-barak/israelite-soldiers.webp";
import siseraCommander from "@/assets/sprites/deborah-barak/sisera-commander.webp";
import jaelResolute from "@/assets/sprites/deborah-barak/jael-resolute.webp";
import victoryPraise from "@/assets/sprites/deborah-barak/victory-praise.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set matching story progression.
export const deborahBarakSprites: Record<string, SpriteConfig> = {
  start: { left: deborahJudging },
  ignore_consequence: { left: deborahJudging },
  self_consequence: { left: deborahReceiving },
  call_barak: { left: deborahCommanding },
  lead_consequence: { left: deborahCommanding },
  barak_arrives: { left: barakHesitant },
  refuse_consequence: { left: barakHesitant },
  mock_consequence: { left: barakHesitant },
  march_to_tabor: { left: deborahBarakTogether },
  wait_consequence: { left: deborahBarakTogether },
  battle_kishon: { left: siseraCommander },
  hold_consequence: { left: barakLeading },
  negotiate_consequence: { left: siseraCommander },
  victory: { left: israeliteSoldiers },
  credit_consequence: { left: jaelResolute },
  ending_faithful: { left: victoryPraise },
};
