import nightFields from "@/assets/scenes/shepherds/night-fields.jpg";
import angelLightSky from "@/assets/scenes/shepherds/angel-light-sky.jpg";
import roadToBethlehem from "@/assets/scenes/shepherds/road-to-bethlehem.jpg";
import stableManger from "@/assets/scenes/shepherds/stable-manger.jpg";
import dawnFields from "@/assets/scenes/shepherds/dawn-fields.jpg";

export const shepherdsImages: Record<string, string> = {
  start: nightFields,
  sleep_consequence: nightFields,
  wander_consequence: nightFields,
  light: angelLightSky,
  run_consequence: angelLightSky,
  attack_consequence: angelLightSky,
  message: angelLightSky,
  doubt_consequence: angelLightSky,
  travel: roadToBethlehem,
  wait_consequence: roadToBethlehem,
  gifts_consequence: roadToBethlehem,
  worship: stableManger,
  silence_consequence: stableManger,
  return: dawnFields,
};
