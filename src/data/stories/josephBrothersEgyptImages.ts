import grainCourtyard from "@/assets/scenes/joseph-brothers-egypt/grain-courtyard.jpg";
import audienceHall from "@/assets/scenes/joseph-brothers-egypt/audience-hall.jpg";
import holdingChamber from "@/assets/scenes/joseph-brothers-egypt/holding-chamber.jpg";
import caravanRoad from "@/assets/scenes/joseph-brothers-egypt/caravan-road.jpg";
import desertNight from "@/assets/scenes/joseph-brothers-egypt/desert-camp-night.jpg";
import canaanTents from "@/assets/scenes/joseph-brothers-egypt/canaan-tents.jpg";
import innerChamber from "@/assets/scenes/joseph-brothers-egypt/inner-chamber.jpg";

export const josephBrothersEgyptImages: Record<string, string> = {
  // Act I
  start: grainCourtyard,
  wave_consequence: grainCourtyard,
  demand_consequence: grainCourtyard,
  recognize: audienceHall,
  reveal_consequence: audienceHall,
  arrest_consequence: audienceHall,
  // Act II
  hide_face: audienceHall,
  skip_consequence: audienceHall,
  spy_accusation: audienceHall,
  smile_consequence: audienceHall,
  they_protest: audienceHall,
  pretend_consequence: audienceHall,
  mock_consequence: audienceHall,
  // Act III
  demand_benjamin: audienceHall,
  free_consequence: audienceHall,
  three_days: holdingChamber,
  all_stay_consequence: holdingChamber,
  keep_one: holdingChamber,
  ignore_consequence: holdingChamber,
  overhear: holdingChamber,
  tears_open_consequence: innerChamber,
  weep_alone: innerChamber,
  reuben_consequence: holdingChamber,
  bind_simeon: holdingChamber,
  empty_consequence: holdingChamber,
  // Act IV
  fill_sacks: grainCourtyard,
  silver_consequence: grainCourtyard,
  open_consequence: grainCourtyard,
  silver_hidden: grainCourtyard,
  no_warning_consequence: grainCourtyard,
  // Act V
  send_off: caravanRoad,
  run_consequence: caravanRoad,
  first_camp: desertNight,
  silver_found: desertNight,
  press_on: caravanRoad,
  hide_consequence: caravanRoad,
  // Act VI
  tell_jacob: canaanTents,
  argue_consequence: canaanTents,
  walk_consequence: canaanTents,
  promise_jacob: canaanTents,
  force_consequence: canaanTents,
  // Act VII
  wait_famine: canaanTents,
  boast_consequence: canaanTents,
  judah_speaks: canaanTents,
  mock_judah_consequence: canaanTents,
  father_relents: canaanTents,
  stingy_consequence: canaanTents,
  preparation: canaanTents,
  no_pray_consequence: canaanTents,
  ending: caravanRoad,
};
