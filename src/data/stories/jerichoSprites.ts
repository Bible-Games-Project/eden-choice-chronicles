import joshuaResolute from "@/assets/sprites/jericho/joshua-resolute.webp";
import joshuaKneeling from "@/assets/sprites/jericho/joshua-kneeling.webp";
import priestsTrumpets from "@/assets/sprites/jericho/priests-trumpets.webp";
import israelitesMarching from "@/assets/sprites/jericho/israelites-marching.webp";
import israelitesShouting from "@/assets/sprites/jericho/israelites-shouting.webp";
import jerichoPeople from "@/assets/sprites/jericho/jericho-people.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const jerichoSprites: Record<string, SpriteConfig> = {
  start: { left: joshuaResolute },
  charge_consequence: { left: joshuaResolute },
  siege_consequence: { left: joshuaResolute },
  divine_word: { left: joshuaKneeling },
  argue_consequence: { left: joshuaKneeling },
  instruct_priests: { left: priestsTrumpets },
  hide_consequence: { left: joshuaResolute },
  rear_consequence: { left: priestsTrumpets },
  first_march: { left: israelitesMarching },
  shout_consequence: { left: joshuaResolute },
  sixth_day: { left: jerichoPeople },
  quit_consequence: { left: joshuaResolute },
  seventh_day: { left: priestsTrumpets },
  wait_consequence: { left: joshuaResolute },
  walls_fall: { left: israelitesShouting },
  boast_consequence: { left: joshuaResolute },
  ending_obedient: { left: joshuaKneeling },
};
