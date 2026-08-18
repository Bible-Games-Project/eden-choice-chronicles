import solomonYoungKing from "@/assets/sprites/solomon-wisdom/solomon-young-king.webp";
import elderPriest from "@/assets/sprites/solomon-wisdom/elder-priest.webp";
import solomonOffering from "@/assets/sprites/solomon-wisdom/solomon-offering.webp";
import solomonKneeling from "@/assets/sprites/solomon-wisdom/solomon-kneeling.webp";
import solomonAwakening from "@/assets/sprites/solomon-wisdom/solomon-awakening.webp";
import solomonThinking from "@/assets/sprites/solomon-wisdom/solomon-thinking.webp";
import solomonJudging from "@/assets/sprites/solomon-wisdom/solomon-judging.webp";
import solomonBlessed from "@/assets/sprites/solomon-wisdom/solomon-blessed.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Small reusable set matching the story progression.
export const solomonWisdomSprites: Record<string, SpriteConfig> = {
  start: { left: solomonYoungKing },
  boast_consequence: { left: solomonYoungKing },
  gold_consequence: { left: solomonYoungKing },
  gibeon: { left: elderPriest },
  seen_consequence: { left: solomonOffering },
  dream: { left: solomonKneeling },
  riches_consequence: { left: solomonKneeling },
  enemies_consequence: { left: solomonKneeling },
  granted: { left: solomonAwakening },
  boast2_consequence: { left: solomonThinking },
  judgment: { left: solomonJudging },
  loud_consequence: { left: solomonJudging },
  lots_consequence: { left: solomonThinking },
  kingdom: { left: solomonBlessed },
};
