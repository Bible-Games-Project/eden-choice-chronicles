import adamStart from "@/assets/sprites/adam-eve/adam-start.png";
import adamAnimals from "@/assets/sprites/adam-eve/adam-animals.png";
import adamRiver from "@/assets/sprites/adam-eve/adam-river.png";
import adamMeditation from "@/assets/sprites/adam-eve/adam-meditation.png";
import adamNaming from "@/assets/sprites/adam-eve/adam-naming.png";
import adamPlay from "@/assets/sprites/adam-eve/adam-play.png";
import adamFlowers from "@/assets/sprites/adam-eve/adam-flowers.png";
import adamSkygaze from "@/assets/sprites/adam-eve/adam-skygaze.png";
import adamLonely from "@/assets/sprites/adam-eve/adam-lonely.png";
import adamTree from "@/assets/sprites/adam-eve/adam-tree.png";
import adamSleep from "@/assets/sprites/adam-eve/adam-sleep.png";
import adamWonder from "@/assets/sprites/adam-eve/adam-wonder.png";
import adamShame from "@/assets/sprites/adam-eve/adam-shame.png";
import adamExpulsion from "@/assets/sprites/adam-eve/adam-expulsion.png";
import eveAppears from "@/assets/sprites/adam-eve/eve-appears.png";
import eveHappy from "@/assets/sprites/adam-eve/eve-happy.png";
import eveTempted from "@/assets/sprites/adam-eve/eve-tempted.png";
import eveShame from "@/assets/sprites/adam-eve/eve-shame.png";
import eveExpulsion from "@/assets/sprites/adam-eve/eve-expulsion.png";
import serpent from "@/assets/sprites/adam-eve/serpent.png";
import serpentSpeaks from "@/assets/sprites/adam-eve/serpent-speaks.png";

import { SpriteConfig } from "@/data/creationSprites";

export const adamEveSprites: Record<string, SpriteConfig> = {
  start: { left: adamStart },
  animals: { left: adamAnimals },
  river: { left: adamRiver },
  meditation: { left: adamMeditation },
  naming: { left: adamNaming },
  play: { left: adamPlay },
  flowers: { left: adamFlowers },
  upstream: { left: adamRiver },
  meditation_river: { left: adamMeditation },
  deep_garden: { left: adamTree },
  garland: { left: adamFlowers },
  sky_gaze: { left: adamSkygaze },
  approach_tree: { left: adamTree },
  tree_of_life: { left: adamTree },
  fig_rest: { left: adamTree, right: serpent },
  sleep: { left: adamSleep },
  eve_appears: { left: adamWonder, right: eveAppears },
  eve_appears_gentle: { left: adamWonder, right: eveAppears },
  paradise_together: { left: adamWonder, right: eveHappy },
  eden_walk: { left: adamStart, right: eveHappy },
  approach_tree_together: { left: adamLonely, right: eveTempted },
  forbidden_tree: { left: adamTree, right: serpent },
  serpent_speaks: { left: adamLonely, right: serpentSpeaks },
  temptation: { left: adamLonely, right: eveTempted },
  the_fall: { left: adamShame, right: eveShame },
  shame: { left: adamShame, right: eveShame },
  hiding: { left: adamShame, right: eveShame },
  judgment: { left: adamShame },
  expulsion: { left: adamExpulsion, right: eveExpulsion },
};
