import mosesCalm from "@/assets/sprites/golden-calf/moses-calm.webp";
import mosesFurious from "@/assets/sprites/golden-calf/moses-furious.webp";
import aaronHesitant from "@/assets/sprites/golden-calf/aaron-hesitant.webp";
import aaronAshamed from "@/assets/sprites/golden-calf/aaron-ashamed.webp";
import israelitesImpatient from "@/assets/sprites/golden-calf/israelites-impatient.webp";
import israelitesWorship from "@/assets/sprites/golden-calf/israelites-worship.webp";
import israelitesRepentant from "@/assets/sprites/golden-calf/israelites-repentant.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const goldenCalfSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: mosesCalm },
  haste_consequence: { left: mosesCalm },
  // Act II
  people_demand: { left: israelitesImpatient },
  aaron_yields: { left: aaronHesitant },
  // Act III
  god_warns: { left: mosesCalm },
  consume_consequence: { left: mosesCalm },
  self_consequence: { left: mosesCalm },
  intercede: { left: mosesCalm },
  // Act IV
  descent: { left: mosesCalm },
  ignore_consequence: { left: mosesCalm },
  // Act V
  see_idol: { left: israelitesWorship },
  hide_consequence: { left: israelitesWorship },
  join_consequence: { left: israelitesWorship },
  // Act VI
  tablets_broken: { left: mosesFurious },
  leave_consequence: { left: mosesFurious },
  // Act VII
  aaron_questioned: { left: aaronAshamed },
  shrug_consequence: { left: aaronAshamed },
  single_consequence: { left: aaronAshamed },
  repentance: { left: israelitesRepentant },
  ending: { left: israelitesRepentant },
};
