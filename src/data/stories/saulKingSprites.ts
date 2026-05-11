import saulSearching from "@/assets/sprites/saul-king/saul-searching.png";
import samuelWarning from "@/assets/sprites/saul-king/samuel-warning.png";
import samuelAnointing from "@/assets/sprites/saul-king/samuel-anointing-saul.png";
import saulHesitant from "@/assets/sprites/saul-king/saul-hesitant.png";
import tribalElders from "@/assets/sprites/saul-king/tribal-elders.png";
import saulKing from "@/assets/sprites/saul-king/saul-king.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const saulKingSprites: Record<string, SpriteConfig> = {
  start: { left: tribalElders },
  crown_consequence: { left: tribalElders },
  mock_consequence: { left: tribalElders },
  warning: { left: samuelWarning },
  shout_consequence: { left: samuelWarning },
  walk_consequence: { left: samuelWarning },
  lost_path: { left: saulSearching },
  giveup_consequence: { left: saulSearching },
  pay_consequence: { left: saulSearching },
  anointing: { left: samuelAnointing },
  boast_consequence: { left: samuelAnointing },
  reject_consequence: { left: samuelAnointing },
  assembly: { left: tribalElders },
  demand_consequence: { left: tribalElders },
  hide_consequence: { left: saulHesitant },
  confirmation: { left: saulKing },
};
