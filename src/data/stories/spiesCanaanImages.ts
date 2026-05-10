import campParan from "@/assets/scenes/spies-canaan/camp-paran.jpg";
import valleyEshcol from "@/assets/scenes/spies-canaan/valley-eshcol.jpg";
import walledCity from "@/assets/scenes/spies-canaan/walled-city.jpg";
import councilClearing from "@/assets/scenes/spies-canaan/council-clearing.jpg";
import campNightFear from "@/assets/scenes/spies-canaan/camp-night-fear.jpg";
import wildernessPath from "@/assets/scenes/spies-canaan/wilderness-path.jpg";

export const spiesCanaanImages: Record<string, string> = {
  // Act I
  start: campParan,
  rash_consequence: campParan,
  spies_depart: campParan,
  threat_consequence: campParan,
  bribe_consequence: campParan,
  // Act II
  valley_seen: valleyEshcol,
  mistrust_consequence: valleyEshcol,
  city_seen: walledCity,
  hide_consequence: walledCity,
  fear_consequence: walledCity,
  // Act III
  report_back: councilClearing,
  agree_consequence: councilClearing,
  silent_consequence: councilClearing,
  // Act IV
  caleb_speaks: councilClearing,
  silence_consequence: councilClearing,
  // Act V
  people_weep: campNightFear,
  mock_consequence: campNightFear,
  leave_consequence: campNightFear,
  // Act VI
  rebellion: campNightFear,
  destroy_consequence: campNightFear,
  self_consequence: campNightFear,
  ending: wildernessPath,
};
