import davidKing from "@/assets/sprites/david-bathsheba/david-king.png";
import bathsheba from "@/assets/sprites/david-bathsheba/bathsheba.png";
import uriah from "@/assets/sprites/david-bathsheba/uriah.png";
import royalMessenger from "@/assets/sprites/david-bathsheba/royal-messenger.png";
import nathanProphet from "@/assets/sprites/david-bathsheba/nathan-prophet.png";
import davidRepenting from "@/assets/sprites/david-bathsheba/david-repenting.png";

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
