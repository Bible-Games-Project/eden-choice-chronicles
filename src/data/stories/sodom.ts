import { StoryScene } from "@/data/stories/creation";

// SODOM AND GOMORRAH — Genesis 19
// You ARE Lot. Warning, judgment, urgent obedience.

export const sodomScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "The Gate at Dusk",
    text: "You sit at the gate of Sodom.\nThe city laughs loudly under a red sky.",
    choices: [
      { text: "Join the laughter to fit in", nextScene: "wickedness", isCorrect: false, sentiment: "negative" },
      { text: "Watch quietly, troubled in spirit", nextScene: "wickedness", isCorrect: true, sentiment: "positive" },
    ],
  },
  wickedness: {
    id: "wickedness",
    title: "The City's Heart",
    text: "Cruelty in the streets. The weak are mocked.\nYour conscience aches and aches.",
    choices: [
      { text: "Pretend you didn't see it", nextScene: "strangers", isCorrect: false, sentiment: "negative" },
      { text: "Grieve in silence and pray", nextScene: "strangers", isCorrect: true, sentiment: "positive" },
      { text: "Boast of your standing here", nextScene: "strangers", isCorrect: false, sentiment: "negative" },
    ],
  },
  strangers: {
    id: "strangers",
    title: "Two Strangers",
    text: "Two travelers approach the gate.\nSomething in them is not of this world.",
    choices: [
      { text: "Bow and offer them your home", nextScene: "welcome", isCorrect: true, sentiment: "positive" },
      { text: "Warn them off and walk away", nextScene: "welcome", isCorrect: false, sentiment: "negative" },
      { text: "Demand to know who they are", nextScene: "welcome", isCorrect: false, sentiment: "negative" },
    ],
  },
  welcome: {
    id: "welcome",
    title: "Under Your Roof",
    text: "They follow you home. Bread is broken.\nOutside, the city begins to stir.",
    choices: [
      { text: "Bolt every door and keep watch", nextScene: "mob", isCorrect: true, sentiment: "positive" },
      { text: "Leave the door wide open", nextScene: "mob", isCorrect: false, sentiment: "negative" },
    ],
  },
  mob: {
    id: "mob",
    title: "Voices at the Door",
    text: "A crowd shouts. Fists pound the wood.\n\"Send them out to us!\"",
    choices: [
      { text: "Hand the guests over to save yourself", nextScene: "angels_warn", isCorrect: false, sentiment: "negative" },
      { text: "Stand in the doorway and refuse", nextScene: "angels_warn", isCorrect: true, sentiment: "positive" },
    ],
  },
  angels_warn: {
    id: "angels_warn",
    title: "The Warning",
    text: "The strangers speak. \"This city is finished.\nTake your family. Leave now.\"",
    choices: [
      { text: "Argue — your life is here", nextScene: "sons_in_law", isCorrect: false, sentiment: "negative" },
      { text: "Believe — gather your family", nextScene: "sons_in_law", isCorrect: true, sentiment: "positive" },
      { text: "Bargain for more time", nextScene: "sons_in_law", isCorrect: false, sentiment: "negative" },
    ],
  },
  sons_in_law: {
    id: "sons_in_law",
    title: "Pleading with Family",
    text: "Your daughters' betrothed laugh in your face.\n\"Old man — you dream of fire.\"",
    choices: [
      { text: "Stay and try to convince them", nextScene: "urge", isCorrect: false, sentiment: "negative" },
      { text: "Beg once more, then turn back home", nextScene: "urge", isCorrect: true, sentiment: "positive" },
    ],
  },
  urge: {
    id: "urge",
    title: "Dawn — Take My Hand",
    text: "The angel grips your wrist. \"Hurry!\nDo not look back. Flee to the hills.\"",
    choices: [
      { text: "Linger to gather your gold", nextScene: "flee", isCorrect: false, sentiment: "negative" },
      { text: "Go now — leave everything", nextScene: "flee", isCorrect: true, sentiment: "positive" },
      { text: "Question where to run", nextScene: "flee", isCorrect: false, sentiment: "negative" },
    ],
  },
  flee: {
    id: "flee",
    title: "The Road from the City",
    text: "Your wife and daughters run beside you.\nBehind, a roar begins to climb the sky.",
    choices: [
      { text: "Glance back to see if it's real", nextScene: "wife_looks", isCorrect: false, sentiment: "negative" },
      { text: "Keep your eyes fixed forward", nextScene: "wife_looks", isCorrect: true, sentiment: "positive" },
    ],
  },
  wife_looks: {
    id: "wife_looks",
    title: "She Looked",
    text: "Your wife turns. Her body stills, then whitens.\nA pillar of salt in the dawn.",
    choices: [
      { text: "Stop and weep over her", nextScene: "aftermath", isCorrect: false, sentiment: "negative" },
      { text: "Cry out — and keep running with the girls", nextScene: "aftermath", isCorrect: true, sentiment: "positive" },
    ],
  },
  aftermath: {
    id: "aftermath",
    title: "Zoar at Sunrise",
    text: "Smoke darkens the plain behind you.\nYou sit in the dust. Spared. Hollow. Alive.",
    isFinal: true,
    choices: [],
  },
};
