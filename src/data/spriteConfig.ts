import adamPeaceful from "@/assets/sprites/adam-peaceful.png";
import adamCurious from "@/assets/sprites/adam-curious.png";
import adamTense from "@/assets/sprites/adam-tense.png";
import adamSad from "@/assets/sprites/adam-sad.png";
import adamJoyful from "@/assets/sprites/adam-joyful.png";
import evePeaceful from "@/assets/sprites/eve-peaceful.png";
import eveSad from "@/assets/sprites/eve-sad.png";
import serpent from "@/assets/sprites/serpent.png";

export interface SpriteConfig {
  left: string; // Adam sprite
  right?: string; // Eve, serpent, or none
}

export const sceneSprites: Record<string, SpriteConfig> = {
  start: { left: adamPeaceful },
  animals: { left: adamCurious },
  river: { left: adamPeaceful },
  meditation: { left: adamPeaceful },
  naming: { left: adamCurious },
  play: { left: adamJoyful },
  flowers: { left: adamPeaceful },
  upstream: { left: adamCurious },
  meditation_river: { left: adamPeaceful },
  deep_garden: { left: adamTense },
  garland: { left: adamSad },
  sky_gaze: { left: adamPeaceful },
  tree_of_life: { left: adamCurious },
  fig_rest: { left: adamTense, right: serpent },
  approach_tree: { left: adamTense },
  forbidden_tree: { left: adamTense, right: serpent },
  share_eve: { left: adamSad, right: evePeaceful },
  hide: { left: adamSad, right: eveSad },
  expulsion: { left: adamSad, right: eveSad },
};
