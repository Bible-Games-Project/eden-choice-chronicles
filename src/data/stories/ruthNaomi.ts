import { StoryScene } from "@/data/stories/creation";

// RUTH AND NAOMI — Book of Ruth
// You ARE Ruth. Loyalty, kindness, and redemption.

export const ruthNaomiScenes: Record<string, StoryScene> = {
  // ACT I — LOSS IN MOAB
  start: {
    id: "start",
    title: "Three Graves in Moab",
    text: "Naomi has lost her husband and sons.\nGrief settles like dusk.",
    choices: [
      { text: "Sit in silence beside her grief", nextScene: "road_decision", tag: "kind", feedback: "Ruth 1:3-5 — Naomi's husband Elimelech died, and then her two sons, Mahlon and Chilion, also died.", isCorrect: true, sentiment: "positive" },
      { text: "Leave her to mourn alone", nextScene: "alone_consequence", tag: "cold", feedback: "Sorrow needs company.", isCorrect: false, sentiment: "negative" },
      { text: "Tell her to forget the dead", nextScene: "forget_consequence", tag: "harsh", feedback: "Love does not rush grief.", isCorrect: false, sentiment: "negative" },
    ],
  },
  alone_consequence: {
    id: "alone_consequence",
    title: "Return to Her",
    text: "She is your mother by love.\nGo back and sit with her.",
    choices: [
      { text: "Sit in silence beside her grief", nextScene: "road_decision", tag: "kind", feedback: "She leans her head to yours.", isCorrect: true, sentiment: "positive" },
    ],
  },
  forget_consequence: {
    id: "forget_consequence",
    title: "Honor Her Loss",
    text: "Grief is not a stain to wipe.\nLet her weep beside you.",
    choices: [
      { text: "Sit in silence beside her grief", nextScene: "road_decision", tag: "kind", feedback: "You bow your head with hers.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE ROAD CHOICE
  road_decision: {
    id: "road_decision",
    title: "She Tells You to Go Home",
    text: "\"Return to your people,\" she pleads.\nThe road forks before you.",
    choices: [
      { text: "Turn back to Moab and your gods", nextScene: "turnback_consequence", tag: "fearful", feedback: "Your heart is with her.", isCorrect: false, sentiment: "negative" },
      { text: "Wait for another to decide for you", nextScene: "wait_consequence", tag: "passive", feedback: "Loyalty is your own choice.", isCorrect: false, sentiment: "negative" },
      { text: "\"Where you go, I will go.\"", nextScene: "bethlehem_arrival", tag: "loyal", feedback: "Ruth 1:16 — Ruth told Naomi, \"Where you go, I will go, and where you stay, I will stay. Your people will be my people and your God my God.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  turnback_consequence: {
    id: "turnback_consequence",
    title: "Loyalty Calls You",
    text: "Comfort lies behind, but love walks ahead.\nGo with Naomi.",
    choices: [
      { text: "\"Where you go, I will go.\"", nextScene: "bethlehem_arrival", tag: "loyal", feedback: "You take her hand again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Choose for Yourself",
    text: "No one can carry your vow but you.\nSpeak it now.",
    choices: [
      { text: "\"Where you go, I will go.\"", nextScene: "bethlehem_arrival", tag: "loyal", feedback: "The words rise from your heart.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — ARRIVAL IN BETHLEHEM
  bethlehem_arrival: {
    id: "bethlehem_arrival",
    title: "Bethlehem at Dawn",
    text: "Naomi returns home empty-handed.\nThe village whispers around you.",
    choices: [
      { text: "Hide your Moabite roots in shame", nextScene: "hide_consequence", tag: "fearful", feedback: "Stand with her openly.", isCorrect: false, sentiment: "negative" },
      { text: "Beg in the street for bread", nextScene: "beg_consequence", tag: "passive", feedback: "Work is the gentler way.", isCorrect: false, sentiment: "negative" },
      { text: "Offer to glean grain to feed her", nextScene: "barley_field", tag: "kind", feedback: "Ruth 2:2 — Ruth asked Naomi if she could go to the fields and glean among the ears of grain behind anyone in whose eyes she might find favor.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Walk Without Shame",
    text: "Your love for Naomi is not a stain.\nLift your head and serve.",
    choices: [
      { text: "Offer to glean grain to feed her", nextScene: "barley_field", tag: "kind", feedback: "You wrap your shawl tighter.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Take Up the Sickle",
    text: "Your hands can gather what falls.\nThe fields are open to the poor.",
    choices: [
      { text: "Offer to glean grain to feed her", nextScene: "barley_field", tag: "kind", feedback: "You step toward the harvest.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE FIELD OF BOAZ
  barley_field: {
    id: "barley_field",
    title: "Among the Reapers",
    text: "Boaz, kind and strong, sees you working.\n\"Stay in my fields,\" he says.",
    choices: [
      { text: "Refuse his kindness in pride", nextScene: "refuse_consequence", tag: "proud", feedback: "Grace is meant to be received.", isCorrect: false, sentiment: "negative" },
      { text: "Bow and thank him with humility", nextScene: "threshing_floor", tag: "humble", feedback: "Ruth 2:10 — Ruth bowed down with her face to the ground and asked Boaz why she had found such favor in his eyes.", isCorrect: true, sentiment: "positive" },
      { text: "Demand more than he offers", nextScene: "demand_consequence", tag: "greedy", feedback: "Kindness is not a debt.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Receive His Kindness",
    text: "Pride leaves you with empty hands.\nAccept the gift before you.",
    choices: [
      { text: "Bow and thank him with humility", nextScene: "threshing_floor", tag: "humble", feedback: "You bend low in gratitude.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "A Quiet Heart",
    text: "His mercy is not yours to seize.\nReceive it gently.",
    choices: [
      { text: "Bow and thank him with humility", nextScene: "threshing_floor", tag: "humble", feedback: "He smiles at your meekness.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE THRESHING FLOOR
  threshing_floor: {
    id: "threshing_floor",
    title: "Naomi's Counsel",
    text: "\"Go to the threshing floor,\" she says.\n\"Ask Boaz to be your redeemer.\"",
    choices: [
      { text: "Trust Naomi and go in faith", nextScene: "redemption_home", tag: "trusting", feedback: "Ruth 3:5 — Ruth told Naomi, \"I will do everything you say.\"", isCorrect: true, sentiment: "positive" },
      { text: "Ignore her wisdom and stay home", nextScene: "ignore_consequence", tag: "fearful", feedback: "Faith asks one quiet step.", isCorrect: false, sentiment: "negative" },
      { text: "Seek a wealthier man instead", nextScene: "seek_consequence", tag: "greedy", feedback: "Boaz is the kinsman God gave.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Walk in Faith",
    text: "Naomi's counsel is your map.\nFollow it through the dark.",
    choices: [
      { text: "Trust Naomi and go in faith", nextScene: "redemption_home", tag: "trusting", feedback: "You rise with the lantern.", isCorrect: true, sentiment: "positive" },
    ],
  },
  seek_consequence: {
    id: "seek_consequence",
    title: "Honor the Redeemer",
    text: "Wealth without kindness is barren.\nBoaz is the heart God chose.",
    choices: [
      { text: "Trust Naomi and go in faith", nextScene: "redemption_home", tag: "trusting", feedback: "You turn back to Boaz.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — REDEMPTION
  redemption_home: {
    id: "redemption_home",
    title: "A New Family Line",
    text: "Boaz redeems you. A son is born.\nNaomi smiles again at last.",
    choices: [],
    isFinal: true,
  },
};
