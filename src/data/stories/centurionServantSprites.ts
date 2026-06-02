import centurionSeeking from "@/assets/sprites/centurion/centurion-seeking.webp";
import centurionHumble from "@/assets/sprites/centurion/centurion-humble.webp";
import jesusListening from "@/assets/sprites/centurion/jesus-listening.webp";
import jesusWalking from "@/assets/sprites/centurion/jesus-walking.webp";
import jesusPraising from "@/assets/sprites/centurion/jesus-praising.webp";
import servantHealed from "@/assets/sprites/centurion/servant-healed.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const centurionServantSprites: Record<string, SpriteConfig> = {
  start: { left: centurionSeeking },
  doctor_consequence: { left: centurionSeeking },
  wait_consequence: { left: centurionSeeking },
  seek: { left: jesusListening },
  command_consequence: { left: jesusListening },
  agree: { left: jesusWalking },
  proud_consequence: { left: jesusWalking },
  faith: { left: centurionHumble },
  hurry_consequence: { left: centurionHumble },
  sign_consequence: { left: centurionHumble },
  praise: { left: jesusPraising },
  boast_consequence: { left: jesusPraising },
  heal: { left: servantHealed },
};
