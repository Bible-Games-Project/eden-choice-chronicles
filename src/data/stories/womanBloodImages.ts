import crowdStreet from "@/assets/scenes/woman-blood/crowd-street.jpg";
import crowdEdge from "@/assets/scenes/woman-blood/crowd-edge.jpg";
import garmentHem from "@/assets/scenes/woman-blood/garment-hem.jpg";
import healingGlow from "@/assets/scenes/woman-blood/healing-glow.jpg";
import quietClearing from "@/assets/scenes/woman-blood/quiet-clearing.jpg";
import peaceDusk from "@/assets/scenes/woman-blood/peace-dusk.jpg";

export const womanBloodImages: Record<string, string> = {
  start: crowdStreet,
  stay_consequence: crowdStreet,
  coins_consequence: crowdStreet,
  approach: crowdEdge,
  call_consequence: crowdEdge,
  touch: garmentHem,
  pull_consequence: garmentHem,
  doubt_consequence: garmentHem,
  healed: healingGlow,
  slip_consequence: healingGlow,
  who_touched: quietClearing,
  hide_consequence: quietClearing,
  deny_consequence: quietClearing,
  confess: quietClearing,
  peace: peaceDusk,
};
