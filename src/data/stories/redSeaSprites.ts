import mosesLeading from "@/assets/sprites/red-sea/moses-leading.webp";
import mosesStaffRaised from "@/assets/sprites/red-sea/moses-staff-raised.webp";
import mosesFaithful from "@/assets/sprites/red-sea/moses-faithful.webp";
import pharaohEnraged from "@/assets/sprites/red-sea/pharaoh-enraged.webp";
import israelitesFearful from "@/assets/sprites/red-sea/israelites-fearful.webp";
import israelitesRejoicing from "@/assets/sprites/red-sea/israelites-rejoicing.webp";
import egyptianSoldier from "@/assets/sprites/red-sea/egyptian-soldier.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const redSeaSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: mosesLeading },
  short_road_consequence: { left: mosesLeading },
  beg_consequence: { left: mosesLeading },
  // Act II
  pillar_follows: { left: mosesLeading },
  pharaoh_regrets: { left: pharaohEnraged },
  plead_consequence: { left: pharaohEnraged },
  hide_consequence: { left: pharaohEnraged },
  // Act III
  army_charges: { left: egyptianSoldier },
  run_consequence: { left: egyptianSoldier },
  people_panic: { left: israelitesFearful },
  curse_consequence: { left: israelitesFearful },
  surrender_consequence: { left: israelitesFearful },
  // Act IV
  moses_prays: { left: mosesFaithful },
  boats_consequence: { left: mosesFaithful },
  wait_consequence: { left: mosesFaithful },
  // Act V
  sea_parts: { left: mosesStaffRaised },
  watch_consequence: { left: mosesStaffRaised },
  crossing: { left: mosesLeading },
  boast_consequence: { left: mosesLeading },
  // Act VI
  far_shore: { left: mosesStaffRaised },
  mock_consequence: { left: mosesStaffRaised },
  fight_consequence: { left: mosesStaffRaised },
  sea_closes: { left: mosesStaffRaised },
  ending: { left: israelitesRejoicing },
};
