import birthVillage from "@/assets/scenes/samson/birth-village.jpg";
import vineyardRoad from "@/assets/scenes/samson/vineyard-road.jpg";
import philistineField from "@/assets/scenes/samson/philistine-field.jpg";
import delilahChamber from "@/assets/scenes/samson/delilah-chamber.jpg";
import prisonMill from "@/assets/scenes/samson/prison-mill.jpg";
import dagonTemple from "@/assets/scenes/samson/dagon-temple.jpg";

export const samsonImages: Record<string, string> = {
  start: birthVillage,
  mock_consequence: birthVillage,
  hide_consequence: birthVillage,
  vineyard: vineyardRoad,
  run_consequence: vineyardRoad,
  beg_consequence: vineyardRoad,
  philistine_clash: philistineField,
  bow_consequence: philistineField,
  boast_consequence: philistineField,
  delilah_meet: delilahChamber,
  lie_consequence: delilahChamber,
  guard_to_betrayed: delilahChamber,
  betrayed: prisonMill,
  curse_consequence: prisonMill,
  blame_consequence: prisonMill,
  temple_summon: dagonTemple,
  beg_crowd_consequence: dagonTemple,
  silent_consequence: dagonTemple,
  ending_redeemed: dagonTemple,
};
