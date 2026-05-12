import magiWatching from "@/assets/sprites/wise-men/magi-watching.png";
import magiJourney from "@/assets/sprites/wise-men/magi-journey.png";
import herodThrone from "@/assets/sprites/wise-men/herod-throne.png";
import magiWorship from "@/assets/sprites/wise-men/magi-worship.png";
import holyFamily from "@/assets/sprites/wise-men/holy-family.png";
import magiDream from "@/assets/sprites/wise-men/magi-dream.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
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
  greed_consequence: { left: magiWorship },
  dream: { left: magiDream },
  betray_consequence: { left: magiDream },
  stay_consequence: { left: magiDream },
  return: { left: holyFamily },
};
