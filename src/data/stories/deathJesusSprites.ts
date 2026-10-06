import jesusRaised from "@/assets/sprites/death-jesus/jesus-raised.png";
import jesusMocked from "@/assets/sprites/death-jesus/jesus-mocked.png";
import jesusThief from "@/assets/sprites/death-jesus/jesus-thief.png";
import jesusMary from "@/assets/sprites/death-jesus/jesus-mary.png";
import jesusDarkness from "@/assets/sprites/death-jesus/jesus-darkness.png";
import jesusCrying from "@/assets/sprites/death-jesus/jesus-crying.png";
import jesusFinished from "@/assets/sprites/death-jesus/jesus-finished.png";
import jesusFinal from "@/assets/sprites/death-jesus/jesus-final.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const deathJesusSprites: Record<string, SpriteConfig> = {
  start: { left: jesusRaised },
  legions_consequence: { left: jesusRaised },
  curse_consequence: { left: jesusRaised },
  mocking: { left: jesusMocked },
  shout_consequence: { left: jesusMocked },
  climb_consequence: { left: jesusMocked },
  two_thieves: { left: jesusThief },
  ignore_consequence: { left: jesusThief },
  rebuke_consequence: { left: jesusThief },
  mother_john: { left: jesusMary },
  send_consequence: { left: jesusMary },
  blame_consequence: { left: jesusMary },
  darkness: { left: jesusDarkness },
  demand_consequence: { left: jesusDarkness },
  flee_consequence: { left: jesusDarkness },
  my_god: { left: jesusCrying },
  accuse_consequence: { left: jesusCrying },
  silent_consequence: { left: jesusCrying },
  veil_torn: { left: jesusFinished },
  beg_consequence: { left: jesusFinished },
  boast_consequence: { left: jesusFinished },
  final_breath: { left: jesusFinal },
  curse_end_consequence: { left: jesusFinal },
  cling_consequence: { left: jesusFinal },
  ending: { left: jesusFinal },
};
