import balaamCalm from "@/assets/sprites/balaam/balaam-calm.png";
import balaamAngry from "@/assets/sprites/balaam/balaam-angry.png";
import balaamHumbled from "@/assets/sprites/balaam/balaam-humbled.png";
import donkey from "@/assets/sprites/balaam/donkey.png";
import angelSword from "@/assets/sprites/balaam/angel-sword.png";
import moabMessengers from "@/assets/sprites/balaam/moab-messengers.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const balaamSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: moabMessengers },
  greed_consequence: { left: moabMessengers },
  vague_consequence: { left: moabMessengers },
  // Act II
  first_word: { left: balaamCalm },
  chase_consequence: { left: balaamCalm },
  second_offer: { left: moabMessengers },
  pretend_consequence: { left: balaamCalm },
  fee_consequence: { left: moabMessengers },
  // Act III
  saddle_donkey: { left: balaamCalm },
  // Act IV
  narrow_path: { left: donkey },
  humbled_early: { left: donkey },
  // Act V
  second_block: { left: balaamAngry },
  // Act VI
  third_block: { left: donkey },
  strike_consequence: { left: balaamAngry },
  laugh_consequence: { left: balaamAngry },
  // Act VII
  angel_revealed: { left: angelSword },
  defend_consequence: { left: angelSword },
  beg_consequence: { left: angelSword },
  // Endings
  ending_obedient: { left: balaamCalm },
  ending_humbled: { left: balaamHumbled },
};
