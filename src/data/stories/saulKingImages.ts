import townDemand from "@/assets/scenes/saul-king/town-demand.jpg";
import lostDonkeys from "@/assets/scenes/saul-king/lost-donkeys.jpg";
import anointingRooftop from "@/assets/scenes/saul-king/anointing-rooftop.jpg";
import mizpahAssembly from "@/assets/scenes/saul-king/mizpah-assembly.jpg";
import baggageHide from "@/assets/scenes/saul-king/baggage-hide.jpg";
import coronationHill from "@/assets/scenes/saul-king/coronation-hill.jpg";

export const saulKingImages: Record<string, string> = {
  start: townDemand,
  crown_consequence: townDemand,
  mock_consequence: townDemand,
  warning: townDemand,
  shout_consequence: townDemand,
  walk_consequence: townDemand,
  lost_path: lostDonkeys,
  giveup_consequence: lostDonkeys,
  pay_consequence: lostDonkeys,
  anointing: anointingRooftop,
  boast_consequence: anointingRooftop,
  reject_consequence: anointingRooftop,
  assembly: mizpahAssembly,
  demand_consequence: mizpahAssembly,
  hide_consequence: baggageHide,
  confirmation: coronationHill,
};
