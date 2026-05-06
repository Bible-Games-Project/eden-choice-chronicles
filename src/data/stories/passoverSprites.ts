import mosesInstructed from "@/assets/sprites/passover/moses-instructed.png";
import mosesTeaching from "@/assets/sprites/passover/moses-teaching.png";
import aaronElder from "@/assets/sprites/passover/aaron-elder.png";
import hebrewFather from "@/assets/sprites/passover/hebrew-father.png";
import hebrewFamily from "@/assets/sprites/passover/hebrew-family.png";
import pharaohGrieving from "@/assets/sprites/passover/pharaoh-grieving.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const passoverSprites: Record<string, SpriteConfig> = {
  // Act I — Instruction
  start: { left: mosesInstructed },
  argue_consequence: { left: mosesInstructed },
  hide_consequence: { left: mosesInstructed },
  // Act II — Lamb
  gather_elders: { left: aaronElder },
  any_animal_consequence: { left: aaronElder },
  lamb_chosen: { left: mosesTeaching },
  hide_blood_consequence: { left: mosesTeaching },
  ground_consequence: { left: mosesTeaching },
  // Act III — Doorposts and meal
  doorposts_marked: { left: hebrewFather },
  boil_consequence: { left: hebrewFather },
  meal_prepared: { left: hebrewFamily },
  ease_consequence: { left: hebrewFamily },
  wander_consequence: { left: hebrewFamily },
  // Act IV — Night
  stay_inside: { left: hebrewFamily },
  open_consequence: { left: hebrewFamily },
  boast_consequence: { left: hebrewFamily },
  // Act V — Pharaoh breaks
  morning_summons: { left: mosesTeaching },
  refuse_consequence: { left: mosesTeaching },
  before_broken_pharaoh: { left: pharaohGrieving },
  mock_consequence: { left: pharaohGrieving },
  half_consequence: { left: pharaohGrieving },
  ending: { left: hebrewFamily },
};
