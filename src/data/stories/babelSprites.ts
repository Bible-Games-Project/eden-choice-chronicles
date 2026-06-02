import builderStart from "@/assets/sprites/babel/builder-start.webp";
import builderAmbition from "@/assets/sprites/babel/builder-ambition.webp";
import builderWorking from "@/assets/sprites/babel/builder-working.webp";
import builderProud from "@/assets/sprites/babel/builder-proud.webp";
import builderAfraid from "@/assets/sprites/babel/builder-afraid.webp";
import builderConfused from "@/assets/sprites/babel/builder-confused.webp";
import builderPanic from "@/assets/sprites/babel/builder-panic.webp";
import builderWalking from "@/assets/sprites/babel/builder-walking.webp";
import builderHumble from "@/assets/sprites/babel/builder-humble.webp";
import builderReflection from "@/assets/sprites/babel/builder-reflection.webp";
import elderWarning from "@/assets/sprites/babel/elder-warning.webp";

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
