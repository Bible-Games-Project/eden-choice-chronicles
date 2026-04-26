import gate from "@/assets/scenes/joseph-prison/prison-gate.jpg";
import cell from "@/assets/scenes/joseph-prison/cell-interior.jpg";
import corridor from "@/assets/scenes/joseph-prison/prison-corridor.jpg";
import courtyard from "@/assets/scenes/joseph-prison/courtyard-dawn.jpg";
import chamber from "@/assets/scenes/joseph-prison/chamber-night.jpg";
import shared from "@/assets/scenes/joseph-prison/shared-cell.jpg";

export const josephPrisonImages: Record<string, string> = {
  // Act I
  start: gate,
  curse_consequence: gate,
  escape_consequence: gate,
  first_night: chamber,
  despair_consequence: chamber,
  // Act II
  morning_work: corridor,
  refuse_consequence: corridor,
  lazy_consequence: corridor,
  faithful_work: corridor,
  boast_consequence: corridor,
  trusted_steward: corridor,
  demand_consequence: corridor,
  // Act III
  two_arrivals: shared,
  ignore_consequence: shared,
  mock_consequence: shared,
  morning_sad: shared,
  silent_consequence: shared,
  greedy_consequence: shared,
  interpret_offer: shared,
  // Act IV
  cupbearer_dream: chamber,
  flatter_consequence: chamber,
  cupbearer_meaning: chamber,
  demand_wages_consequence: chamber,
  remember_request: chamber,
  baker_dream: chamber,
  lie_consequence: chamber,
  refuse_interp_consequence: chamber,
  baker_meaning: chamber,
  // Act V
  third_day: courtyard,
  wait_news: courtyard,
  rage_consequence: courtyard,
  curse2_consequence: courtyard,
  forgotten: cell,
  despair2_consequence: cell,
  bribe_consequence: cell,
  still_trust: cell,
  ending: cell,
};
