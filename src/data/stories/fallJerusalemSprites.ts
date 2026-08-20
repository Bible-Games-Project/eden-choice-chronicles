import zedekiahThrone from "@/assets/sprites/fall-jerusalem/zedekiah-throne.webp";
import jeremiahWarning from "@/assets/sprites/fall-jerusalem/jeremiah-warning.webp";
import citizensMocking from "@/assets/sprites/fall-jerusalem/citizens-mocking.webp";
import babylonianArmy from "@/assets/sprites/fall-jerusalem/babylonian-army.webp";
import babylonianSoldier from "@/assets/sprites/fall-jerusalem/babylonian-soldier.webp";
import peopleSuffering from "@/assets/sprites/fall-jerusalem/people-suffering.webp";
import jeremiahWeeping from "@/assets/sprites/fall-jerusalem/jeremiah-weeping.webp";
import zedekiahBroken from "@/assets/sprites/fall-jerusalem/zedekiah-broken.webp";
import exileProcession from "@/assets/sprites/fall-jerusalem/exile-procession.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Small reusable set matched to the story progression.
export const fallJerusalemSprites: Record<string, SpriteConfig> = {
  start: { left: zedekiahThrone },
  imprison_consequence: { left: zedekiahThrone },
  ignore_consequence: { left: zedekiahThrone },
  preach: { left: jeremiahWarning },
  soften_consequence: { left: jeremiahWarning },
  retreat_consequence: { left: jeremiahWeeping },
  reject: { left: citizensMocking },
  curse_consequence: { left: citizensMocking },
  giveup_consequence: { left: jeremiahWeeping },
  siege: { left: babylonianArmy },
  idols_consequence: { left: babylonianSoldier },
  egypt_consequence: { left: babylonianArmy },
  famine: { left: peopleSuffering },
  blame_consequence: { left: peopleSuffering },
  flee_consequence: { left: jeremiahWeeping },
  fall: { left: babylonianSoldier },
  hide_consequence: { left: zedekiahBroken },
  escape_consequence: { left: zedekiahBroken },
  exile: { left: exileProcession },
};
