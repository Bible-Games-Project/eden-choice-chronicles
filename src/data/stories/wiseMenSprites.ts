import magiWatching from "@/assets/sprites/wise-men/magi-watching.webp";
import magiJourney from "@/assets/sprites/wise-men/magi-journey.webp";
import herodThrone from "@/assets/sprites/wise-men/herod-throne.webp";
import magiWorship from "@/assets/sprites/wise-men/magi-worship.webp";
import magiGifts from "@/assets/sprites/wise-men/magi-gifts.webp";
import magiDream from "@/assets/sprites/wise-men/magi-dream.webp";
import holyFamily from "@/assets/sprites/wise-men/holy-family.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Small reusable set matching each story moment.
export const wiseMenSprites: Record<string, SpriteConfig> = {
  start: { left: magiWatching },
  ignore_consequence: { left: magiWatching },
  fear_consequence: { left: magiWatching },
  journey: { left: magiJourney },
  turn_back_consequence: { left: magiJourney },
  herod: { left: herodThrone },
  loyalty_consequence: { left: herodThrone },
  bethlehem: { left: magiJourney },
  doubt_consequence: { left: magiJourney },
  wait_consequence: { left: magiJourney },
  worship: { left: magiWorship },
  greed_consequence: { left: magiGifts },
  dream: { left: magiDream },
  betray_consequence: { left: magiDream },
  stay_consequence: { left: magiDream },
  return: { left: holyFamily },
};
