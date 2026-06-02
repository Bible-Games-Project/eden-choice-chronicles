import hillRaised from "@/assets/scenes/death-jesus/hill-raised.jpg";
import crowdMockers from "@/assets/scenes/death-jesus/crowd-mockers.jpg";
import twoCrosses from "@/assets/scenes/death-jesus/two-crosses.jpg";
import maryBelow from "@/assets/scenes/death-jesus/mary-below.jpg";
import darkeningSky from "@/assets/scenes/death-jesus/darkening-sky.jpg";
import noonDark from "@/assets/scenes/death-jesus/noon-dark.jpg";
import veilTorn from "@/assets/scenes/death-jesus/veil-torn.jpg";
import centurionConfess from "@/assets/scenes/death-jesus/centurion-confess.jpg";

export const deathJesusImages: Record<string, string> = {
  start: hillRaised,
  legions_consequence: hillRaised,
  curse_consequence: hillRaised,
  mocking: crowdMockers,
  shout_consequence: crowdMockers,
  climb_consequence: crowdMockers,
  two_thieves: twoCrosses,
  ignore_consequence: twoCrosses,
  rebuke_consequence: twoCrosses,
  mother_john: maryBelow,
  send_consequence: maryBelow,
  blame_consequence: maryBelow,
  darkness: darkeningSky,
  demand_consequence: darkeningSky,
  flee_consequence: darkeningSky,
  my_god: noonDark,
  accuse_consequence: noonDark,
  silent_consequence: noonDark,
  veil_torn: veilTorn,
  beg_consequence: veilTorn,
  boast_consequence: veilTorn,
  final_breath: centurionConfess,
  curse_end_consequence: centurionConfess,
  cling_consequence: centurionConfess,
  ending: centurionConfess,
};
