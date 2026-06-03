import { StoryScene } from "@/data/stories/creation";

// ABRAHAM AND LOT — Genesis 13
// You ARE Abraham. Humility, peace, wise separation.

export const abrahamLotScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "Two Households",
    text: "Your flocks and Lot's fill the same valley.\nThe land groans under so much life.",
    choices: [
      { text: "Ignore the strain — push on", nextScene: "tension", isCorrect: false, sentiment: "negative" },
      { text: "Notice the trouble forming", nextScene: "tension", isCorrect: true, sentiment: "positive" },
    ],
  },
  tension: {
    id: "tension",
    title: "Crowded Wells",
    text: "Two flocks. One well. The shepherds' voices rise.\nSomething must give.",
    choices: [
      { text: "Claim the well by right of age", nextScene: "quarrel", isCorrect: false, sentiment: "negative" },
      { text: "Listen first, judge nothing yet", nextScene: "quarrel", isCorrect: true, sentiment: "positive" },
      { text: "Drive Lot's flocks away", nextScene: "quarrel", isCorrect: false, sentiment: "negative" },
    ],
  },
  quarrel: {
    id: "quarrel",
    title: "The Herdsmen Clash",
    text: "Staffs raised. Shouts in the dust.\nA blow could break everything between you.",
    choices: [
      { text: "Order your men to strike first", nextScene: "decision", isCorrect: false, sentiment: "negative" },
      { text: "Step between them — call peace", nextScene: "decision", isCorrect: true, sentiment: "positive" },
    ],
  },
  decision: {
    id: "decision",
    title: "Speaking to Lot",
    text: "You take Lot aside. \"We are family.\nLet there be no strife between us.\"",
    choices: [
      { text: "Demand he leave at once", nextScene: "offering", isCorrect: false, sentiment: "negative" },
      { text: "Offer him the first choice", nextScene: "offering", isCorrect: true, sentiment: "positive" },
      { text: "Cling to your seniority", nextScene: "offering", isCorrect: false, sentiment: "negative" },
    ],
  },
  offering: {
    id: "offering",
    title: "The Open Hand",
    text: "\"If you go left, I go right.\nIf you go right, I go left. Choose.\"",
    choices: [
      { text: "Hope quietly he picks the lesser", nextScene: "lots_choice", isCorrect: false, sentiment: "negative" },
      { text: "Mean every word — release the land", nextScene: "lots_choice", isCorrect: true, sentiment: "positive" },
    ],
  },
  lots_choice: {
    id: "lots_choice",
    title: "Lot Looks East",
    text: "Lot sees the Jordan plain — green, watered, rich.\nHe chooses it without hesitation.",
    choices: [
      { text: "Resent him for taking the best", nextScene: "lot_departs", isCorrect: false, sentiment: "negative" },
      { text: "Bless him and let him go", nextScene: "lot_departs", isCorrect: true, sentiment: "positive" },
      { text: "Try to change his mind", nextScene: "lot_departs", isCorrect: false, sentiment: "negative" },
    ],
  },
  lot_departs: {
    id: "lot_departs",
    title: "The Parting",
    text: "Lot's flocks move toward the plain.\nThe dust of his road settles slowly.",
    choices: [
      { text: "Stand and watch him without bitterness", nextScene: "remaining", isCorrect: true, sentiment: "positive" },
      { text: "Turn away — refuse to see", nextScene: "remaining", isCorrect: false, sentiment: "negative" },
    ],
  },
  remaining: {
    id: "remaining",
    title: "What Is Left",
    text: "The hills are dry, the valley quiet.\nYou are alone with the land God gave.",
    choices: [
      { text: "Mourn what you released", nextScene: "the_promise", isCorrect: false, sentiment: "negative" },
      { text: "Build an altar in gratitude", nextScene: "the_promise", isCorrect: true, sentiment: "positive" },
      { text: "Count what you lost in flocks", nextScene: "the_promise", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_promise: {
    id: "the_promise",
    title: "Lift Your Eyes",
    text: "\"All the land you see — I give to you.\nYour offspring will be as the dust.\"",
    isFinal: true,
    choices: [],
  },
};
