import magiWatching from "@/assets/sprites/wise-men/magi-watching.webp";
import magiStar from "@/assets/sprites/wise-men/magi-star.webp";
import magiJourney from "@/assets/sprites/wise-men/magi-journey.webp";
import herod from "@/assets/sprites/wise-men/herod.webp";
import magiWorship from "@/assets/sprites/wise-men/magi-worship.webp";
import magiGifts from "@/assets/sprites/wise-men/magi-gifts.webp";
import magiDream from "@/assets/sprites/wise-men/magi-dream.webp";
import maryChild from "@/assets/sprites/wise-men/mary-child.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Small reusable set matching each story moment.
export const wiseMenSprites: Record<string, SpriteConfig> = {
  start: { left: magiWatching },
  ignore_consequence: { left: magiWatching },
  fear_consequence: { left: magiStar },
  journey: { left: magiJourney },
  turn_back_consequence: { left: magiJourney },
  herod: { left: herod },
  loyalty_consequence: { left: herod },
  bethlehem: { left: magiStar },
  doubt_consequence: { left: magiJourney },
  wait_consequence: { left: magiJourney },
  worship: { left: magiWorship },
  greed_consequence: { left: magiGifts },
  dream: { left: magiDream },
  betray_consequence: { left: magiDream },
  stay_consequence: { left: magiDream },
  return: { left: maryChild },
};
