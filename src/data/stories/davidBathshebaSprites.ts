import davidKing from "@/assets/sprites/david-bathsheba/david-king.webp";
import bathsheba from "@/assets/sprites/david-bathsheba/bathsheba.webp";
import uriah from "@/assets/sprites/david-bathsheba/uriah.webp";
import royalMessenger from "@/assets/sprites/david-bathsheba/royal-messenger.webp";
import nathanProphet from "@/assets/sprites/david-bathsheba/nathan-prophet.webp";
import davidRepenting from "@/assets/sprites/david-bathsheba/david-repenting.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const davidBathshebaSprites: Record<string, SpriteConfig> = {
  start: { left: davidKing },
  rooftop_consequence: { left: davidKing },
  wine_consequence: { left: davidKing },
  seeing: { left: bathsheba },
  ask_consequence: { left: bathsheba },
  summon_consequence: { left: bathsheba },
  uriah: { left: uriah },
  drunk_consequence: { left: uriah },
  front_consequence: { left: royalMessenger },
  nathan: { left: nathanProphet },
  threaten_consequence: { left: nathanProphet },
  deny_consequence: { left: nathanProphet },
  repentance: { left: davidRepenting },
};
