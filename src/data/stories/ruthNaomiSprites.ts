import naomiGrieving from "@/assets/sprites/ruth-naomi/naomi-grieving.webp";
import ruthNaomiClasp from "@/assets/sprites/ruth-naomi/ruth-naomi-clasp.webp";
import ruthNaomiJourney from "@/assets/sprites/ruth-naomi/ruth-naomi-journey.webp";
import naomiReturn from "@/assets/sprites/ruth-naomi/naomi-return.webp";
import ruthGleaning from "@/assets/sprites/ruth-naomi/ruth-gleaning.webp";
import boazKind from "@/assets/sprites/ruth-naomi/boaz-kind.webp";
import naomiCounsel from "@/assets/sprites/ruth-naomi/naomi-counsel.webp";
import ruthThreshingFloor from "@/assets/sprites/ruth-naomi/ruth-threshing-floor.webp";
import boazRuthChild from "@/assets/sprites/ruth-naomi/boaz-ruth-child.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Small reusable set matching the story progression.
export const ruthNaomiSprites: Record<string, SpriteConfig> = {
  start: { left: naomiGrieving },
  alone_consequence: { left: naomiGrieving },
  forget_consequence: { left: naomiGrieving },
  road_decision: { left: ruthNaomiClasp },
  turnback_consequence: { left: ruthNaomiClasp },
  wait_consequence: { left: ruthNaomiJourney },
  bethlehem_arrival: { left: naomiReturn },
  hide_consequence: { left: naomiReturn },
  beg_consequence: { left: ruthGleaning },
  barley_field: { left: boazKind },
  refuse_consequence: { left: ruthGleaning },
  demand_consequence: { left: boazKind },
  threshing_floor: { left: naomiCounsel },
  ignore_consequence: { left: naomiCounsel },
  seek_consequence: { left: ruthThreshingFloor },
  redemption_home: { left: boazRuthChild },
};
