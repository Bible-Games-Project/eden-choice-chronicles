import hillsidePath from "@/assets/scenes/lazarus/hillside-path.jpg";
import desertClearing from "@/assets/scenes/lazarus/desert-clearing.jpg";
import bethanyCourtyard from "@/assets/scenes/lazarus/bethany-courtyard.jpg";
import tombStone from "@/assets/scenes/lazarus/tomb-stone.jpg";
import tombOpen from "@/assets/scenes/lazarus/tomb-open.jpg";
import tombRadiant from "@/assets/scenes/lazarus/tomb-radiant.jpg";

export const lazarusImages: Record<string, string> = {
  start: hillsidePath,
  urge_consequence: hillsidePath,
  dismiss_consequence: hillsidePath,
  delay: desertClearing,
  question_consequence: desertClearing,
  travel: hillsidePath,
  stayback_consequence: hillsidePath,
  martha: bethanyCourtyard,
  giveup_consequence: bethanyCourtyard,
  silent_consequence: bethanyCourtyard,
  mary: bethanyCourtyard,
  scold_consequence: bethanyCourtyard,
  weeps: bethanyCourtyard,
  pull_consequence: bethanyCourtyard,
  tomb: tombStone,
  leave_consequence: tombStone,
  argue_consequence: tombStone,
  call: tombOpen,
  cover_consequence: tombOpen,
  emerge: tombRadiant,
};
