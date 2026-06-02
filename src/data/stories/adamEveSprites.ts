import adamStart from "@/assets/sprites/adam-eve/adam-start.webp";
import adamAnimals from "@/assets/sprites/adam-eve/adam-animals.webp";
import adamRiver from "@/assets/sprites/adam-eve/adam-river.webp";
import adamMeditation from "@/assets/sprites/adam-eve/adam-meditation.webp";
import adamNaming from "@/assets/sprites/adam-eve/adam-naming.webp";
import adamPlay from "@/assets/sprites/adam-eve/adam-play.webp";
import adamFlowers from "@/assets/sprites/adam-eve/adam-flowers.webp";
import adamSkygaze from "@/assets/sprites/adam-eve/adam-skygaze.webp";
import adamLonely from "@/assets/sprites/adam-eve/adam-lonely.webp";
import adamTree from "@/assets/sprites/adam-eve/adam-tree.webp";
import adamSleep from "@/assets/sprites/adam-eve/adam-sleep.webp";
import adamWonder from "@/assets/sprites/adam-eve/adam-wonder.webp";
import adamShame from "@/assets/sprites/adam-eve/adam-shame.webp";
import adamExpulsion from "@/assets/sprites/adam-eve/adam-expulsion.webp";
import adamUpstream from "@/assets/sprites/adam-eve/adam-upstream.webp";
import adamMeditationRiver from "@/assets/sprites/adam-eve/adam-meditation-river.webp";
import adamDeepGarden from "@/assets/sprites/adam-eve/adam-deep-garden.webp";
import adamApproachTree from "@/assets/sprites/adam-eve/adam-approach-tree.webp";
import adamTreeOfLife from "@/assets/sprites/adam-eve/adam-tree-of-life.webp";
import adamFigRest from "@/assets/sprites/adam-eve/adam-fig-rest.webp";
import adamForbiddenTree from "@/assets/sprites/adam-eve/adam-forbidden-tree.webp";
import adamGarland from "@/assets/sprites/adam-eve/adam-garland.webp";
import adamEdenWalk from "@/assets/sprites/adam-eve/adam-eden-walk.webp";
import adamApproachTreeTogether from "@/assets/sprites/adam-eve/adam-approach-tree-together.webp";
import adamSerpentSpeaks from "@/assets/sprites/adam-eve/adam-serpent-speaks.webp";
import adamTemptation from "@/assets/sprites/adam-eve/adam-temptation.webp";
import adamTheFall from "@/assets/sprites/adam-eve/adam-the-fall.webp";
import adamHiding from "@/assets/sprites/adam-eve/adam-hiding.webp";
import adamJudgment from "@/assets/sprites/adam-eve/adam-judgment.webp";
import adamEveAppearsGentle from "@/assets/sprites/adam-eve/adam-eve-appears-gentle.webp";
import adamParadiseTogether from "@/assets/sprites/adam-eve/adam-paradise-together.webp";

import eveAppears from "@/assets/sprites/adam-eve/eve-appears.webp";
import eveHappy from "@/assets/sprites/adam-eve/eve-happy.webp";
import eveTempted from "@/assets/sprites/adam-eve/eve-tempted.webp";
import eveShame from "@/assets/sprites/adam-eve/eve-shame.webp";
import eveExpulsion from "@/assets/sprites/adam-eve/eve-expulsion.webp";
import eveEdenWalk from "@/assets/sprites/adam-eve/eve-eden-walk.webp";
import eveTheFall from "@/assets/sprites/adam-eve/eve-the-fall.webp";
import eveHiding from "@/assets/sprites/adam-eve/eve-hiding.webp";

import serpent from "@/assets/sprites/adam-eve/serpent.webp";
import serpentSpeaks from "@/assets/sprites/adam-eve/serpent-speaks.webp";
import serpentForbiddenTree from "@/assets/sprites/adam-eve/serpent-forbidden-tree.webp";

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
