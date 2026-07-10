import { StoryScene } from "@/data/stories/creation";

// Story 8 — Abraham and Lot (Genesis 13).
// First-person: the player IS Abram.
// Correct choices describe events explicitly told in Scripture.
// Incorrect choices describe actions that do NOT appear in the biblical account.
export const abrahamLotScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "Very Wealthy",
    text: "You come back from Egypt to the Negev, and then to the hills between Bethel and Ai.\nHow wealthy are you now?",
    choices: [
      { text: "Very wealthy — in livestock, silver and gold", nextScene: "tension", tag: "wealth", feedback: "Genesis 13:2 — Abram had become very wealthy in livestock and in silver and gold.", isCorrect: true, sentiment: "positive" },
      { text: "Poor and empty-handed from the journey", nextScene: "tension", tag: "invented", feedback: "Genesis says Abram came out of Egypt very wealthy.", isCorrect: false, sentiment: "negative" },
      { text: "The same as before, with no change", nextScene: "tension", tag: "invented", feedback: "Genesis says Abram had grown very wealthy.", isCorrect: false, sentiment: "negative" },
    ],
  },
  tension: {
    id: "tension",
    title: "The Land Cannot Support You",
    text: "Both you and your nephew Lot have flocks, herds and tents.\nWhat is the trouble?",
    choices: [
      { text: "The land cannot support you both together, for your possessions are too great", nextScene: "quarrel", tag: "crowded", feedback: "Genesis 13:6 — The land could not support them while they stayed together, for their possessions were so great.", isCorrect: true, sentiment: "positive" },
      { text: "You have too little livestock to feed anyone", nextScene: "quarrel", tag: "invented", feedback: "The trouble was too much livestock for the land, not too little.", isCorrect: false, sentiment: "negative" },
      { text: "A great enemy is attacking both camps", nextScene: "quarrel", tag: "invented", feedback: "Genesis says the strain was from crowded flocks, not from war.", isCorrect: false, sentiment: "negative" },
    ],
  },
  quarrel: {
    id: "quarrel",
    title: "Strife Between the Herdsmen",
    text: "Trouble breaks out.\nWhat happens?",
    choices: [
      { text: "Quarreling breaks out between your herdsmen and Lot's herdsmen", nextScene: "decision", tag: "strife", feedback: "Genesis 13:7 — And quarreling arose between Abram's herders and Lot's herders.", isCorrect: true, sentiment: "negative" },
      { text: "Peace and joy spread through both camps", nextScene: "decision", tag: "invented", feedback: "Genesis says quarrels broke out between the herdsmen.", isCorrect: false, sentiment: "positive" },
      { text: "Lot's herdsmen leave without a word", nextScene: "decision", tag: "invented", feedback: "Genesis says they quarreled, not that they simply left.", isCorrect: false, sentiment: "negative" },
    ],
  },
  decision: {
    id: "decision",
    title: "You Speak to Lot",
    text: "You want to end the strife.\nWhat do you say to Lot?",
    choices: [
      { text: "'Let's not have any quarreling between you and me — we are close relatives'", nextScene: "offering", tag: "peace", feedback: "Genesis 13:8 — 'Let's not have any quarreling between you and me, or between your herders and mine, for we are close relatives.'", isCorrect: true, sentiment: "positive" },
      { text: "'You must leave at once — you are not my equal'", nextScene: "offering", tag: "invented", feedback: "Abram spoke kindly, appealing to their family bond.", isCorrect: false, sentiment: "negative" },
      { text: "Say nothing and drive Lot out", nextScene: "offering", tag: "invented", feedback: "Genesis records Abram's peaceful words to Lot.", isCorrect: false, sentiment: "negative" },
    ],
  },
  offering: {
    id: "offering",
    title: "First Choice",
    text: "You offer Lot a choice.\nWhat do you say?",
    choices: [
      { text: "'If you go to the left, I'll go to the right; if you go to the right, I'll go to the left'", nextScene: "lots_choice", tag: "yield", feedback: "Genesis 13:9 — 'If you go to the left, I'll go to the right; if you go to the right, I'll go to the left.'", isCorrect: true, sentiment: "positive" },
      { text: "'I am the elder — I will choose first'", nextScene: "lots_choice", tag: "invented", feedback: "Abram let Lot choose first, though he was the elder.", isCorrect: false, sentiment: "negative" },
      { text: "'We will both stay here and share every well'", nextScene: "lots_choice", tag: "invented", feedback: "Abram proposed they part ways, so the strife would end.", isCorrect: false, sentiment: "negative" },
    ],
  },
  lots_choice: {
    id: "lots_choice",
    title: "Lot Looks Up",
    text: "Lot looks around at the land.\nWhat does he choose?",
    choices: [
      { text: "Lot chooses the whole plain of the Jordan, well watered like the garden of the Lord", nextScene: "lot_departs", tag: "jordan", feedback: "Genesis 13:10-11 — Lot looked up and saw that the whole plain of the Jordan was well watered, like the garden of the Lord; so Lot chose for himself the whole plain of the Jordan.", isCorrect: true, sentiment: "negative" },
      { text: "Lot chooses the dry hill country", nextScene: "lot_departs", tag: "invented", feedback: "Lot chose the well-watered plain of the Jordan.", isCorrect: false, sentiment: "negative" },
      { text: "Lot refuses to choose and stays with Abram", nextScene: "lot_departs", tag: "invented", feedback: "Genesis says Lot chose the Jordan plain and parted from Abram.", isCorrect: false, sentiment: "negative" },
    ],
  },
  lot_departs: {
    id: "lot_departs",
    title: "The Parting",
    text: "You and Lot part ways.\nWhere does Lot go?",
    choices: [
      { text: "Lot sets out toward the east and pitches his tents near Sodom", nextScene: "remaining", tag: "sodom", feedback: "Genesis 13:11-12 — Lot set out toward the east; he pitched his tents near Sodom.", isCorrect: true, sentiment: "negative" },
      { text: "Lot travels far west across the sea", nextScene: "remaining", tag: "invented", feedback: "Lot went east, toward the plain and near Sodom.", isCorrect: false, sentiment: "negative" },
      { text: "Lot goes back to Haran", nextScene: "remaining", tag: "invented", feedback: "Lot went east toward the plain of the Jordan, near Sodom.", isCorrect: false, sentiment: "negative" },
    ],
  },
  remaining: {
    id: "remaining",
    title: "Where You Live",
    text: "Lot is gone.\nWhere do you live?",
    choices: [
      { text: "Live in the land of Canaan", nextScene: "the_promise", tag: "canaan", feedback: "Genesis 13:12 — Abram lived in the land of Canaan, while Lot lived among the cities of the plain.", isCorrect: true, sentiment: "positive" },
      { text: "Live in the plain of the Jordan near Sodom", nextScene: "the_promise", tag: "invented", feedback: "Lot lived near Sodom; Abram stayed in Canaan.", isCorrect: false, sentiment: "negative" },
      { text: "Live in Egypt", nextScene: "the_promise", tag: "invented", feedback: "Abram had left Egypt; he lived now in Canaan.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_promise: {
    id: "the_promise",
    title: "Lift Up Your Eyes",
    text: "The Lord speaks to you after Lot has parted from you.\nWhat does He say?",
    choices: [
      { text: "'Lift up your eyes; all the land you see I will give to you and your offspring forever'", nextScene: "mamre", tag: "promise", feedback: "Genesis 13:14-15 — 'Look around from where you are, to the north and south, to the east and west. All the land that you see I will give to you and your offspring forever.'", isCorrect: true, sentiment: "positive" },
      { text: "'You will lose this land to Lot's descendants'", nextScene: "mamre", tag: "invented", feedback: "The Lord promised the land to Abram's offspring forever.", isCorrect: false, sentiment: "negative" },
      { text: "'Return to Haran; the land is not yours'", nextScene: "mamre", tag: "invented", feedback: "The Lord confirmed the gift of the land to Abram.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mamre: {
    id: "mamre",
    title: "Walk Through the Land",
    text: "The Lord tells you what to do next.\nWhat is it?",
    choices: [
      { text: "'Go, walk through the length and breadth of the land, for I am giving it to you'", nextScene: "altar", tag: "walk", feedback: "Genesis 13:17 — 'Go, walk through the length and breadth of the land, for I am giving it to you.'", isCorrect: true, sentiment: "positive" },
      { text: "'Stay in one place and never travel again'", nextScene: "altar", tag: "invented", feedback: "The Lord told Abram to walk through the land.", isCorrect: false, sentiment: "negative" },
      { text: "'Give the land back to the Canaanites'", nextScene: "altar", tag: "invented", feedback: "The Lord gave the land to Abram and his offspring.", isCorrect: false, sentiment: "negative" },
    ],
  },
  altar: {
    id: "altar",
    title: "The Great Trees of Mamre",
    text: "So you move your tents and go to live near the great trees of Mamre at Hebron,\nwhere you build an altar to the Lord.",
    choices: [],
    isFinal: true,
  },
};
