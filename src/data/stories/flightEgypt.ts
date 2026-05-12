import { StoryScene } from "@/data/stories/creation";

// FLIGHT TO EGYPT — Matthew 2:13-15
// You ARE Joseph, husband of Mary, father of the child.

export const flightEgyptScenes: Record<string, StoryScene> = {
  // ACT I — THE WARNING DREAM
  start: {
    id: "start",
    title: "A Voice in Sleep",
    text: "An angel speaks in your dream:\n\"Rise. Herod seeks the child.\"",
    choices: [
      { text: "Sleep on, it is only a dream", nextScene: "ignore_consequence", tag: "faithless", feedback: "Heaven does not lie.", isCorrect: false, sentiment: "negative" },
      { text: "Wake at once and obey", nextScene: "wake", tag: "faithful", feedback: "Your eyes open in the dark.", isCorrect: true, sentiment: "positive" },
      { text: "Wait for another sign", nextScene: "wait_consequence", tag: "doubtful", feedback: "There is no time to wait.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Rise Now",
    text: "The danger is real and near.\nDo not delay.",
    choices: [
      { text: "Wake at once and obey", nextScene: "wake", tag: "faithful", feedback: "You sit up suddenly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Trust the Word",
    text: "Heaven has already spoken.\nMove now.",
    choices: [
      { text: "Wake at once and obey", nextScene: "wake", tag: "faithful", feedback: "You throw off the blanket.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — WAKING MARY
  wake: {
    id: "wake",
    title: "Wake the Mother",
    text: "Mary sleeps with the child near.\nThere is no time to lose.",
    choices: [
      { text: "Wake Mary and prepare to flee", nextScene: "flee", tag: "faithful", feedback: "She rises without a question.", isCorrect: true, sentiment: "positive" },
      { text: "Hide the child in the house", nextScene: "hide_consequence", tag: "fearful", feedback: "No wall will stop Herod.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Flee, Do Not Hide",
    text: "The angel said to leave the land.\nObey the word.",
    choices: [
      { text: "Wake Mary and prepare to flee", nextScene: "flee", tag: "faithful", feedback: "You shake her gently awake.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — NIGHT ESCAPE
  flee: {
    id: "flee",
    title: "Out of Bethlehem",
    text: "Moonlight falls on empty streets.\nThe child sleeps in Mary's arms.",
    choices: [
      { text: "Knock and warn the neighbors", nextScene: "warn_consequence", tag: "rash", feedback: "Soldiers may already be near.", isCorrect: false, sentiment: "negative" },
      { text: "Slip into the night silently", nextScene: "road", tag: "faithful", feedback: "Your steps make no sound.", isCorrect: true, sentiment: "positive" },
      { text: "Take the main road south", nextScene: "main_road_consequence", tag: "rash", feedback: "Stay off the open road.", isCorrect: false, sentiment: "negative" },
    ],
  },
  warn_consequence: {
    id: "warn_consequence",
    title: "Go Quietly",
    text: "Your task is to save the child.\nLeave at once.",
    choices: [
      { text: "Slip into the night silently", nextScene: "road", tag: "faithful", feedback: "You vanish into the dark.", isCorrect: true, sentiment: "positive" },
    ],
  },
  main_road_consequence: {
    id: "main_road_consequence",
    title: "Hidden Paths",
    text: "Soldiers patrol the open ways.\nKeep to the shadows.",
    choices: [
      { text: "Slip into the night silently", nextScene: "road", tag: "faithful", feedback: "You take the small back paths.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE LONG ROAD
  road: {
    id: "road",
    title: "Toward the South",
    text: "The desert stretches before you.\nEgypt lies far beyond.",
    choices: [
      { text: "Turn back, the road is too far", nextScene: "turn_back_consequence", tag: "weak", feedback: "Do not turn back now.", isCorrect: false, sentiment: "negative" },
      { text: "Press on through the night", nextScene: "rest", tag: "faithful", feedback: "Your feet do not stop.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turn_back_consequence: {
    id: "turn_back_consequence",
    title: "Forward Only",
    text: "Behind you is danger.\nAhead is safety.",
    choices: [
      { text: "Press on through the night", nextScene: "rest", tag: "faithful", feedback: "You walk on with Mary.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — A MOMENT OF REST
  rest: {
    id: "rest",
    title: "By the Oasis",
    text: "Water glints under the rising sun.\nThe child must drink.",
    choices: [
      { text: "Linger here for many days", nextScene: "linger_consequence", tag: "lazy", feedback: "Do not stay too long.", isCorrect: false, sentiment: "negative" },
      { text: "Pray, then keep moving", nextScene: "egypt", tag: "faithful", feedback: "You rise refreshed.", isCorrect: true, sentiment: "positive" },
      { text: "Send Mary back home alone", nextScene: "send_back_consequence", tag: "faithless", feedback: "You go together or not at all.", isCorrect: false, sentiment: "negative" },
    ],
  },
  linger_consequence: {
    id: "linger_consequence",
    title: "Move On",
    text: "The border is still far away.\nKeep going.",
    choices: [
      { text: "Pray, then keep moving", nextScene: "egypt", tag: "faithful", feedback: "You fill your skins and rise.", isCorrect: true, sentiment: "positive" },
    ],
  },
  send_back_consequence: {
    id: "send_back_consequence",
    title: "Stay Together",
    text: "She and the child are your charge.\nNever leave them.",
    choices: [
      { text: "Pray, then keep moving", nextScene: "egypt", tag: "faithful", feedback: "You take her hand and walk on.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — ARRIVAL
  egypt: {
    id: "egypt",
    title: "The Land of Egypt",
    text: "Pyramids rise in the rose dawn.\nYou have crossed the border.",
    choices: [
      { text: "Find a humble home and stay", nextScene: "safe", tag: "faithful", feedback: "A small door opens to you.", isCorrect: true, sentiment: "positive" },
      { text: "Demand a place at court", nextScene: "court_consequence", tag: "proud", feedback: "Hide, do not boast.", isCorrect: false, sentiment: "negative" },
    ],
  },
  court_consequence: {
    id: "court_consequence",
    title: "Stay Hidden",
    text: "The child must grow in quiet.\nFind a humble place.",
    choices: [
      { text: "Find a humble home and stay", nextScene: "safe", tag: "faithful", feedback: "You knock at a small house.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  safe: {
    id: "safe",
    title: "Safe in Egypt",
    text: "The child sleeps under a warm lamp.\nHe is alive. He is safe.",
    choices: [],
    isFinal: true,
  },
};
