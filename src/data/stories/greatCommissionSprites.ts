import disciplesArriving from "@/assets/sprites/great-commission/disciples-arriving.png";
import jesusAppearing from "@/assets/sprites/great-commission/jesus-appearing.png";
import jesusAuthority from "@/assets/sprites/great-commission/jesus-authority.png";
import jesusCommission from "@/assets/sprites/great-commission/jesus-commission.png";
import jesusBaptize from "@/assets/sprites/great-commission/jesus-baptize.png";
import jesusTeaching from "@/assets/sprites/great-commission/jesus-teaching.png";
import jesusPromise from "@/assets/sprites/great-commission/jesus-promise.png";
import disciplesSent from "@/assets/sprites/great-commission/disciples-sent.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const greatCommissionSprites: Record<string, SpriteConfig> = {
  start: { left: disciplesArriving },
  linger_consequence: { left: disciplesArriving },
  empty_consequence: { left: disciplesArriving },
  worship: { left: jesusAppearing },
  doubt_consequence: { left: jesusAppearing },
  reward_consequence: { left: jesusAppearing },
  authority: { left: jesusAuthority },
  argue_consequence: { left: jesusAuthority },
  demand_consequence: { left: jesusAuthority },
  go_nations: { left: jesusCommission },
  israel_consequence: { left: jesusCommission },
  hide_consequence: { left: jesusCommission },
  baptize: { left: jesusBaptize },
  worthy_consequence: { left: jesusBaptize },
  price_consequence: { left: jesusBaptize },
  teach: { left: jesusTeaching },
  easy_consequence: { left: jesusTeaching },
  add_consequence: { left: jesusTeaching },
  presence: { left: jesusPromise },
  fear_consequence: { left: jesusPromise },
  wait_consequence: { left: jesusPromise },
  ending: { left: disciplesSent },
};
