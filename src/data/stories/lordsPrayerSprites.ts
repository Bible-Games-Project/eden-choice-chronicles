import disciplesAsking from "@/assets/sprites/lords-prayer/disciples-asking.png";
import jesusOurFather from "@/assets/sprites/lords-prayer/jesus-our-father.png";
import jesusDailyTrust from "@/assets/sprites/lords-prayer/jesus-daily-trust.png";
import jesusForgiveness from "@/assets/sprites/lords-prayer/jesus-forgiveness.png";
import jesusMercyOthers from "@/assets/sprites/lords-prayer/jesus-mercy-others.png";
import jesusPrayerDeliverance from "@/assets/sprites/lords-prayer/jesus-prayer-deliverance.png";
import disciplesUnderstanding from "@/assets/sprites/lords-prayer/disciples-understanding.png";

import { SpriteConfig } from "@/data/creationSprites";

export const lordsPrayerSprites: Record<string, SpriteConfig> = {
  start: { left: disciplesAsking },
  loud_consequence: { left: disciplesAsking },
  empty_consequence: { left: disciplesAsking },
  our_father: { left: jesusOurFather },
  stranger_consequence: { left: jesusOurFather },
  bread: { left: jesusDailyTrust },
  hoard_consequence: { left: jesusDailyTrust },
  greed_consequence: { left: jesusDailyTrust },
  forgive: { left: jesusForgiveness },
  hide_consequence: { left: jesusForgiveness },
  forgive_others: { left: jesusMercyOthers },
  wound_consequence: { left: jesusMercyOthers },
  demand_consequence: { left: jesusMercyOthers },
  deliver: { left: jesusPrayerDeliverance },
  self_consequence: { left: jesusPrayerDeliverance },
  private: { left: disciplesUnderstanding },
  boast_consequence: { left: disciplesUnderstanding },
  ending: { left: disciplesUnderstanding },
};
