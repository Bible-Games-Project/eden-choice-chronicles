import jerichoApproach from "@/assets/scenes/jericho/jericho-approach.jpg";
import divineHill from "@/assets/scenes/jericho/divine-hill.jpg";
import wallsMarch from "@/assets/scenes/jericho/walls-march.jpg";
import campNight from "@/assets/scenes/jericho/camp-night.jpg";
import wallsFalling from "@/assets/scenes/jericho/walls-falling.jpg";
import cityEntered from "@/assets/scenes/jericho/city-entered.jpg";

export const jerichoImages: Record<string, string> = {
  start: jerichoApproach,
  charge_consequence: jerichoApproach,
  siege_consequence: jerichoApproach,
  divine_word: divineHill,
  argue_consequence: divineHill,
  instruct_priests: campNight,
  hide_consequence: campNight,
  rear_consequence: campNight,
  first_march: wallsMarch,
  shout_consequence: wallsMarch,
  sixth_day: campNight,
  quit_consequence: campNight,
  seventh_day: wallsMarch,
  wait_consequence: wallsMarch,
  walls_fall: wallsFalling,
  boast_consequence: wallsFalling,
  ending_obedient: cityEntered,
};
