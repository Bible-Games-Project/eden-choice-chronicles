import highPriests from "@/assets/sprites/trial/high-priests.webp";
import falseWitnesses from "@/assets/sprites/trial/false-witnesses.webp";
import jesusSilent from "@/assets/sprites/trial/jesus-silent.webp";
import pilateQuestioning from "@/assets/sprites/trial/pilate-questioning.webp";
import jesusTruth from "@/assets/sprites/trial/jesus-truth.webp";
import crowdShouting from "@/assets/sprites/trial/crowd-shouting.webp";
import pilateWashing from "@/assets/sprites/trial/pilate-washing.webp";
import jesusCondemned from "@/assets/sprites/trial/jesus-condemned.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const trialSprites: Record<string, SpriteConfig> = {
  start: { left: highPriests },
  curse_consequence: { left: highPriests },
  beg_consequence: { left: highPriests },
  false_witnesses: { left: falseWitnesses },
  argue_consequence: { left: falseWitnesses },
  mock_consequence: { left: falseWitnesses },
  high_priest_demands: { left: jesusSilent },
  deny_consequence: { left: jesusSilent },
  refuse_consequence: { left: jesusSilent },
  to_pilate: { left: jesusSilent },
  drag_consequence: { left: jesusSilent },
  demand_consequence: { left: jesusSilent },
  pilate_questions: { left: pilateQuestioning },
  mock_rome_consequence: { left: pilateQuestioning },
  silent_pilate_consequence: { left: pilateQuestioning },
  crowd_demands: { left: crowdShouting },
  judgment_consequence: { left: crowdShouting },
  plead_consequence: { left: crowdShouting },
  pilate_washes: { left: pilateWashing },
  accuse_consequence: { left: pilateWashing },
  demand_free_consequence: { left: pilateWashing },
  condemned: { left: jesusTruth },
  cry_out_consequence: { left: jesusTruth },
  collapse_consequence: { left: jesusTruth },
  ending: { left: jesusCondemned },
};
