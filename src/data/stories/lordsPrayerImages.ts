import hillside from "@/assets/scenes/lords-prayer/hillside-dusk.jpg";
import grove from "@/assets/scenes/lords-prayer/olive-grove.jpg";
import courtyard from "@/assets/scenes/lords-prayer/quiet-courtyard.jpg";
import starlit from "@/assets/scenes/lords-prayer/starlit-path.jpg";
import inner from "@/assets/scenes/lords-prayer/inner-room.jpg";
import innerRadiant from "@/assets/scenes/lords-prayer/inner-room-radiant.jpg";

export const lordsPrayerImages: Record<string, string> = {
  start: hillside,
  loud_consequence: hillside,
  empty_consequence: hillside,
  our_father: hillside,
  stranger_consequence: hillside,
  bread: grove,
  hoard_consequence: grove,
  greed_consequence: grove,
  forgive: courtyard,
  hide_consequence: courtyard,
  forgive_others: courtyard,
  wound_consequence: courtyard,
  demand_consequence: courtyard,
  deliver: starlit,
  self_consequence: starlit,
  private: inner,
  boast_consequence: inner,
  ending: innerRadiant,
};
