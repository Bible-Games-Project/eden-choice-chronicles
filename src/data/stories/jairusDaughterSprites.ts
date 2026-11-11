import jairusBegging from "@/assets/sprites/jairus/jairus-begging.webp";
import jesusWalking from "@/assets/sprites/jairus/jesus-walking.webp";
import messengerGrieving from "@/assets/sprites/jairus/messenger-grieving.webp";
import jesusEncouraging from "@/assets/sprites/jairus/jesus-encouraging.webp";
import jesusRaising from "@/assets/sprites/jairus/jesus-raising.webp";
import girlRising from "@/assets/sprites/jairus/girl-rising.webp";
import jairusAmazed from "@/assets/sprites/jairus/jairus-amazed.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const jairusDaughterSprites: Record<string, SpriteConfig> = {
  start: { left: jairusBegging },
  servant_consequence: { left: jairusBegging },
  hide_consequence: { left: jairusBegging },
  plea: { left: jairusBegging },
  journey: { left: jesusWalking },
  push_consequence: { left: jesusWalking },
  news: { left: messengerGrieving },
  despair_consequence: { left: messengerGrieving },
  blame_consequence: { left: messengerGrieving },
  encourage: { left: jesusEncouraging },
  room: { left: jesusEncouraging },
  argue_consequence: { left: jesusEncouraging },
  raise: { left: jesusRaising },
  joy: { left: girlRising, right: jairusAmazed },
};
