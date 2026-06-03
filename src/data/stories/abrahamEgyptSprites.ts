import abrahamFamine from "@/assets/sprites/abraham-egypt/abraham-famine.webp";
import abrahamSarahRoad from "@/assets/sprites/abraham-egypt/abraham-sarah-road.webp";
import abrahamFearful from "@/assets/sprites/abraham-egypt/abraham-fearful.webp";
import abrahamSarahWhisper from "@/assets/sprites/abraham-egypt/abraham-sarah-whisper.webp";
import abrahamSarahEntering from "@/assets/sprites/abraham-egypt/abraham-sarah-entering.webp";
import abrahamOfficial from "@/assets/sprites/abraham-egypt/abraham-official.webp";
import abrahamGrief from "@/assets/sprites/abraham-egypt/abraham-grief.webp";
import abrahamGifts from "@/assets/sprites/abraham-egypt/abraham-gifts.webp";
import pharaohStricken from "@/assets/sprites/abraham-egypt/pharaoh-stricken.webp";
import abrahamPharaoh from "@/assets/sprites/abraham-egypt/abraham-pharaoh.webp";
import abrahamSarahLeaving from "@/assets/sprites/abraham-egypt/abraham-sarah-leaving.webp";
import abrahamAltar from "@/assets/sprites/abraham-egypt/abraham-altar.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Transparent PNG. No reuse.
export const abrahamEgyptSprites: Record<string, SpriteConfig> = {
  start: { left: abrahamFamine },
  road_south: { left: abrahamSarahRoad },
  fear_rises: { left: abrahamFearful },
  the_lie: { left: abrahamSarahWhisper },
  entering_egypt: { left: abrahamSarahEntering },
  officials_come: { left: abrahamOfficial },
  sarah_taken: { left: abrahamGrief },
  gifts_arrive: { left: abrahamGifts },
  plagues: { left: pharaohStricken },
  confronted: { left: abrahamPharaoh },
  expelled: { left: abrahamSarahLeaving },
  altar: { left: abrahamAltar },
};
