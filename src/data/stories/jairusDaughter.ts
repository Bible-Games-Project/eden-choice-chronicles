import { StoryScene } from "@/data/stories/creation";

// JAIRUS' DAUGHTER — Mark 5:21-43 / Luke 8:40-56
// You are Jairus, a synagogue leader whose daughter is dying.

export const jairusDaughterScenes: Record<string, StoryScene> = {
  // ACT I — THE PLEA
  start: {
    id: "start",
    title: "By the Shore",
    text: "The Teacher steps from the boat.\nYour daughter is dying at home.",
    choices: [
      { text: "Send a servant instead", nextScene: "servant_consequence", tag: "fearful", feedback: "Go to him yourself.", isCorrect: false, sentiment: "negative" },
      { text: "Hide your need from him", nextScene: "hide_consequence", tag: "doubtful", feedback: "He came for the broken.", isCorrect: false, sentiment: "negative" },
      { text: "Fall at his feet, beg", nextScene: "plea", tag: "faithful", feedback: "Matthew 9:18 — Jairus fell at Jesus' feet and implored him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  servant_consequence: {
    id: "servant_consequence",
    title: "Go Yourself",
    text: "No one else can carry your hope.\nKneel before him.",
    choices: [
      { text: "Fall at his feet, beg", nextScene: "plea", tag: "faithful", feedback: "You bow low.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Open Your Heart",
    text: "He already sees your sorrow.\nSpeak it aloud.",
    choices: [
      { text: "Fall at his feet, beg", nextScene: "plea", tag: "faithful", feedback: "Tears fall.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE JOURNEY
  plea: {
    id: "plea",
    title: "Come, Lay Your Hand",
    text: "\"My little daughter is dying.\nCome, and she will live.\"",
    choices: [
      { text: "Walk with him through town", nextScene: "journey", tag: "faithful", feedback: "He comes with you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  journey: {
    id: "journey",
    title: "Through the Crowd",
    text: "Streets press tight. He stops walking.\nMinutes feel like years.",
    choices: [
      { text: "Push him to hurry", nextScene: "push_consequence", tag: "fearful", feedback: "Trust his timing.", isCorrect: false, sentiment: "negative" },
      { text: "Wait beside him quietly", nextScene: "news", tag: "faithful", feedback: "Mark 5:35 — Jairus was still with Jesus when messengers arrived.", isCorrect: true, sentiment: "positive" },
    ],
  },
  push_consequence: {
    id: "push_consequence",
    title: "He Knows the Hour",
    text: "His pace is mercy, not delay.\nStand close.",
    choices: [
      { text: "Wait beside him quietly", nextScene: "news", tag: "faithful", feedback: "Peace settles.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE NEWS
  news: {
    id: "news",
    title: "She Is Dead",
    text: "A servant arrives, eyes wet.\n\"Trouble the Teacher no more.\"",
    choices: [
      { text: "Turn away in despair", nextScene: "despair_consequence", tag: "fearful", feedback: "Do not be afraid.", isCorrect: false, sentiment: "negative" },
      { text: "Believe, even now", nextScene: "encourage", tag: "faithful", feedback: "Mark 5:36 — Jesus told Jairus, \"Do not fear, only believe.\"", isCorrect: true, sentiment: "positive" },
      { text: "Blame him for delay", nextScene: "blame_consequence", tag: "doubtful", feedback: "He is not finished.", isCorrect: false, sentiment: "negative" },
    ],
  },
  despair_consequence: {
    id: "despair_consequence",
    title: "Only Believe",
    text: "His voice steadies your knees.\n\"Do not fear. Only believe.\"",
    choices: [
      { text: "Believe, even now", nextScene: "encourage", tag: "faithful", feedback: "Faith rises.", isCorrect: true, sentiment: "positive" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "He Hears You",
    text: "His eyes hold no offense.\nOnly invitation.",
    choices: [
      { text: "Believe, even now", nextScene: "encourage", tag: "faithful", feedback: "You nod.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — ENCOURAGEMENT
  encourage: {
    id: "encourage",
    title: "Do Not Fear",
    text: "\"Do not be afraid. Only believe.\"\nHis hand rests on your shoulder.",
    choices: [
      { text: "Lead him to the house", nextScene: "room", tag: "faithful", feedback: "Each step is faith.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE ROOM
  room: {
    id: "room",
    title: "The Quiet Room",
    text: "Mourners wail. He sends them out.\n\"She is only sleeping.\"",
    choices: [
      { text: "Argue with his words", nextScene: "argue_consequence", tag: "doubtful", feedback: "Watch and see.", isCorrect: false, sentiment: "negative" },
      { text: "Stay close and trust", nextScene: "raise", tag: "faithful", feedback: "Mark 5:40 — Peter, James, and John, along with Jairus and his wife, were the only ones permitted to enter the room with Jesus.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Be Still",
    text: "His calm answers your doubt.\nWatch him.",
    choices: [
      { text: "Stay close and trust", nextScene: "raise", tag: "faithful", feedback: "You step nearer.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE RAISING
  raise: {
    id: "raise",
    title: "Talitha Koum",
    text: "He takes her small hand.\n\"Little girl, I say, arise.\"",
    choices: [
      { text: "Watch in silent awe", nextScene: "joy", tag: "faithful", feedback: "Her eyes open.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  joy: {
    id: "joy",
    title: "She Rises",
    text: "She sits up, breathing, smiling.\nHe says, \"Give her something to eat.\"",
    choices: [],
    isFinal: true,
  },
};
