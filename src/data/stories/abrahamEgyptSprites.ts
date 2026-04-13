import abrahamWorried from "@/assets/sprites/abraham-egypt/abraham-worried.png";
import abrahamPraying from "@/assets/sprites/abraham-egypt/abraham-praying.png";
import abrahamWalking from "@/assets/sprites/abraham-egypt/abraham-walking.png";
import abrahamFearful from "@/assets/sprites/abraham-egypt/abraham-fearful.png";
import abrahamAshamed from "@/assets/sprites/abraham-egypt/abraham-ashamed.png";
import abrahamKneeling from "@/assets/sprites/abraham-egypt/abraham-kneeling.png";
import abrahamGuilty from "@/assets/sprites/abraham-egypt/abraham-guilty.png";
import abrahamRepentant from "@/assets/sprites/abraham-egypt/abraham-repentant.png";
import sarah from "@/assets/sprites/abraham-egypt/sarah.png";
import pharaoh from "@/assets/sprites/abraham-egypt/pharaoh.png";

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
