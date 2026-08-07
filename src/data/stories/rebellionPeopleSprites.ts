import mosesBurdened from "@/assets/sprites/rebellion-people/moses-burdened.webp";
import mosesPraying from "@/assets/sprites/rebellion-people/moses-praying.webp";
import mosesListening from "@/assets/sprites/rebellion-people/moses-listening.webp";
import aaronConcerned from "@/assets/sprites/rebellion-people/aaron-concerned.webp";
import joshuaFaithful from "@/assets/sprites/rebellion-people/joshua-faithful.webp";
import israelitesComplaining from "@/assets/sprites/rebellion-people/israelites-complaining.webp";
import israelitesEgyptLonging from "@/assets/sprites/rebellion-people/israelites-egypt-longing.webp";
import israelitesDespair from "@/assets/sprites/rebellion-people/israelites-despair.webp";
import israelitesDefeated from "@/assets/sprites/rebellion-people/israelites-defeated.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set, transparent PNG/WebP.
export const rebellionPeopleSprites: Record<string, SpriteConfig> = {
  // Act I — murmurs in the camp
  start: { left: israelitesComplaining },
  shout_consequence: { left: mosesBurdened },
  ignore_consequence: { left: mosesBurdened },
  // Act II — the complaint
  complaints: { left: israelitesComplaining },
  agree_consequence: { left: israelitesComplaining },
  promise_consequence: { left: aaronConcerned },
  // Act III — longing for Egypt
  egypt_longing: { left: israelitesEgyptLonging },
  step_aside_consequence: { left: israelitesEgyptLonging },
  curse_consequence: { left: mosesBurdened },
  // Act IV — intercession
  intercede: { left: mosesPraying },
  self_consequence: { left: mosesPraying },
  demand_consequence: { left: mosesPraying },
  // Act V — the warning
  joshua_warns: { left: joshuaFaithful },
  hide_consequence_2: { left: joshuaFaithful },
  // Act VI — the consequence announced
  consequences: { left: mosesListening },
  hide_verdict_consequence: { left: mosesListening },
  blame_consequence: { left: aaronConcerned },
  // Act VII — mourning & the defeat
  people_mourn: { left: israelitesDespair },
  mock_consequence: { left: israelitesDefeated },
  ending: { left: mosesBurdened },
};
