import noahCalled from "@/assets/sprites/noah/noah-called.webp";
import noahMocked from "@/assets/sprites/noah/noah-mocked.webp";
import noahBuilding from "@/assets/sprites/noah/noah-building.webp";
import noahFamily from "@/assets/sprites/noah/noah-family.webp";
import noahAnimals from "@/assets/sprites/noah/noah-animals.webp";
import noahBoarding from "@/assets/sprites/noah/noah-boarding.webp";
import noahStorm from "@/assets/sprites/noah/noah-storm.webp";
import noahInside from "@/assets/sprites/noah/noah-inside.webp";
import noahDove from "@/assets/sprites/noah/noah-dove.webp";
import noahSteppingOut from "@/assets/sprites/noah/noah-stepping-out.webp";
import noahCovenant from "@/assets/sprites/noah/noah-covenant.webp";

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
