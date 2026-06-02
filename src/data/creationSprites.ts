import godStart from "@/assets/sprites/god-start.webp";
import godSilence from "@/assets/sprites/god-silence.webp";
import godVoice from "@/assets/sprites/god-voice.webp";
import godVoid from "@/assets/sprites/god-void2.webp";
import godLight from "@/assets/sprites/god-light2.webp";
import godLightObey from "@/assets/sprites/god-light-obey.webp";
import godLightAwe from "@/assets/sprites/god-light-awe.webp";
import godWarmth from "@/assets/sprites/god-warmth.webp";
import godDayNight from "@/assets/sprites/god-day-night.webp";
import godSky from "@/assets/sprites/god-sky2.webp";
import godSkyVast from "@/assets/sprites/god-sky-vast.webp";
import godWatersGather from "@/assets/sprites/god-waters-gather.webp";
import godExpanse from "@/assets/sprites/god-expanse.webp";
import godLand from "@/assets/sprites/god-land2.webp";
import godLandEmerge from "@/assets/sprites/god-land-emerge.webp";
import godMountain from "@/assets/sprites/god-mountain.webp";
import godPlants from "@/assets/sprites/god-plants2.webp";
import godFlowers from "@/assets/sprites/god-flowers2.webp";
import godStars from "@/assets/sprites/god-stars2.webp";
import godStarsDelight from "@/assets/sprites/god-stars-delight.webp";
import godStarsVision from "@/assets/sprites/god-stars-vision.webp";
import godCountlessStars from "@/assets/sprites/god-countless-stars.webp";
import godMoonrise from "@/assets/sprites/god-moonrise.webp";
import godSeaDawn from "@/assets/sprites/god-sea-dawn.webp";
import godSeaCreatures from "@/assets/sprites/god-sea-creatures.webp";
import godBirdFlight from "@/assets/sprites/god-bird-flight.webp";
import godLandCreatures from "@/assets/sprites/god-land-creatures.webp";
import godCreaturesWind from "@/assets/sprites/god-creatures-wind.webp";
import godAmongAnimals from "@/assets/sprites/god-among-animals.webp";
import godBeforeMan from "@/assets/sprites/god-before-man.webp";
import godBeforeManLonely from "@/assets/sprites/god-before-man-lonely.webp";
import godBreath from "@/assets/sprites/god-breath2.webp";
import godBreathSacred from "@/assets/sprites/god-breath-sacred.webp";
import godFirstGarden from "@/assets/sprites/god-first-garden.webp";
import godGardenWonder from "@/assets/sprites/god-garden-wonder.webp";
import godVeryGood from "@/assets/sprites/god-very-good.webp";
import godRest from "@/assets/sprites/god-rest2.webp";
import godRestBlessed from "@/assets/sprites/god-rest-blessed.webp";

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
