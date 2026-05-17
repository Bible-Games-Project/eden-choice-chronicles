import villageEdge from "@/assets/scenes/healing-leper/village-edge.jpg";
import crowdPath from "@/assets/scenes/healing-leper/crowd-path.jpg";
import hillsideClearing from "@/assets/scenes/healing-leper/hillside-clearing.jpg";
import sacredGround from "@/assets/scenes/healing-leper/sacred-ground.jpg";
import lightPath from "@/assets/scenes/healing-leper/light-path.jpg";
import distantTemple from "@/assets/scenes/healing-leper/distant-temple.jpg";

export const healingLeperImages: Record<string, string> = {
  start: villageEdge,
  hide_consequence: villageEdge,
  approach: crowdPath,
  anger_consequence: crowdPath,
  turn_consequence: crowdPath,
  kneel: hillsideClearing,
  demand_consequence: hillsideClearing,
  plea: hillsideClearing,
  doubt_consequence: hillsideClearing,
  touch: sacredGround,
  pull_consequence: sacredGround,
  warn_consequence: sacredGround,
  heal: lightPath,
  boast_consequence: lightPath,
  send: distantTemple,
};
