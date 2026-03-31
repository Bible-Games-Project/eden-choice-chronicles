import adamStart from "@/assets/sprites/adam-start.png";
import adamAnimals from "@/assets/sprites/adam-animals.png";
import adamRiver from "@/assets/sprites/adam-river.png";
import adamMeditation from "@/assets/sprites/adam-meditation.png";
import adamNaming from "@/assets/sprites/adam-naming.png";
import adamPlay from "@/assets/sprites/adam-play.png";
import adamFlowers from "@/assets/sprites/adam-flowers.png";
import adamUpstream from "@/assets/sprites/adam-upstream.png";
import adamMeditationRiver from "@/assets/sprites/adam-meditation-river.png";
import adamDeepGarden from "@/assets/sprites/adam-deep-garden.png";
import adamGarland from "@/assets/sprites/adam-garland.png";
import adamSkyGaze from "@/assets/sprites/adam-sky-gaze.png";
import adamTreeOfLife from "@/assets/sprites/adam-tree-of-life.png";
import adamFigRest from "@/assets/sprites/adam-fig-rest.png";
import adamApproachTree from "@/assets/sprites/adam-approach-tree.png";
import adamForbiddenTree from "@/assets/sprites/adam-forbidden-tree.png";
import adamShareEve from "@/assets/sprites/adam-share-eve.png";
import adamHide from "@/assets/sprites/adam-hide.png";
import adamExpulsion from "@/assets/sprites/adam-expulsion.png";
import eveShare from "@/assets/sprites/eve-share.png";
import eveHide from "@/assets/sprites/eve-hide.png";
import eveExpulsion from "@/assets/sprites/eve-expulsion.png";
import serpentFigRest from "@/assets/sprites/serpent-fig-rest.png";
import serpentForbidden from "@/assets/sprites/serpent-forbidden.png";

export interface SpriteConfig {
  left: string; // Adam sprite
  right?: string; // Eve, serpent, or none
}

export const sceneSprites: Record<string, SpriteConfig> = {
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
  sky_gaze: { left: adamSkyGaze },
  tree_of_life: { left: adamTreeOfLife },
  fig_rest: { left: adamFigRest, right: serpentFigRest },
  approach_tree: { left: adamApproachTree },
  forbidden_tree: { left: adamForbiddenTree, right: serpentForbidden },
  share_eve: { left: adamShareEve, right: eveShare },
  hide: { left: adamHide, right: eveHide },
  expulsion: { left: adamExpulsion, right: eveExpulsion },
};
