import wildernessCamp from "@/assets/scenes/rebellion-people/wilderness-camp.jpg";
import campGathering from "@/assets/scenes/rebellion-people/camp-gathering.jpg";
import prayerHill from "@/assets/scenes/rebellion-people/prayer-hill.jpg";
import campNight from "@/assets/scenes/rebellion-people/camp-night.jpg";
import desertGround from "@/assets/scenes/rebellion-people/desert-ground.jpg";
import wildernessPath from "@/assets/scenes/rebellion-people/wilderness-path.jpg";

export const rebellionPeopleImages: Record<string, string> = {
  // Act I
  start: wildernessCamp,
  shout_consequence: wildernessCamp,
  ignore_consequence: wildernessCamp,
  // Act II
  complaints: campGathering,
  agree_consequence: campGathering,
  promise_consequence: campGathering,
  // Act III
  egypt_longing: campGathering,
  step_aside_consequence: campGathering,
  curse_consequence: campGathering,
  // Act IV
  intercede: prayerHill,
  self_consequence: prayerHill,
  demand_consequence: prayerHill,
  // Act V
  joshua_warns: prayerHill,
  hide_consequence_2: prayerHill,
  // Act VI
  consequences: desertGround,
  hide_verdict_consequence: desertGround,
  blame_consequence: desertGround,
  // Act VII
  people_mourn: campNight,
  mock_consequence: campNight,
  ending: wildernessPath,
};
