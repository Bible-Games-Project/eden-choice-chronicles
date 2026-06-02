import jacobTraveling from "@/assets/sprites/jacobs-dream/jacob-traveling.webp";
import jacobSearching from "@/assets/sprites/jacobs-dream/jacob-searching.webp";
import jacobStones from "@/assets/sprites/jacobs-dream/jacob-stones.webp";
import jacobSleeping from "@/assets/sprites/jacobs-dream/jacob-sleeping.webp";
import jacobAwestruck from "@/assets/sprites/jacobs-dream/jacob-awestruck.webp";
import jacobKneeling from "@/assets/sprites/jacobs-dream/jacob-kneeling.webp";
import jacobAnointing from "@/assets/sprites/jacobs-dream/jacob-anointing.webp";
import jacobResolved from "@/assets/sprites/jacobs-dream/jacob-resolved.webp";
import angelAscending from "@/assets/sprites/jacobs-dream/angel-ascending.webp";
import angelDescending from "@/assets/sprites/jacobs-dream/angel-descending.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Each scene uses a unique pose/expression — no sprite is reused across scenes.
export const jacobsDreamSprites: Record<string, SpriteConfig> = {
  start: { left: jacobTraveling },
  turn_back_consequence: { left: jacobSearching },
  hide_consequence: { left: jacobStones },
  wilderness: { left: jacobSearching },
  push_on_consequence: { left: jacobTraveling },
  the_place: { left: jacobStones },
  soft_consequence: { left: jacobSearching },
  wander_consequence: { left: jacobTraveling },
  lay_down: { left: jacobSleeping },
  the_dream: { left: angelAscending, right: angelDescending },
  climb_consequence: { left: angelAscending },
  call_consequence: { left: angelDescending },
  the_voice: { left: angelAscending },
  bargain_consequence: { left: angelDescending },
  the_promise: { left: angelAscending },
  awakening: { left: jacobAwestruck },
  flee_consequence: { left: jacobSearching },
  secret_consequence: { left: jacobKneeling },
  set_pillar: { left: jacobKneeling },
  plain_consequence: { left: jacobAwestruck },
  anoint: { left: jacobAnointing },
  withhold_consequence: { left: jacobKneeling },
  the_vow: { left: jacobResolved },
  journey_on: { left: jacobResolved },
};
