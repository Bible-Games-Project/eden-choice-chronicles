import roadToEgypt from "@/assets/scenes/moses-pharaoh/road-to-egypt-arrival.jpg";
import hebrewSettlement from "@/assets/scenes/moses-pharaoh/hebrew-settlement.jpg";
import palaceGates from "@/assets/scenes/moses-pharaoh/palace-gates.jpg";
import throneHall from "@/assets/scenes/moses-pharaoh/throne-hall.jpg";
import brickFields from "@/assets/scenes/moses-pharaoh/brick-fields.jpg";
import desertRise from "@/assets/scenes/moses-pharaoh/desert-rise.jpg";

export const mosesPharaohImages: Record<string, string> = {
  // Act I — Return
  start: roadToEgypt,
  turn_back_consequence: roadToEgypt,
  wait_sign_consequence: roadToEgypt,
  meet_aaron: roadToEgypt,
  test_aaron_consequence: roadToEgypt,
  tell_elders: hebrewSettlement,
  soften_consequence: hebrewSettlement,
  boast_elders_consequence: hebrewSettlement,
  elders_believe: hebrewSettlement,
  // Act II — Palace
  palace_gates: palaceGates,
  force_consequence: palaceGates,
  bribe_consequence: palaceGates,
  court_official: palaceGates,
  hide_sender_consequence: palaceGates,
  // Act III — Before Pharaoh
  enter_throne_hall: throneHall,
  worship_consequence: throneHall,
  run_hall_consequence: throneHall,
  before_pharaoh: throneHall,
  beg_consequence: throneHall,
  threaten_consequence: throneHall,
  pharaoh_mocks: throneHall,
  curse_consequence: throneHall,
  apologize_consequence: throneHall,
  demand_again: throneHall,
  lie_consequence: throneHall,
  // Act IV — Refusal
  pharaoh_refuses: throneHall,
  argue_consequence: throneHall,
  flee_consequence: throneHall,
  harsher_labor: throneHall,
  hide_decree_consequence: throneHall,
  // Act V — Burden
  foremen_beaten: brickFields,
  hide_face_consequence: brickFields,
  strike_guard_consequence: brickFields,
  israelites_blame: brickFields,
  defend_consequence: brickFields,
  curse_people_consequence: brickFields,
  moses_cries_out: desertRise,
  resign_consequence: desertRise,
  blame_aaron_consequence: desertRise,
  ending: desertRise,
};
