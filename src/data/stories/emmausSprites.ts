import cleopasSad from "@/assets/sprites/emmaus/cleopas-sad.png";
import jesusStranger from "@/assets/sprites/emmaus/jesus-stranger.png";
import cleopasExplaining from "@/assets/sprites/emmaus/cleopas-explaining.png";
import jesusTeaching from "@/assets/sprites/emmaus/jesus-teaching.png";
import discipleListening from "@/assets/sprites/emmaus/disciple-listening.png";
import discipleInviting from "@/assets/sprites/emmaus/disciple-inviting.png";
import jesusBreakingBread from "@/assets/sprites/emmaus/jesus-breaking-bread.png";
import cleopasAmazed from "@/assets/sprites/emmaus/cleopas-amazed.png";
import discipleRunning from "@/assets/sprites/emmaus/disciple-running.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Transparent PNG.
export const emmausSprites: Record<string, SpriteConfig> = {
  start: { left: cleopasSad },
  argue_consequence: { left: cleopasSad },
  boast_consequence: { left: cleopasSad },
  stranger_joins: { left: jesusStranger },
  refuse_consequence: { left: jesusStranger },
  mock_consequence: { left: jesusStranger },
  share_grief: { left: cleopasExplaining },
  blame_consequence: { left: cleopasExplaining },
  short_consequence: { left: cleopasExplaining },
  scripture: { left: jesusTeaching },
  offense_consequence: { left: jesusTeaching },
  interrupt_consequence: { left: jesusTeaching },
  burning_hearts: { left: discipleListening },
  distrust_consequence: { left: discipleListening },
  demand_consequence: { left: discipleListening },
  invite_stay: { left: discipleInviting },
  letgo_consequence: { left: discipleInviting },
  charge_consequence: { left: discipleInviting },
  breaking_bread: { left: jesusBreakingBread },
  look_consequence: { left: jesusBreakingBread },
  host_consequence: { left: jesusBreakingBread },
  recognition: { left: cleopasAmazed },
  stay_consequence: { left: cleopasAmazed },
  whisper_consequence: { left: cleopasAmazed },
  ending: { left: discipleRunning },
};
