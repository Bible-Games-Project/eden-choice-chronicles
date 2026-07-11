import { StoryScene } from "@/data/stories/creation";

// SAUL BECOMES KING — 1 Samuel 8–10
// You ARE Saul. Tension between human desire and divine selection.

export const saulKingScenes: Record<string, StoryScene> = {
  // ACT I — THE PEOPLE DEMAND A KING
  start: {
    id: "start",
    title: "Israel Demands a King",
    text: "The elders cry, \"Give us a king!\"\nSamuel turns to the Lord in grief.",
    choices: [
      { text: "Crown yourself before the crowd", nextScene: "crown_consequence", tag: "proud", feedback: "A king is given, not seized.", isCorrect: false, sentiment: "negative" },
      { text: "Trust Samuel to seek God's word", nextScene: "warning", tag: "humble", feedback: "1 Samuel 8:6-7 — Samuel prayed to the Lord about the elders' demand for a king.", isCorrect: true, sentiment: "positive" },
      { text: "Mock the prophet's slow reply", nextScene: "mock_consequence", tag: "scornful", feedback: "The Lord answers in His time.", isCorrect: false, sentiment: "negative" },
    ],
  },
  crown_consequence: {
    id: "crown_consequence",
    title: "Wait on the Lord",
    text: "Crowns of pride do not last.\nLet God choose His king.",
    choices: [
      { text: "Trust Samuel to seek God's word", nextScene: "warning", tag: "humble", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Honor the Prophet",
    text: "Samuel speaks for the Lord.\nWait with him in silence.",
    choices: [
      { text: "Trust Samuel to seek God's word", nextScene: "warning", tag: "humble", feedback: "You quiet your tongue.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — SAMUEL'S WARNING
  warning: {
    id: "warning",
    title: "The Cost of a King",
    text: "\"He will take your sons and fields.\"\nThe people still cry for one.",
    choices: [
      { text: "Listen and weigh his warning", nextScene: "lost_path", tag: "wise", feedback: "1 Samuel 8:10-18 — Samuel told the people all the words of the Lord, warning them about the ways of the king who would reign over them.", isCorrect: true, sentiment: "positive" },
      { text: "Shout louder than Samuel", nextScene: "shout_consequence", tag: "rebellious", feedback: "Drowned wisdom still bears fruit.", isCorrect: false, sentiment: "negative" },
      { text: "Walk away unmoved", nextScene: "walk_consequence", tag: "indifferent", feedback: "His words are for you too.", isCorrect: false, sentiment: "negative" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Quiet Your Voice",
    text: "Listen before you answer.\nThe prophet speaks for God.",
    choices: [
      { text: "Listen and weigh his warning", nextScene: "lost_path", tag: "wise", feedback: "You let his words sink deep.", isCorrect: true, sentiment: "positive" },
    ],
  },
  walk_consequence: {
    id: "walk_consequence",
    title: "Stay and Hear",
    text: "These words will shape your life.\nReturn and listen.",
    choices: [
      { text: "Listen and weigh his warning", nextScene: "lost_path", tag: "wise", feedback: "You step back to the circle.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE SEARCH FOR DONKEYS
  lost_path: {
    id: "lost_path",
    title: "Father's Donkeys Are Lost",
    text: "Days of searching, hills of dust.\nA servant says, \"There is a seer here.\"",
    choices: [
      { text: "Give up and turn home", nextScene: "giveup_consequence", tag: "weary", feedback: "God prepares the next step.", isCorrect: false, sentiment: "negative" },
      { text: "Pay him only for the donkeys", nextScene: "pay_consequence", tag: "narrow", feedback: "He brings more than answers.", isCorrect: false, sentiment: "negative" },
      { text: "Go to the seer Samuel", nextScene: "anointing", tag: "faithful", feedback: "1 Samuel 9:5-6 — Saul's servant suggested they go to the man of God in the town to inquire about their lost donkeys.", isCorrect: true, sentiment: "positive" },
    ],
  },
  giveup_consequence: {
    id: "giveup_consequence",
    title: "Press Onward",
    text: "Your search is more than donkeys.\nGo to the seer.",
    choices: [
      { text: "Go to the seer Samuel", nextScene: "anointing", tag: "faithful", feedback: "You climb the rise.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pay_consequence: {
    id: "pay_consequence",
    title: "Greater Than Coin",
    text: "He has no need of your silver.\nGo and hear his word.",
    choices: [
      { text: "Go to the seer Samuel", nextScene: "anointing", tag: "faithful", feedback: "You set your gift aside.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE ANOINTING
  anointing: {
    id: "anointing",
    title: "Oil on Your Head",
    text: "Samuel pours oil and kisses you.\n\"The Lord has chosen you to lead.\"",
    choices: [
      { text: "Boast of your new calling", nextScene: "boast_consequence", tag: "proud", feedback: "A king kneels before God first.", isCorrect: false, sentiment: "negative" },
      { text: "Reject the oil entirely", nextScene: "reject_consequence", tag: "fearful", feedback: "Do not refuse what God gives.", isCorrect: false, sentiment: "negative" },
      { text: "Receive it in trembling silence", nextScene: "assembly", tag: "humble", feedback: "1 Samuel 10:1 — Samuel anointed Saul with oil and declared that the Lord had appointed him ruler over His inheritance.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Bow First",
    text: "The crown is heavy with calling.\nReceive it in humility.",
    choices: [
      { text: "Receive it in trembling silence", nextScene: "assembly", tag: "humble", feedback: "You lower your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  reject_consequence: {
    id: "reject_consequence",
    title: "Do Not Refuse",
    text: "God Himself anoints through Samuel.\nReceive what is given.",
    choices: [
      { text: "Receive it in trembling silence", nextScene: "assembly", tag: "humble", feedback: "Your hands rest open at your side.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE ASSEMBLY AT MIZPAH
  assembly: {
    id: "assembly",
    title: "Tribes Gather at Mizpah",
    text: "Lots fall and your name is called.\nThe people search the camp.",
    choices: [
      { text: "Step forward to be seen", nextScene: "confirmation", tag: "obedient", feedback: "Wind lifts your tunic gently.", isCorrect: false, sentiment: "positive" },
      { text: "Demand a throne and crown", nextScene: "demand_consequence", tag: "proud", feedback: "Greatness wears no gold yet.", isCorrect: false, sentiment: "negative" },
      { text: "Hide among the baggage", nextScene: "hide_consequence", tag: "fearful", feedback: "1 Samuel 10:22 — When Saul was sought among the people at Mizpah, he was found hidden among the baggage.", isCorrect: true, sentiment: "negative" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Serve First",
    text: "A king of Israel serves the Lord.\nStep forward humbly.",
    choices: [
      { text: "Step forward to be seen", nextScene: "confirmation", tag: "obedient", feedback: "You walk into the open.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Found Among the Jars",
    text: "They draw you out into the light.\nYour calling cannot be hidden.",
    choices: [
      { text: "Step forward to be seen", nextScene: "confirmation", tag: "obedient", feedback: "You blink in the sun.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — KING OVER ISRAEL
  confirmation: {
    id: "confirmation",
    title: "\"Long Live the King!\"",
    text: "The tribes shout and bow before you.\nA new road opens at your feet.",
    choices: [],
    isFinal: true,
  },
};
