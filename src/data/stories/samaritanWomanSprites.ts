import jesusResting from "@/assets/sprites/samaritan-woman/jesus-resting.webp";
import jesusAsking from "@/assets/sprites/samaritan-woman/jesus-asking.webp";
import jesusLivingWater from "@/assets/sprites/samaritan-woman/jesus-living-water.webp";
import jesusRevealing from "@/assets/sprites/samaritan-woman/jesus-revealing.webp";
import jesusMessiah from "@/assets/sprites/samaritan-woman/jesus-messiah.webp";
import womanArriving from "@/assets/sprites/samaritan-woman/woman-arriving.webp";
import womanSurprised from "@/assets/sprites/samaritan-woman/woman-surprised.webp";
import womanCurious from "@/assets/sprites/samaritan-woman/woman-curious.webp";
import womanRealization from "@/assets/sprites/samaritan-woman/woman-realization.webp";
import womanProclaiming from "@/assets/sprites/samaritan-woman/woman-proclaiming.webp";
import disciplesReturning from "@/assets/sprites/samaritan-woman/disciples-returning.webp";

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
