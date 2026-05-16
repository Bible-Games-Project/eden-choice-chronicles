import weddingGuests from "@/assets/sprites/cana/wedding-guests.png";
import maryConcerned from "@/assets/sprites/cana/mary-concerned.png";
import jesusInstructing from "@/assets/sprites/cana/jesus-instructing.png";
import servantsFilling from "@/assets/sprites/cana/servants-filling.png";
import masterTasting from "@/assets/sprites/cana/master-tasting.png";
import disciplesWondering from "@/assets/sprites/cana/disciples-wondering.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const weddingCanaSprites: Record<string, SpriteConfig> = {
  start: { left: weddingGuests },
  slip_consequence: { left: weddingGuests },
  shortage: { left: maryConcerned },
  hide_consequence: { left: maryConcerned },
  pretend_consequence: { left: maryConcerned },
  mother: { left: maryConcerned },
  wait_consequence: { left: maryConcerned },
  instruct: { left: jesusInstructing },
  ask_consequence: { left: jesusInstructing },
  half_consequence: { left: jesusInstructing },
  fill: { left: servantsFilling },
  refuse_consequence: { left: servantsFilling },
  taste: { left: masterTasting },
  boast_consequence: { left: masterTasting },
  slip2_consequence: { left: masterTasting },
  wonder: { left: disciplesWondering },
};
