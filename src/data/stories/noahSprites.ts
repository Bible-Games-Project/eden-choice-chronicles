import noahStart from "@/assets/sprites/noah/noah-start.webp";
import noahPrayer from "@/assets/sprites/noah/noah-prayer.webp";
import noahFamily from "@/assets/sprites/noah/noah-family.webp";
import noahConfront from "@/assets/sprites/noah/noah-confront.webp";
import noahGodspeaks from "@/assets/sprites/noah/noah-godspeaks.webp";
import noahBuilding from "@/assets/sprites/noah/noah-building.webp";
import noahDoubt from "@/assets/sprites/noah/noah-doubt.webp";
import noahComplete from "@/assets/sprites/noah/noah-complete.webp";
import noahAnimals from "@/assets/sprites/noah/noah-animals.webp";
import noahBoarding from "@/assets/sprites/noah/noah-boarding.webp";
import noahFlood from "@/assets/sprites/noah/noah-flood.webp";
import noahWaiting from "@/assets/sprites/noah/noah-waiting.webp";
import noahDove from "@/assets/sprites/noah/noah-dove.webp";
import noahNewearth from "@/assets/sprites/noah/noah-newearth.webp";
import noahAltar from "@/assets/sprites/noah/noah-altar.webp";
import noahRainbow from "@/assets/sprites/noah/noah-rainbow.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const noahSprites: Record<string, SpriteConfig> = {
  start: { left: noahStart },
  prayer: { left: noahPrayer },
  family: { left: noahFamily },
  confront: { left: noahConfront },
  god_speaks: { left: noahGodspeaks },
  the_command: { left: noahGodspeaks },
  building_start: { left: noahBuilding },
  sons_help: { left: noahBuilding },
  doubt: { left: noahDoubt },
  building_progress: { left: noahBuilding },
  ark_complete: { left: noahComplete },
  last_warning: { left: noahConfront },
  gathering_animals: { left: noahAnimals },
  boarding: { left: noahBoarding },
  the_rain: { left: noahFlood },
  the_deep: { left: noahFlood },
  waiting: { left: noahWaiting },
  the_raven: { left: noahWaiting },
  the_dove: { left: noahDove },
  dry_land: { left: noahNewearth },
  the_altar: { left: noahAltar },
  the_rainbow: { left: noahRainbow },
};
