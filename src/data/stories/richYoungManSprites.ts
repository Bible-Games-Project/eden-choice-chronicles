import youngApproaching from "@/assets/sprites/rich-young-man/young-approaching.webp";
import youngAsking from "@/assets/sprites/rich-young-man/young-asking.webp";
import jesusTeaching from "@/assets/sprites/rich-young-man/jesus-teaching.webp";
import youngConfident from "@/assets/sprites/rich-young-man/young-confident.webp";
import jesusLoving from "@/assets/sprites/rich-young-man/jesus-loving.webp";
import youngTroubled from "@/assets/sprites/rich-young-man/young-troubled.webp";
import youngLeaving from "@/assets/sprites/rich-young-man/young-leaving.webp";
import jesusDisciples from "@/assets/sprites/rich-young-man/jesus-disciples.webp";
import disciplesSurprised from "@/assets/sprites/rich-young-man/disciples-surprised.webp";
import youngReflective from "@/assets/sprites/rich-young-man/young-reflective.webp";

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
