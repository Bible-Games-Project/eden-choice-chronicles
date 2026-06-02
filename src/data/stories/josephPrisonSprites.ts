import josephArriving from "@/assets/sprites/joseph-prison/joseph-arriving.webp";
import josephPraying from "@/assets/sprites/joseph-prison/joseph-praying.webp";
import josephWorking from "@/assets/sprites/joseph-prison/joseph-working.webp";
import josephListening from "@/assets/sprites/joseph-prison/joseph-listening.webp";
import josephInterpreting from "@/assets/sprites/joseph-prison/joseph-interpreting.webp";
import josephHumble from "@/assets/sprites/joseph-prison/joseph-humble.webp";
import josephPleading from "@/assets/sprites/joseph-prison/joseph-pleading.webp";
import josephWaiting from "@/assets/sprites/joseph-prison/joseph-waiting.webp";
import guardStern from "@/assets/sprites/joseph-prison/guard-stern.webp";
import guardTrusting from "@/assets/sprites/joseph-prison/guard-trusting.webp";
import cupbearerTroubled from "@/assets/sprites/joseph-prison/cupbearer-troubled.webp";
import cupbearerJoyful from "@/assets/sprites/joseph-prison/cupbearer-joyful.webp";
import bakerWorried from "@/assets/sprites/joseph-prison/baker-worried.webp";
import bakerSorrowful from "@/assets/sprites/joseph-prison/baker-sorrowful.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Each scene uses a unique pose/expression — no duplicate combos across scenes.
export const josephPrisonSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: josephArriving, right: guardStern },
  curse_consequence: { left: josephArriving },
  escape_consequence: { left: josephHumble },
  first_night: { left: josephPraying },
  despair_consequence: { left: josephHumble },
  // Act II
  morning_work: { left: josephWaiting, right: guardStern },
  refuse_consequence: { left: josephHumble, right: guardStern },
  lazy_consequence: { left: josephWaiting, right: guardStern },
  faithful_work: { left: josephWorking },
  boast_consequence: { left: josephArriving },
  trusted_steward: { left: josephHumble, right: guardTrusting },
  demand_consequence: { left: josephArriving, right: guardStern },
  // Act III
  two_arrivals: { left: cupbearerTroubled, right: bakerWorried },
  ignore_consequence: { left: josephWaiting },
  mock_consequence: { left: josephHumble, right: bakerWorried },
  morning_sad: { left: cupbearerTroubled, right: bakerWorried },
  silent_consequence: { left: josephWaiting, right: bakerWorried },
  greedy_consequence: { left: josephArriving, right: cupbearerTroubled },
  interpret_offer: { left: josephListening, right: cupbearerTroubled },
  // Act IV
  cupbearer_dream: { left: josephListening, right: cupbearerTroubled },
  flatter_consequence: { left: josephArriving, right: cupbearerTroubled },
  cupbearer_meaning: { left: josephInterpreting, right: cupbearerTroubled },
  demand_wages_consequence: { left: josephArriving, right: cupbearerTroubled },
  remember_request: { left: josephPleading, right: cupbearerJoyful },
  baker_dream: { left: josephListening, right: bakerWorried },
  lie_consequence: { left: josephHumble, right: bakerWorried },
  refuse_interp_consequence: { left: josephWaiting, right: bakerWorried },
  baker_meaning: { left: josephInterpreting, right: bakerSorrowful },
  // Act V
  third_day: { left: cupbearerJoyful, right: bakerSorrowful },
  wait_news: { left: josephWaiting },
  rage_consequence: { left: josephArriving, right: guardStern },
  curse2_consequence: { left: josephHumble },
  forgotten: { left: josephWaiting },
  despair2_consequence: { left: josephHumble },
  bribe_consequence: { left: josephPleading, right: guardStern },
  still_trust: { left: josephPraying },
  ending: { left: josephPraying },
};
