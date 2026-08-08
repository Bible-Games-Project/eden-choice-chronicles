import mosesElder from "@/assets/sprites/death-moses/moses-elder.webp";
import mosesIsraelites from "@/assets/sprites/death-moses/moses-israelites.webp";
import mosesClimbing from "@/assets/sprites/death-moses/moses-climbing.webp";
import mosesGazing from "@/assets/sprites/death-moses/moses-gazing.webp";
import mosesJoshua from "@/assets/sprites/death-moses/moses-joshua.webp";
import joshuaResolute from "@/assets/sprites/death-moses/joshua-resolute.webp";
import israelitesListening from "@/assets/sprites/death-moses/israelites-listening.webp";
import israelitesMourning from "@/assets/sprites/death-moses/israelites-mourning.webp";
import mosesPeaceful from "@/assets/sprites/death-moses/moses-peaceful.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set, transparent PNG/WebP.
export const deathMosesSprites: Record<string, SpriteConfig> = {
  start: { left: mosesIsraelites },
  press_consequence: { left: mosesElder },
  silent_consequence: { left: israelitesMourning },
  gather_people: { left: israelitesListening },
  boast_consequence: { left: israelitesListening },
  blessing: { left: mosesElder },
  appoint_joshua: { left: joshuaResolute },
  bloodline_consequence: { left: joshuaResolute },
  cling_consequence: { left: mosesElder },
  joshua_blessed: { left: mosesJoshua },
  ascent: { left: mosesClimbing },
  turnback_consequence: { left: mosesClimbing },
  summit: { left: mosesGazing },
  grief_consequence: { left: mosesElder },
  demand_consequence: { left: mosesGazing },
  vision_received: { left: mosesGazing },
  ending_peaceful: { left: mosesPeaceful },
};
