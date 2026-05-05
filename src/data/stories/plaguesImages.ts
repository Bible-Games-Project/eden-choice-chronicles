import throneHall from "@/assets/scenes/plagues/throne-hall.jpg";
import nileBlood from "@/assets/scenes/plagues/nile-blood.jpg";
import frogsStreets from "@/assets/scenes/plagues/frogs-streets.jpg";
import swarmsFields from "@/assets/scenes/plagues/swarms-fields.jpg";
import hailFire from "@/assets/scenes/plagues/hail-fire.jpg";
import darknessEgypt from "@/assets/scenes/plagues/darkness-egypt.jpg";
import goshenNight from "@/assets/scenes/plagues/goshen-night.jpg";

export const plaguesImages: Record<string, string> = {
  // Act I
  start: throneHall,
  hide_consequence: throneHall,
  storm_consequence: throneHall,
  serpent_sign: throneHall,
  boast_consequence: throneHall,
  // Act II
  to_the_nile: nileBlood,
  wait_consequence: nileBlood,
  beg_consequence: nileBlood,
  nile_blood: nileBlood,
  mock_consequence: nileBlood,
  // Act III
  frogs_plague: frogsStreets,
  refuse_pray_consequence: frogsStreets,
  silver_consequence: frogsStreets,
  pharaoh_lies: frogsStreets,
  despair_consequence: frogsStreets,
  // Act IV
  swarms: swarmsFields,
  boast_again_consequence: swarmsFields,
  pity_consequence: swarmsFields,
  livestock_die: swarmsFields,
  hide_wrath_consequence: swarmsFields,
  boils_plague: swarmsFields,
  curse_consequence: swarmsFields,
  give_up_consequence: swarmsFields,
  // Act V
  hail_fire: hailFire,
  trust_consequence: hailFire,
  locusts_warning: hailFire,
  side_servants_consequence: hailFire,
  accept_consequence: hailFire,
  darkness: darknessEgypt,
  steal_consequence: darknessEgypt,
  // Act VI
  final_threat: throneHall,
  beg_again_consequence: throneHall,
  victory_consequence: throneHall,
  ending: goshenNight,
};
