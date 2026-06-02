import peterTired from "@/assets/sprites/calling-disciples/peter-tired.webp";
import jesusTeaching from "@/assets/sprites/calling-disciples/jesus-teaching.webp";
import fishermenCasting from "@/assets/sprites/calling-disciples/fishermen-casting.webp";
import peterKneeling from "@/assets/sprites/calling-disciples/peter-kneeling.webp";
import jesusCalling from "@/assets/sprites/calling-disciples/jesus-calling.webp";
import disciplesFollowing from "@/assets/sprites/calling-disciples/disciples-following.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const callingDisciplesSprites: Record<string, SpriteConfig> = {
  start: { left: peterTired },
  curse_consequence: { left: peterTired },
  leave_consequence: { left: peterTired },
  teaching: { left: jesusTeaching },
  refuse_consequence: { left: jesusTeaching },
  catch: { left: fishermenCasting },
  refuse_cast_consequence: { left: fishermenCasting },
  argue_consequence: { left: fishermenCasting },
  miracle: { left: peterKneeling },
  boast_consequence: { left: peterKneeling },
  call: { left: jesusCalling },
  hesitate_consequence: { left: jesusCalling },
  bargain_consequence: { left: jesusCalling },
  follow: { left: disciplesFollowing },
};
