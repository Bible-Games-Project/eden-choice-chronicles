import jesusDisciplesSettingOut from "@/assets/sprites/storm/jesus-disciples-setting-out.png";
import disciplesStruggling from "@/assets/sprites/storm/disciples-struggling.png";
import jesusSleeping from "@/assets/sprites/storm/jesus-sleeping.png";
import disciplesWakingJesus from "@/assets/sprites/storm/disciples-waking-jesus.png";
import jesusCommanding from "@/assets/sprites/storm/jesus-commanding.png";
import jesusTeachingDisciples from "@/assets/sprites/storm/jesus-teaching-disciples.png";
import disciplesAmazed from "@/assets/sprites/storm/disciples-amazed.png";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable transparent portraits: exactly 3 waist-up, remaining sprites knee-up.
export const calmingStormSprites: Record<string, SpriteConfig> = {
  start: { left: jesusDisciplesSettingOut },
  refuse_consequence: { left: jesusDisciplesSettingOut },
  wait_consequence: { left: jesusDisciplesSettingOut },
  storm: { left: disciplesStruggling },
  curse_consequence: { left: disciplesStruggling },
  leap_consequence: { left: disciplesStruggling },
  sleep: { left: jesusSleeping },
  alone_consequence: { left: jesusSleeping },
  wake: { left: disciplesWakingJesus },
  blame_consequence: { left: disciplesWakingJesus },
  silent_consequence: { left: disciplesWakingJesus },
  calm: { left: jesusCommanding },
  doubt_consequence: { left: jesusTeachingDisciples },
  amaze: { left: disciplesAmazed },
};
