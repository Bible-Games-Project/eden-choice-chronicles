import mosesResolved from "@/assets/sprites/ten-commandments/moses-resolved.webp";
import mosesClimbing from "@/assets/sprites/ten-commandments/moses-climbing.webp";
import mosesBowed from "@/assets/sprites/ten-commandments/moses-bowed.webp";
import mosesTablets from "@/assets/sprites/ten-commandments/moses-tablets.webp";
import mosesTeaching from "@/assets/sprites/ten-commandments/moses-teaching.webp";
import israelitesFearful from "@/assets/sprites/ten-commandments/israelites-fearful.webp";
import israelitesCovenant from "@/assets/sprites/ten-commandments/israelites-covenant.webp";
import aaronWatching from "@/assets/sprites/ten-commandments/aaron-watching.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable sprite set — one sprite per scene, matched to the story moment.
export const tenCommandmentsSprites: Record<string, SpriteConfig> = {
  // Act I — arrival at Sinai
  start: { left: mosesResolved },
  haste_consequence: { left: mosesResolved },
  shift_consequence: { left: aaronWatching },
  // Act II — the people tremble
  people_tremble: { left: israelitesFearful },
  mock_consequence: { left: israelitesFearful },
  // Act III — the ascent
  ascend_begin: { left: mosesClimbing },
  fear_consequence: { left: mosesClimbing },
  delay_consequence: { left: mosesClimbing },
  // Act IV — at the summit
  summit: { left: mosesBowed },
  pride_consequence: { left: mosesBowed },
  // Act V — the commandments
  god_speaks: { left: mosesBowed },
  argue_consequence: { left: mosesBowed },
  add_consequence: { left: mosesBowed },
  // Act VI — the tablets
  tablets_given: { left: mosesTablets },
  hide_consequence: { left: mosesTablets },
  // Act VII — the covenant
  descent: { left: mosesTablets },
  boast_consequence: { left: mosesTablets },
  secret_consequence: { left: mosesTeaching },
  covenant_sealed: { left: israelitesCovenant },
  ending: { left: israelitesCovenant },
};
