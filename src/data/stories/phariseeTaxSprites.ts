import jesusParable from "@/assets/sprites/pharisee-tax/jesus-parable.webp";
import twoMenTemple from "@/assets/sprites/pharisee-tax/two-men-temple.webp";
import phariseePraying from "@/assets/sprites/pharisee-tax/pharisee-praying.webp";
import phariseeBoasting from "@/assets/sprites/pharisee-tax/pharisee-boasting.webp";
import phariseeLookingDown from "@/assets/sprites/pharisee-tax/pharisee-looking-down.webp";
import taxHumble from "@/assets/sprites/pharisee-tax/tax-humble.webp";
import taxMercy from "@/assets/sprites/pharisee-tax/tax-mercy.webp";
import jesusExplaining from "@/assets/sprites/pharisee-tax/jesus-explaining.webp";
import jesusRadiant from "@/assets/sprites/pharisee-tax/jesus-radiant.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const phariseeTaxSprites: Record<string, SpriteConfig> = {
  start: { left: jesusParable },
  know_consequence: { left: jesusParable },
  temple: { left: twoMenTemple },
  judge_consequence: { left: twoMenTemple },
  pharisee_pray: { left: phariseePraying },
  admire_consequence: { left: phariseePraying },
  boast: { left: phariseeBoasting },
  copy_consequence: { left: phariseeBoasting },
  wish_consequence: { left: phariseeLookingDown },
  tax_far: { left: taxHumble },
  mock_consequence: { left: taxHumble },
  mercy: { left: taxMercy },
  impress_consequence: { left: taxMercy },
  forgiven: { left: taxMercy },
  doubt_consequence: { left: taxMercy },
  jesus_explains: { left: jesusExplaining },
  argue_consequence: { left: jesusExplaining },
  ending: { left: jesusRadiant },
};
