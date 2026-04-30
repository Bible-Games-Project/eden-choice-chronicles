import { SceneEffect } from "@/components/SceneEffects";

export const burningBushEffects: Record<string, SceneEffect> = {
  // Act I
  start: "leaves",
  ignore_consequence: "leaves",
  stone_consequence: "leaves",
  approach_mountain: "sparkles",
  run_back_consequence: "sparkles",
  call_jethro_consequence: "sparkles",
  // Act II
  see_bush: "sparkles",
  smother_consequence: "sparkles",
  hide_consequence: "sparkles",
  voice_calls: "sparkles",
  demand_consequence: "sparkles",
  silent_consequence: "sparkles",
  // Act III
  remove_sandals: "sparkles",
  refuse_sandals_consequence: "sparkles",
  argue_sandals_consequence: "sparkles",
  hide_face: "sparkles",
  look_up_consequence: "sparkles",
  // Act IV
  see_affliction: "sparkles",
  boast_consequence: "sparkles",
  refuse_consequence: "sparkles",
  i_will_be_with_you: "sparkles",
  bargain_consequence: "sparkles",
  i_am: "sparkles",
  question_consequence: "sparkles",
  // Act V
  accept_mission: "sparkles",
  plead_consequence: "sparkles",
  another_consequence: "sparkles",
  stand_resolved: "sparkles",
  return_sheep_consequence: "leaves",
  ending: "sparkles",
};
