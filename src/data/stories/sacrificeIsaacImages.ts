import tentNight from "@/assets/scenes/isaac/tent-night.jpg";
import dawnCamp from "@/assets/scenes/isaac/dawn-camp.jpg";
import journeyRoad from "@/assets/scenes/isaac/journey-road.jpg";
import mountainBase from "@/assets/scenes/isaac/mountain-base.jpg";
import mountainPath from "@/assets/scenes/isaac/mountain-path.jpg";
import altar from "@/assets/scenes/isaac/altar.jpg";
import altarLight from "@/assets/scenes/isaac/altar-light.jpg";
import thicket from "@/assets/scenes/isaac/thicket.jpg";
import blessingVista from "@/assets/scenes/isaac/blessing-vista.jpg";

export const sacrificeIsaacImages: Record<string, string> = {
  // Act I — Call
  start: tentNight,
  doubt_consequence: tentNight,
  the_command: tentNight,
  refuse_consequence: tentNight,
  bargain_consequence: tentNight,
  // Act II — Preparation
  the_weight: dawnCamp,
  delay_consequence: dawnCamp,
  tell_sarah_consequence: dawnCamp,
  departure: dawnCamp,
  lie_consequence: dawnCamp,
  // Act III — Journey
  the_road: journeyRoad,
  harden_consequence: journeyRoad,
  turn_back_consequence: journeyRoad,
  mountain_in_sight: mountainBase,
  servants_consequence: mountainBase,
  // Act IV — Ascent
  leave_servants: mountainPath,
  isaacs_question: mountainPath,
  tell_truth_consequence: mountainPath,
  silence_consequence: mountainPath,
  // Act V — Altar
  summit: altar,
  stop_consequence: altar,
  the_binding: altar,
  flee_consequence: altar,
  // Act VI — Voice
  the_knife: altar,
  strike_consequence: altar,
  the_stay: altarLight,
  the_ram: thicket,
  no_sacrifice_consequence: thicket,
  the_name: altarLight,
  // Act VII — Blessing
  the_blessing: blessingVista,
  homecoming: blessingVista,
};
