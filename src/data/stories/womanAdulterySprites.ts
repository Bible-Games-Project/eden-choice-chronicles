import womanBrought from "@/assets/sprites/woman-adultery/woman-brought.webp";
import phariseesAccusing from "@/assets/sprites/woman-adultery/pharisees-accusing.webp";
import phariseesTrap from "@/assets/sprites/woman-adultery/pharisees-trap.webp";
import jesusWriting from "@/assets/sprites/woman-adultery/jesus-writing.webp";
import jesusSpeaking from "@/assets/sprites/woman-adultery/jesus-speaking.webp";
import accusersLeaving from "@/assets/sprites/woman-adultery/accusers-leaving.webp";
import jesusMercy from "@/assets/sprites/woman-adultery/jesus-mercy.webp";
import womanFree from "@/assets/sprites/woman-adultery/woman-free.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const womanAdulterySprites: Record<string, SpriteConfig> = {
  start: { left: womanBrought },
  join_consequence: { left: womanBrought },
  accusation: { left: phariseesAccusing },
  scorn_consequence: { left: phariseesAccusing },
  trap: { left: phariseesTrap },
  demand_consequence: { left: phariseesTrap },
  side_consequence: { left: phariseesTrap },
  writing: { left: jesusWriting },
  mock_consequence: { left: jesusWriting },
  without_sin: { left: jesusSpeaking },
  stone_consequence: { left: jesusSpeaking },
  fool_consequence: { left: jesusSpeaking },
  accusers_leave: { left: accusersLeaving },
  leave_consequence: { left: accusersLeaving },
  mercy: { left: jesusMercy },
  doubt_consequence: { left: jesusMercy },
  ending: { left: womanFree },
};
