import { StoryScene } from "@/data/stories/creation";

// SHEPHERDS — Luke 2:8-20
// You ARE a shepherd in the fields outside Bethlehem.

export const shepherdsScenes: Record<string, StoryScene> = {
  // ACT I — NIGHT WATCH
  start: {
    id: "start",
    title: "Quiet Fields",
    text: "The flock sleeps under cold stars.\nThe night is long and still.",
    choices: [
      { text: "Sleep and abandon the flock", nextScene: "sleep_consequence", tag: "lazy", feedback: "Wolves wait in the dark.", isCorrect: false, sentiment: "negative" },
      { text: "Keep faithful watch", nextScene: "light", tag: "faithful", feedback: "Luke 2:8 — Shepherds were \"keeping watch over their flock by night.\"", isCorrect: true, sentiment: "positive" },
      { text: "Wander into town for warmth", nextScene: "wander_consequence", tag: "rash", feedback: "The flock is your charge.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sleep_consequence: {
    id: "sleep_consequence",
    title: "Stay Awake",
    text: "A faithful watch is a holy thing.\nKeep your post.",
    choices: [
      { text: "Keep faithful watch", nextScene: "light", tag: "faithful", feedback: "You sit upright again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wander_consequence: {
    id: "wander_consequence",
    title: "Return to the Flock",
    text: "The sheep need your care tonight.\nGo back to your post.",
    choices: [
      { text: "Keep faithful watch", nextScene: "light", tag: "faithful", feedback: "You return to the field.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE ANGEL APPEARS
  light: {
    id: "light",
    title: "A Sudden Light",
    text: "The night cracks open with glory.\nAn angel stands before you.",
    choices: [
      { text: "Run away in terror", nextScene: "run_consequence", tag: "fearful", feedback: "Heaven calls you to listen.", isCorrect: false, sentiment: "negative" },
      { text: "Attack with your staff", nextScene: "attack_consequence", tag: "rash", feedback: "This is no enemy.", isCorrect: false, sentiment: "negative" },
      { text: "Bow and listen in awe", nextScene: "message", tag: "faithful", feedback: "Luke 2:9 — The shepherds were \"greatly terrified\" by the angel's appearance.", isCorrect: true, sentiment: "positive" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "Do Not Be Afraid",
    text: "The angel speaks gently to you.\nReturn and listen.",
    choices: [
      { text: "Bow and listen in awe", nextScene: "message", tag: "faithful", feedback: "Your fear gives way to peace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  attack_consequence: {
    id: "attack_consequence",
    title: "Lower Your Staff",
    text: "This light brings news, not harm.\nReceive it with reverence.",
    choices: [
      { text: "Bow and listen in awe", nextScene: "message", tag: "faithful", feedback: "Your staff falls to the grass.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE MESSAGE
  message: {
    id: "message",
    title: "Good News",
    text: "\"Today in Bethlehem a Savior is born.\nYou will find him in a manger.\"",
    choices: [
      { text: "Doubt the heavenly word", nextScene: "doubt_consequence", tag: "faithless", feedback: "Heaven does not lie.", isCorrect: false, sentiment: "negative" },
      { text: "Believe and rise to go", nextScene: "travel", tag: "faithful", feedback: "Luke 2:15 — The shepherds said to one another, \"Let us go over to Bethlehem and see this thing that has happened.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust the Sign",
    text: "A child in a manger awaits.\nGo and see for yourself.",
    choices: [
      { text: "Believe and rise to go", nextScene: "travel", tag: "faithful", feedback: "You take up your staff.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — JOURNEY TO BETHLEHEM
  travel: {
    id: "travel",
    title: "Toward Bethlehem",
    text: "The road is dark but your steps are sure.\nThe town glows ahead.",
    choices: [
      { text: "Wait until morning instead", nextScene: "wait_consequence", tag: "fearful", feedback: "Do not delay this gift.", isCorrect: false, sentiment: "negative" },
      { text: "Hurry through the night", nextScene: "worship", tag: "faithful", feedback: "Luke 2:16 — The shepherds \"went with haste\" to Bethlehem.", isCorrect: true, sentiment: "positive" },
      { text: "Bring fine gifts to buy first", nextScene: "gifts_consequence", tag: "proud", feedback: "Bring only your heart.", isCorrect: false, sentiment: "negative" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Go Now",
    text: "The Savior waits in a manger tonight.\nDo not turn back.",
    choices: [
      { text: "Hurry through the night", nextScene: "worship", tag: "faithful", feedback: "You quicken your pace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  gifts_consequence: {
    id: "gifts_consequence",
    title: "Empty Hands Are Enough",
    text: "He receives the poor as the rich.\nGo as you are.",
    choices: [
      { text: "Hurry through the night", nextScene: "worship", tag: "faithful", feedback: "You go with empty hands.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE MANGER
  worship: {
    id: "worship",
    title: "The Child",
    text: "He lies in a manger, just as told.\nHis breath is soft, his face is light.",
    choices: [
      { text: "Stand back in silence", nextScene: "silence_consequence", tag: "fearful", feedback: "Draw near to him.", isCorrect: false, sentiment: "negative" },
      { text: "Kneel and worship the child", nextScene: "return", tag: "faithful", feedback: "Luke 2:16 — The shepherds found Mary and Joseph, and the baby lying in a manger.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silence_consequence: {
    id: "silence_consequence",
    title: "Come Closer",
    text: "He is the One the angel spoke of.\nWorship him with your whole heart.",
    choices: [
      { text: "Kneel and worship the child", nextScene: "return", tag: "faithful", feedback: "You kneel beside the manger.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — PRAISING GOD
  return: {
    id: "return",
    title: "Praising as You Go",
    text: "You return to the fields rejoicing.\nHeaven has touched the earth tonight.",
    choices: [],
    isFinal: true,
  },
};
