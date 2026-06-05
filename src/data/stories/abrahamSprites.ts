import abrahamUr from "@/assets/sprites/abraham/abraham-ur.webp";
import abrahamKneeling from "@/assets/sprites/abraham/abraham-kneeling.webp";
import abrahamAwe from "@/assets/sprites/abraham/abraham-awe.webp";
import abrahamSarahTalk from "@/assets/sprites/abraham/abraham-sarah-talk.webp";
import abrahamLeaving from "@/assets/sprites/abraham/abraham-leaving.webp";
import abrahamWalking from "@/assets/sprites/abraham/abraham-walking.webp";
import abrahamDoubt from "@/assets/sprites/abraham/abraham-doubt.webp";
import abrahamStars from "@/assets/sprites/abraham/abraham-stars.webp";
import abrahamArrival from "@/assets/sprites/abraham/abraham-arrival.webp";
import abrahamAltar from "@/assets/sprites/abraham/abraham-altar.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Transparent PNG.
export const abrahamSprites: Record<string, SpriteConfig> = {
  start: { left: abrahamUr },
  the_call: { left: abrahamKneeling },
  the_promise: { left: abrahamAwe },
  telling_sarah: { left: abrahamSarahTalk },
  preparing: { left: abrahamWalking },
  departure: { left: abrahamLeaving },
  the_road: { left: abrahamWalking },
  doubt_night: { left: abrahamDoubt },
  stargazing: { left: abrahamStars },
  canaan_arrival: { left: abrahamArrival },
  altar: { left: abrahamAltar },
};
