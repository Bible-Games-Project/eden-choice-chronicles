import jerichoRoad from "@/assets/scenes/zacchaeus/jericho-road.jpg";
import crowdStreet from "@/assets/scenes/zacchaeus/crowd-street.jpg";
import sycamoreTree from "@/assets/scenes/zacchaeus/sycamore-tree.jpg";
import lookingUp from "@/assets/scenes/zacchaeus/looking-up.jpg";
import zacchaeusHouse from "@/assets/scenes/zacchaeus/zacchaeus-house.jpg";
import crowdGrumble from "@/assets/scenes/zacchaeus/crowd-grumble.jpg";
import houseInterior from "@/assets/scenes/zacchaeus/house-interior.jpg";
import houseRadiant from "@/assets/scenes/zacchaeus/house-radiant.jpg";

export const zacchaeusImages: Record<string, string> = {
  start: jerichoRoad,
  hide_consequence: jerichoRoad,
  crowd: crowdStreet,
  push_consequence: crowdStreet,
  quit_consequence: crowdStreet,
  tree: sycamoreTree,
  shame_consequence: sycamoreTree,
  seen: lookingUp,
  hide_tree_consequence: lookingUp,
  invite: zacchaeusHouse,
  refuse_consequence: zacchaeusHouse,
  bargain_consequence: zacchaeusHouse,
  grumble: crowdGrumble,
  stare_consequence: crowdGrumble,
  repent: houseInterior,
  keep_consequence: houseInterior,
  feast_consequence: houseInterior,
  ending: houseRadiant,
};
