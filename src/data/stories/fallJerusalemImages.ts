import throneJudah from "@/assets/scenes/fall-jerusalem/throne-judah.jpg";
import citySquare from "@/assets/scenes/fall-jerusalem/city-square.jpg";
import cityWallsSiege from "@/assets/scenes/fall-jerusalem/city-walls-siege.jpg";
import ruinedStreets from "@/assets/scenes/fall-jerusalem/ruined-streets.jpg";
import burningTemple from "@/assets/scenes/fall-jerusalem/burning-temple.jpg";
import exileRoad from "@/assets/scenes/fall-jerusalem/exile-road.jpg";

export const fallJerusalemImages: Record<string, string> = {
  start: throneJudah,
  imprison_consequence: throneJudah,
  ignore_consequence: throneJudah,
  preach: citySquare,
  soften_consequence: citySquare,
  retreat_consequence: citySquare,
  reject: citySquare,
  curse_consequence: citySquare,
  giveup_consequence: citySquare,
  siege: cityWallsSiege,
  idols_consequence: cityWallsSiege,
  egypt_consequence: cityWallsSiege,
  famine: ruinedStreets,
  blame_consequence: ruinedStreets,
  flee_consequence: ruinedStreets,
  fall: burningTemple,
  hide_consequence: burningTemple,
  escape_consequence: burningTemple,
  exile: exileRoad,
};
