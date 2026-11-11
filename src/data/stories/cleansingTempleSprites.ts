import jesusEntering from "@/assets/sprites/cleansing-temple/jesus-entering.webp";
import merchantsTrading from "@/assets/sprites/cleansing-temple/merchants-trading.webp";
import jesusCord from "@/assets/sprites/cleansing-temple/jesus-cord.webp";
import jesusOverturning from "@/assets/sprites/cleansing-temple/jesus-overturning.webp";
import merchantsFleeing from "@/assets/sprites/cleansing-temple/merchants-fleeing.webp";
import jesusProclaiming from "@/assets/sprites/cleansing-temple/jesus-proclaiming.webp";
import disciplesWitnessing from "@/assets/sprites/cleansing-temple/disciples-witnessing.webp";
import jesusPeace from "@/assets/sprites/cleansing-temple/jesus-peace.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const cleansingTempleSprites: Record<string, SpriteConfig> = {
  start: { left: jesusEntering },
  wait_consequence: { left: jesusEntering },
  shout_consequence: { left: jesusEntering },
  see_market: { left: merchantsTrading },
  shrug_consequence: { left: merchantsTrading },
  buy_consequence: { left: merchantsTrading },
  cord: { left: jesusCord },
  stop_consequence: { left: jesusCord },
  tables: { left: jesusOverturning },
  grab_consequence: { left: jesusOverturning },
  cover_consequence: { left: jesusOverturning },
  drive_out: { left: merchantsFleeing },
  mock_consequence: { left: merchantsFleeing },
  proclaim: { left: jesusProclaiming },
  argue_consequence: { left: jesusProclaiming },
  disciples: { left: disciplesWitnessing },
  boast_consequence: { left: disciplesWitnessing },
  restored: { left: jesusPeace },
  refill_consequence: { left: jesusPeace },
  ending: { left: jesusPeace },
};
