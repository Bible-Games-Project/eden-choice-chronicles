import { StoryScene } from "@/data/stories/creation";

// THE SPIES IN CANAAN — Numbers 13–14
// You ARE Moses. From sending the spies to the people's rebellion.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const spiesCanaanScenes: Record<string, StoryScene> = {
  // ============ ACT I — SENDING THE SPIES ============
  start: {
    id: "start",
    title: "On the Edge of Promise",
    text: "The wilderness ends here at Paran.\nThe Lord says, \"Send out scouts.\"",
    choices: [
      { text: "March in blindly without a scout", nextScene: "rash_consequence", tag: "rash", feedback: "Wisdom honors His instruction.", isCorrect: false, sentiment: "negative" },
      { text: "Choose one leader from each tribe", nextScene: "spies_depart", tag: "obedient", feedback: "Numbers 13:2 — The Lord commanded Moses to send men to explore the land of Canaan, one leader from each ancestral tribe.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rash_consequence: {
    id: "rash_consequence",
    title: "Listen Before You March",
    text: "He spoke a way; do not run past it.\nGather the chosen scouts.",
    choices: [
      { text: "Choose one leader from each tribe", nextScene: "spies_depart", tag: "obedient", feedback: "The twelve gather at dawn.", isCorrect: true, sentiment: "positive" },
    ],
  },

  spies_depart: {
    id: "spies_depart",
    title: "Twelve into the Hills",
    text: "Joshua and Caleb stand among them.\nForty days they will search the land.",
    choices: [
      { text: "Send them with prayer and a charge", nextScene: "valley_seen", tag: "faithful", feedback: "\"Be of good courage.\"", isCorrect: true, sentiment: "positive" },
      { text: "Threaten them if they bring bad news", nextScene: "threat_consequence", tag: "harsh", feedback: "Fear breeds twisted reports.", isCorrect: false, sentiment: "negative" },
      { text: "Promise them spoil for false praise", nextScene: "bribe_consequence", tag: "evasive", feedback: "Truth cannot be bought.", isCorrect: false, sentiment: "negative" },
    ],
  },
  threat_consequence: {
    id: "threat_consequence",
    title: "Send Them in Faith",
    text: "A scout under threat will only lie.\nBless them and trust the Lord.",
    choices: [
      { text: "Send them with prayer and a charge", nextScene: "valley_seen", tag: "faithful", feedback: "Your blessing follows them.", isCorrect: true, sentiment: "positive" },
    ],
  },
  bribe_consequence: {
    id: "bribe_consequence",
    title: "Truth Cannot Be Bought",
    text: "His promise needs no flattery.\nLet them see and speak plainly.",
    choices: [
      { text: "Send them with prayer and a charge", nextScene: "valley_seen", tag: "faithful", feedback: "You lift hands over the twelve.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE LAND OBSERVED ============
  valley_seen: {
    id: "valley_seen",
    title: "Valley of Eshcol",
    text: "Vines bend with grapes large as stones.\nThe land is rich beyond words.",
    choices: [
      { text: "Mistrust the gift and turn back", nextScene: "mistrust_consequence", tag: "fearful", feedback: "His promise stands before you.", isCorrect: false, sentiment: "negative" },
      { text: "Cut a cluster as a sign for Israel", nextScene: "city_seen", tag: "faithful", feedback: "Numbers 13:23 — The spies cut down a branch with a single cluster of grapes so large that two men had to carry it on a pole.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mistrust_consequence: {
    id: "mistrust_consequence",
    title: "Receive His Gift",
    text: "What He gives, He gives in full.\nTake the sign back to the camp.",
    choices: [
      { text: "Cut a cluster as a sign for Israel", nextScene: "city_seen", tag: "faithful", feedback: "The cluster sways between them.", isCorrect: true, sentiment: "positive" },
    ],
  },

  city_seen: {
    id: "city_seen",
    title: "The Walled City",
    text: "Tall walls rise above the plain.\nGiants walk along their stones.",
    choices: [
      { text: "Forget the city and report fruit alone", nextScene: "hide_consequence", tag: "evasive", feedback: "Half-truth is no truth.", isCorrect: false, sentiment: "negative" },
      { text: "Remember the Lord goes before you", nextScene: "report_back", tag: "faithful", feedback: "\"He is greater than these walls.\"", isCorrect: true, sentiment: "positive" },
      { text: "Decide the land cannot be taken", nextScene: "fear_consequence", tag: "fearful", feedback: "Sight without faith is despair.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Tell the Whole Truth",
    text: "Israel must hear what is real.\nFruit and walls, both belong to Him.",
    choices: [
      { text: "Remember the Lord goes before you", nextScene: "report_back", tag: "faithful", feedback: "Faith steadies your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  fear_consequence: {
    id: "fear_consequence",
    title: "Look Beyond the Walls",
    text: "He who parted the sea is here.\nWalls are nothing in His hand.",
    choices: [
      { text: "Remember the Lord goes before you", nextScene: "report_back", tag: "faithful", feedback: "Courage lifts your heart.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — THE FEARFUL REPORT ============
  report_back: {
    id: "report_back",
    title: "Around the Council Fire",
    text: "Ten spies cry, \"We are like grasshoppers.\"\nThe camp begins to tremble.",
    choices: [
      { text: "Agree with the fearful ten", nextScene: "agree_consequence", tag: "weak", feedback: "Faith does not bow to fear.", isCorrect: false, sentiment: "negative" },
      { text: "Stay silent and let panic spread", nextScene: "silent_consequence", tag: "evasive", feedback: "A leader must speak.", isCorrect: false, sentiment: "negative" },
      { text: "Let Joshua and Caleb answer", nextScene: "caleb_speaks", tag: "faithful", feedback: "Numbers 14:6-9 — Joshua and Caleb tore their clothes and told the assembly that the land was exceedingly good and the Lord would give it to them.", isCorrect: true, sentiment: "positive" },
    ],
  },
  agree_consequence: {
    id: "agree_consequence",
    title: "Stand on His Word",
    text: "Numbers are not greater than God.\nLet faithful voices be heard.",
    choices: [
      { text: "Let Joshua and Caleb answer", nextScene: "caleb_speaks", tag: "faithful", feedback: "Caleb steps forward boldly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Silence Lets Fear Win",
    text: "Truth must be spoken aloud.\nGive the floor to the faithful.",
    choices: [
      { text: "Let Joshua and Caleb answer", nextScene: "caleb_speaks", tag: "faithful", feedback: "Their voices ring with hope.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — JOSHUA AND CALEB ============
  caleb_speaks: {
    id: "caleb_speaks",
    title: "\"We Can Surely Take It\"",
    text: "Caleb pleads, Joshua at his side.\n\"The Lord is with us. Do not fear.\"",
    choices: [
      { text: "Silence them to keep peace", nextScene: "silence_consequence", tag: "weak", feedback: "True peace stands on truth.", isCorrect: false, sentiment: "negative" },
      { text: "Stand with their faith before all", nextScene: "people_weep", tag: "faithful", feedback: "Numbers 13:30 — Caleb silenced the people before Moses and said, \"We should go up and take possession of the land, for we can surely do it.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  silence_consequence: {
    id: "silence_consequence",
    title: "Faith Must Be Honored",
    text: "Their words are the Lord's voice tonight.\nStand beside them openly.",
    choices: [
      { text: "Stand with their faith before all", nextScene: "people_weep", tag: "faithful", feedback: "The camp turns to look at you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE PEOPLE REBEL ============
  people_weep: {
    id: "people_weep",
    title: "A Night of Weeping",
    text: "The camp wails through the dark.\n\"Better to die in Egypt!\" they cry.",
    choices: [
      { text: "Mock the people in their sorrow", nextScene: "mock_consequence", tag: "harsh", feedback: "Even fear deserves a shepherd.", isCorrect: false, sentiment: "negative" },
      { text: "Fall on your face and pray for them", nextScene: "rebellion", tag: "humble", feedback: "Numbers 14:5 — Moses and Aaron fell facedown in front of the whole assembly of Israel.", isCorrect: true, sentiment: "positive" },
      { text: "Pack your tent and leave alone", nextScene: "leave_consequence", tag: "evasive", feedback: "A shepherd does not flee his sheep.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Carry Their Grief",
    text: "Scorn cannot heal a frightened camp.\nIntercede on your knees.",
    choices: [
      { text: "Fall on your face and pray for them", nextScene: "rebellion", tag: "humble", feedback: "Your forehead meets the dust.", isCorrect: true, sentiment: "positive" },
    ],
  },
  leave_consequence: {
    id: "leave_consequence",
    title: "Stay with Your People",
    text: "The Lord set you over them.\nDo not abandon what He gave.",
    choices: [
      { text: "Fall on your face and pray for them", nextScene: "rebellion", tag: "humble", feedback: "You turn back to your knees.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — REBELLION & DECISION ============
  rebellion: {
    id: "rebellion",
    title: "\"Stone Them!\" the Crowd Shouts",
    text: "Hands lift against Joshua and Caleb.\nThe glory of the Lord appears.",
    choices: [
      { text: "Let the Lord destroy them all", nextScene: "destroy_consequence", tag: "harsh", feedback: "Mercy still seeks an intercessor.", isCorrect: false, sentiment: "negative" },
      { text: "Plead for mercy on the people", nextScene: "ending", tag: "faithful", feedback: "\"Pardon them, as You have pardoned.\"", isCorrect: true, sentiment: "positive" },
      { text: "Ask Him to make a new nation of you", nextScene: "self_consequence", tag: "prideful", feedback: "His promise is for Israel.", isCorrect: false, sentiment: "negative" },
    ],
  },
  destroy_consequence: {
    id: "destroy_consequence",
    title: "Stand in the Breach",
    text: "A shepherd does not call down ruin.\nLift your voice for them.",
    choices: [
      { text: "Plead for mercy on the people", nextScene: "ending", tag: "faithful", feedback: "Your prayer rises like smoke.", isCorrect: true, sentiment: "positive" },
    ],
  },
  self_consequence: {
    id: "self_consequence",
    title: "Not for Your Name Alone",
    text: "Pray for the flock, not the shepherd.\nMercy is wider than you.",
    choices: [
      { text: "Plead for mercy on the people", nextScene: "ending", tag: "faithful", feedback: "His anger relents at your words.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "The Wilderness Path",
    text: "He pardons, but the way grows long.\nFaith will yet inherit the land.",
    choices: [],
    isFinal: true,
  },
};
