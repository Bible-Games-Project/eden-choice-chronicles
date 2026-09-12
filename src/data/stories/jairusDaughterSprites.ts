import jairusBegging from "@/assets/sprites/jairus/jairus-begging.png";
import jesusWalking from "@/assets/sprites/jairus/jesus-walking.png";
import messengerGrieving from "@/assets/sprites/jairus/messenger-grieving.png";
import jesusEncouraging from "@/assets/sprites/jairus/jesus-encouraging.png";
import jesusRaising from "@/assets/sprites/jairus/jesus-raising.png";
import girlRising from "@/assets/sprites/jairus/girl-rising.png";
import jairusAmazed from "@/assets/sprites/jairus/jairus-amazed.png";

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
