import samuelServing from "@/assets/sprites/samuel-called/samuel-serving.png";
import samuelListening from "@/assets/sprites/samuel-called/samuel-listening.png";
import eliResting from "@/assets/sprites/samuel-called/eli-resting.png";
import eliRealizes from "@/assets/sprites/samuel-called/eli-realizes.png";
import samuelPraying from "@/assets/sprites/samuel-called/samuel-praying.png";
import samuelProphet from "@/assets/sprites/samuel-called/samuel-prophet.png";

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
