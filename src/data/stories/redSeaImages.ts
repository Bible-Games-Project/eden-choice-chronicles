import exodusLeaving from "@/assets/scenes/red-sea/exodus-leaving.jpg";
import pharaohRegret from "@/assets/scenes/red-sea/pharaoh-regret.jpg";
import armyPursuit from "@/assets/scenes/red-sea/army-pursuit.jpg";
import seaShore from "@/assets/scenes/red-sea/sea-shore.jpg";
import seaParted from "@/assets/scenes/red-sea/sea-parted.jpg";
import seaCloses from "@/assets/scenes/red-sea/sea-closes.jpg";
import safeShore from "@/assets/scenes/red-sea/safe-shore.jpg";
import pillarCloud from "@/assets/scenes/red-sea/pillar-cloud.jpg";

export const redSeaImages: Record<string, string> = {
  // Act I
  start: exodusLeaving,
  short_road_consequence: exodusLeaving,
  beg_consequence: exodusLeaving,
  // Act II
  pillar_follows: pillarCloud,
  pharaoh_regrets: pharaohRegret,
  plead_consequence: pharaohRegret,
  hide_consequence: pharaohRegret,
  // Act III
  army_charges: armyPursuit,
  run_consequence: armyPursuit,
  people_panic: seaShore,
  curse_consequence: seaShore,
  surrender_consequence: seaShore,
  // Act IV
  moses_prays: seaShore,
  boats_consequence: seaShore,
  wait_consequence: seaShore,
  // Act V
  sea_parts: seaParted,
  watch_consequence: seaParted,
  crossing: seaParted,
  boast_consequence: seaParted,
  // Act VI
  far_shore: safeShore,
  mock_consequence: safeShore,
  fight_consequence: safeShore,
  sea_closes: seaCloses,
  ending: safeShore,
};
