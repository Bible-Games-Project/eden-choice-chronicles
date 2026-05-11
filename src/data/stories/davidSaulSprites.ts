import davidHarp from "@/assets/sprites/david-saul/david-harp.png";
import saulJealous from "@/assets/sprites/david-saul/saul-jealous.png";
import saulSpear from "@/assets/sprites/david-saul/saul-spear.png";
import jonathanWarning from "@/assets/sprites/david-saul/jonathan-warning.png";
import davidFleeing from "@/assets/sprites/david-saul/david-fleeing.png";
import davidRestraint from "@/assets/sprites/david-saul/david-restraint.png";
import davidCloakCall from "@/assets/sprites/david-saul/david-cloak-call.png";
import israeliteSoldiers from "@/assets/sprites/david-saul/israelite-soldiers.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const davidSaulSprites: Record<string, SpriteConfig> = {
  start: { left: davidHarp },
  mock_consequence: { left: davidHarp },
  demand_consequence: { left: davidHarp },
  jealousy: { left: israeliteSoldiers },
  boast_consequence: { left: israeliteSoldiers },
  shame_consequence: { left: israeliteSoldiers },
  spear: { left: saulSpear },
  sword_consequence: { left: saulJealous },
  curse_consequence: { left: saulJealous },
  jonathan_warns: { left: jonathanWarning },
  confront_consequence: { left: jonathanWarning },
  doubt_consequence: { left: jonathanWarning },
  flee: { left: davidFleeing },
  war_consequence: { left: davidFleeing },
  foreign_consequence: { left: davidFleeing },
  cave: { left: davidRestraint },
  strike_consequence: { left: davidRestraint },
  wake_consequence: { left: davidRestraint },
  mercy_call: { left: davidCloakCall },
};
