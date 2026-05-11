import palmTree from "@/assets/scenes/deborah-barak/palm-tree-judging.jpg";
import villageCall from "@/assets/scenes/deborah-barak/village-call.jpg";
import mountTabor from "@/assets/scenes/deborah-barak/mount-tabor.jpg";
import kishonPlain from "@/assets/scenes/deborah-barak/kishon-plain.jpg";
import battlefield from "@/assets/scenes/deborah-barak/battlefield-aftermath.jpg";
import victoryHill from "@/assets/scenes/deborah-barak/victory-hill.jpg";

export const deborahBarakImages: Record<string, string> = {
  start: palmTree,
  ignore_consequence: palmTree,
  self_consequence: palmTree,
  call_barak: palmTree,
  lead_consequence: palmTree,
  barak_arrives: villageCall,
  refuse_consequence: villageCall,
  mock_consequence: villageCall,
  march_to_tabor: mountTabor,
  wait_consequence: mountTabor,
  battle_kishon: kishonPlain,
  hold_consequence: kishonPlain,
  negotiate_consequence: kishonPlain,
  victory: battlefield,
  credit_consequence: battlefield,
  ending_faithful: victoryHill,
};
