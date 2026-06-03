import abrahamLotTogether from "@/assets/sprites/abraham-lot/abraham-lot-together.webp";
import abrahamThoughtful from "@/assets/sprites/abraham-lot/abraham-thoughtful.webp";
import herdsmenQuarrel from "@/assets/sprites/abraham-lot/herdsmen-quarrel.webp";
import abrahamSpeakingLot from "@/assets/sprites/abraham-lot/abraham-speaking-lot.webp";
import abrahamOffering from "@/assets/sprites/abraham-lot/abraham-offering.webp";
import lotGazing from "@/assets/sprites/abraham-lot/lot-gazing.webp";
import lotDeparting from "@/assets/sprites/abraham-lot/lot-departing.webp";
import abrahamWatching from "@/assets/sprites/abraham-lot/abraham-watching.webp";
import abrahamKneeling from "@/assets/sprites/abraham-lot/abraham-kneeling.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Transparent PNG. No reuse.
export const abrahamLotSprites: Record<string, SpriteConfig> = {
  start: { left: abrahamLotTogether },
  tension: { left: abrahamThoughtful },
  quarrel: { left: herdsmenQuarrel },
  decision: { left: abrahamSpeakingLot },
  offering: { left: abrahamOffering },
  lots_choice: { left: lotGazing },
  lot_departs: { left: lotDeparting },
  remaining: { left: abrahamWatching },
  the_promise: { left: abrahamKneeling },
};
