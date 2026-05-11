import templeEvening from "@/assets/scenes/samuel-called/temple-evening.jpg";
import sleepingChamber from "@/assets/scenes/samuel-called/sleeping-chamber.jpg";
import eliChamber from "@/assets/scenes/samuel-called/eli-chamber.jpg";
import sanctuaryGlow from "@/assets/scenes/samuel-called/sanctuary-glow.jpg";
import dawnCourtyard from "@/assets/scenes/samuel-called/dawn-courtyard.jpg";
import callingHill from "@/assets/scenes/samuel-called/calling-hill.jpg";

export const samuelCalledImages: Record<string, string> = {
  start: templeEvening,
  sneak_consequence: templeEvening,
  demand_consequence: templeEvening,
  night_falls: sleepingChamber,
  ignore_consequence: sleepingChamber,
  shout_consequence: sleepingChamber,
  second_call: eliChamber,
  doubt_consequence: eliChamber,
  curse_consequence: eliChamber,
  third_call: eliChamber,
  refuse_consequence: eliChamber,
  boast_consequence: eliChamber,
  respond_god: sanctuaryGlow,
  hide_consequence: sanctuaryGlow,
  sign_consequence: sanctuaryGlow,
  prophet_calling: callingHill,
};

export const samuelCalledExtraImage = dawnCourtyard;
