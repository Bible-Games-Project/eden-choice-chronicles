import palaceRooftop from "@/assets/scenes/david-bathsheba/palace-rooftop.jpg";
import courtyardView from "@/assets/scenes/david-bathsheba/courtyard-view.jpg";
import innerChamber from "@/assets/scenes/david-bathsheba/inner-chamber.jpg";
import palaceHall from "@/assets/scenes/david-bathsheba/palace-hall.jpg";
import battlefieldDawn from "@/assets/scenes/david-bathsheba/battlefield-dawn.jpg";
import throneConfrontation from "@/assets/scenes/david-bathsheba/throne-confrontation.jpg";
import repentanceChamber from "@/assets/scenes/david-bathsheba/repentance-chamber.jpg";

export const davidBathshebaImages: Record<string, string> = {
  start: palaceRooftop,
  rooftop_consequence: palaceRooftop,
  wine_consequence: innerChamber,
  seeing: courtyardView,
  ask_consequence: courtyardView,
  summon_consequence: innerChamber,
  uriah: palaceHall,
  drunk_consequence: innerChamber,
  front_consequence: battlefieldDawn,
  nathan: throneConfrontation,
  threaten_consequence: throneConfrontation,
  deny_consequence: throneConfrontation,
  repentance: repentanceChamber,
};
