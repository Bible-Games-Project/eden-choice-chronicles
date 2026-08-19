import elijahBold from "@/assets/sprites/elijah-baal/elijah-bold.webp";
import ahabKing from "@/assets/sprites/elijah-baal/ahab-king.webp";
import baalProphets from "@/assets/sprites/elijah-baal/baal-prophets.webp";
import baalDesperate from "@/assets/sprites/elijah-baal/baal-desperate.webp";
import elijahAltar from "@/assets/sprites/elijah-baal/elijah-altar.webp";
import elijahWater from "@/assets/sprites/elijah-baal/elijah-water.webp";
import elijahPraying from "@/assets/sprites/elijah-baal/elijah-praying.webp";
import elijahVictorious from "@/assets/sprites/elijah-baal/elijah-victorious.webp";
import crowdBowing from "@/assets/sprites/elijah-baal/crowd-bowing.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Small reusable set matched to the story progression.
export const elijahBaalSprites: Record<string, SpriteConfig> = {
  start: { left: ahabKing },
  bow_consequence: { left: ahabKing },
  flee_consequence: { left: ahabKing },
  carmel_call: { left: elijahBold },
  secret_consequence: { left: elijahBold },
  baal_pray: { left: baalProphets },
  pity_consequence: { left: baalDesperate },
  walk_consequence: { left: baalDesperate },
  elijah_altar: { left: elijahAltar },
  oil_consequence: { left: elijahWater },
  light_consequence: { left: elijahWater },
  elijah_pray: { left: elijahPraying },
  shout_consequence: { left: elijahPraying },
  fire_falls: { left: elijahVictorious },
  credit_consequence: { left: elijahVictorious },
  ending: { left: crowdBowing },
};
