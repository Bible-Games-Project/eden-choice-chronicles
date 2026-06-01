import jesusWalking from "@/assets/sprites/zacchaeus/jesus-walking.png";
import zacchaeusCrowd from "@/assets/sprites/zacchaeus/zacchaeus-crowd.png";
import zacchaeusClimbing from "@/assets/sprites/zacchaeus/zacchaeus-climbing.png";
import jesusLookingUp from "@/assets/sprites/zacchaeus/jesus-looking-up.png";
import zacchaeusJoyful from "@/assets/sprites/zacchaeus/zacchaeus-joyful.png";
import crowdMurmuring from "@/assets/sprites/zacchaeus/crowd-murmuring.png";
import zacchaeusRepenting from "@/assets/sprites/zacchaeus/zacchaeus-repenting.png";
import jesusBlessing from "@/assets/sprites/zacchaeus/jesus-blessing.png";

import { SpriteConfig } from "@/data/creationSprites";

export const zacchaeusSprites: Record<string, SpriteConfig> = {
  start: { left: jesusWalking },
  hide_consequence: { left: jesusWalking },
  crowd: { left: zacchaeusCrowd },
  push_consequence: { left: zacchaeusCrowd },
  quit_consequence: { left: zacchaeusCrowd },
  tree: { left: zacchaeusClimbing },
  shame_consequence: { left: zacchaeusClimbing },
  seen: { left: jesusLookingUp },
  hide_tree_consequence: { left: jesusLookingUp },
  invite: { left: zacchaeusJoyful },
  refuse_consequence: { left: zacchaeusJoyful },
  bargain_consequence: { left: zacchaeusJoyful },
  grumble: { left: crowdMurmuring },
  stare_consequence: { left: crowdMurmuring },
  repent: { left: zacchaeusRepenting },
  keep_consequence: { left: zacchaeusRepenting },
  feast_consequence: { left: zacchaeusRepenting },
  ending: { left: jesusBlessing },
};
