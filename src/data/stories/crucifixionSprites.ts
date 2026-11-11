import jesusCondemned from "@/assets/sprites/crucifixion/jesus-condemned.webp";
import jesusCarrying from "@/assets/sprites/crucifixion/jesus-carrying.webp";
import simonHelps from "@/assets/sprites/crucifixion/simon-helps.webp";
import jesusGolgotha from "@/assets/sprites/crucifixion/jesus-golgotha.webp";
import jesusCross from "@/assets/sprites/crucifixion/jesus-cross.webp";
import criminalsCross from "@/assets/sprites/crucifixion/criminals-cross.webp";
import maryJohn from "@/assets/sprites/crucifixion/mary-john.webp";
import jesusFinal from "@/assets/sprites/crucifixion/jesus-final.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Transparent PNG, full figure visible.
export const crucifixionSprites: Record<string, SpriteConfig> = {
  start: { left: jesusCondemned },
  curse_consequence: { left: jesusCondemned },
  plead_consequence: { left: jesusCondemned },
  carrying: { left: jesusCarrying },
  drop_consequence: { left: jesusCarrying },
  rage_consequence: { left: jesusCarrying },
  simon_scene: { left: simonHelps },
  shame_consequence: { left: simonHelps },
  alone_consequence: { left: simonHelps },
  golgotha: { left: jesusGolgotha },
  drink_consequence: { left: jesusGolgotha },
  turn_back_consequence: { left: jesusGolgotha },
  nailed: { left: jesusCross },
  nail_curse_consequence: { left: jesusCross },
  plead_free_consequence: { left: jesusCross },
  criminals: { left: criminalsCross },
  mock_consequence: { left: criminalsCross },
  ignore_consequence: { left: criminalsCross },
  mary_below: { left: maryJohn },
  look_away_consequence: { left: maryJohn },
  curse_birth_consequence: { left: maryJohn },
  final_breath: { left: jesusFinal },
  scream_consequence: { left: jesusFinal },
  undo_consequence: { left: jesusFinal },
  ending: { left: jesusFinal },
};
