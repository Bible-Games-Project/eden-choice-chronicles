import mosesResolved from "@/assets/sprites/moses-pharaoh/moses-resolved.png";
import mosesSorrow from "@/assets/sprites/moses-pharaoh/moses-sorrow.png";
import aaronGreeting from "@/assets/sprites/moses-pharaoh/aaron-greeting.png";
import mosesAaron from "@/assets/sprites/moses-pharaoh/moses-aaron-together.png";
import hebrewElders from "@/assets/sprites/moses-pharaoh/hebrew-elders.png";
import courtOfficial from "@/assets/sprites/moses-pharaoh/court-official.png";
import pharaohCold from "@/assets/sprites/moses-pharaoh/pharaoh-cold.png";
import pharaohEnraged from "@/assets/sprites/moses-pharaoh/pharaoh-enraged.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene (left only). Waist-up, transparent PNG.
export const mosesPharaohSprites: Record<string, SpriteConfig> = {
  // Act I — Return
  start: { left: mosesResolved },
  turn_back_consequence: { left: mosesSorrow },
  wait_sign_consequence: { left: mosesResolved },
  meet_aaron: { left: aaronGreeting },
  test_aaron_consequence: { left: aaronGreeting },
  tell_elders: { left: hebrewElders },
  soften_consequence: { left: hebrewElders },
  boast_elders_consequence: { left: hebrewElders },
  elders_believe: { left: mosesAaron },
  // Act II — Palace
  palace_gates: { left: mosesAaron },
  force_consequence: { left: courtOfficial },
  bribe_consequence: { left: courtOfficial },
  court_official: { left: courtOfficial },
  hide_sender_consequence: { left: courtOfficial },
  // Act III — Before Pharaoh
  enter_throne_hall: { left: pharaohCold },
  worship_consequence: { left: pharaohCold },
  run_hall_consequence: { left: mosesSorrow },
  before_pharaoh: { left: pharaohCold },
  beg_consequence: { left: pharaohCold },
  threaten_consequence: { left: pharaohCold },
  pharaoh_mocks: { left: pharaohCold },
  curse_consequence: { left: pharaohCold },
  apologize_consequence: { left: pharaohCold },
  demand_again: { left: mosesAaron },
  lie_consequence: { left: mosesAaron },
  // Act IV — Refusal
  pharaoh_refuses: { left: pharaohEnraged },
  argue_consequence: { left: pharaohEnraged },
  flee_consequence: { left: pharaohEnraged },
  harsher_labor: { left: pharaohEnraged },
  hide_decree_consequence: { left: pharaohEnraged },
  // Act V — Burden
  foremen_beaten: { left: hebrewElders },
  hide_face_consequence: { left: hebrewElders },
  strike_guard_consequence: { left: hebrewElders },
  israelites_blame: { left: hebrewElders },
  defend_consequence: { left: hebrewElders },
  curse_people_consequence: { left: hebrewElders },
  moses_cries_out: { left: mosesSorrow },
  resign_consequence: { left: mosesSorrow },
  blame_aaron_consequence: { left: mosesSorrow },
  ending: { left: mosesSorrow },
};
