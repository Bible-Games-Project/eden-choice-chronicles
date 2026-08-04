import mosesWeary from "@/assets/sprites/water-rock/moses-weary.webp";
import mosesPraying from "@/assets/sprites/water-rock/moses-praying.webp";
import mosesStaffRaised from "@/assets/sprites/water-rock/moses-staff-raised.webp";
import mosesStriking from "@/assets/sprites/water-rock/moses-striking.webp";
import mosesHumbled from "@/assets/sprites/water-rock/moses-humbled.webp";
import israelitesThirsty from "@/assets/sprites/water-rock/israelites-thirsty.webp";
import israelitesDrinking from "@/assets/sprites/water-rock/israelites-drinking.webp";
import aaronElder from "@/assets/sprites/water-rock/aaron-elder.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable set: 3 waist-up (israelitesThirsty, mosesPraying, aaronElder),
// 5 knees-up. Never showing feet.
export const waterRockSprites: Record<string, SpriteConfig> = {
  // Act I — thirst in the wilderness
  start: { left: israelitesThirsty },
  scold_consequence: { left: mosesHumbled },
  ignore_consequence: { left: mosesWeary },
  // Act II — the complaint
  people_complain: { left: israelitesThirsty },
  strike_consequence: { left: mosesHumbled },
  // Act III — Moses seeks God
  moses_prays: { left: mosesPraying },
  demand_consequence: { left: mosesHumbled },
  despair_consequence: { left: mosesWeary },
  // Act IV — the instruction
  god_speaks: { left: mosesPraying },
  doubt_consequence: { left: mosesWeary },
  shift_consequence: { left: aaronElder },
  // Act V — before the rock
  approach_rock: { left: mosesStaffRaised },
  boast_consequence: { left: mosesHumbled },
  // Act VI — water from the rock
  water_flows: { left: mosesStriking },
  withhold_consequence: { left: mosesWeary },
  people_drink: { left: israelitesDrinking },
  credit_consequence: { left: mosesHumbled },
  silent_consequence: { left: aaronElder },
  ending: { left: israelitesDrinking },
};

