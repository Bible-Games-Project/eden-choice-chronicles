import lotGate from "@/assets/sprites/sodom/lot-gate.png";
import lotDistress from "@/assets/sprites/sodom/lot-distress.png";
import angelsArrive from "@/assets/sprites/sodom/angels-arrive.png";
import lotWelcomes from "@/assets/sprites/sodom/lot-welcomes.png";
import mob from "@/assets/sprites/sodom/mob.png";
import angelWarnsLot from "@/assets/sprites/sodom/angel-warns-lot.png";
import lotSonsInLaw from "@/assets/sprites/sodom/lot-sons-in-law.png";
import angelUrges from "@/assets/sprites/sodom/angel-urges.png";
import familyFleeing from "@/assets/sprites/sodom/family-fleeing.png";
import wifeSalt from "@/assets/sprites/sodom/wife-salt.png";
import lotGrieving from "@/assets/sprites/sodom/lot-grieving.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Transparent PNG. No reuse.
export const sodomSprites: Record<string, SpriteConfig> = {
  start: { left: lotGate },
  wickedness: { left: lotDistress },
  strangers: { left: angelsArrive },
  welcome: { left: lotWelcomes },
  mob: { left: mob },
  angels_warn: { left: angelWarnsLot },
  sons_in_law: { left: lotSonsInLaw },
  urge: { left: angelUrges },
  flee: { left: familyFleeing },
  wife_looks: { left: wifeSalt },
  aftermath: { left: lotGrieving },
};
