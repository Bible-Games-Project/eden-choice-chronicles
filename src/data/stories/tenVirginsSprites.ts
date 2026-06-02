import jesusParable from "@/assets/sprites/ten-virgins/jesus-parable.webp";
import tenVirgins from "@/assets/sprites/ten-virgins/ten-virgins.webp";
import wiseWithOil from "@/assets/sprites/ten-virgins/wise-with-oil.webp";
import foolishNoOil from "@/assets/sprites/ten-virgins/foolish-no-oil.webp";
import virginsDrowsy from "@/assets/sprites/ten-virgins/virgins-drowsy.webp";
import bridegroomArriving from "@/assets/sprites/ten-virgins/bridegroom-arriving.webp";
import foolishPleading from "@/assets/sprites/ten-virgins/foolish-pleading.webp";
import bridegroomFirm from "@/assets/sprites/ten-virgins/bridegroom-firm.webp";
import jesusWatchful from "@/assets/sprites/ten-virgins/jesus-watchful.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const tenVirginsSprites: Record<string, SpriteConfig> = {
  start: { left: jesusParable },
  ignore_consequence: { left: jesusParable },
  wait: { left: tenVirgins },
  wander_consequence: { left: tenVirgins },
  oil: { left: wiseWithOil },
  skip_consequence: { left: foolishNoOil },
  borrow_consequence: { left: foolishNoOil },
  delay: { left: virginsDrowsy },
  curse_consequence: { left: virginsDrowsy },
  midnight: { left: bridegroomArriving },
  sleep_consequence: { left: bridegroomArriving },
  run: { left: foolishPleading },
  mock_consequence: { left: foolishPleading },
  door: { left: bridegroomFirm },
  demand_consequence: { left: bridegroomFirm },
  ending: { left: jesusWatchful },
};
