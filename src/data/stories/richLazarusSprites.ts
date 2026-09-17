import jesusParable from "@/assets/sprites/rich-lazarus/jesus-parable.png";
import richFeasting from "@/assets/sprites/rich-lazarus/rich-feasting.png";
import lazarusSuffering from "@/assets/sprites/rich-lazarus/lazarus-suffering.png";
import lazarusDogs from "@/assets/sprites/rich-lazarus/lazarus-dogs.png";
import richIndifferent from "@/assets/sprites/rich-lazarus/rich-indifferent.png";
import lazarusComforted from "@/assets/sprites/rich-lazarus/lazarus-comforted.png";
import richTorment from "@/assets/sprites/rich-lazarus/rich-torment.png";
import richPleading from "@/assets/sprites/rich-lazarus/rich-pleading.png";
import abrahamFirm from "@/assets/sprites/rich-lazarus/abraham-firm.png";
import jesusSolemn from "@/assets/sprites/rich-lazarus/jesus-solemn.png";

import { SpriteConfig } from "@/data/creationSprites";

export const richLazarusSprites: Record<string, SpriteConfig> = {
  start: { left: jesusParable },
  turn_consequence: { left: jesusParable },
  luxury: { left: richFeasting },
  envy_consequence: { left: richFeasting },
  gate: { left: lazarusSuffering },
  step_consequence: { left: lazarusSuffering },
  blame_consequence: { left: lazarusSuffering },
  dogs: { left: lazarusDogs },
  disgust_consequence: { left: lazarusDogs },
  indifference: { left: richIndifferent },
  excuse_consequence: { left: richIndifferent },
  death_lazarus: { left: lazarusComforted },
  doubt_consequence: { left: lazarusComforted },
  death_rich: { left: richTorment },
  mock_consequence: { left: richTorment },
  pity_consequence: { left: richTorment },
  plea: { left: richPleading },
  demand_consequence: { left: richPleading },
  warning: { left: abrahamFirm },
  sign_consequence: { left: abrahamFirm },
  blame_god_consequence: { left: abrahamFirm },
  ending: { left: jesusSolemn },
};
