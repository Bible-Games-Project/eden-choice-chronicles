import gardenEntrance from "@/assets/scenes/gethsemane/garden-entrance.jpg";
import groveClearing from "@/assets/scenes/gethsemane/grove-clearing.jpg";
import prayerStone from "@/assets/scenes/gethsemane/prayer-stone.jpg";
import lightHeaven from "@/assets/scenes/gethsemane/light-from-heaven.jpg";
import oliveAnguish from "@/assets/scenes/gethsemane/olive-anguish.jpg";
import disciplesRest from "@/assets/scenes/gethsemane/disciples-rest.jpg";
import dawnApproaching from "@/assets/scenes/gethsemane/dawn-approaching.jpg";
import pathOnward from "@/assets/scenes/gethsemane/path-onward.jpg";

export const gethsemaneImages: Record<string, string> = {
  start: gardenEntrance,
  back_consequence: gardenEntrance,
  send_consequence: gardenEntrance,
  inner_circle: groveClearing,
  hide_consequence: groveClearing,
  demand_consequence: groveClearing,
  stone_alone: prayerStone,
  shout_consequence: prayerStone,
  demand_father_consequence: prayerStone,
  anguish: oliveAnguish,
  refuse_consequence: oliveAnguish,
  pretend_consequence: oliveAnguish,
  submission: lightHeaven,
  curse_consequence: lightHeaven,
  walk_away_consequence: lightHeaven,
  find_sleeping_1: disciplesRest,
  anger_consequence: disciplesRest,
  leave_consequence: disciplesRest,
  pray_again: prayerStone,
  easier_consequence: prayerStone,
  silent_consequence: prayerStone,
  find_sleeping_2: disciplesRest,
  mock_consequence: disciplesRest,
  flee_consequence: disciplesRest,
  final_resolve: dawnApproaching,
  hide_trees_consequence: dawnApproaching,
  fourth_consequence: dawnApproaching,
  ending: pathOnward,
};
