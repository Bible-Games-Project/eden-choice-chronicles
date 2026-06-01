import jesusResting from "@/assets/sprites/samaritan-woman/jesus-resting.png";
import womanArriving from "@/assets/sprites/samaritan-woman/woman-arriving.png";
import jesusAsking from "@/assets/sprites/samaritan-woman/jesus-asking.png";
import womanCurious from "@/assets/sprites/samaritan-woman/woman-curious.png";
import jesusRevealing from "@/assets/sprites/samaritan-woman/jesus-revealing.png";
import womanAmazed from "@/assets/sprites/samaritan-woman/woman-amazed.png";
import jesusMessiah from "@/assets/sprites/samaritan-woman/jesus-messiah.png";
import womanProclaiming from "@/assets/sprites/samaritan-woman/woman-proclaiming.png";
import villagersWelcoming from "@/assets/sprites/samaritan-woman/villagers-welcoming.png";

import { SpriteConfig } from "@/data/creationSprites";

export const samaritanWomanSprites: Record<string, SpriteConfig> = {
  start: { left: jesusResting },
  avoid_consequence: { left: jesusResting },
  drink_request: { left: womanArriving },
  refuse_consequence: { left: womanArriving },
  living_water: { left: jesusAsking },
  mock_consequence: { left: jesusAsking },
  demand_consequence: { left: jesusAsking },
  thirst: { left: womanCurious },
  well_consequence: { left: womanCurious },
  husband: { left: jesusRevealing },
  flee_consequence: { left: jesusRevealing },
  worship: { left: womanAmazed },
  argue_consequence: { left: womanAmazed },
  messiah: { left: jesusMessiah },
  doubt_consequence: { left: jesusMessiah },
  village: { left: womanProclaiming },
  hide_consequence: { left: womanProclaiming },
  ending: { left: villagersWelcoming },
};
