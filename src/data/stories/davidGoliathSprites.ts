import davidShepherd from "@/assets/sprites/david-goliath/david-shepherd.webp";
import davidFaith from "@/assets/sprites/david-goliath/david-faith.webp";
import davidBread from "@/assets/sprites/david-goliath/david-bread.webp";
import goliathTaunting from "@/assets/sprites/david-goliath/goliath-taunting.webp";
import goliathFalls from "@/assets/sprites/david-goliath/goliath-falls.webp";
import israeliteSoldiersFear from "@/assets/sprites/david-goliath/israelite-soldiers-fear.webp";
import israelitesCelebrate from "@/assets/sprites/david-goliath/israelites-celebrate.webp";
import saulArmor from "@/assets/sprites/david-goliath/saul-armor.webp";
import davidStones from "@/assets/sprites/david-goliath/david-stones.webp";
import davidSling from "@/assets/sprites/david-goliath/david-sling.webp";
import davidVictorious from "@/assets/sprites/david-goliath/david-victorious.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene, reusing a small set across the story progression.
export const davidGoliathSprites: Record<string, SpriteConfig> = {
  start: { left: davidShepherd },
  flee_consequence: { left: davidShepherd },
  boast_consequence: { left: davidBread },
  challenge: { left: goliathTaunting },
  hide_consequence: { left: israeliteSoldiersFear },
  curse_consequence: { left: davidFaith },
  saul_tent: { left: saulArmor },
  armor_consequence: { left: saulArmor },
  refuse_consequence: { left: davidFaith },
  brook: { left: davidStones },
  jagged_consequence: { left: davidStones },
  sword_consequence: { left: davidStones },
  duel: { left: davidSling },
  pray_consequence: { left: davidSling },
  insult_consequence: { left: goliathFalls },
  victory: { left: davidVictorious },
};
