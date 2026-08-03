import mosesInstructed from "@/assets/sprites/passover/moses-instructed.webp";
import mosesTeaching from "@/assets/sprites/passover/moses-teaching.webp";
import aaronElder from "@/assets/sprites/passover/aaron-elder.webp";
import hebrewLamb from "@/assets/sprites/passover/hebrew-lamb.webp";
import hebrewFather from "@/assets/sprites/passover/hebrew-father.webp";
import hebrewMotherChild from "@/assets/sprites/passover/hebrew-mother-child.webp";
import hebrewFamily from "@/assets/sprites/passover/hebrew-family.webp";
import pharaohGrieving from "@/assets/sprites/passover/pharaoh-grieving.webp";
import israelitesDeparting from "@/assets/sprites/passover/israelites-departing.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up or knees-up, transparent PNG.
export const passoverSprites: Record<string, SpriteConfig> = {
  // Act I — Instruction
  start: { left: mosesInstructed },
  argue_consequence: { left: mosesInstructed },
  hide_consequence: { left: mosesInstructed },
  // Act II — Lamb
  gather_elders: { left: aaronElder },
  any_animal_consequence: { left: aaronElder },
  lamb_chosen: { left: hebrewLamb },
  hide_blood_consequence: { left: hebrewFather },
  ground_consequence: { left: hebrewFather },
  // Act III — Doorposts and meal
  doorposts_marked: { left: hebrewFather },
  boil_consequence: { left: hebrewMotherChild },
  meal_prepared: { left: hebrewFamily },
  ease_consequence: { left: hebrewFamily },
  wander_consequence: { left: hebrewFamily },
  // Act IV — Night
  stay_inside: { left: hebrewMotherChild },
  open_consequence: { left: hebrewMotherChild },
  boast_consequence: { left: hebrewMotherChild },
  // Act V — Pharaoh breaks
  morning_summons: { left: mosesTeaching },
  refuse_consequence: { left: mosesTeaching },
  before_broken_pharaoh: { left: pharaohGrieving },
  mock_consequence: { left: pharaohGrieving },
  half_consequence: { left: pharaohGrieving },
  ending: { left: israelitesDeparting },
};
