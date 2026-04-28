import audienceHall from "@/assets/scenes/joseph-reconciles/audience-hall.jpg";
import banquetChamber from "@/assets/scenes/joseph-reconciles/banquet-chamber.jpg";
import roadOutsideCity from "@/assets/scenes/joseph-reconciles/road-outside-city.jpg";
import grainCourtyard from "@/assets/scenes/joseph-reconciles/grain-courtyard.jpg";
import innerChamber from "@/assets/scenes/joseph-reconciles/inner-chamber.jpg";
import canaanTents from "@/assets/scenes/joseph-reconciles/canaan-tents.jpg";
import caravanRoad from "@/assets/scenes/joseph-reconciles/caravan-road.jpg";

export const josephReconcilesImages: Record<string, string> = {
  // Act I
  start: audienceHall,
  strike_consequence: audienceHall,
  hide_consequence: audienceHall,
  greet: audienceHall,
  demand_silver_consequence: audienceHall,
  summon_meal: grainCourtyard,
  fear_consequence: grainCourtyard,
  weep1: innerChamber,
  embrace_too_soon_consequence: innerChamber,
  recover: banquetChamber,
  aloof_consequence: banquetChamber,
  dine: banquetChamber,
  send_home_consequence: banquetChamber,
  // Act II
  cup_plan: innerChamber,
  cancel_consequence: innerChamber,
  wrong_sack_consequence: innerChamber,
  send_off2: roadOutsideCity,
  let_go_consequence: roadOutsideCity,
  overtake: roadOutsideCity,
  accuse_one_consequence: roadOutsideCity,
  search_sacks: roadOutsideCity,
  stop_consequence: roadOutsideCity,
  found_in_benjamin: roadOutsideCity,
  take_one_consequence: roadOutsideCity,
  // Act III
  return_to_palace: audienceHall,
  no_test_consequence: audienceHall,
  fall_down: audienceHall,
  all_prison_consequence: audienceHall,
  death_consequence: audienceHall,
  judah_steps: audienceHall,
  silence_consequence: audienceHall,
  // Act IV
  plea: audienceHall,
  mock_consequence: audienceHall,
  accept_consequence: audienceHall,
  send_attendants_out: audienceHall,
  frighten_consequence: audienceHall,
  reveal: innerChamber,
  roar_consequence: innerChamber,
  brothers_silent: innerChamber,
  demand_confess_consequence: innerChamber,
  // Act V
  comfort: innerChamber,
  condemn_consequence: innerChamber,
  it_was_god: innerChamber,
  shame_consequence: innerChamber,
  kiss_benjamin: innerChamber,
  hide_jacob_consequence: innerChamber,
  send_for_jacob: audienceHall,
  guards_consequence: audienceHall,
  jacob_hears: canaanTents,
  abandon_consequence: canaanTents,
  journey_egypt: caravanRoad,
  servants_consequence: caravanRoad,
  ending: caravanRoad,
};
