import cityDusk from "@/assets/scenes/sodom/city-dusk.jpg";
import cityGate from "@/assets/scenes/sodom/city-gate.jpg";
import lotHouse from "@/assets/scenes/sodom/lot-house.jpg";
import cityNightMob from "@/assets/scenes/sodom/city-night-mob.jpg";
import escapeRoad from "@/assets/scenes/sodom/escape-road.jpg";
import zoar from "@/assets/scenes/sodom/zoar.jpg";
import destruction from "@/assets/scenes/sodom/destruction.jpg";
import aftermath from "@/assets/scenes/sodom/aftermath.jpg";

export const sodomImages: Record<string, string> = {
  start: cityGate,
  ignore_consequence: cityGate,
  invite: lotHouse,
  mob: cityNightMob,
  betray_consequence: lotHouse,
  blinded: cityNightMob,
  warning: lotHouse,
  delay_consequence: lotHouse,
  sons_in_law: cityDusk,
  stay_consequence: cityDusk,
  lingering: lotHouse,
  delay_consequence_2: lotHouse,
  out_of_city: escapeRoad,
  argue_consequence: escapeRoad,
  zoar: escapeRoad,
  wife_looks: escapeRoad,
  back_consequence: destruction,
  destruction: destruction,
  aftermath: aftermath,
};
