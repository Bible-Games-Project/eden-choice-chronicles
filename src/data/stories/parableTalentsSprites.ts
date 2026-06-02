import jesusParable from "@/assets/sprites/talents/jesus-parable.webp";
import masterGiving from "@/assets/sprites/talents/master-giving.webp";
import servantFiveInvesting from "@/assets/sprites/talents/servant-five-investing.webp";
import servantTwoInvesting from "@/assets/sprites/talents/servant-two-investing.webp";
import servantOneHiding from "@/assets/sprites/talents/servant-one-hiding.webp";
import masterReturning from "@/assets/sprites/talents/master-returning.webp";
import servantFivePraised from "@/assets/sprites/talents/servant-five-praised.webp";
import servantTwoPraised from "@/assets/sprites/talents/servant-two-praised.webp";
import servantOneJudged from "@/assets/sprites/talents/servant-one-judged.webp";
import jesusCharge from "@/assets/sprites/talents/jesus-charge.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const parableTalentsSprites: Record<string, SpriteConfig> = {
  start: { left: jesusParable },
  leave_consequence: { left: jesusParable },
  giving: { left: masterGiving },
  resent_consequence: { left: masterGiving },
  five: { left: servantFiveInvesting },
  mock_consequence: { left: servantFiveInvesting },
  two: { left: servantTwoInvesting },
  wait_consequence: { left: servantTwoInvesting },
  one: { left: servantOneHiding },
  fear_consequence: { left: servantOneHiding },
  hide_consequence: { left: servantOneHiding },
  return: { left: masterReturning },
  excuse_consequence: { left: masterReturning },
  reward_five: { left: servantFivePraised },
  envy_consequence: { left: servantFivePraised },
  reward_two: { left: servantTwoPraised },
  small_consequence: { left: servantTwoPraised },
  judgment_one: { left: servantOneJudged },
  defend_consequence: { left: servantOneJudged },
  ending: { left: jesusCharge },
};
