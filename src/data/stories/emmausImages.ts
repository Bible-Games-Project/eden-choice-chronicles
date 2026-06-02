import leavingJerusalem from "@/assets/scenes/emmaus/leaving-jerusalem.jpg";
import openRoad from "@/assets/scenes/emmaus/open-road.jpg";
import hillsidePath from "@/assets/scenes/emmaus/hillside-path.jpg";
import sunsetRoad from "@/assets/scenes/emmaus/sunset-road.jpg";
import villageDusk from "@/assets/scenes/emmaus/village-dusk.jpg";
import innTable from "@/assets/scenes/emmaus/inn-table.jpg";
import emptySeat from "@/assets/scenes/emmaus/empty-seat.jpg";
import nightReturn from "@/assets/scenes/emmaus/night-return.jpg";

export const emmausImages: Record<string, string> = {
  start: leavingJerusalem,
  argue_consequence: leavingJerusalem,
  boast_consequence: leavingJerusalem,
  stranger_joins: openRoad,
  refuse_consequence: openRoad,
  mock_consequence: openRoad,
  share_grief: openRoad,
  blame_consequence: openRoad,
  short_consequence: openRoad,
  scripture: hillsidePath,
  offense_consequence: hillsidePath,
  interrupt_consequence: hillsidePath,
  burning_hearts: sunsetRoad,
  distrust_consequence: sunsetRoad,
  demand_consequence: sunsetRoad,
  invite_stay: villageDusk,
  letgo_consequence: villageDusk,
  charge_consequence: villageDusk,
  breaking_bread: innTable,
  look_consequence: innTable,
  host_consequence: innTable,
  recognition: emptySeat,
  stay_consequence: emptySeat,
  whisper_consequence: emptySeat,
  ending: nightReturn,
};
