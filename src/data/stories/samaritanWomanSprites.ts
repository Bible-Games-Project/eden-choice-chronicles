import jesusResting from "@/assets/sprites/samaritan-woman/jesus-resting.png";
import jesusAsking from "@/assets/sprites/samaritan-woman/jesus-asking.png";
import jesusLivingWater from "@/assets/sprites/samaritan-woman/jesus-living-water.png";
import jesusRevealing from "@/assets/sprites/samaritan-woman/jesus-revealing.png";
import jesusMessiah from "@/assets/sprites/samaritan-woman/jesus-messiah.png";
import womanArriving from "@/assets/sprites/samaritan-woman/woman-arriving.png";
import womanSurprised from "@/assets/sprites/samaritan-woman/woman-surprised.png";
import womanCurious from "@/assets/sprites/samaritan-woman/woman-curious.png";
import womanRealization from "@/assets/sprites/samaritan-woman/woman-realization.png";
import womanProclaiming from "@/assets/sprites/samaritan-woman/woman-proclaiming.png";
import disciplesReturning from "@/assets/sprites/samaritan-woman/disciples-returning.png";

import { SpriteConfig } from "@/data/creationSprites";

export const samaritanWomanSprites: Record<string, SpriteConfig> = {
  start: { left: jesusResting },
  avoid_consequence: { left: womanArriving },
  drink_request: { left: jesusAsking },
  refuse_consequence: { left: womanSurprised },
  living_water: { left: jesusLivingWater },
  mock_consequence: { left: jesusLivingWater },
  demand_consequence: { left: womanSurprised },
  thirst: { left: womanCurious },
  well_consequence: { left: womanCurious },
  husband: { left: jesusRevealing },
  flee_consequence: { left: jesusRevealing },
  worship: { left: jesusLivingWater },
  argue_consequence: { left: womanCurious },
  messiah: { left: jesusMessiah },
  doubt_consequence: { left: womanRealization },
  village: { left: womanProclaiming },
  hide_consequence: { left: womanRealization },
  ending: { left: disciplesReturning },
};
