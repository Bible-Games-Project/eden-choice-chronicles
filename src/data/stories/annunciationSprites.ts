import maryHumble from "@/assets/sprites/annunciation/mary-humble.webp";
import maryStartled from "@/assets/sprites/annunciation/mary-startled.webp";
import maryPondering from "@/assets/sprites/annunciation/mary-pondering.webp";
import maryPraying from "@/assets/sprites/annunciation/mary-praying.webp";
import maryQuestioning from "@/assets/sprites/annunciation/mary-questioning.webp";
import maryAccepting from "@/assets/sprites/annunciation/mary-accepting.webp";
import gabrielAppearing from "@/assets/sprites/annunciation/gabriel-appearing.webp";
import gabrielAnnouncing from "@/assets/sprites/annunciation/gabriel-announcing.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set matching each story moment.
export const annunciationSprites: Record<string, SpriteConfig> = {
  start: { left: maryHumble },
  boast_consequence: { left: maryHumble },
  wander_consequence: { left: maryPraying },
  gabriel: { left: gabrielAppearing },
  flee_consequence: { left: maryStartled },
  demand_consequence: { left: gabrielAppearing },
  ponder: { left: maryPondering },
  sendaway_consequence: { left: maryPondering },
  announce: { left: gabrielAnnouncing },
  refuse_consequence: { left: maryQuestioning },
  wealth_consequence: { left: maryQuestioning },
  question: { left: maryQuestioning },
  hide_consequence: { left: maryPraying },
  accept: { left: maryAccepting },
};
