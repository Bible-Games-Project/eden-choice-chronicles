import jacobThoughtful from "@/assets/sprites/jacob-esau/jacob-thoughtful.webp";
import jacobShrewd from "@/assets/sprites/jacob-esau/jacob-shrewd.webp";
import jacobUncertain from "@/assets/sprites/jacob-esau/jacob-uncertain.webp";
import jacobDisguised from "@/assets/sprites/jacob-esau/jacob-disguised.webp";
import jacobFleeing from "@/assets/sprites/jacob-esau/jacob-fleeing.webp";
import jacobDeparting from "@/assets/sprites/jacob-esau/jacob-departing.webp";
import esauFaint from "@/assets/sprites/jacob-esau/esau-faint.webp";
import esauWrath from "@/assets/sprites/jacob-esau/esau-wrath.webp";
import isaacOld from "@/assets/sprites/jacob-esau/isaac-old.webp";
import isaacReaching from "@/assets/sprites/jacob-esau/isaac-reaching.webp";
import rebekahCalm from "@/assets/sprites/jacob-esau/rebekah-calm.webp";
import rebekahUrgent from "@/assets/sprites/jacob-esau/rebekah-urgent.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const jacobEsauSprites: Record<string, SpriteConfig> = {
  start: { left: jacobThoughtful },
  hunt_consequence: { left: jacobUncertain },
  the_stew: { left: jacobShrewd, right: esauFaint },
  free_consequence: { left: jacobThoughtful },
  send_consequence: { left: jacobShrewd },
  the_oath: { left: jacobShrewd, right: esauFaint },
  trust_consequence: { left: jacobUncertain, right: rebekahCalm },
  stew_eaten: { left: jacobThoughtful },
  isaac_old: { left: jacobThoughtful, right: isaacOld },
  confront_consequence: { left: jacobUncertain, right: rebekahUrgent },
  walkaway_consequence: { left: jacobUncertain, right: rebekahCalm },
  rebekah_plan: { left: jacobUncertain, right: rebekahUrgent },
  refuse_blessing: { left: jacobUncertain, right: rebekahUrgent },
  the_disguise: { left: jacobDisguised, right: rebekahCalm },
  father_tent: { left: jacobDisguised, right: isaacOld },
  confess_consequence: { left: jacobUncertain, right: rebekahUrgent },
  silent_consequence: { left: jacobDisguised, right: isaacOld },
  the_test: { left: jacobDisguised, right: isaacReaching },
  flee_consequence: { left: jacobFleeing, right: rebekahUrgent },
  the_blessing: { left: jacobDisguised, right: isaacReaching },
  esau_returns: { left: jacobFleeing },
  esau_wrath: { left: esauWrath },
  confront_esau_consequence: { left: jacobFleeing, right: rebekahUrgent },
  rebekah_warning: { left: jacobFleeing, right: rebekahUrgent },
  refuse_flee_consequence: { left: jacobUncertain, right: rebekahUrgent },
  isaac_sends: { left: jacobDeparting, right: isaacOld },
  the_road: { left: jacobDeparting },
};
