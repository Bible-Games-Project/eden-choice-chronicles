import tentsValley from "@/assets/scenes/jacob-esau/tents-valley.jpg";
import tentInterior from "@/assets/scenes/jacob-esau/tent-interior.jpg";
import wildHills from "@/assets/scenes/jacob-esau/wild-hills.jpg";
import stewFire from "@/assets/scenes/jacob-esau/stew-fire.jpg";
import isaacTent from "@/assets/scenes/jacob-esau/isaac-tent.jpg";
import innerTent from "@/assets/scenes/jacob-esau/inner-tent.jpg";
import tentNight from "@/assets/scenes/jacob-esau/tent-night.jpg";
import roadEast from "@/assets/scenes/jacob-esau/road-east.jpg";

export const jacobEsauImages: Record<string, string> = {
  start: tentsValley,
  hunt_consequence: wildHills,
  the_stew: stewFire,
  free_consequence: stewFire,
  send_consequence: stewFire,
  the_oath: stewFire,
  trust_consequence: tentInterior,
  stew_eaten: stewFire,
  isaac_old: isaacTent,
  confront_consequence: tentInterior,
  walkaway_consequence: tentInterior,
  rebekah_plan: innerTent,
  refuse_blessing: innerTent,
  the_disguise: innerTent,
  father_tent: isaacTent,
  confess_consequence: innerTent,
  silent_consequence: isaacTent,
  the_test: isaacTent,
  flee_consequence: innerTent,
  the_blessing: isaacTent,
  esau_returns: tentNight,
  esau_wrath: tentNight,
  confront_esau_consequence: tentNight,
  rebekah_warning: tentNight,
  refuse_flee_consequence: tentNight,
  isaac_sends: isaacTent,
  the_road: roadEast,
};
