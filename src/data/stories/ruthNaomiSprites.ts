import naomiGrieving from "@/assets/sprites/ruth-naomi/naomi-grieving.webp";
import ruthNaomiClasp from "@/assets/sprites/ruth-naomi/ruth-naomi-clasp.webp";
import naomiReturn from "@/assets/sprites/ruth-naomi/naomi-return.webp";
import ruthGleaning from "@/assets/sprites/ruth-naomi/ruth-gleaning.webp";
import boazKind from "@/assets/sprites/ruth-naomi/boaz-kind.webp";
import boazRuthChild from "@/assets/sprites/ruth-naomi/boaz-ruth-child.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const ruthNaomiSprites: Record<string, SpriteConfig> = {
  start: { left: naomiGrieving },
  alone_consequence: { left: naomiGrieving },
  forget_consequence: { left: naomiGrieving },
  road_decision: { left: ruthNaomiClasp },
  turnback_consequence: { left: ruthNaomiClasp },
  wait_consequence: { left: ruthNaomiClasp },
  bethlehem_arrival: { left: naomiReturn },
  hide_consequence: { left: naomiReturn },
  beg_consequence: { left: naomiReturn },
  barley_field: { left: ruthGleaning },
  refuse_consequence: { left: ruthGleaning },
  demand_consequence: { left: ruthGleaning },
  threshing_floor: { left: boazKind },
  ignore_consequence: { left: boazKind },
  seek_consequence: { left: boazKind },
  redemption_home: { left: boazRuthChild },
};
