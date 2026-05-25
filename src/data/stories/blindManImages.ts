import templeCourtyard from "@/assets/scenes/blind-man/temple-courtyard.jpg";
import dustyGround from "@/assets/scenes/blind-man/dusty-ground.jpg";
import sunlitStreet from "@/assets/scenes/blind-man/sunlit-street.jpg";
import poolSiloam from "@/assets/scenes/blind-man/pool-siloam.jpg";
import phariseeHall from "@/assets/scenes/blind-man/pharisee-hall.jpg";
import squareRadiant from "@/assets/scenes/blind-man/square-radiant.jpg";

export const blindManImages: Record<string, string> = {
  start: templeCourtyard,
  curse_consequence: templeCourtyard,
  beg_consequence: templeCourtyard,
  reveal: templeCourtyard,
  doubt_consequence: templeCourtyard,
  mud: dustyGround,
  pull_consequence: dustyGround,
  wipe_consequence: dustyGround,
  send: sunlitStreet,
  stay_consequence: sunlitStreet,
  wash: poolSiloam,
  shut_consequence: poolSiloam,
  see: poolSiloam,
  hide_consequence: poolSiloam,
  pharisees: phariseeHall,
  lie_consequence: phariseeHall,
  silent_consequence: phariseeHall,
  testify: squareRadiant,
};
