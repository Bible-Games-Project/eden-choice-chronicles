import jesusWalking from "@/assets/sprites/woman-blood/jesus-walking.png";
import womanSuffering from "@/assets/sprites/woman-blood/woman-suffering.png";
import womanReaching from "@/assets/sprites/woman-blood/woman-reaching.png";
import jesusTurning from "@/assets/sprites/woman-blood/jesus-turning.png";
import womanConfessing from "@/assets/sprites/woman-blood/woman-confessing.png";
import jesusBlessing from "@/assets/sprites/woman-blood/jesus-blessing.png";
import womanHealed from "@/assets/sprites/woman-blood/woman-healed.png";

import { SpriteConfig } from "@/data/creationSprites";

export const womanBloodSprites: Record<string, SpriteConfig> = {
  start: { left: jesusWalking },
  stay_consequence: { left: womanSuffering },
  coins_consequence: { left: womanSuffering },
  approach: { left: womanReaching },
  call_consequence: { left: womanReaching },
  touch: { left: womanReaching },
  pull_consequence: { left: womanReaching },
  doubt_consequence: { left: womanReaching },
  healed: { left: womanHealed },
  slip_consequence: { left: womanHealed },
  who_touched: { left: jesusTurning },
  hide_consequence: { left: jesusTurning },
  deny_consequence: { left: jesusTurning },
  confess: { left: womanConfessing },
  peace: { left: jesusBlessing },
};
