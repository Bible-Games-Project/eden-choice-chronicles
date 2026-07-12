import { StoryScene } from "@/data/stories/creation";

// HEALING OF THE LEPER — Matthew 8 / Mark 1 / Luke 5
// You are the leper, outcast and longing for mercy.

export const healingLeperScenes: Record<string, StoryScene> = {
  // ACT I — SEEING JESUS FROM AFAR
  start: {
    id: "start",
    title: "From the Edge",
    text: "You stand outside the village.\nA teacher passes by.",
    choices: [
      { text: "Stay hidden in shame", nextScene: "hide_consequence", tag: "fearful", feedback: "Do not turn away.", isCorrect: false, sentiment: "negative" },
      { text: "Step toward him", nextScene: "approach", tag: "faithful", feedback: "Mark 1:40 — A leper came to Jesus, imploring Him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Rise",
    text: "Mercy walks past only once.\nGo to him.",
    choices: [
      { text: "Step toward him", nextScene: "approach", tag: "faithful", feedback: "Your feet move.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — APPROACHING THROUGH THE CROWD
  approach: {
    id: "approach",
    title: "Through the Crowd",
    text: "Faces recoil. Voices hush.\nThe path narrows.",
    choices: [
      { text: "Shout in anger at them", nextScene: "anger_consequence", tag: "bitter", feedback: "Not now.", isCorrect: false, sentiment: "negative" },
      { text: "Keep your eyes on Jesus", nextScene: "kneel", tag: "faithful", feedback: "Mark 1:40 — The leper came to Jesus and knelt before Him.", isCorrect: true, sentiment: "positive" },
      { text: "Turn back ashamed", nextScene: "turn_consequence", tag: "fearful", feedback: "Do not retreat.", isCorrect: false, sentiment: "negative" },
    ],
  },
  anger_consequence: {
    id: "anger_consequence",
    title: "Let It Go",
    text: "Their fear is not your battle.\nLook ahead.",
    choices: [
      { text: "Keep your eyes on Jesus", nextScene: "kneel", tag: "faithful", feedback: "Peace returns.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turn_consequence: {
    id: "turn_consequence",
    title: "Don't Retreat",
    text: "He is near. Reach him.\nFaith calls you forward.",
    choices: [
      { text: "Keep your eyes on Jesus", nextScene: "kneel", tag: "faithful", feedback: "You walk on.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — KNEELING BEFORE HIM
  kneel: {
    id: "kneel",
    title: "On Your Knees",
    text: "You fall before him, trembling.\nHis eyes meet yours.",
    choices: [
      { text: "Demand to be healed", nextScene: "demand_consequence", tag: "proud", feedback: "Ask, do not demand.", isCorrect: false, sentiment: "negative" },
      { text: "\"Lord, if you are willing...\"", nextScene: "plea", tag: "faithful", feedback: "Mark 1:40 — The leper said to Jesus, \"If you are willing, you can make me clean.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Speak with Faith",
    text: "Healing is mercy, not a debt.\nAsk gently.",
    choices: [
      { text: "\"Lord, if you are willing...\"", nextScene: "plea", tag: "faithful", feedback: "He hears you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE PLEA
  plea: {
    id: "plea",
    title: "If You Are Willing",
    text: "\"You can make me clean.\"\nHe looks at you with love.",
    choices: [
      { text: "Doubt and lower your head", nextScene: "doubt_consequence", tag: "doubtful", feedback: "Hold the hope.", isCorrect: false, sentiment: "negative" },
      { text: "Wait in quiet trust", nextScene: "touch", tag: "faithful", feedback: "Mark 1:41 — Jesus, moved with pity, stretched out His hand and touched the leper.", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Lift Your Eyes",
    text: "He has not turned away.\nTrust him.",
    choices: [
      { text: "Wait in quiet trust", nextScene: "touch", tag: "faithful", feedback: "His hand stirs.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE TOUCH
  touch: {
    id: "touch",
    title: "He Reaches Out",
    text: "No one has touched you in years.\nHis hand draws near.",
    choices: [
      { text: "Pull away — you are unclean", nextScene: "pull_consequence", tag: "fearful", feedback: "Receive him.", isCorrect: false, sentiment: "negative" },
      { text: "Warn him to stay back", nextScene: "warn_consequence", tag: "fearful", feedback: "He chooses you.", isCorrect: false, sentiment: "negative" },
      { text: "Let him touch you", nextScene: "heal", tag: "faithful", feedback: "Mark 1:41 — Jesus said to the leper, \"I am willing; be cleansed.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  pull_consequence: {
    id: "pull_consequence",
    title: "Receive Mercy",
    text: "He knows. He came anyway.\nLet him.",
    choices: [
      { text: "Let him touch you", nextScene: "heal", tag: "faithful", feedback: "Warmth spreads.", isCorrect: true, sentiment: "positive" },
    ],
  },
  warn_consequence: {
    id: "warn_consequence",
    title: "He Is Not Afraid",
    text: "His love is greater than fear.\nLet him near.",
    choices: [
      { text: "Let him touch you", nextScene: "heal", tag: "faithful", feedback: "Stillness, then light.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — IMMEDIATE HEALING
  heal: {
    id: "heal",
    title: "\"I Am Willing\"",
    text: "\"Be clean.\"\nYour skin becomes new.",
    choices: [
      { text: "Run through the crowd boasting", nextScene: "boast_consequence", tag: "proud", feedback: "Honor him first.", isCorrect: false, sentiment: "negative" },
      { text: "Bow and give thanks", nextScene: "send", tag: "faithful", feedback: "Mark 1:42 — Immediately the leprosy left him, and he was cleansed.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Give Thanks",
    text: "The gift is his.\nReturn praise.",
    choices: [
      { text: "Bow and give thanks", nextScene: "send", tag: "faithful", feedback: "Your heart bows.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — SENT IN MERCY
  send: {
    id: "send",
    title: "Go and Live",
    text: "\"Show yourself to the priest.\"\nYou step into the light.",
    choices: [],
    isFinal: true,
  },
};
