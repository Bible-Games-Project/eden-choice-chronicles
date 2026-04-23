import wellEvening from "@/assets/scenes/rebekah/well-evening.jpg";
import houseInterior from "@/assets/scenes/rebekah/house-interior.jpg";
import houseExterior from "@/assets/scenes/rebekah/house-exterior.jpg";
import caravanDesert from "@/assets/scenes/rebekah/caravan-desert.jpg";
import fieldSunset from "@/assets/scenes/rebekah/field-sunset.jpg";

export const rebekahImages: Record<string, string> = {
  // Act I — Abraham's house / departure
  start: houseInterior,
  refuse_consequence: houseInterior,
  canaan_consequence: houseInterior,
  the_oath: houseExterior,
  delay_consequence: houseExterior,
  // Act II — Well
  the_well: wellEvening,
  city_consequence: wellEvening,
  beauty_consequence: wellEvening,
  the_prayer: wellEvening,
  fire_consequence: wellEvening,
  greeting_consequence: wellEvening,
  // Act III — Rebekah's kindness
  rebekah_arrives: wellEvening,
  command_consequence: wellEvening,
  rebekah_pov_request: wellEvening,
  stingy_consequence: wellEvening,
  refuse_water_consequence: wellEvening,
  watering_camels: wellEvening,
  halfway_consequence: wellEvening,
  // Act IV — Gifts and family
  the_gifts: wellEvening,
  hide_consequence: wellEvening,
  run_consequence: wellEvening,
  the_blessing_well: wellEvening,
  secret_consequence: houseExterior,
  // Act V — In the house
  laban_meets: houseInterior,
  demand_consequence: houseInterior,
  the_errand_told: houseInterior,
  stranger_consequence: houseInterior,
  rebekahs_choice: houseInterior,
  wait_consequence: houseInterior,
  stay_consequence: houseInterior,
  // Act VI — Journey + meeting
  the_blessing_send: houseExterior,
  the_road_home: caravanDesert,
  turn_back_consequence: caravanDesert,
  isaac_in_field: fieldSunset,
  ride_past_consequence: fieldSunset,
  the_meeting: fieldSunset,
  the_comfort: fieldSunset,
};
