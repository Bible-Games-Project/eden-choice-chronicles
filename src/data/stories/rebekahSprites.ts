import rebekahCalm from "@/assets/sprites/rebekah/rebekah-calm.png";
import rebekahJar from "@/assets/sprites/rebekah/rebekah-jar.png";
import rebekahResolved from "@/assets/sprites/rebekah/rebekah-resolved.png";
import rebekahVeiled from "@/assets/sprites/rebekah/rebekah-veiled.png";
import servantCalm from "@/assets/sprites/rebekah/servant-calm.png";
import servantPraying from "@/assets/sprites/rebekah/servant-praying.png";
import servantGrateful from "@/assets/sprites/rebekah/servant-grateful.png";
import isaacMeeting from "@/assets/sprites/rebekah/isaac-meeting.png";

import { SpriteConfig } from "@/data/creationSprites";

export const rebekahSprites: Record<string, SpriteConfig> = {
  // Act I — servant alone with master
  start: { left: servantCalm },
  refuse_consequence: { left: servantCalm },
  canaan_consequence: { left: servantCalm },
  the_oath: { left: servantCalm },
  delay_consequence: { left: servantCalm },
  // Act II — at the well
  the_well: { left: servantCalm },
  city_consequence: { left: servantCalm },
  beauty_consequence: { left: servantCalm },
  the_prayer: { left: servantPraying },
  fire_consequence: { left: servantPraying },
  greeting_consequence: { left: servantPraying },
  // Act III — Rebekah arrives, perspective shifts
  rebekah_arrives: { left: servantCalm, right: rebekahJar },
  command_consequence: { left: servantCalm },
  rebekah_pov_request: { left: rebekahJar, right: servantCalm },
  stingy_consequence: { left: rebekahJar },
  refuse_water_consequence: { left: rebekahJar },
  watering_camels: { left: rebekahJar, right: servantCalm },
  halfway_consequence: { left: rebekahJar },
  // Act IV — gifts
  the_gifts: { left: rebekahCalm, right: servantGrateful },
  hide_consequence: { left: rebekahCalm },
  run_consequence: { left: rebekahCalm },
  the_blessing_well: { left: rebekahCalm, right: servantGrateful },
  secret_consequence: { left: rebekahCalm },
  // Act V — at the house
  laban_meets: { left: servantGrateful, right: rebekahCalm },
  demand_consequence: { left: servantCalm },
  the_errand_told: { left: servantGrateful, right: rebekahCalm },
  stranger_consequence: { left: servantGrateful },
  rebekahs_choice: { left: rebekahResolved, right: servantGrateful },
  wait_consequence: { left: rebekahCalm },
  stay_consequence: { left: rebekahCalm },
  // Act VI — journey + meeting
  the_blessing_send: { left: rebekahResolved, right: servantGrateful },
  the_road_home: { left: rebekahVeiled, right: servantCalm },
  turn_back_consequence: { left: rebekahVeiled },
  isaac_in_field: { left: rebekahVeiled, right: servantCalm },
  ride_past_consequence: { left: rebekahVeiled },
  the_meeting: { left: rebekahVeiled, right: isaacMeeting },
  the_comfort: { left: rebekahVeiled, right: isaacMeeting },
};
