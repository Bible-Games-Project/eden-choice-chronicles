import peterTired from "@/assets/sprites/calling-disciples/peter-tired.webp";
import jesusTeachingPeter from "@/assets/sprites/calling-disciples/jesus-teaching-peter.webp";
import peterAndrewNets from "@/assets/sprites/calling-disciples/peter-andrew-nets.webp";
import peterKneeling from "@/assets/sprites/calling-disciples/peter-kneeling.webp";
import jesusCalling from "@/assets/sprites/calling-disciples/jesus-calling.webp";
import jamesJohnZebedee from "@/assets/sprites/calling-disciples/james-john-zebedee.webp";
import disciplesFollowing from "@/assets/sprites/calling-disciples/disciples-following.webp";
import disciplesListening from "@/assets/sprites/calling-disciples/disciples-listening.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable sprite set: 3 waist-up (jesus-teaching-peter, jesus-calling,
// james-john-zebedee), the rest knees-up. No feet.
export const callingDisciplesSprites: Record<string, SpriteConfig> = {
  start: { left: peterTired },
  curse_consequence: { left: peterTired },
  leave_consequence: { left: peterTired },
  teaching: { left: jesusTeachingPeter },
  refuse_consequence: { left: jesusTeachingPeter },
  catch: { left: peterAndrewNets },
  refuse_cast_consequence: { left: peterAndrewNets },
  argue_consequence: { left: peterAndrewNets },
  miracle: { left: peterKneeling },
  boast_consequence: { left: peterKneeling },
  call: { left: jesusCalling },
  hesitate_consequence: { left: jesusCalling },
  bargain_consequence: { left: jamesJohnZebedee },
  follow: { left: disciplesFollowing, right: disciplesListening },
};
