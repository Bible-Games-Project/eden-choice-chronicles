import { StoryScene } from "@/data/stories/creation";

// DEMON POSSESSED MAN — Mark 5 / Luke 8
// You are a disciple stepping ashore in the region of the Gerasenes.

export const demonPossessedScenes: Record<string, StoryScene> = {
  // ACT I — ARRIVAL
  start: {
    id: "start",
    title: "The Shore",
    text: "The boat lands in strange country.\nA distant cry tears the silence.",
    choices: [
      { text: "Turn back to the boat", nextScene: "turn_back_consequence", tag: "fearful", feedback: "He calls you onward.", isCorrect: false, sentiment: "negative" },
      { text: "Follow Jesus inland", nextScene: "tombs", tag: "faithful", feedback: "Mark 5:1-2 — Jesus and his disciples landed in the region of the Gerasenes.", isCorrect: true, sentiment: "positive" },
      { text: "Hide behind the rocks", nextScene: "hide_consequence", tag: "fearful", feedback: "Do not flee his side.", isCorrect: false, sentiment: "negative" },
    ],
  },
  turn_back_consequence: {
    id: "turn_back_consequence",
    title: "Stay With Him",
    text: "He does not turn back.\nWalk where he walks.",
    choices: [
      { text: "Follow Jesus inland", nextScene: "tombs", tag: "faithful", feedback: "You follow.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Come Out",
    text: "His presence is your shelter.\nWalk beside him.",
    choices: [
      { text: "Follow Jesus inland", nextScene: "tombs", tag: "faithful", feedback: "You step into the light.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE TOMBS
  tombs: {
    id: "tombs",
    title: "Among the Tombs",
    text: "Broken chains scatter the ground.\nA man lives among the dead.",
    choices: [
      { text: "Mock his suffering", nextScene: "mock_consequence", tag: "cruel", feedback: "See him as Christ does.", isCorrect: false, sentiment: "negative" },
      { text: "Look on him with pity", nextScene: "villagers", tag: "faithful", feedback: "Mark 5:5 — The man lived among the tombs, crying out and cutting himself with stones.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Have Compassion",
    text: "He is tormented, not despised.\nLook with mercy.",
    choices: [
      { text: "Look on him with pity", nextScene: "villagers", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — FEAR OF THE PEOPLE
  villagers: {
    id: "villagers",
    title: "The Villagers' Fear",
    text: "Villagers warn, \"No one can bind him.\"\nThey beg you to leave.",
    choices: [
      { text: "Heed their fear and flee", nextScene: "flee_consequence", tag: "fearful", feedback: "Stay with the Master.", isCorrect: false, sentiment: "negative" },
      { text: "Trust Jesus and remain", nextScene: "confront", tag: "faithful", feedback: "Mark 5:3-4 — No one could bind the man, not even with chains, because he had often broken them.", isCorrect: true, sentiment: "positive" },
      { text: "Argue with the villagers", nextScene: "argue_consequence", tag: "doubtful", feedback: "Words will not help now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Do Not Flee",
    text: "Their fear is not your faith.\nStand with him.",
    choices: [
      { text: "Trust Jesus and remain", nextScene: "confront", tag: "faithful", feedback: "You stay.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Watch and Trust",
    text: "This hour is for witnessing.\nBe still and see.",
    choices: [
      { text: "Trust Jesus and remain", nextScene: "confront", tag: "faithful", feedback: "You fall quiet.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE CONFRONTATION
  confront: {
    id: "confront",
    title: "He Runs to Jesus",
    text: "The man falls down before him.\n\"What do you want with me?\"",
    choices: [
      { text: "Step between them in fear", nextScene: "step_consequence", tag: "fearful", feedback: "Trust the Master's word.", isCorrect: false, sentiment: "negative" },
      { text: "Watch Jesus speak", nextScene: "command", tag: "faithful", feedback: "Mark 5:6-7 — When the man saw Jesus from a distance, he ran and fell on his knees before him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  step_consequence: {
    id: "step_consequence",
    title: "Let Him Act",
    text: "Your hands cannot heal here.\nOnly his voice can.",
    choices: [
      { text: "Watch Jesus speak", nextScene: "command", tag: "faithful", feedback: "You step back.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE COMMAND
  command: {
    id: "command",
    title: "Come Out of Him",
    text: "Jesus speaks, calm and clear.\n\"Come out of this man.\"",
    choices: [
      { text: "Doubt his authority", nextScene: "doubt_consequence", tag: "doubtful", feedback: "His word is power.", isCorrect: false, sentiment: "negative" },
      { text: "Believe his command", nextScene: "pigs", tag: "faithful", feedback: "Mark 5:8 — Jesus had already commanded the impure spirit, \"Come out of this man!\"", isCorrect: true, sentiment: "positive" },
      { text: "Cover your ears", nextScene: "cover_consequence", tag: "fearful", feedback: "Listen and believe.", isCorrect: false, sentiment: "negative" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "See What Follows",
    text: "Open your eyes to his power.\nThe demons hear him.",
    choices: [
      { text: "Believe his command", nextScene: "pigs", tag: "faithful", feedback: "You believe.", isCorrect: true, sentiment: "positive" },
    ],
  },
  cover_consequence: {
    id: "cover_consequence",
    title: "Hear His Voice",
    text: "His word frees the captive.\nListen.",
    choices: [
      { text: "Believe his command", nextScene: "pigs", tag: "faithful", feedback: "You listen.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE HERD
  pigs: {
    id: "pigs",
    title: "Into the Herd",
    text: "The herd rushes down the cliff.\nThe man lies still and silent.",
    choices: [
      { text: "Mourn the lost herd", nextScene: "mourn_consequence", tag: "doubtful", feedback: "A soul outweighs them all.", isCorrect: false, sentiment: "negative" },
      { text: "Rejoice for the man", nextScene: "restored", tag: "faithful", feedback: "Mark 5:13 — The impure spirits came out and went into the pigs, and the herd rushed down the steep bank into the lake.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mourn_consequence: {
    id: "mourn_consequence",
    title: "A Soul Is Worth More",
    text: "He is worth more than many herds.\nRejoice.",
    choices: [
      { text: "Rejoice for the man", nextScene: "restored", tag: "faithful", feedback: "You smile.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — RESTORATION
  restored: {
    id: "restored",
    title: "Go and Tell",
    text: "The man sits clothed, in his right mind.\n\"Tell what the Lord has done.\"",
    choices: [],
    isFinal: true,
  },
};
