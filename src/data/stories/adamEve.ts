import { StoryScene } from "@/data/stories/creation";

// Story 2 — Adam and Eve. Clean rebuild.
// First-person: the player IS Adam.
// Each scene: 1 biblically correct choice + 1–2 incorrect choices.
// Order is randomized at runtime by shuffleChoices, so correct position varies.
export const adamEveScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "The First Breath",
    text: "You open your eyes in a warm garden.\nA voice within whispers: you are loved.",
    choices: [
      { text: "Listen and give thanks", nextScene: "naming", tag: "grateful", feedback: "Peace settles deep in your chest.", isCorrect: true, sentiment: "positive" },
      { text: "Run off to test your strength", nextScene: "naming", tag: "proud", feedback: "The garden answers only with silence.", isCorrect: false, sentiment: "negative" },
      { text: "Demand to know who made you", nextScene: "naming", tag: "defiant", feedback: "The voice does not answer demands.", isCorrect: false, sentiment: "negative" },
    ],
  },
  naming: {
    id: "naming",
    title: "Naming the Creatures",
    text: "Animals gather, waiting.\nThe Lord asks you to name each one.",
    choices: [
      { text: "Name them with care", nextScene: "lonely", tag: "steward", feedback: "Each name fits as if it were always theirs.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse — you are tired", nextScene: "lonely", tag: "lazy", feedback: "They wait, patient and confused.", isCorrect: false, sentiment: "negative" },
    ],
  },
  lonely: {
    id: "lonely",
    title: "Alone Among Pairs",
    text: "Every creature has its match.\nOnly you stand alone.",
    choices: [
      { text: "Trust God with the longing", nextScene: "deep_sleep", tag: "trusting", feedback: "You breathe, and let the ache become prayer.", isCorrect: true, sentiment: "positive" },
      { text: "Search the wild on your own", nextScene: "deep_sleep", tag: "restless", feedback: "You walk far. Nothing fills the silence.", isCorrect: false, sentiment: "negative" },
      { text: "Blame the Maker", nextScene: "deep_sleep", tag: "bitter", feedback: "Bitterness only deepens the loneliness.", isCorrect: false, sentiment: "negative" },
    ],
  },
  deep_sleep: {
    id: "deep_sleep",
    title: "A Deep Sleep",
    text: "A great peace covers you.\nYour eyes close, and the Lord works.",
    choices: [
      { text: "Surrender to the rest", nextScene: "meet_eve", tag: "yielded", feedback: "You let go. Something new begins.", isCorrect: true, sentiment: "positive" },
      { text: "Fight to stay awake", nextScene: "meet_eve", tag: "stubborn", feedback: "You cannot resist His hand. Sleep comes anyway.", isCorrect: false, sentiment: "negative" },
    ],
  },
  meet_eve: {
    id: "meet_eve",
    title: "Bone of My Bone",
    text: "You wake — and she is there.\nA woman, made for you, equal to you.",
    choices: [
      { text: "Welcome her with joy", nextScene: "warning", tag: "loving", feedback: "\"This at last is bone of my bone.\"", isCorrect: true, sentiment: "positive" },
      { text: "Treat her as lesser", nextScene: "warning", tag: "prideful", feedback: "She lowers her eyes. The garden grows quieter.", isCorrect: false, sentiment: "negative" },
      { text: "Walk past her in silence", nextScene: "warning", tag: "cold", feedback: "She follows, unsure why you turn away.", isCorrect: false, sentiment: "negative" },
    ],
  },
  warning: {
    id: "warning",
    title: "The Forbidden Tree",
    text: "God shows you one tree set apart.\n\"Do not eat from this one, or you will die.\"",
    choices: [
      { text: "Promise to obey His word", nextScene: "serpent", tag: "obedient", feedback: "Peace returns. The garden feels safe.", isCorrect: true, sentiment: "positive" },
      { text: "Wonder why He hides it from you", nextScene: "serpent", tag: "doubting", feedback: "A seed of suspicion takes root.", isCorrect: false, sentiment: "negative" },
      { text: "Plan to taste it later", nextScene: "serpent", tag: "scheming", feedback: "The thought lingers, sweet and dangerous.", isCorrect: false, sentiment: "negative" },
    ],
  },
  serpent: {
    id: "serpent",
    title: "The Serpent's Question",
    text: "A serpent speaks to Eve:\n\"Did God really say you must not eat?\"",
    choices: [
      { text: "Stand beside her — repeat God's word", nextScene: "fruit", tag: "guarding", feedback: "You speak the truth aloud. The serpent hisses.", isCorrect: true, sentiment: "positive" },
      { text: "Stay silent and let her answer", nextScene: "fruit", tag: "passive", feedback: "Her voice trembles. You say nothing.", isCorrect: false, sentiment: "negative" },
      { text: "Listen — maybe he is right", nextScene: "fruit", tag: "curious", feedback: "The whisper begins to feel reasonable.", isCorrect: false, sentiment: "negative" },
    ],
  },
  fruit: {
    id: "fruit",
    title: "The Fruit in Her Hand",
    text: "Eve has taken the fruit. She offers it to you.\nHer eyes plead — and burn.",
    choices: [
      { text: "Refuse — remember the command", nextScene: "shame", tag: "faithful", feedback: "Your hand drops to your side. But she has already eaten.", isCorrect: true, sentiment: "positive" },
      { text: "Take it and eat", nextScene: "shame", tag: "fallen", feedback: "Sweet. Then bitter. Then — you know.", isCorrect: false, sentiment: "negative" },
      { text: "Eat to share her fate", nextScene: "shame", tag: "weak", feedback: "Love twists into disobedience. You bite.", isCorrect: false, sentiment: "negative" },
    ],
  },
  shame: {
    id: "shame",
    title: "Eyes Opened",
    text: "You see yourselves — bare, afraid.\nFig leaves cannot cover what has changed.",
    choices: [
      { text: "Own the wrong before God", nextScene: "confrontation", tag: "humble", feedback: "Shame becomes sorrow. Sorrow opens a door.", isCorrect: true, sentiment: "positive" },
      { text: "Run and hide in the trees", nextScene: "confrontation", tag: "fleeing", feedback: "You crouch in the brush. His voice still finds you.", isCorrect: false, sentiment: "negative" },
      { text: "Blame Eve to yourself", nextScene: "confrontation", tag: "blaming", feedback: "The anger feels safe. It is not.", isCorrect: false, sentiment: "negative" },
    ],
  },
  confrontation: {
    id: "confrontation",
    title: "\"Where Are You?\"",
    text: "The Lord walks in the garden and calls.\nHis voice is not angry — it is grieved.",
    choices: [
      { text: "Confess: \"I disobeyed\"", nextScene: "expulsion", tag: "repentant", feedback: "Truth is heavy. And it sets something free.", isCorrect: true, sentiment: "positive" },
      { text: "\"The woman You gave me did it\"", nextScene: "expulsion", tag: "deflecting", feedback: "You point. The blame does not save you.", isCorrect: false, sentiment: "negative" },
      { text: "Stay silent in the bushes", nextScene: "expulsion", tag: "hiding", feedback: "Silence cannot hide a fallen heart.", isCorrect: false, sentiment: "negative" },
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
