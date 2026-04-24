import jabbokTwilight from "@/assets/scenes/jacob-wrestles/jabbok-twilight.jpg";
import campEvening from "@/assets/scenes/jacob-wrestles/camp-evening.jpg";
import fordNight from "@/assets/scenes/jacob-wrestles/ford-night.jpg";
import clearingNight from "@/assets/scenes/jacob-wrestles/clearing-night.jpg";
import dawnBreaking from "@/assets/scenes/jacob-wrestles/dawn-breaking.jpg";
import penielMorning from "@/assets/scenes/jacob-wrestles/peniel-morning.jpg";

export const jacobWrestlesImages: Record<string, string> = {
  start: jabbokTwilight,
  attack_consequence: jabbokTwilight,
  flee_consequence: jabbokTwilight,
  send_gifts: campEvening,
  boast_consequence: campEvening,
  pray: campEvening,
  stay_consequence: campEvening,
  send_family: fordNight,
  cross_consequence: fordNight,
  alone: clearingNight,
  run_consequence: clearingNight,
  beg_consequence: clearingNight,
  the_struggle: clearingNight,
  give_up_consequence: clearingNight,
  the_touch: clearingNight,
  curse_consequence: clearingNight,
  demand_blessing: clearingNight,
  hide_name_consequence: clearingNight,
  boast_name_consequence: clearingNight,
  new_name: dawnBreaking,
  refuse_consequence: dawnBreaking,
  name_him: dawnBreaking,
  demand_name_consequence: dawnBreaking,
  blessing: dawnBreaking,
  secret_consequence: dawnBreaking,
  peniel: penielMorning,
  to_esau: penielMorning,
};
