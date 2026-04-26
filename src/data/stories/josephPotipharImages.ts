import courtyard from "@/assets/scenes/joseph-potiphar/courtyard-arrival.jpg";
import hall from "@/assets/scenes/joseph-potiphar/hall-interior.jpg";
import chamber from "@/assets/scenes/joseph-potiphar/chamber-interior.jpg";
import garden from "@/assets/scenes/joseph-potiphar/garden-storehouse.jpg";
import corridor from "@/assets/scenes/joseph-potiphar/corridor-empty.jpg";
import judgment from "@/assets/scenes/joseph-potiphar/judgment-hall.jpg";
import prison from "@/assets/scenes/joseph-potiphar/prison-gate.jpg";

export const josephPotipharImages: Record<string, string> = {
  // Act I
  start: courtyard,
  run_consequence: courtyard,
  demand_consequence: courtyard,
  serve_well: garden,
  steal_consequence: garden,
  boast_consequence: garden,
  // Act II
  trusted: hall,
  wealth_consequence: hall,
  diligent: garden,
  credit_consequence: garden,
  // Act III
  noticed: hall,
  smile_consequence: hall,
  first_advance: chamber,
  weigh_consequence: chamber,
  yield_consequence: chamber,
  she_persists: hall,
  confront_consequence: hall,
  tell_consequence: hall,
  // Act IV
  the_empty_house: corridor,
  linger_consequence: corridor,
  she_grabs: chamber,
  wrestle_consequence: chamber,
  yield2_consequence: chamber,
  // Act V
  fled: corridor,
  hide2_consequence: corridor,
  her_cry: corridor,
  shout_consequence: corridor,
  flee_consequence: corridor,
  // Act VI
  before_potiphar: judgment,
  beg_consequence: judgment,
  curse_consequence: judgment,
  to_prison: prison,
  ending: prison,
};
