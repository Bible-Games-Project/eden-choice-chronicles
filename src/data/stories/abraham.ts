import { StoryScene } from "@/data/stories/creation";

// Story 6 — The Call of Abraham (Genesis 12).
// First-person: the player IS Abram/Abraham.
// Correct choices describe events explicitly told in Scripture.
// Incorrect choices describe actions that do NOT appear in the biblical account.
export const abrahamScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "A Life in Haran",
    text: "You live in Haran with your father Terah, your wife Sarai, and your nephew Lot.\nYou are seventy-five years old.",
    choices: [
      { text: "Live as Abram in Haran, seventy-five years old", nextScene: "the_call", tag: "haran", feedback: "Genesis 12:4 — Abram was seventy-five years old when he left Haran.", isCorrect: true, sentiment: "positive" },
      { text: "Live as a young man in the city of Ur", nextScene: "the_call", tag: "invented", feedback: "By Genesis 12, Abram had already left Ur and was in Haran, aged seventy-five.", isCorrect: false, sentiment: "negative" },
      { text: "Live as king over a great nation", nextScene: "the_call", tag: "invented", feedback: "Genesis does not describe Abram as a king; he was a wandering herdsman.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_call: {
    id: "the_call",
    title: "The Call of the Lord",
    text: "The Lord speaks to you.\nWhat does He command?",
    choices: [
      { text: "'Go from your country, your people and your father's household to the land I will show you'", nextScene: "the_promise", tag: "call", feedback: "Genesis 12:1 — The Lord said to Abram, 'Go from your country, your people and your father's household to the land I will show you.'", isCorrect: true, sentiment: "positive" },
      { text: "'Stay in Haran and worship the household idols'", nextScene: "the_promise", tag: "invented", feedback: "Genesis says the Lord told Abram to leave, not to stay.", isCorrect: false, sentiment: "negative" },
      { text: "'Build a temple to Me here in Haran'", nextScene: "the_promise", tag: "invented", feedback: "The Lord told Abram to go to a land He would show him.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_promise: {
    id: "the_promise",
    title: "The Promise",
    text: "The Lord adds His promise.\nWhat does He say?",
    choices: [
      { text: "'I will make you into a great nation and bless you; all peoples on earth will be blessed through you'", nextScene: "telling_sarah", tag: "promise", feedback: "Genesis 12:2-3 — 'I will make you into a great nation, and all peoples on earth will be blessed through you.'", isCorrect: true, sentiment: "positive" },
      { text: "'I will give you great riches to keep to yourself'", nextScene: "telling_sarah", tag: "invented", feedback: "The promise was that all peoples would be blessed through Abram, not that he would hoard riches.", isCorrect: false, sentiment: "negative" },
      { text: "'You will have a long life and no descendants'", nextScene: "telling_sarah", tag: "invented", feedback: "The Lord promised Abram a great nation of descendants.", isCorrect: false, sentiment: "negative" },
    ],
  },
  telling_sarah: {
    id: "telling_sarah",
    title: "Your Household",
    text: "You must prepare your family for the journey.\nWho goes with you?",
    choices: [
      { text: "Take Sarai your wife and Lot your nephew", nextScene: "preparing", tag: "family", feedback: "Genesis 12:5 — Abram took his wife Sarai, his nephew Lot, and all the possessions and people they had acquired in Haran.", isCorrect: true, sentiment: "positive" },
      { text: "Leave Sarai behind in Haran", nextScene: "preparing", tag: "invented", feedback: "Genesis says Abram took Sarai with him.", isCorrect: false, sentiment: "negative" },
      { text: "Go alone with only a walking staff", nextScene: "preparing", tag: "invented", feedback: "Genesis says Abram took his household, flocks, and possessions.", isCorrect: false, sentiment: "negative" },
    ],
  },
  preparing: {
    id: "preparing",
    title: "What You Carry",
    text: "You gather what you will take on the journey.\nWhat goes with you?",
    choices: [
      { text: "All the possessions and people you have acquired in Haran", nextScene: "departure", tag: "possessions", feedback: "Genesis 12:5 — Abram took all the possessions and people they had acquired in Haran.", isCorrect: true, sentiment: "positive" },
      { text: "Only a small bag of bread", nextScene: "departure", tag: "invented", feedback: "Genesis says Abram left with his whole household and possessions.", isCorrect: false, sentiment: "negative" },
      { text: "A chariot of gold from the king of Haran", nextScene: "departure", tag: "invented", feedback: "Genesis does not describe a chariot from any king.", isCorrect: false, sentiment: "negative" },
    ],
  },
  departure: {
    id: "departure",
    title: "You Set Out",
    text: "The time has come to leave.\nWhere do you set out for?",
    choices: [
      { text: "Set out for the land of Canaan", nextScene: "the_road", tag: "canaan", feedback: "Genesis 12:5 — They set out from Haran to go to the land of Canaan, and they arrived there.", isCorrect: true, sentiment: "positive" },
      { text: "Set out for Egypt to become rich", nextScene: "the_road", tag: "invented", feedback: "Genesis says Abram set out for Canaan; Egypt came later, during a famine.", isCorrect: false, sentiment: "negative" },
      { text: "Set out with no destination in mind", nextScene: "the_road", tag: "invented", feedback: "The Lord had a specific land in mind — Canaan.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_road: {
    id: "the_road",
    title: "Into the Land",
    text: "You travel through the land of Canaan.\nHow far do you go?",
    choices: [
      { text: "Travel as far as the great tree of Moreh at Shechem", nextScene: "stargazing", tag: "shechem", feedback: "Genesis 12:6 — Abram traveled through the land as far as the site of the great tree of Moreh at Shechem.", isCorrect: true, sentiment: "positive" },
      { text: "Turn back to Haran halfway there", nextScene: "stargazing", tag: "invented", feedback: "Genesis says Abram arrived in Canaan.", isCorrect: false, sentiment: "negative" },
      { text: "Cross the sea to a distant island", nextScene: "stargazing", tag: "invented", feedback: "Genesis says Abram traveled by land into Canaan.", isCorrect: false, sentiment: "negative" },
    ],
  },
  doubt_night: {
    id: "doubt_night",
    title: "The Lord Appears",
    text: "At Shechem the Lord appears to you.\nWhat does He say?",
    choices: [
      { text: "'To your offspring I will give this land'", nextScene: "stargazing", tag: "landgift", feedback: "Genesis 12:7 — The Lord appeared to Abram and said, 'To your offspring I will give this land.'", isCorrect: true, sentiment: "positive" },
      { text: "'This land belongs to another people forever'", nextScene: "stargazing", tag: "invented", feedback: "The Lord promised the land to Abram's offspring.", isCorrect: false, sentiment: "negative" },
      { text: "'Return to Haran; you were wrong to come'", nextScene: "stargazing", tag: "invented", feedback: "The Lord confirmed the promise in Canaan, not sent Abram back.", isCorrect: false, sentiment: "negative" },
    ],
  },
  stargazing: {
    id: "stargazing",
    title: "At Shechem",
    text: "You have heard the promise. What do you do at Shechem?",
    choices: [
      { text: "Build an altar there to the Lord who appeared to you", nextScene: "canaan_arrival", tag: "altar", feedback: "Genesis 12:7 — Abram built an altar there to the Lord, who had appeared to him.", isCorrect: true, sentiment: "positive" },
      { text: "Build a palace of cedar for yourself", nextScene: "canaan_arrival", tag: "invented", feedback: "Genesis says Abram built an altar, not a palace.", isCorrect: false, sentiment: "negative" },
      { text: "Say nothing and move on quickly", nextScene: "canaan_arrival", tag: "invented", feedback: "Genesis says Abram worshiped by building an altar at Shechem.", isCorrect: false, sentiment: "negative" },
    ],
  },
  canaan_arrival: {
    id: "canaan_arrival",
    title: "Between Bethel and Ai",
    text: "You move on from Shechem into the hills.\nWhere do you stop and pitch your tent?",
    choices: [
      { text: "Pitch your tent in the hills between Bethel and Ai, and build another altar", nextScene: "altar", tag: "bethel", feedback: "Genesis 12:8 — From there Abram went on toward the hills east of Bethel and pitched his tent, with Bethel on the west and Ai on the east; there he built an altar and called on the name of the Lord.", isCorrect: true, sentiment: "positive" },
      { text: "Pitch your tent in the city of Sodom", nextScene: "altar", tag: "invented", feedback: "Genesis says Abram pitched his tent between Bethel and Ai.", isCorrect: false, sentiment: "negative" },
      { text: "Sail back across the river to Haran", nextScene: "altar", tag: "invented", feedback: "Genesis says Abram continued southward through Canaan.", isCorrect: false, sentiment: "negative" },
    ],
  },
  altar: {
    id: "altar",
    title: "Calling on the Name of the Lord",
    text: "You call on the name of the Lord at your new altar.\nThe promise of a great nation goes with you as you journey on toward the Negev.",
    choices: [],
    isFinal: true,
  },
};
