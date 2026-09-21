import jesusWelcoming from "@/assets/sprites/nicodemus/jesus-welcoming.png";
import nicodemusApproaching from "@/assets/sprites/nicodemus/nicodemus-approaching.png";
import jesusExplaining from "@/assets/sprites/nicodemus/jesus-explaining.png";
import nicodemusPuzzled from "@/assets/sprites/nicodemus/nicodemus-puzzled.png";
import jesusSpirit from "@/assets/sprites/nicodemus/jesus-spirit.png";
import jesusLove from "@/assets/sprites/nicodemus/jesus-love.png";
import nicodemusReflecting from "@/assets/sprites/nicodemus/nicodemus-reflecting.png";
import nicodemusDeparting from "@/assets/sprites/nicodemus/nicodemus-departing.png";
import jesusRadiant from "@/assets/sprites/nicodemus/jesus-radiant.png";

import { SpriteConfig } from "@/data/creationSprites";

export const nicodemusSprites: Record<string, SpriteConfig> = {
  start: { left: jesusWelcoming },
  hide_consequence: { left: jesusWelcoming },
  greet: { left: nicodemusApproaching },
  flatter_consequence: { left: nicodemusApproaching },
  born_again: { left: jesusExplaining },
  dismiss_consequence: { left: jesusExplaining },
  mock_consequence: { left: jesusExplaining },
  spirit: { left: jesusSpirit },
  demand_consequence: { left: jesusSpirit },
  heavenly: { left: nicodemusPuzzled },
  argue_consequence: { left: nicodemusPuzzled },
  love: { left: jesusLove },
  reject_consequence: { left: jesusLove },
  light: { left: nicodemusReflecting },
  hide2_consequence: { left: nicodemusReflecting },
  reflect: { left: nicodemusDeparting },
  forget_consequence: { left: nicodemusDeparting },
  ending: { left: jesusRadiant },
};
