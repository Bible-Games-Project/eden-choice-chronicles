import { StoryScene } from "@/data/stories/creation";

// DEBATES WITH PHARISEES — Matthew 22, Mark 12, Luke 20
// You stand with Jesus as Pharisees try to trap him with questions.

export const debatesPhariseesScenes: Record<string, StoryScene> = {
  // ACT I — APPROACH
  start: {
    id: "start",
    title: "They Come With Questions",
    text: "Pharisees draw near in the temple.\nTheir eyes are sharp.",
    choices: [
      { text: "Stand calmly beside Jesus", nextScene: "trap_question", tag: "faithful", feedback: "Matthew 22:15-16 — The Pharisees sent their disciples to Jesus, along with the Herodians, to try and trap him in his words.", isCorrect: true, sentiment: "positive" },
      { text: "Run and hide from them", nextScene: "hide_consequence", tag: "fearful", feedback: "Do not flee from honest light.", isCorrect: false, sentiment: "negative" },
      { text: "Shout insults to scare them", nextScene: "insult_consequence", tag: "doubtful", feedback: "Anger is not the answer.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Do Not Hide",
    text: "Truth does not run.\nStand and listen.",
    choices: [
      { text: "Stand calmly beside Jesus", nextScene: "trap_question", tag: "faithful", feedback: "You take your place.", isCorrect: true, sentiment: "positive" },
    ],
  },
  insult_consequence: {
    id: "insult_consequence",
    title: "Lower Your Voice",
    text: "Wisdom answers without shouting.\nBe still.",
    choices: [
      { text: "Stand calmly beside Jesus", nextScene: "trap_question", tag: "faithful", feedback: "You quiet down.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE TRAP
  trap_question: {
    id: "trap_question",
    title: "Is It Lawful?",
    text: "\"Is it lawful to pay tax\nto Caesar, or not?\"",
    choices: [
      { text: "Shout that taxes are evil", nextScene: "shout_consequence", tag: "doubtful", feedback: "The trap closes on quick answers.", isCorrect: false, sentiment: "negative" },
      { text: "Watch Jesus answer in wisdom", nextScene: "coin", tag: "faithful", feedback: "Matthew 22:17 — The Pharisees asked Jesus if it was lawful to pay taxes to Caesar.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Wait and Watch",
    text: "Loud words feed the trap.\nLet wisdom speak.",
    choices: [
      { text: "Watch Jesus answer in wisdom", nextScene: "coin", tag: "faithful", feedback: "You hold your peace.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE COIN
  coin: {
    id: "coin",
    title: "Whose Image?",
    text: "He lifts a coin. \"Whose face\nand name are on this?\"",
    choices: [
      { text: "Refuse to even look at it", nextScene: "refuse_consequence", tag: "fearful", feedback: "Look closely, hear closely.", isCorrect: false, sentiment: "negative" },
      { text: "Lie that the coin is yours", nextScene: "lie_consequence", tag: "doubtful", feedback: "Truth is the only path.", isCorrect: false, sentiment: "negative" },
      { text: "Answer honest: \"Caesar's.\"", nextScene: "authority", tag: "faithful", feedback: "Matthew 22:20-21 — Jesus asked whose image and inscription were on the coin, and they replied, \"Caesar's.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "See and Hear",
    text: "You cannot answer with closed eyes.\nLook again.",
    choices: [
      { text: "Answer honest: \"Caesar's.\"", nextScene: "authority", tag: "faithful", feedback: "You speak truth.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "Speak True",
    text: "Lies will not silence them.\nOnly truth will.",
    choices: [
      { text: "Answer honest: \"Caesar's.\"", nextScene: "authority", tag: "faithful", feedback: "Honesty steadies you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — AUTHORITY
  authority: {
    id: "authority",
    title: "Render to God",
    text: "\"Give Caesar what is his,\nand God what is God's.\"",
    choices: [
      { text: "Mock the wisdom as too clever", nextScene: "mock_consequence", tag: "doubtful", feedback: "Wisdom is not for mocking.", isCorrect: false, sentiment: "negative" },
      { text: "Marvel at the clean answer", nextScene: "greatest_commandment", tag: "faithful", feedback: "Matthew 22:21 — Jesus told them to render to Caesar what is Caesar's, and to God what is God's.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Honor the Truth",
    text: "What you mock you cannot learn.\nReceive it.",
    choices: [
      { text: "Marvel at the clean answer", nextScene: "greatest_commandment", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE GREATEST COMMANDMENT
  greatest_commandment: {
    id: "greatest_commandment",
    title: "Which Is Greatest?",
    text: "\"Teacher, which commandment\nin the law is greatest?\"",
    choices: [
      { text: "Guess the food and feast laws", nextScene: "guess_consequence", tag: "doubtful", feedback: "Those are not the heart.", isCorrect: false, sentiment: "negative" },
      { text: "Listen for love of God and man", nextScene: "hypocrisy", tag: "faithful", feedback: "Matthew 22:37-39 — Jesus stated that the greatest commandment is to love the Lord your God with all your heart, soul, and mind, and the second is to love your neighbor as yourself.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse to listen at all", nextScene: "deaf_consequence", tag: "fearful", feedback: "Open your ears.", isCorrect: false, sentiment: "negative" },
    ],
  },
  guess_consequence: {
    id: "guess_consequence",
    title: "Listen Deeper",
    text: "The greatest is not a small rule.\nIt is love.",
    choices: [
      { text: "Listen for love of God and man", nextScene: "hypocrisy", tag: "faithful", feedback: "You hear it now.", isCorrect: true, sentiment: "positive" },
    ],
  },
  deaf_consequence: {
    id: "deaf_consequence",
    title: "Hear Him",
    text: "Truth knocks gently.\nLet it in.",
    choices: [
      { text: "Listen for love of God and man", nextScene: "hypocrisy", tag: "faithful", feedback: "Your ears open.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — HYPOCRISY EXPOSED
  hypocrisy: {
    id: "hypocrisy",
    title: "Outside Clean",
    text: "\"You wash the cup outside,\nbut inside you are full of pride.\"",
    choices: [
      { text: "Defend the proud men's honor", nextScene: "defend_consequence", tag: "doubtful", feedback: "Do not shield false hearts.", isCorrect: false, sentiment: "negative" },
      { text: "Search your own heart honestly", nextScene: "crowd_amazed", tag: "faithful", feedback: "Matthew 23:25-28 — Jesus criticized the Pharisees for cleaning the outside of the cup and dish, while inside they were full of greed and self-indulgence, comparing them to whitewashed tombs.", isCorrect: true, sentiment: "positive" },
    ],
  },
  defend_consequence: {
    id: "defend_consequence",
    title: "Look Within",
    text: "He speaks to your heart, too.\nReceive the mirror.",
    choices: [
      { text: "Search your own heart honestly", nextScene: "crowd_amazed", tag: "faithful", feedback: "You look inside.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — THE CROWD MARVELS
  crowd_amazed: {
    id: "crowd_amazed",
    title: "They Marvel",
    text: "The crowd stands still in wonder.\nNo one can trap him.",
    choices: [
      { text: "Stay silent in awe with them", nextScene: "truth_remains", tag: "faithful", feedback: "Matthew 22:33 — When the crowds heard Jesus' answers, they were astonished at his teaching.", isCorrect: true, sentiment: "positive" },
      { text: "Boast that you knew all along", nextScene: "boast_consequence", tag: "doubtful", feedback: "Wonder, not pride, is the path.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Be Humble",
    text: "Boasting closes the wonder.\nStand quietly.",
    choices: [
      { text: "Stay silent in awe with them", nextScene: "truth_remains", tag: "faithful", feedback: "You grow still.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — TRUTH REMAINS
  truth_remains: {
    id: "truth_remains",
    title: "Truth Stands",
    text: "The Pharisees turn and leave.\nHis words remain in the air.",
    choices: [
      { text: "Carry his truth in your heart", nextScene: "ending", tag: "faithful", feedback: "Matthew 22:46 — No one was able to answer Jesus, nor did anyone dare to ask him any more questions from that day on.", isCorrect: true, sentiment: "positive" },
      { text: "Forget it before you go home", nextScene: "forget_consequence", tag: "fearful", feedback: "Do not let truth slip away.", isCorrect: false, sentiment: "negative" },
    ],
  },
  forget_consequence: {
    id: "forget_consequence",
    title: "Remember",
    text: "Truth is a lamp.\nDo not blow it out.",
    choices: [
      { text: "Carry his truth in your heart", nextScene: "ending", tag: "faithful", feedback: "You hold the flame.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "Wisdom That Cannot Be Trapped",
    text: "Where manipulation is loud,\ntruth remains, quiet and bright.",
    choices: [],
    isFinal: true,
  },
};
