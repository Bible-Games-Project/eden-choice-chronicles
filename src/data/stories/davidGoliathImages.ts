import valleyElah from "@/assets/scenes/david-goliath/valley-elah.jpg";
import giantShadow from "@/assets/scenes/david-goliath/giant-shadow.jpg";
import campTents from "@/assets/scenes/david-goliath/camp-tents.jpg";
import saulTent from "@/assets/scenes/david-goliath/saul-tent.jpg";
import brookStones from "@/assets/scenes/david-goliath/brook-stones.jpg";
import battleValley from "@/assets/scenes/david-goliath/battle-valley.jpg";
import victoryField from "@/assets/scenes/david-goliath/victory-field.jpg";

export const davidGoliathImages: Record<string, string> = {
  start: valleyElah,
  flee_consequence: valleyElah,
  boast_consequence: valleyElah,
  challenge: giantShadow,
  hide_consequence: campTents,
  curse_consequence: giantShadow,
  saul_tent: saulTent,
  armor_consequence: saulTent,
  refuse_consequence: saulTent,
  brook: brookStones,
  jagged_consequence: brookStones,
  sword_consequence: brookStones,
  duel: battleValley,
  pray_consequence: battleValley,
  insult_consequence: battleValley,
  victory: victoryField,
};
