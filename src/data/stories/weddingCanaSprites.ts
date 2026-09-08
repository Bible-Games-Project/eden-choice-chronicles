import brideGroom from "@/assets/sprites/cana/bride-groom.png";
import maryConcerned from "@/assets/sprites/cana/mary-concerned.png";
import maryServants from "@/assets/sprites/cana/mary-servants.png";
import jesusInstructing from "@/assets/sprites/cana/jesus-instructing.png";
import servantsFilling from "@/assets/sprites/cana/servants-filling.png";
import masterTasting from "@/assets/sprites/cana/master-tasting.png";
import jesusMaryDisciples from "@/assets/sprites/cana/jesus-mary-disciples.png";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable set: exactly 3 waist-up (mary-concerned, jesus-instructing,
// master-tasting); all others are knees-up. No feet.
export const weddingCanaSprites: Record<string, SpriteConfig> = {
  start: { left: brideGroom },
  slip_consequence: { left: brideGroom },
  shortage: { left: maryConcerned },
  hide_consequence: { left: maryConcerned },
  pretend_consequence: { left: maryConcerned },
  mother: { left: maryServants },
  wait_consequence: { left: maryServants },
  instruct: { left: jesusInstructing },
  ask_consequence: { left: jesusInstructing },
  half_consequence: { left: jesusInstructing },
  fill: { left: servantsFilling },
  refuse_consequence: { left: servantsFilling },
  taste: { left: masterTasting },
  boast_consequence: { left: masterTasting },
  slip2_consequence: { left: masterTasting },
  wonder: { left: jesusMaryDisciples },
};
