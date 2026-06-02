import samsonYoung from "@/assets/sprites/samson/samson-young.webp";
import samsonStrong from "@/assets/sprites/samson/samson-strong.webp";
import philistines from "@/assets/sprites/samson/philistines.webp";
import delilah from "@/assets/sprites/samson/delilah.webp";
import samsonShaved from "@/assets/sprites/samson/samson-shaved.webp";
import samsonPillars from "@/assets/sprites/samson/samson-pillars.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const samsonSprites: Record<string, SpriteConfig> = {
  start: { left: samsonYoung },
  mock_consequence: { left: samsonYoung },
  hide_consequence: { left: samsonYoung },
  vineyard: { left: samsonStrong },
  run_consequence: { left: samsonStrong },
  beg_consequence: { left: samsonStrong },
  philistine_clash: { left: philistines },
  bow_consequence: { left: philistines },
  boast_consequence: { left: philistines },
  delilah_meet: { left: delilah },
  lie_consequence: { left: delilah },
  guard_to_betrayed: { left: delilah },
  betrayed: { left: samsonShaved },
  curse_consequence: { left: samsonShaved },
  blame_consequence: { left: samsonShaved },
  temple_summon: { left: samsonPillars },
  beg_crowd_consequence: { left: samsonPillars },
  silent_consequence: { left: samsonPillars },
  ending_redeemed: { left: samsonPillars },
};
