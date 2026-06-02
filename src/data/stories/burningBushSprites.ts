import mosesShepherd from "@/assets/sprites/burning-bush/moses-shepherd.webp";
import mosesCurious from "@/assets/sprites/burning-bush/moses-curious.webp";
import mosesAwed from "@/assets/sprites/burning-bush/moses-awed.webp";
import mosesReverent from "@/assets/sprites/burning-bush/moses-reverent.webp";
import mosesHesitant from "@/assets/sprites/burning-bush/moses-hesitant.webp";
import mosesResolved from "@/assets/sprites/burning-bush/moses-resolved.webp";
import burningBushPresence from "@/assets/sprites/burning-bush/burning-bush-presence.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Single sprite per scene (left only).
export const burningBushSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: mosesShepherd },
  ignore_consequence: { left: mosesShepherd },
  stone_consequence: { left: mosesShepherd },
  approach_mountain: { left: mosesCurious },
  run_back_consequence: { left: mosesHesitant },
  call_jethro_consequence: { left: mosesCurious },
  // Act II
  see_bush: { left: burningBushPresence },
  smother_consequence: { left: mosesHesitant },
  hide_consequence: { left: mosesHesitant },
  voice_calls: { left: burningBushPresence },
  demand_consequence: { left: mosesHesitant },
  silent_consequence: { left: mosesAwed },
  // Act III
  remove_sandals: { left: burningBushPresence },
  refuse_sandals_consequence: { left: mosesHesitant },
  argue_sandals_consequence: { left: mosesHesitant },
  hide_face: { left: mosesReverent },
  look_up_consequence: { left: mosesAwed },
  // Act IV
  see_affliction: { left: burningBushPresence },
  boast_consequence: { left: mosesShepherd },
  refuse_consequence: { left: mosesHesitant },
  i_will_be_with_you: { left: burningBushPresence },
  bargain_consequence: { left: mosesHesitant },
  i_am: { left: burningBushPresence },
  question_consequence: { left: mosesHesitant },
  // Act V
  accept_mission: { left: burningBushPresence },
  plead_consequence: { left: mosesHesitant },
  another_consequence: { left: mosesHesitant },
  stand_resolved: { left: mosesResolved },
  return_sheep_consequence: { left: mosesShepherd },
  ending: { left: mosesResolved },
};
