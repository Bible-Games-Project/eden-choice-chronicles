import nazarethHome from "@/assets/scenes/annunciation/nazareth-home.jpg";
import villageWell from "@/assets/scenes/annunciation/village-well.jpg";
import divineLightRoom from "@/assets/scenes/annunciation/divine-light-room.jpg";
import innerChamber from "@/assets/scenes/annunciation/inner-chamber.jpg";
import dawnHills from "@/assets/scenes/annunciation/dawn-hills.jpg";

export const annunciationImages: Record<string, string> = {
  start: nazarethHome,
  boast_consequence: villageWell,
  wander_consequence: villageWell,
  gabriel: divineLightRoom,
  flee_consequence: divineLightRoom,
  demand_consequence: divineLightRoom,
  ponder: innerChamber,
  sendaway_consequence: innerChamber,
  announce: divineLightRoom,
  refuse_consequence: innerChamber,
  wealth_consequence: innerChamber,
  question: innerChamber,
  hide_consequence: innerChamber,
  accept: dawnHills,
};
