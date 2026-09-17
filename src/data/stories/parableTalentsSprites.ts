import jesusParable from "@/assets/sprites/talents/jesus-parable.png";
import jesusCharge from "@/assets/sprites/talents/jesus-charge.png";
import masterGiving from "@/assets/sprites/talents/master-giving.png";
import masterReturning from "@/assets/sprites/talents/master-returning.png";
import masterPleased from "@/assets/sprites/talents/master-pleased.png";
import masterStern from "@/assets/sprites/talents/master-stern.png";
import servantFive from "@/assets/sprites/talents/servant-five.png";
import servantTwo from "@/assets/sprites/talents/servant-two.png";
import servantOneFearful from "@/assets/sprites/talents/servant-one-fearful.png";
import servantOneDefensive from "@/assets/sprites/talents/servant-one-defensive.png";

import { SpriteConfig } from "@/data/creationSprites";

export const parableTalentsSprites: Record<string, SpriteConfig> = {
  start: { left: jesusParable },
  leave_consequence: { left: jesusParable },
  giving: { left: masterGiving },
  resent_consequence: { left: masterGiving },
  five: { left: servantFive },
  mock_consequence: { left: servantFive },
  two: { left: servantTwo },
  wait_consequence: { left: servantTwo },
  one: { left: servantOneFearful },
  fear_consequence: { left: servantOneFearful },
  hide_consequence: { left: servantOneFearful },
  return: { left: masterReturning },
  excuse_consequence: { left: masterReturning },
  reward_five: { left: servantFive },
  envy_consequence: { left: servantFive },
  reward_two: { left: masterPleased },
  small_consequence: { left: masterPleased },
  judgment_one: { left: masterStern },
  defend_consequence: { left: servantOneDefensive },
  ending: { left: jesusCharge },
};
