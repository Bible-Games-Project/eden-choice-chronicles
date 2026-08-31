import josephDream from "@/assets/sprites/flight-egypt/joseph-dream.webp";
import angelWarning from "@/assets/sprites/flight-egypt/angel-warning.webp";
import josephWaking from "@/assets/sprites/flight-egypt/joseph-waking.webp";
import josephTellingMary from "@/assets/sprites/flight-egypt/joseph-telling-mary.webp";
import familyFleeing from "@/assets/sprites/flight-egypt/family-fleeing.webp";
import familyTraveling from "@/assets/sprites/flight-egypt/family-traveling.webp";
import maryProtecting from "@/assets/sprites/flight-egypt/mary-protecting.webp";
import familySafe from "@/assets/sprites/flight-egypt/family-safe.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Small reusable set matching each story moment.
export const flightEgyptSprites: Record<string, SpriteConfig> = {
  start: { left: angelWarning },
  ignore_consequence: { left: josephDream },
  wait_consequence: { left: angelWarning },
  wake: { left: josephWaking },
  hide_consequence: { left: josephWaking },
  flee: { left: josephTellingMary },
  warn_consequence: { left: familyFleeing },
  main_road_consequence: { left: familyFleeing },
  road: { left: familyTraveling },
  turn_back_consequence: { left: familyTraveling },
  rest: { left: maryProtecting },
  linger_consequence: { left: maryProtecting },
  send_back_consequence: { left: familyTraveling },
  egypt: { left: familyFleeing },
  court_consequence: { left: familySafe },
  safe: { left: familySafe },
};
