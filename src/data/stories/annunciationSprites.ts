import maryHumble from "@/assets/sprites/annunciation/mary-humble.png";
import maryStartled from "@/assets/sprites/annunciation/mary-startled.png";
import maryPondering from "@/assets/sprites/annunciation/mary-pondering.png";
import maryAccepting from "@/assets/sprites/annunciation/mary-accepting.png";
import gabrielAppearing from "@/assets/sprites/annunciation/gabriel-appearing.png";
import gabrielAnnouncing from "@/assets/sprites/annunciation/gabriel-announcing.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const annunciationSprites: Record<string, SpriteConfig> = {
  start: { left: maryHumble },
  boast_consequence: { left: maryHumble },
  wander_consequence: { left: maryHumble },
  gabriel: { left: gabrielAppearing },
  flee_consequence: { left: maryStartled },
  demand_consequence: { left: gabrielAppearing },
  ponder: { left: maryPondering },
  sendaway_consequence: { left: maryPondering },
  announce: { left: gabrielAnnouncing },
  refuse_consequence: { left: maryPondering },
  wealth_consequence: { left: maryPondering },
  question: { left: maryPondering },
  hide_consequence: { left: maryPondering },
  accept: { left: maryAccepting },
};
