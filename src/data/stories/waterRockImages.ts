import desertThirst from "@/assets/scenes/water-rock/desert-thirst.jpg";
import campComplaint from "@/assets/scenes/water-rock/camp-complaint.jpg";
import mosesPrayerHill from "@/assets/scenes/water-rock/moses-prayer-hill.jpg";
import theRock from "@/assets/scenes/water-rock/the-rock.jpg";
import waterFlowing from "@/assets/scenes/water-rock/water-flowing.jpg";
import oasisDawn from "@/assets/scenes/water-rock/oasis-dawn.jpg";

export const waterRockImages: Record<string, string> = {
  // Act I
  start: desertThirst,
  scold_consequence: desertThirst,
  ignore_consequence: desertThirst,
  // Act II
  people_complain: campComplaint,
  strike_consequence: campComplaint,
  // Act III
  moses_prays: mosesPrayerHill,
  demand_consequence: mosesPrayerHill,
  despair_consequence: mosesPrayerHill,
  // Act IV
  god_speaks: mosesPrayerHill,
  doubt_consequence: mosesPrayerHill,
  shift_consequence: mosesPrayerHill,
  // Act V
  approach_rock: theRock,
  boast_consequence: theRock,
  // Act VI
  water_flows: waterFlowing,
  withhold_consequence: waterFlowing,
  people_drink: oasisDawn,
  credit_consequence: oasisDawn,
  silent_consequence: oasisDawn,
  ending: oasisDawn,
};
