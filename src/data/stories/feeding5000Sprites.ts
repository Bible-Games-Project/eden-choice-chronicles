import jesusCompassion from "@/assets/sprites/feeding-5000/jesus-compassion.png";
import disciplesWorried from "@/assets/sprites/feeding-5000/disciples-worried.png";
import boyOffering from "@/assets/sprites/feeding-5000/boy-offering.png";
import jesusBlessing from "@/assets/sprites/feeding-5000/jesus-blessing.png";
import disciplesDistributing from "@/assets/sprites/feeding-5000/disciples-distributing.png";
import boyAmazed from "@/assets/sprites/feeding-5000/boy-amazed.png";

import { SpriteConfig } from "@/data/creationSprites";

export const feeding5000Sprites: Record<string, SpriteConfig> = {
  start: { left: jesusCompassion },
  send_away: { left: jesusCompassion },
  rest_consequence: { left: jesusCompassion },
  compassion: { left: disciplesWorried },
  count_consequence: { left: disciplesWorried },
  boy: { left: boyOffering },
  dismiss_consequence: { left: boyOffering },
  mock_consequence: { left: boyOffering },
  bless: { left: jesusBlessing },
  unbelief_consequence: { left: jesusBlessing },
  distribute: { left: disciplesDistributing },
  hide_consequence: { left: disciplesDistributing },
  feast: { left: disciplesDistributing },
  waste_consequence: { left: disciplesDistributing },
  baskets: { left: boyAmazed },
};
