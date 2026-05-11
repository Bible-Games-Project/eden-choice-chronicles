import naamanLeper from "@/assets/sprites/elisha-naaman/naaman-leper.png";
import naamanChariot from "@/assets/sprites/elisha-naaman/naaman-chariot.png";
import naamanProud from "@/assets/sprites/elisha-naaman/naaman-proud.png";
import elishaMessenger from "@/assets/sprites/elisha-naaman/elisha-messenger.png";
import naamanServants from "@/assets/sprites/elisha-naaman/naaman-servants.png";
import naamanJordan from "@/assets/sprites/elisha-naaman/naaman-jordan.png";
import naamanHealed from "@/assets/sprites/elisha-naaman/naaman-healed.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const elishaNaamanSprites: Record<string, SpriteConfig> = {
  start: { left: naamanLeper },
  curse_consequence: { left: naamanLeper },
  hide_consequence: { left: naamanLeper },
  journey: { left: naamanChariot },
  king_consequence: { left: naamanChariot },
  arrival: { left: naamanProud },
  force_consequence: { left: naamanProud },
  gold_consequence: { left: naamanProud },
  instruction: { left: elishaMessenger },
  refuse_consequence: { left: naamanServants },
  ceremony_consequence: { left: naamanServants },
  jordan: { left: naamanJordan },
  once_consequence: { left: naamanJordan },
  healed: { left: naamanHealed },
};
