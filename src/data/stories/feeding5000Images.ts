import hillsideVast from "@/assets/scenes/feeding-5000/hillside-vast.jpg";
import crowdSeated from "@/assets/scenes/feeding-5000/crowd-seated.jpg";
import loavesFish from "@/assets/scenes/feeding-5000/loaves-fish.jpg";
import blessingLight from "@/assets/scenes/feeding-5000/blessing-light.jpg";
import everyoneEating from "@/assets/scenes/feeding-5000/everyone-eating.jpg";
import basketsLeftover from "@/assets/scenes/feeding-5000/baskets-leftover.jpg";

export const feeding5000Images: Record<string, string> = {
  start: hillsideVast,
  send_away: hillsideVast,
  rest_consequence: hillsideVast,
  compassion: crowdSeated,
  count_consequence: crowdSeated,
  boy: loavesFish,
  dismiss_consequence: loavesFish,
  mock_consequence: loavesFish,
  bless: blessingLight,
  unbelief_consequence: blessingLight,
  distribute: crowdSeated,
  hide_consequence: crowdSeated,
  feast: everyoneEating,
  waste_consequence: everyoneEating,
  baskets: basketsLeftover,
};
