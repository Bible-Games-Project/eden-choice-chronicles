import noahCalled from "@/assets/sprites/noah/noah-called.png";
import noahMocked from "@/assets/sprites/noah/noah-mocked.png";
import noahBuilding from "@/assets/sprites/noah/noah-building.png";
import noahFamily from "@/assets/sprites/noah/noah-family.png";
import noahAnimals from "@/assets/sprites/noah/noah-animals.png";
import noahBoarding from "@/assets/sprites/noah/noah-boarding.png";
import noahStorm from "@/assets/sprites/noah/noah-storm.png";
import noahInside from "@/assets/sprites/noah/noah-inside.png";
import noahDove from "@/assets/sprites/noah/noah-dove.png";
import noahSteppingOut from "@/assets/sprites/noah/noah-stepping-out.png";
import noahCovenant from "@/assets/sprites/noah/noah-covenant.png";

import { SpriteConfig } from "@/data/creationSprites";

export const noahSprites: Record<string, SpriteConfig> = {
  start: { left: noahCalled },
  mockery: { left: noahMocked },
  building: { left: noahBuilding },
  ark_done: { left: noahFamily },
  animals: { left: noahAnimals },
  boarding: { left: noahBoarding },
  storm: { left: noahStorm },
  inside: { left: noahInside },
  dove: { left: noahDove },
  dry_land: { left: noahSteppingOut },
  covenant: { left: noahCovenant },
};
