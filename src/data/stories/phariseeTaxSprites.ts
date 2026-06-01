import jesusParable from "@/assets/sprites/pharisee-tax/jesus-parable.png";
import disciplesListening from "@/assets/sprites/pharisee-tax/disciples-listening.png";
import phariseePraying from "@/assets/sprites/pharisee-tax/pharisee-praying.png";
import phariseeBoasting from "@/assets/sprites/pharisee-tax/pharisee-boasting.png";
import taxFar from "@/assets/sprites/pharisee-tax/tax-far.png";
import taxMercy from "@/assets/sprites/pharisee-tax/tax-mercy.png";
import taxForgiven from "@/assets/sprites/pharisee-tax/tax-forgiven.png";
import jesusExplaining from "@/assets/sprites/pharisee-tax/jesus-explaining.png";
import jesusRadiant from "@/assets/sprites/pharisee-tax/jesus-radiant.png";

import { SpriteConfig } from "@/data/creationSprites";

export const phariseeTaxSprites: Record<string, SpriteConfig> = {
  start: { left: jesusParable },
  know_consequence: { left: jesusParable },
  temple: { left: disciplesListening },
  judge_consequence: { left: disciplesListening },
  pharisee_pray: { left: phariseePraying },
  admire_consequence: { left: phariseePraying },
  boast: { left: phariseeBoasting },
  copy_consequence: { left: phariseeBoasting },
  wish_consequence: { left: phariseeBoasting },
  tax_far: { left: taxFar },
  mock_consequence: { left: taxFar },
  mercy: { left: taxMercy },
  impress_consequence: { left: taxMercy },
  forgiven: { left: taxForgiven },
  doubt_consequence: { left: taxForgiven },
  jesus_explains: { left: jesusExplaining },
  argue_consequence: { left: jesusExplaining },
  ending: { left: jesusRadiant },
};
