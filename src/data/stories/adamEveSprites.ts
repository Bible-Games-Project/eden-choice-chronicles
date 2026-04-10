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
import adamUpstream from "@/assets/sprites/adam-eve/adam-upstream.png";
import adamMeditationRiver from "@/assets/sprites/adam-eve/adam-meditation-river.png";
import adamDeepGarden from "@/assets/sprites/adam-eve/adam-deep-garden.png";
import adamApproachTree from "@/assets/sprites/adam-eve/adam-approach-tree.png";
import adamTreeOfLife from "@/assets/sprites/adam-eve/adam-tree-of-life.png";
import adamFigRest from "@/assets/sprites/adam-eve/adam-fig-rest.png";
import adamForbiddenTree from "@/assets/sprites/adam-eve/adam-forbidden-tree.png";
import adamGarland from "@/assets/sprites/adam-eve/adam-garland.png";
import adamEdenWalk from "@/assets/sprites/adam-eve/adam-eden-walk.png";
import adamApproachTreeTogether from "@/assets/sprites/adam-eve/adam-approach-tree-together.png";
import adamSerpentSpeaks from "@/assets/sprites/adam-eve/adam-serpent-speaks.png";
import adamTemptation from "@/assets/sprites/adam-eve/adam-temptation.png";
import adamTheFall from "@/assets/sprites/adam-eve/adam-the-fall.png";
import adamHiding from "@/assets/sprites/adam-eve/adam-hiding.png";
import adamJudgment from "@/assets/sprites/adam-eve/adam-judgment.png";
import adamEveAppearsGentle from "@/assets/sprites/adam-eve/adam-eve-appears-gentle.png";
import adamParadiseTogether from "@/assets/sprites/adam-eve/adam-paradise-together.png";

import eveAppears from "@/assets/sprites/adam-eve/eve-appears.png";
import eveHappy from "@/assets/sprites/adam-eve/eve-happy.png";
import eveTempted from "@/assets/sprites/adam-eve/eve-tempted.png";
import eveShame from "@/assets/sprites/adam-eve/eve-shame.png";
import eveExpulsion from "@/assets/sprites/adam-eve/eve-expulsion.png";
import eveEdenWalk from "@/assets/sprites/adam-eve/eve-eden-walk.png";
import eveTheFall from "@/assets/sprites/adam-eve/eve-the-fall.png";
import eveHiding from "@/assets/sprites/adam-eve/eve-hiding.png";

import serpent from "@/assets/sprites/adam-eve/serpent.png";
import serpentSpeaks from "@/assets/sprites/adam-eve/serpent-speaks.png";
import serpentForbiddenTree from "@/assets/sprites/adam-eve/serpent-forbidden-tree.png";

import { SpriteConfig } from "@/data/creationSprites";

export const adamEveSprites: Record<string, SpriteConfig> = {
  start: { left: adamStart },
  animals: { left: adamAnimals },
  river: { left: adamRiver },
  meditation: { left: adamMeditation },
  naming: { left: adamNaming },
  play: { left: adamPlay },
  flowers: { left: adamFlowers },
  upstream: { left: adamUpstream },
  meditation_river: { left: adamMeditationRiver },
  deep_garden: { left: adamDeepGarden },
  garland: { left: adamGarland },
  sky_gaze: { left: adamSkygaze },
  approach_tree: { left: adamApproachTree },
  tree_of_life: { left: adamTreeOfLife },
  fig_rest: { left: adamFigRest, right: serpent },
  sleep: { left: adamSleep },
  eve_appears: { left: adamWonder, right: eveAppears },
  eve_appears_gentle: { left: adamEveAppearsGentle, right: eveAppears },
  paradise_together: { left: adamParadiseTogether, right: eveHappy },
  eden_walk: { left: adamEdenWalk, right: eveEdenWalk },
  approach_tree_together: { left: adamApproachTreeTogether, right: eveTempted },
  forbidden_tree: { left: adamForbiddenTree, right: serpentForbiddenTree },
  serpent_speaks: { left: adamSerpentSpeaks, right: serpentSpeaks },
  temptation: { left: adamTemptation, right: eveTempted },
  the_fall: { left: adamTheFall, right: eveTheFall },
  shame: { left: adamShame, right: eveShame },
  hiding: { left: adamHiding, right: eveHiding },
  judgment: { left: adamJudgment },
  expulsion: { left: adamExpulsion, right: eveExpulsion },
};
