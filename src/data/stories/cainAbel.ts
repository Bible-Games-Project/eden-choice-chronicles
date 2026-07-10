import { StoryScene } from "@/data/stories/creation";

// Story 3 — Cain and Abel. Biblical-action rebuild (Genesis 4:1-16).
// First-person: the player IS Cain.
// Correct choices describe events explicitly told in Scripture.
// Incorrect choices describe actions that do NOT appear in the biblical account.
export const cainAbelScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "Sons of Adam",
    text: "You open your eyes as the firstborn of Adam and Eve.\nA second son, Abel, is born after you.",
    choices: [
      { text: "Live as the firstborn son of Adam and Eve", nextScene: "fields", tag: "born", feedback: "Genesis 4:1-2 — Eve gave birth to Cain, and then to his brother Abel.", isCorrect: true, sentiment: "positive" },
      { text: "Be born before Adam and Eve", nextScene: "fields", tag: "impossible", feedback: "Genesis says Adam and Eve came first; Cain was their son.", isCorrect: false, sentiment: "negative" },
      { text: "Grow up as an only child", nextScene: "fields", tag: "alone", feedback: "Genesis says Cain had a brother, Abel.", isCorrect: false, sentiment: "negative" },
    ],
  },
  fields: {
    id: "fields",
    title: "Your Work",
    text: "The years pass. Each brother finds his labor.\nWhat is yours?",
    choices: [
      { text: "Work the ground as a tiller of the soil", nextScene: "abel_pasture", tag: "farmer", feedback: "Genesis 4:2 — Cain worked the soil.", isCorrect: true, sentiment: "positive" },
      { text: "Keep flocks of sheep like Abel", nextScene: "abel_pasture", tag: "wrong-role", feedback: "Genesis says Abel kept flocks; Cain worked the soil.", isCorrect: false, sentiment: "negative" },
      { text: "Refuse to work at all", nextScene: "abel_pasture", tag: "idle", feedback: "Genesis says Cain worked the ground.", isCorrect: false, sentiment: "negative" },
    ],
  },
  abel_pasture: {
    id: "abel_pasture",
    title: "Your Brother's Work",
    text: "You see Abel across the field.\nWhat is he doing?",
    choices: [
      { text: "See Abel keeping flocks of sheep", nextScene: "offerings", tag: "shepherd", feedback: "Genesis 4:2 — Abel kept flocks.", isCorrect: true, sentiment: "positive" },
      { text: "See Abel tilling the ground beside you", nextScene: "offerings", tag: "wrong-role", feedback: "Genesis says Abel kept flocks, not that he tilled the ground.", isCorrect: false, sentiment: "negative" },
      { text: "See Abel fishing at the river", nextScene: "offerings", tag: "invented", feedback: "Genesis does not describe Abel fishing.", isCorrect: false, sentiment: "negative" },
    ],
  },
  offerings: {
    id: "offerings",
    title: "Before the Altar",
    text: "The time comes to bring an offering to the Lord.\nWhat will you bring?",
    choices: [
      { text: "Bring some of the fruits of the soil as an offering", nextScene: "accepted", tag: "grain", feedback: "Genesis 4:3 — Cain brought some of the fruits of the soil as an offering to the Lord.", isCorrect: true, sentiment: "positive" },
      { text: "Bring a firstborn lamb from your flock", nextScene: "accepted", tag: "wrong-gift", feedback: "Genesis says Abel brought a lamb; Cain brought fruits of the soil.", isCorrect: false, sentiment: "negative" },
      { text: "Bring nothing at all", nextScene: "accepted", tag: "none", feedback: "Genesis says Cain did bring an offering, though not the best.", isCorrect: false, sentiment: "negative" },
    ],
  },
  accepted: {
    id: "accepted",
    title: "The Lord's Regard",
    text: "You wait as the Lord looks upon the two offerings.\nWhat happens?",
    choices: [
      { text: "The Lord looks with favor on Abel and his offering, but not on yours", nextScene: "anger", tag: "rejected", feedback: "Genesis 4:4-5 — The Lord looked with favor on Abel and his offering, but on Cain and his offering He did not look with favor.", isCorrect: true, sentiment: "negative" },
      { text: "The Lord favors both offerings equally", nextScene: "anger", tag: "invented", feedback: "Genesis says the Lord favored Abel's offering, not both.", isCorrect: false, sentiment: "negative" },
      { text: "The Lord accepts your offering and rejects Abel's", nextScene: "anger", tag: "reversed", feedback: "Genesis says the opposite — the Lord favored Abel's offering.", isCorrect: false, sentiment: "negative" },
    ],
  },
  anger: {
    id: "anger",
    title: "Your Face Falls",
    text: "The offering is over. Something rises in you.\nHow do you respond?",
    choices: [
      { text: "Become very angry, your face downcast", nextScene: "warning", tag: "angry", feedback: "Genesis 4:5 — Cain was very angry, and his face was downcast.", isCorrect: true, sentiment: "negative" },
      { text: "Rejoice with Abel over his accepted offering", nextScene: "warning", tag: "invented", feedback: "Genesis says Cain became angry, not that he rejoiced.", isCorrect: false, sentiment: "positive" },
      { text: "Bring a better offering the very next day", nextScene: "warning", tag: "invented", feedback: "Genesis does not describe Cain bringing a second offering.", isCorrect: false, sentiment: "positive" },
    ],
  },
  warning: {
    id: "warning",
    title: "Sin Crouching at the Door",
    text: "The Lord speaks to you.\nWhat does He say?",
    choices: [
      { text: "'Sin is crouching at your door — but you must rule over it'", nextScene: "invitation", tag: "warning", feedback: "Genesis 4:6-7 — The Lord warned Cain that sin was crouching at his door and he must rule over it.", isCorrect: true, sentiment: "positive" },
      { text: "'Bring a lamb instead of grain'", nextScene: "invitation", tag: "invented", feedback: "Genesis does not record the Lord telling Cain to bring a lamb.", isCorrect: false, sentiment: "negative" },
      { text: "Nothing — the Lord is silent", nextScene: "invitation", tag: "invented", feedback: "Genesis says the Lord did speak to Cain about sin at the door.", isCorrect: false, sentiment: "negative" },
    ],
  },
  invitation: {
    id: "invitation",
    title: "You Speak to Your Brother",
    text: "Abel walks near, trusting.\nWhat do you say?",
    choices: [
      { text: "Say to Abel, 'Let's go out to the field'", nextScene: "field", tag: "lure", feedback: "Genesis 4:8 — Cain said to Abel, 'Let's go out to the field.'", isCorrect: true, sentiment: "negative" },
      { text: "Invite Abel to worship at the altar together", nextScene: "field", tag: "invented", feedback: "Genesis says Cain led Abel out to the field, not to the altar.", isCorrect: false, sentiment: "positive" },
      { text: "Send Abel away and never speak to him again", nextScene: "field", tag: "invented", feedback: "Genesis says Cain called Abel to the field, not that he sent him away.", isCorrect: false, sentiment: "negative" },
    ],
  },
  field: {
    id: "field",
    title: "In the Field",
    text: "You and Abel are alone in the open field.\nWhat do you do?",
    choices: [
      { text: "Attack Abel your brother and kill him", nextScene: "confrontation", tag: "kill", feedback: "Genesis 4:8 — Cain attacked his brother Abel and killed him.", isCorrect: true, sentiment: "negative" },
      { text: "Argue with Abel and then forgive him", nextScene: "confrontation", tag: "invented", feedback: "Genesis says Cain killed Abel; he did not forgive him.", isCorrect: false, sentiment: "positive" },
      { text: "Walk home without touching him", nextScene: "confrontation", tag: "invented", feedback: "Genesis says Cain killed Abel in the field.", isCorrect: false, sentiment: "positive" },
    ],
  },
  confrontation: {
    id: "confrontation",
    title: "\"Where Is Your Brother?\"",
    text: "The Lord's voice finds you.\n\"Where is your brother Abel?\"",
    choices: [
      { text: "Answer: 'I do not know. Am I my brother's keeper?'", nextScene: "wanderer", tag: "deny", feedback: "Genesis 4:9 — Cain replied, 'I don't know. Am I my brother's keeper?'", isCorrect: true, sentiment: "negative" },
      { text: "Confess plainly: 'I have killed him'", nextScene: "wanderer", tag: "invented", feedback: "Genesis says Cain denied knowing; he did not confess plainly.", isCorrect: false, sentiment: "positive" },
      { text: "Stay silent before the Lord", nextScene: "wanderer", tag: "invented", feedback: "Genesis says Cain answered the Lord; he did not stay silent.", isCorrect: false, sentiment: "negative" },
    ],
  },
  wanderer: {
    id: "wanderer",
    title: "A Restless Wanderer",
    text: "The Lord places a mark on you for your protection.\nYou go out to wander east of Eden, in the land of Nod.",
    choices: [],
    isFinal: true,
  },
};
