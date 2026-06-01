import jesusParable from "@/assets/sprites/ten-virgins/jesus-parable.png";
import tenVirgins from "@/assets/sprites/ten-virgins/ten-virgins.png";
import wiseWithOil from "@/assets/sprites/ten-virgins/wise-with-oil.png";
import foolishNoOil from "@/assets/sprites/ten-virgins/foolish-no-oil.png";
import virginsDrowsy from "@/assets/sprites/ten-virgins/virgins-drowsy.png";
import bridegroomArriving from "@/assets/sprites/ten-virgins/bridegroom-arriving.png";
import foolishPleading from "@/assets/sprites/ten-virgins/foolish-pleading.png";
import bridegroomFirm from "@/assets/sprites/ten-virgins/bridegroom-firm.png";
import jesusWatchful from "@/assets/sprites/ten-virgins/jesus-watchful.png";

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
