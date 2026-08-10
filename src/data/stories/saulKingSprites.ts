import saulSearching from "@/assets/sprites/saul-king/saul-searching.webp";
import samuelWarning from "@/assets/sprites/saul-king/samuel-warning.webp";
import samuelAnointing from "@/assets/sprites/saul-king/samuel-anointing-saul.webp";
import samuelPresents from "@/assets/sprites/saul-king/samuel-presents-saul.webp";
import saulHesitant from "@/assets/sprites/saul-king/saul-hesitant.webp";
import tribalElders from "@/assets/sprites/saul-king/tribal-elders.webp";
import saulKing from "@/assets/sprites/saul-king/saul-king.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up / knees-up, transparent PNG.
export const saulKingSprites: Record<string, SpriteConfig> = {
  start: { left: tribalElders },
  crown_consequence: { left: tribalElders },
  mock_consequence: { left: samuelWarning },
  warning: { left: samuelWarning },
  shout_consequence: { left: samuelWarning },
  walk_consequence: { left: samuelWarning },
  lost_path: { left: saulSearching },
  giveup_consequence: { left: saulSearching },
  pay_consequence: { left: saulSearching },
  anointing: { left: samuelAnointing },
  boast_consequence: { left: samuelAnointing },
  reject_consequence: { left: samuelAnointing },
  assembly: { left: samuelPresents },
  demand_consequence: { left: samuelPresents },
  hide_consequence: { left: saulHesitant },
  confirmation: { left: saulKing },
};

