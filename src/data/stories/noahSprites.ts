import noahStart from "@/assets/sprites/noah/noah-start.png";
import noahPrayer from "@/assets/sprites/noah/noah-prayer.png";
import noahFamily from "@/assets/sprites/noah/noah-family.png";
import noahConfront from "@/assets/sprites/noah/noah-confront.png";
import noahGodspeaks from "@/assets/sprites/noah/noah-godspeaks.png";
import noahBuilding from "@/assets/sprites/noah/noah-building.png";
import noahDoubt from "@/assets/sprites/noah/noah-doubt.png";
import noahComplete from "@/assets/sprites/noah/noah-complete.png";
import noahAnimals from "@/assets/sprites/noah/noah-animals.png";
import noahBoarding from "@/assets/sprites/noah/noah-boarding.png";
import noahFlood from "@/assets/sprites/noah/noah-flood.png";
import noahWaiting from "@/assets/sprites/noah/noah-waiting.png";
import noahDove from "@/assets/sprites/noah/noah-dove.png";
import noahNewearth from "@/assets/sprites/noah/noah-newearth.png";
import noahAltar from "@/assets/sprites/noah/noah-altar.png";
import noahRainbow from "@/assets/sprites/noah/noah-rainbow.png";

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
