import roadDusk from "@/assets/scenes/birth-jesus/road-dusk.jpg";
import bethlehemNight from "@/assets/scenes/birth-jesus/bethlehem-night.jpg";
import innDoor from "@/assets/scenes/birth-jesus/inn-door.jpg";
import stableInterior from "@/assets/scenes/birth-jesus/stable-interior.jpg";
import mangerLight from "@/assets/scenes/birth-jesus/manger-light.jpg";
import dawnBethlehem from "@/assets/scenes/birth-jesus/dawn-bethlehem.jpg";

export const birthJesusImages: Record<string, string> = {
  start: roadDusk,
  push_consequence: roadDusk,
  turnback_consequence: roadDusk,
  bethlehem: bethlehemNight,
  demand_consequence: bethlehemNight,
  inn: innDoor,
  street_consequence: innDoor,
  argue_consequence: innDoor,
  stable: stableInterior,
  complain_consequence: stableInterior,
  birth: mangerLight,
  run_consequence: mangerLight,
  manger: dawnBethlehem,
};
