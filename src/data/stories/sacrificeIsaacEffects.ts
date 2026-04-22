import { SceneEffect } from "@/components/SceneEffects";

export const sacrificeIsaacEffects: Record<string, SceneEffect> = {
  // Act I — night by the tent
  start: "fireflies",
  doubt_consequence: "fireflies",
  the_command: "fireflies",
  refuse_consequence: "fireflies",
  bargain_consequence: "fireflies",
  // Act II — dawn
  the_weight: "leaves",
  delay_consequence: "leaves",
  tell_sarah_consequence: "leaves",
  departure: "leaves",
  lie_consequence: "leaves",
  // Act III — desert road
  the_road: "leaves",
  harden_consequence: "leaves",
  turn_back_consequence: "leaves",
  mountain_in_sight: "leaves",
  servants_consequence: "leaves",
  // Act IV — ascent
  leave_servants: "leaves",
  isaacs_question: "leaves",
  tell_truth_consequence: "leaves",
  silence_consequence: "leaves",
  // Act V — altar
  summit: "leaves",
  stop_consequence: "leaves",
  the_binding: "leaves",
  flee_consequence: "leaves",
  // Act VI — divine intervention
  the_knife: "sparkles",
  strike_consequence: "sparkles",
  the_stay: "sparkles",
  the_ram: "sparkles",
  no_sacrifice_consequence: "sparkles",
  the_name: "sparkles",
  // Act VII — blessing
  the_blessing: "sparkles",
  homecoming: "fireflies",
};
