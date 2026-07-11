import { StoryScene } from "@/data/stories/creation";

// BIRTH OF JESUS — Luke 2:1-7
// You ARE Joseph, walking beside Mary toward Bethlehem.

export const birthJesusScenes: Record<string, StoryScene> = {
  // ACT I — JOURNEY TO BETHLEHEM
  start: {
    id: "start",
    title: "The Long Road",
    text: "Mary rests against the donkey at dusk.\nThe road to Bethlehem stretches on.",
    choices: [
      { text: "Push on through the night", nextScene: "push_consequence", tag: "rash", feedback: "She needs gentleness, not haste.", isCorrect: false, sentiment: "negative" },
      { text: "Walk beside her in care", nextScene: "bethlehem", tag: "faithful", feedback: "Luke 2:4-5 — Joseph went from Nazareth to Bethlehem with Mary, who was pledged to be married to him and was expecting a child.", isCorrect: true, sentiment: "positive" },
      { text: "Turn back to Nazareth", nextScene: "turnback_consequence", tag: "fearful", feedback: "The decree must be obeyed.", isCorrect: false, sentiment: "negative" },
    ],
  },
  push_consequence: {
    id: "push_consequence",
    title: "Slow Your Step",
    text: "She winces with the child within.\nMatch her pace, not your own.",
    choices: [
      { text: "Walk beside her in care", nextScene: "bethlehem", tag: "faithful", feedback: "You slow your stride.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turnback_consequence: {
    id: "turnback_consequence",
    title: "The Path Forward",
    text: "Heaven has chosen this road.\nKeep walking with her.",
    choices: [
      { text: "Walk beside her in care", nextScene: "bethlehem", tag: "faithful", feedback: "You face the road ahead.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — NO ROOM IN BETHLEHEM
  bethlehem: {
    id: "bethlehem",
    title: "Lamps of Bethlehem",
    text: "The town is full for the census.\nHer time draws near.",
    choices: [
      { text: "Demand a room with force", nextScene: "demand_consequence", tag: "proud", feedback: "Force will open no door tonight.", isCorrect: false, sentiment: "negative" },
      { text: "Ask the innkeeper humbly", nextScene: "inn", tag: "faithful", feedback: "Luke 2:7 — There was no guest room available for them in the inn.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Soften Your Voice",
    text: "Anger turns the doors away.\nApproach the keeper in peace.",
    choices: [
      { text: "Ask the innkeeper humbly", nextScene: "inn", tag: "faithful", feedback: "You bow your head and ask.", isCorrect: true, sentiment: "positive" },
    ],
  },

  inn: {
    id: "inn",
    title: "No Room for You",
    text: "\"There is no room here, traveler.\nOnly the stable behind remains.\"",
    choices: [
      { text: "Sleep in the cold street", nextScene: "street_consequence", tag: "fearful", feedback: "The night will be too harsh.", isCorrect: false, sentiment: "negative" },
      { text: "Accept the humble stable", nextScene: "stable", tag: "faithful", feedback: "Luke 2:7 — Mary gave birth to her firstborn son and wrapped him in swaddling clothes and laid him in a manger because there was no place for them in the inn.", isCorrect: true, sentiment: "positive" },
      { text: "Argue and shout in anger", nextScene: "argue_consequence", tag: "proud", feedback: "Quiet your spirit.", isCorrect: false, sentiment: "negative" },
    ],
  },
  street_consequence: {
    id: "street_consequence",
    title: "Shelter Is Offered",
    text: "The wind is cold and bitter.\nA stable waits behind the inn.",
    choices: [
      { text: "Accept the humble stable", nextScene: "stable", tag: "faithful", feedback: "You guide her behind the inn.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Receive the Gift",
    text: "Even a stable is a kindness tonight.\nReceive what is given.",
    choices: [
      { text: "Accept the humble stable", nextScene: "stable", tag: "faithful", feedback: "You nod in quiet thanks.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE STABLE
  stable: {
    id: "stable",
    title: "A Quiet Stable",
    text: "Hay, lamplight, and gentle breath.\nMary settles against the wall.",
    choices: [
      { text: "Complain of the place", nextScene: "complain_consequence", tag: "proud", feedback: "Heaven kneels in low places.", isCorrect: false, sentiment: "negative" },
      { text: "Prepare a place with hay", nextScene: "birth", tag: "faithful", feedback: "Luke 2:7 — Mary laid Jesus in a manger, because there was no guest room available for them.", isCorrect: true, sentiment: "positive" },
    ],
  },
  complain_consequence: {
    id: "complain_consequence",
    title: "See the Beauty",
    text: "This humble shelter is enough.\nReady the place with care.",
    choices: [
      { text: "Prepare a place with hay", nextScene: "birth", tag: "faithful", feedback: "You gather the hay.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE BIRTH
  birth: {
    id: "birth",
    title: "Her Time Has Come",
    text: "A soft cry rises through the night.\nThe child is born.",
    choices: [
      { text: "Run for help to strangers", nextScene: "run_consequence", tag: "fearful", feedback: "She needs you here.", isCorrect: false, sentiment: "negative" },
      { text: "Stand silent in awe", nextScene: "manger", tag: "faithful", feedback: "Luke 2:6-7 — While they were there, the time came for the baby to be born, and Mary gave birth to her firstborn son.", isCorrect: true, sentiment: "positive" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "Stay With Them",
    text: "This moment is yours to hold.\nReturn to her side.",
    choices: [
      { text: "Stand silent in awe", nextScene: "manger", tag: "faithful", feedback: "You kneel beside them.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — THE MANGER
  manger: {
    id: "manger",
    title: "Wrapped in Quiet",
    text: "She lays him in the manger.\nThe world is still — and all is well.",
    choices: [],
    isFinal: true,
  },
};
