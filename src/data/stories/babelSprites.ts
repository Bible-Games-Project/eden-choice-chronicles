import builderArrival from "@/assets/sprites/babel/builder-arrival.png";
import crowdUnity from "@/assets/sprites/babel/crowd-unity.png";
import elderProposal from "@/assets/sprites/babel/elder-proposal.png";
import builderBricks from "@/assets/sprites/babel/builder-bricks.png";
import buildersWorking from "@/assets/sprites/babel/builders-working.png";
import builderProud from "@/assets/sprites/babel/builder-proud.png";
import builderSummit from "@/assets/sprites/babel/builder-summit.png";
import builderSmall from "@/assets/sprites/babel/builder-small.png";
import buildersConfused from "@/assets/sprites/babel/builders-confused.png";
import familiesScattering from "@/assets/sprites/babel/families-scattering.png";
import builderHumble from "@/assets/sprites/babel/builder-humble.png";

import { SpriteConfig } from "@/data/creationSprites";

export const babelSprites: Record<string, SpriteConfig> = {
  start: { left: builderArrival },
  unity: { left: crowdUnity },
  proposal: { left: elderProposal },
  bricks: { left: builderBricks },
  construction: { left: buildersWorking },
  rising: { left: builderProud },
  summit: { left: builderSummit },
  gods_gaze: { left: builderSmall },
  confusion: { left: buildersConfused },
  scattering: { left: familiesScattering },
  reflection: { left: builderHumble },
};
