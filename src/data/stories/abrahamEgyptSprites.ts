import abrahamFamine from "@/assets/sprites/abraham-egypt/abraham-famine.png";
import abrahamSarahRoad from "@/assets/sprites/abraham-egypt/abraham-sarah-road.png";
import abrahamFearful from "@/assets/sprites/abraham-egypt/abraham-fearful.png";
import abrahamSarahWhisper from "@/assets/sprites/abraham-egypt/abraham-sarah-whisper.png";
import abrahamSarahEntering from "@/assets/sprites/abraham-egypt/abraham-sarah-entering.png";
import abrahamOfficial from "@/assets/sprites/abraham-egypt/abraham-official.png";
import abrahamGrief from "@/assets/sprites/abraham-egypt/abraham-grief.png";
import abrahamGifts from "@/assets/sprites/abraham-egypt/abraham-gifts.png";
import pharaohStricken from "@/assets/sprites/abraham-egypt/pharaoh-stricken.png";
import abrahamPharaoh from "@/assets/sprites/abraham-egypt/abraham-pharaoh.png";
import abrahamSarahLeaving from "@/assets/sprites/abraham-egypt/abraham-sarah-leaving.png";
import abrahamAltar from "@/assets/sprites/abraham-egypt/abraham-altar.png";

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
