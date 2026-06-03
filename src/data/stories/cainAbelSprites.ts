import cainYoung from "@/assets/sprites/cain-abel/cain-young.png";
import cainToil from "@/assets/sprites/cain-abel/cain-toil.png";
import abelShepherd from "@/assets/sprites/cain-abel/abel-shepherd.png";
import brothersOffering from "@/assets/sprites/cain-abel/brothers-offering.png";
import cainRejected from "@/assets/sprites/cain-abel/cain-rejected.png";
import cainAngry from "@/assets/sprites/cain-abel/cain-angry.png";
import cainWarned from "@/assets/sprites/cain-abel/cain-warned.png";
import brothersWalking from "@/assets/sprites/cain-abel/brothers-walking.png";
import cainHorror from "@/assets/sprites/cain-abel/cain-horror.png";
import cainJudgment from "@/assets/sprites/cain-abel/cain-judgment.png";
import cainWanderer from "@/assets/sprites/cain-abel/cain-wanderer.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const cainAbelSprites: Record<string, SpriteConfig> = {
  start: { left: cainYoung },
  fields: { left: cainToil },
  abel_pasture: { left: abelShepherd },
  offerings: { left: brothersOffering },
  accepted: { left: cainRejected },
  anger: { left: cainAngry },
  warning: { left: cainWarned },
  invitation: { left: brothersWalking },
  field: { left: cainHorror },
  confrontation: { left: cainJudgment },
  wanderer: { left: cainWanderer },
};
