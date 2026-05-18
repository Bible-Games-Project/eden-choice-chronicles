import townEdge from "@/assets/scenes/centurion/town-edge.jpg";
import servantRoom from "@/assets/scenes/centurion/servant-room.jpg";
import courtyard from "@/assets/scenes/centurion/courtyard.jpg";
import roadToHouse from "@/assets/scenes/centurion/road-to-house.jpg";
import plazaCrowd from "@/assets/scenes/centurion/plaza-crowd.jpg";
import healedRoom from "@/assets/scenes/centurion/healed-room.jpg";

export const centurionServantImages: Record<string, string> = {
  start: servantRoom,
  doctor_consequence: servantRoom,
  wait_consequence: servantRoom,
  seek: courtyard,
  command_consequence: courtyard,
  agree: roadToHouse,
  proud_consequence: roadToHouse,
  faith: townEdge,
  hurry_consequence: townEdge,
  sign_consequence: townEdge,
  praise: plazaCrowd,
  boast_consequence: plazaCrowd,
  heal: healedRoom,
};
