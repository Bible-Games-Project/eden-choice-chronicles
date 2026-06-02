import mosesStaff from "@/assets/sprites/plagues/moses-staff-raised.webp";
import mosesWarning from "@/assets/sprites/plagues/moses-warning.webp";
import mosesWeary from "@/assets/sprites/plagues/moses-weary.webp";
import aaronStaff from "@/assets/sprites/plagues/aaron-staff.webp";
import pharaohDefiant from "@/assets/sprites/plagues/pharaoh-defiant.webp";
import pharaohBroken from "@/assets/sprites/plagues/pharaoh-broken.webp";
import egyptianMagician from "@/assets/sprites/plagues/egyptian-magician.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene (left only). Waist-up, transparent PNG.
export const plaguesSprites: Record<string, SpriteConfig> = {
  // Act I — Staff and serpent
  start: { left: pharaohDefiant },
  hide_consequence: { left: mosesWarning },
  storm_consequence: { left: mosesWarning },
  serpent_sign: { left: egyptianMagician },
  boast_consequence: { left: mosesWarning },
  // Act II — Blood
  to_the_nile: { left: mosesStaff },
  wait_consequence: { left: mosesWarning },
  beg_consequence: { left: mosesWarning },
  nile_blood: { left: pharaohDefiant },
  mock_consequence: { left: mosesWarning },
  // Act III — Frogs
  frogs_plague: { left: pharaohBroken },
  refuse_pray_consequence: { left: mosesWarning },
  silver_consequence: { left: mosesWarning },
  pharaoh_lies: { left: pharaohDefiant },
  despair_consequence: { left: mosesWeary },
  // Act IV — Swarms / livestock / boils
  swarms: { left: egyptianMagician },
  boast_again_consequence: { left: mosesWarning },
  pity_consequence: { left: mosesWarning },
  livestock_die: { left: mosesStaff },
  hide_wrath_consequence: { left: mosesWeary },
  boils_plague: { left: pharaohDefiant },
  curse_consequence: { left: mosesWarning },
  give_up_consequence: { left: mosesWeary },
  // Act V — Hail / locusts / darkness
  hail_fire: { left: pharaohBroken },
  trust_consequence: { left: mosesWarning },
  locusts_warning: { left: aaronStaff },
  side_servants_consequence: { left: mosesWarning },
  accept_consequence: { left: mosesWarning },
  darkness: { left: mosesWeary },
  steal_consequence: { left: mosesWarning },
  // Act VI — Last warning
  final_threat: { left: pharaohDefiant },
  beg_again_consequence: { left: mosesWarning },
  victory_consequence: { left: mosesWarning },
  ending: { left: mosesStaff },
};
