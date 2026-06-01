import { StoryScene } from "@/data/stories/creation";

// PARABLE OF THE SOWER — Matthew 13:1-23
// You sit by the sea and listen to Jesus tell the parable, then follow the sower.

export const parableSowerScenes: Record<string, StoryScene> = {
  // ACT I — JESUS BY THE SEA
  start: {
    id: "start",
    title: "By the Sea",
    text: "Jesus sits by the lake.\n\"Listen. A sower went out to sow.\"",
    choices: [
      { text: "Drift off in your thoughts", nextScene: "drift_consequence", tag: "doubtful", feedback: "Stay. The seed is for you.", isCorrect: false, sentiment: "negative" },
      { text: "Lean in and listen closely", nextScene: "sower", tag: "faithful", feedback: "His voice softens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  drift_consequence: {
    id: "drift_consequence",
    title: "Return to Him",
    text: "A wandering heart hears nothing.\nCome back to the words.",
    choices: [
      { text: "Lean in and listen closely", nextScene: "sower", tag: "faithful", feedback: "Your attention returns.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE SOWER GOES OUT
  sower: {
    id: "sower",
    title: "The Sower",
    text: "A farmer walks the field,\nscattering seed with open hand.",
    choices: [
      { text: "Watch where each seed lands", nextScene: "path", tag: "faithful", feedback: "Your eyes follow the seed.", isCorrect: true, sentiment: "positive" },
      { text: "Decide the parable is dull", nextScene: "dull_consequence", tag: "doubtful", feedback: "Small things hide great truth.", isCorrect: false, sentiment: "negative" },
    ],
  },
  dull_consequence: {
    id: "dull_consequence",
    title: "Look Again",
    text: "Heaven hides in small things.\nWatch the seed once more.",
    choices: [
      { text: "Watch where each seed lands", nextScene: "path", tag: "faithful", feedback: "You look again.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — SEED ON THE PATH
  path: {
    id: "path",
    title: "On the Path",
    text: "Some seed falls on the hard path.\nBirds swoop down and take it away.",
    choices: [
      { text: "Blame the careless sower", nextScene: "blame_consequence", tag: "doubtful", feedback: "The sower scatters freely.", isCorrect: false, sentiment: "negative" },
      { text: "Ask why your heart is hard", nextScene: "rocky", tag: "faithful", feedback: "A quiet ache rises.", isCorrect: true, sentiment: "positive" },
      { text: "Shrug, it is only a seed", nextScene: "shrug_consequence", tag: "fearful", feedback: "Each seed is a whole word.", isCorrect: false, sentiment: "negative" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Not His Fault",
    text: "He gives the same seed to all.\nThe ground decides.",
    choices: [
      { text: "Ask why your heart is hard", nextScene: "rocky", tag: "faithful", feedback: "You look inward.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shrug_consequence: {
    id: "shrug_consequence",
    title: "Each Word Matters",
    text: "One word can change a life.\nDo not let it be stolen.",
    choices: [
      { text: "Ask why your heart is hard", nextScene: "rocky", tag: "faithful", feedback: "Your shrug fades.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — SEED ON ROCKY GROUND
  rocky: {
    id: "rocky",
    title: "On the Rocks",
    text: "Some seed springs up quickly,\nbut the sun burns its shallow roots.",
    choices: [
      { text: "Trust only when life is easy", nextScene: "easy_consequence", tag: "fearful", feedback: "Roots grow in hard seasons.", isCorrect: false, sentiment: "negative" },
      { text: "Pray for roots that go deep", nextScene: "thorns", tag: "faithful", feedback: "You ask for hidden strength.", isCorrect: true, sentiment: "positive" },
    ],
  },
  easy_consequence: {
    id: "easy_consequence",
    title: "Roots Grow Down",
    text: "Joy that fears the sun is shallow.\nAsk for what lasts.",
    choices: [
      { text: "Pray for roots that go deep", nextScene: "thorns", tag: "faithful", feedback: "Your prayer steadies.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — SEED AMONG THORNS
  thorns: {
    id: "thorns",
    title: "Among Thorns",
    text: "Other seed grows beside thorns.\nWorry and riches choke it out.",
    choices: [
      { text: "Hold tighter to your worries", nextScene: "worry_consequence", tag: "fearful", feedback: "Worry strangles the seed.", isCorrect: false, sentiment: "negative" },
      { text: "Cling harder to your wealth", nextScene: "wealth_consequence", tag: "doubtful", feedback: "Riches steal the light.", isCorrect: false, sentiment: "negative" },
      { text: "Let the thorns go from your heart", nextScene: "good_soil", tag: "faithful", feedback: "Your hands unclench.", isCorrect: true, sentiment: "positive" },
    ],
  },
  worry_consequence: {
    id: "worry_consequence",
    title: "Lay It Down",
    text: "Worry is a weed in the soul.\nGive it to the One who sows.",
    choices: [
      { text: "Let the thorns go from your heart", nextScene: "good_soil", tag: "faithful", feedback: "A weight lifts.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wealth_consequence: {
    id: "wealth_consequence",
    title: "Open Your Hand",
    text: "A closed fist holds no seed.\nLet the soil breathe.",
    choices: [
      { text: "Let the thorns go from your heart", nextScene: "good_soil", tag: "faithful", feedback: "Your grip eases.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — SEED ON GOOD SOIL
  good_soil: {
    id: "good_soil",
    title: "On Good Soil",
    text: "Other seed falls on willing ground\nand bears thirty, sixty, a hundredfold.",
    choices: [
      { text: "Take the harvest for yourself", nextScene: "selfish_consequence", tag: "doubtful", feedback: "The harvest is to share.", isCorrect: false, sentiment: "negative" },
      { text: "Receive the word and grow with it", nextScene: "disciples", tag: "faithful", feedback: "Your heart opens wide.", isCorrect: true, sentiment: "positive" },
    ],
  },
  selfish_consequence: {
    id: "selfish_consequence",
    title: "Share the Grain",
    text: "Good soil never keeps its bread.\nIt feeds the hungry world.",
    choices: [
      { text: "Receive the word and grow with it", nextScene: "disciples", tag: "faithful", feedback: "You loosen your hold.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — DISCIPLES ASK FOR MEANING
  disciples: {
    id: "disciples",
    title: "What Does It Mean?",
    text: "The disciples come close and ask,\n\"Teacher, tell us the meaning.\"",
    choices: [
      { text: "Walk away, sure you know", nextScene: "sure_consequence", tag: "doubtful", feedback: "Stay. You do not know yet.", isCorrect: false, sentiment: "negative" },
      { text: "Sit with them and wait", nextScene: "ending", tag: "faithful", feedback: "You sit at his feet.", isCorrect: true, sentiment: "positive" },
    ],
  },
  sure_consequence: {
    id: "sure_consequence",
    title: "Stay and Learn",
    text: "Pride is the hardest path.\nKneel with the rest.",
    choices: [
      { text: "Sit with them and wait", nextScene: "ending", tag: "faithful", feedback: "Your pride softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — THE MEANING
  ending: {
    id: "ending",
    title: "What Soil Are You?",
    text: "Jesus looks at you and smiles.\n\"The seed is the word. You are the ground.\"",
    choices: [],
    isFinal: true,
  },
};
