import { StoryScene } from "@/data/stories/creation";

// FEEDING THE 5000 — Matthew 14 / Mark 6 / Luke 9 / John 6
// You are a disciple beside Jesus on a hillside.

export const feeding5000Scenes: Record<string, StoryScene> = {
  // ACT I — THE CROWD
  start: {
    id: "start",
    title: "The Crowd Follows",
    text: "Thousands have climbed the hill.\nThey hunger for his every word.",
    choices: [
      { text: "Send them away hungry", nextScene: "send_away", tag: "fearful", feedback: "He has compassion on them.", isCorrect: false, sentiment: "negative" },
      { text: "Watch him with compassion", nextScene: "compassion", tag: "faithful", feedback: "His heart sees their need.", isCorrect: true, sentiment: "positive" },
      { text: "Tell him to rest first", nextScene: "rest_consequence", tag: "doubtful", feedback: "He chooses mercy now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  send_away: {
    id: "send_away",
    title: "He Will Not Turn Them Away",
    text: "His eyes hold the whole crowd.\nNone will leave empty.",
    choices: [
      { text: "Watch him with compassion", nextScene: "compassion", tag: "faithful", feedback: "You feel his heart.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rest_consequence: {
    id: "rest_consequence",
    title: "Mercy First",
    text: "Their hunger is his concern.\nStand ready beside him.",
    choices: [
      { text: "Watch him with compassion", nextScene: "compassion", tag: "faithful", feedback: "You step closer.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE WORRY
  compassion: {
    id: "compassion",
    title: "Evening Falls",
    text: "\"They have nothing to eat.\"\nThe disciples murmur in fear.",
    choices: [
      { text: "Count the coins we lack", nextScene: "count_consequence", tag: "doubtful", feedback: "Money is not the answer.", isCorrect: false, sentiment: "negative" },
      { text: "Search the crowd for food", nextScene: "boy", tag: "faithful", feedback: "Even little can become much.", isCorrect: true, sentiment: "positive" },
    ],
  },
  count_consequence: {
    id: "count_consequence",
    title: "Not by Silver",
    text: "Two hundred coins would not be enough.\nLook with new eyes.",
    choices: [
      { text: "Search the crowd for food", nextScene: "boy", tag: "faithful", feedback: "Hope rises.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE OFFERING
  boy: {
    id: "boy",
    title: "A Small Offering",
    text: "A boy lifts a humble basket.\nFive loaves. Two small fish.",
    choices: [
      { text: "Dismiss it as too little", nextScene: "dismiss_consequence", tag: "doubtful", feedback: "Bring it to him.", isCorrect: false, sentiment: "negative" },
      { text: "Mock the small gift", nextScene: "mock_consequence", tag: "fearful", feedback: "Heaven honors small hands.", isCorrect: false, sentiment: "negative" },
      { text: "Bring it to Jesus", nextScene: "bless", tag: "faithful", feedback: "Faith places it in his hands.", isCorrect: true, sentiment: "positive" },
    ],
  },
  dismiss_consequence: {
    id: "dismiss_consequence",
    title: "Little Is Much",
    text: "In his hands, little is plenty.\nReceive the boy's gift.",
    choices: [
      { text: "Bring it to Jesus", nextScene: "bless", tag: "faithful", feedback: "You smile at the boy.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Honor the Gift",
    text: "His brave little heart deserves more.\nCarry his basket gently.",
    choices: [
      { text: "Bring it to Jesus", nextScene: "bless", tag: "faithful", feedback: "You kneel and accept.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE BLESSING
  bless: {
    id: "bless",
    title: "He Lifts His Eyes",
    text: "He raises the bread to heaven.\nA hush falls on the hillside.",
    choices: [
      { text: "Walk away in unbelief", nextScene: "unbelief_consequence", tag: "doubtful", feedback: "Stay. Watch. Believe.", isCorrect: false, sentiment: "negative" },
      { text: "Bow your head and trust", nextScene: "distribute", tag: "faithful", feedback: "Heaven answers.", isCorrect: true, sentiment: "positive" },
    ],
  },
  unbelief_consequence: {
    id: "unbelief_consequence",
    title: "Stay and See",
    text: "The miracle begins in his hands.\nDo not miss it.",
    choices: [
      { text: "Bow your head and trust", nextScene: "distribute", tag: "faithful", feedback: "You linger.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE FEAST
  distribute: {
    id: "distribute",
    title: "Pass It On",
    text: "He breaks. He gives. He breaks again.\nThe baskets do not empty.",
    choices: [
      { text: "Hide some bread for yourself", nextScene: "hide_consequence", tag: "fearful", feedback: "Share freely. There is enough.", isCorrect: false, sentiment: "negative" },
      { text: "Serve the crowd row by row", nextScene: "feast", tag: "faithful", feedback: "Abundance flows through you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Trust the Giver",
    text: "There is plenty for every mouth.\nKeep no portion back.",
    choices: [
      { text: "Serve the crowd row by row", nextScene: "feast", tag: "faithful", feedback: "Your hands open wide.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — LEFTOVERS
  feast: {
    id: "feast",
    title: "All Are Filled",
    text: "Families eat together on green grass.\nNo one rises hungry.",
    choices: [
      { text: "Leave the scraps to rot", nextScene: "waste_consequence", tag: "doubtful", feedback: "Nothing he gives is wasted.", isCorrect: false, sentiment: "negative" },
      { text: "Gather the leftovers", nextScene: "baskets", tag: "faithful", feedback: "Twelve baskets remain.", isCorrect: true, sentiment: "positive" },
    ],
  },
  waste_consequence: {
    id: "waste_consequence",
    title: "Gather It All",
    text: "Every fragment is mercy made bread.\nLet nothing be lost.",
    choices: [
      { text: "Gather the leftovers", nextScene: "baskets", tag: "faithful", feedback: "You bend low.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  baskets: {
    id: "baskets",
    title: "Twelve Baskets Full",
    text: "From a boy's gift, abundance overflows.\nWith little, he gives much.",
    choices: [],
    isFinal: true,
  },
};
