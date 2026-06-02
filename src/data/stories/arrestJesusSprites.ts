import judasLeading from "@/assets/sprites/arrest-jesus/judas-leading.webp";
import guardsTorches from "@/assets/sprites/arrest-jesus/guards-torches.webp";
import judasKiss from "@/assets/sprites/arrest-jesus/judas-kiss.webp";
import jesusForward from "@/assets/sprites/arrest-jesus/jesus-forward.webp";
import peterSword from "@/assets/sprites/arrest-jesus/peter-sword.webp";
import jesusHealing from "@/assets/sprites/arrest-jesus/jesus-healing.webp";
import disciplesFleeing from "@/assets/sprites/arrest-jesus/disciples-fleeing.webp";
import jesusBound from "@/assets/sprites/arrest-jesus/jesus-bound.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const arrestJesusSprites: Record<string, SpriteConfig> = {
  start: { left: judasLeading },
  hide_consequence: { left: judasLeading },
  angels_consequence: { left: judasLeading },
  judas_arrives: { left: guardsTorches },
  shame_consequence: { left: guardsTorches },
  run_consequence: { left: guardsTorches },
  kiss: { left: judasKiss },
  strike_consequence: { left: judasKiss },
  pretend_consequence: { left: judasKiss },
  step_forward: { left: jesusForward },
  let_taken_consequence: { left: jesusForward },
  silent_consequence: { left: jesusForward },
  peter_sword: { left: peterSword },
  cheer_consequence: { left: peterSword },
  fight_consequence: { left: peterSword },
  heal_ear: { left: jesusHealing },
  walk_past_consequence: { left: jesusHealing },
  curse_consequence: { left: jesusHealing },
  disciples_flee: { left: disciplesFleeing },
  call_back_consequence: { left: disciplesFleeing },
  curse_friends_consequence: { left: disciplesFleeing },
  taken_away: { left: jesusBound },
  struggle_consequence: { left: jesusBound },
  beg_consequence: { left: jesusBound },
  ending: { left: jesusBound },
};
