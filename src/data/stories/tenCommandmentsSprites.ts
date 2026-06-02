import mosesResolved from "@/assets/sprites/ten-commandments/moses-resolved.webp";
import mosesBowed from "@/assets/sprites/ten-commandments/moses-bowed.webp";
import mosesTablets from "@/assets/sprites/ten-commandments/moses-tablets.webp";
import israelitesFearful from "@/assets/sprites/ten-commandments/israelites-fearful.webp";
import israelitesCovenant from "@/assets/sprites/ten-commandments/israelites-covenant.webp";
import aaronWatching from "@/assets/sprites/ten-commandments/aaron-watching.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const tenCommandmentsSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: mosesResolved },
  haste_consequence: { left: mosesResolved },
  shift_consequence: { left: aaronWatching },
  // Act II
  people_tremble: { left: israelitesFearful },
  mock_consequence: { left: israelitesFearful },
  // Act III
  ascend_begin: { left: mosesResolved },
  fear_consequence: { left: mosesResolved },
  delay_consequence: { left: mosesResolved },
  // Act IV
  summit: { left: mosesBowed },
  pride_consequence: { left: mosesBowed },
  // Act V
  god_speaks: { left: mosesBowed },
  argue_consequence: { left: mosesBowed },
  add_consequence: { left: mosesBowed },
  // Act VI
  tablets_given: { left: mosesTablets },
  hide_consequence: { left: mosesTablets },
  // Act VII
  descent: { left: mosesTablets },
  boast_consequence: { left: mosesTablets },
  secret_consequence: { left: mosesTablets },
  covenant_sealed: { left: israelitesCovenant },
  ending: { left: israelitesCovenant },
};
