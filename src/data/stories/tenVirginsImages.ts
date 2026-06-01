import hillsideParable from "@/assets/scenes/ten-virgins/hillside-parable.jpg";
import courtyardDusk from "@/assets/scenes/ten-virgins/courtyard-dusk.jpg";
import lampRoom from "@/assets/scenes/ten-virgins/lamp-room.jpg";
import starryNight from "@/assets/scenes/ten-virgins/starry-night.jpg";
import midnightPath from "@/assets/scenes/ten-virgins/midnight-path.jpg";
import darkVillage from "@/assets/scenes/ten-virgins/dark-village.jpg";
import doorClosed from "@/assets/scenes/ten-virgins/door-closed.jpg";
import hillsideRadiant from "@/assets/scenes/ten-virgins/hillside-radiant.jpg";

export const tenVirginsImages: Record<string, string> = {
  start: hillsideParable,
  ignore_consequence: hillsideParable,
  wait: courtyardDusk,
  wander_consequence: courtyardDusk,
  oil: lampRoom,
  skip_consequence: lampRoom,
  borrow_consequence: lampRoom,
  delay: starryNight,
  curse_consequence: starryNight,
  midnight: midnightPath,
  sleep_consequence: midnightPath,
  run: darkVillage,
  mock_consequence: darkVillage,
  door: doorClosed,
  demand_consequence: doorClosed,
  ending: hillsideRadiant,
};
