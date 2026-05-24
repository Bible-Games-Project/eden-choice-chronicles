import disciplesRowing from "@/assets/sprites/walking-water/disciples-rowing-night.png";
import disciplesFearful from "@/assets/sprites/walking-water/disciples-fearful.png";
import jesusWalking from "@/assets/sprites/walking-water/jesus-walking-water.png";
import peterStepping from "@/assets/sprites/walking-water/peter-stepping.png";
import peterSinking from "@/assets/sprites/walking-water/peter-sinking.png";
import jesusRescuing from "@/assets/sprites/walking-water/jesus-rescuing.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const walkingWaterSprites: Record<string, SpriteConfig> = {
  start: { left: disciplesRowing },
  sleep_consequence: { left: disciplesRowing },
  turnback_consequence: { left: disciplesRowing },
  wind: { left: disciplesRowing },
  curse_consequence: { left: disciplesRowing },
  hide_consequence: { left: disciplesRowing },
  ghost: { left: disciplesFearful },
  scream_consequence: { left: disciplesFearful },
  reassure: { left: jesusWalking },
  doubt_consequence: { left: jesusWalking },
  silent_consequence: { left: jesusWalking },
  peter_step: { left: peterStepping },
  stay_consequence: { left: peterStepping },
  peter_sink: { left: peterSinking },
  swim_consequence: { left: peterSinking },
  curse_self_consequence: { left: peterSinking },
  calm: { left: jesusRescuing },
};
