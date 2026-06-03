import adamAwakening from "@/assets/sprites/adam-eve/adam-awakening.png";
import adamNaming from "@/assets/sprites/adam-eve/adam-naming.png";
import adamLonely from "@/assets/sprites/adam-eve/adam-lonely.png";
import adamSleeping from "@/assets/sprites/adam-eve/adam-sleeping.png";
import adamEveMeeting from "@/assets/sprites/adam-eve/adam-eve-meeting.png";
import adamEveTree from "@/assets/sprites/adam-eve/adam-eve-tree.png";
import eveSerpent from "@/assets/sprites/adam-eve/eve-serpent.png";
import adamEveFruit from "@/assets/sprites/adam-eve/adam-eve-fruit.png";
import adamEveHiding from "@/assets/sprites/adam-eve/adam-eve-hiding.png";
import adamEveBowing from "@/assets/sprites/adam-eve/adam-eve-bowing.png";
import adamEveLeaving from "@/assets/sprites/adam-eve/adam-eve-leaving.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const adamEveSprites: Record<string, SpriteConfig> = {
  start: { left: adamAwakening },
  naming: { left: adamNaming },
  lonely: { left: adamLonely },
  deep_sleep: { left: adamSleeping },
  meet_eve: { left: adamEveMeeting },
  warning: { left: adamEveTree },
  serpent: { left: eveSerpent },
  fruit: { left: adamEveFruit },
  shame: { left: adamEveHiding },
  confrontation: { left: adamEveBowing },
  expulsion: { left: adamEveLeaving },
};
