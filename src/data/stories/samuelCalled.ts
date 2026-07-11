import { StoryScene } from "@/data/stories/creation";

// SAMUEL CALLED BY GOD — 1 Samuel 3
// You ARE young Samuel. Spiritual awakening, listening, recognizing the divine voice.

export const samuelCalledScenes: Record<string, StoryScene> = {
  // ACT I — SERVING IN THE TEMPLE
  start: {
    id: "start",
    title: "A Boy in the Tabernacle",
    text: "The lamps must be tended before night.\nEli rests in the next chamber.",
    choices: [
      { text: "Sneak away from the duties", nextScene: "sneak_consequence", tag: "lazy", feedback: "Service is your gift to give.", isCorrect: false, sentiment: "negative" },
      { text: "Tend the lamp with care", nextScene: "night_falls", tag: "faithful", feedback: "1 Samuel 3:3 — Samuel was lying down in the temple of the Lord, where the ark of God was.", isCorrect: true, sentiment: "positive" },
      { text: "Demand a higher task", nextScene: "demand_consequence", tag: "proud", feedback: "Quiet duty is sacred too.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sneak_consequence: {
    id: "sneak_consequence",
    title: "Return to Your Post",
    text: "The sanctuary needs a faithful hand.\nGo back and tend the lamp.",
    choices: [
      { text: "Tend the lamp with care", nextScene: "night_falls", tag: "faithful", feedback: "You bow your head and serve.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Greatness in Smallness",
    text: "Even small duties shape a prophet.\nDo what is set before you.",
    choices: [
      { text: "Tend the lamp with care", nextScene: "night_falls", tag: "faithful", feedback: "Light glows on your face.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE FIRST CALL
  night_falls: {
    id: "night_falls",
    title: "A Voice in the Dark",
    text: "You lie down. Then a voice: \"Samuel.\"\nIt must be Eli calling you.",
    choices: [
      { text: "Run to Eli to answer him", nextScene: "second_call", tag: "obedient", feedback: "1 Samuel 3:5 — Samuel ran to Eli and said, \"Here I am; you called me.\"", isCorrect: true, sentiment: "positive" },
      { text: "Pretend you did not hear", nextScene: "ignore_consequence", tag: "fearful", feedback: "A call answered is a heart awake.", isCorrect: false, sentiment: "negative" },
      { text: "Shout back from your mat", nextScene: "shout_consequence", tag: "rude", feedback: "Honor the elder with your steps.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Do Not Hide",
    text: "A voice that calls deserves an answer.\nRise and go to Eli.",
    choices: [
      { text: "Run to Eli to answer him", nextScene: "second_call", tag: "obedient", feedback: "You step into the corridor.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Honor the Elder",
    text: "Do not shout in the holy house.\nGo to him on quiet feet.",
    choices: [
      { text: "Run to Eli to answer him", nextScene: "second_call", tag: "obedient", feedback: "You walk softly to his door.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE SECOND CALL
  second_call: {
    id: "second_call",
    title: "Eli Did Not Call",
    text: "\"I did not call you, my son.\"\nYou return. The voice comes again.",
    choices: [
      { text: "Doubt your own ears and sleep", nextScene: "doubt_consequence", tag: "doubting", feedback: "A whisper this clear is real.", isCorrect: false, sentiment: "negative" },
      { text: "Curse the voice as a trick", nextScene: "curse_consequence", tag: "blasphemous", feedback: "Do not slander what you don't know.", isCorrect: false, sentiment: "negative" },
      { text: "Go to Eli once more", nextScene: "third_call", tag: "obedient", feedback: "1 Samuel 3:6 — Samuel arose and went to Eli and said, \"Here I am; you did not call me.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust What You Heard",
    text: "The voice was not a dream.\nGo to Eli and tell him again.",
    choices: [
      { text: "Go to Eli once more", nextScene: "third_call", tag: "obedient", feedback: "You rise once more.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Guard Your Tongue",
    text: "You do not yet know the speaker.\nGo seek Eli's wisdom.",
    choices: [
      { text: "Go to Eli once more", nextScene: "third_call", tag: "obedient", feedback: "You bow your head and go.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — ELI REALIZES
  third_call: {
    id: "third_call",
    title: "Eli Understands",
    text: "Eli's old eyes soften with knowing.\n\"It is the Lord who calls you.\"",
    choices: [
      { text: "Refuse to listen any further", nextScene: "refuse_consequence", tag: "fearful", feedback: "Do not flee the voice of God.", isCorrect: false, sentiment: "negative" },
      { text: "Go back and wait to listen", nextScene: "respond_god", tag: "humble", feedback: "1 Samuel 3:9 — Eli told Samuel to go lie down, and if the voice called him, he should say, \"Speak, Lord, for your servant is listening.\"", isCorrect: true, sentiment: "positive" },
      { text: "Boast of being chosen", nextScene: "boast_consequence", tag: "proud", feedback: "Holy ground asks for silence.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Do Not Run",
    text: "The Lord chose this quiet hour.\nGo back and listen.",
    choices: [
      { text: "Go back and wait to listen", nextScene: "respond_god", tag: "humble", feedback: "You return to the dark room.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "A Listening Heart",
    text: "Pride dulls the ear of the soul.\nGo and listen in silence.",
    choices: [
      { text: "Go back and wait to listen", nextScene: "respond_god", tag: "humble", feedback: "You bow your head low.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — SPEAK, LORD
  respond_god: {
    id: "respond_god",
    title: "The Voice Returns",
    text: "\"Samuel, Samuel.\"\nYour heart trembles in the stillness.",
    choices: [
      { text: "Hide your face in fear", nextScene: "hide_consequence", tag: "fearful", feedback: "Answer Him as Eli taught.", isCorrect: false, sentiment: "negative" },
      { text: "Ask for a sign first", nextScene: "sign_consequence", tag: "doubting", feedback: "Trust the voice that calls you.", isCorrect: false, sentiment: "negative" },
      { text: "\"Speak, Lord. I am listening.\"", nextScene: "prophet_calling", tag: "surrendered", feedback: "1 Samuel 3:10 — Samuel said, \"Speak, for your servant is listening.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Lift Your Head",
    text: "He calls you by your name.\nAnswer Him with open heart.",
    choices: [
      { text: "\"Speak, Lord. I am listening.\"", nextScene: "prophet_calling", tag: "surrendered", feedback: "Your voice steadies as you speak.", isCorrect: true, sentiment: "positive" },
    ],
  },
  sign_consequence: {
    id: "sign_consequence",
    title: "Faith Before Sight",
    text: "His call is the sign itself.\nSpeak the words Eli gave you.",
    choices: [
      { text: "\"Speak, Lord. I am listening.\"", nextScene: "prophet_calling", tag: "surrendered", feedback: "You whisper into the dark.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — THE PROPHET RISES
  prophet_calling: {
    id: "prophet_calling",
    title: "A Prophet to Israel",
    text: "Dawn finds you a chosen voice.\nAll Israel will know the Lord speaks.",
    choices: [],
    isFinal: true,
  },
};
