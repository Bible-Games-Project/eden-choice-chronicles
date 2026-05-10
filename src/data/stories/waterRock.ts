import { StoryScene } from "@/data/stories/creation";

// WATER FROM THE ROCK — Exodus 17
// You ARE Moses. From thirst and complaint to God's provision at Horeb.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const waterRockScenes: Record<string, StoryScene> = {
  // ============ ACT I — THIRST ============
  start: {
    id: "start",
    title: "Wilderness of Rephidim",
    text: "The wells are dry. Lips crack with dust.\nThe people gather, eyes hot.",
    choices: [
      { text: "Scold them for weakness", nextScene: "scold_consequence", tag: "rash", feedback: "Their thirst is real.", isCorrect: false, sentiment: "negative" },
      { text: "Hear their thirst with patience", nextScene: "people_complain", tag: "humble", feedback: "You listen before you speak.", isCorrect: true, sentiment: "positive" },
      { text: "Pretend you do not see them", nextScene: "ignore_consequence", tag: "evasive", feedback: "A leader cannot turn away.", isCorrect: false, sentiment: "negative" },
    ],
  },
  scold_consequence: {
    id: "scold_consequence",
    title: "Mercy First",
    text: "Anger will not fill empty jars.\nTurn your ear to their cry.",
    choices: [
      { text: "Hear their thirst with patience", nextScene: "people_complain", tag: "humble", feedback: "Your face softens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "See Their Faces",
    text: "A shepherd does not hide from sheep.\nLook upon their suffering.",
    choices: [
      { text: "Hear their thirst with patience", nextScene: "people_complain", tag: "humble", feedback: "You step into their midst.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE COMPLAINT ============
  people_complain: {
    id: "people_complain",
    title: "\"Why Bring Us Here?\"",
    text: "\"Did you lead us out to die of thirst?\"\nStones rest in trembling hands.",
    choices: [
      { text: "Strike back in anger", nextScene: "strike_consequence", tag: "rash", feedback: "Wrath only deepens the wound.", isCorrect: false, sentiment: "negative" },
      { text: "Cry out to the Lord", nextScene: "moses_prays", tag: "faithful", feedback: "You lift the matter higher.", isCorrect: true, sentiment: "positive" },
    ],
  },
  strike_consequence: {
    id: "strike_consequence",
    title: "Not With Your Hand",
    text: "Their cry belongs before the Lord.\nLay it at His feet, not yours.",
    choices: [
      { text: "Cry out to the Lord", nextScene: "moses_prays", tag: "faithful", feedback: "You step apart to pray.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — MOSES SEEKS GOD ============
  moses_prays: {
    id: "moses_prays",
    title: "Alone on the Hill",
    text: "Wind moves over the silent slope.\nYou wait for His answer.",
    choices: [
      { text: "Demand water as your right", nextScene: "demand_consequence", tag: "prideful", feedback: "Mercy is His to give.", isCorrect: false, sentiment: "negative" },
      { text: "Lay their thirst before Him", nextScene: "god_speaks", tag: "humble", feedback: "He hears every cry.", isCorrect: true, sentiment: "positive" },
      { text: "Despair and turn back silent", nextScene: "despair_consequence", tag: "fearful", feedback: "He has not abandoned you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Ask, Do Not Demand",
    text: "Water falls only from open hands.\nKneel and bring their need.",
    choices: [
      { text: "Lay their thirst before Him", nextScene: "god_speaks", tag: "humble", feedback: "You bow your head low.", isCorrect: true, sentiment: "positive" },
    ],
  },
  despair_consequence: {
    id: "despair_consequence",
    title: "He Still Hears",
    text: "Your weakness is not the end.\nSpeak the people's pain to Him.",
    choices: [
      { text: "Lay their thirst before Him", nextScene: "god_speaks", tag: "humble", feedback: "Words rise from your heart.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE INSTRUCTION ============
  god_speaks: {
    id: "god_speaks",
    title: "\"Go to the Rock\"",
    text: "His voice is steady as the dawn:\n\"Strike the rock. Water will come.\"",
    choices: [
      { text: "Doubt the word and search for wells", nextScene: "doubt_consequence", tag: "fearful", feedback: "His promise needs no other path.", isCorrect: false, sentiment: "negative" },
      { text: "Take your staff and obey", nextScene: "approach_rock", tag: "obedient", feedback: "You grip the wood firmly.", isCorrect: true, sentiment: "positive" },
      { text: "Ask the elders to act for you", nextScene: "shift_consequence", tag: "evasive", feedback: "He spoke the word to you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust the Word",
    text: "The Lord does not speak in vain.\nGo where He has sent you.",
    choices: [
      { text: "Take your staff and obey", nextScene: "approach_rock", tag: "obedient", feedback: "Doubt falls from your hand.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shift_consequence: {
    id: "shift_consequence",
    title: "He Sent You",
    text: "Obedience cannot be passed on.\nThe staff is in your hand.",
    choices: [
      { text: "Take your staff and obey", nextScene: "approach_rock", tag: "obedient", feedback: "You step toward the rock.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE ROCK ============
  approach_rock: {
    id: "approach_rock",
    title: "Before the Stone",
    text: "The great rock stands silent and bare.\nThe camp watches from afar.",
    choices: [
      { text: "Boast you will draw the water", nextScene: "boast_consequence", tag: "prideful", feedback: "It is the Lord, not you.", isCorrect: false, sentiment: "negative" },
      { text: "Strike in His name as commanded", nextScene: "water_flows", tag: "faithful", feedback: "The staff falls true.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "His Glory, Not Yours",
    text: "The water will flow from heaven.\nLift His name above your own.",
    choices: [
      { text: "Strike in His name as commanded", nextScene: "water_flows", tag: "faithful", feedback: "Your heart bows first.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — WATER FROM THE ROCK ============
  water_flows: {
    id: "water_flows",
    title: "Living Water",
    text: "Stone splits. A clear stream rushes out.\nThe dry ground drinks first.",
    choices: [
      { text: "Hold the water back from the people", nextScene: "withhold_consequence", tag: "fearful", feedback: "It was given for them.", isCorrect: false, sentiment: "negative" },
      { text: "Call the people to come and drink", nextScene: "people_drink", tag: "obedient", feedback: "You wave them forward.", isCorrect: true, sentiment: "positive" },
    ],
  },
  withhold_consequence: {
    id: "withhold_consequence",
    title: "Open the Stream",
    text: "Mercy is for thirsty mouths.\nLet every soul come and drink.",
    choices: [
      { text: "Call the people to come and drink", nextScene: "people_drink", tag: "obedient", feedback: "Your voice carries far.", isCorrect: true, sentiment: "positive" },
    ],
  },

  people_drink: {
    id: "people_drink",
    title: "The Camp at the Spring",
    text: "Children laugh. Old hands tremble.\nClay jars fill to the brim.",
    choices: [
      { text: "Take the credit before them all", nextScene: "credit_consequence", tag: "prideful", feedback: "Glory belongs to Him alone.", isCorrect: false, sentiment: "negative" },
      { text: "Lift their eyes to the Lord", nextScene: "ending", tag: "humble", feedback: "\"This is His mercy,\" you say.", isCorrect: true, sentiment: "positive" },
      { text: "Walk away in silence", nextScene: "silent_consequence", tag: "evasive", feedback: "They must know who provided.", isCorrect: false, sentiment: "negative" },
    ],
  },
  credit_consequence: {
    id: "credit_consequence",
    title: "Name the True Source",
    text: "The stream is not from your hand.\nLet His name fill their mouths.",
    choices: [
      { text: "Lift their eyes to the Lord", nextScene: "ending", tag: "humble", feedback: "You point to the heavens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Tell of Him",
    text: "Mercy unspoken can be forgotten.\nName the One who gave the water.",
    choices: [
      { text: "Lift their eyes to the Lord", nextScene: "ending", tag: "humble", feedback: "The camp grows still to listen.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Massah and Meribah",
    text: "Where they doubted, He provided.\nThe rock still pours its mercy.",
    choices: [],
    isFinal: true,
  },
};
