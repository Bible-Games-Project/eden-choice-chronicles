import { StoryScene } from "@/data/stories/creation";

// Story 3 — Cain and Abel. Clean rebuild.
// First-person: the player IS Cain.
// Each scene: 1 biblically correct choice + 1–2 incorrect choices.
// Order is randomized at runtime by shuffleChoices.
export const cainAbelScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "Sons of the Soil",
    text: "You are Cain, firstborn of Adam.\nYour brother Abel walks beside you in the dawn.",
    choices: [
      { text: "Greet him with brotherly love", nextScene: "fields", tag: "warm", feedback: "He smiles. The morning feels lighter.", isCorrect: true, sentiment: "positive" },
      { text: "Compare yourself to him in silence", nextScene: "fields", tag: "comparing", feedback: "A quiet bitterness takes root.", isCorrect: false, sentiment: "negative" },
      { text: "Walk ahead without him", nextScene: "fields", tag: "distant", feedback: "He calls your name. You do not turn.", isCorrect: false, sentiment: "negative" },
    ],
  },
  fields: {
    id: "fields",
    title: "The Tiller of Soil",
    text: "The earth resists your hoe.\nSweat. Stones. The long hours of work.",
    choices: [
      { text: "Work with patience and care", nextScene: "abel_pasture", tag: "diligent", feedback: "The labor settles your heart.", isCorrect: true, sentiment: "positive" },
      { text: "Curse the ground as you dig", nextScene: "abel_pasture", tag: "bitter", feedback: "Each strike grows angrier than the last.", isCorrect: false, sentiment: "negative" },
    ],
  },
  abel_pasture: {
    id: "abel_pasture",
    title: "Your Brother's Flock",
    text: "Abel rests among his sheep, content.\nA newborn lamb sleeps on his chest.",
    choices: [
      { text: "Be glad for his gentle work", nextScene: "offerings", tag: "gracious", feedback: "Warmth rises where envy could have grown.", isCorrect: true, sentiment: "positive" },
      { text: "Resent that his work seems easy", nextScene: "offerings", tag: "envious", feedback: "Your jaw tightens. Comparison poisons the day.", isCorrect: false, sentiment: "negative" },
      { text: "Mock him under your breath", nextScene: "offerings", tag: "scornful", feedback: "Your words stay quiet, but they sting your own soul.", isCorrect: false, sentiment: "negative" },
    ],
  },
  offerings: {
    id: "offerings",
    title: "Before the Altar",
    text: "It is time to bring an offering to the Lord.\nWhat will you give?",
    choices: [
      { text: "Bring your very best firstfruits", nextScene: "accepted", tag: "honoring", feedback: "You choose the finest grain. Your heart is open.", isCorrect: true, sentiment: "positive" },
      { text: "Bring whatever was left over", nextScene: "accepted", tag: "careless", feedback: "Wilted stalks. Half a thought toward heaven.", isCorrect: false, sentiment: "negative" },
      { text: "Bring nothing — you earned it", nextScene: "accepted", tag: "proud", feedback: "Empty hands. A harder, prouder heart.", isCorrect: false, sentiment: "negative" },
    ],
  },
  accepted: {
    id: "accepted",
    title: "The Lord's Favor",
    text: "The Lord receives Abel's lamb with joy.\nYour offering — He does not regard.",
    choices: [
      { text: "Search yourself before God", nextScene: "anger", tag: "humble", feedback: "You ask why. The answer is already in you.", isCorrect: true, sentiment: "positive" },
      { text: "Burn with rage against Abel", nextScene: "anger", tag: "raging", feedback: "Heat floods your chest. He becomes your enemy.", isCorrect: false, sentiment: "negative" },
      { text: "Accuse God of unfairness", nextScene: "anger", tag: "accusing", feedback: "Your fist rises. The sky does not answer.", isCorrect: false, sentiment: "negative" },
    ],
  },
  anger: {
    id: "anger",
    title: "Why Are You Angry?",
    text: "Your face falls. Your hands shake.\nThe Lord asks: \"Why are you angry?\"",
    choices: [
      { text: "Lay your anger down before Him", nextScene: "warning", tag: "yielded", feedback: "The fire begins to cool. Honesty opens a path.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse to answer — turn away", nextScene: "warning", tag: "stubborn", feedback: "You hide your face. He still sees.", isCorrect: false, sentiment: "negative" },
    ],
  },
  warning: {
    id: "warning",
    title: "Sin Crouches at the Door",
    text: "\"Sin is crouching at your door.\nIts desire is for you — but you must master it.\"",
    choices: [
      { text: "Commit to master your anger", nextScene: "invitation", tag: "resolved", feedback: "You exhale. You will choose differently.", isCorrect: true, sentiment: "positive" },
      { text: "Let the rage take you", nextScene: "invitation", tag: "surrendering", feedback: "You open the door wide. Sin walks in.", isCorrect: false, sentiment: "negative" },
      { text: "Pretend you did not hear", nextScene: "invitation", tag: "denying", feedback: "The warning fades. The hatred remains.", isCorrect: false, sentiment: "negative" },
    ],
  },
  invitation: {
    id: "invitation",
    title: "Come With Me to the Field",
    text: "Abel walks toward you, trusting.\nHis face is open. Yours is not.",
    choices: [
      { text: "Tell him the truth of your heart", nextScene: "field", tag: "honest", feedback: "Words are hard. But honesty is mercy.", isCorrect: true, sentiment: "positive" },
      { text: "Lure him alone into the field", nextScene: "field", tag: "plotting", feedback: "Your voice is calm. Your intent is not.", isCorrect: false, sentiment: "negative" },
    ],
  },
  field: {
    id: "field",
    title: "In the Field",
    text: "The field is empty. No one will see.\nAnger surges. A stone is in your hand.",
    choices: [
      { text: "Drop the stone — walk away", nextScene: "confrontation", tag: "restraining", feedback: "It falls heavy at your feet. You breathe again.", isCorrect: true, sentiment: "positive" },
      { text: "Strike him in your fury", nextScene: "confrontation", tag: "killing", feedback: "One blow. Then silence. Then horror.", isCorrect: false, sentiment: "negative" },
      { text: "Threaten him, then strike", nextScene: "confrontation", tag: "violent", feedback: "Your hand obeys the rage. The field receives him.", isCorrect: false, sentiment: "negative" },
    ],
  },
  confrontation: {
    id: "confrontation",
    title: "\"Where Is Your Brother?\"",
    text: "The voice of the Lord finds you.\n\"Where is your brother Abel?\"",
    choices: [
      { text: "Confess what your hands have done", nextScene: "wanderer", tag: "confessing", feedback: "The truth crushes you. And begins to free you.", isCorrect: true, sentiment: "positive" },
      { text: "\"Am I my brother's keeper?\"", nextScene: "wanderer", tag: "denying", feedback: "The lie tastes like ash in your mouth.", isCorrect: false, sentiment: "negative" },
      { text: "Stay silent and hide your eyes", nextScene: "wanderer", tag: "hiding", feedback: "His blood cries out from the ground.", isCorrect: false, sentiment: "negative" },
    ],
  },
  wanderer: {
    id: "wanderer",
    title: "East of Eden, Marked",
    text: "The Lord places a mark to protect you.\nYou must wander far from home.",
    choices: [],
    isFinal: true,
  },
};
