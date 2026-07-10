import { StoryScene } from "@/data/stories/creation";

// Story 4 — Noah and the Flood. Biblical-action rebuild (Genesis 6-9).
// First-person: the player IS Noah.
// Correct choices describe events explicitly told in Scripture.
// Incorrect choices describe actions that do NOT appear in the biblical account.
export const noahScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "The Voice from Above",
    text: "God speaks to you.\n\"Make yourself an ark. A flood is coming.\"",
    choices: [
      { text: "Receive God's command to build an ark of cypress wood", nextScene: "mockery", tag: "obey", feedback: "Genesis 6:14, 22 — God told Noah to make an ark of cypress wood, and Noah did everything just as God commanded.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse the command and flee the land", nextScene: "mockery", tag: "invented", feedback: "Genesis says Noah obeyed God; he did not flee.", isCorrect: false, sentiment: "negative" },
      { text: "Buy an existing ship from a merchant", nextScene: "mockery", tag: "invented", feedback: "Genesis says Noah built the ark himself, as God instructed.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mockery: {
    id: "mockery",
    title: "A Watching World",
    text: "The world around you is corrupt and violent.\nThey watch you build. How do you respond?",
    choices: [
      { text: "Keep building the ark by faith", nextScene: "building", tag: "faith", feedback: "Hebrews 11:7 — By faith Noah built the ark in reverent fear, though warned of things not yet seen.", isCorrect: true, sentiment: "positive" },
      { text: "Abandon the ark to please the crowd", nextScene: "building", tag: "invented", feedback: "Scripture says Noah kept building by faith.", isCorrect: false, sentiment: "negative" },
      { text: "Attack the mockers to silence them", nextScene: "building", tag: "invented", feedback: "Scripture does not describe Noah attacking anyone.", isCorrect: false, sentiment: "negative" },
    ],
  },
  building: {
    id: "building",
    title: "Cypress and Pitch",
    text: "You gather the materials God commanded.\nHow do you build the ark?",
    choices: [
      { text: "Build it of cypress wood, coated with pitch inside and out", nextScene: "ark_done", tag: "materials", feedback: "Genesis 6:14 — Make yourself an ark of cypress wood; coat it with pitch inside and out.", isCorrect: true, sentiment: "positive" },
      { text: "Build it from cut stone", nextScene: "ark_done", tag: "invented", feedback: "Genesis says the ark was built of cypress wood, not stone.", isCorrect: false, sentiment: "negative" },
      { text: "Weave it from reeds like a basket", nextScene: "ark_done", tag: "invented", feedback: "Genesis says the ark was made of cypress wood, sealed with pitch.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ark_done: {
    id: "ark_done",
    title: "It Stands Finished",
    text: "The ark is complete, exactly as God commanded.\nWhat does it look like?",
    choices: [
      { text: "300 cubits long, 50 wide, 30 high, with three decks", nextScene: "animals", tag: "dimensions", feedback: "Genesis 6:15-16 — The ark was 300 cubits long, 50 wide, 30 high, with three decks.", isCorrect: true, sentiment: "positive" },
      { text: "A small round boat with one deck", nextScene: "animals", tag: "invented", feedback: "Genesis gives specific dimensions; the ark was not a small round boat.", isCorrect: false, sentiment: "negative" },
      { text: "A raft, flat and open to the sky", nextScene: "animals", tag: "invented", feedback: "Genesis says the ark had a roof, three decks, and a door in its side.", isCorrect: false, sentiment: "negative" },
    ],
  },
  animals: {
    id: "animals",
    title: "The Creatures Come",
    text: "The animals arrive at the ark.\nWho do you take on board?",
    choices: [
      { text: "Take pairs of every kind of animal, male and female", nextScene: "boarding", tag: "pairs", feedback: "Genesis 7:8-9 — Pairs of clean and unclean animals, birds and creeping things came to Noah, male and female.", isCorrect: true, sentiment: "positive" },
      { text: "Take only sheep and goats", nextScene: "boarding", tag: "invented", feedback: "Genesis says every kind of animal came, not only sheep and goats.", isCorrect: false, sentiment: "negative" },
      { text: "Take no animals — only your family", nextScene: "boarding", tag: "invented", feedback: "Genesis says the animals came into the ark with Noah.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boarding: {
    id: "boarding",
    title: "The Door Shut",
    text: "It is time to enter the ark.\nWho enters, and who closes the door?",
    choices: [
      { text: "Enter with your wife, three sons, and their wives; the Lord shuts the door", nextScene: "storm", tag: "family", feedback: "Genesis 7:13, 16 — Noah, his wife, his three sons and their wives entered the ark, and the Lord shut him in.", isCorrect: true, sentiment: "positive" },
      { text: "Enter the ark alone, leaving your family behind", nextScene: "storm", tag: "invented", feedback: "Genesis says Noah's whole household entered the ark with him.", isCorrect: false, sentiment: "negative" },
      { text: "Stay outside and close the door from without", nextScene: "storm", tag: "invented", feedback: "Genesis says the Lord Himself shut Noah inside the ark.", isCorrect: false, sentiment: "negative" },
    ],
  },
  storm: {
    id: "storm",
    title: "Forty Days of Rain",
    text: "The windows of heaven open.\nWhat happens?",
    choices: [
      { text: "Rain falls on the earth for forty days and forty nights", nextScene: "inside", tag: "rain", feedback: "Genesis 7:12 — Rain fell on the earth forty days and forty nights.", isCorrect: true, sentiment: "positive" },
      { text: "A single storm passes in one day", nextScene: "inside", tag: "invented", feedback: "Genesis says the rain fell for forty days and nights.", isCorrect: false, sentiment: "negative" },
      { text: "Only a light drizzle falls", nextScene: "inside", tag: "invented", feedback: "Genesis describes the fountains of the deep bursting and the windows of heaven opening.", isCorrect: false, sentiment: "negative" },
    ],
  },
  inside: {
    id: "inside",
    title: "Upon the Waters",
    text: "The ark floats on the deep.\nHow long do the waters prevail on the earth?",
    choices: [
      { text: "The waters flood the earth for a hundred and fifty days", nextScene: "dove", tag: "150-days", feedback: "Genesis 7:24 — The waters flooded the earth for a hundred and fifty days.", isCorrect: true, sentiment: "positive" },
      { text: "The waters recede in three days", nextScene: "dove", tag: "invented", feedback: "Genesis says the waters prevailed 150 days before receding.", isCorrect: false, sentiment: "negative" },
      { text: "You steer the ark back toward Eden", nextScene: "dove", tag: "invented", feedback: "Genesis does not describe Noah steering the ark; God kept it afloat.", isCorrect: false, sentiment: "negative" },
    ],
  },
  dove: {
    id: "dove",
    title: "The Dove Returns",
    text: "The waters begin to recede.\nHow do you know dry land is near?",
    choices: [
      { text: "Send out a dove; it returns with a fresh olive leaf", nextScene: "dry_land", tag: "dove", feedback: "Genesis 8:11 — The dove returned to Noah in the evening with a freshly plucked olive leaf.", isCorrect: true, sentiment: "positive" },
      { text: "Send out a raven that returns with grain", nextScene: "dry_land", tag: "invented", feedback: "Genesis says the dove — not the raven — brought back an olive leaf.", isCorrect: false, sentiment: "negative" },
      { text: "Open the roof and look with your own eyes only", nextScene: "dry_land", tag: "invented", feedback: "Genesis says Noah sent out birds to test whether the waters had gone down.", isCorrect: false, sentiment: "negative" },
    ],
  },
  dry_land: {
    id: "dry_land",
    title: "Earth Beneath Your Feet",
    text: "The Lord tells you to come out of the ark.\nWhat do you do first on dry land?",
    choices: [
      { text: "Build an altar to the Lord and offer sacrifices", nextScene: "covenant", tag: "altar", feedback: "Genesis 8:20 — Noah built an altar to the Lord and offered burnt offerings on it.", isCorrect: true, sentiment: "positive" },
      { text: "Begin building a great tower right away", nextScene: "covenant", tag: "invented", feedback: "Genesis says Noah's first act was to build an altar, not a tower.", isCorrect: false, sentiment: "negative" },
      { text: "Refuse to leave the ark", nextScene: "covenant", tag: "invented", feedback: "Genesis says Noah came out of the ark when God told him to.", isCorrect: false, sentiment: "negative" },
    ],
  },
  covenant: {
    id: "covenant",
    title: "The Rainbow",
    text: "A rainbow arches across the sky.\n\"Never again will I flood the earth. This is my covenant with you.\"",
    choices: [],
    isFinal: true,
  },
};
