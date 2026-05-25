import blindBegging from "@/assets/sprites/blind-man/blind-begging.png";
import jesusMakingMud from "@/assets/sprites/blind-man/jesus-making-mud.png";
import jesusAnointing from "@/assets/sprites/blind-man/jesus-anointing.png";
import manWashing from "@/assets/sprites/blind-man/man-washing.png";
import manSeeing from "@/assets/sprites/blind-man/man-seeing.png";
import phariseesQuestioning from "@/assets/sprites/blind-man/pharisees-questioning.png";
import manTestifying from "@/assets/sprites/blind-man/man-testifying.png";

import { SpriteConfig } from "@/data/creationSprites";

export const blindManSprites: Record<string, SpriteConfig> = {
  start: { left: blindBegging },
  curse_consequence: { left: blindBegging },
  beg_consequence: { left: blindBegging },
  reveal: { left: jesusMakingMud },
  doubt_consequence: { left: jesusMakingMud },
  mud: { left: jesusAnointing },
  pull_consequence: { left: jesusAnointing },
  wipe_consequence: { left: jesusAnointing },
  send: { left: jesusMakingMud },
  stay_consequence: { left: jesusMakingMud },
  wash: { left: manWashing },
  shut_consequence: { left: manWashing },
  see: { left: manSeeing },
  hide_consequence: { left: manSeeing },
  pharisees: { left: phariseesQuestioning },
  lie_consequence: { left: phariseesQuestioning },
  silent_consequence: { left: phariseesQuestioning },
  testify: { left: manTestifying },
};
