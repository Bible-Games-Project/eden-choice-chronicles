import abrahamLotTogether from "@/assets/sprites/abraham-lot/abraham-lot-together.webp";
import abrahamSpeaking from "@/assets/sprites/abraham-lot/abraham-speaking.webp";
import abrahamPraying from "@/assets/sprites/abraham-lot/abraham-praying.webp";
import herdsmenQuarrel from "@/assets/sprites/abraham-lot/herdsmen-quarrel.webp";
import lotGazing from "@/assets/sprites/abraham-lot/lot-gazing.webp";
import lotDeparting from "@/assets/sprites/abraham-lot/lot-departing.webp";
import abrahamWatching from "@/assets/sprites/abraham-lot/abraham-watching.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable sprite set for the Abraham and Lot story.
// 3 waist-up portraits: abrahamLotTogether, abrahamSpeaking, abrahamPraying.
// 4 knees-up portraits: herdsmenQuarrel, lotGazing, lotDeparting, abrahamWatching.
export const abrahamLotSprites: Record<string, SpriteConfig> = {
  start: { left: abrahamLotTogether },
  tension: { left: abrahamLotTogether },
  quarrel: { left: herdsmenQuarrel },
  decision: { left: abrahamSpeaking },
  offering: { left: abrahamSpeaking },
  lots_choice: { left: lotGazing },
  lot_departs: { left: lotDeparting },
  remaining: { left: abrahamWatching },
  the_promise: { left: abrahamPraying },
};
