import crowd from "@/assets/sprites/sermon-mount/crowd-approaching.png";
import beatitudes from "@/assets/sprites/sermon-mount/jesus-beatitudes.png";
import saltLight from "@/assets/sprites/sermon-mount/jesus-salt-light.png";
import mercy from "@/assets/sprites/sermon-mount/jesus-mercy.png";
import enemies from "@/assets/sprites/sermon-mount/jesus-enemies.png";
import trust from "@/assets/sprites/sermon-mount/jesus-trust.png";
import foundation from "@/assets/sprites/sermon-mount/jesus-foundation.png";

import { SpriteConfig } from "@/data/creationSprites";

export const sermonMountSprites: Record<string, SpriteConfig> = {
  start: { left: crowd },
  hurry_consequence: { left: crowd },
  mock_consequence: { left: crowd },
  beatitudes: { left: beatitudes },
  boast_consequence: { left: beatitudes },
  mercy: { left: mercy },
  grudge_consequence: { left: mercy },
  judge_consequence: { left: mercy },
  salt_light: { left: saltLight },
  hide_consequence: { left: saltLight },
  enemies: { left: enemies },
  curse_consequence: { left: enemies },
  repay_consequence: { left: enemies },
  worry: { left: trust },
  worry_consequence: { left: trust },
  foundation: { left: foundation },
  sand_consequence: { left: foundation },
  ending: { left: foundation },
};
