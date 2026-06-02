import jesusParable from "@/assets/sprites/good-samaritan/jesus-parable.webp";
import traveler from "@/assets/sprites/good-samaritan/traveler-wounded.webp";
import priest from "@/assets/sprites/good-samaritan/priest-passing.webp";
import levite from "@/assets/sprites/good-samaritan/levite-passing.webp";
import samStops from "@/assets/sprites/good-samaritan/samaritan-stops.webp";
import samTending from "@/assets/sprites/good-samaritan/samaritan-tending.webp";
import samInnkeeper from "@/assets/sprites/good-samaritan/samaritan-innkeeper.webp";
import jesusLikewise from "@/assets/sprites/good-samaritan/jesus-likewise.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const goodSamaritanSprites: Record<string, SpriteConfig> = {
  start: { left: jesusParable },
  walk_consequence: { left: jesusParable },
  rule_consequence: { left: jesusParable },
  attack: { left: traveler },
  pity_consequence: { left: traveler },
  priest: { left: priest },
  cheer_consequence: { left: priest },
  excuse_consequence: { left: priest },
  levite: { left: levite },
  hope_consequence: { left: levite },
  samaritan: { left: samStops },
  doubt_consequence: { left: samStops },
  tend: { left: samTending },
  rush_consequence: { left: samTending },
  lookaway_consequence: { left: samTending },
  inn: { left: samInnkeeper },
  leave_consequence: { left: samInnkeeper },
  pay: { left: samInnkeeper },
  minimum_consequence: { left: samInnkeeper },
  ending: { left: jesusLikewise },
};
