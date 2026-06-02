import jesusBoarding from "@/assets/sprites/storm/jesus-boarding.webp";
import disciplesRowing from "@/assets/sprites/storm/disciples-rowing.webp";
import jesusSleeping from "@/assets/sprites/storm/jesus-sleeping.webp";
import disciplesPanicked from "@/assets/sprites/storm/disciples-panicked.webp";
import jesusRebuking from "@/assets/sprites/storm/jesus-rebuking.webp";
import disciplesAmazed from "@/assets/sprites/storm/disciples-amazed.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const calmingStormSprites: Record<string, SpriteConfig> = {
  start: { left: jesusBoarding },
  refuse_consequence: { left: jesusBoarding },
  wait_consequence: { left: jesusBoarding },
  storm: { left: disciplesRowing },
  curse_consequence: { left: disciplesRowing },
  leap_consequence: { left: disciplesRowing },
  sleep: { left: jesusSleeping },
  alone_consequence: { left: jesusSleeping },
  wake: { left: disciplesPanicked },
  blame_consequence: { left: disciplesPanicked },
  silent_consequence: { left: disciplesPanicked },
  calm: { left: jesusRebuking },
  doubt_consequence: { left: jesusRebuking },
  amaze: { left: disciplesAmazed },
};
