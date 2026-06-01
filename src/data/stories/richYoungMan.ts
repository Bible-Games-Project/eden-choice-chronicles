import { StoryScene } from "@/data/stories/creation";

// RICH YOUNG MAN — Mark 10:17-27
// You are a wealthy young man seeking eternal life.

export const richYoungManScenes: Record<string, StoryScene> = {
  // ACT I — APPROACH
  start: {
    id: "start",
    title: "A Question Burns",
    text: "You see Jesus on the road.\nA question burns inside you.",
    choices: [
      { text: "Run past, too proud to ask", nextScene: "pride_consequence", tag: "doubtful", feedback: "Pride silences the soul.", isCorrect: false, sentiment: "negative" },
      { text: "Hurry forward to meet him", nextScene: "eternal_life", tag: "faithful", feedback: "Your heart leads you on.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pride_consequence: {
    id: "pride_consequence",
    title: "Do Not Walk On",
    text: "The question will not leave you.\nGo and ask him.",
    choices: [
      { text: "Hurry forward to meet him", nextScene: "eternal_life", tag: "faithful", feedback: "You turn back at once.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE QUESTION
  eternal_life: {
    id: "eternal_life",
    title: "Good Teacher",
    text: "You kneel. \"What must I do\nto inherit eternal life?\"",
    choices: [
      { text: "Demand a quick answer now", nextScene: "demand_consequence", tag: "doubtful", feedback: "Truth is not bought with haste.", isCorrect: false, sentiment: "negative" },
      { text: "Wait humbly for his words", nextScene: "commandments", tag: "faithful", feedback: "He looks at you kindly.", isCorrect: true, sentiment: "positive" },
      { text: "Boast of your good deeds first", nextScene: "boast_consequence", tag: "fearful", feedback: "Listen before you speak.", isCorrect: false, sentiment: "negative" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Be Still",
    text: "Eternal things ask quiet hearts.\nWait and listen.",
    choices: [
      { text: "Wait humbly for his words", nextScene: "commandments", tag: "faithful", feedback: "You grow still.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Listen First",
    text: "Boasting closes the ear.\nLet him speak.",
    choices: [
      { text: "Wait humbly for his words", nextScene: "commandments", tag: "faithful", feedback: "You lower your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE COMMANDMENTS
  commandments: {
    id: "commandments",
    title: "You Know Them",
    text: "\"Do not kill, steal, or lie.\nHonor your father and mother.\"",
    choices: [
      { text: "Receive each word with care", nextScene: "claim", tag: "faithful", feedback: "The old words feel new.", isCorrect: true, sentiment: "positive" },
      { text: "Brush them off as too easy", nextScene: "easy_consequence", tag: "doubtful", feedback: "Do not pass them by.", isCorrect: false, sentiment: "negative" },
    ],
  },
  easy_consequence: {
    id: "easy_consequence",
    title: "Weigh Them",
    text: "The commandments are not small.\nReceive them again.",
    choices: [
      { text: "Receive each word with care", nextScene: "claim", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE CLAIM
  claim: {
    id: "claim",
    title: "All My Life",
    text: "\"All these I have kept\nsince I was a boy.\"",
    choices: [
      { text: "Lie about your hidden sins", nextScene: "lie_consequence", tag: "doubtful", feedback: "Do not deceive yourself.", isCorrect: false, sentiment: "negative" },
      { text: "Speak honest, with open heart", nextScene: "challenge", tag: "faithful", feedback: "He looks at you and loves you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "Be Honest",
    text: "He sees the corners of your soul.\nSpeak the truth.",
    choices: [
      { text: "Speak honest, with open heart", nextScene: "challenge", tag: "faithful", feedback: "Honesty steadies you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE CHALLENGE
  challenge: {
    id: "challenge",
    title: "One Thing You Lack",
    text: "\"Sell what you own, give to\nthe poor, and follow me.\"",
    choices: [
      { text: "Argue that wealth is a gift", nextScene: "argue_consequence", tag: "doubtful", feedback: "Gifts are meant to be shared.", isCorrect: false, sentiment: "negative" },
      { text: "Promise just a small portion", nextScene: "bargain_consequence", tag: "fearful", feedback: "He asked for all of you.", isCorrect: false, sentiment: "negative" },
      { text: "Sit with the weight of his words", nextScene: "conflict", tag: "faithful", feedback: "The words sink deep.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Do Not Argue",
    text: "He is not asking to take.\nHe is offering freedom.",
    choices: [
      { text: "Sit with the weight of his words", nextScene: "conflict", tag: "faithful", feedback: "You grow quiet.", isCorrect: true, sentiment: "positive" },
    ],
  },
  bargain_consequence: {
    id: "bargain_consequence",
    title: "All, Not Some",
    text: "Half a heart cannot follow him.\nHe asks for all.",
    choices: [
      { text: "Sit with the weight of his words", nextScene: "conflict", tag: "faithful", feedback: "You stop bargaining.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — INNER CONFLICT
  conflict: {
    id: "conflict",
    title: "The Heart Weighs",
    text: "Your gold feels heavy in your hand.\nYour soul feels heavier.",
    choices: [
      { text: "Open your hands to let go", nextScene: "surrender_path", tag: "faithful", feedback: "Surrender feels close.", isCorrect: true, sentiment: "positive" },
      { text: "Clutch your wealth even tighter", nextScene: "walk_away", tag: "fearful", feedback: "Your hand will not open.", isCorrect: false, sentiment: "negative" },
    ],
  },
  surrender_path: {
    id: "surrender_path",
    title: "Almost",
    text: "You almost let go.\nBut the weight is too great.",
    choices: [
      { text: "Step toward him anyway", nextScene: "walk_away", tag: "faithful", feedback: "Your feet betray your heart.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — WALKING AWAY
  walk_away: {
    id: "walk_away",
    title: "Sorrowful",
    text: "You turn away, deeply sad.\nYour wealth holds you back.",
    choices: [
      { text: "Run back and follow him", nextScene: "teaching", tag: "faithful", feedback: "Even sorrow can teach.", isCorrect: true, sentiment: "positive" },
      { text: "Keep walking and forget him", nextScene: "forget_consequence", tag: "fearful", feedback: "Do not bury this moment.", isCorrect: false, sentiment: "negative" },
    ],
  },
  forget_consequence: {
    id: "forget_consequence",
    title: "Do Not Forget",
    text: "His eyes still find you.\nRemember what you felt.",
    choices: [
      { text: "Carry his words in your heart", nextScene: "teaching", tag: "faithful", feedback: "You pause on the road.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — TEACHING ABOUT RICHES
  teaching: {
    id: "teaching",
    title: "Hard for the Rich",
    text: "\"How hard for the rich\nto enter the kingdom of God.\"",
    choices: [
      { text: "Despair, for who can be saved?", nextScene: "despair_consequence", tag: "fearful", feedback: "Hope is not lost.", isCorrect: false, sentiment: "negative" },
      { text: "Trust that all is possible with God", nextScene: "ending", tag: "faithful", feedback: "Grace makes a way.", isCorrect: true, sentiment: "positive" },
    ],
  },
  despair_consequence: {
    id: "despair_consequence",
    title: "With God",
    text: "What is impossible for us\nis possible with God.",
    choices: [
      { text: "Trust that all is possible with God", nextScene: "ending", tag: "faithful", feedback: "Hope returns.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "With God, All Things",
    text: "What riches could not buy,\ngrace freely gives.",
    choices: [],
    isFinal: true,
  },
};
