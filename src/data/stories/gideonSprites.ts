import gideonHiding from "@/assets/sprites/gideon/gideon-hiding.webp";
import angelOfLord from "@/assets/sprites/gideon/angel-of-lord.webp";
import gideonFleece from "@/assets/sprites/gideon/gideon-fleece.webp";
import gideonAltar from "@/assets/sprites/gideon/gideon-altar.webp";
import gideonGathering from "@/assets/sprites/gideon/gideon-gathering.webp";
import gideonLeader from "@/assets/sprites/gideon/gideon-leader.webp";
import gideon300 from "@/assets/sprites/gideon/gideon-300.webp";
import gideonTorch from "@/assets/sprites/gideon/gideon-torch.webp";
import midianitesFleeing from "@/assets/sprites/gideon/midianites-fleeing.webp";
import gideonPraise from "@/assets/sprites/gideon/gideon-praise.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Small reusable set matching the story progression.
export const gideonSprites: Record<string, SpriteConfig> = {
  start: { left: gideonHiding },
  curse_consequence: { left: gideonHiding },
  flee_consequence: { left: gideonHiding },
  angel_call: { left: angelOfLord },
  dismiss_consequence: { left: angelOfLord },
  weak_consequence: { left: gideonAltar },
  fleece_test: { left: gideonFleece },
  demand_consequence: { left: gideonFleece },
  ignore_consequence: { left: gideonGathering },
  army_reduction: { left: gideonLeader },
  refuse_consequence: { left: gideonLeader },
  hide_consequence: { left: gideon300 },
  night_attack: { left: gideon300 },
  charge_consequence: { left: gideonTorch },
  wait_consequence: { left: gideonTorch },
  victory: { left: midianitesFleeing },
  boast_consequence: { left: midianitesFleeing },
  crown_consequence: { left: gideonLeader },
  ending_faithful: { left: gideonPraise },
};
