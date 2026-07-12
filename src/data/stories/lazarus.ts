import { StoryScene } from "@/data/stories/creation";

// RAISING LAZARUS — John 11
// You are a disciple traveling with Jesus to Bethany.

export const lazarusScenes: Record<string, StoryScene> = {
  // ACT I — NEWS OF SICKNESS
  start: {
    id: "start",
    title: "Lazarus Is Sick",
    text: "A messenger gasps, breathless.\n\"Lord, the one you love is ill.\"",
    choices: [
      { text: "Urge Jesus to hurry", nextScene: "urge_consequence", tag: "doubtful", feedback: "Trust his timing.", isCorrect: false, sentiment: "negative" },
      { text: "Wait for his word", nextScene: "delay", tag: "faithful", feedback: "John 11:6 — Jesus stayed two days longer in the place where he was.", isCorrect: true, sentiment: "positive" },
      { text: "Dismiss the news", nextScene: "dismiss_consequence", tag: "fearful", feedback: "Hear him out.", isCorrect: false, sentiment: "negative" },
    ],
  },
  urge_consequence: {
    id: "urge_consequence",
    title: "His Own Time",
    text: "He will not be rushed.\nWait.",
    choices: [
      { text: "Wait for his word", nextScene: "delay", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },
  dismiss_consequence: {
    id: "dismiss_consequence",
    title: "Hear Him",
    text: "This sickness has a purpose.\nListen.",
    choices: [
      { text: "Wait for his word", nextScene: "delay", tag: "faithful", feedback: "You quiet your heart.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — DELAY
  delay: {
    id: "delay",
    title: "Two Days More",
    text: "He stays where he is, two days.\n\"It is for God's glory.\"",
    choices: [
      { text: "Question his delay", nextScene: "question_consequence", tag: "doubtful", feedback: "He sees what you cannot.", isCorrect: false, sentiment: "negative" },
      { text: "Trust his purpose", nextScene: "travel", tag: "faithful", feedback: "John 11:4 — Jesus said, \"This illness does not lead to death. It is for the glory of God, so that the Son of God may be glorified through it.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  question_consequence: {
    id: "question_consequence",
    title: "He Sees Further",
    text: "His delay is not absence.\nTrust him.",
    choices: [
      { text: "Trust his purpose", nextScene: "travel", tag: "faithful", feedback: "You breathe in.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — TRAVEL TO BETHANY
  travel: {
    id: "travel",
    title: "Let Us Go",
    text: "\"Our friend Lazarus sleeps.\"\n\"I go to wake him.\"",
    choices: [
      { text: "Stay back in fear", nextScene: "stayback_consequence", tag: "fearful", feedback: "Go with him.", isCorrect: false, sentiment: "negative" },
      { text: "Walk with him to Bethany", nextScene: "martha", tag: "faithful", feedback: "John 11:7 — Then after this he said to the disciples, \"Let us go to Judea again.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  stayback_consequence: {
    id: "stayback_consequence",
    title: "Follow Him",
    text: "Do not be left behind.\nGo.",
    choices: [
      { text: "Walk with him to Bethany", nextScene: "martha", tag: "faithful", feedback: "You catch up.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — MARTHA SPEAKS
  martha: {
    id: "martha",
    title: "Martha Meets You",
    text: "\"If you had been here, Lord,\nmy brother would not have died.\"",
    choices: [
      { text: "Tell her to give up hope", nextScene: "giveup_consequence", tag: "doubtful", feedback: "Hope is not dead.", isCorrect: false, sentiment: "negative" },
      { text: "\"He is the Resurrection\"", nextScene: "mary", tag: "faithful", feedback: "John 11:25-26 — Jesus said to Martha, \"I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die.\"", isCorrect: true, sentiment: "positive" },
      { text: "Stay silent and turn away", nextScene: "silent_consequence", tag: "fearful", feedback: "Speak hope to her.", isCorrect: false, sentiment: "negative" },
    ],
  },
  giveup_consequence: {
    id: "giveup_consequence",
    title: "Hope Remains",
    text: "Death is not the end here.\nSpeak life.",
    choices: [
      { text: "\"He is the Resurrection\"", nextScene: "mary", tag: "faithful", feedback: "Her tears slow.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Find Words",
    text: "She needs hope.\nGive her his name.",
    choices: [
      { text: "\"He is the Resurrection\"", nextScene: "mary", tag: "faithful", feedback: "Your voice steadies.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — JESUS WEEPS
  mary: {
    id: "mary",
    title: "Mary Falls Weeping",
    text: "Mary kneels at his feet, weeping.\nThe crowd around her grieves.",
    choices: [
      { text: "Scold their tears", nextScene: "scold_consequence", tag: "fearful", feedback: "Weep with them.", isCorrect: false, sentiment: "negative" },
      { text: "Weep with them", nextScene: "weeps", tag: "faithful", feedback: "John 11:33 — When Jesus saw Mary weeping, and the Jews who had come with her also weeping, he was deeply moved in his spirit and greatly troubled.", isCorrect: true, sentiment: "positive" },
    ],
  },
  scold_consequence: {
    id: "scold_consequence",
    title: "Share the Sorrow",
    text: "Even Jesus weeps.\nGrieve with them.",
    choices: [
      { text: "Weep with them", nextScene: "weeps", tag: "faithful", feedback: "Tears come freely.", isCorrect: true, sentiment: "positive" },
    ],
  },
  weeps: {
    id: "weeps",
    title: "Jesus Wept",
    text: "He stands still, tears falling.\n\"See how he loved him.\"",
    choices: [
      { text: "Lead him to the tomb", nextScene: "tomb", tag: "faithful", feedback: "John 11:34 — Jesus asked, \"Where have you laid him?\" They said to him, \"Lord, come and see.\"", isCorrect: true, sentiment: "positive" },
      { text: "Pull him from the crowd", nextScene: "pull_consequence", tag: "doubtful", feedback: "He came for this.", isCorrect: false, sentiment: "negative" },
    ],
  },
  pull_consequence: {
    id: "pull_consequence",
    title: "Let Him Stay",
    text: "He came to this place on purpose.\nLead him on.",
    choices: [
      { text: "Lead him to the tomb", nextScene: "tomb", tag: "faithful", feedback: "He walks beside you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE STONE
  tomb: {
    id: "tomb",
    title: "Take Away the Stone",
    text: "\"Take away the stone,\" he says.\nMartha trembles. \"Lord, it stinks.\"",
    choices: [
      { text: "Leave the stone in place", nextScene: "leave_consequence", tag: "fearful", feedback: "Obey his word.", isCorrect: false, sentiment: "negative" },
      { text: "Roll the stone away", nextScene: "call", tag: "faithful", feedback: "John 11:39 — Jesus said, \"Take away the stone.\"", isCorrect: true, sentiment: "positive" },
      { text: "Argue with Jesus", nextScene: "argue_consequence", tag: "doubtful", feedback: "Believe and see.", isCorrect: false, sentiment: "negative" },
    ],
  },
  leave_consequence: {
    id: "leave_consequence",
    title: "Obey Him",
    text: "Faith moves the stone.\nRoll it.",
    choices: [
      { text: "Roll the stone away", nextScene: "call", tag: "faithful", feedback: "The stone groans aside.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Believe",
    text: "\"Did I not say, believe?\"\nDo as he says.",
    choices: [
      { text: "Roll the stone away", nextScene: "call", tag: "faithful", feedback: "You lean your weight.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — JESUS CALLS
  call: {
    id: "call",
    title: "Lazarus, Come Out",
    text: "He lifts his hands and his voice.\n\"Lazarus, come out!\"",
    choices: [
      { text: "Cover your ears in fear", nextScene: "cover_consequence", tag: "fearful", feedback: "Watch and see.", isCorrect: false, sentiment: "negative" },
      { text: "Watch the dark doorway", nextScene: "emerge", tag: "faithful", feedback: "John 11:43 — Jesus cried out with a loud voice, \"Lazarus, come out!\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  cover_consequence: {
    id: "cover_consequence",
    title: "Look",
    text: "Do not miss this.\nWatch.",
    choices: [
      { text: "Watch the dark doorway", nextScene: "emerge", tag: "faithful", feedback: "Your heart pounds.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — LAZARUS EMERGES
  emerge: {
    id: "emerge",
    title: "Unbind Him",
    text: "He steps from the tomb, alive.\n\"Unbind him. Let him go.\"",
    choices: [],
    isFinal: true,
  },
};
