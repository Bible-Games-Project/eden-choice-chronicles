import { StoryScene } from "@/data/stories/creation";

// JESUS IN THE TEMPLE — Luke 2:41-52
// You ARE the young Jesus, twelve years old, in Jerusalem with your family.

export const jesusTempleScenes: Record<string, StoryScene> = {
  // ACT I — JOURNEY TO JERUSALEM
  start: {
    id: "start",
    title: "On the Road",
    text: "The pilgrims walk toward Jerusalem.\nThe feast of Passover draws near.",
    choices: [
      { text: "Run ahead alone, far from them", nextScene: "stray_consequence", tag: "rash", feedback: "Stay near your family.", isCorrect: false, sentiment: "negative" },
      { text: "Walk beside Mary and Joseph", nextScene: "temple", tag: "faithful", feedback: "You walk in quiet joy.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse to go to the feast", nextScene: "refuse_consequence", tag: "faithless", feedback: "The feast is sacred.", isCorrect: false, sentiment: "negative" },
    ],
  },
  stray_consequence: {
    id: "stray_consequence",
    title: "Walk Together",
    text: "The road is long and crowded.\nStay near your parents.",
    choices: [
      { text: "Walk beside Mary and Joseph", nextScene: "temple", tag: "faithful", feedback: "You return to their side.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Honor the Feast",
    text: "Passover is the holy memory of God.\nYou must go.",
    choices: [
      { text: "Walk beside Mary and Joseph", nextScene: "temple", tag: "faithful", feedback: "You step onto the road.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — AT THE TEMPLE
  temple: {
    id: "temple",
    title: "The Temple Courts",
    text: "Sunlight falls on the great stones.\nVoices of teachers fill the air.",
    choices: [
      { text: "Buy bread in the market", nextScene: "market_consequence", tag: "worldly", feedback: "Something deeper calls you.", isCorrect: false, sentiment: "negative" },
      { text: "Enter and listen to the teachers", nextScene: "stay", tag: "faithful", feedback: "You step inside, drawn to the words.", isCorrect: true, sentiment: "positive" },
    ],
  },
  market_consequence: {
    id: "market_consequence",
    title: "His Father's House",
    text: "The temple is your true place.\nGo where wisdom is spoken.",
    choices: [
      { text: "Enter and listen to the teachers", nextScene: "stay", tag: "faithful", feedback: "You walk into the temple.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — STAYING BEHIND
  stay: {
    id: "stay",
    title: "When the Caravan Leaves",
    text: "The pilgrims begin to depart.\nThe teachers still speak of God.",
    choices: [
      { text: "Stay to hear the words of God", nextScene: "search", tag: "faithful", feedback: "You sit at their feet.", isCorrect: true, sentiment: "positive" },
      { text: "Run after the caravan now", nextScene: "follow_consequence", tag: "fearful", feedback: "Your true place is here.", isCorrect: false, sentiment: "negative" },
      { text: "Hide in the streets to play", nextScene: "hide_consequence", tag: "rash", feedback: "Do not waste this hour.", isCorrect: false, sentiment: "negative" },
    ],
  },
  follow_consequence: {
    id: "follow_consequence",
    title: "Stay and Learn",
    text: "The Father's house holds you.\nYou are meant to remain.",
    choices: [
      { text: "Stay to hear the words of God", nextScene: "search", tag: "faithful", feedback: "You sit again to listen.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Sacred Time",
    text: "Wisdom does not wait for play.\nReturn to the temple.",
    choices: [
      { text: "Stay to hear the words of God", nextScene: "search", tag: "faithful", feedback: "You take your place again.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — MARY AND JOSEPH SEARCH
  search: {
    id: "search",
    title: "They Are Searching",
    text: "Three days pass in the temple.\nMary and Joseph walk Jerusalem in fear.",
    choices: [
      { text: "Slip away and hide from them", nextScene: "flee_consequence", tag: "faithless", feedback: "Do not flee from love.", isCorrect: false, sentiment: "negative" },
      { text: "Remain where they will find you", nextScene: "teachers", tag: "faithful", feedback: "You sit in quiet trust.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Be Found",
    text: "They love you and seek you.\nWait where you belong.",
    choices: [
      { text: "Remain where they will find you", nextScene: "teachers", tag: "faithful", feedback: "You stay in the temple.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — DISCUSSING WITH TEACHERS
  teachers: {
    id: "teachers",
    title: "Among the Wise",
    text: "The elders ask many questions.\nThey wait for your answer.",
    choices: [
      { text: "Stay silent and say nothing", nextScene: "silent_consequence", tag: "fearful", feedback: "Speak the truth in you.", isCorrect: false, sentiment: "negative" },
      { text: "Boast of your own greatness", nextScene: "boast_consequence", tag: "proud", feedback: "Wisdom is humble.", isCorrect: false, sentiment: "negative" },
      { text: "Answer with humble understanding", nextScene: "reunion", tag: "faithful", feedback: "They marvel at your words.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Speak Gently",
    text: "Truth lives within you.\nLet it be heard.",
    choices: [
      { text: "Answer with humble understanding", nextScene: "reunion", tag: "faithful", feedback: "Your soft voice fills the room.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Be Humble",
    text: "Wisdom is not for boasting.\nSpeak with quiet grace.",
    choices: [
      { text: "Answer with humble understanding", nextScene: "reunion", tag: "faithful", feedback: "You speak with calm light.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — REUNION
  reunion: {
    id: "reunion",
    title: "Mary Finds You",
    text: "She weeps:\n\"Why have you done this to us?\"",
    choices: [
      { text: "Blame her for losing you", nextScene: "blame_consequence", tag: "proud", feedback: "Honor your mother.", isCorrect: false, sentiment: "negative" },
      { text: "\"I was in my Father's house.\"", nextScene: "return", tag: "faithful", feedback: "She holds the words in her heart.", isCorrect: true, sentiment: "positive" },
      { text: "Run from her in shame", nextScene: "shame_consequence", tag: "fearful", feedback: "Do not run from her love.", isCorrect: false, sentiment: "negative" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Speak with Love",
    text: "She is your mother.\nAnswer her with grace.",
    choices: [
      { text: "\"I was in my Father's house.\"", nextScene: "return", tag: "faithful", feedback: "Her tears soften.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shame_consequence: {
    id: "shame_consequence",
    title: "Stay With Her",
    text: "She has searched three days.\nGive her the truth.",
    choices: [
      { text: "\"I was in my Father's house.\"", nextScene: "return", tag: "faithful", feedback: "She embraces you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  return: {
    id: "return",
    title: "Home to Nazareth",
    text: "You walk with them under the dawn.\nYou grow in wisdom and grace.",
    choices: [],
    isFinal: true,
  },
};
