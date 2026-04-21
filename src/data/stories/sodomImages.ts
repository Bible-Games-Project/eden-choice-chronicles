import cityDusk from "@/assets/scenes/sodom/city-dusk.jpg";
import cityGate from "@/assets/scenes/sodom/city-gate.jpg";
import lotHouse from "@/assets/scenes/sodom/lot-house.jpg";
import cityNightMob from "@/assets/scenes/sodom/city-night-mob.jpg";
import escapeRoad from "@/assets/scenes/sodom/escape-road.jpg";
import zoar from "@/assets/scenes/sodom/zoar.jpg";
import destruction from "@/assets/scenes/sodom/destruction.jpg";
import aftermath from "@/assets/scenes/sodom/aftermath.jpg";

export const sodomImages: Record<string, string> = {
  // Act I
  start: cityDusk,
  complicit_consequence: cityDusk,
  to_gate: cityGate,
  square_consequence: cityGate,
  ignore_consequence: cityGate,
  // Act II
  invite: lotHouse,
  boast_consequence: lotHouse,
  guests_reveal: lotHouse,
  hide_consequence: lotHouse,
  // Act III
  mob: cityNightMob,
  bargain_consequence: cityNightMob,
  betray_consequence: lotHouse,
  blinded: cityNightMob,
  // Act IV
  warning: lotHouse,
  demand_consequence: lotHouse,
  delay_consequence: lotHouse,
  sons_in_law: cityDusk,
  stay_consequence: cityDusk,
  // Act V
  lingering: lotHouse,
  neighbor_consequence: cityNightMob,
  delay_consequence_2: lotHouse,
  // Act VI
  out_of_city: escapeRoad,
  refuse_consequence: escapeRoad,
  argue_consequence: escapeRoad,
  zoar: escapeRoad,
  // Act VII
  wife_looks: escapeRoad,
  back_consequence: destruction,
  destruction: destruction,
  aftermath: aftermath,
};
