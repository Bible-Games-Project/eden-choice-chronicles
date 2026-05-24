import boatNight from "@/assets/scenes/walking-water/boat-night.jpg";
import windWaves from "@/assets/scenes/walking-water/wind-waves.jpg";
import figureWater from "@/assets/scenes/walking-water/figure-water.jpg";
import peterStepping from "@/assets/scenes/walking-water/peter-stepping.jpg";
import peterSinking from "@/assets/scenes/walking-water/peter-sinking.jpg";
import windCalm from "@/assets/scenes/walking-water/wind-calm.jpg";

export const walkingWaterImages: Record<string, string> = {
  start: boatNight,
  sleep_consequence: boatNight,
  turnback_consequence: boatNight,
  wind: windWaves,
  curse_consequence: windWaves,
  hide_consequence: windWaves,
  ghost: figureWater,
  scream_consequence: figureWater,
  reassure: figureWater,
  doubt_consequence: figureWater,
  silent_consequence: figureWater,
  peter_step: peterStepping,
  stay_consequence: peterStepping,
  peter_sink: peterSinking,
  swim_consequence: peterSinking,
  curse_self_consequence: peterSinking,
  calm: windCalm,
};
