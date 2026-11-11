import jesusWelcoming from "@/assets/sprites/last-supper/jesus-welcoming.webp";
import jesusServing from "@/assets/sprites/last-supper/jesus-serving.webp";
import jesusBread from "@/assets/sprites/last-supper/jesus-bread.webp";
import jesusCup from "@/assets/sprites/last-supper/jesus-cup.webp";
import jesusSorrowful from "@/assets/sprites/last-supper/jesus-sorrowful.webp";
import disciplesQuestioning from "@/assets/sprites/last-supper/disciples-questioning.webp";
import peterEarnest from "@/assets/sprites/last-supper/peter-earnest.webp";
import judasTroubled from "@/assets/sprites/last-supper/judas-troubled.webp";
import jesusBlessing from "@/assets/sprites/last-supper/jesus-blessing.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const lastSupperSprites: Record<string, SpriteConfig> = {
  start: { left: jesusWelcoming },
  send_consequence: { left: jesusWelcoming },
  glory_consequence: { left: jesusWelcoming },
  gathered: { left: jesusWelcoming },
  order_consequence: { left: jesusWelcoming },
  leave_consequence: { left: jesusWelcoming },
  washing: { left: jesusServing },
  agree_consequence: { left: peterEarnest },
  rebuke_consequence: { left: peterEarnest },
  bread_table: { left: jesusBread },
  hide_consequence: { left: jesusBread },
  alone_consequence: { left: jesusBread },
  cup_lifted: { left: jesusCup },
  quiet_consequence: { left: jesusCup },
  pour_consequence: { left: jesusCup },
  remembrance: { left: jesusBlessing },
  forget_consequence: { left: jesusBlessing },
  demand_consequence: { left: jesusBlessing },
  betrayal_words: { left: jesusSorrowful },
  accuse_consequence: { left: judasTroubled },
  take_back_consequence: { left: jesusSorrowful },
  disciples_ask: { left: disciplesQuestioning },
  point_consequence: { left: disciplesQuestioning },
  laugh_consequence: { left: disciplesQuestioning },
  farewell: { left: jesusBlessing },
  leave_silent_consequence: { left: jesusBlessing },
  warn_consequence: { left: jesusBlessing },
  ending: { left: jesusBlessing },
};
