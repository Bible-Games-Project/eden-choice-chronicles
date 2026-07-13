import abrahamUr from "@/assets/sprites/abraham/abraham-ur.webp";
import abrahamListening from "@/assets/sprites/abraham/abraham-listening.webp";
import abrahamSarahTalk from "@/assets/sprites/abraham/abraham-sarah-talk.webp";
import abrahamLeaving from "@/assets/sprites/abraham/abraham-leaving.webp";
import abrahamWalking from "@/assets/sprites/abraham/abraham-walking.webp";
import abrahamArrival from "@/assets/sprites/abraham/abraham-arrival.webp";
import abrahamAltar from "@/assets/sprites/abraham/abraham-altar.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Small reusable sprite set for The Call of Abraham.
export const abrahamSprites: Record<string, SpriteConfig> = {
  start: { left: abrahamUr },
  the_call: { left: abrahamListening },
  the_promise: { left: abrahamListening },
  telling_sarah: { left: abrahamSarahTalk },
  preparing: { left: abrahamLeaving },
  departure: { left: abrahamLeaving },
  the_road: { left: abrahamWalking },
  doubt_night: { left: abrahamListening },
  stargazing: { left: abrahamAltar },
  canaan_arrival: { left: abrahamArrival },
  altar: { left: abrahamAltar },
};
