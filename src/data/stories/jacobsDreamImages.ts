import wildernessRoad from "@/assets/scenes/jacobs-dream/wilderness-road.jpg";
import bethelDusk from "@/assets/scenes/jacobs-dream/bethel-dusk.jpg";
import bethelNight from "@/assets/scenes/jacobs-dream/bethel-night.jpg";
import ladderVision from "@/assets/scenes/jacobs-dream/ladder-vision.jpg";
import bethelDawn from "@/assets/scenes/jacobs-dream/bethel-dawn.jpg";
import roadEast from "@/assets/scenes/jacobs-dream/road-east.jpg";

export const jacobsDreamImages: Record<string, string> = {
  start: wildernessRoad,
  turn_back_consequence: wildernessRoad,
  hide_consequence: wildernessRoad,
  wilderness: wildernessRoad,
  push_on_consequence: bethelDusk,
  the_place: bethelDusk,
  soft_consequence: bethelDusk,
  wander_consequence: bethelDusk,
  lay_down: bethelNight,
  the_dream: ladderVision,
  climb_consequence: ladderVision,
  call_consequence: ladderVision,
  the_voice: ladderVision,
  bargain_consequence: ladderVision,
  the_promise: ladderVision,
  awakening: bethelNight,
  flee_consequence: bethelDawn,
  secret_consequence: bethelDawn,
  set_pillar: bethelDawn,
  plain_consequence: bethelDawn,
  anoint: bethelDawn,
  withhold_consequence: bethelDawn,
  the_vow: roadEast,
  journey_on: roadEast,
};
