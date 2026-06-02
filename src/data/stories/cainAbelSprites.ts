import cainStart from "@/assets/sprites/cain-abel/cain-start.webp";
import cainToil from "@/assets/sprites/cain-abel/cain-toil.webp";
import cainRest from "@/assets/sprites/cain-abel/cain-rest.webp";
import cainWatching from "@/assets/sprites/cain-abel/cain-watching.webp";
import cainTalk from "@/assets/sprites/cain-abel/cain-talk.webp";
import cainOffering from "@/assets/sprites/cain-abel/cain-offering.webp";
import cainCareless from "@/assets/sprites/cain-abel/cain-careless.webp";
import cainRejected from "@/assets/sprites/cain-abel/cain-rejected.webp";
import cainAngry from "@/assets/sprites/cain-abel/cain-angry.webp";
import cainGodspeaks from "@/assets/sprites/cain-abel/cain-godspeaks.webp";
import cainWarning from "@/assets/sprites/cain-abel/cain-warning.webp";
import cainStruggle from "@/assets/sprites/cain-abel/cain-struggle.webp";
import cainField from "@/assets/sprites/cain-abel/cain-field.webp";
import cainAct from "@/assets/sprites/cain-abel/cain-act.webp";
import cainHorror from "@/assets/sprites/cain-abel/cain-horror.webp";
import cainJudgment from "@/assets/sprites/cain-abel/cain-judgment.webp";
import cainWanderer from "@/assets/sprites/cain-abel/cain-wanderer.webp";

import abelPeaceful from "@/assets/sprites/cain-abel/abel-peaceful.webp";
import abelTalking from "@/assets/sprites/cain-abel/abel-talking.webp";
import abelOffering from "@/assets/sprites/cain-abel/abel-offering.webp";
import abelBlessed from "@/assets/sprites/cain-abel/abel-blessed.webp";
import abelField from "@/assets/sprites/cain-abel/abel-field.webp";

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
