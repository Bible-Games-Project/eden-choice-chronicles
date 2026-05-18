import centurionSeeking from "@/assets/sprites/centurion/centurion-seeking.png";
import centurionHumble from "@/assets/sprites/centurion/centurion-humble.png";
import jesusListening from "@/assets/sprites/centurion/jesus-listening.png";
import jesusWalking from "@/assets/sprites/centurion/jesus-walking.png";
import jesusPraising from "@/assets/sprites/centurion/jesus-praising.png";
import servantHealed from "@/assets/sprites/centurion/servant-healed.png";

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
