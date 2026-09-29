import jesusReturning from "@/assets/sprites/rejection-nazareth/jesus-returning.png";
import jesusScroll from "@/assets/sprites/rejection-nazareth/jesus-scroll.png";
import townspeopleAmazed from "@/assets/sprites/rejection-nazareth/townspeople-amazed.png";
import townspeopleDoubting from "@/assets/sprites/rejection-nazareth/townspeople-doubting.png";
import elderQuestioning from "@/assets/sprites/rejection-nazareth/elder-questioning.png";
import townspeopleRejecting from "@/assets/sprites/rejection-nazareth/townspeople-rejecting.png";
import jesusExplaining from "@/assets/sprites/rejection-nazareth/jesus-explaining.png";
import jesusLeaving from "@/assets/sprites/rejection-nazareth/jesus-leaving.png";

import { SpriteConfig } from "@/data/creationSprites";

export const rejectionNazarethSprites: Record<string, SpriteConfig> = {
  start: { left: jesusReturning },
  boast_consequence: { left: jesusReturning },
  ashamed_consequence: { left: jesusReturning },
  synagogue: { left: jesusScroll },
  whisper_consequence: { left: jesusScroll },
  scroll: { left: townspeopleAmazed },
  test_consequence: { left: townspeopleAmazed },
  walkout_consequence: { left: townspeopleAmazed },
  doubt: { left: townspeopleDoubting },
  join_consequence: { left: townspeopleDoubting },
  carpenter: { left: elderQuestioning },
  agree_consequence: { left: elderQuestioning },
  mock_consequence: { left: elderQuestioning },
  rejection: { left: townspeopleRejecting },
  slip_consequence: { left: townspeopleRejecting },
  explain: { left: jesusExplaining },
  argue_consequence: { left: jesusExplaining },
  leaving: { left: jesusLeaving },
  stay_consequence: { left: jesusLeaving },
  ending: { left: jesusLeaving },
};
