import centurionSeeking from "@/assets/sprites/centurion/centurion-seeking.webp";
import centurionFaith from "@/assets/sprites/centurion/centurion-faith.webp";
import jesusCenturionSpeaking from "@/assets/sprites/centurion/jesus-centurion-speaking.webp";
import jesusHealingWord from "@/assets/sprites/centurion/jesus-healing-word.webp";
import jesusAdmiringFaith from "@/assets/sprites/centurion/jesus-admiring-faith.webp";
import servantIll from "@/assets/sprites/centurion/servant-ill.webp";
import servantHealed from "@/assets/sprites/centurion/servant-healed.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Reusable transparent portraits: exactly 3 waist-up, remaining sprites knee-up.
export const centurionServantSprites: Record<string, SpriteConfig> = {
  start: { left: servantIll },
  doctor_consequence: { left: servantIll },
  wait_consequence: { left: servantIll },
  seek: { left: centurionSeeking },
  command_consequence: { left: centurionSeeking },
  agree: { left: jesusHealingWord },
  proud_consequence: { left: jesusCenturionSpeaking },
  faith: { left: centurionFaith },
  hurry_consequence: { left: centurionFaith },
  sign_consequence: { left: centurionFaith },
  praise: { left: jesusAdmiringFaith },
  boast_consequence: { left: centurionFaith },
  heal: { left: servantHealed },
};
