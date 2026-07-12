import { StoryScene } from "@/data/stories/creation";

// SAMARITAN WOMAN — John 4:1-42
// You meet Jesus at Jacob's well at noon.

export const samaritanWomanScenes: Record<string, StoryScene> = {
  // ACT I — JESUS AT THE WELL
  start: {
    id: "start",
    title: "Jacob's Well",
    text: "Jesus rests by Jacob's well at noon,\nweary from the long road.",
    choices: [
      { text: "Walk past, avoiding the stranger", nextScene: "avoid_consequence", tag: "fearful", feedback: "Truth waits for the open heart.", isCorrect: false, sentiment: "negative" },
      { text: "Draw near with your water jar", nextScene: "drink_request", tag: "faithful", feedback: "John 4:6-8 — Jesus, being weary from His journey, sat by the well and asked the Samaritan woman for a drink.", isCorrect: true, sentiment: "positive" },
    ],
  },
  avoid_consequence: {
    id: "avoid_consequence",
    title: "Come Near",
    text: "He is not a stranger to be feared.\nDraw near in peace.",
    choices: [
      { text: "Draw near with your water jar", nextScene: "drink_request", tag: "faithful", feedback: "You turn back toward him.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE REQUEST
  drink_request: {
    id: "drink_request",
    title: "Give Me a Drink",
    text: "\"Give me a drink,\" he says softly.\nA Jew speaks kindly to a Samaritan.",
    choices: [
      { text: "Offer water with quiet grace", nextScene: "living_water", tag: "faithful", feedback: "John 4:9 — The Samaritan woman questioned Jesus, a Jew, asking for a drink from her.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse, citing old divisions", nextScene: "refuse_consequence", tag: "doubtful", feedback: "Love crosses old walls.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Bridge the Wall",
    text: "He asks not as enemy but as friend.\nLet kindness answer.",
    choices: [
      { text: "Offer water with quiet grace", nextScene: "living_water", tag: "faithful", feedback: "You let the wall fall.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — LIVING WATER
  living_water: {
    id: "living_water",
    title: "Living Water",
    text: "\"If you knew the gift of God,\nyou would ask, and he would give living water.\"",
    choices: [
      { text: "Laugh at strange-sounding words", nextScene: "mock_consequence", tag: "doubtful", feedback: "Listen before you laugh.", isCorrect: false, sentiment: "negative" },
      { text: "Ask gently what he means", nextScene: "thirst", tag: "faithful", feedback: "John 4:10 — Jesus told the Samaritan woman that if she knew the gift of God, she would have asked Him for living water.", isCorrect: true, sentiment: "positive" },
      { text: "Demand he prove it now", nextScene: "demand_consequence", tag: "fearful", feedback: "Trust comes before sight.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Be Humble",
    text: "His words run deeper than they seem.\nAsk and learn.",
    choices: [
      { text: "Ask gently what he means", nextScene: "thirst", tag: "faithful", feedback: "You set pride aside.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Listen First",
    text: "He gives to those who simply ask.\nSpeak softly.",
    choices: [
      { text: "Ask gently what he means", nextScene: "thirst", tag: "faithful", feedback: "Your voice quiets.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — A DEEPER THIRST
  thirst: {
    id: "thirst",
    title: "A Deeper Thirst",
    text: "\"This water leaves you thirsty again.\nMine becomes a spring of life.\"",
    choices: [
      { text: "Want only the well's water", nextScene: "well_consequence", tag: "fearful", feedback: "Reach for the deeper gift.", isCorrect: false, sentiment: "negative" },
      { text: "Ask him for this living water", nextScene: "husband", tag: "faithful", feedback: "John 4:15 — The woman asked Jesus to give her this living water so she would not be thirsty again or have to keep coming to the well.", isCorrect: true, sentiment: "positive" },
    ],
  },
  well_consequence: {
    id: "well_consequence",
    title: "Reach Higher",
    text: "Stone wells run dry in time.\nAsk for the spring that never fails.",
    choices: [
      { text: "Ask him for this living water", nextScene: "husband", tag: "faithful", feedback: "You ask quietly.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — HE KNOWS YOU
  husband: {
    id: "husband",
    title: "He Knows You",
    text: "He speaks of your life as if he saw it.\nNothing is hidden from him.",
    choices: [
      { text: "Run from his honest gaze", nextScene: "flee_consequence", tag: "fearful", feedback: "He sees you and stays.", isCorrect: false, sentiment: "negative" },
      { text: "Stand and answer truthfully", nextScene: "worship", tag: "faithful", feedback: "John 4:17-18 — The woman told Jesus she had no husband, and Jesus revealed that she had five husbands and the man she was with was not her husband.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Stay With Him",
    text: "His knowing is gentle, not shaming.\nStay and be seen.",
    choices: [
      { text: "Stand and answer truthfully", nextScene: "worship", tag: "faithful", feedback: "You stay where you are.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — TRUE WORSHIP
  worship: {
    id: "worship",
    title: "Spirit and Truth",
    text: "\"True worshippers will worship the Father\nin spirit and in truth.\"",
    choices: [
      { text: "Argue over the right mountain", nextScene: "argue_consequence", tag: "doubtful", feedback: "Place is not the point.", isCorrect: false, sentiment: "negative" },
      { text: "Open your heart to worship", nextScene: "messiah", tag: "faithful", feedback: "John 4:23-24 — Jesus explained to the woman that true worshipers will worship the Father in spirit and truth.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Lift Your Heart",
    text: "Spirit and truth need no temple wall.\nWorship from within.",
    choices: [
      { text: "Open your heart to worship", nextScene: "messiah", tag: "faithful", feedback: "Your heart lifts.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — I AM HE
  messiah: {
    id: "messiah",
    title: "I Am He",
    text: "\"I who speak to you,\" he says, \"am he.\"\nThe Messiah stands before you.",
    choices: [
      { text: "Doubt and turn away", nextScene: "doubt_consequence", tag: "doubtful", feedback: "Trust what your heart knows.", isCorrect: false, sentiment: "negative" },
      { text: "Believe him with quiet awe", nextScene: "village", tag: "faithful", feedback: "John 4:25-26 — The woman mentioned that the Messiah was coming, and Jesus declared to her, \"I who speak to you am He.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust the Light",
    text: "His words match the deepest hope.\nBelieve him.",
    choices: [
      { text: "Believe him with quiet awe", nextScene: "village", tag: "faithful", feedback: "Awe steadies you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — TELL THE VILLAGE
  village: {
    id: "village",
    title: "Tell the Village",
    text: "You leave the jar behind and run home.\nThis news cannot wait.",
    choices: [
      { text: "Keep the secret to yourself", nextScene: "hide_consequence", tag: "fearful", feedback: "Joy is meant to be shared.", isCorrect: false, sentiment: "negative" },
      { text: "Call your neighbors to come", nextScene: "ending", tag: "faithful", feedback: "John 4:28-29 — The woman left her water jar and went into the town, telling the people to come and see a man who told her everything she ever did.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Share the Gift",
    text: "Living water overflows to others.\nLet your village come.",
    choices: [
      { text: "Call your neighbors to come", nextScene: "ending", tag: "faithful", feedback: "You call them gladly.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "Come and See",
    text: "Villagers walk toward Jesus together.\n\"Come and see,\" you say.",
    choices: [],
    isFinal: true,
  },
};
