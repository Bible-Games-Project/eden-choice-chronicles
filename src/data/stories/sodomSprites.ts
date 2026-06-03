import lotGate from "@/assets/sprites/sodom/lot-gate.webp";
import lotDistress from "@/assets/sprites/sodom/lot-distress.webp";
import angelsArrive from "@/assets/sprites/sodom/angels-arrive.webp";
import lotWelcomes from "@/assets/sprites/sodom/lot-welcomes.webp";
import mob from "@/assets/sprites/sodom/mob.webp";
import angelWarnsLot from "@/assets/sprites/sodom/angel-warns-lot.webp";
import lotSonsInLaw from "@/assets/sprites/sodom/lot-sons-in-law.webp";
import angelUrges from "@/assets/sprites/sodom/angel-urges.webp";
import familyFleeing from "@/assets/sprites/sodom/family-fleeing.webp";
import wifeSalt from "@/assets/sprites/sodom/wife-salt.webp";
import lotGrieving from "@/assets/sprites/sodom/lot-grieving.webp";

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
