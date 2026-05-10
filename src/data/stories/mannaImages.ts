import desertCamp from "@/assets/scenes/manna/desert-camp.jpg";
import desertMarch from "@/assets/scenes/manna/desert-march.jpg";
import mosesPrayer from "@/assets/scenes/manna/moses-prayer.jpg";
import mannaFall from "@/assets/scenes/manna/manna-fall.jpg";
import gatheringGround from "@/assets/scenes/manna/gathering-ground.jpg";
import spoiledManna from "@/assets/scenes/manna/spoiled-manna.jpg";

export const mannaImages: Record<string, string> = {
  // Act I
  start: desertMarch,
  anger_consequence: desertMarch,
  lie_consequence: desertMarch,
  // Act II
  people_complain: desertCamp,
  turnback_consequence: desertCamp,
  // Act III
  moses_seeks_god: mosesPrayer,
  demand_consequence: mosesPrayer,
  despair_consequence: mosesPrayer,
  // Act IV
  god_speaks: mosesPrayer,
  hide_consequence: mosesPrayer,
  tell_people: desertCamp,
  boast_consequence: desertCamp,
  secret_consequence: desertCamp,
  // Act V
  manna_falls: mannaFall,
  forbid_consequence: mannaFall,
  // Act VI
  gather_daily: gatheringGround,
  hoarding_consequence: spoiledManna,
  selfish_consequence: gatheringGround,
  // Act VII
  next_morning: gatheringGround,
  ending: mannaFall,
};
