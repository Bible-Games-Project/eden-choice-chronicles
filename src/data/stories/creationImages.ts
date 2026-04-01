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
  warmth: lightImg,
  day_night: lightImg,
  sky: skyImg,
  waters_gather: skyImg,
  expanse: skyImg,
  land: landImg,
  plants: plantsImg,
  flowers: plantsImg,
  mountain: landImg,
  stars: starsImg,
  countless_stars: starsImg,
  moonrise: starsImg,
  sea_creatures: seaCreaturesImg,
  bird_flight: seaCreaturesImg,
  land_creatures: landCreaturesImg,
  among_animals: landCreaturesImg,
  before_man: breathOfLifeImg,
  breath_of_life: breathOfLifeImg,
  first_garden: restImg,
  very_good: restImg,
  rest: restImg,
};
