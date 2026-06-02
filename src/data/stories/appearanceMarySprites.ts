import maryWeeping from "@/assets/sprites/appearance-mary/mary-weeping.webp";
import twoAngels from "@/assets/sprites/appearance-mary/two-angels.webp";
import maryTurning from "@/assets/sprites/appearance-mary/mary-turning.webp";
import jesusGardener from "@/assets/sprites/appearance-mary/jesus-gardener.webp";
import maryPleading from "@/assets/sprites/appearance-mary/mary-pleading.webp";
import jesusCalling from "@/assets/sprites/appearance-mary/jesus-calling.webp";
import maryRecognition from "@/assets/sprites/appearance-mary/mary-recognition.webp";
import maryRunningJoy from "@/assets/sprites/appearance-mary/mary-running-joy.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const appearanceMarySprites: Record<string, SpriteConfig> = {
  start: { left: maryWeeping },
  run_consequence: { left: maryWeeping },
  curse_consequence: { left: maryWeeping },
  angels_ask: { left: twoAngels },
  boast_consequence: { left: twoAngels },
  demand_consequence: { left: twoAngels },
  stranger: { left: maryTurning },
  ignore_consequence: { left: maryTurning },
  accuse_consequence: { left: maryTurning },
  gardener_dialog: { left: jesusGardener },
  beg_consequence: { left: maryPleading },
  walk_consequence: { left: maryPleading },
  name_called: { left: jesusCalling },
  doubt_consequence: { left: jesusCalling },
  reason_consequence: { left: jesusCalling },
  recognition: { left: maryRecognition },
  cling_consequence: { left: maryRecognition },
  faint_consequence: { left: maryRecognition },
  do_not_cling: { left: jesusCalling },
  refuse_consequence: { left: jesusCalling },
  argue_consequence: { left: jesusCalling },
  tell_disciples: { left: maryRunningJoy },
  pride_end_consequence: { left: maryRunningJoy },
  whisper_consequence: { left: maryRunningJoy },
  ending: { left: maryRunningJoy },
};
