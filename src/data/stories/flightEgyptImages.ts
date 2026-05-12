import dreamRoom from "@/assets/scenes/flight-egypt/dream-room.jpg";
import nightVillage from "@/assets/scenes/flight-egypt/night-village.jpg";
import desertNight from "@/assets/scenes/flight-egypt/desert-night.jpg";
import oasis from "@/assets/scenes/flight-egypt/oasis.jpg";
import egyptDawn from "@/assets/scenes/flight-egypt/egypt-dawn.jpg";
import safeHome from "@/assets/scenes/flight-egypt/safe-home.jpg";

export const flightEgyptImages: Record<string, string> = {
  start: dreamRoom,
  ignore_consequence: dreamRoom,
  wait_consequence: dreamRoom,
  wake: dreamRoom,
  hide_consequence: dreamRoom,
  flee: nightVillage,
  warn_consequence: nightVillage,
  main_road_consequence: nightVillage,
  road: desertNight,
  turn_back_consequence: desertNight,
  rest: oasis,
  linger_consequence: oasis,
  send_back_consequence: oasis,
  egypt: egyptDawn,
  court_consequence: egyptDawn,
  safe: safeHome,
};
