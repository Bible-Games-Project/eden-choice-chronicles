import courtyard from "@/assets/scenes/pharisee-tax/temple-courtyard.jpg";
import interior from "@/assets/scenes/pharisee-tax/temple-interior.jpg";
import front from "@/assets/scenes/pharisee-tax/temple-front.jpg";
import back from "@/assets/scenes/pharisee-tax/temple-back.jpg";
import mercyBg from "@/assets/scenes/pharisee-tax/temple-mercy.jpg";
import steps from "@/assets/scenes/pharisee-tax/temple-steps.jpg";
import radiant from "@/assets/scenes/pharisee-tax/hillside-radiant.jpg";

export const phariseeTaxImages: Record<string, string> = {
  start: courtyard,
  know_consequence: courtyard,
  temple: interior,
  judge_consequence: interior,
  pharisee_pray: front,
  admire_consequence: front,
  boast: front,
  copy_consequence: front,
  wish_consequence: front,
  tax_far: back,
  mock_consequence: back,
  mercy: mercyBg,
  impress_consequence: mercyBg,
  forgiven: mercyBg,
  doubt_consequence: mercyBg,
  jesus_explains: steps,
  argue_consequence: steps,
  ending: radiant,
};
