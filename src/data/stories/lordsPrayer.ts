import { StoryScene } from "@/data/stories/creation";

// THE LORD'S PRAYER — Matthew 6:5-15, Luke 11:1-4
// You are a disciple learning to pray.

export const lordsPrayerScenes: Record<string, StoryScene> = {
  // ACT I — DISCIPLES ASK
  start: {
    id: "start",
    title: "Teach Us to Pray",
    text: "The disciples approach quietly.\n\"Lord, teach us how to pray.\"",
    choices: [
      { text: "Pray loud in the street", nextScene: "loud_consequence", tag: "doubtful", feedback: "Prayer is not a show.", isCorrect: false, sentiment: "negative" },
      { text: "Ask Jesus humbly", nextScene: "our_father", tag: "faithful", feedback: "Luke 11:1 — One of Jesus' disciples asked Him to teach them to pray.", isCorrect: true, sentiment: "positive" },
      { text: "Repeat empty phrases", nextScene: "empty_consequence", tag: "fearful", feedback: "Words alone are not faith.", isCorrect: false, sentiment: "negative" },
    ],
  },
  loud_consequence: {
    id: "loud_consequence",
    title: "Not for Show",
    text: "Prayer is not for the crowd.\nIt is for the Father.",
    choices: [
      { text: "Ask Jesus humbly", nextScene: "our_father", tag: "faithful", feedback: "You lower your voice.", isCorrect: true, sentiment: "positive" },
    ],
  },
  empty_consequence: {
    id: "empty_consequence",
    title: "Speak from the Heart",
    text: "The Father hears the heart, not noise.\nSpeak simply.",
    choices: [
      { text: "Ask Jesus humbly", nextScene: "our_father", tag: "faithful", feedback: "You breathe and listen.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — OUR FATHER
  our_father: {
    id: "our_father",
    title: "Our Father",
    text: "\"Our Father in heaven,\nhallowed be your name.\"",
    choices: [
      { text: "Call God a stranger", nextScene: "stranger_consequence", tag: "doubtful", feedback: "He is your Father.", isCorrect: false, sentiment: "negative" },
      { text: "Honor God as Father", nextScene: "bread", tag: "faithful", feedback: "Matthew 6:9 — Jesus taught His disciples to hallow God's name.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stranger_consequence: {
    id: "stranger_consequence",
    title: "He Knows You",
    text: "He is near, not distant.\nCall him Father.",
    choices: [
      { text: "Honor God as Father", nextScene: "bread", tag: "faithful", feedback: "Your heart softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — DAILY BREAD
  bread: {
    id: "bread",
    title: "Daily Bread",
    text: "\"Give us this day\nour daily bread.\"",
    choices: [
      { text: "Hoard for tomorrow", nextScene: "hoard_consequence", tag: "fearful", feedback: "Trust him today.", isCorrect: false, sentiment: "negative" },
      { text: "Demand more than enough", nextScene: "greed_consequence", tag: "doubtful", feedback: "Ask only for today.", isCorrect: false, sentiment: "negative" },
      { text: "Ask only for today", nextScene: "forgive", tag: "faithful", feedback: "Matthew 6:11 — Jesus taught His disciples to ask for their daily bread.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hoard_consequence: {
    id: "hoard_consequence",
    title: "Trust Today",
    text: "Tomorrow is in his hands.\nAsk only for now.",
    choices: [
      { text: "Ask only for today", nextScene: "forgive", tag: "faithful", feedback: "You exhale slowly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  greed_consequence: {
    id: "greed_consequence",
    title: "Enough Is Enough",
    text: "He gives what you need.\nThat is enough.",
    choices: [
      { text: "Ask only for today", nextScene: "forgive", tag: "faithful", feedback: "Peace settles in.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — FORGIVE US
  forgive: {
    id: "forgive",
    title: "Forgive Us",
    text: "\"Forgive us our debts,\nour failings, our sins.\"",
    choices: [
      { text: "Hide your sins from him", nextScene: "hide_consequence", tag: "fearful", feedback: "Bring them into light.", isCorrect: false, sentiment: "negative" },
      { text: "Confess and ask mercy", nextScene: "forgive_others", tag: "faithful", feedback: "Matthew 6:12 — Jesus taught His disciples to ask God to forgive their debts.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Come Into Light",
    text: "He already knows your heart.\nSpeak honestly.",
    choices: [
      { text: "Confess and ask mercy", nextScene: "forgive_others", tag: "faithful", feedback: "You feel lighter.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — AS WE FORGIVE OTHERS
  forgive_others: {
    id: "forgive_others",
    title: "As We Forgive",
    text: "\"As we also forgive\nthose who sin against us.\"",
    choices: [
      { text: "Hold the wound tightly", nextScene: "wound_consequence", tag: "fearful", feedback: "Release them too.", isCorrect: false, sentiment: "negative" },
      { text: "Demand they pay first", nextScene: "demand_consequence", tag: "doubtful", feedback: "Mercy goes first.", isCorrect: false, sentiment: "negative" },
      { text: "Release those who hurt you", nextScene: "deliver", tag: "faithful", feedback: "Matthew 6:12 — Jesus taught His disciples to forgive those who sin against them.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wound_consequence: {
    id: "wound_consequence",
    title: "Let Go",
    text: "Mercy received must be given.\nOpen your hand.",
    choices: [
      { text: "Release those who hurt you", nextScene: "deliver", tag: "faithful", feedback: "Bitterness drains away.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Mercy First",
    text: "You were forgiven freely.\nForgive freely too.",
    choices: [
      { text: "Release those who hurt you", nextScene: "deliver", tag: "faithful", feedback: "Peace returns.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — DELIVERANCE
  deliver: {
    id: "deliver",
    title: "Deliver Us",
    text: "\"Lead us not into temptation,\nbut deliver us from evil.\"",
    choices: [
      { text: "Trust only your own strength", nextScene: "self_consequence", tag: "doubtful", feedback: "Lean on him.", isCorrect: false, sentiment: "negative" },
      { text: "Ask the Father to guard you", nextScene: "private", tag: "faithful", feedback: "Matthew 6:13 — Jesus taught His disciples to ask God to deliver them from evil.", isCorrect: true, sentiment: "positive" },
    ],
  },
  self_consequence: {
    id: "self_consequence",
    title: "Lean on Him",
    text: "You are not alone in the storm.\nAsk for his help.",
    choices: [
      { text: "Ask the Father to guard you", nextScene: "private", tag: "faithful", feedback: "You feel held.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — PRIVATE PRAYER
  private: {
    id: "private",
    title: "Go Into Your Room",
    text: "\"When you pray, go to your room.\nShut the door. Pray in secret.\"",
    choices: [
      { text: "Boast of your devotion", nextScene: "boast_consequence", tag: "doubtful", feedback: "He sees in secret.", isCorrect: false, sentiment: "negative" },
      { text: "Pray quietly, alone", nextScene: "ending", tag: "faithful", feedback: "Matthew 6:6 — Jesus taught His disciples to go into their room and shut the door to pray to their Father in secret.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "In Secret",
    text: "Your Father who sees in secret\nwill reward you.",
    choices: [
      { text: "Pray quietly, alone", nextScene: "ending", tag: "faithful", feedback: "You shut the door.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "He Hears You",
    text: "A small lamp burns beside you.\nYou are not alone here.",
    choices: [],
    isFinal: true,
  },
};
