import jesusWelcoming from "@/assets/sprites/nicodemus/jesus-welcoming.webp";
import nicodemusApproaching from "@/assets/sprites/nicodemus/nicodemus-approaching.webp";
import jesusExplaining from "@/assets/sprites/nicodemus/jesus-explaining.webp";
import nicodemusPuzzled from "@/assets/sprites/nicodemus/nicodemus-puzzled.webp";
import jesusSpirit from "@/assets/sprites/nicodemus/jesus-spirit.webp";
import jesusLove from "@/assets/sprites/nicodemus/jesus-love.webp";
import nicodemusReflecting from "@/assets/sprites/nicodemus/nicodemus-reflecting.webp";
import nicodemusDeparting from "@/assets/sprites/nicodemus/nicodemus-departing.webp";
import jesusRadiant from "@/assets/sprites/nicodemus/jesus-radiant.webp";

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
