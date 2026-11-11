import jesusTeaching from "@/assets/sprites/sower/jesus-teaching.webp";
import sowerScattering from "@/assets/sprites/sower/sower-scattering.webp";
import sowerPath from "@/assets/sprites/sower/sower-path.webp";
import sowerRocky from "@/assets/sprites/sower/sower-rocky.webp";
import sowerThorns from "@/assets/sprites/sower/sower-thorns.webp";
import sowerHarvest from "@/assets/sprites/sower/sower-harvest.webp";
import disciplesAsking from "@/assets/sprites/sower/disciples-asking.webp";
import jesusExplaining from "@/assets/sprites/sower/jesus-explaining.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const parableSowerSprites: Record<string, SpriteConfig> = {
  start: { left: jesusTeaching },
  drift_consequence: { left: jesusTeaching },
  sower: { left: sowerScattering },
  dull_consequence: { left: sowerScattering },
  path: { left: sowerPath },
  blame_consequence: { left: sowerPath },
  shrug_consequence: { left: sowerPath },
  rocky: { left: sowerRocky },
  easy_consequence: { left: sowerRocky },
  thorns: { left: sowerThorns },
  worry_consequence: { left: sowerThorns },
  wealth_consequence: { left: sowerThorns },
  good_soil: { left: sowerHarvest },
  selfish_consequence: { left: sowerHarvest },
  disciples: { left: disciplesAsking },
  sure_consequence: { left: disciplesAsking },
  ending: { left: jesusExplaining },
};
