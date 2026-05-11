import throneHall from "@/assets/scenes/david-saul/throne-hall.jpg";
import throneShadow from "@/assets/scenes/david-saul/throne-shadow.jpg";
import battlefieldVictory from "@/assets/scenes/david-saul/battlefield-victory.jpg";
import fieldMeadow from "@/assets/scenes/david-saul/field-meadow.jpg";
import wildernessRocks from "@/assets/scenes/david-saul/wilderness-rocks.jpg";
import caveEngedi from "@/assets/scenes/david-saul/cave-engedi.jpg";
import cliffDawn from "@/assets/scenes/david-saul/cliff-dawn.jpg";

export const davidSaulImages: Record<string, string> = {
  start: throneHall,
  mock_consequence: throneHall,
  demand_consequence: throneHall,
  jealousy: battlefieldVictory,
  boast_consequence: battlefieldVictory,
  shame_consequence: battlefieldVictory,
  spear: throneShadow,
  sword_consequence: throneShadow,
  curse_consequence: throneShadow,
  jonathan_warns: fieldMeadow,
  confront_consequence: fieldMeadow,
  doubt_consequence: fieldMeadow,
  flee: wildernessRocks,
  war_consequence: wildernessRocks,
  foreign_consequence: wildernessRocks,
  cave: caveEngedi,
  strike_consequence: caveEngedi,
  wake_consequence: caveEngedi,
  mercy_call: cliffDawn,
};
