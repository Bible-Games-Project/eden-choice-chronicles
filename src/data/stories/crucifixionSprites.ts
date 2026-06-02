import jesusBeam from "@/assets/sprites/crucifixion/jesus-beam.png";
import jesusStumbling from "@/assets/sprites/crucifixion/jesus-stumbling.png";
import simonCyrene from "@/assets/sprites/crucifixion/simon-cyrene.png";
import jesusHill from "@/assets/sprites/crucifixion/jesus-hill.png";
import soldierCup from "@/assets/sprites/crucifixion/soldier-cup.png";
import jesusSurrender from "@/assets/sprites/crucifixion/jesus-surrender.png";
import jesusLifted from "@/assets/sprites/crucifixion/jesus-lifted.png";
import jesusForgiving from "@/assets/sprites/crucifixion/jesus-forgiving.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const crucifixionSprites: Record<string, SpriteConfig> = {
  start: { left: jesusBeam },
  curse_consequence: { left: jesusBeam },
  drop_consequence: { left: jesusBeam },
  carrying: { left: jesusStumbling },
  shout_consequence: { left: jesusStumbling },
  beg_consequence: { left: jesusStumbling },
  simon: { left: simonCyrene },
  refuse_consequence: { left: simonCyrene },
  order_consequence: { left: simonCyrene },
  golgotha: { left: jesusHill },
  run_consequence: { left: jesusHill },
  demand_consequence: { left: jesusHill },
  wine_offered: { left: soldierCup },
  drink_consequence: { left: soldierCup },
  smash_consequence: { left: soldierCup },
  nails: { left: jesusSurrender },
  fire_consequence: { left: jesusSurrender },
  pull_consequence: { left: jesusSurrender },
  lifted: { left: jesusLifted },
  curse_cross_consequence: { left: jesusLifted },
  silent_consequence: { left: jesusLifted },
  forgiveness: { left: jesusForgiving },
  ignore_consequence: { left: jesusForgiving },
  rebuke_consequence: { left: jesusForgiving },
  ending: { left: jesusForgiving },
};
