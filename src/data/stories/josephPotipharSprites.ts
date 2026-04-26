import josephArrival from "@/assets/sprites/joseph-potiphar/joseph-arrival.png";
import josephSteward from "@/assets/sprites/joseph-potiphar/joseph-steward.png";
import josephPraying from "@/assets/sprites/joseph-potiphar/joseph-praying.png";
import josephRefusing from "@/assets/sprites/joseph-potiphar/joseph-refusing.png";
import josephFleeing from "@/assets/sprites/joseph-potiphar/joseph-fleeing.png";
import josephAccused from "@/assets/sprites/joseph-potiphar/joseph-accused.png";
import josephBound from "@/assets/sprites/joseph-potiphar/joseph-bound.png";
import potipharWelcoming from "@/assets/sprites/joseph-potiphar/potiphar-welcoming.png";
import potipharTrusting from "@/assets/sprites/joseph-potiphar/potiphar-trusting.png";
import potipharWrath from "@/assets/sprites/joseph-potiphar/potiphar-wrath.png";
import wifeTempting from "@/assets/sprites/joseph-potiphar/wife-tempting.png";
import wifeGrasping from "@/assets/sprites/joseph-potiphar/wife-grasping.png";
import wifeAccusing from "@/assets/sprites/joseph-potiphar/wife-accusing.png";

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
