import { StoryScene } from "@/data/stories/creation";

// WISE MEN — Matthew 2:1-12
// You ARE one of the Magi from the East.

export const wiseMenScenes: Record<string, StoryScene> = {
  // ACT I — THE STAR APPEARS
  start: {
    id: "start",
    title: "A New Star",
    text: "A bright star rises in the east.\nIt shines unlike any other.",
    choices: [
      { text: "Ignore it as nothing", nextScene: "ignore_consequence", tag: "blind", feedback: "Heaven speaks through this sign.", isCorrect: false, sentiment: "negative" },
      { text: "Search the ancient prophecies", nextScene: "journey", tag: "wise", feedback: "A king is born in Judea.", isCorrect: true, sentiment: "positive" },
      { text: "Fear it as an omen", nextScene: "fear_consequence", tag: "fearful", feedback: "It is a sign of joy, not dread.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Look Again",
    text: "The star will not be hidden.\nIt calls you onward.",
    choices: [
      { text: "Search the ancient prophecies", nextScene: "journey", tag: "wise", feedback: "The scrolls reveal a king.", isCorrect: true, sentiment: "positive" },
    ],
  },
  fear_consequence: {
    id: "fear_consequence",
    title: "Take Heart",
    text: "This light brings hope.\nFollow where it leads.",
    choices: [
      { text: "Search the ancient prophecies", nextScene: "journey", tag: "wise", feedback: "Your heart settles.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — JOURNEY FROM THE EAST
  journey: {
    id: "journey",
    title: "The Long Road",
    text: "You ride west across endless dunes.\nThe star moves before you.",
    choices: [
      { text: "Turn back, the road is hard", nextScene: "turn_back_consequence", tag: "weak", feedback: "Do not lose heart.", isCorrect: false, sentiment: "negative" },
      { text: "Press on toward Jerusalem", nextScene: "herod", tag: "faithful", feedback: "Your camels will not falter.", isCorrect: true, sentiment: "positive" },
      { text: "Seek a king's palace first", nextScene: "herod", tag: "logical", feedback: "A king must dwell with kings.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turn_back_consequence: {
    id: "turn_back_consequence",
    title: "Forward Still",
    text: "The promise lies ahead.\nDo not turn from it now.",
    choices: [
      { text: "Press on toward Jerusalem", nextScene: "herod", tag: "faithful", feedback: "You spur your camel on.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — KING HEROD
  herod: {
    id: "herod",
    title: "Before Herod",
    text: "\"Where is the newborn King of the Jews?\"\nHerod's eyes grow cold.",
    choices: [
      { text: "Swear loyalty to Herod alone", nextScene: "loyalty_consequence", tag: "faithless", feedback: "Only one King is worthy.", isCorrect: false, sentiment: "negative" },
      { text: "Listen to the priests' answer", nextScene: "bethlehem", tag: "wise", feedback: "Bethlehem, the prophets say.", isCorrect: true, sentiment: "positive" },
    ],
  },
  loyalty_consequence: {
    id: "loyalty_consequence",
    title: "One True King",
    text: "Herod is not the One you seek.\nKeep your eyes on the star.",
    choices: [
      { text: "Listen to the priests' answer", nextScene: "bethlehem", tag: "wise", feedback: "Bethlehem awaits.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — FOLLOWING THE STAR
  bethlehem: {
    id: "bethlehem",
    title: "The Star Stops",
    text: "The star halts above a humble house.\nHere, the King is found.",
    choices: [
      { text: "Doubt — this cannot be the place", nextScene: "doubt_consequence", tag: "doubtful", feedback: "Heaven points here.", isCorrect: false, sentiment: "negative" },
      { text: "Knock and enter with reverence", nextScene: "worship", tag: "faithful", feedback: "Your hand trembles at the door.", isCorrect: true, sentiment: "positive" },
      { text: "Wait outside until morning", nextScene: "wait_consequence", tag: "fearful", feedback: "The King receives you now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust the Sign",
    text: "The star itself has led you here.\nBelieve and enter.",
    choices: [
      { text: "Knock and enter with reverence", nextScene: "worship", tag: "faithful", feedback: "You step inside the warm light.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Enter Now",
    text: "Do not delay before the King.\nHe waits within.",
    choices: [
      { text: "Knock and enter with reverence", nextScene: "worship", tag: "faithful", feedback: "You cross the threshold.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — WORSHIP AND GIFTS
  worship: {
    id: "worship",
    title: "Gold, Frankincense, Myrrh",
    text: "The child meets your eyes.\nYou kneel and open your treasures.",
    choices: [
      { text: "Keep the finest gifts for yourself", nextScene: "greed_consequence", tag: "greedy", feedback: "He is worthy of all.", isCorrect: false, sentiment: "negative" },
      { text: "Offer all three gifts to the child", nextScene: "dream", tag: "faithful", feedback: "Your heart bows with the gifts.", isCorrect: true, sentiment: "positive" },
    ],
  },
  greed_consequence: {
    id: "greed_consequence",
    title: "Give All",
    text: "He is the King of kings.\nHold nothing back.",
    choices: [
      { text: "Offer all three gifts to the child", nextScene: "dream", tag: "faithful", feedback: "You place each gift before him.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE WARNING DREAM
  dream: {
    id: "dream",
    title: "A Warning in Sleep",
    text: "In a dream you are warned:\n\"Do not return to Herod.\"",
    choices: [
      { text: "Return to Herod as promised", nextScene: "betray_consequence", tag: "faithless", feedback: "Heaven has spoken.", isCorrect: false, sentiment: "negative" },
      { text: "Take another road home", nextScene: "return", tag: "faithful", feedback: "You obey the holy warning.", isCorrect: true, sentiment: "positive" },
      { text: "Stay hidden in Bethlehem", nextScene: "stay_consequence", tag: "fearful", feedback: "Your road lies east again.", isCorrect: false, sentiment: "negative" },
    ],
  },
  betray_consequence: {
    id: "betray_consequence",
    title: "Obey the Dream",
    text: "Herod plots against the child.\nDo not lead him to the King.",
    choices: [
      { text: "Take another road home", nextScene: "return", tag: "faithful", feedback: "You turn from Herod's road.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stay_consequence: {
    id: "stay_consequence",
    title: "Go Home",
    text: "Your task here is fulfilled.\nReturn by another way.",
    choices: [
      { text: "Take another road home", nextScene: "return", tag: "faithful", feedback: "You set out at first light.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  return: {
    id: "return",
    title: "Another Road",
    text: "You ride east as dawn breaks.\nYou have seen the King.",
    choices: [],
    isFinal: true,
  },
};
