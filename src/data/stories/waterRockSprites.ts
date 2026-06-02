import mosesWeary from "@/assets/sprites/water-rock/moses-weary.webp";
import mosesPraying from "@/assets/sprites/water-rock/moses-praying.webp";
import mosesStaffRaised from "@/assets/sprites/water-rock/moses-staff-raised.webp";
import israelitesThirsty from "@/assets/sprites/water-rock/israelites-thirsty.webp";
import israelitesDrinking from "@/assets/sprites/water-rock/israelites-drinking.webp";
import aaronElder from "@/assets/sprites/water-rock/aaron-elder.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const waterRockSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: israelitesThirsty },
  scold_consequence: { left: mosesWeary },
  ignore_consequence: { left: mosesWeary },
  // Act II
  people_complain: { left: israelitesThirsty },
  strike_consequence: { left: mosesWeary },
  // Act III
  moses_prays: { left: mosesPraying },
  demand_consequence: { left: mosesPraying },
  despair_consequence: { left: mosesPraying },
  // Act IV
  god_speaks: { left: mosesPraying },
  doubt_consequence: { left: mosesWeary },
  shift_consequence: { left: aaronElder },
  // Act V
  approach_rock: { left: mosesStaffRaised },
  boast_consequence: { left: mosesStaffRaised },
  // Act VI
  water_flows: { left: mosesStaffRaised },
  withhold_consequence: { left: mosesStaffRaised },
  people_drink: { left: israelitesDrinking },
  credit_consequence: { left: mosesWeary },
  silent_consequence: { left: aaronElder },
  ending: { left: israelitesDrinking },
};
