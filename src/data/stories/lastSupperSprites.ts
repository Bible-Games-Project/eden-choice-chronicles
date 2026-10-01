import jesusWelcoming from "@/assets/sprites/last-supper/jesus-welcoming.png";
import jesusServing from "@/assets/sprites/last-supper/jesus-serving.png";
import jesusBread from "@/assets/sprites/last-supper/jesus-bread.png";
import jesusCup from "@/assets/sprites/last-supper/jesus-cup.png";
import jesusSorrowful from "@/assets/sprites/last-supper/jesus-sorrowful.png";
import disciplesQuestioning from "@/assets/sprites/last-supper/disciples-questioning.png";
import peterEarnest from "@/assets/sprites/last-supper/peter-earnest.png";
import judasTroubled from "@/assets/sprites/last-supper/judas-troubled.png";
import jesusBlessing from "@/assets/sprites/last-supper/jesus-blessing.png";

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
