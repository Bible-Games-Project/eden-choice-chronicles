import samuelServing from "@/assets/sprites/samuel-called/samuel-serving.webp";
import samuelListening from "@/assets/sprites/samuel-called/samuel-listening.webp";
import eliResting from "@/assets/sprites/samuel-called/eli-resting.webp";
import eliRealizes from "@/assets/sprites/samuel-called/eli-realizes.webp";
import samuelPraying from "@/assets/sprites/samuel-called/samuel-praying.webp";
import samuelProphet from "@/assets/sprites/samuel-called/samuel-prophet.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const samuelCalledSprites: Record<string, SpriteConfig> = {
  start: { left: samuelServing },
  sneak_consequence: { left: samuelServing },
  demand_consequence: { left: samuelServing },
  night_falls: { left: samuelListening },
  ignore_consequence: { left: samuelListening },
  shout_consequence: { left: samuelListening },
  second_call: { left: eliResting },
  doubt_consequence: { left: eliResting },
  curse_consequence: { left: eliResting },
  third_call: { left: eliRealizes },
  refuse_consequence: { left: eliRealizes },
  boast_consequence: { left: eliRealizes },
  respond_god: { left: samuelPraying },
  hide_consequence: { left: samuelPraying },
  sign_consequence: { left: samuelPraying },
  prophet_calling: { left: samuelProphet },
};
