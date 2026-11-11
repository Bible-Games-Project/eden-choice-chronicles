import jesusParable from "@/assets/sprites/talents/jesus-parable.webp";
import jesusCharge from "@/assets/sprites/talents/jesus-charge.webp";
import masterGiving from "@/assets/sprites/talents/master-giving.webp";
import masterReturning from "@/assets/sprites/talents/master-returning.webp";
import masterPleased from "@/assets/sprites/talents/master-pleased.webp";
import masterStern from "@/assets/sprites/talents/master-stern.webp";
import servantFive from "@/assets/sprites/talents/servant-five.webp";
import servantTwo from "@/assets/sprites/talents/servant-two.webp";
import servantOneFearful from "@/assets/sprites/talents/servant-one-fearful.webp";
import servantOneDefensive from "@/assets/sprites/talents/servant-one-defensive.webp";

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
