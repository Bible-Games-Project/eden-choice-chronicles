import davidKing from "@/assets/sprites/david-bathsheba/david-king.webp";
import davidRooftop from "@/assets/sprites/david-bathsheba/david-rooftop.webp";
import bathsheba from "@/assets/sprites/david-bathsheba/bathsheba.webp";
import bathshebaMourning from "@/assets/sprites/david-bathsheba/bathsheba-mourning.webp";
import royalMessenger from "@/assets/sprites/david-bathsheba/royal-messenger.webp";
import uriah from "@/assets/sprites/david-bathsheba/uriah.webp";
import joabLetter from "@/assets/sprites/david-bathsheba/joab-letter.webp";
import nathanProphet from "@/assets/sprites/david-bathsheba/nathan-prophet.webp";
import davidRepenting from "@/assets/sprites/david-bathsheba/david-repenting.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set matching the story progression.
export const davidBathshebaSprites: Record<string, SpriteConfig> = {
  start: { left: davidKing },
  rooftop_consequence: { left: davidRooftop },
  wine_consequence: { left: davidKing },
  seeing: { left: bathsheba },
  ask_consequence: { left: royalMessenger },
  summon_consequence: { left: bathsheba },
  uriah: { left: uriah },
  drunk_consequence: { left: uriah },
  front_consequence: { left: joabLetter },
  nathan: { left: nathanProphet },
  threaten_consequence: { left: nathanProphet },
  deny_consequence: { left: bathshebaMourning },
  repentance: { left: davidRepenting },
};
