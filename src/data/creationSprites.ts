import godVoid from "@/assets/sprites/god-void.png";
import godLight from "@/assets/sprites/god-light.png";
import godSky from "@/assets/sprites/god-sky.png";
import godLand from "@/assets/sprites/god-land.png";
import godPlants from "@/assets/sprites/god-plants.png";
import godStars from "@/assets/sprites/god-stars.png";
import godSea from "@/assets/sprites/god-sea.png";
import godCreatures from "@/assets/sprites/god-creatures.png";
import godBreath from "@/assets/sprites/god-breath.png";
import godRest from "@/assets/sprites/god-rest.png";

export interface SpriteConfig {
  left: string;
  right?: string;
}

export const creationSprites: Record<string, SpriteConfig> = {
  start: { left: godVoid },
  silence: { left: godVoid },
  voice: { left: godVoid },
  void: { left: godVoid },
  light: { left: godLight },
  light_obey: { left: godLight },
  light_awe: { left: godLight },
  warmth: { left: godLight },
  day_night: { left: godLight },
  sky: { left: godSky },
  sky_vast: { left: godSky },
  waters_gather: { left: godSky },
  expanse: { left: godSky },
  land: { left: godLand },
  land_emerge: { left: godLand },
  mountain: { left: godLand },
  plants: { left: godPlants },
  flowers: { left: godPlants },
  stars: { left: godStars },
  stars_delight: { left: godStars },
  stars_vision: { left: godStars },
  countless_stars: { left: godStars },
  moonrise: { left: godStars },
  sea_dawn: { left: godSea },
  sea_creatures: { left: godSea },
  bird_flight: { left: godSea },
  land_creatures: { left: godCreatures },
  land_creatures_wind: { left: godCreatures },
  among_animals: { left: godCreatures },
  before_man: { left: godBreath },
  before_man_lonely: { left: godBreath },
  breath_of_life: { left: godBreath },
  breath_of_life_sacred: { left: godBreath },
  first_garden: { left: godRest },
  first_garden_wonder: { left: godRest },
  very_good: { left: godRest },
  rest: { left: godRest },
  rest_blessed: { left: godRest },
};
