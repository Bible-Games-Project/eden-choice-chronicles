import hillside from "@/assets/scenes/rich-lazarus/hillside-parable.jpg";
import mansionHall from "@/assets/scenes/rich-lazarus/mansion-hall.jpg";
import mansionGate from "@/assets/scenes/rich-lazarus/mansion-gate.jpg";
import sky from "@/assets/scenes/rich-lazarus/sky-radiant.jpg";
import darkFlame from "@/assets/scenes/rich-lazarus/dark-flame.jpg";
import chasm from "@/assets/scenes/rich-lazarus/chasm-vista.jpg";
import radiant from "@/assets/scenes/rich-lazarus/hillside-radiant.jpg";

export const richLazarusImages: Record<string, string> = {
  start: hillside,
  turn_consequence: hillside,
  luxury: mansionHall,
  envy_consequence: mansionHall,
  gate: mansionGate,
  step_consequence: mansionGate,
  blame_consequence: mansionGate,
  dogs: mansionGate,
  disgust_consequence: mansionGate,
  indifference: mansionGate,
  excuse_consequence: mansionGate,
  death_lazarus: sky,
  doubt_consequence: sky,
  death_rich: darkFlame,
  mock_consequence: darkFlame,
  pity_consequence: darkFlame,
  plea: chasm,
  demand_consequence: chasm,
  warning: chasm,
  sign_consequence: chasm,
  blame_god_consequence: chasm,
  ending: radiant,
};
