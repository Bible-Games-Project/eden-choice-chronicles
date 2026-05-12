import josephDream from "@/assets/sprites/flight-egypt/joseph-dream.png";
import josephWaking from "@/assets/sprites/flight-egypt/joseph-waking.png";
import familyFleeing from "@/assets/sprites/flight-egypt/family-fleeing.png";
import maryProtecting from "@/assets/sprites/flight-egypt/mary-protecting.png";
import familyTraveling from "@/assets/sprites/flight-egypt/family-traveling.png";
import familySafe from "@/assets/sprites/flight-egypt/family-safe.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const flightEgyptSprites: Record<string, SpriteConfig> = {
  start: { left: josephDream },
  ignore_consequence: { left: josephDream },
  wait_consequence: { left: josephDream },
  wake: { left: josephWaking },
  hide_consequence: { left: josephWaking },
  flee: { left: familyFleeing },
  warn_consequence: { left: familyFleeing },
  main_road_consequence: { left: familyFleeing },
  road: { left: familyTraveling },
  turn_back_consequence: { left: familyTraveling },
  rest: { left: maryProtecting },
  linger_consequence: { left: maryProtecting },
  send_back_consequence: { left: maryProtecting },
  egypt: { left: familyTraveling },
  court_consequence: { left: familyTraveling },
  safe: { left: familySafe },
};
