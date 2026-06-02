import josephCalm from "@/assets/sprites/joseph-reconciles/joseph-vizier-calm.webp";
import josephMoved from "@/assets/sprites/joseph-reconciles/joseph-moved.webp";
import josephWeepingHidden from "@/assets/sprites/joseph-reconciles/joseph-weeping-hidden.webp";
import josephStern from "@/assets/sprites/joseph-reconciles/joseph-stern.webp";
import josephRevealing from "@/assets/sprites/joseph-reconciles/joseph-revealing.webp";
import josephEmbracing from "@/assets/sprites/joseph-reconciles/joseph-embracing.webp";
import josephForgiving from "@/assets/sprites/joseph-reconciles/joseph-forgiving.webp";
import brothersBowing from "@/assets/sprites/joseph-reconciles/brothers-bowing.webp";
import brothersShocked from "@/assets/sprites/joseph-reconciles/brothers-shocked.webp";
import brothersWeeping from "@/assets/sprites/joseph-reconciles/brothers-weeping.webp";
import brothersRejoicing from "@/assets/sprites/joseph-reconciles/brothers-rejoicing.webp";
import judahPleading from "@/assets/sprites/joseph-reconciles/judah-pleading.webp";
import benjaminYoung from "@/assets/sprites/joseph-reconciles/benjamin-young.webp";
import jacobOverjoyed from "@/assets/sprites/joseph-reconciles/jacob-overjoyed.webp";
import steward from "@/assets/sprites/joseph-reconciles/steward.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Each scene gets a unique sprite combo. No combo is reused across scenes.
export const josephReconcilesSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: josephCalm, right: brothersBowing },
  strike_consequence: { left: josephStern },
  hide_consequence: { left: josephCalm },
  greet: { left: josephCalm, right: steward },
  demand_silver_consequence: { left: josephStern, right: brothersBowing },
  summon_meal: { left: steward, right: brothersShocked },
  fear_consequence: { left: steward, right: brothersBowing },
  weep1: { left: josephMoved, right: benjaminYoung },
  embrace_too_soon_consequence: { left: josephMoved },
  recover: { left: josephCalm, right: steward },
  aloof_consequence: { left: josephStern },
  dine: { left: josephCalm, right: benjaminYoung },
  send_home_consequence: { left: josephMoved, right: brothersBowing },
  // Act II
  cup_plan: { left: josephStern, right: steward },
  cancel_consequence: { left: josephCalm },
  wrong_sack_consequence: { left: josephStern, right: steward },
  send_off2: { left: brothersBowing, right: benjaminYoung },
  let_go_consequence: { left: josephCalm },
  overtake: { left: steward, right: brothersShocked },
  accuse_one_consequence: { left: steward },
  search_sacks: { left: steward, right: brothersBowing },
  stop_consequence: { left: brothersShocked },
  found_in_benjamin: { left: benjaminYoung, right: brothersShocked },
  take_one_consequence: { left: steward, right: benjaminYoung },
  // Act III
  return_to_palace: { left: josephStern, right: brothersWeeping },
  no_test_consequence: { left: josephCalm },
  fall_down: { left: josephStern, right: brothersWeeping },
  all_prison_consequence: { left: josephStern },
  death_consequence: { left: josephStern, right: benjaminYoung },
  judah_steps: { left: josephStern, right: judahPleading },
  silence_consequence: { left: judahPleading },
  // Act IV
  plea: { left: judahPleading, right: benjaminYoung },
  mock_consequence: { left: josephStern, right: judahPleading },
  accept_consequence: { left: josephMoved, right: judahPleading },
  send_attendants_out: { left: josephMoved, right: steward },
  frighten_consequence: { left: josephStern, right: brothersShocked },
  reveal: { left: josephRevealing, right: brothersShocked },
  roar_consequence: { left: josephStern },
  brothers_silent: { left: josephRevealing, right: brothersShocked },
  demand_confess_consequence: { left: josephStern, right: brothersWeeping },
  // Act V
  comfort: { left: josephRevealing, right: brothersWeeping },
  condemn_consequence: { left: josephStern, right: brothersWeeping },
  it_was_god: { left: josephForgiving, right: brothersWeeping },
  shame_consequence: { left: josephStern },
  kiss_benjamin: { left: josephEmbracing, right: benjaminYoung },
  hide_jacob_consequence: { left: josephMoved },
  send_for_jacob: { left: josephForgiving, right: brothersRejoicing },
  guards_consequence: { left: josephStern, right: brothersRejoicing },
  jacob_hears: { left: jacobOverjoyed, right: brothersRejoicing },
  abandon_consequence: { left: jacobOverjoyed },
  journey_egypt: { left: jacobOverjoyed, right: brothersBowing },
  servants_consequence: { left: steward, right: jacobOverjoyed },
  ending: { left: josephEmbracing, right: jacobOverjoyed },
};
