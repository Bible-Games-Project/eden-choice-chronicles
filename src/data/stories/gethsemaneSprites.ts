import jesusEntering from "@/assets/sprites/gethsemane/jesus-entering.png";
import threeDisciples from "@/assets/sprites/gethsemane/three-disciples.png";
import jesusKneeling from "@/assets/sprites/gethsemane/jesus-kneeling.png";
import jesusAnguish from "@/assets/sprites/gethsemane/jesus-anguish.png";
import jesusSurrender from "@/assets/sprites/gethsemane/jesus-surrender.png";
import disciplesSleeping from "@/assets/sprites/gethsemane/disciples-sleeping.png";
import jesusWaking from "@/assets/sprites/gethsemane/jesus-waking.png";
import jesusResolute from "@/assets/sprites/gethsemane/jesus-resolute.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const gethsemaneSprites: Record<string, SpriteConfig> = {
  start: { left: jesusEntering },
  back_consequence: { left: jesusEntering },
  send_consequence: { left: jesusEntering },
  inner_circle: { left: threeDisciples },
  hide_consequence: { left: threeDisciples },
  demand_consequence: { left: threeDisciples },
  stone_alone: { left: jesusKneeling },
  shout_consequence: { left: jesusKneeling },
  demand_father_consequence: { left: jesusKneeling },
  anguish: { left: jesusAnguish },
  refuse_consequence: { left: jesusAnguish },
  pretend_consequence: { left: jesusAnguish },
  submission: { left: jesusSurrender },
  curse_consequence: { left: jesusSurrender },
  walk_away_consequence: { left: jesusSurrender },
  find_sleeping_1: { left: disciplesSleeping },
  anger_consequence: { left: disciplesSleeping },
  leave_consequence: { left: disciplesSleeping },
  pray_again: { left: jesusKneeling },
  easier_consequence: { left: jesusKneeling },
  silent_consequence: { left: jesusKneeling },
  find_sleeping_2: { left: disciplesSleeping },
  mock_consequence: { left: disciplesSleeping },
  flee_consequence: { left: disciplesSleeping },
  final_resolve: { left: jesusWaking },
  hide_trees_consequence: { left: jesusWaking },
  fourth_consequence: { left: jesusWaking },
  ending: { left: jesusResolute },
};
