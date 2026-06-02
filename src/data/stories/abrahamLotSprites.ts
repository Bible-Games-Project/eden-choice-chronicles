import abrahamCalm from "@/assets/sprites/abraham-lot/abraham-calm.webp";
import abrahamTroubled from "@/assets/sprites/abraham-lot/abraham-troubled.webp";
import abrahamOffering from "@/assets/sprites/abraham-lot/abraham-offering.webp";
import abrahamPraying from "@/assets/sprites/abraham-lot/abraham-praying.webp";
import abrahamWatching from "@/assets/sprites/abraham-lot/abraham-watching.webp";
import lotCalm from "@/assets/sprites/abraham-lot/lot-calm.webp";
import lotChoosing from "@/assets/sprites/abraham-lot/lot-choosing.webp";
import herdsman from "@/assets/sprites/abraham-lot/herdsman.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const abrahamLotSprites: Record<string, SpriteConfig> = {
  start: { left: abrahamTroubled },
  quarrel: { left: abrahamTroubled, right: herdsman },
  force_consequence: { left: abrahamTroubled },
  decision: { left: abrahamCalm, right: lotCalm },
  demand_consequence: { left: abrahamTroubled, right: lotCalm },
  offering: { left: abrahamOffering, right: lotCalm },
  lots_choice: { left: abrahamCalm, right: lotChoosing },
  lot_departs: { left: abrahamWatching },
  stay_consequence: { left: abrahamWatching },
  remaining: { left: abrahamCalm },
  the_promise: { left: abrahamPraying },
};
