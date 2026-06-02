import dawnPath from "@/assets/scenes/empty-tomb/dawn-path.jpg";
import stoneRolled from "@/assets/scenes/empty-tomb/stone-rolled.jpg";
import emptyInterior from "@/assets/scenes/empty-tomb/empty-interior.jpg";
import radiantTomb from "@/assets/scenes/empty-tomb/radiant-tomb.jpg";
import gardenClearing from "@/assets/scenes/empty-tomb/garden-clearing.jpg";
import roadJerusalem from "@/assets/scenes/empty-tomb/road-jerusalem.jpg";
import upperRoom from "@/assets/scenes/empty-tomb/upper-room.jpg";
import sunriseHill from "@/assets/scenes/empty-tomb/sunrise-hill.jpg";

export const emptyTombImages: Record<string, string> = {
  start: dawnPath,
  turn_consequence: dawnPath,
  wait_consequence: dawnPath,
  stone: stoneRolled,
  run_consequence: stoneRolled,
  accuse_consequence: stoneRolled,
  enter: emptyInterior,
  weep_consequence: emptyInterior,
  anger_consequence: emptyInterior,
  angels: radiantTomb,
  argue_consequence: radiantTomb,
  demand_consequence: radiantTomb,
  message: radiantTomb,
  doubt_consequence: radiantTomb,
  boast_consequence: radiantTomb,
  remember: gardenClearing,
  silent_consequence: gardenClearing,
  test_consequence: gardenClearing,
  disciples: upperRoom,
  blame_consequence: upperRoom,
  beg_consequence: upperRoom,
  sunrise: sunriseHill,
  fear_end_consequence: sunriseHill,
  pride_end_consequence: sunriseHill,
  ending: sunriseHill,
};
