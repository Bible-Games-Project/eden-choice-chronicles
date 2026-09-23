import womanBrought from "@/assets/sprites/woman-adultery/woman-brought.png";
import phariseesAccusing from "@/assets/sprites/woman-adultery/pharisees-accusing.png";
import phariseesTrap from "@/assets/sprites/woman-adultery/pharisees-trap.png";
import jesusWriting from "@/assets/sprites/woman-adultery/jesus-writing.png";
import jesusSpeaking from "@/assets/sprites/woman-adultery/jesus-speaking.png";
import accusersLeaving from "@/assets/sprites/woman-adultery/accusers-leaving.png";
import jesusMercy from "@/assets/sprites/woman-adultery/jesus-mercy.png";
import womanFree from "@/assets/sprites/woman-adultery/woman-free.png";

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
