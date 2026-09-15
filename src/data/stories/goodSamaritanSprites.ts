import jesusParable from "@/assets/sprites/good-samaritan/jesus-teaching-parable.png";
import travelerConfronted from "@/assets/sprites/good-samaritan/traveler-confronted.png";
import travelerWounded from "@/assets/sprites/good-samaritan/traveler-wounded.png";
import priest from "@/assets/sprites/good-samaritan/priest-passing.png";
import levite from "@/assets/sprites/good-samaritan/levite-passing.png";
import samaritanDiscovers from "@/assets/sprites/good-samaritan/samaritan-discovers-traveler.png";
import samaritanTreating from "@/assets/sprites/good-samaritan/samaritan-treating-traveler.png";
import samaritanInnkeeper from "@/assets/sprites/good-samaritan/samaritan-traveler-innkeeper.png";
import jesusLikewise from "@/assets/sprites/good-samaritan/jesus-go-likewise.png";

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
