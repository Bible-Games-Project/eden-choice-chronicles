import sanhedrinHall from "@/assets/scenes/trial/sanhedrin-hall.jpg";
import witnessChamber from "@/assets/scenes/trial/witness-chamber.jpg";
import courtyardDawn from "@/assets/scenes/trial/courtyard-dawn.jpg";
import praetorium from "@/assets/scenes/trial/praetorium.jpg";
import pilateChamber from "@/assets/scenes/trial/pilate-chamber.jpg";
import crowdPlaza from "@/assets/scenes/trial/crowd-plaza.jpg";
import waterBasin from "@/assets/scenes/trial/water-basin.jpg";
import condemnedSteps from "@/assets/scenes/trial/condemned-steps.jpg";

export const trialImages: Record<string, string> = {
  start: sanhedrinHall,
  curse_consequence: sanhedrinHall,
  beg_consequence: sanhedrinHall,
  false_witnesses: witnessChamber,
  argue_consequence: witnessChamber,
  mock_consequence: witnessChamber,
  high_priest_demands: sanhedrinHall,
  deny_consequence: sanhedrinHall,
  refuse_consequence: sanhedrinHall,
  to_pilate: courtyardDawn,
  drag_consequence: courtyardDawn,
  demand_consequence: courtyardDawn,
  pilate_questions: pilateChamber,
  mock_rome_consequence: pilateChamber,
  silent_pilate_consequence: pilateChamber,
  crowd_demands: crowdPlaza,
  judgment_consequence: crowdPlaza,
  plead_consequence: crowdPlaza,
  pilate_washes: waterBasin,
  accuse_consequence: waterBasin,
  demand_free_consequence: waterBasin,
  condemned: praetorium,
  cry_out_consequence: praetorium,
  collapse_consequence: praetorium,
  ending: condemnedSteps,
};
