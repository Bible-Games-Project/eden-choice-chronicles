import samsonYoung from "@/assets/sprites/samson/samson-young.webp";
import samsonJourney from "@/assets/sprites/samson/samson-journey.webp";
import samsonLion from "@/assets/sprites/samson/samson-lion.webp";
import samsonJawbone from "@/assets/sprites/samson/samson-jawbone.webp";
import philistines from "@/assets/sprites/samson/philistines.webp";
import delilah from "@/assets/sprites/samson/delilah.webp";
import delilahQuestioning from "@/assets/sprites/samson/delilah-questioning.webp";
import samsonShaved from "@/assets/sprites/samson/samson-shaved.webp";
import samsonCaptured from "@/assets/sprites/samson/samson-captured.webp";
import samsonPraying from "@/assets/sprites/samson/samson-praying.webp";
import samsonPillars from "@/assets/sprites/samson/samson-pillars.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Small reusable set matching the story progression.
export const samsonSprites: Record<string, SpriteConfig> = {
  start: { left: samsonYoung },
  mock_consequence: { left: samsonYoung },
  hide_consequence: { left: samsonJourney },
  vineyard: { left: samsonLion },
  run_consequence: { left: samsonLion },
  beg_consequence: { left: samsonJourney },
  philistine_clash: { left: philistines },
  bow_consequence: { left: philistines },
  boast_consequence: { left: samsonJawbone },
  delilah_meet: { left: delilah },
  lie_consequence: { left: delilah },
  guard_to_betrayed: { left: delilahQuestioning },
  betrayed: { left: samsonShaved },
  curse_consequence: { left: samsonCaptured },
  blame_consequence: { left: samsonShaved },
  temple_summon: { left: samsonCaptured },
  beg_crowd_consequence: { left: samsonPraying },
  silent_consequence: { left: samsonPraying },
  ending_redeemed: { left: samsonPillars },
};
