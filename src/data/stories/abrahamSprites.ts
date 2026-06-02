import abrahamStart from "@/assets/sprites/abraham/abraham-start.webp";
import abrahamRestless from "@/assets/sprites/abraham/abraham-restless.webp";
import abrahamKneeling from "@/assets/sprites/abraham/abraham-kneeling.webp";
import abrahamAwe from "@/assets/sprites/abraham/abraham-awe.webp";
import abrahamBurdened from "@/assets/sprites/abraham/abraham-burdened.webp";
import abrahamSpeaking from "@/assets/sprites/abraham/abraham-speaking.webp";
import abrahamResolved from "@/assets/sprites/abraham/abraham-resolved.webp";
import abrahamWalking from "@/assets/sprites/abraham/abraham-walking.webp";
import abrahamStargazing from "@/assets/sprites/abraham/abraham-stargazing.webp";
import abrahamArrival from "@/assets/sprites/abraham/abraham-arrival.webp";
import sarai from "@/assets/sprites/abraham/sarai.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const abrahamSprites: Record<string, SpriteConfig> = {
  start: { left: abrahamStart },
  familiar_life: { left: abrahamRestless },
  restlessness: { left: abrahamRestless },
  the_voice: { left: abrahamKneeling },
  the_promise: { left: abrahamAwe },
  the_weight: { left: abrahamBurdened },
  telling_sarai: { left: abrahamSpeaking, right: sarai },
  sarai_responds: { left: abrahamAwe, right: sarai },
  the_horizon: { left: abrahamBurdened },
  the_struggle: { left: abrahamRestless },
  the_decision: { left: abrahamResolved },
  the_road: { left: abrahamWalking },
  the_stars: { left: abrahamStargazing },
  arrival: { left: abrahamArrival },
};
