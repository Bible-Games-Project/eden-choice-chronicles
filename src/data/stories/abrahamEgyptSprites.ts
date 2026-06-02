import abrahamWorried from "@/assets/sprites/abraham-egypt/abraham-worried.webp";
import abrahamPraying from "@/assets/sprites/abraham-egypt/abraham-praying.webp";
import abrahamWalking from "@/assets/sprites/abraham-egypt/abraham-walking.webp";
import abrahamFearful from "@/assets/sprites/abraham-egypt/abraham-fearful.webp";
import abrahamAshamed from "@/assets/sprites/abraham-egypt/abraham-ashamed.webp";
import abrahamKneeling from "@/assets/sprites/abraham-egypt/abraham-kneeling.webp";
import abrahamGuilty from "@/assets/sprites/abraham-egypt/abraham-guilty.webp";
import abrahamRepentant from "@/assets/sprites/abraham-egypt/abraham-repentant.webp";
import sarah from "@/assets/sprites/abraham-egypt/sarah.webp";
import pharaoh from "@/assets/sprites/abraham-egypt/pharaoh.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const abrahamEgyptSprites: Record<string, SpriteConfig> = {
  start: { left: abrahamWorried },
  prayer: { left: abrahamPraying },
  egypt_temptation: { left: abrahamWorried },
  the_road_south: { left: abrahamWalking, right: sarah },
  approaching_egypt: { left: abrahamFearful },
  the_fear: { left: abrahamFearful, right: sarah },
  entering_egypt: { left: abrahamWalking, right: sarah },
  the_lie: { left: abrahamAshamed, right: sarah },
  pharaoh_hears: { left: abrahamFearful },
  sarah_taken: { left: abrahamGuilty },
  consequences_wealth: { left: abrahamGuilty },
  gods_intervention: { left: abrahamPraying },
  pharaoh_confronts: { left: abrahamAshamed, right: pharaoh },
  sent_away: { left: abrahamAshamed, right: sarah },
  the_return: { left: abrahamWalking, right: sarah },
  the_altar: { left: abrahamRepentant },
};
