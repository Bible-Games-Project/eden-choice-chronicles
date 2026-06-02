import nightStreet from "@/assets/scenes/peter-denies/night-street.jpg";
import outerGate from "@/assets/scenes/peter-denies/outer-gate.jpg";
import courtyardFire from "@/assets/scenes/peter-denies/courtyard-fire.jpg";
import firePit from "@/assets/scenes/peter-denies/fire-pit.jpg";
import shadowedWall from "@/assets/scenes/peter-denies/shadowed-wall.jpg";
import courtyardDawn from "@/assets/scenes/peter-denies/courtyard-dawn.jpg";
import balconyGaze from "@/assets/scenes/peter-denies/balcony-gaze.jpg";
import outsideWeeping from "@/assets/scenes/peter-denies/outside-weeping.jpg";

export const peterDeniesImages: Record<string, string> = {
  start: nightStreet,
  hide_consequence: nightStreet,
  charge_consequence: nightStreet,
  gate: outerGate,
  boast_consequence: outerGate,
  lie_consequence: outerGate,
  courtyard_fire: courtyardFire,
  joke_consequence: courtyardFire,
  pray_path: courtyardFire,
  first_recognized: firePit,
  confess_consequence: firePit,
  glare_consequence: firePit,
  second_recognized: shadowedWall,
  walk_back_consequence: shadowedWall,
  admit_consequence: shadowedWall,
  third_accusation: courtyardDawn,
  courage_consequence: courtyardDawn,
  flee_consequence: courtyardDawn,
  rooster: balconyGaze,
  lookaway_consequence: balconyGaze,
  shout_consequence: balconyGaze,
  weeping: outsideWeeping,
  harden_consequence: outsideWeeping,
  blame_consequence: outsideWeeping,
  ending: outsideWeeping,
};
