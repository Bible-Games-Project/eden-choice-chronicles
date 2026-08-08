import balaamCalm from "@/assets/sprites/balaam/balaam-calm.webp";
import balaamAngry from "@/assets/sprites/balaam/balaam-angry.webp";
import balaamHumbled from "@/assets/sprites/balaam/balaam-humbled.webp";
import balaamEyesOpened from "@/assets/sprites/balaam/balaam-eyes-opened.webp";
import balaamJourney from "@/assets/sprites/balaam/balaam-journey.webp";
import donkey from "@/assets/sprites/balaam/donkey.webp";
import donkeyTurning from "@/assets/sprites/balaam/donkey-turning.webp";
import donkeySpeaking from "@/assets/sprites/balaam/donkey-speaking.webp";
import angelSword from "@/assets/sprites/balaam/angel-sword.webp";
import moabMessengers from "@/assets/sprites/balaam/moab-messengers.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set, transparent WEBP.
export const balaamSprites: Record<string, SpriteConfig> = {
  // Act I — Balak's messengers arrive
  start: { left: moabMessengers },
  greed_consequence: { left: moabMessengers },
  vague_consequence: { left: moabMessengers },
  // Act II — the word of the Lord, second offer
  first_word: { left: balaamCalm },
  chase_consequence: { left: balaamCalm },
  second_offer: { left: moabMessengers },
  pretend_consequence: { left: balaamCalm },
  fee_consequence: { left: moabMessengers },
  // Act III — preparing the donkey / setting out
  saddle_donkey: { left: balaamJourney },
  // Act IV — the donkey turns aside
  narrow_path: { left: donkeyTurning },
  humbled_early: { left: donkey },
  // Act V — crushed against the wall
  second_block: { left: balaamAngry },
  // Act VI — the donkey speaks
  third_block: { left: donkeySpeaking },
  strike_consequence: { left: balaamAngry },
  laugh_consequence: { left: donkeySpeaking },
  // Act VII — the Angel of the Lord
  angel_revealed: { left: angelSword },
  defend_consequence: { left: angelSword },
  beg_consequence: { left: balaamEyesOpened },
  // Endings
  ending_obedient: { left: balaamCalm },
  ending_humbled: { left: balaamHumbled },
};
