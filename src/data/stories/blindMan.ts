import { StoryScene } from "@/data/stories/creation";

// MAN BORN BLIND — John 9
// You are the blind man, encountering Jesus, healed at Siloam, then questioned.

export const blindManScenes: Record<string, StoryScene> = {
  // ACT I — DISCIPLES ASK
  start: {
    id: "start",
    title: "Who Sinned?",
    text: "You sit in the dust, begging.\nDisciples ask, \"Who sinned?\"",
    choices: [
      { text: "Curse them silently", nextScene: "curse_consequence", tag: "fearful", feedback: "Listen instead.", isCorrect: false, sentiment: "negative" },
      { text: "Wait and listen", nextScene: "reveal", tag: "faithful", feedback: "You hold still.", isCorrect: true, sentiment: "positive" },
      { text: "Beg them louder", nextScene: "beg_consequence", tag: "doubtful", feedback: "Be still and hear.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Be Still",
    text: "Anger will not heal you.\nListen.",
    choices: [
      { text: "Wait and listen", nextScene: "reveal", tag: "faithful", feedback: "You quiet your heart.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Quiet Now",
    text: "A voice answers them.\nListen.",
    choices: [
      { text: "Wait and listen", nextScene: "reveal", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — WORKS REVEALED
  reveal: {
    id: "reveal",
    title: "God's Works Revealed",
    text: "\"Neither this man nor his parents.\"\n\"God's works shall be seen.\"",
    choices: [
      { text: "Doubt his words", nextScene: "doubt_consequence", tag: "doubtful", feedback: "Hold on to hope.", isCorrect: false, sentiment: "negative" },
      { text: "Hope quietly", nextScene: "mud", tag: "faithful", feedback: "Something stirs.", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Hold On",
    text: "His voice is kind.\nHope a little.",
    choices: [
      { text: "Hope quietly", nextScene: "mud", tag: "faithful", feedback: "You breathe in.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — MUD ON THE EYES
  mud: {
    id: "mud",
    title: "Mud on Your Eyes",
    text: "He spits on the ground, makes clay.\nHis hand finds your face.",
    choices: [
      { text: "Pull away in fear", nextScene: "pull_consequence", tag: "fearful", feedback: "Let him touch you.", isCorrect: false, sentiment: "negative" },
      { text: "Wipe it off at once", nextScene: "wipe_consequence", tag: "doubtful", feedback: "Trust him.", isCorrect: false, sentiment: "negative" },
      { text: "Hold still under his hand", nextScene: "send", tag: "faithful", feedback: "Cool clay rests there.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pull_consequence: {
    id: "pull_consequence",
    title: "Be Still",
    text: "His touch is gentle.\nLet him work.",
    choices: [
      { text: "Hold still under his hand", nextScene: "send", tag: "faithful", feedback: "You wait.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wipe_consequence: {
    id: "wipe_consequence",
    title: "Trust His Hand",
    text: "Do not undo his work.\nWait.",
    choices: [
      { text: "Hold still under his hand", nextScene: "send", tag: "faithful", feedback: "The clay stays.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — GO AND WASH
  send: {
    id: "send",
    title: "Go to Siloam",
    text: "\"Go, wash in the pool of Siloam.\"\nThe way is long.",
    choices: [
      { text: "Stay where it is safe", nextScene: "stay_consequence", tag: "fearful", feedback: "Obey him.", isCorrect: false, sentiment: "negative" },
      { text: "Walk to the pool", nextScene: "wash", tag: "faithful", feedback: "You feel the wall, and go.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stay_consequence: {
    id: "stay_consequence",
    title: "Obey",
    text: "The pool is waiting.\nWalk.",
    choices: [
      { text: "Walk to the pool", nextScene: "wash", tag: "faithful", feedback: "You step into the street.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — RECEIVING SIGHT
  wash: {
    id: "wash",
    title: "The Pool of Siloam",
    text: "Water in your hands.\nYou bring it to your eyes.",
    choices: [
      { text: "Wash and lift your eyes", nextScene: "see", tag: "faithful", feedback: "Light pours in.", isCorrect: true, sentiment: "positive" },
      { text: "Wash and keep them shut", nextScene: "shut_consequence", tag: "doubtful", feedback: "Open them.", isCorrect: false, sentiment: "negative" },
    ],
  },
  shut_consequence: {
    id: "shut_consequence",
    title: "Open Your Eyes",
    text: "He sent you to see.\nLift them.",
    choices: [
      { text: "Wash and lift your eyes", nextScene: "see", tag: "faithful", feedback: "Light pours in.", isCorrect: true, sentiment: "positive" },
    ],
  },
  see: {
    id: "see",
    title: "You Can See",
    text: "Sky. Stone. Your own hands.\nYou weep, laughing.",
    choices: [
      { text: "Hide it from the crowd", nextScene: "hide_consequence", tag: "fearful", feedback: "Tell them.", isCorrect: false, sentiment: "negative" },
      { text: "Tell everyone you meet", nextScene: "pharisees", tag: "faithful", feedback: "Your voice rises.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Speak Out",
    text: "Do not hide his work.\nTell them.",
    choices: [
      { text: "Tell everyone you meet", nextScene: "pharisees", tag: "faithful", feedback: "You run to the street.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — PHARISEES QUESTION
  pharisees: {
    id: "pharisees",
    title: "Pharisees Question You",
    text: "They glare. \"Who opened your eyes?\"\nThe room is cold.",
    choices: [
      { text: "Lie to keep the peace", nextScene: "lie_consequence", tag: "fearful", feedback: "Tell the truth.", isCorrect: false, sentiment: "negative" },
      { text: "\"A man called Jesus\"", nextScene: "testify", tag: "faithful", feedback: "Your voice is steady.", isCorrect: true, sentiment: "positive" },
      { text: "Stay silent in fear", nextScene: "silent_consequence", tag: "fearful", feedback: "Speak.", isCorrect: false, sentiment: "negative" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "Speak Truth",
    text: "Truth set you free.\nName him.",
    choices: [
      { text: "\"A man called Jesus\"", nextScene: "testify", tag: "faithful", feedback: "You stand straight.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Find Your Voice",
    text: "He gave you sight.\nGive him your words.",
    choices: [
      { text: "\"A man called Jesus\"", nextScene: "testify", tag: "faithful", feedback: "You speak clearly.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — BOLD TESTIMONY
  testify: {
    id: "testify",
    title: "One Thing I Know",
    text: "\"I was blind. Now I see.\"\nThe light stays with you.",
    choices: [],
    isFinal: true,
  },
};
