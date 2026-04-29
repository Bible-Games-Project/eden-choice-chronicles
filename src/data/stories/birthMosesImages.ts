import hebrewHome from "@/assets/scenes/birth-moses/hebrew-home.jpg";
import egyptianStreet from "@/assets/scenes/birth-moses/egyptian-street.jpg";
import nileReeds from "@/assets/scenes/birth-moses/nile-reeds.jpg";
import palaceGarden from "@/assets/scenes/birth-moses/palace-garden.jpg";
import palaceChamber from "@/assets/scenes/birth-moses/palace-chamber.jpg";
import basketInReeds from "@/assets/scenes/birth-moses/basket-in-reeds.jpg";
import hebrewVillage from "@/assets/scenes/birth-moses/hebrew-village.jpg";

export const birthMosesImages: Record<string, string> = {
  // Act I
  start: egyptianStreet,
  hand_consequence: egyptianStreet,
  flee_consequence: hebrewVillage,
  hide_home: hebrewHome,
  show_consequence: hebrewHome,
  growing_baby: hebrewHome,
  bury_consequence: hebrewHome,
  prayer: hebrewHome,
  ignore_consequence: hebrewHome,
  // Act II
  weave_basket: hebrewHome,
  clay_consequence: hebrewHome,
  miriam_called: hebrewHome,
  anger_consequence: hebrewHome,
  lie_consequence: hebrewHome,
  to_river: nileReeds,
  throw_consequence: nileReeds,
  place_basket: basketInReeds,
  snatch_consequence: basketInReeds,
  // Act III
  miriam_watch: nileReeds,
  swim_consequence: nileReeds,
  princess_arrives: palaceGarden,
  stone_consequence: palaceGarden,
  she_sees: palaceGarden,
  shout_consequence: palaceGarden,
  // Act IV
  she_opens: palaceGarden,
  beg_consequence: palaceGarden,
  compassion: palaceGarden,
  silent_consequence: palaceGarden,
  miriam_offers: palaceGarden,
  egyptian_consequence: palaceGarden,
  // Act V
  yes_go: nileReeds,
  refuse_consequence: hebrewHome,
  before_princess: palaceGarden,
  confess_consequence: palaceGarden,
  wages: palaceGarden,
  pride_consequence: palaceGarden,
  home_again: hebrewHome,
  hide_forever_consequence: hebrewHome,
  return_palace: palaceChamber,
  runaway_consequence: palaceChamber,
  named_moses: palaceChamber,
  ending: palaceChamber,
};
