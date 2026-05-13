import johnPreaching from "@/assets/sprites/baptism/john-preaching.png";
import jesusApproaching from "@/assets/sprites/baptism/jesus-approaching.png";
import johnHesitating from "@/assets/sprites/baptism/john-hesitating.png";
import jesusBaptism from "@/assets/sprites/baptism/jesus-baptism.png";
import spiritDove from "@/assets/sprites/baptism/spirit-dove.png";
import jesusAffirmed from "@/assets/sprites/baptism/jesus-affirmed.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const baptismJesusSprites: Record<string, SpriteConfig> = {
  start: { left: johnPreaching },
  mock_consequence: { left: johnPreaching },
  turn_consequence: { left: johnPreaching },
  crowds: { left: johnPreaching },
  apart_consequence: { left: johnPreaching },
  approach: { left: jesusApproaching },
  demand_consequence: { left: jesusApproaching },
  wait_consequence: { left: jesusApproaching },
  hesitate: { left: johnHesitating },
  agree_consequence: { left: johnHesitating },
  rebuke_consequence: { left: johnHesitating },
  baptism: { left: jesusBaptism },
  resist_consequence: { left: jesusBaptism },
  dove: { left: spiritDove },
  hide_consequence: { left: spiritDove },
  boast_consequence: { left: spiritDove },
  voice: { left: jesusAffirmed },
};
