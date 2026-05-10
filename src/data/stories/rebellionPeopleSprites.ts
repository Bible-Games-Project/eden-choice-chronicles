import mosesBurdened from "@/assets/sprites/rebellion-people/moses-burdened.png";
import mosesPraying from "@/assets/sprites/rebellion-people/moses-praying.png";
import aaronConcerned from "@/assets/sprites/rebellion-people/aaron-concerned.png";
import joshuaFaithful from "@/assets/sprites/rebellion-people/joshua-faithful.png";
import israelitesComplaining from "@/assets/sprites/rebellion-people/israelites-complaining.png";
import israelitesDespair from "@/assets/sprites/rebellion-people/israelites-despair.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const rebellionPeopleSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: mosesBurdened },
  shout_consequence: { left: mosesBurdened },
  ignore_consequence: { left: mosesBurdened },
  // Act II
  complaints: { left: israelitesComplaining },
  agree_consequence: { left: israelitesComplaining },
  promise_consequence: { left: israelitesComplaining },
  // Act III
  egypt_longing: { left: israelitesComplaining },
  step_aside_consequence: { left: aaronConcerned },
  curse_consequence: { left: mosesBurdened },
  // Act IV
  intercede: { left: mosesPraying },
  self_consequence: { left: mosesPraying },
  demand_consequence: { left: mosesPraying },
  // Act V
  joshua_warns: { left: joshuaFaithful },
  hide_consequence_2: { left: joshuaFaithful },
  // Act VI
  consequences: { left: mosesBurdened },
  hide_verdict_consequence: { left: mosesBurdened },
  blame_consequence: { left: aaronConcerned },
  // Act VII
  people_mourn: { left: israelitesDespair },
  mock_consequence: { left: israelitesDespair },
  ending: { left: mosesBurdened },
};
