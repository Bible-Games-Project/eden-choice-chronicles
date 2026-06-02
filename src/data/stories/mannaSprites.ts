import mosesLeading from "@/assets/sprites/manna/moses-leading.webp";
import mosesPraying from "@/assets/sprites/manna/moses-praying.webp";
import israelitesHungry from "@/assets/sprites/manna/israelites-hungry.webp";
import israeliteGathering from "@/assets/sprites/manna/israelite-gathering.webp";
import aaronElder from "@/assets/sprites/manna/aaron-elder.webp";
import greedyGatherer from "@/assets/sprites/manna/greedy-gatherer.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const mannaSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: israelitesHungry },
  anger_consequence: { left: mosesLeading },
  lie_consequence: { left: mosesLeading },
  // Act II
  people_complain: { left: israelitesHungry },
  turnback_consequence: { left: mosesLeading },
  // Act III
  moses_seeks_god: { left: mosesPraying },
  demand_consequence: { left: mosesPraying },
  despair_consequence: { left: mosesPraying },
  // Act IV
  god_speaks: { left: mosesPraying },
  hide_consequence: { left: mosesLeading },
  tell_people: { left: aaronElder },
  boast_consequence: { left: mosesLeading },
  secret_consequence: { left: aaronElder },
  // Act V
  manna_falls: { left: mosesLeading },
  forbid_consequence: { left: mosesLeading },
  // Act VI
  gather_daily: { left: israeliteGathering },
  hoarding_consequence: { left: greedyGatherer },
  selfish_consequence: { left: greedyGatherer },
  // Act VII
  next_morning: { left: israeliteGathering },
  ending: { left: aaronElder },
};
