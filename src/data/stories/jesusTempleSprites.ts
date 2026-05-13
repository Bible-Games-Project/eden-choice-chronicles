import familyTraveling from "@/assets/sprites/jesus-temple/family-traveling.png";
import jesusListening from "@/assets/sprites/jesus-temple/jesus-listening.png";
import maryJosephAnxious from "@/assets/sprites/jesus-temple/mary-joseph-anxious.png";
import jesusTeaching from "@/assets/sprites/jesus-temple/jesus-teaching.png";
import jesusMaryReunion from "@/assets/sprites/jesus-temple/jesus-mary-reunion.png";
import familyReturning from "@/assets/sprites/jesus-temple/family-returning.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const jesusTempleSprites: Record<string, SpriteConfig> = {
  start: { left: familyTraveling },
  stray_consequence: { left: familyTraveling },
  refuse_consequence: { left: familyTraveling },
  temple: { left: jesusListening },
  market_consequence: { left: jesusListening },
  stay: { left: jesusListening },
  follow_consequence: { left: jesusListening },
  hide_consequence: { left: jesusListening },
  search: { left: maryJosephAnxious },
  flee_consequence: { left: maryJosephAnxious },
  teachers: { left: jesusTeaching },
  silent_consequence: { left: jesusTeaching },
  boast_consequence: { left: jesusTeaching },
  reunion: { left: jesusMaryReunion },
  blame_consequence: { left: jesusMaryReunion },
  shame_consequence: { left: jesusMaryReunion },
  return: { left: familyReturning },
};
