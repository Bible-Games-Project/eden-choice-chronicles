import cityGate from "@/assets/scenes/crucifixion/city-gate.jpg";
import sorrowfulRoad from "@/assets/scenes/crucifixion/sorrowful-road.jpg";
import roadStranger from "@/assets/scenes/crucifixion/road-stranger.jpg";
import golgothaHill from "@/assets/scenes/crucifixion/golgotha-hill.jpg";
import wineCup from "@/assets/scenes/crucifixion/wine-cup.jpg";
import nailsSky from "@/assets/scenes/crucifixion/nails-sky.jpg";
import crossInscription from "@/assets/scenes/crucifixion/cross-inscription.jpg";
import darkenedSky from "@/assets/scenes/crucifixion/darkened-sky.jpg";

export const crucifixionImages: Record<string, string> = {
  start: cityGate,
  curse_consequence: cityGate,
  drop_consequence: cityGate,
  carrying: sorrowfulRoad,
  shout_consequence: sorrowfulRoad,
  beg_consequence: sorrowfulRoad,
  simon: roadStranger,
  refuse_consequence: roadStranger,
  order_consequence: roadStranger,
  golgotha: golgothaHill,
  run_consequence: golgothaHill,
  demand_consequence: golgothaHill,
  wine_offered: wineCup,
  drink_consequence: wineCup,
  smash_consequence: wineCup,
  nails: nailsSky,
  fire_consequence: nailsSky,
  pull_consequence: nailsSky,
  lifted: crossInscription,
  curse_cross_consequence: crossInscription,
  silent_consequence: crossInscription,
  forgiveness: darkenedSky,
  ignore_consequence: darkenedSky,
  rebuke_consequence: darkenedSky,
  ending: darkenedSky,
};
