import cainStart from "@/assets/sprites/cain-abel/cain-start.png";
import cainToil from "@/assets/sprites/cain-abel/cain-toil.png";
import cainRest from "@/assets/sprites/cain-abel/cain-rest.png";
import cainWatching from "@/assets/sprites/cain-abel/cain-watching.png";
import cainTalk from "@/assets/sprites/cain-abel/cain-talk.png";
import cainOffering from "@/assets/sprites/cain-abel/cain-offering.png";
import cainCareless from "@/assets/sprites/cain-abel/cain-careless.png";
import cainRejected from "@/assets/sprites/cain-abel/cain-rejected.png";
import cainAngry from "@/assets/sprites/cain-abel/cain-angry.png";
import cainGodspeaks from "@/assets/sprites/cain-abel/cain-godspeaks.png";
import cainWarning from "@/assets/sprites/cain-abel/cain-warning.png";
import cainStruggle from "@/assets/sprites/cain-abel/cain-struggle.png";
import cainField from "@/assets/sprites/cain-abel/cain-field.png";
import cainAct from "@/assets/sprites/cain-abel/cain-act.png";
import cainHorror from "@/assets/sprites/cain-abel/cain-horror.png";
import cainJudgment from "@/assets/sprites/cain-abel/cain-judgment.png";
import cainWanderer from "@/assets/sprites/cain-abel/cain-wanderer.png";

import abelPeaceful from "@/assets/sprites/cain-abel/abel-peaceful.png";
import abelTalking from "@/assets/sprites/cain-abel/abel-talking.png";
import abelOffering from "@/assets/sprites/cain-abel/abel-offering.png";
import abelBlessed from "@/assets/sprites/cain-abel/abel-blessed.png";
import abelField from "@/assets/sprites/cain-abel/abel-field.png";

import { SpriteConfig } from "@/data/creationSprites";

export const cainAbelSprites: Record<string, SpriteConfig> = {
  start: { left: cainStart },
  toil: { left: cainToil },
  rest: { left: cainRest },
  watch_abel: { left: cainWatching, right: abelPeaceful },
  brothers_talk: { left: cainTalk, right: abelTalking },
  offering_proud: { left: cainOffering, right: abelOffering },
  offering_careless: { left: cainCareless },
  god_responds: { left: cainRejected, right: abelBlessed },
  anger_rises: { left: cainAngry },
  god_speaks: { left: cainGodspeaks },
  warning: { left: cainWarning },
  struggle: { left: cainStruggle },
  the_field: { left: cainField, right: abelField },
  the_act: { left: cainAct },
  blood_cries: { left: cainHorror },
  judgment: { left: cainJudgment },
  wanderer: { left: cainWanderer },
};
