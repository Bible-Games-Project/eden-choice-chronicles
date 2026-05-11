import gideonHiding from "@/assets/sprites/gideon/gideon-hiding.png";
import angelOfLord from "@/assets/sprites/gideon/angel-of-lord.png";
import gideonFleece from "@/assets/sprites/gideon/gideon-fleece.png";
import gideonLeader from "@/assets/sprites/gideon/gideon-leader.png";
import gideonTorch from "@/assets/sprites/gideon/gideon-torch.png";
import midianitesFleeing from "@/assets/sprites/gideon/midianites-fleeing.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const gideonSprites: Record<string, SpriteConfig> = {
  start: { left: gideonHiding },
  curse_consequence: { left: gideonHiding },
  flee_consequence: { left: gideonHiding },
  angel_call: { left: angelOfLord },
  dismiss_consequence: { left: angelOfLord },
  weak_consequence: { left: angelOfLord },
  fleece_test: { left: gideonFleece },
  demand_consequence: { left: gideonFleece },
  ignore_consequence: { left: gideonFleece },
  army_reduction: { left: gideonLeader },
  refuse_consequence: { left: gideonLeader },
  hide_consequence: { left: gideonLeader },
  night_attack: { left: gideonTorch },
  charge_consequence: { left: gideonTorch },
  wait_consequence: { left: gideonTorch },
  victory: { left: midianitesFleeing },
  boast_consequence: { left: midianitesFleeing },
  crown_consequence: { left: midianitesFleeing },
  ending_faithful: { left: gideonLeader },
};
