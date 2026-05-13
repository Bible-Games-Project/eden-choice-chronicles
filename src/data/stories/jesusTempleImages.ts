import roadJerusalem from "@/assets/scenes/jesus-temple/road-jerusalem.jpg";
import templeCourts from "@/assets/scenes/jesus-temple/temple-courts.jpg";
import templeInner from "@/assets/scenes/jesus-temple/temple-inner.jpg";
import jerusalemStreets from "@/assets/scenes/jesus-temple/jerusalem-streets.jpg";
import templeCorner from "@/assets/scenes/jesus-temple/temple-corner.jpg";
import nazarethRoad from "@/assets/scenes/jesus-temple/nazareth-road.jpg";

export const jesusTempleImages: Record<string, string> = {
  start: roadJerusalem,
  stray_consequence: roadJerusalem,
  refuse_consequence: roadJerusalem,
  temple: templeCourts,
  market_consequence: templeCourts,
  stay: templeInner,
  follow_consequence: templeInner,
  hide_consequence: templeInner,
  search: jerusalemStreets,
  flee_consequence: jerusalemStreets,
  teachers: templeInner,
  silent_consequence: templeInner,
  boast_consequence: templeInner,
  reunion: templeCorner,
  blame_consequence: templeCorner,
  shame_consequence: templeCorner,
  return: nazarethRoad,
};
