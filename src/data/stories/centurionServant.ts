import { StoryScene } from "@/data/stories/creation";

// CENTURION'S SERVANT — Matthew 8 / Luke 7
// You are the Roman centurion seeking healing for your servant.

export const centurionServantScenes: Record<string, StoryScene> = {
  // ACT I — A SICK SERVANT
  start: {
    id: "start",
    title: "Your Servant",
    text: "Your servant lies dying.\nYou hear a teacher is near.",
    choices: [
      { text: "Send for a Roman doctor", nextScene: "doctor_consequence", tag: "doubtful", feedback: "There is another way.", isCorrect: false, sentiment: "negative" },
      { text: "Go to find Jesus", nextScene: "seek", tag: "faithful", feedback: "Luke 7:3 — The centurion sent elders of the Jews to Jesus, asking him to come and heal his servant.", isCorrect: true, sentiment: "positive" },
      { text: "Wait and do nothing", nextScene: "wait_consequence", tag: "fearful", feedback: "Time is short.", isCorrect: false, sentiment: "negative" },
    ],
  },
  doctor_consequence: {
    id: "doctor_consequence",
    title: "Seek the Healer",
    text: "No skill of Rome can save him.\nOnly Jesus can.",
    choices: [
      { text: "Go to find Jesus", nextScene: "seek", tag: "faithful", feedback: "You set out.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Do Not Delay",
    text: "Mercy passes through your town.\nReach him now.",
    choices: [
      { text: "Go to find Jesus", nextScene: "seek", tag: "faithful", feedback: "You hurry forward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — APPROACHING JESUS
  seek: {
    id: "seek",
    title: "Before the Teacher",
    text: "You stand before him.\nA Roman among his people.",
    choices: [
      { text: "\"Lord, my servant suffers.\"", nextScene: "agree", tag: "faithful", feedback: "Luke 7:4 — The elders of the Jews earnestly pleaded with Jesus on the centurion's behalf, explaining his worthiness.", isCorrect: true, sentiment: "positive" },
      { text: "Command him by Rome", nextScene: "command_consequence", tag: "proud", feedback: "Not by force.", isCorrect: false, sentiment: "negative" },
    ],
  },
  command_consequence: {
    id: "command_consequence",
    title: "Lay Down Pride",
    text: "Authority bends here.\nAsk humbly.",
    choices: [
      { text: "\"Lord, my servant suffers.\"", nextScene: "agree", tag: "faithful", feedback: "He turns to you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — JESUS AGREES TO COME
  agree: {
    id: "agree",
    title: "\"I Will Come\"",
    text: "\"I will come and heal him.\"\nHe steps toward your home.",
    choices: [
      { text: "Lead him proudly home", nextScene: "proud_consequence", tag: "proud", feedback: "Pause and reflect.", isCorrect: false, sentiment: "negative" },
      { text: "Stop. You are unworthy", nextScene: "faith", tag: "faithful", feedback: "Luke 7:6 — The centurion sent friends to Jesus, saying he was not worthy for Jesus to come under his roof.", isCorrect: true, sentiment: "positive" },
    ],
  },
  proud_consequence: {
    id: "proud_consequence",
    title: "Look Within",
    text: "Who are you that he should come?\nSpeak the truth.",
    choices: [
      { text: "Stop. You are unworthy", nextScene: "faith", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE DECLARATION OF FAITH
  faith: {
    id: "faith",
    title: "Only Say the Word",
    text: "\"I am not worthy.\"\nWhat will you ask?",
    choices: [
      { text: "Beg him to hurry", nextScene: "hurry_consequence", tag: "doubtful", feedback: "Trust deeper.", isCorrect: false, sentiment: "negative" },
      { text: "\"Only say the word.\"", nextScene: "praise", tag: "faithful", feedback: "Luke 7:7 — The centurion believed that if Jesus merely spoke a word, his servant would be healed.", isCorrect: true, sentiment: "positive" },
      { text: "Demand a sign first", nextScene: "sign_consequence", tag: "doubtful", feedback: "Faith asks no proof.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hurry_consequence: {
    id: "hurry_consequence",
    title: "Trust His Word",
    text: "His word alone is enough.\nSpeak it.",
    choices: [
      { text: "\"Only say the word.\"", nextScene: "praise", tag: "faithful", feedback: "You believe.", isCorrect: true, sentiment: "positive" },
    ],
  },
  sign_consequence: {
    id: "sign_consequence",
    title: "No Proof Needed",
    text: "Faith does not bargain.\nSpeak from belief.",
    choices: [
      { text: "\"Only say the word.\"", nextScene: "praise", tag: "faithful", feedback: "Quiet trust.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — JESUS PRAISES THE FAITH
  praise: {
    id: "praise",
    title: "Such Great Faith",
    text: "He turns to the crowd amazed.\n\"I have not seen such faith.\"",
    choices: [
      { text: "Boast before the people", nextScene: "boast_consequence", tag: "proud", feedback: "Stay humble.", isCorrect: false, sentiment: "negative" },
      { text: "Bow in silent gratitude", nextScene: "heal", tag: "faithful", feedback: "Luke 7:9 — Jesus marveled at the centurion's faith and declared that he had not found such great faith, not even in Israel.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Stay Humble",
    text: "The glory is not yours.\nBow quietly.",
    choices: [
      { text: "Bow in silent gratitude", nextScene: "heal", tag: "faithful", feedback: "Peace fills you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — HEALED FROM AFAR
  heal: {
    id: "heal",
    title: "Healed From Afar",
    text: "You return home.\nYour servant breathes deep, well.",
    choices: [],
    isFinal: true,
  },
};
