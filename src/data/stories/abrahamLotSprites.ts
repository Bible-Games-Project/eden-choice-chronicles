import abrahamLotTogether from "@/assets/sprites/abraham-lot/abraham-lot-together.png";
import abrahamThoughtful from "@/assets/sprites/abraham-lot/abraham-thoughtful.png";
import herdsmenQuarrel from "@/assets/sprites/abraham-lot/herdsmen-quarrel.png";
import abrahamSpeakingLot from "@/assets/sprites/abraham-lot/abraham-speaking-lot.png";
import abrahamOffering from "@/assets/sprites/abraham-lot/abraham-offering.png";
import lotGazing from "@/assets/sprites/abraham-lot/lot-gazing.png";
import lotDeparting from "@/assets/sprites/abraham-lot/lot-departing.png";
import abrahamWatching from "@/assets/sprites/abraham-lot/abraham-watching.png";
import abrahamKneeling from "@/assets/sprites/abraham-lot/abraham-kneeling.png";

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
