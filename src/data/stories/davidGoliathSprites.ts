import israeliteSoldiersFear from "@/assets/sprites/david-goliath/israelite-soldiers-fear.png";
import goliathTaunting from "@/assets/sprites/david-goliath/goliath-taunting.png";
import davidShepherd from "@/assets/sprites/david-goliath/david-shepherd.png";
import saulArmor from "@/assets/sprites/david-goliath/saul-armor.png";
import davidStones from "@/assets/sprites/david-goliath/david-stones.png";
import davidSling from "@/assets/sprites/david-goliath/david-sling.png";
import davidVictorious from "@/assets/sprites/david-goliath/david-victorious.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const davidGoliathSprites: Record<string, SpriteConfig> = {
  start: { left: davidShepherd },
  flee_consequence: { left: davidShepherd },
  boast_consequence: { left: davidShepherd },
  challenge: { left: goliathTaunting },
  hide_consequence: { left: israeliteSoldiersFear },
  curse_consequence: { left: goliathTaunting },
  saul_tent: { left: saulArmor },
  armor_consequence: { left: saulArmor },
  refuse_consequence: { left: saulArmor },
  brook: { left: davidStones },
  jagged_consequence: { left: davidStones },
  sword_consequence: { left: davidStones },
  duel: { left: davidSling },
  pray_consequence: { left: davidSling },
  insult_consequence: { left: davidSling },
  victory: { left: davidVictorious },
};
