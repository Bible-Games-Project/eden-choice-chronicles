import josephArrival from "@/assets/sprites/joseph-potiphar/joseph-arrival.webp";
import josephSteward from "@/assets/sprites/joseph-potiphar/joseph-steward.webp";
import josephPraying from "@/assets/sprites/joseph-potiphar/joseph-praying.webp";
import josephRefusing from "@/assets/sprites/joseph-potiphar/joseph-refusing.webp";
import josephFleeing from "@/assets/sprites/joseph-potiphar/joseph-fleeing.webp";
import josephAccused from "@/assets/sprites/joseph-potiphar/joseph-accused.webp";
import josephBound from "@/assets/sprites/joseph-potiphar/joseph-bound.webp";
import potipharWelcoming from "@/assets/sprites/joseph-potiphar/potiphar-welcoming.webp";
import potipharTrusting from "@/assets/sprites/joseph-potiphar/potiphar-trusting.webp";
import potipharWrath from "@/assets/sprites/joseph-potiphar/potiphar-wrath.webp";
import wifeTempting from "@/assets/sprites/joseph-potiphar/wife-tempting.webp";
import wifeGrasping from "@/assets/sprites/joseph-potiphar/wife-grasping.webp";
import wifeAccusing from "@/assets/sprites/joseph-potiphar/wife-accusing.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Each scene uses a unique pose/expression — no duplicate combos across scenes.
export const josephPotipharSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: josephArrival, right: potipharWelcoming },
  run_consequence: { left: josephFleeing },
  demand_consequence: { left: josephRefusing, right: potipharWelcoming },
  serve_well: { left: josephSteward },
  steal_consequence: { left: josephAccused },
  boast_consequence: { left: josephSteward, right: potipharTrusting },
  // Act II
  trusted: { left: josephSteward, right: potipharTrusting },
  wealth_consequence: { left: josephAccused },
  diligent: { left: josephSteward },
  credit_consequence: { left: josephRefusing },
  // Act III
  noticed: { left: josephSteward, right: wifeTempting },
  smile_consequence: { left: josephAccused, right: wifeTempting },
  first_advance: { left: josephRefusing, right: wifeTempting },
  weigh_consequence: { left: josephAccused, right: wifeGrasping },
  yield_consequence: { left: josephFleeing, right: wifeTempting },
  she_persists: { left: josephRefusing, right: wifeTempting },
  confront_consequence: { left: josephRefusing, right: wifeAccusing },
  tell_consequence: { left: josephAccused, right: potipharTrusting },
  // Act IV
  the_empty_house: { left: josephSteward },
  linger_consequence: { left: josephAccused },
  she_grabs: { left: josephRefusing, right: wifeGrasping },
  wrestle_consequence: { left: josephFleeing, right: wifeGrasping },
  yield2_consequence: { left: josephPraying, right: wifeGrasping },
  // Act V
  fled: { left: josephFleeing },
  hide2_consequence: { left: josephAccused },
  her_cry: { left: josephAccused, right: wifeAccusing },
  shout_consequence: { left: josephRefusing, right: wifeAccusing },
  flee_consequence: { left: josephFleeing },
  // Act VI
  before_potiphar: { left: josephAccused, right: potipharWrath },
  beg_consequence: { left: josephRefusing, right: potipharWrath },
  curse_consequence: { left: josephRefusing, right: potipharWrath },
  to_prison: { left: josephBound },
  ending: { left: josephPraying },
};
