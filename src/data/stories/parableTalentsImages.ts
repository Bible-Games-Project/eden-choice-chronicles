import hillsideParable from "@/assets/scenes/talents/hillside-parable.jpg";
import masterHouse from "@/assets/scenes/talents/master-house.jpg";
import marketplace from "@/assets/scenes/talents/marketplace.jpg";
import fieldDigging from "@/assets/scenes/talents/field-digging.jpg";
import masterReturn from "@/assets/scenes/talents/master-return.jpg";
import hallRadiant from "@/assets/scenes/talents/hall-radiant.jpg";
import outerDarkness from "@/assets/scenes/talents/outer-darkness.jpg";
import hillsideRadiant from "@/assets/scenes/talents/hillside-radiant.jpg";

export const parableTalentsImages: Record<string, string> = {
  start: hillsideParable,
  leave_consequence: hillsideParable,
  giving: masterHouse,
  resent_consequence: masterHouse,
  five: marketplace,
  mock_consequence: marketplace,
  two: marketplace,
  wait_consequence: marketplace,
  one: fieldDigging,
  fear_consequence: fieldDigging,
  hide_consequence: fieldDigging,
  return: masterReturn,
  excuse_consequence: masterReturn,
  reward_five: hallRadiant,
  envy_consequence: hallRadiant,
  reward_two: hallRadiant,
  small_consequence: hallRadiant,
  judgment_one: outerDarkness,
  defend_consequence: outerDarkness,
  ending: hillsideRadiant,
};
