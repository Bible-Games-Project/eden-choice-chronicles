import joshuaInstructions from "@/assets/sprites/jericho/joshua-instructions.webp";
import joshuaCommanding from "@/assets/sprites/jericho/joshua-commanding.webp";
import joshuaKneeling from "@/assets/sprites/jericho/joshua-kneeling.webp";
import priestsTrumpets from "@/assets/sprites/jericho/priests-trumpets.webp";
import priestsBlowing from "@/assets/sprites/jericho/priests-blowing.webp";
import israelitesMarching from "@/assets/sprites/jericho/israelites-marching.webp";
import israelitesSilent from "@/assets/sprites/jericho/israelites-silent.webp";
import israelitesShouting from "@/assets/sprites/jericho/israelites-shouting.webp";
import israelitesAwe from "@/assets/sprites/jericho/israelites-awe.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set matching story progression.
export const jerichoSprites: Record<string, SpriteConfig> = {
  start: { left: israelitesMarching },
  charge_consequence: { left: joshuaCommanding },
  siege_consequence: { left: joshuaCommanding },
  divine_word: { left: joshuaInstructions },
  argue_consequence: { left: joshuaKneeling },
  instruct_priests: { left: priestsTrumpets },
  hide_consequence: { left: joshuaInstructions },
  rear_consequence: { left: priestsTrumpets },
  first_march: { left: priestsBlowing },
  shout_consequence: { left: israelitesSilent },
  sixth_day: { left: israelitesSilent },
  quit_consequence: { left: joshuaInstructions },
  seventh_day: { left: priestsBlowing },
  wait_consequence: { left: joshuaCommanding },
  walls_fall: { left: israelitesShouting },
  boast_consequence: { left: israelitesAwe },
  ending_obedient: { left: joshuaKneeling },
};
