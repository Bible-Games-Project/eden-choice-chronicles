import builderArrival from "@/assets/sprites/babel/builder-arrival.webp";
import crowdUnity from "@/assets/sprites/babel/crowd-unity.webp";
import elderProposal from "@/assets/sprites/babel/elder-proposal.webp";
import builderBricks from "@/assets/sprites/babel/builder-bricks.webp";
import buildersWorking from "@/assets/sprites/babel/builders-working.webp";
import builderProud from "@/assets/sprites/babel/builder-proud.webp";
import builderSummit from "@/assets/sprites/babel/builder-summit.webp";
import builderSmall from "@/assets/sprites/babel/builder-small.webp";
import buildersConfused from "@/assets/sprites/babel/builders-confused.webp";
import familiesScattering from "@/assets/sprites/babel/families-scattering.webp";
import builderHumble from "@/assets/sprites/babel/builder-humble.webp";

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
