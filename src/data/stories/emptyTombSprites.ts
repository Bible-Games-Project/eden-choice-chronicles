import womenSpices from "@/assets/sprites/empty-tomb/women-spices.png";
import guardsShocked from "@/assets/sprites/empty-tomb/guards-shocked.png";
import maryPeering from "@/assets/sprites/empty-tomb/mary-peering.png";
import angelSpeaking from "@/assets/sprites/empty-tomb/angel-speaking.png";
import womenAmazed from "@/assets/sprites/empty-tomb/women-amazed.png";
import womenRunning from "@/assets/sprites/empty-tomb/women-running.png";
import peterJohn from "@/assets/sprites/empty-tomb/peter-john.png";
import jesusRisen from "@/assets/sprites/empty-tomb/jesus-risen.png";
import jesusGreeting from "@/assets/sprites/empty-tomb/jesus-greeting.png";
import maryJoy from "@/assets/sprites/empty-tomb/mary-joy.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Transparent PNG.
export const emptyTombSprites: Record<string, SpriteConfig> = {
  start: { left: womenSpices },
  turn_consequence: { left: womenSpices },
  wait_consequence: { left: womenSpices },
  stone: { left: guardsShocked },
  run_consequence: { left: guardsShocked },
  accuse_consequence: { left: guardsShocked },
  enter: { left: maryPeering },
  weep_consequence: { left: maryPeering },
  anger_consequence: { left: maryPeering },
  angels: { left: angelSpeaking },
  argue_consequence: { left: angelSpeaking },
  demand_consequence: { left: angelSpeaking },
  message: { left: womenAmazed },
  doubt_consequence: { left: womenAmazed },
  boast_consequence: { left: womenAmazed },
  remember: { left: womenRunning },
  silent_consequence: { left: womenRunning },
  test_consequence: { left: womenRunning },
  disciples: { left: peterJohn },
  blame_consequence: { left: peterJohn },
  beg_consequence: { left: peterJohn },
  sunrise: { left: jesusRisen },
  fear_end_consequence: { left: maryJoy },
  pride_end_consequence: { left: maryJoy },
  ending: { left: jesusGreeting },
};
