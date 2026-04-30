import wildernessMidian from "@/assets/scenes/burning-bush/wilderness-midian.jpg";
import sheepPasture from "@/assets/scenes/burning-bush/sheep-pasture.jpg";
import horebSlope from "@/assets/scenes/burning-bush/horeb-slope.jpg";
import burningBush from "@/assets/scenes/burning-bush/burning-bush.jpg";
import holyGround from "@/assets/scenes/burning-bush/holy-ground.jpg";
import roadToEgypt from "@/assets/scenes/burning-bush/road-to-egypt.jpg";

export const burningBushImages: Record<string, string> = {
  // Act I
  start: sheepPasture,
  ignore_consequence: sheepPasture,
  stone_consequence: sheepPasture,
  approach_mountain: horebSlope,
  run_back_consequence: horebSlope,
  call_jethro_consequence: horebSlope,
  // Act II
  see_bush: burningBush,
  smother_consequence: burningBush,
  hide_consequence: burningBush,
  voice_calls: burningBush,
  demand_consequence: burningBush,
  silent_consequence: burningBush,
  // Act III
  remove_sandals: holyGround,
  refuse_sandals_consequence: holyGround,
  argue_sandals_consequence: holyGround,
  hide_face: holyGround,
  look_up_consequence: holyGround,
  // Act IV
  see_affliction: holyGround,
  boast_consequence: holyGround,
  refuse_consequence: holyGround,
  i_will_be_with_you: holyGround,
  bargain_consequence: holyGround,
  i_am: burningBush,
  question_consequence: burningBush,
  // Act V
  accept_mission: holyGround,
  plead_consequence: holyGround,
  another_consequence: holyGround,
  stand_resolved: burningBush,
  return_sheep_consequence: sheepPasture,
  ending: roadToEgypt,
};
