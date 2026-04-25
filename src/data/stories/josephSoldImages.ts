import hebronCamp from "@/assets/scenes/joseph-sold/hebron-camp.jpg";
import tentNight from "@/assets/scenes/joseph-sold/tent-night.jpg";
import journeyRoad from "@/assets/scenes/joseph-sold/journey-road.jpg";
import dothanFields from "@/assets/scenes/joseph-sold/dothan-fields.jpg";
import thePit from "@/assets/scenes/joseph-sold/the-pit.jpg";
import caravanDesert from "@/assets/scenes/joseph-sold/caravan-desert.jpg";
import tornCoat from "@/assets/scenes/joseph-sold/torn-coat.jpg";

export const josephSoldImages: Record<string, string> = {
  // Act I
  start: hebronCamp,
  mock_consequence: hebronCamp,
  hide_consequence: hebronCamp,
  thank_father: tentNight,
  secret_consequence: tentNight,
  // Act II
  tell_brothers: hebronCamp,
  retract_consequence: hebronCamp,
  stand_firm: hebronCamp,
  refuse_consequence: hebronCamp,
  servant_consequence: hebronCamp,
  // Act III
  set_out: journeyRoad,
  turnback_consequence: journeyRoad,
  to_dothan: dothanFields,
  run_consequence: dothanFields,
  hide2_consequence: dothanFields,
  // Act IV
  approach: dothanFields,
  curse_consequence: dothanFields,
  fight_consequence: dothanFields,
  beg_reuben: thePit,
  threat_consequence: thePit,
  cry_out: thePit,
  silent_consequence: thePit,
  // Act V
  judah_speaks: thePit,
  plead_consequence: caravanDesert,
  strike_consequence: caravanDesert,
  accept: caravanDesert,
  // Act VI
  to_egypt: caravanDesert,
  father_grief: tornCoat,
  ending: caravanDesert,
};
