import { StoryScene } from "@/data/stories/creation";

// SOLOMON ASKS FOR WISDOM — 1 Kings 3
// You ARE Solomon. Humility, discernment, wisdom over wealth.

export const solomonWisdomScenes: Record<string, StoryScene> = {
  // ACT I — A YOUNG KING
  start: {
    id: "start",
    title: "The Crown Is Heavy",
    text: "The throne of David is yours.\nThe kingdom waits for your first word.",
    choices: [
      { text: "Boast of your new power", nextScene: "boast_consequence", tag: "proud", feedback: "A king's pride blinds his sight.", isCorrect: false, sentiment: "negative" },
      { text: "Tax the people for gold", nextScene: "gold_consequence", tag: "greed", feedback: "Wealth is not what God seeks.", isCorrect: false, sentiment: "negative" },
      { text: "Seek the Lord at Gibeon", nextScene: "gibeon", tag: "faithful", feedback: "Begin every reign with God.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Lay Down Your Pride",
    text: "Greatness is given, not taken.\nKneel before the One who gives.",
    choices: [
      { text: "Travel to Gibeon to worship", nextScene: "gibeon", tag: "faithful", feedback: "You set out at first light.", isCorrect: true, sentiment: "positive" },
    ],
  },
  gold_consequence: {
    id: "gold_consequence",
    title: "Not by Treasure",
    text: "A throne built on greed will crack.\nSeek God before all else.",
    choices: [
      { text: "Travel to Gibeon to worship", nextScene: "gibeon", tag: "faithful", feedback: "You leave the treasury behind.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE ALTAR AT GIBEON
  gibeon: {
    id: "gibeon",
    title: "The High Place",
    text: "A thousand offerings rise from the altar.\nThe sky burns soft and gold.",
    choices: [
      { text: "Offer with humble heart", nextScene: "dream", tag: "faithful", feedback: "The Lord receives a quiet flame.", isCorrect: true, sentiment: "positive" },
      { text: "Offer to be seen by men", nextScene: "seen_consequence", tag: "proud", feedback: "Worship is not for crowds.", isCorrect: false, sentiment: "negative" },
    ],
  },
  seen_consequence: {
    id: "seen_consequence",
    title: "For God Alone",
    text: "The altar is not a stage.\nGive what only the Lord will see.",
    choices: [
      { text: "Bow alone before the altar", nextScene: "dream", tag: "faithful", feedback: "Your voice softens to a whisper.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE DREAM
  dream: {
    id: "dream",
    title: "Ask What I Shall Give",
    text: "In sleep, a voice fills the sky.\n\"Ask what I shall give you.\"",
    choices: [
      { text: "Ask for great riches", nextScene: "riches_consequence", tag: "greed", feedback: "Riches will not lead a people.", isCorrect: false, sentiment: "negative" },
      { text: "Ask to defeat your enemies", nextScene: "enemies_consequence", tag: "proud", feedback: "Power without wisdom destroys.", isCorrect: false, sentiment: "negative" },
      { text: "Ask for a discerning heart", nextScene: "granted", tag: "faithful", feedback: "Wisdom is the greatest gift.", isCorrect: true, sentiment: "positive" },
    ],
  },
  riches_consequence: {
    id: "riches_consequence",
    title: "Choose Higher",
    text: "Gold cannot judge between right and wrong.\nAsk for something greater.",
    choices: [
      { text: "Ask for a discerning heart", nextScene: "granted", tag: "faithful", feedback: "Your voice trembles with humility.", isCorrect: true, sentiment: "positive" },
    ],
  },
  enemies_consequence: {
    id: "enemies_consequence",
    title: "Lay Down the Sword",
    text: "Long life and victory pass away.\nAsk for what endures.",
    choices: [
      { text: "Ask for a discerning heart", nextScene: "granted", tag: "faithful", feedback: "You bow lower in the dream.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE BLESSING
  granted: {
    id: "granted",
    title: "Wisdom and More",
    text: "\"Because you asked this, I give it.\nAnd riches and honor also.\"",
    choices: [
      { text: "Boast of your new gift", nextScene: "boast2_consequence", tag: "proud", feedback: "Wisdom kept in pride is lost.", isCorrect: false, sentiment: "negative" },
      { text: "Wake and serve the people", nextScene: "judgment", tag: "faithful", feedback: "True wisdom acts in love.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast2_consequence: {
    id: "boast2_consequence",
    title: "Walk in Humility",
    text: "A wise heart speaks little of itself.\nReturn quietly to your throne.",
    choices: [
      { text: "Wake and serve the people", nextScene: "judgment", tag: "faithful", feedback: "Dawn finds you ready.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE FIRST JUDGMENT
  judgment: {
    id: "judgment",
    title: "Two Mothers, One Child",
    text: "Two women claim the same living child.\nThe court watches in silence.",
    choices: [
      { text: "Choose by the louder voice", nextScene: "loud_consequence", tag: "rash", feedback: "Truth is not measured in volume.", isCorrect: false, sentiment: "negative" },
      { text: "Cast lots to decide", nextScene: "lots_consequence", tag: "lazy", feedback: "Wisdom asks deeper questions.", isCorrect: false, sentiment: "negative" },
      { text: "Offer to divide the child", nextScene: "kingdom", tag: "faithful", feedback: "True love will reveal itself.", isCorrect: true, sentiment: "positive" },
    ],
  },
  loud_consequence: {
    id: "loud_consequence",
    title: "Listen Beneath the Words",
    text: "Anger and grief sound the same.\nLook for the heart of a mother.",
    choices: [
      { text: "Offer to divide the child", nextScene: "kingdom", tag: "faithful", feedback: "You raise your sword as a test.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lots_consequence: {
    id: "lots_consequence",
    title: "A King Must Discern",
    text: "Chance does not bring justice.\nLet wisdom find the truth.",
    choices: [
      { text: "Offer to divide the child", nextScene: "kingdom", tag: "faithful", feedback: "You frame your test with care.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — A KINGDOM AT PEACE
  kingdom: {
    id: "kingdom",
    title: "All Israel Hears",
    text: "The true mother begs to spare the child.\nThe land marvels at the wisdom of God.",
    choices: [],
    isFinal: true,
  },
};
