import mosesSinai from "@/assets/sprites/golden-calf/moses-sinai.webp";
import mosesTablets from "@/assets/sprites/golden-calf/moses-tablets.webp";
import mosesFurious from "@/assets/sprites/golden-calf/moses-furious.webp";
import mosesCalling from "@/assets/sprites/golden-calf/moses-calling.webp";
import aaronGold from "@/assets/sprites/golden-calf/aaron-gold.webp";
import aaronAshamed from "@/assets/sprites/golden-calf/aaron-ashamed.webp";
import israelitesImpatient from "@/assets/sprites/golden-calf/israelites-impatient.webp";
import israelitesWorship from "@/assets/sprites/golden-calf/israelites-worship.webp";
import israelitesRepentant from "@/assets/sprites/golden-calf/israelites-repentant.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set, transparent PNG/WebP.
export const goldenCalfSprites: Record<string, SpriteConfig> = {
  // Act I — on the mountain
  start: { left: mosesSinai },
  haste_consequence: { left: mosesSinai },
  // Act II — impatience below
  people_demand: { left: israelitesImpatient },
  aaron_yields: { left: aaronGold },
  // Act III — God warns Moses
  god_warns: { left: mosesSinai },
  consume_consequence: { left: mosesSinai },
  self_consequence: { left: mosesSinai },
  intercede: { left: mosesSinai },
  // Act IV — the descent
  descent: { left: mosesTablets },
  ignore_consequence: { left: mosesTablets },
  // Act V — seeing the calf
  see_idol: { left: israelitesWorship },
  hide_consequence: { left: israelitesWorship },
  join_consequence: { left: israelitesWorship },
  // Act VI — tablets broken, idol destroyed
  tablets_broken: { left: mosesFurious },
  leave_consequence: { left: mosesFurious },
  // Act VII — Aaron answers, camp repents
  aaron_questioned: { left: aaronAshamed },
  shrug_consequence: { left: aaronAshamed },
  single_consequence: { left: aaronAshamed },
  repentance: { left: israelitesRepentant },
  ending: { left: mosesCalling },
};
