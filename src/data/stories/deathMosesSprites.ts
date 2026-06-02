import mosesElder from "@/assets/sprites/death-moses/moses-elder.webp";
import mosesGazing from "@/assets/sprites/death-moses/moses-gazing.webp";
import mosesJoshua from "@/assets/sprites/death-moses/moses-joshua.webp";
import joshuaResolute from "@/assets/sprites/death-moses/joshua-resolute.webp";
import israelitesListening from "@/assets/sprites/death-moses/israelites-listening.webp";
import mosesPeaceful from "@/assets/sprites/death-moses/moses-peaceful.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const deathMosesSprites: Record<string, SpriteConfig> = {
  start: { left: mosesElder },
  press_consequence: { left: mosesElder },
  silent_consequence: { left: mosesElder },
  gather_people: { left: israelitesListening },
  boast_consequence: { left: israelitesListening },
  blessing: { left: mosesElder },
  appoint_joshua: { left: mosesJoshua },
  bloodline_consequence: { left: joshuaResolute },
  cling_consequence: { left: mosesElder },
  joshua_blessed: { left: mosesJoshua },
  ascent: { left: mosesElder },
  turnback_consequence: { left: mosesElder },
  summit: { left: mosesGazing },
  grief_consequence: { left: mosesElder },
  demand_consequence: { left: mosesElder },
  vision_received: { left: mosesGazing },
  ending_peaceful: { left: mosesPeaceful },
};
