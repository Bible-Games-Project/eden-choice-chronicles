import adamStart from "@/assets/sprites/adam-start.webp";
import adamAnimals from "@/assets/sprites/adam-animals.webp";
import adamRiver from "@/assets/sprites/adam-river.webp";
import adamMeditation from "@/assets/sprites/adam-meditation.webp";
import adamNaming from "@/assets/sprites/adam-naming.webp";
import adamPlay from "@/assets/sprites/adam-play.webp";
import adamFlowers from "@/assets/sprites/adam-flowers.webp";
import adamUpstream from "@/assets/sprites/adam-upstream.webp";
import adamMeditationRiver from "@/assets/sprites/adam-meditation-river.webp";
import adamDeepGarden from "@/assets/sprites/adam-deep-garden.webp";
import adamGarland from "@/assets/sprites/adam-garland.webp";
import adamSkyGaze from "@/assets/sprites/adam-sky-gaze.webp";
import adamTreeOfLife from "@/assets/sprites/adam-tree-of-life.webp";
import adamFigRest from "@/assets/sprites/adam-fig-rest.webp";
import adamApproachTree from "@/assets/sprites/adam-approach-tree.webp";
import adamForbiddenTree from "@/assets/sprites/adam-forbidden-tree.webp";
import adamShareEve from "@/assets/sprites/adam-share-eve.webp";
import adamHide from "@/assets/sprites/adam-hide.webp";
import adamExpulsion from "@/assets/sprites/adam-expulsion.webp";
import eveShare from "@/assets/sprites/eve-share.webp";
import eveHide from "@/assets/sprites/eve-hide.webp";
import eveExpulsion from "@/assets/sprites/eve-expulsion.webp";
import serpentFigRest from "@/assets/sprites/serpent-fig-rest.webp";
import serpentForbidden from "@/assets/sprites/serpent-forbidden.webp";

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
