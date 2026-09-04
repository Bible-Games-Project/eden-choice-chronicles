import johnPreaching from "@/assets/sprites/baptism/john-preaching.webp";
import jesusArriving from "@/assets/sprites/baptism/jesus-arriving.webp";
import jesusJohnTalking from "@/assets/sprites/baptism/jesus-john-talking.webp";
import jesusBaptism from "@/assets/sprites/baptism/jesus-baptism.webp";
import jesusInRiver from "@/assets/sprites/baptism/jesus-in-river.webp";
import spiritDove from "@/assets/sprites/baptism/spirit-dove.webp";
import johnAwe from "@/assets/sprites/baptism/john-awe.webp";
import jesusAffirmed from "@/assets/sprites/baptism/jesus-affirmed.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable sprite set: 3 waist-up (john-preaching, jesus-baptism,
// jesus-affirmed), the rest knees-up. No feet.
export const baptismJesusSprites: Record<string, SpriteConfig> = {
  start: { left: johnPreaching },
  mock_consequence: { left: johnPreaching },
  turn_consequence: { left: johnPreaching },
  crowds: { left: jesusArriving },
  apart_consequence: { left: jesusArriving },
  approach: { left: jesusJohnTalking },
  demand_consequence: { left: jesusJohnTalking },
  wait_consequence: { left: jesusJohnTalking },
  hesitate: { left: johnAwe },
  agree_consequence: { left: johnAwe },
  rebuke_consequence: { left: johnAwe },
  baptism: { left: jesusBaptism },
  resist_consequence: { left: jesusBaptism },
  dove: { left: spiritDove },
  hide_consequence: { left: jesusInRiver },
  boast_consequence: { left: jesusInRiver },
  voice: { left: jesusAffirmed },
};
