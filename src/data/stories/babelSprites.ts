import builderStart from "@/assets/sprites/babel/builder-start.png";
import builderAmbition from "@/assets/sprites/babel/builder-ambition.png";
import builderWorking from "@/assets/sprites/babel/builder-working.png";
import builderProud from "@/assets/sprites/babel/builder-proud.png";
import builderAfraid from "@/assets/sprites/babel/builder-afraid.png";
import builderConfused from "@/assets/sprites/babel/builder-confused.png";
import builderPanic from "@/assets/sprites/babel/builder-panic.png";
import builderWalking from "@/assets/sprites/babel/builder-walking.png";
import builderHumble from "@/assets/sprites/babel/builder-humble.png";
import builderReflection from "@/assets/sprites/babel/builder-reflection.png";
import elderWarning from "@/assets/sprites/babel/elder-warning.png";

import { SpriteConfig } from "@/data/creationSprites";

export const babelSprites: Record<string, SpriteConfig> = {
  start: { left: builderStart },
  unity: { left: builderStart },
  ambition_seed: { left: builderAmbition },
  first_bricks: { left: builderWorking },
  the_idea: { left: builderAmbition },
  doubt_rises: { left: builderStart, right: elderWarning },
  construction_begins: { left: builderWorking },
  tower_rising: { left: builderProud },
  gods_gaze: { left: builderAfraid },
  the_confusion: { left: builderConfused },
  panic: { left: builderPanic },
  scattering: { left: builderWalking },
  new_land: { left: builderHumble },
  reflection: { left: builderReflection },
};
