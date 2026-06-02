import zedekiahThrone from "@/assets/sprites/fall-jerusalem/zedekiah-throne.webp";
import jeremiahWarning from "@/assets/sprites/fall-jerusalem/jeremiah-warning.webp";
import citizensMocking from "@/assets/sprites/fall-jerusalem/citizens-mocking.webp";
import babylonianSoldier from "@/assets/sprites/fall-jerusalem/babylonian-soldier.webp";
import jeremiahWeeping from "@/assets/sprites/fall-jerusalem/jeremiah-weeping.webp";
import zedekiahBroken from "@/assets/sprites/fall-jerusalem/zedekiah-broken.webp";
import exileProcession from "@/assets/sprites/fall-jerusalem/exile-procession.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const fallJerusalemSprites: Record<string, SpriteConfig> = {
  start: { left: zedekiahThrone },
  imprison_consequence: { left: zedekiahThrone },
  ignore_consequence: { left: zedekiahThrone },
  preach: { left: jeremiahWarning },
  soften_consequence: { left: jeremiahWarning },
  retreat_consequence: { left: jeremiahWarning },
  reject: { left: citizensMocking },
  curse_consequence: { left: citizensMocking },
  giveup_consequence: { left: citizensMocking },
  siege: { left: babylonianSoldier },
  idols_consequence: { left: babylonianSoldier },
  egypt_consequence: { left: babylonianSoldier },
  famine: { left: jeremiahWeeping },
  blame_consequence: { left: jeremiahWeeping },
  flee_consequence: { left: jeremiahWeeping },
  fall: { left: zedekiahBroken },
  hide_consequence: { left: zedekiahBroken },
  escape_consequence: { left: zedekiahBroken },
  exile: { left: exileProcession },
};
