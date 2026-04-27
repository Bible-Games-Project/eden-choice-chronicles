import cell from "@/assets/scenes/joseph-dreams/cell-dawn.jpg";
import antechamber from "@/assets/scenes/joseph-dreams/antechamber.jpg";
import throneHall from "@/assets/scenes/joseph-dreams/throne-hall.jpg";
import nile from "@/assets/scenes/joseph-dreams/nile-dream.jpg";
import grain from "@/assets/scenes/joseph-dreams/grain-fields.jpg";
import courtyard from "@/assets/scenes/joseph-dreams/palace-courtyard.jpg";
import road from "@/assets/scenes/joseph-dreams/procession-road.jpg";

export const josephDreamsImages: Record<string, string> = {
  // Act I
  start: cell,
  curse_consequence: cell,
  hide_consequence: cell,
  summons: cell,
  boast_consequence: cell,
  refuse_consequence: cell,
  preparation: antechamber,
  rehearse_consequence: antechamber,
  // Act II
  antechamber_arrive: antechamber,
  demand_consequence: antechamber,
  throne_enter: throneHall,
  stare_consequence: throneHall,
  pharaoh_speaks: throneHall,
  claim_consequence: throneHall,
  try_consequence: throneHall,
  // Act III
  humble_answer: throneHall,
  interrupt_consequence: throneHall,
  cattle_dream: nile,
  egypt_lore_consequence: nile,
  grain_dream: grain,
  idols_consequence: grain,
  sign_consequence: grain,
  // Act IV
  interpretation: throneHall,
  soften_consequence: throneHall,
  plain_truth: throneHall,
  stop_consequence: throneHall,
  give_counsel: throneHall,
  self_consequence: throneHall,
  silver_consequence: throneHall,
  // Act V
  leave_choice: throneHall,
  push_consequence: throneHall,
  pharaoh_chooses: throneHall,
  refuse2_consequence: throneHall,
  ring_given: courtyard,
  forget_consequence: courtyard,
  ride_out: road,
  revenge_consequence: road,
  boast2_consequence: road,
  ending: road,
};
