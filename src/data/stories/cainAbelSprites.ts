import cainYoung from "@/assets/sprites/cain-abel/cain-young.webp";
import cainToil from "@/assets/sprites/cain-abel/cain-toil.webp";
import abelShepherd from "@/assets/sprites/cain-abel/abel-shepherd.webp";

import cainRejected from "@/assets/sprites/cain-abel/cain-rejected.webp";
import cainAngry from "@/assets/sprites/cain-abel/cain-angry.webp";
import cainWarned from "@/assets/sprites/cain-abel/cain-warned.webp";
import brothersWalking from "@/assets/sprites/cain-abel/brothers-walking.webp";
import cainHorror from "@/assets/sprites/cain-abel/cain-horror.webp";
import cainJudgment from "@/assets/sprites/cain-abel/cain-judgment.webp";
import cainWanderer from "@/assets/sprites/cain-abel/cain-wanderer.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const cainAbelSprites: Record<string, SpriteConfig> = {
  start: { left: cainYoung },
  fields: { left: cainToil },
  abel_pasture: { left: abelShepherd },
  offerings: { left: brothersWalking },
  accepted: { left: cainRejected },
  anger: { left: cainAngry },
  warning: { left: cainWarned },
  invitation: { left: brothersWalking },
  field: { left: cainHorror },
  confrontation: { left: cainJudgment },
  wanderer: { left: cainWanderer },
};
