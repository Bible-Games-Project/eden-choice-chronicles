import disciples from "@/assets/sprites/lords-prayer/disciples-asking.png";
import ourFather from "@/assets/sprites/lords-prayer/jesus-our-father.png";
import bread from "@/assets/sprites/lords-prayer/jesus-bread.png";
import forgive from "@/assets/sprites/lords-prayer/jesus-forgive.png";
import forgiveOthers from "@/assets/sprites/lords-prayer/jesus-forgive-others.png";
import deliver from "@/assets/sprites/lords-prayer/jesus-deliver.png";
import privatePrayer from "@/assets/sprites/lords-prayer/jesus-private-prayer.png";

import { SpriteConfig } from "@/data/creationSprites";

export const lordsPrayerSprites: Record<string, SpriteConfig> = {
  start: { left: disciples },
  loud_consequence: { left: disciples },
  empty_consequence: { left: disciples },
  our_father: { left: ourFather },
  stranger_consequence: { left: ourFather },
  bread: { left: bread },
  hoard_consequence: { left: bread },
  greed_consequence: { left: bread },
  forgive: { left: forgive },
  hide_consequence: { left: forgive },
  forgive_others: { left: forgiveOthers },
  wound_consequence: { left: forgiveOthers },
  demand_consequence: { left: forgiveOthers },
  deliver: { left: deliver },
  self_consequence: { left: deliver },
  private: { left: privatePrayer },
  boast_consequence: { left: privatePrayer },
  ending: { left: privatePrayer },
};
