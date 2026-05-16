import { StoryScene } from "@/data/stories/creation";

// WEDDING AT CANA — John 2
// You are a servant at the wedding in Cana.

export const weddingCanaScenes: Record<string, StoryScene> = {
  // ACT I — CELEBRATION
  start: {
    id: "start",
    title: "A Joyful Feast",
    text: "Lanterns sway. Laughter rises.\nThe bride and groom dance.",
    choices: [
      { text: "Join the dancing", nextScene: "shortage", tag: "joyful", feedback: "Joy belongs to all.", isCorrect: true, sentiment: "positive" },
      { text: "Slip away from the noise", nextScene: "slip_consequence", tag: "withdrawn", feedback: "Stay. Be present.", isCorrect: false, sentiment: "negative" },
    ],
  },
  slip_consequence: {
    id: "slip_consequence",
    title: "Return",
    text: "The feast still calls you.\nGo back.",
    choices: [
      { text: "Join the dancing", nextScene: "shortage", tag: "joyful", feedback: "Warmth meets you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — WINE RUNS OUT
  shortage: {
    id: "shortage",
    title: "The Last Cup",
    text: "Whispers spread: the wine is gone.\nMary's eyes find her son.",
    choices: [
      { text: "Hide the empty jars", nextScene: "hide_consequence", tag: "fearful", feedback: "Truth is better.", isCorrect: false, sentiment: "negative" },
      { text: "Pretend nothing is wrong", nextScene: "pretend_consequence", tag: "proud", feedback: "Do not hide it.", isCorrect: false, sentiment: "negative" },
      { text: "Bring word to Mary", nextScene: "mother", tag: "faithful", feedback: "She will know.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Tell Her",
    text: "Shame solves nothing.\nFind Mary.",
    choices: [
      { text: "Bring word to Mary", nextScene: "mother", tag: "faithful", feedback: "She listens gently.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pretend_consequence: {
    id: "pretend_consequence",
    title: "Speak",
    text: "The guests will notice.\nDo not pretend.",
    choices: [
      { text: "Bring word to Mary", nextScene: "mother", tag: "faithful", feedback: "She turns to her son.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — MARY SPEAKS
  mother: {
    id: "mother",
    title: "His Mother's Voice",
    text: "\"They have no more wine,\" she says.\nThen turns to you.",
    choices: [
      { text: "Wait for clear orders", nextScene: "wait_consequence", tag: "fearful", feedback: "Listen closely.", isCorrect: false, sentiment: "negative" },
      { text: "\"Do whatever he tells you.\"", nextScene: "instruct", tag: "faithful", feedback: "Her trust steadies you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Trust Her Words",
    text: "She has already spoken.\nObey her son.",
    choices: [
      { text: "\"Do whatever he tells you.\"", nextScene: "instruct", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — JESUS INSTRUCTS
  instruct: {
    id: "instruct",
    title: "A Quiet Command",
    text: "Jesus points to six stone jars.\n\"Fill them with water.\"",
    choices: [
      { text: "Ask why — it is only water", nextScene: "ask_consequence", tag: "proud", feedback: "Obey first.", isCorrect: false, sentiment: "negative" },
      { text: "Take only one jar", nextScene: "half_consequence", tag: "doubtful", feedback: "Fill them all.", isCorrect: false, sentiment: "negative" },
      { text: "Fill every jar to the brim", nextScene: "fill", tag: "faithful", feedback: "Full obedience.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ask_consequence: {
    id: "ask_consequence",
    title: "Just Do It",
    text: "Questions can wait.\nLift the water.",
    choices: [
      { text: "Fill every jar to the brim", nextScene: "fill", tag: "faithful", feedback: "Your hands move.", isCorrect: true, sentiment: "positive" },
    ],
  },
  half_consequence: {
    id: "half_consequence",
    title: "All of Them",
    text: "He said every jar.\nDo not hold back.",
    choices: [
      { text: "Fill every jar to the brim", nextScene: "fill", tag: "faithful", feedback: "Water rises in each one.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — WATER BECOMES WINE
  fill: {
    id: "fill",
    title: "To the Brim",
    text: "Six jars, full of cool water.\n\"Now draw some out,\" he says.",
    choices: [
      { text: "Refuse — it is just water", nextScene: "refuse_consequence", tag: "faithless", feedback: "Trust him.", isCorrect: false, sentiment: "negative" },
      { text: "Carry it to the steward", nextScene: "taste", tag: "faithful", feedback: "You obey without seeing.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Carry It",
    text: "Faith walks before sight.\nGo.",
    choices: [
      { text: "Carry it to the steward", nextScene: "taste", tag: "faithful", feedback: "Your steps are sure.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE STEWARD TASTES
  taste: {
    id: "taste",
    title: "The First Sip",
    text: "The steward's eyes widen.\n\"You saved the best for last!\"",
    choices: [
      { text: "Boast that you poured it", nextScene: "boast_consequence", tag: "proud", feedback: "This is not yours.", isCorrect: false, sentiment: "negative" },
      { text: "Stay quiet and give thanks", nextScene: "wonder", tag: "faithful", feedback: "Silence honors him.", isCorrect: true, sentiment: "positive" },
      { text: "Slip out unnoticed", nextScene: "slip2_consequence", tag: "withdrawn", feedback: "Stay and witness.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Be Still",
    text: "The wonder is his alone.\nGive thanks.",
    choices: [
      { text: "Stay quiet and give thanks", nextScene: "wonder", tag: "faithful", feedback: "Your heart bows.", isCorrect: true, sentiment: "positive" },
    ],
  },
  slip2_consequence: {
    id: "slip2_consequence",
    title: "Witness It",
    text: "Stay. See what he has done.\nGive thanks.",
    choices: [
      { text: "Stay quiet and give thanks", nextScene: "wonder", tag: "faithful", feedback: "Joy fills the courtyard.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  wonder: {
    id: "wonder",
    title: "The First Sign",
    text: "The disciples look at Jesus.\nThey believe.",
    choices: [],
    isFinal: true,
  },
};
