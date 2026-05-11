import elijahBold from "@/assets/sprites/elijah-baal/elijah-bold.png";
import ahabKing from "@/assets/sprites/elijah-baal/ahab-king.png";
import baalProphets from "@/assets/sprites/elijah-baal/baal-prophets.png";
import elijahAltar from "@/assets/sprites/elijah-baal/elijah-altar.png";
import elijahPraying from "@/assets/sprites/elijah-baal/elijah-praying.png";
import elijahVictorious from "@/assets/sprites/elijah-baal/elijah-victorious.png";
import crowdBowing from "@/assets/sprites/elijah-baal/crowd-bowing.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const elijahBaalSprites: Record<string, SpriteConfig> = {
  start: { left: ahabKing },
  bow_consequence: { left: ahabKing },
  flee_consequence: { left: ahabKing },
  carmel_call: { left: elijahBold },
  secret_consequence: { left: elijahBold },
  baal_pray: { left: baalProphets },
  pity_consequence: { left: baalProphets },
  walk_consequence: { left: baalProphets },
  elijah_altar: { left: elijahAltar },
  oil_consequence: { left: elijahAltar },
  light_consequence: { left: elijahAltar },
  elijah_pray: { left: elijahPraying },
  shout_consequence: { left: elijahPraying },
  fire_falls: { left: elijahVictorious },
  credit_consequence: { left: elijahVictorious },
  ending: { left: crowdBowing },
};
