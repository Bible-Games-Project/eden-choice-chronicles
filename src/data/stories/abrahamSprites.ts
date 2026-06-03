import abrahamUr from "@/assets/sprites/abraham/abraham-ur.png";
import abrahamKneeling from "@/assets/sprites/abraham/abraham-kneeling.png";
import abrahamAwe from "@/assets/sprites/abraham/abraham-awe.png";
import abrahamSarahTalk from "@/assets/sprites/abraham/abraham-sarah-talk.png";
import abrahamPacking from "@/assets/sprites/abraham/abraham-packing.png";
import abrahamLeaving from "@/assets/sprites/abraham/abraham-leaving.png";
import abrahamWalking from "@/assets/sprites/abraham/abraham-walking.png";
import abrahamDoubt from "@/assets/sprites/abraham/abraham-doubt.png";
import abrahamStars from "@/assets/sprites/abraham/abraham-stars.png";
import abrahamArrival from "@/assets/sprites/abraham/abraham-arrival.png";
import abrahamAltar from "@/assets/sprites/abraham/abraham-altar.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Transparent PNG.
export const abrahamSprites: Record<string, SpriteConfig> = {
  start: { left: abrahamUr },
  the_call: { left: abrahamKneeling },
  the_promise: { left: abrahamAwe },
  telling_sarah: { left: abrahamSarahTalk },
  preparing: { left: abrahamPacking },
  departure: { left: abrahamLeaving },
  the_road: { left: abrahamWalking },
  doubt_night: { left: abrahamDoubt },
  stargazing: { left: abrahamStars },
  canaan_arrival: { left: abrahamArrival },
  altar: { left: abrahamAltar },
};
