import gardenGrief from "@/assets/scenes/appearance-mary/garden-grief.jpg";
import tombInterior from "@/assets/scenes/appearance-mary/tomb-interior.jpg";
import gardenPath from "@/assets/scenes/appearance-mary/garden-path.jpg";
import radiantClearing from "@/assets/scenes/appearance-mary/radiant-clearing.jpg";
import glowingGrove from "@/assets/scenes/appearance-mary/glowing-grove.jpg";
import sunriseMeadow from "@/assets/scenes/appearance-mary/sunrise-meadow.jpg";
import roadBack from "@/assets/scenes/appearance-mary/road-back.jpg";
import upperRoomDoor from "@/assets/scenes/appearance-mary/upper-room-door.jpg";

export const appearanceMaryImages: Record<string, string> = {
  start: gardenGrief,
  run_consequence: gardenGrief,
  curse_consequence: gardenGrief,
  angels_ask: tombInterior,
  boast_consequence: tombInterior,
  demand_consequence: tombInterior,
  stranger: gardenPath,
  ignore_consequence: gardenPath,
  accuse_consequence: gardenPath,
  gardener_dialog: gardenPath,
  beg_consequence: gardenPath,
  walk_consequence: gardenPath,
  name_called: radiantClearing,
  doubt_consequence: radiantClearing,
  reason_consequence: radiantClearing,
  recognition: glowingGrove,
  cling_consequence: glowingGrove,
  faint_consequence: glowingGrove,
  do_not_cling: sunriseMeadow,
  refuse_consequence: sunriseMeadow,
  argue_consequence: sunriseMeadow,
  tell_disciples: upperRoomDoor,
  pride_end_consequence: upperRoomDoor,
  whisper_consequence: upperRoomDoor,
  ending: roadBack,
};
