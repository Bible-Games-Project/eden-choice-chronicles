import jacobThoughtful from "@/assets/sprites/jacob-esau/jacob-thoughtful.png";
import jacobShrewd from "@/assets/sprites/jacob-esau/jacob-shrewd.png";
import jacobUncertain from "@/assets/sprites/jacob-esau/jacob-uncertain.png";
import jacobDisguised from "@/assets/sprites/jacob-esau/jacob-disguised.png";
import jacobFleeing from "@/assets/sprites/jacob-esau/jacob-fleeing.png";
import jacobDeparting from "@/assets/sprites/jacob-esau/jacob-departing.png";
import esauFaint from "@/assets/sprites/jacob-esau/esau-faint.png";
import esauWrath from "@/assets/sprites/jacob-esau/esau-wrath.png";
import isaacOld from "@/assets/sprites/jacob-esau/isaac-old.png";
import isaacReaching from "@/assets/sprites/jacob-esau/isaac-reaching.png";
import rebekahCalm from "@/assets/sprites/jacob-esau/rebekah-calm.png";
import rebekahUrgent from "@/assets/sprites/jacob-esau/rebekah-urgent.png";

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
  esau_wrath: { right: esauWrath },
  confront_esau_consequence: { left: jacobFleeing, right: rebekahUrgent },
  rebekah_warning: { left: jacobFleeing, right: rebekahUrgent },
  refuse_flee_consequence: { left: jacobUncertain, right: rebekahUrgent },
  isaac_sends: { left: jacobDeparting, right: isaacOld },
  the_road: { left: jacobDeparting },
};
