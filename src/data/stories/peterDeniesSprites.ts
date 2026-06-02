import peterFollowing from "@/assets/sprites/peter-denies/peter-following.webp";
import peterGate from "@/assets/sprites/peter-denies/peter-gate.webp";
import peterFire from "@/assets/sprites/peter-denies/peter-fire.webp";
import servantGirl from "@/assets/sprites/peter-denies/servant-girl.webp";
import secondServant from "@/assets/sprites/peter-denies/second-servant.webp";
import bystanderAccusing from "@/assets/sprites/peter-denies/bystander-accusing.webp";
import peterGaze from "@/assets/sprites/peter-denies/peter-gaze.webp";
import peterWeeping from "@/assets/sprites/peter-denies/peter-weeping.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const peterDeniesSprites: Record<string, SpriteConfig> = {
  start: { left: peterFollowing },
  hide_consequence: { left: peterFollowing },
  charge_consequence: { left: peterFollowing },
  gate: { left: peterGate },
  boast_consequence: { left: peterGate },
  lie_consequence: { left: peterGate },
  courtyard_fire: { left: peterFire },
  joke_consequence: { left: peterFire },
  pray_path: { left: peterFire },
  first_recognized: { left: servantGirl },
  confess_consequence: { left: servantGirl },
  glare_consequence: { left: servantGirl },
  second_recognized: { left: secondServant },
  walk_back_consequence: { left: secondServant },
  admit_consequence: { left: secondServant },
  third_accusation: { left: bystanderAccusing },
  courage_consequence: { left: bystanderAccusing },
  flee_consequence: { left: bystanderAccusing },
  rooster: { left: peterGaze },
  lookaway_consequence: { left: peterGaze },
  shout_consequence: { left: peterGaze },
  weeping: { left: peterWeeping },
  harden_consequence: { left: peterWeeping },
  blame_consequence: { left: peterWeeping },
  ending: { left: peterWeeping },
};
