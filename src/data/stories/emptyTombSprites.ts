import marySpices from "@/assets/sprites/empty-tomb/mary-spices.png";
import marySurprised from "@/assets/sprites/empty-tomb/mary-surprised.png";
import maryPeering from "@/assets/sprites/empty-tomb/mary-peering.png";
import twoAngels from "@/assets/sprites/empty-tomb/two-angels.png";
import maryAwe from "@/assets/sprites/empty-tomb/mary-awe.png";
import threeWomen from "@/assets/sprites/empty-tomb/three-women.png";
import maryRunning from "@/assets/sprites/empty-tomb/mary-running.png";
import peterJohn from "@/assets/sprites/empty-tomb/peter-john.png";
import maryJoy from "@/assets/sprites/empty-tomb/mary-joy.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const emptyTombSprites: Record<string, SpriteConfig> = {
  start: { left: marySpices },
  turn_consequence: { left: marySpices },
  wait_consequence: { left: marySpices },
  stone: { left: marySurprised },
  run_consequence: { left: marySurprised },
  accuse_consequence: { left: marySurprised },
  enter: { left: maryPeering },
  weep_consequence: { left: maryPeering },
  anger_consequence: { left: maryPeering },
  angels: { left: twoAngels },
  argue_consequence: { left: twoAngels },
  demand_consequence: { left: twoAngels },
  message: { left: maryAwe },
  doubt_consequence: { left: maryAwe },
  boast_consequence: { left: maryAwe },
  remember: { left: threeWomen },
  silent_consequence: { left: threeWomen },
  test_consequence: { left: threeWomen },
  disciples: { left: peterJohn },
  blame_consequence: { left: peterJohn },
  beg_consequence: { left: peterJohn },
  sunrise: { left: maryJoy },
  fear_end_consequence: { left: maryJoy },
  pride_end_consequence: { left: maryJoy },
  ending: { left: maryRunning },
};
