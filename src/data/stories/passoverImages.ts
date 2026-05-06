import mosesReceives from "@/assets/scenes/passover/moses-receives.jpg";
import hebrewHomeNight from "@/assets/scenes/passover/hebrew-home-night.jpg";
import doorpostBlood from "@/assets/scenes/passover/doorpost-blood.jpg";
import nightJudgment from "@/assets/scenes/passover/night-judgment.jpg";
import pharaohGrief from "@/assets/scenes/passover/pharaoh-grief.jpg";
import exodusDawn from "@/assets/scenes/passover/exodus-dawn.jpg";

export const passoverImages: Record<string, string> = {
  // Act I — Instruction
  start: mosesReceives,
  argue_consequence: mosesReceives,
  hide_consequence: mosesReceives,
  // Act II — Lamb
  gather_elders: hebrewHomeNight,
  any_animal_consequence: hebrewHomeNight,
  lamb_chosen: hebrewHomeNight,
  hide_blood_consequence: hebrewHomeNight,
  ground_consequence: hebrewHomeNight,
  // Act III — Doorposts and meal
  doorposts_marked: doorpostBlood,
  boil_consequence: hebrewHomeNight,
  meal_prepared: hebrewHomeNight,
  ease_consequence: hebrewHomeNight,
  wander_consequence: hebrewHomeNight,
  // Act IV — Night
  stay_inside: nightJudgment,
  open_consequence: nightJudgment,
  boast_consequence: nightJudgment,
  // Act V — Pharaoh breaks
  morning_summons: nightJudgment,
  refuse_consequence: nightJudgment,
  before_broken_pharaoh: pharaohGrief,
  mock_consequence: pharaohGrief,
  half_consequence: pharaohGrief,
  ending: exodusDawn,
};
