import groveTorchlight from "@/assets/scenes/arrest-jesus/grove-torchlight.jpg";
import pathApproach from "@/assets/scenes/arrest-jesus/path-approach.jpg";
import clearingMeeting from "@/assets/scenes/arrest-jesus/clearing-meeting.jpg";
import guardsSurround from "@/assets/scenes/arrest-jesus/guards-surround.jpg";
import swordGlint from "@/assets/scenes/arrest-jesus/sword-glint.jpg";
import healingLight from "@/assets/scenes/arrest-jesus/healing-light.jpg";
import disciplesFlee from "@/assets/scenes/arrest-jesus/disciples-flee.jpg";
import roadJerusalem from "@/assets/scenes/arrest-jesus/road-jerusalem.jpg";

export const arrestJesusImages: Record<string, string> = {
  start: groveTorchlight,
  hide_consequence: groveTorchlight,
  angels_consequence: groveTorchlight,
  judas_arrives: pathApproach,
  shame_consequence: pathApproach,
  run_consequence: pathApproach,
  kiss: clearingMeeting,
  strike_consequence: clearingMeeting,
  pretend_consequence: clearingMeeting,
  step_forward: guardsSurround,
  let_taken_consequence: guardsSurround,
  silent_consequence: guardsSurround,
  peter_sword: swordGlint,
  cheer_consequence: swordGlint,
  fight_consequence: swordGlint,
  heal_ear: healingLight,
  walk_past_consequence: healingLight,
  curse_consequence: healingLight,
  disciples_flee: disciplesFlee,
  call_back_consequence: disciplesFlee,
  curse_friends_consequence: disciplesFlee,
  taken_away: roadJerusalem,
  struggle_consequence: roadJerusalem,
  beg_consequence: roadJerusalem,
  ending: roadJerusalem,
};
