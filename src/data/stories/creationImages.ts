import voidImg from "@/assets/scenes/creation/void.jpg";
import lightImg from "@/assets/scenes/creation/light.jpg";
import skyImg from "@/assets/scenes/creation/sky.jpg";
import landImg from "@/assets/scenes/creation/land.jpg";
import starsImg from "@/assets/scenes/creation/stars.jpg";
import seaCreaturesImg from "@/assets/scenes/creation/sea_creatures.jpg";
import landCreaturesImg from "@/assets/scenes/creation/land_creatures.jpg";
import breathOfLifeImg from "@/assets/scenes/creation/breath_of_life.jpg";
import restImg from "@/assets/scenes/creation/rest.jpg";
import plantsImg from "@/assets/scenes/creation/plants.jpg";

// Map scenes to background images - scenes sharing a theme reuse the same bg
export const creationImages: Record<string, string> = {
  start: voidImg,
  silence: voidImg,
  voice: voidImg,
  void: voidImg,
  light: lightImg,
  light_obey: lightImg,
  light_awe: lightImg,
  warmth: lightImg,
  day_night: lightImg,
  sky: skyImg,
  sky_vast: skyImg,
  waters_gather: skyImg,
  expanse: skyImg,
  land: landImg,
  land_emerge: landImg,
  plants: plantsImg,
  flowers: plantsImg,
  mountain: landImg,
  stars: starsImg,
  stars_delight: starsImg,
  stars_vision: starsImg,
  countless_stars: starsImg,
  moonrise: starsImg,
  sea_dawn: seaCreaturesImg,
  sea_creatures: seaCreaturesImg,
  bird_flight: seaCreaturesImg,
  land_creatures: landCreaturesImg,
  land_creatures_wind: landCreaturesImg,
  among_animals: landCreaturesImg,
  before_man: breathOfLifeImg,
  before_man_lonely: breathOfLifeImg,
  breath_of_life: breathOfLifeImg,
  breath_of_life_sacred: breathOfLifeImg,
  first_garden: restImg,
  first_garden_wonder: restImg,
  very_good: restImg,
  rest: restImg,
  rest_blessed: restImg,
};
