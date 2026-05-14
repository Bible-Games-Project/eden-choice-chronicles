import { StoryScene } from "@/data/stories/creation";

// TEMPTATION IN THE DESERT — Matthew 4, Luke 4
// You ARE Jesus, fasting forty days in the wilderness.

export const temptationDesertScenes: Record<string, StoryScene> = {
  // ACT I — FASTING
  start: {
    id: "start",
    title: "Forty Days",
    text: "Forty days without bread.\nThe desert is silent.",
    choices: [
      { text: "Curse the wilderness", nextScene: "curse_consequence", tag: "faithless", feedback: "The desert is sacred ground.", isCorrect: false, sentiment: "negative" },
      { text: "Pray and remain", nextScene: "bread", tag: "faithful", feedback: "Stillness fills your soul.", isCorrect: true, sentiment: "positive" },
      { text: "Walk back home", nextScene: "leave_consequence", tag: "fearful", feedback: "Your hour is here.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Endure",
    text: "The Father has led you here.\nKneel in trust.",
    choices: [
      { text: "Pray and remain", nextScene: "bread", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },
  leave_consequence: {
    id: "leave_consequence",
    title: "Stay",
    text: "This trial must be faced.\nReturn to prayer.",
    choices: [
      { text: "Pray and remain", nextScene: "bread", tag: "faithful", feedback: "You sit in stillness.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — TEMPTATION OF BREAD
  bread: {
    id: "bread",
    title: "The First Voice",
    text: "A voice whispers:\n\"Turn these stones into bread.\"",
    choices: [
      { text: "Make the stones into bread", nextScene: "obey_bread_consequence", tag: "faithless", feedback: "Hunger is not your master.", isCorrect: false, sentiment: "negative" },
      { text: "\"Man lives by every word of God.\"", nextScene: "pinnacle", tag: "faithful", feedback: "Truth is your bread.", isCorrect: true, sentiment: "positive" },
    ],
  },
  obey_bread_consequence: {
    id: "obey_bread_consequence",
    title: "Resist Hunger",
    text: "Power is not for self.\nSpeak the truth.",
    choices: [
      { text: "\"Man lives by every word of God.\"", nextScene: "pinnacle", tag: "faithful", feedback: "The voice falls silent.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — TEMPTATION OF PRIDE (PINNACLE)
  pinnacle: {
    id: "pinnacle",
    title: "On the Pinnacle",
    text: "He sets you on the temple.\n\"Throw yourself down. Angels will catch you.\"",
    choices: [
      { text: "Leap to prove your power", nextScene: "leap_consequence", tag: "proud", feedback: "Do not test the Father.", isCorrect: false, sentiment: "negative" },
      { text: "Boast of your trust", nextScene: "boast_consequence", tag: "proud", feedback: "Speak only the word.", isCorrect: false, sentiment: "negative" },
      { text: "\"Do not put God to the test.\"", nextScene: "kingdoms", tag: "faithful", feedback: "He frowns and turns.", isCorrect: true, sentiment: "positive" },
    ],
  },
  leap_consequence: {
    id: "leap_consequence",
    title: "Stand Firm",
    text: "Faith is not a spectacle.\nAnswer with truth.",
    choices: [
      { text: "\"Do not put God to the test.\"", nextScene: "kingdoms", tag: "faithful", feedback: "He steps back in silence.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Be Humble",
    text: "Trust does not need proof.\nSpeak the word.",
    choices: [
      { text: "\"Do not put God to the test.\"", nextScene: "kingdoms", tag: "faithful", feedback: "His face darkens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — TEMPTATION OF POWER (KINGDOMS)
  kingdoms: {
    id: "kingdoms",
    title: "All the Kingdoms",
    text: "He shows the world below.\n\"Bow to me and all is yours.\"",
    choices: [
      { text: "\"Worship the Lord alone.\"", nextScene: "departs", tag: "faithful", feedback: "Your voice shakes the air.", isCorrect: true, sentiment: "positive" },
      { text: "Bow for the kingdoms", nextScene: "bow_consequence", tag: "faithless", feedback: "You serve only the Father.", isCorrect: false, sentiment: "negative" },
      { text: "Bargain for half", nextScene: "bargain_consequence", tag: "proud", feedback: "Truth does not bargain.", isCorrect: false, sentiment: "negative" },
    ],
  },
  bow_consequence: {
    id: "bow_consequence",
    title: "Serve God Alone",
    text: "No throne is worth your soul.\nSpeak the truth.",
    choices: [
      { text: "\"Worship the Lord alone.\"", nextScene: "departs", tag: "faithful", feedback: "The horizon trembles.", isCorrect: true, sentiment: "positive" },
    ],
  },
  bargain_consequence: {
    id: "bargain_consequence",
    title: "No Compromise",
    text: "Truth has no price.\nStand firm.",
    choices: [
      { text: "\"Worship the Lord alone.\"", nextScene: "departs", tag: "faithful", feedback: "Light returns to your face.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — DEVIL DEPARTS
  departs: {
    id: "departs",
    title: "He Departs",
    text: "The tempter fades into the dust.\nSilence returns.",
    choices: [
      { text: "Chase after him", nextScene: "chase_consequence", tag: "proud", feedback: "Let him go.", isCorrect: false, sentiment: "negative" },
      { text: "Stand in quiet thanks", nextScene: "rest", tag: "faithful", feedback: "Peace fills the desert.", isCorrect: true, sentiment: "positive" },
    ],
  },
  chase_consequence: {
    id: "chase_consequence",
    title: "Be Still",
    text: "The battle is finished.\nRest in the Father.",
    choices: [
      { text: "Stand in quiet thanks", nextScene: "rest", tag: "faithful", feedback: "You breathe deeply.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  rest: {
    id: "rest",
    title: "Angels Minister",
    text: "Dawn rises gently.\nThe truth has prevailed.",
    choices: [],
    isFinal: true,
  },
};
