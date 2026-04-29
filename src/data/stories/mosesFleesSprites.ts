import mosesObserving from "@/assets/sprites/moses-flees/moses-observing.png";
import mosesAngered from "@/assets/sprites/moses-flees/moses-angered.png";
import mosesGuilty from "@/assets/sprites/moses-flees/moses-guilty.png";
import mosesFearful from "@/assets/sprites/moses-flees/moses-fearful.png";
import mosesFleeing from "@/assets/sprites/moses-flees/moses-fleeing.png";
import mosesWeary from "@/assets/sprites/moses-flees/moses-weary.png";
import mosesArriving from "@/assets/sprites/moses-flees/moses-arriving.png";
import taskmasterCruel from "@/assets/sprites/moses-flees/taskmaster-cruel.png";
import hebrewSlave from "@/assets/sprites/moses-flees/hebrew-slave.png";
import hebrewsQuarreling from "@/assets/sprites/moses-flees/hebrews-quarreling.png";
import pharaohFurious from "@/assets/sprites/moses-flees/pharaoh-furious.png";
import guardSearching from "@/assets/sprites/moses-flees/guard-searching.png";
import midianiteWoman from "@/assets/sprites/moses-flees/midianite-woman.png";

import { SpriteConfig } from "@/data/creationSprites";

// Single sprite per scene (left only).
export const mosesFleesSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: taskmasterCruel },
  walk_away_consequence: { left: mosesGuilty },
  call_guards_consequence: { left: mosesObserving },
  watch_closer: { left: hebrewSlave },
  shout_consequence: { left: mosesAngered },
  bribe_consequence: { left: taskmasterCruel },
  // Act II
  no_one_sees: { left: mosesAngered },
  run_palace_consequence: { left: mosesFearful },
  strike_egyptian: { left: mosesGuilty },
  leave_body_consequence: { left: mosesFearful },
  boast_consequence: { left: mosesGuilty },
  bury_body: { left: mosesGuilty },
  tell_elders_consequence: { left: mosesFearful },
  // Act III
  return_palace: { left: mosesGuilty },
  hide_chamber_consequence: { left: mosesFearful },
  second_day: { left: hebrewsQuarreling },
  take_side_consequence: { left: mosesAngered },
  ignore_consequence: { left: mosesGuilty },
  rebuke_them: { left: hebrewsQuarreling },
  deny_consequence: { left: mosesFearful },
  threaten_consequence: { left: mosesAngered },
  // Act IV
  exposed: { left: mosesFearful },
  beg_pharaoh_consequence: { left: pharaohFurious },
  hide_hebrews_consequence: { left: mosesFearful },
  pharaoh_hears: { left: pharaohFurious },
  river_consequence: { left: guardSearching },
  revolt_consequence: { left: mosesAngered },
  // Act V
  leave_egypt: { left: mosesFleeing },
  wait_gate_consequence: { left: guardSearching },
  desert_walk: { left: mosesFleeing },
  surrender_consequence: { left: mosesWeary },
  curse_consequence: { left: mosesAngered },
  canyon_pause: { left: mosesWeary },
  give_up_consequence: { left: mosesWeary },
  see_well: { left: mosesArriving },
  hide_well_consequence: { left: mosesFearful },
  meet_midianite: { left: midianiteWoman },
  refuse_consequence: { left: mosesArriving },
  lie_consequence: { left: mosesArriving },
  ending: { left: mosesArriving },
};
