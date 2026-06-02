import twoDisciplesSad from "@/assets/sprites/emmaus/two-disciples-sad.webp";
import jesusStranger from "@/assets/sprites/emmaus/jesus-stranger.webp";
import discipleExplaining from "@/assets/sprites/emmaus/disciple-explaining.webp";
import jesusTeaching from "@/assets/sprites/emmaus/jesus-teaching.webp";
import twoDisciplesListening from "@/assets/sprites/emmaus/two-disciples-listening.webp";
import discipleInviting from "@/assets/sprites/emmaus/disciple-inviting.webp";
import jesusBreakingBread from "@/assets/sprites/emmaus/jesus-breaking-bread.webp";
import twoDisciplesAmazed from "@/assets/sprites/emmaus/two-disciples-amazed.webp";
import twoDisciplesRunning from "@/assets/sprites/emmaus/two-disciples-running.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const emmausSprites: Record<string, SpriteConfig> = {
  start: { left: twoDisciplesSad },
  argue_consequence: { left: twoDisciplesSad },
  boast_consequence: { left: twoDisciplesSad },
  stranger_joins: { left: jesusStranger },
  refuse_consequence: { left: jesusStranger },
  mock_consequence: { left: jesusStranger },
  share_grief: { left: discipleExplaining },
  blame_consequence: { left: discipleExplaining },
  short_consequence: { left: discipleExplaining },
  scripture: { left: jesusTeaching },
  offense_consequence: { left: jesusTeaching },
  interrupt_consequence: { left: jesusTeaching },
  burning_hearts: { left: twoDisciplesListening },
  distrust_consequence: { left: twoDisciplesListening },
  demand_consequence: { left: twoDisciplesListening },
  invite_stay: { left: discipleInviting },
  letgo_consequence: { left: discipleInviting },
  charge_consequence: { left: discipleInviting },
  breaking_bread: { left: jesusBreakingBread },
  look_consequence: { left: jesusBreakingBread },
  host_consequence: { left: jesusBreakingBread },
  recognition: { left: twoDisciplesAmazed },
  stay_consequence: { left: twoDisciplesAmazed },
  whisper_consequence: { left: twoDisciplesAmazed },
  ending: { left: twoDisciplesRunning },
};
