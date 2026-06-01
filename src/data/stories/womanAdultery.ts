import { StoryScene } from "@/data/stories/creation";

// WOMAN CAUGHT IN ADULTERY — John 8:1-11
// You witness the encounter at the temple at dawn.

export const womanAdulteryScenes: Record<string, StoryScene> = {
  // ACT I — DRAGGED BEFORE JESUS
  start: {
    id: "start",
    title: "Before the Teacher",
    text: "Pharisees push a trembling woman\nbefore Jesus at the temple.",
    choices: [
      { text: "Join the angry crowd shouting", nextScene: "join_consequence", tag: "fearful", feedback: "Anger does not see the heart.", isCorrect: false, sentiment: "negative" },
      { text: "Stand quietly and watch", nextScene: "accusation", tag: "faithful", feedback: "You watch with open eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  join_consequence: {
    id: "join_consequence",
    title: "Hold Your Voice",
    text: "Loud voices drown out the truth.\nStand still and listen.",
    choices: [
      { text: "Stand quietly and watch", nextScene: "accusation", tag: "faithful", feedback: "Your voice softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE ACCUSATION
  accusation: {
    id: "accusation",
    title: "The Accusation",
    text: "\"She was caught in sin,\" they cry.\nThe woman cannot lift her eyes.",
    choices: [
      { text: "Look on her with compassion", nextScene: "trap", tag: "faithful", feedback: "Mercy begins with a gentle gaze.", isCorrect: true, sentiment: "positive" },
      { text: "Turn your eyes away in scorn", nextScene: "scorn_consequence", tag: "doubtful", feedback: "She is still a soul before God.", isCorrect: false, sentiment: "negative" },
    ],
  },
  scorn_consequence: {
    id: "scorn_consequence",
    title: "See Her",
    text: "She is more than her shame.\nLook with kindness.",
    choices: [
      { text: "Look on her with compassion", nextScene: "trap", tag: "faithful", feedback: "Your eyes meet hers.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE TRAP
  trap: {
    id: "trap",
    title: "The Trap",
    text: "\"The law says stone her.\nWhat do you say, teacher?\"",
    choices: [
      { text: "Demand he answer at once", nextScene: "demand_consequence", tag: "fearful", feedback: "Wisdom answers in its own time.", isCorrect: false, sentiment: "negative" },
      { text: "Wait in silence for his answer", nextScene: "writing", tag: "faithful", feedback: "Silence makes room for truth.", isCorrect: true, sentiment: "positive" },
      { text: "Side with the law-keepers", nextScene: "side_consequence", tag: "doubtful", feedback: "Law without mercy crushes.", isCorrect: false, sentiment: "negative" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Be Patient",
    text: "He hears every word, even the silent.\nWait for him.",
    choices: [
      { text: "Wait in silence for his answer", nextScene: "writing", tag: "faithful", feedback: "You breathe slowly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  side_consequence: {
    id: "side_consequence",
    title: "Mercy Too",
    text: "The law is true, but so is mercy.\nHear them both.",
    choices: [
      { text: "Wait in silence for his answer", nextScene: "writing", tag: "faithful", feedback: "You hold your breath.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — JESUS WRITES
  writing: {
    id: "writing",
    title: "He Stoops Low",
    text: "Jesus bends and writes in the dust,\nas if he heard nothing at all.",
    choices: [
      { text: "Mock his strange silence", nextScene: "mock_consequence", tag: "doubtful", feedback: "His quiet speaks louder than shouts.", isCorrect: false, sentiment: "negative" },
      { text: "Watch his finger trace the ground", nextScene: "without_sin", tag: "faithful", feedback: "Something holy is unfolding.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Look Closer",
    text: "His silence carries weight.\nLook and learn.",
    choices: [
      { text: "Watch his finger trace the ground", nextScene: "without_sin", tag: "faithful", feedback: "You lean in.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — WITHOUT SIN
  without_sin: {
    id: "without_sin",
    title: "Without Sin",
    text: "He stands. \"Let him without sin\ncast the first stone.\"",
    choices: [
      { text: "Reach for a stone in pride", nextScene: "stone_consequence", tag: "fearful", feedback: "No hand is clean enough.", isCorrect: false, sentiment: "negative" },
      { text: "Search your own heart honestly", nextScene: "accusers_leave", tag: "faithful", feedback: "Truth begins inside you.", isCorrect: true, sentiment: "positive" },
      { text: "Call him a soft-hearted fool", nextScene: "fool_consequence", tag: "doubtful", feedback: "Mercy is greater than scorn.", isCorrect: false, sentiment: "negative" },
    ],
  },
  stone_consequence: {
    id: "stone_consequence",
    title: "Lay It Down",
    text: "Your own faults rise to mind.\nLet the stone fall.",
    choices: [
      { text: "Search your own heart honestly", nextScene: "accusers_leave", tag: "faithful", feedback: "The stone slips away.", isCorrect: true, sentiment: "positive" },
    ],
  },
  fool_consequence: {
    id: "fool_consequence",
    title: "Look Inside",
    text: "Mercy is the wisdom of God.\nSearch yourself first.",
    choices: [
      { text: "Search your own heart honestly", nextScene: "accusers_leave", tag: "faithful", feedback: "You go quiet inside.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE ACCUSERS LEAVE
  accusers_leave: {
    id: "accusers_leave",
    title: "One by One",
    text: "The oldest leaves first. Then another.\nStones fall from open hands.",
    choices: [
      { text: "Stay and witness the mercy", nextScene: "mercy", tag: "faithful", feedback: "Grace is happening here.", isCorrect: true, sentiment: "positive" },
      { text: "Leave with the accusers", nextScene: "leave_consequence", tag: "fearful", feedback: "Stay and see what love does.", isCorrect: false, sentiment: "negative" },
    ],
  },
  leave_consequence: {
    id: "leave_consequence",
    title: "Stay and See",
    text: "Mercy is about to speak.\nDo not miss this.",
    choices: [
      { text: "Stay and witness the mercy", nextScene: "mercy", tag: "faithful", feedback: "You turn back.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — MERCY SPEAKS
  mercy: {
    id: "mercy",
    title: "Neither Do I",
    text: "\"Has no one condemned you?\"\n\"No one, Lord,\" she whispers.",
    choices: [
      { text: "Doubt that mercy is enough", nextScene: "doubt_consequence", tag: "doubtful", feedback: "Mercy is the beginning of life.", isCorrect: false, sentiment: "negative" },
      { text: "Receive the mercy with awe", nextScene: "ending", tag: "faithful", feedback: "Grace fills the courtyard.", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust the Gift",
    text: "His mercy holds and changes you.\nReceive it.",
    choices: [
      { text: "Receive the mercy with awe", nextScene: "ending", tag: "faithful", feedback: "Your heart opens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — GO AND SIN NO MORE
  ending: {
    id: "ending",
    title: "Go and Sin No More",
    text: "\"Neither do I condemn you.\nGo, and sin no more.\"",
    choices: [],
    isFinal: true,
  },
};
