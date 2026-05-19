import shoreDeparture from "@/assets/scenes/storm/shore-departure.jpg";
import stormRising from "@/assets/scenes/storm/storm-rising.jpg";
import boatStern from "@/assets/scenes/storm/boat-stern.jpg";
import stormPeak from "@/assets/scenes/storm/storm-peak.jpg";
import seaCalm from "@/assets/scenes/storm/sea-calm.jpg";
import distantShore from "@/assets/scenes/storm/distant-shore.jpg";

export const calmingStormImages: Record<string, string> = {
  start: shoreDeparture,
  refuse_consequence: shoreDeparture,
  wait_consequence: shoreDeparture,
  storm: stormRising,
  curse_consequence: stormRising,
  leap_consequence: stormRising,
  sleep: boatStern,
  alone_consequence: boatStern,
  wake: stormPeak,
  blame_consequence: stormPeak,
  silent_consequence: stormPeak,
  calm: seaCalm,
  doubt_consequence: seaCalm,
  amaze: distantShore,
};
