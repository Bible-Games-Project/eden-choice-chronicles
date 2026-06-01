import hillside from "@/assets/scenes/good-samaritan/hillside-teaching.jpg";
import road from "@/assets/scenes/good-samaritan/jericho-road.jpg";
import aftermath from "@/assets/scenes/good-samaritan/road-aftermath.jpg";
import innCourtyard from "@/assets/scenes/good-samaritan/inn-courtyard.jpg";
import innRoom from "@/assets/scenes/good-samaritan/inn-room.jpg";
import hillsideRadiant from "@/assets/scenes/good-samaritan/hillside-radiant.jpg";

export const goodSamaritanImages: Record<string, string> = {
  start: hillside,
  walk_consequence: hillside,
  rule_consequence: hillside,
  attack: road,
  pity_consequence: road,
  priest: road,
  cheer_consequence: road,
  excuse_consequence: road,
  levite: aftermath,
  hope_consequence: aftermath,
  samaritan: aftermath,
  doubt_consequence: aftermath,
  tend: aftermath,
  rush_consequence: aftermath,
  lookaway_consequence: aftermath,
  inn: innCourtyard,
  leave_consequence: innCourtyard,
  pay: innRoom,
  minimum_consequence: innRoom,
  ending: hillsideRadiant,
};
