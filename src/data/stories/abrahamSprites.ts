import abrahamStart from "@/assets/sprites/abraham/abraham-start.png";
import abrahamRestless from "@/assets/sprites/abraham/abraham-restless.png";
import abrahamKneeling from "@/assets/sprites/abraham/abraham-kneeling.png";
import abrahamAwe from "@/assets/sprites/abraham/abraham-awe.png";
import abrahamBurdened from "@/assets/sprites/abraham/abraham-burdened.png";
import abrahamSpeaking from "@/assets/sprites/abraham/abraham-speaking.png";
import abrahamResolved from "@/assets/sprites/abraham/abraham-resolved.png";
import abrahamWalking from "@/assets/sprites/abraham/abraham-walking.png";
import abrahamStargazing from "@/assets/sprites/abraham/abraham-stargazing.png";
import abrahamArrival from "@/assets/sprites/abraham/abraham-arrival.png";
import sarai from "@/assets/sprites/abraham/sarai.png";

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
