import { StoryScene } from "@/data/stories/creation";

// CALMING THE STORM — Mark 4 / Matthew 8 / Luke 8
// You are a disciple crossing the sea with Jesus.

export const calmingStormScenes: Record<string, StoryScene> = {
  // ACT I — SETTING OUT
  start: {
    id: "start",
    title: "Setting Out",
    text: "Evening falls on the sea.\nJesus says, \"Let us cross over.\"",
    choices: [
      { text: "Refuse, it grows dark", nextScene: "refuse_consequence", tag: "fearful", feedback: "Trust his word.", isCorrect: false, sentiment: "negative" },
      { text: "Push the boat to water", nextScene: "storm", tag: "faithful", feedback: "Mark 4:36 — The disciples took Jesus along with them in the boat as he was, just as they had been sailing.", isCorrect: true, sentiment: "positive" },
      { text: "Wait for morning", nextScene: "wait_consequence", tag: "fearful", feedback: "He calls you now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Follow His Word",
    text: "His call is for tonight.\nGo with him.",
    choices: [
      { text: "Push the boat to water", nextScene: "storm", tag: "faithful", feedback: "You obey.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Trust Him Now",
    text: "He waits at the shore.\nDelay nothing.",
    choices: [
      { text: "Push the boat to water", nextScene: "storm", tag: "faithful", feedback: "You set sail.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE STORM RISES
  storm: {
    id: "storm",
    title: "The Sea Rises",
    text: "Wind tears the sail.\nWaves crash into the boat.",
    choices: [
      { text: "Curse the wind", nextScene: "curse_consequence", tag: "fearful", feedback: "Anger will not save you.", isCorrect: false, sentiment: "negative" },
      { text: "Row with all your strength", nextScene: "sleep", tag: "faithful", feedback: "Mark 4:37 — A great windstorm arose, and the waves were breaking into the boat, so that the boat was already filling.", isCorrect: true, sentiment: "positive" },
      { text: "Leap into the sea", nextScene: "leap_consequence", tag: "fearful", feedback: "Stay in the boat.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Hold Steady",
    text: "Cursing will not still the storm.\nRow with the others.",
    choices: [
      { text: "Row with all your strength", nextScene: "sleep", tag: "faithful", feedback: "You grip the oar.", isCorrect: true, sentiment: "positive" },
    ],
  },
  leap_consequence: {
    id: "leap_consequence",
    title: "Stay With Him",
    text: "The sea would swallow you.\nReturn to the boat.",
    choices: [
      { text: "Row with all your strength", nextScene: "sleep", tag: "faithful", feedback: "You hold fast.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — JESUS SLEEPS
  sleep: {
    id: "sleep",
    title: "He Sleeps",
    text: "Jesus sleeps in the stern.\nThe storm grows fiercer.",
    choices: [
      { text: "Let him sleep, panic alone", nextScene: "alone_consequence", tag: "doubtful", feedback: "He is your help.", isCorrect: false, sentiment: "negative" },
      { text: "Wake him with a cry", nextScene: "wake", tag: "faithful", feedback: "Mark 4:38 — The disciples woke Jesus, saying to him, \"Teacher, do you not care that we are perishing?\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  alone_consequence: {
    id: "alone_consequence",
    title: "Go To Him",
    text: "You cannot save the boat alone.\nWake your Lord.",
    choices: [
      { text: "Wake him with a cry", nextScene: "wake", tag: "faithful", feedback: "You shake him gently.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — WAKING HIM
  wake: {
    id: "wake",
    title: "Wake Him",
    text: "What will you say?\nThe water rises fast.",
    choices: [
      { text: "Blame him for the storm", nextScene: "blame_consequence", tag: "doubtful", feedback: "Speak from need.", isCorrect: false, sentiment: "negative" },
      { text: "\"Lord, save us, we perish!\"", nextScene: "calm", tag: "faithful", feedback: "Matthew 8:25 — The disciples went and woke Jesus, saying, \"Lord, save us! We are going to drown!\"", isCorrect: true, sentiment: "positive" },
      { text: "Stay silent in fear", nextScene: "silent_consequence", tag: "fearful", feedback: "Cry out to him.", isCorrect: false, sentiment: "negative" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Ask, Don't Blame",
    text: "He is not your enemy.\nAsk him to save you.",
    choices: [
      { text: "\"Lord, save us, we perish!\"", nextScene: "calm", tag: "faithful", feedback: "He rises calmly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Cry To Him",
    text: "Silence will not still the sea.\nSpeak.",
    choices: [
      { text: "\"Lord, save us, we perish!\"", nextScene: "calm", tag: "faithful", feedback: "He hears you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — PEACE BE STILL
  calm: {
    id: "calm",
    title: "Peace, Be Still",
    text: "He stands and lifts his hand.\n\"Peace. Be still.\"",
    choices: [
      { text: "Doubt what you saw", nextScene: "doubt_consequence", tag: "doubtful", feedback: "Open your eyes.", isCorrect: false, sentiment: "negative" },
      { text: "Stand in trembling awe", nextScene: "amaze", tag: "faithful", feedback: "Mark 4:41 — The disciples were filled with great fear and said to one another, \"Who then is this, that even the wind and the sea obey him?\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "See and Believe",
    text: "The sea is glass.\nLet awe fill you.",
    choices: [
      { text: "Stand in trembling awe", nextScene: "amaze", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — AMAZEMENT
  amaze: {
    id: "amaze",
    title: "Who Is This?",
    text: "The sea is still.\n\"Even the wind obeys him.\"",
    choices: [],
    isFinal: true,
  },
};
