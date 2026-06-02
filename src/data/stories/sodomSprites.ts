import lotCalm from "@/assets/sprites/sodom/lot-calm.webp";
import lotTroubled from "@/assets/sprites/sodom/lot-troubled.webp";
import lotFleeing from "@/assets/sprites/sodom/lot-fleeing.webp";
import lotGrieving from "@/assets/sprites/sodom/lot-grieving.webp";
import angels from "@/assets/sprites/sodom/angels.webp";
import angelsWarning from "@/assets/sprites/sodom/angels-warning.webp";
import wifeCalm from "@/assets/sprites/sodom/wife-calm.webp";
import wifeSalt from "@/assets/sprites/sodom/wife-salt.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const sodomSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: lotCalm },
  complicit_consequence: { left: lotTroubled },
  to_gate: { left: lotCalm, right: angels },
  square_consequence: { left: lotTroubled, right: angels },
  ignore_consequence: { left: lotTroubled },
  // Act II
  invite: { left: lotCalm, right: angels },
  boast_consequence: { left: lotTroubled, right: angels },
  guests_reveal: { left: lotTroubled, right: angels },
  hide_consequence: { left: lotTroubled },
  // Act III
  mob: { left: lotTroubled },
  bargain_consequence: { left: lotTroubled },
  betray_consequence: { left: lotTroubled },
  blinded: { left: lotTroubled, right: angelsWarning },
  // Act IV
  warning: { left: lotTroubled, right: angelsWarning },
  demand_consequence: { left: lotTroubled, right: angelsWarning },
  delay_consequence: { left: lotTroubled },
  sons_in_law: { left: lotTroubled },
  stay_consequence: { left: lotFleeing },
  // Act V
  lingering: { left: lotTroubled, right: wifeCalm },
  neighbor_consequence: { left: lotTroubled, right: angelsWarning },
  delay_consequence_2: { left: lotFleeing, right: angelsWarning },
  // Act VI
  out_of_city: { left: lotFleeing, right: angelsWarning },
  refuse_consequence: { left: lotFleeing, right: angelsWarning },
  argue_consequence: { left: lotFleeing, right: angelsWarning },
  zoar: { left: lotFleeing, right: wifeCalm },
  // Act VII
  wife_looks: { left: lotFleeing, right: wifeSalt },
  back_consequence: { left: lotGrieving, right: wifeSalt },
  destruction: { left: lotGrieving },
  aftermath: { left: lotGrieving },
};
