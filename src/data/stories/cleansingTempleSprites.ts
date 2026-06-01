import jesusEntering from "@/assets/sprites/cleansing-temple/jesus-entering.png";
import merchantsTrading from "@/assets/sprites/cleansing-temple/merchants-trading.png";
import jesusCord from "@/assets/sprites/cleansing-temple/jesus-cord.png";
import jesusOverturning from "@/assets/sprites/cleansing-temple/jesus-overturning.png";
import merchantsFleeing from "@/assets/sprites/cleansing-temple/merchants-fleeing.png";
import jesusProclaiming from "@/assets/sprites/cleansing-temple/jesus-proclaiming.png";
import disciplesWitnessing from "@/assets/sprites/cleansing-temple/disciples-witnessing.png";
import jesusPeace from "@/assets/sprites/cleansing-temple/jesus-peace.png";

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
