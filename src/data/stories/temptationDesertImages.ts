import desertVast from "@/assets/scenes/temptation/desert-vast.jpg";
import desertStones from "@/assets/scenes/temptation/desert-stones.jpg";
import templePinnacle from "@/assets/scenes/temptation/temple-pinnacle.jpg";
import mountainKingdoms from "@/assets/scenes/temptation/mountain-kingdoms.jpg";
import desertDeparting from "@/assets/scenes/temptation/desert-departing.jpg";
import desertDawn from "@/assets/scenes/temptation/desert-dawn.jpg";

export const temptationDesertImages: Record<string, string> = {
  start: desertVast,
  curse_consequence: desertVast,
  leave_consequence: desertVast,
  bread: desertStones,
  obey_bread_consequence: desertStones,
  pinnacle: templePinnacle,
  leap_consequence: templePinnacle,
  boast_consequence: templePinnacle,
  kingdoms: mountainKingdoms,
  bow_consequence: mountainKingdoms,
  bargain_consequence: mountainKingdoms,
  departs: desertDeparting,
  chase_consequence: desertDeparting,
  rest: desertDawn,
};
