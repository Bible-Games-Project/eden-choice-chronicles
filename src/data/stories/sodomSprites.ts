import lotCalm from "@/assets/sprites/sodom/lot-calm.png";
import lotTroubled from "@/assets/sprites/sodom/lot-troubled.png";
import lotFleeing from "@/assets/sprites/sodom/lot-fleeing.png";
import lotGrieving from "@/assets/sprites/sodom/lot-grieving.png";
import angels from "@/assets/sprites/sodom/angels.png";
import angelsWarning from "@/assets/sprites/sodom/angels-warning.png";
import wifeCalm from "@/assets/sprites/sodom/wife-calm.png";
import wifeSalt from "@/assets/sprites/sodom/wife-salt.png";

import { SpriteConfig } from "@/data/creationSprites";

export const sodomSprites: Record<string, SpriteConfig> = {
  start: { left: lotCalm, right: angels },
  ignore_consequence: { left: lotTroubled },
  invite: { left: lotCalm, right: angels },
  mob: { left: lotTroubled },
  betray_consequence: { left: lotTroubled },
  blinded: { left: lotTroubled, right: angelsWarning },
  warning: { left: lotTroubled, right: angelsWarning },
  delay_consequence: { left: lotTroubled },
  sons_in_law: { left: lotTroubled },
  stay_consequence: { left: lotFleeing },
  lingering: { left: lotTroubled, right: wifeCalm },
  delay_consequence_2: { left: lotFleeing, right: angelsWarning },
  out_of_city: { left: lotFleeing, right: angelsWarning },
  argue_consequence: { left: lotFleeing, right: angelsWarning },
  zoar: { left: lotFleeing, right: wifeCalm },
  wife_looks: { left: lotFleeing, right: wifeSalt },
  back_consequence: { left: lotGrieving, right: wifeSalt },
  destruction: { left: lotGrieving },
  aftermath: { left: lotGrieving },
};
