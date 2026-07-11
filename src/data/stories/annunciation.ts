import { StoryScene } from "@/data/stories/creation";

// ANNUNCIATION TO MARY — Luke 1:26-38
// You ARE Mary. A humble girl chosen for a divine calling.

export const annunciationScenes: Record<string, StoryScene> = {
  // ACT I — A QUIET LIFE
  start: {
    id: "start",
    title: "Morning in Nazareth",
    text: "Dawn settles over your small home.\nYou begin the quiet work of the day.",
    choices: [
      { text: "Boast to the village", nextScene: "boast_consequence", tag: "proud", feedback: "Your heart was made for stillness.", isCorrect: false, sentiment: "negative" },
      { text: "Pray in silence", nextScene: "gabriel", tag: "faithful", feedback: "Luke 1:28 — The angel Gabriel appeared to Mary while she was at home.", isCorrect: true, sentiment: "positive" },
      { text: "Wander to the market", nextScene: "wander_consequence", tag: "distracted", feedback: "Something deeper waits for you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Return to Stillness",
    text: "The village holds no answer for you.\nGo home and quiet your heart.",
    choices: [
      { text: "Pray in silence", nextScene: "gabriel", tag: "faithful", feedback: "You sit and listen.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wander_consequence: {
    id: "wander_consequence",
    title: "A Pull Within",
    text: "Even among the crowd, your heart feels called.\nReturn to your room.",
    choices: [
      { text: "Pray in silence", nextScene: "gabriel", tag: "faithful", feedback: "You walk back in peace.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE VISITATION
  gabriel: {
    id: "gabriel",
    title: "A Light at the Door",
    text: "A radiant figure stands before you.\n\"Hail, favored one. The Lord is with you.\"",
    choices: [
      { text: "Flee in terror", nextScene: "flee_consequence", tag: "fearful", feedback: "His light still finds you.", isCorrect: false, sentiment: "negative" },
      { text: "Demand a sign of power", nextScene: "demand_consequence", tag: "proud", feedback: "He is the sign.", isCorrect: false, sentiment: "negative" },
      { text: "Stay and listen quietly", nextScene: "ponder", tag: "faithful", feedback: "Luke 1:29 — Mary was greatly troubled at the angel's words and wondered what kind of greeting this might be.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Do Not Be Afraid",
    text: "His voice is gentle as morning.\n\"Do not be afraid, Mary.\"",
    choices: [
      { text: "Stay and listen quietly", nextScene: "ponder", tag: "faithful", feedback: "Your breath steadies.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Lay Down Your Pride",
    text: "Heaven owes you nothing, yet offers everything.\nReceive in humility.",
    choices: [
      { text: "Stay and listen quietly", nextScene: "ponder", tag: "faithful", feedback: "You bow your gaze.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE PROMISE
  ponder: {
    id: "ponder",
    title: "What Greeting Is This?",
    text: "His words trouble your young heart.\nWhat could such favor mean?",
    choices: [
      { text: "Wait for him to speak", nextScene: "announce", tag: "faithful", feedback: "Luke 1:30 — The angel continued to speak, telling Mary not to be afraid.", isCorrect: true, sentiment: "positive" },
      { text: "Send him away", nextScene: "sendaway_consequence", tag: "fearful", feedback: "Heaven is not so easily turned.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sendaway_consequence: {
    id: "sendaway_consequence",
    title: "He Remains",
    text: "The angel does not move.\nHis message is not yours to refuse.",
    choices: [
      { text: "Wait for him to speak", nextScene: "announce", tag: "faithful", feedback: "You fold your hands and wait.", isCorrect: true, sentiment: "positive" },
    ],
  },

  announce: {
    id: "announce",
    title: "You Will Bear a Son",
    text: "\"You will conceive and bear a son.\nCall his name Jesus. He will be great.\"",
    choices: [
      { text: "Doubt — how can this be?", nextScene: "question", tag: "honest", feedback: "Luke 1:34 — Mary asked the angel, \"How will this be, since I am a virgin?\"", isCorrect: true, sentiment: "positive" },
      { text: "Refuse the calling", nextScene: "refuse_consequence", tag: "fearful", feedback: "Fear closes what grace opens.", isCorrect: false, sentiment: "negative" },
      { text: "Demand wealth in return", nextScene: "wealth_consequence", tag: "proud", feedback: "This gift is not for sale.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Listen Once More",
    text: "His eyes are gentle, not forceful.\nLet your honest heart speak.",
    choices: [
      { text: "Doubt — how can this be?", nextScene: "question", tag: "honest", feedback: "You find your voice.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wealth_consequence: {
    id: "wealth_consequence",
    title: "Treasures Above",
    text: "No coin can hold this promise.\nAsk what truly burdens you.",
    choices: [
      { text: "Doubt — how can this be?", nextScene: "question", tag: "honest", feedback: "Your true question rises.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE ANSWER
  question: {
    id: "question",
    title: "How Can This Be?",
    text: "\"The Holy Spirit will come upon you.\nNothing is impossible with God.\"",
    choices: [
      { text: "Hide the news from all", nextScene: "hide_consequence", tag: "fearful", feedback: "Some things cannot stay hidden.", isCorrect: false, sentiment: "negative" },
      { text: "Say: let it be unto me", nextScene: "accept", tag: "faithful", feedback: "Luke 1:38 — Mary responded, \"Behold, I am the servant of the Lord; let it be to me according to your word.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Open Your Heart",
    text: "Silence cannot carry this child.\nGive your full answer now.",
    choices: [
      { text: "Say: let it be unto me", nextScene: "accept", tag: "faithful", feedback: "You open your hands.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — FIAT
  accept: {
    id: "accept",
    title: "Let It Be",
    text: "\"Behold, I am the servant of the Lord.\nLet it be unto me as you have said.\"",
    choices: [],
    isFinal: true,
  },
};
