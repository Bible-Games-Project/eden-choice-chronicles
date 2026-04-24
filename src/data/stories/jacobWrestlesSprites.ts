import jacobAnxious from "@/assets/sprites/jacob-wrestles/jacob-anxious.png";
import jacobWorried from "@/assets/sprites/jacob-wrestles/jacob-worried.png";
import jacobPraying from "@/assets/sprites/jacob-wrestles/jacob-praying.png";
import jacobDetermined from "@/assets/sprites/jacob-wrestles/jacob-determined.png";
import jacobWrestling from "@/assets/sprites/jacob-wrestles/jacob-wrestling.png";
import jacobWeary from "@/assets/sprites/jacob-wrestles/jacob-weary.png";
import jacobClinging from "@/assets/sprites/jacob-wrestles/jacob-clinging.png";
import jacobBlessed from "@/assets/sprites/jacob-wrestles/jacob-blessed.png";
import jacobIsrael from "@/assets/sprites/jacob-wrestles/jacob-israel.png";
import angelStill from "@/assets/sprites/jacob-wrestles/angel-still.png";
import angelWrestling from "@/assets/sprites/jacob-wrestles/angel-wrestling.png";
import angelBlessing from "@/assets/sprites/jacob-wrestles/angel-blessing.png";

import { SpriteConfig } from "@/data/creationSprites";

// Each scene uses a unique pose/expression — no sprite reused across scenes.
export const jacobWrestlesSprites: Record<string, SpriteConfig> = {
  start: { left: jacobAnxious },
  attack_consequence: { left: jacobDetermined },
  flee_consequence: { left: jacobWorried },
  send_gifts: { left: jacobDetermined },
  boast_consequence: { left: jacobAnxious },
  pray: { left: jacobPraying },
  stay_consequence: { left: jacobWorried },
  send_family: { left: jacobAnxious },
  cross_consequence: { left: jacobWorried },
  alone: { left: jacobDetermined, right: angelStill },
  run_consequence: { left: jacobAnxious },
  beg_consequence: { left: jacobWorried },
  the_struggle: { left: jacobWrestling, right: angelWrestling },
  give_up_consequence: { left: jacobWeary },
  the_touch: { left: jacobWeary, right: angelWrestling },
  curse_consequence: { left: jacobWeary },
  demand_blessing: { left: jacobClinging, right: angelStill },
  hide_name_consequence: { left: jacobWorried },
  boast_name_consequence: { left: jacobAnxious },
  new_name: { left: jacobBlessed, right: angelStill },
  refuse_consequence: { left: jacobWorried },
  name_him: { left: jacobBlessed, right: angelStill },
  demand_name_consequence: { left: jacobAnxious },
  blessing: { left: jacobBlessed, right: angelBlessing },
  secret_consequence: { left: jacobWorried },
  peniel: { left: jacobIsrael },
  to_esau: { left: jacobIsrael },
};
