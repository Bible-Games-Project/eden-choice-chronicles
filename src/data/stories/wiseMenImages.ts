import easternTower from "@/assets/scenes/wise-men/eastern-tower.jpg";
import desertRoad from "@/assets/scenes/wise-men/desert-road.jpg";
import herodPalace from "@/assets/scenes/wise-men/herod-palace.jpg";
import bethlehemStar from "@/assets/scenes/wise-men/bethlehem-star.jpg";
import humbleHouse from "@/assets/scenes/wise-men/humble-house.jpg";
import dawnReturn from "@/assets/scenes/wise-men/dawn-return.jpg";

export const wiseMenImages: Record<string, string> = {
  start: easternTower,
  ignore_consequence: easternTower,
  fear_consequence: easternTower,
  journey: desertRoad,
  turn_back_consequence: desertRoad,
  herod: herodPalace,
  loyalty_consequence: herodPalace,
  bethlehem: bethlehemStar,
  doubt_consequence: bethlehemStar,
  wait_consequence: bethlehemStar,
  worship: humbleHouse,
  greed_consequence: humbleHouse,
  dream: humbleHouse,
  betray_consequence: humbleHouse,
  stay_consequence: humbleHouse,
  return: dawnReturn,
};
