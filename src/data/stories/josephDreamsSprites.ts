import josephSummoned from "@/assets/sprites/joseph-dreams/joseph-summoned.png";
import josephSpeaking from "@/assets/sprites/joseph-dreams/joseph-speaking.png";
import josephListening from "@/assets/sprites/joseph-dreams/joseph-listening.png";
import josephInterpreting from "@/assets/sprites/joseph-dreams/joseph-interpreting.png";
import josephPraying from "@/assets/sprites/joseph-dreams/joseph-praying.png";
import josephVizier from "@/assets/sprites/joseph-dreams/joseph-vizier.png";
import josephThoughtful from "@/assets/sprites/joseph-dreams/joseph-thoughtful.png";
import pharaohTroubled from "@/assets/sprites/joseph-dreams/pharaoh-troubled.png";
import pharaohListening from "@/assets/sprites/joseph-dreams/pharaoh-listening.png";
import pharaohPleased from "@/assets/sprites/joseph-dreams/pharaoh-pleased.png";
import pharaohDecreeing from "@/assets/sprites/joseph-dreams/pharaoh-decreeing.png";
import cupbearer from "@/assets/sprites/joseph-dreams/cupbearer-remembering.png";
import magician from "@/assets/sprites/joseph-dreams/magician-baffled.png";
import official from "@/assets/sprites/joseph-dreams/official-bowing.png";

import { SpriteConfig } from "@/data/creationSprites";

// Each scene gets a unique sprite combo. No duplicate combos across scenes.
export const josephDreamsSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: josephPraying },
  curse_consequence: { left: josephThoughtful },
  hide_consequence: { left: josephSummoned },
  summons: { left: josephListening, right: cupbearer },
  boast_consequence: { left: josephThoughtful, right: cupbearer },
  refuse_consequence: { left: josephSummoned, right: cupbearer },
  preparation: { left: josephSummoned },
  rehearse_consequence: { left: josephThoughtful },
  // Act II
  antechamber_arrive: { left: josephSummoned, right: official },
  demand_consequence: { left: josephThoughtful, right: official },
  throne_enter: { left: josephListening, right: pharaohTroubled },
  stare_consequence: { left: josephThoughtful, right: pharaohTroubled },
  pharaoh_speaks: { left: josephSummoned, right: pharaohTroubled },
  claim_consequence: { left: josephSpeaking, right: pharaohTroubled },
  try_consequence: { left: josephThoughtful, right: pharaohTroubled },
  // Act III
  humble_answer: { left: josephSpeaking, right: pharaohListening },
  interrupt_consequence: { left: josephSpeaking, right: pharaohTroubled },
  cattle_dream: { left: josephListening, right: pharaohListening },
  egypt_lore_consequence: { left: josephSpeaking, right: pharaohTroubled },
  grain_dream: { left: josephListening, right: pharaohTroubled },
  idols_consequence: { left: josephThoughtful, right: pharaohListening },
  sign_consequence: { left: josephSummoned, right: pharaohListening },
  // Act IV
  interpretation: { left: josephInterpreting, right: pharaohListening },
  soften_consequence: { left: josephThoughtful, right: pharaohListening },
  plain_truth: { left: josephInterpreting, right: pharaohTroubled },
  stop_consequence: { left: josephSummoned, right: pharaohTroubled },
  give_counsel: { left: josephSpeaking, right: pharaohListening },
  self_consequence: { left: josephSpeaking, right: pharaohTroubled },
  silver_consequence: { left: josephSummoned, right: pharaohTroubled },
  // Act V
  leave_choice: { left: josephSummoned, right: pharaohListening },
  push_consequence: { left: josephSpeaking, right: pharaohTroubled },
  pharaoh_chooses: { left: josephListening, right: pharaohDecreeing },
  refuse2_consequence: { left: josephSummoned, right: pharaohDecreeing },
  ring_given: { left: josephVizier, right: pharaohDecreeing },
  forget_consequence: { left: josephVizier, right: magician },
  ride_out: { left: josephVizier, right: official },
  revenge_consequence: { left: josephThoughtful },
  boast2_consequence: { left: josephVizier },
  ending: { left: josephVizier },
};
