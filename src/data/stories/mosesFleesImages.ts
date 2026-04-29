import brickSite from "@/assets/scenes/moses-flees/brick-site.jpg";
import egyptianAlley from "@/assets/scenes/moses-flees/egyptian-alley.jpg";
import sandGrave from "@/assets/scenes/moses-flees/sand-grave.jpg";
import pharaohHall from "@/assets/scenes/moses-flees/pharaoh-hall.jpg";
import desertDunes from "@/assets/scenes/moses-flees/desert-dunes.jpg";
import desertCanyon from "@/assets/scenes/moses-flees/desert-canyon.jpg";
import midianWell from "@/assets/scenes/moses-flees/midian-well.jpg";

export const mosesFleesImages: Record<string, string> = {
  // Act I
  start: brickSite,
  walk_away_consequence: brickSite,
  call_guards_consequence: brickSite,
  watch_closer: brickSite,
  shout_consequence: brickSite,
  bribe_consequence: brickSite,
  // Act II
  no_one_sees: brickSite,
  run_palace_consequence: brickSite,
  strike_egyptian: brickSite,
  leave_body_consequence: brickSite,
  boast_consequence: brickSite,
  bury_body: sandGrave,
  tell_elders_consequence: sandGrave,
  // Act III
  return_palace: pharaohHall,
  hide_chamber_consequence: pharaohHall,
  second_day: brickSite,
  take_side_consequence: brickSite,
  ignore_consequence: brickSite,
  rebuke_them: brickSite,
  deny_consequence: brickSite,
  threaten_consequence: brickSite,
  // Act IV
  exposed: egyptianAlley,
  beg_pharaoh_consequence: pharaohHall,
  hide_hebrews_consequence: egyptianAlley,
  pharaoh_hears: pharaohHall,
  river_consequence: egyptianAlley,
  revolt_consequence: egyptianAlley,
  // Act V
  leave_egypt: egyptianAlley,
  wait_gate_consequence: egyptianAlley,
  desert_walk: desertDunes,
  surrender_consequence: desertDunes,
  curse_consequence: desertDunes,
  canyon_pause: desertCanyon,
  give_up_consequence: desertCanyon,
  see_well: midianWell,
  hide_well_consequence: midianWell,
  meet_midianite: midianWell,
  refuse_consequence: midianWell,
  lie_consequence: midianWell,
  ending: midianWell,
};
