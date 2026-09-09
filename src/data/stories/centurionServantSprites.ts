import centurionSeeking from "@/assets/sprites/centurion/centurion-seeking.png";
import centurionFaith from "@/assets/sprites/centurion/centurion-faith.png";
import jesusCenturionSpeaking from "@/assets/sprites/centurion/jesus-centurion-speaking.png";
import jesusHealingWord from "@/assets/sprites/centurion/jesus-healing-word.png";
import jesusAdmiringFaith from "@/assets/sprites/centurion/jesus-admiring-faith.png";
import servantIll from "@/assets/sprites/centurion/servant-ill.png";
import servantHealed from "@/assets/sprites/centurion/servant-healed.png";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable transparent portraits: exactly 3 waist-up, remaining sprites knee-up.
export const centurionServantSprites: Record<string, SpriteConfig> = {
  start: { left: servantIll },
  doctor_consequence: { left: servantIll },
  wait_consequence: { left: servantIll },
  seek: { left: centurionSeeking },
  command_consequence: { left: centurionSeeking },
  agree: { left: jesusCenturionSpeaking },
  proud_consequence: { left: jesusCenturionSpeaking },
  faith: { left: centurionFaith },
  hurry_consequence: { left: centurionFaith },
  sign_consequence: { left: centurionFaith },
  praise: { left: jesusHealingWord },
  boast_consequence: { left: jesusAdmiringFaith },
  heal: { left: servantHealed },
};
