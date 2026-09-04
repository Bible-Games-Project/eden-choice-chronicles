import jesusWilderness from "@/assets/sprites/temptation/jesus-wilderness.webp";
import jesusPraying from "@/assets/sprites/temptation/jesus-praying.webp";
import jesusWeakened from "@/assets/sprites/temptation/jesus-weakened.webp";
import satanAppearing from "@/assets/sprites/temptation/satan-appearing.webp";
import satanTempting from "@/assets/sprites/temptation/satan-tempting.webp";
import satanKingdoms from "@/assets/sprites/temptation/satan-kingdoms.webp";
import jesusRefusing from "@/assets/sprites/temptation/jesus-refusing.webp";
import jesusVictorious from "@/assets/sprites/temptation/jesus-victorious.webp";
import angelsMinistering from "@/assets/sprites/temptation/angels-ministering.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable sprite set: 3 waist-up (jesus-praying, satan-tempting,
// jesus-victorious), the rest knees-up. No feet.
export const temptationDesertSprites: Record<string, SpriteConfig> = {
  start: { left: jesusPraying },
  curse_consequence: { left: jesusWeakened },
  leave_consequence: { left: jesusWilderness },
  bread: { left: satanTempting },
  obey_bread_consequence: { left: jesusRefusing },
  pinnacle: { left: satanAppearing },
  leap_consequence: { left: jesusRefusing },
  boast_consequence: { left: jesusRefusing },
  kingdoms: { left: satanKingdoms },
  bow_consequence: { left: jesusRefusing },
  bargain_consequence: { left: jesusRefusing },
  departs: { left: jesusVictorious },
  chase_consequence: { left: jesusVictorious },
  rest: { left: angelsMinistering },
};
