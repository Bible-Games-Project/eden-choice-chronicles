import jesusResting from "@/assets/sprites/samaritan-woman/jesus-resting.webp";
import womanArriving from "@/assets/sprites/samaritan-woman/woman-arriving.webp";
import jesusAsking from "@/assets/sprites/samaritan-woman/jesus-asking.webp";
import womanCurious from "@/assets/sprites/samaritan-woman/woman-curious.webp";
import jesusRevealing from "@/assets/sprites/samaritan-woman/jesus-revealing.webp";
import womanAmazed from "@/assets/sprites/samaritan-woman/woman-amazed.webp";
import jesusMessiah from "@/assets/sprites/samaritan-woman/jesus-messiah.webp";
import womanProclaiming from "@/assets/sprites/samaritan-woman/woman-proclaiming.webp";
import villagersWelcoming from "@/assets/sprites/samaritan-woman/villagers-welcoming.webp";

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
