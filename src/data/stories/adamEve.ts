import { StoryScene } from "@/data/stories/creation";

// Story 2 — Adam and Eve. Biblical-action rebuild.
// First-person: the player IS Adam.
// Each scene: exactly 1 biblically correct action (isCorrect: true) explicitly attested in Genesis 2–3.
// Incorrect choices describe actions that do NOT appear in the biblical account.
// Choice order is randomized at runtime by shuffleChoices.
export const adamEveScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "The First Breath",
    text: "You open your eyes in a warm garden.\nA voice within whispers: you are loved.",
    choices: [
      { text: "Work the garden and keep it", nextScene: "naming", tag: "steward", feedback: "Genesis 2:15 — The Lord God placed Adam in the garden of Eden to work it and keep it.", isCorrect: true, sentiment: "positive" },
      { text: "Build a city of stone", nextScene: "naming", tag: "proud", feedback: "Genesis does not describe Adam building a city in Eden.", isCorrect: false, sentiment: "negative" },
      { text: "Leave the garden to explore", nextScene: "naming", tag: "restless", feedback: "Genesis does not describe Adam leaving Eden on his own.", isCorrect: false, sentiment: "negative" },
    ],
  },
  naming: {
    id: "naming",
    title: "Naming the Creatures",
    text: "Animals gather, waiting.\nThe Lord asks you to name each one.",
    choices: [
      { text: "Give each animal and bird a name", nextScene: "lonely", tag: "steward", feedback: "Genesis 2:19-20 — Adam gave names to every living creature the Lord brought to him.", isCorrect: true, sentiment: "positive" },
      { text: "Hunt the animals for food", nextScene: "lonely", tag: "violent", feedback: "Genesis does not describe Adam hunting the animals in Eden.", isCorrect: false, sentiment: "negative" },
    ],
  },
  lonely: {
    id: "lonely",
    title: "Alone Among Pairs",
    text: "Every creature has its match.\nOnly you stand alone.",
    choices: [
      { text: "Search among the animals and find no suitable helper", nextScene: "deep_sleep", tag: "seeking", feedback: "Genesis 2:20 — For Adam no suitable helper was found among the animals.", isCorrect: true, sentiment: "positive" },
      { text: "Take a lion as your companion", nextScene: "deep_sleep", tag: "misguided", feedback: "Genesis does not describe Adam taking an animal as his companion.", isCorrect: false, sentiment: "negative" },
      { text: "Shape a helper from the dust yourself", nextScene: "deep_sleep", tag: "prideful", feedback: "Genesis says God, not Adam, made the woman.", isCorrect: false, sentiment: "negative" },
    ],
  },
  deep_sleep: {
    id: "deep_sleep",
    title: "A Deep Sleep",
    text: "A great peace covers you.\nYour eyes close, and the Lord works.",
    choices: [
      { text: "Fall into the deep sleep the Lord sends", nextScene: "meet_eve", tag: "yielded", feedback: "Genesis 2:21 — The Lord God caused a deep sleep to fall upon Adam and took one of his ribs.", isCorrect: true, sentiment: "positive" },
      { text: "Fight to stay awake", nextScene: "meet_eve", tag: "stubborn", feedback: "Genesis says a deep sleep fell on Adam; he did not resist.", isCorrect: false, sentiment: "negative" },
    ],
  },
  meet_eve: {
    id: "meet_eve",
    title: "Bone of My Bone",
    text: "You wake — and she is there.\nA woman, made for you, equal to you.",
    choices: [
      { text: "Say: 'This is bone of my bones and flesh of my flesh'", nextScene: "warning", tag: "loving", feedback: "Genesis 2:23 — Adam said, 'This at last is bone of my bones and flesh of my flesh.'", isCorrect: true, sentiment: "positive" },
      { text: "Send her away", nextScene: "warning", tag: "rejecting", feedback: "Genesis does not describe Adam refusing the woman.", isCorrect: false, sentiment: "negative" },
      { text: "Call her a beast of the field", nextScene: "warning", tag: "demeaning", feedback: "Genesis says Adam called her Woman, not a beast.", isCorrect: false, sentiment: "negative" },
    ],
  },
  warning: {
    id: "warning",
    title: "The Forbidden Tree",
    text: "God shows you one tree set apart.\n\"Do not eat from this one, or you will die.\"",
    choices: [
      { text: "Receive the command not to eat from the tree of the knowledge of good and evil", nextScene: "serpent", tag: "obedient", feedback: "Genesis 2:16-17 — God commanded Adam not to eat from the tree of the knowledge of good and evil.", isCorrect: true, sentiment: "positive" },
      { text: "Cut down the tree", nextScene: "serpent", tag: "rash", feedback: "Genesis does not describe Adam cutting down the tree.", isCorrect: false, sentiment: "negative" },
      { text: "Eat from the tree right away", nextScene: "serpent", tag: "defiant", feedback: "In Genesis 2, Adam did not eat from the tree at this moment.", isCorrect: false, sentiment: "negative" },
    ],
  },
  serpent: {
    id: "serpent",
    title: "The Serpent's Question",
    text: "A serpent speaks to Eve:\n\"Did God really say you must not eat?\"",
    choices: [
      { text: "Stay there with Eve while the serpent speaks", nextScene: "fruit", tag: "passive", feedback: "Genesis 3:6 — Eve gave the fruit to her husband, who was with her.", isCorrect: true, sentiment: "negative" },
      { text: "Strike the serpent with a stick", nextScene: "fruit", tag: "reactive", feedback: "Genesis does not describe Adam striking the serpent.", isCorrect: false, sentiment: "negative" },
      { text: "Call out to the Lord for help", nextScene: "fruit", tag: "prayerful", feedback: "Genesis does not describe Adam calling to the Lord at this moment.", isCorrect: false, sentiment: "positive" },
    ],
  },
  fruit: {
    id: "fruit",
    title: "The Fruit in Her Hand",
    text: "Eve has taken the fruit. She offers it to you.\nHer eyes plead — and burn.",
    choices: [
      { text: "Take the fruit and eat", nextScene: "shame", tag: "fallen", feedback: "Genesis 3:6 — Adam took the fruit Eve gave him and ate it.", isCorrect: true, sentiment: "negative" },
      { text: "Throw the fruit away", nextScene: "shame", tag: "avoiding", feedback: "Genesis says Adam ate the fruit; he did not throw it away.", isCorrect: false, sentiment: "positive" },
      { text: "Offer the fruit back to God", nextScene: "shame", tag: "misguided", feedback: "Genesis does not describe Adam offering the fruit to God.", isCorrect: false, sentiment: "negative" },
    ],
  },
  shame: {
    id: "shame",
    title: "Eyes Opened",
    text: "You see yourselves — bare, afraid.\nFig leaves cannot cover what has changed.",
    choices: [
      { text: "Sew fig leaves together and hide among the trees", nextScene: "confrontation", tag: "hiding", feedback: "Genesis 3:7-8 — They sewed fig leaves together and hid themselves among the trees of the garden.", isCorrect: true, sentiment: "negative" },
      { text: "Step out and approach God openly", nextScene: "confrontation", tag: "bold", feedback: "Genesis says Adam and Eve hid; they did not come out to meet God.", isCorrect: false, sentiment: "positive" },
      { text: "Eat from the tree of life", nextScene: "confrontation", tag: "grasping", feedback: "Genesis does not describe Adam eating from the tree of life at this moment.", isCorrect: false, sentiment: "negative" },
    ],
  },
  confrontation: {
    id: "confrontation",
    title: "\"Where Are You?\"",
    text: "The Lord walks in the garden and calls.\nHis voice is not angry — it is grieved.",
    choices: [
      { text: "Answer: 'The woman You gave me — she gave me the fruit, and I ate'", nextScene: "expulsion", tag: "deflecting", feedback: "Genesis 3:12 — Adam said, 'The woman you gave to be with me, she gave me fruit from the tree, and I ate.'", isCorrect: true, sentiment: "negative" },
      { text: "Confess plainly: 'I have sinned against You'", nextScene: "expulsion", tag: "repentant", feedback: "Genesis says Adam blamed the woman rather than confessing plainly.", isCorrect: false, sentiment: "positive" },
      { text: "Stay silent", nextScene: "expulsion", tag: "hiding", feedback: "Genesis says Adam answered the Lord; he did not stay silent.", isCorrect: false, sentiment: "negative" },
    ],
  },
  expulsion: {
    id: "expulsion",
    title: "East of Eden",
    text: "He clothes you both, then opens the gate.\nYou take her hand. You walk east, into the world.",
    choices: [],
    isFinal: true,
  },
};
