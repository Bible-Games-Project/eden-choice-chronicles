import crowdMockers from "@/assets/scenes/death-jesus/crowd-mockers.jpg";
import hillRaised from "@/assets/scenes/death-jesus/hill-raised.jpg";
import twoCrosses from "@/assets/scenes/death-jesus/two-crosses.jpg";
import maryBelow from "@/assets/scenes/death-jesus/mary-below.jpg";
import darkeningSky from "@/assets/scenes/death-jesus/darkening-sky.jpg";
import noonDark from "@/assets/scenes/death-jesus/noon-dark.jpg";
import veilTorn from "@/assets/scenes/death-jesus/veil-torn.jpg";

export const crucifixionImages: Record<string, string> = {
  start: crowdMockers,
  curse_consequence: crowdMockers,
  plead_consequence: crowdMockers,
  carrying: hillRaised,
  drop_consequence: hillRaised,
  rage_consequence: hillRaised,
  simon_scene: hillRaised,
  shame_consequence: hillRaised,
  alone_consequence: hillRaised,
  golgotha: hillRaised,
  drink_consequence: hillRaised,
  turn_back_consequence: hillRaised,
  nailed: twoCrosses,
  nail_curse_consequence: twoCrosses,
  plead_free_consequence: twoCrosses,
  criminals: twoCrosses,
  mock_consequence: twoCrosses,
  ignore_consequence: twoCrosses,
  mary_below: maryBelow,
  look_away_consequence: maryBelow,
  curse_birth_consequence: maryBelow,
  final_breath: darkeningSky,
  scream_consequence: noonDark,
  undo_consequence: noonDark,
  ending: veilTorn,
};
