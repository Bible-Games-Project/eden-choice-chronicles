import adamAwakening from "@/assets/sprites/adam-eve/adam-awakening.webp";
import adamNaming from "@/assets/sprites/adam-eve/adam-naming.webp";
import adamLonely from "@/assets/sprites/adam-eve/adam-lonely.webp";
import adamSleeping from "@/assets/sprites/adam-eve/adam-sleeping.webp";
import adamEveMeeting from "@/assets/sprites/adam-eve/adam-eve-meeting.webp";
import adamEveTree from "@/assets/sprites/adam-eve/adam-eve-tree.webp";
import eveSerpent from "@/assets/sprites/adam-eve/eve-serpent.webp";
import adamEveFruit from "@/assets/sprites/adam-eve/adam-eve-fruit.webp";
import adamEveHiding from "@/assets/sprites/adam-eve/adam-eve-hiding.webp";
import adamEveBowing from "@/assets/sprites/adam-eve/adam-eve-bowing.webp";
import adamEveLeaving from "@/assets/sprites/adam-eve/adam-eve-leaving.webp";

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
