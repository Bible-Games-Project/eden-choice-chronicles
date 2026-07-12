import { StoryScene } from "@/data/stories/creation";

// NICODEMUS — John 3:1-21
// A Pharisee comes to Jesus by night seeking truth.

export const nicodemusScenes: Record<string, StoryScene> = {
  // ACT I — VISIT BY NIGHT
  start: {
    id: "start",
    title: "A Visit by Night",
    text: "Nicodemus comes quietly under the stars.\nHe seeks Jesus while the city sleeps.",
    choices: [
      { text: "Hide from this strange teacher", nextScene: "hide_consequence", tag: "fearful", feedback: "Truth is worth seeking.", isCorrect: false, sentiment: "negative" },
      { text: "Approach him with open heart", nextScene: "greet", tag: "faithful", feedback: "John 3:2 — Nicodemus came to Jesus by night.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Seek Truth",
    text: "Even by night, the honest seeker is welcome.\nDraw near in peace.",
    choices: [
      { text: "Approach him with open heart", nextScene: "greet", tag: "faithful", feedback: "You move toward the light.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — RESPECTFUL GREETING
  greet: {
    id: "greet",
    title: "Rabbi from God",
    text: "\"Rabbi, we know you come from God,\"\nNicodemus says with quiet respect.",
    choices: [
      { text: "Flatter him to gain favor", nextScene: "flatter_consequence", tag: "doubtful", feedback: "Sincerity matters more.", isCorrect: false, sentiment: "negative" },
      { text: "Speak the truth in humility", nextScene: "born_again", tag: "faithful", feedback: "John 3:2 — Nicodemus acknowledged that Jesus was a teacher who had come from God.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flatter_consequence: {
    id: "flatter_consequence",
    title: "Be Sincere",
    text: "He sees the heart, not smooth words.\nCome plainly to him.",
    choices: [
      { text: "Speak the truth in humility", nextScene: "born_again", tag: "faithful", feedback: "You speak from the heart.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — BORN AGAIN
  born_again: {
    id: "born_again",
    title: "Born Again",
    text: "Jesus says softly,\n\"You must be born again to see the kingdom.\"",
    choices: [
      { text: "Ask sincerely what he means", nextScene: "spirit", tag: "faithful", feedback: "John 3:4 — Nicodemus asked Jesus how a man could be born when he is old.", isCorrect: true, sentiment: "positive" },
      { text: "Dismiss it as impossible", nextScene: "dismiss_consequence", tag: "fearful", feedback: "Wait, and listen further.", isCorrect: false, sentiment: "negative" },
      { text: "Mock the strange teaching", nextScene: "mock_consequence", tag: "doubtful", feedback: "Mockery shuts the door.", isCorrect: false, sentiment: "negative" },
    ],
  },
  dismiss_consequence: {
    id: "dismiss_consequence",
    title: "Stay Open",
    text: "What sounds impossible may be Spirit.\nAsk and you will learn.",
    choices: [
      { text: "Ask sincerely what he means", nextScene: "spirit", tag: "faithful", feedback: "You lean in to listen.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Be Humble",
    text: "Wisdom hides from a scornful heart.\nSoften and try again.",
    choices: [
      { text: "Ask sincerely what he means", nextScene: "spirit", tag: "faithful", feedback: "You set pride aside.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE SPIRIT LIKE WIND
  spirit: {
    id: "spirit",
    title: "Like the Wind",
    text: "\"The Spirit is like the wind,\" Jesus breathes.\n\"You hear it, but cannot trace it.\"",
    choices: [
      { text: "Demand to see it first", nextScene: "demand_consequence", tag: "doubtful", feedback: "Some truths are felt, not seen.", isCorrect: false, sentiment: "negative" },
      { text: "Trust what you cannot see", nextScene: "heavenly", tag: "faithful", feedback: "John 3:8 — Jesus explained that the Spirit works like the wind, unseen but felt.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Faith First",
    text: "The wind moves leaves you cannot grasp.\nTrust still moves the soul.",
    choices: [
      { text: "Trust what you cannot see", nextScene: "heavenly", tag: "faithful", feedback: "You breathe in quiet trust.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — HEAVENLY THINGS
  heavenly: {
    id: "heavenly",
    title: "Heavenly Things",
    text: "\"If earthly words confuse you,\nhow will heavenly ones be received?\"",
    choices: [
      { text: "Listen with a quiet mind", nextScene: "love", tag: "faithful", feedback: "John 3:12 — Jesus questioned how Nicodemus would believe heavenly things if he did not believe earthly things.", isCorrect: true, sentiment: "positive" },
      { text: "Argue from your own learning", nextScene: "argue_consequence", tag: "doubtful", feedback: "Pride blocks the door.", isCorrect: false, sentiment: "negative" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Be Still",
    text: "Even teachers must sit and learn.\nLet his words settle.",
    choices: [
      { text: "Listen with a quiet mind", nextScene: "love", tag: "faithful", feedback: "You grow still inside.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — GOD SO LOVED
  love: {
    id: "love",
    title: "So Loved the World",
    text: "\"God so loved the world he gave his Son,\nthat whoever believes may have life.\"",
    choices: [
      { text: "Reject so wide a love", nextScene: "reject_consequence", tag: "fearful", feedback: "His love is for all.", isCorrect: false, sentiment: "negative" },
      { text: "Receive his words in faith", nextScene: "light", tag: "faithful", feedback: "John 3:16 — Jesus taught that God loved the world so much that He gave His only Son.", isCorrect: true, sentiment: "positive" },
    ],
  },
  reject_consequence: {
    id: "reject_consequence",
    title: "Open Your Heart",
    text: "His love is offered freely to you.\nReceive it gently.",
    choices: [
      { text: "Receive his words in faith", nextScene: "light", tag: "faithful", feedback: "You let love in.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — LIGHT AND DARKNESS
  light: {
    id: "light",
    title: "Step into Light",
    text: "\"Whoever lives by truth comes to the light,\nso his deeds may shine.\"",
    choices: [
      { text: "Stay hidden in the dark", nextScene: "hide2_consequence", tag: "fearful", feedback: "The light is kinder than fear.", isCorrect: false, sentiment: "negative" },
      { text: "Step softly into the light", nextScene: "reflect", tag: "faithful", feedback: "John 3:21 — Jesus stated that whoever practices truth comes to the light.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide2_consequence: {
    id: "hide2_consequence",
    title: "Come Forward",
    text: "Hiding wears the heart down.\nLet the light find you.",
    choices: [
      { text: "Step softly into the light", nextScene: "reflect", tag: "faithful", feedback: "You let the light reach you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — REFLECTION
  reflect: {
    id: "reflect",
    title: "Walking Home",
    text: "Nicodemus walks home as dawn rises,\nthe words burning quietly inside.",
    choices: [
      { text: "Forget what you heard tonight", nextScene: "forget_consequence", tag: "fearful", feedback: "Truth asks to be kept.", isCorrect: false, sentiment: "negative" },
      { text: "Carry his words in your heart", nextScene: "ending", tag: "faithful", feedback: "John 3:21 — Nicodemus heard Jesus' words and departed.", isCorrect: true, sentiment: "positive" },
    ],
  },
  forget_consequence: {
    id: "forget_consequence",
    title: "Keep Watch",
    text: "Some seeds grow slowly in the soul.\nDo not lose them.",
    choices: [
      { text: "Carry his words in your heart", nextScene: "ending", tag: "faithful", feedback: "You keep them safe.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "Born of the Spirit",
    text: "Jesus stands in the morning light.\n\"Be born of the Spirit, and live.\"",
    choices: [],
    isFinal: true,
  },
};
