import abrahamFamine from "@/assets/sprites/abraham-egypt/abraham-famine.webp";
import abrahamSarahRoad from "@/assets/sprites/abraham-egypt/abraham-sarah-road.webp";
import abrahamSarahWhisper from "@/assets/sprites/abraham-egypt/abraham-sarah-whisper.webp";
import sarahTaken from "@/assets/sprites/abraham-egypt/sarah-taken.webp";
import pharaohStricken from "@/assets/sprites/abraham-egypt/pharaoh-stricken.webp";
import pharaohConfronts from "@/assets/sprites/abraham-egypt/pharaoh-confronts.webp";
import abrahamSarahLeaving from "@/assets/sprites/abraham-egypt/abraham-sarah-leaving.webp";
import abrahamAltar from "@/assets/sprites/abraham-egypt/abraham-altar.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Small reusable sprite set for Abraham in Egypt.
export const abrahamEgyptSprites: Record<string, SpriteConfig> = {
  start: { left: abrahamFamine },
  road_south: { left: abrahamSarahRoad },
  fear_rises: { left: abrahamSarahWhisper },
  the_lie: { left: abrahamSarahWhisper },
  entering_egypt: { left: sarahTaken },
  officials_come: { left: sarahTaken },
  sarah_taken: { left: pharaohStricken },
  gifts_arrive: { left: pharaohConfronts },
  plagues: { left: pharaohConfronts },
  confronted: { left: abrahamSarahLeaving },
  expelled: { left: abrahamSarahLeaving },
  altar: { left: abrahamAltar },
};
