import jesusParable from "@/assets/sprites/good-samaritan/jesus-teaching-parable.webp";
import travelerConfronted from "@/assets/sprites/good-samaritan/traveler-confronted.webp";
import travelerWounded from "@/assets/sprites/good-samaritan/traveler-wounded.webp";
import priest from "@/assets/sprites/good-samaritan/priest-passing.webp";
import levite from "@/assets/sprites/good-samaritan/levite-passing.webp";
import samaritanDiscovers from "@/assets/sprites/good-samaritan/samaritan-discovers-traveler.webp";
import samaritanTreating from "@/assets/sprites/good-samaritan/samaritan-treating-traveler.webp";
import samaritanInnkeeper from "@/assets/sprites/good-samaritan/samaritan-traveler-innkeeper.webp";
import jesusLikewise from "@/assets/sprites/good-samaritan/jesus-go-likewise.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const goodSamaritanSprites: Record<string, SpriteConfig> = {
  start: { left: jesusParable },
  walk_consequence: { left: jesusParable },
  rule_consequence: { left: jesusParable },
  attack: { left: travelerConfronted },
  pity_consequence: { left: travelerWounded },
  priest: { left: priest },
  cheer_consequence: { left: priest },
  excuse_consequence: { left: priest },
  levite: { left: levite },
  hope_consequence: { left: levite },
  samaritan: { left: samaritanDiscovers },
  doubt_consequence: { left: samaritanDiscovers },
  tend: { left: samaritanTreating },
  rush_consequence: { left: samaritanTreating },
  lookaway_consequence: { left: samaritanTreating },
  inn: { left: samaritanInnkeeper },
  leave_consequence: { left: samaritanInnkeeper },
  pay: { left: samaritanInnkeeper },
  minimum_consequence: { left: samaritanInnkeeper },
  ending: { left: jesusLikewise },
};
