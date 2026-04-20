import abrahamCalm from "@/assets/sprites/abraham-lot/abraham-calm.png";
import abrahamTroubled from "@/assets/sprites/abraham-lot/abraham-troubled.png";
import abrahamOffering from "@/assets/sprites/abraham-lot/abraham-offering.png";
import abrahamPraying from "@/assets/sprites/abraham-lot/abraham-praying.png";
import abrahamWatching from "@/assets/sprites/abraham-lot/abraham-watching.png";
import lotCalm from "@/assets/sprites/abraham-lot/lot-calm.png";
import lotChoosing from "@/assets/sprites/abraham-lot/lot-choosing.png";
import herdsman from "@/assets/sprites/abraham-lot/herdsman.png";

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
