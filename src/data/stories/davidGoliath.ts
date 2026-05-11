import { StoryScene } from "@/data/stories/creation";

// DAVID AND GOLIATH — 1 Samuel 17
// You ARE David. Faith versus fear under impossible odds.

export const davidGoliathScenes: Record<string, StoryScene> = {
  // ACT I — TWO ARMIES IN THE VALLEY
  start: {
    id: "start",
    title: "Valley of Elah",
    text: "Two armies face each other.\nDust drifts between silent hills.",
    choices: [
      { text: "Flee back to your sheep", nextScene: "flee_consequence", tag: "fearful", feedback: "The Lord called you here.", isCorrect: false, sentiment: "negative" },
      { text: "Bring bread to your brothers", nextScene: "challenge", tag: "obedient", feedback: "You climb the ridge with your load.", isCorrect: true, sentiment: "positive" },
      { text: "Boast to passing soldiers", nextScene: "boast_consequence", tag: "proud", feedback: "Words without faith are wind.", isCorrect: false, sentiment: "negative" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Do Not Turn Back",
    text: "God has set your steps here.\nGo to your brothers.",
    choices: [
      { text: "Bring bread to your brothers", nextScene: "challenge", tag: "obedient", feedback: "You shoulder the satchel.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Quiet Your Pride",
    text: "Save your strength for the Lord.\nDeliver what your father sent.",
    choices: [
      { text: "Bring bread to your brothers", nextScene: "challenge", tag: "obedient", feedback: "You lower your voice.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE GIANT'S CHALLENGE
  challenge: {
    id: "challenge",
    title: "The Giant Roars",
    text: "\"Send me a man!\" Goliath shouts.\nIsrael's army trembles in silence.",
    choices: [
      { text: "Hide behind the soldiers", nextScene: "hide_consequence", tag: "fearful", feedback: "Fear cannot silence God.", isCorrect: false, sentiment: "negative" },
      { text: "Curse the giant aloud", nextScene: "curse_consequence", tag: "rash", feedback: "Faith answers, not anger.", isCorrect: false, sentiment: "negative" },
      { text: "Ask, \"Who defies the living God?\"", nextScene: "saul_tent", tag: "faithful", feedback: "Your question rises like fire.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Stand in the Open",
    text: "The Lord is greater than the giant.\nLift your eyes.",
    choices: [
      { text: "Ask, \"Who defies the living God?\"", nextScene: "saul_tent", tag: "faithful", feedback: "You step into the light.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Speak with Faith",
    text: "Anger is not your weapon.\nLet trust answer instead.",
    choices: [
      { text: "Ask, \"Who defies the living God?\"", nextScene: "saul_tent", tag: "faithful", feedback: "You steady your breath.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — IN SAUL'S TENT
  saul_tent: {
    id: "saul_tent",
    title: "Saul Offers His Armor",
    text: "Heavy bronze, polished and cold.\n\"Wear this, boy. You will need it.\"",
    choices: [
      { text: "Wear the king's armor", nextScene: "armor_consequence", tag: "doubting", feedback: "It was not made for you.", isCorrect: false, sentiment: "negative" },
      { text: "Set it aside, trust the Lord", nextScene: "brook", tag: "faithful", feedback: "You step out lighter than air.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse to fight at all", nextScene: "refuse_consequence", tag: "fearful", feedback: "God has given you this hour.", isCorrect: false, sentiment: "negative" },
    ],
  },
  armor_consequence: {
    id: "armor_consequence",
    title: "Take It Off",
    text: "You cannot move beneath it.\nGod has another way.",
    choices: [
      { text: "Set it aside, trust the Lord", nextScene: "brook", tag: "faithful", feedback: "You let it fall to the ground.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Do Not Refuse",
    text: "The Lord delivered you from lion and bear.\nHe will deliver you now.",
    choices: [
      { text: "Set it aside, trust the Lord", nextScene: "brook", tag: "faithful", feedback: "Your hands grow steady.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE BROOK
  brook: {
    id: "brook",
    title: "Five Smooth Stones",
    text: "Cool water runs over your feet.\nThe stones lie still and waiting.",
    choices: [
      { text: "Grab the largest jagged rock", nextScene: "jagged_consequence", tag: "rash", feedback: "Trust God's simple gifts.", isCorrect: false, sentiment: "negative" },
      { text: "Take a sword from a soldier", nextScene: "sword_consequence", tag: "doubting", feedback: "Your sling is enough with God.", isCorrect: false, sentiment: "negative" },
      { text: "Choose five smooth stones", nextScene: "duel", tag: "faithful", feedback: "You weigh them in your palm.", isCorrect: true, sentiment: "positive" },
    ],
  },
  jagged_consequence: {
    id: "jagged_consequence",
    title: "Choose Wisely",
    text: "The smooth stones fly true.\nLet the brook give what God provides.",
    choices: [
      { text: "Choose five smooth stones", nextScene: "duel", tag: "faithful", feedback: "You set the rough rock aside.", isCorrect: true, sentiment: "positive" },
    ],
  },
  sword_consequence: {
    id: "sword_consequence",
    title: "Trust the Sling",
    text: "The Lord saves not with sword or spear.\nReturn to the brook.",
    choices: [
      { text: "Choose five smooth stones", nextScene: "duel", tag: "faithful", feedback: "You kneel by the water.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE DUEL
  duel: {
    id: "duel",
    title: "Face to Face",
    text: "Goliath laughs at your size.\nYour sling rests against your hand.",
    choices: [
      { text: "Run and pray quietly", nextScene: "pray_consequence", tag: "fearful", feedback: "Speak boldly in His name.", isCorrect: false, sentiment: "negative" },
      { text: "Match his insults with your own", nextScene: "insult_consequence", tag: "rash", feedback: "Speak of the Lord, not yourself.", isCorrect: false, sentiment: "negative" },
      { text: "\"I come in the name of the Lord\"", nextScene: "victory", tag: "faithful", feedback: "Your sling whirls into the wind.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pray_consequence: {
    id: "pray_consequence",
    title: "Stand and Speak",
    text: "Faith is not silent here.\nDeclare the name of the Lord.",
    choices: [
      { text: "\"I come in the name of the Lord\"", nextScene: "victory", tag: "faithful", feedback: "Your voice carries across the valley.", isCorrect: true, sentiment: "positive" },
    ],
  },
  insult_consequence: {
    id: "insult_consequence",
    title: "Honor the Lord",
    text: "This battle belongs to God.\nLet His name go before you.",
    choices: [
      { text: "\"I come in the name of the Lord\"", nextScene: "victory", tag: "faithful", feedback: "You lift the sling high.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — VICTORY
  victory: {
    id: "victory",
    title: "The Giant Falls",
    text: "One stone, one breath, one God.\nIsrael's shout fills the hills.",
    choices: [],
    isFinal: true,
  },
};
