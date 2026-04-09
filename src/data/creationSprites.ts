import godStart from "@/assets/sprites/god-start.png";
import godSilence from "@/assets/sprites/god-silence.png";
import godVoice from "@/assets/sprites/god-voice.png";
import godVoid from "@/assets/sprites/god-void2.png";
import godLight from "@/assets/sprites/god-light2.png";
import godLightObey from "@/assets/sprites/god-light-obey.png";
import godLightAwe from "@/assets/sprites/god-light-awe.png";
import godWarmth from "@/assets/sprites/god-warmth.png";
import godDayNight from "@/assets/sprites/god-day-night.png";
import godSky from "@/assets/sprites/god-sky2.png";
import godSkyVast from "@/assets/sprites/god-sky-vast.png";
import godWatersGather from "@/assets/sprites/god-waters-gather.png";
import godExpanse from "@/assets/sprites/god-expanse.png";
import godLand from "@/assets/sprites/god-land2.png";
import godLandEmerge from "@/assets/sprites/god-land-emerge.png";
import godMountain from "@/assets/sprites/god-mountain.png";
import godPlants from "@/assets/sprites/god-plants2.png";
import godFlowers from "@/assets/sprites/god-flowers2.png";
import godStars from "@/assets/sprites/god-stars2.png";
import godStarsDelight from "@/assets/sprites/god-stars-delight.png";
import godStarsVision from "@/assets/sprites/god-stars-vision.png";
import godCountlessStars from "@/assets/sprites/god-countless-stars.png";
import godMoonrise from "@/assets/sprites/god-moonrise.png";
import godSeaDawn from "@/assets/sprites/god-sea-dawn.png";
import godSeaCreatures from "@/assets/sprites/god-sea-creatures.png";
import godBirdFlight from "@/assets/sprites/god-bird-flight.png";
import godLandCreatures from "@/assets/sprites/god-land-creatures.png";
import godCreaturesWind from "@/assets/sprites/god-creatures-wind.png";
import godAmongAnimals from "@/assets/sprites/god-among-animals.png";
import godBeforeMan from "@/assets/sprites/god-before-man.png";
import godBeforeManLonely from "@/assets/sprites/god-before-man-lonely.png";
import godBreath from "@/assets/sprites/god-breath2.png";
import godBreathSacred from "@/assets/sprites/god-breath-sacred.png";
import godFirstGarden from "@/assets/sprites/god-first-garden.png";
import godGardenWonder from "@/assets/sprites/god-garden-wonder.png";
import godVeryGood from "@/assets/sprites/god-very-good.png";
import godRest from "@/assets/sprites/god-rest2.png";
import godRestBlessed from "@/assets/sprites/god-rest-blessed.png";

export interface SpriteConfig {
  left: string;
  right?: string;
}

export const creationSprites: Record<string, SpriteConfig> = {
  start: { left: godStart },
  silence: { left: godSilence },
  voice: { left: godVoice },
  void: { left: godVoid },
  light: { left: godLight },
  light_obey: { left: godLightObey },
  light_awe: { left: godLightAwe },
  warmth: { left: godWarmth },
  day_night: { left: godDayNight },
  sky: { left: godSky },
  sky_vast: { left: godSkyVast },
  waters_gather: { left: godWatersGather },
  expanse: { left: godExpanse },
  land: { left: godLand },
  land_emerge: { left: godLandEmerge },
  mountain: { left: godMountain },
  plants: { left: godPlants },
  flowers: { left: godFlowers },
  stars: { left: godStars },
  stars_delight: { left: godStarsDelight },
  stars_vision: { left: godStarsVision },
  countless_stars: { left: godCountlessStars },
  moonrise: { left: godMoonrise },
  sea_dawn: { left: godSeaDawn },
  sea_creatures: { left: godSeaCreatures },
  bird_flight: { left: godBirdFlight },
  land_creatures: { left: godLandCreatures },
  land_creatures_wind: { left: godCreaturesWind },
  among_animals: { left: godAmongAnimals },
  before_man: { left: godBeforeMan },
  before_man_lonely: { left: godBeforeManLonely },
  breath_of_life: { left: godBreath },
  breath_of_life_sacred: { left: godBreathSacred },
  first_garden: { left: godFirstGarden },
  first_garden_wonder: { left: godGardenWonder },
  very_good: { left: godVeryGood },
  rest: { left: godRest },
  rest_blessed: { left: godRestBlessed },
};
