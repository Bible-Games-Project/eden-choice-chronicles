import youngApproaching from "@/assets/sprites/rich-young-man/young-approaching.png";
import youngAsking from "@/assets/sprites/rich-young-man/young-asking.png";
import jesusTeaching from "@/assets/sprites/rich-young-man/jesus-teaching.png";
import youngConfident from "@/assets/sprites/rich-young-man/young-confident.png";
import jesusLoving from "@/assets/sprites/rich-young-man/jesus-loving.png";
import youngTroubled from "@/assets/sprites/rich-young-man/young-troubled.png";
import youngLeaving from "@/assets/sprites/rich-young-man/young-leaving.png";
import jesusDisciples from "@/assets/sprites/rich-young-man/jesus-disciples.png";
import disciplesSurprised from "@/assets/sprites/rich-young-man/disciples-surprised.png";
import youngReflective from "@/assets/sprites/rich-young-man/young-reflective.png";

import { SpriteConfig } from "@/data/creationSprites";

export const richYoungManSprites: Record<string, SpriteConfig> = {
  start: { left: youngApproaching },
  pride_consequence: { left: youngApproaching },
  eternal_life: { left: youngAsking },
  demand_consequence: { left: youngAsking },
  boast_consequence: { left: youngAsking },
  commandments: { left: jesusTeaching },
  easy_consequence: { left: jesusTeaching },
  claim: { left: youngConfident },
  lie_consequence: { left: youngConfident },
  challenge: { left: jesusLoving },
  argue_consequence: { left: jesusLoving },
  bargain_consequence: { left: jesusLoving },
  conflict: { left: youngTroubled },
  surrender_path: { left: youngTroubled },
  walk_away: { left: youngLeaving },
  forget_consequence: { left: youngLeaving },
  teaching: { left: jesusDisciples },
  despair_consequence: { left: disciplesSurprised },
  ending: { left: youngReflective },
};
