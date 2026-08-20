import naamanCommander from "@/assets/sprites/elisha-naaman/naaman-commander.webp";
import naamanLeper from "@/assets/sprites/elisha-naaman/naaman-leper.webp";
import naamanChariot from "@/assets/sprites/elisha-naaman/naaman-chariot.webp";
import naamanProud from "@/assets/sprites/elisha-naaman/naaman-proud.webp";
import elishaMessenger from "@/assets/sprites/elisha-naaman/elisha-messenger.webp";
import naamanServants from "@/assets/sprites/elisha-naaman/naaman-servants.webp";
import naamanJordan from "@/assets/sprites/elisha-naaman/naaman-jordan.webp";
import naamanHealed from "@/assets/sprites/elisha-naaman/naaman-healed.webp";
import elishaRefusing from "@/assets/sprites/elisha-naaman/elisha-refusing.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Small reusable set matched to the story progression.
export const elishaNaamanSprites: Record<string, SpriteConfig> = {
  start: { left: naamanCommander },
  curse_consequence: { left: naamanLeper },
  hide_consequence: { left: naamanLeper },
  journey: { left: naamanChariot },
  king_consequence: { left: naamanChariot },
  arrival: { left: naamanProud },
  force_consequence: { left: naamanProud },
  gold_consequence: { left: elishaRefusing },
  instruction: { left: elishaMessenger },
  refuse_consequence: { left: naamanServants },
  ceremony_consequence: { left: naamanServants },
  jordan: { left: naamanJordan },
  once_consequence: { left: naamanJordan },
  healed: { left: naamanHealed },
};
