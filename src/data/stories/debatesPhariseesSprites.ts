import phariseesApproaching from "@/assets/sprites/debates-pharisees/pharisees-approaching.png";
import phariseesQuestioning from "@/assets/sprites/debates-pharisees/pharisees-questioning.png";
import jesusCoin from "@/assets/sprites/debates-pharisees/jesus-coin.png";
import jesusAuthority from "@/assets/sprites/debates-pharisees/jesus-authority.png";
import jesusCommandment from "@/assets/sprites/debates-pharisees/jesus-commandment.png";
import jesusRebuking from "@/assets/sprites/debates-pharisees/jesus-rebuking.png";
import crowdAmazed from "@/assets/sprites/debates-pharisees/crowd-amazed.png";
import jesusTruth from "@/assets/sprites/debates-pharisees/jesus-truth.png";

import { SpriteConfig } from "@/data/creationSprites";

export const debatesPhariseesSprites: Record<string, SpriteConfig> = {
  start: { left: phariseesApproaching },
  hide_consequence: { left: phariseesApproaching },
  insult_consequence: { left: phariseesApproaching },
  trap_question: { left: phariseesQuestioning },
  shout_consequence: { left: phariseesQuestioning },
  coin: { left: jesusCoin },
  refuse_consequence: { left: jesusCoin },
  lie_consequence: { left: jesusCoin },
  authority: { left: jesusAuthority },
  mock_consequence: { left: jesusAuthority },
  greatest_commandment: { left: jesusCommandment },
  guess_consequence: { left: jesusCommandment },
  deaf_consequence: { left: jesusCommandment },
  hypocrisy: { left: jesusRebuking },
  defend_consequence: { left: jesusRebuking },
  crowd_amazed: { left: crowdAmazed },
  boast_consequence: { left: crowdAmazed },
  truth_remains: { left: jesusTruth },
  forget_consequence: { left: jesusTruth },
  ending: { left: jesusTruth },
};
