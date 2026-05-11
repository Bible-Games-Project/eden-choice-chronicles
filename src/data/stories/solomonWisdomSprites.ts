import solomonYoungKing from "@/assets/sprites/solomon-wisdom/solomon-young-king.png";
import elderPriest from "@/assets/sprites/solomon-wisdom/elder-priest.png";
import solomonKneeling from "@/assets/sprites/solomon-wisdom/solomon-kneeling.png";
import solomonThinking from "@/assets/sprites/solomon-wisdom/solomon-thinking.png";
import solomonJudging from "@/assets/sprites/solomon-wisdom/solomon-judging.png";
import solomonBlessed from "@/assets/sprites/solomon-wisdom/solomon-blessed.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const solomonWisdomSprites: Record<string, SpriteConfig> = {
  start: { left: solomonYoungKing },
  boast_consequence: { left: solomonYoungKing },
  gold_consequence: { left: solomonYoungKing },
  gibeon: { left: elderPriest },
  seen_consequence: { left: elderPriest },
  dream: { left: solomonKneeling },
  riches_consequence: { left: solomonKneeling },
  enemies_consequence: { left: solomonKneeling },
  granted: { left: solomonThinking },
  boast2_consequence: { left: solomonThinking },
  judgment: { left: solomonJudging },
  loud_consequence: { left: solomonJudging },
  lots_consequence: { left: solomonJudging },
  kingdom: { left: solomonBlessed },
};
