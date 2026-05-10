import moabPalace from "@/assets/scenes/balaam/moab-palace.jpg";
import desertRoad from "@/assets/scenes/balaam/desert-road.jpg";
import narrowPath from "@/assets/scenes/balaam/narrow-path.jpg";
import mountainPass from "@/assets/scenes/balaam/mountain-pass.jpg";
import highRidge from "@/assets/scenes/balaam/high-ridge.jpg";
import returnRoad from "@/assets/scenes/balaam/return-road.jpg";

export const balaamImages: Record<string, string> = {
  // Act I
  start: moabPalace,
  greed_consequence: moabPalace,
  vague_consequence: moabPalace,
  // Act II
  first_word: moabPalace,
  chase_consequence: moabPalace,
  second_offer: moabPalace,
  pretend_consequence: moabPalace,
  fee_consequence: moabPalace,
  // Act III
  saddle_donkey: desertRoad,
  // Act IV
  narrow_path: narrowPath,
  humbled_early: narrowPath,
  // Act V
  second_block: narrowPath,
  // Act VI
  third_block: mountainPass,
  strike_consequence: mountainPass,
  laugh_consequence: mountainPass,
  // Act VII
  angel_revealed: mountainPass,
  defend_consequence: mountainPass,
  beg_consequence: mountainPass,
  // Endings
  ending_obedient: highRidge,
  ending_humbled: returnRoad,
};
