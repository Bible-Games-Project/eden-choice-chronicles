import { StoryScene } from "@/data/stories/creation";

// Story 5 — Tower of Babel. Biblical-action rebuild (Genesis 11:1-9).
// First-person: the player is one of the people of the plain of Shinar.
// Correct choices describe events explicitly told in Scripture.
// Incorrect choices describe actions that do NOT appear in the biblical account.
export const babelScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "One Language",
    text: "The whole earth has one language and a common speech.\nWhere do the people settle?",
    choices: [
      { text: "Settle in the plain of Shinar", nextScene: "unity", tag: "shinar", feedback: "Genesis 11:2 — As people moved eastward, they found a plain in Shinar and settled there.", isCorrect: true, sentiment: "positive" },
      { text: "Sail east across a great sea", nextScene: "unity", tag: "invented", feedback: "Genesis says the people settled in the plain of Shinar.", isCorrect: false, sentiment: "negative" },
      { text: "Scatter across the earth right away", nextScene: "unity", tag: "invented", feedback: "The people did not scatter yet — that came later, as judgment.", isCorrect: false, sentiment: "negative" },
    ],
  },
  unity: {
    id: "unity",
    title: "One Speech",
    text: "You look at your neighbors.\nHow do you all speak?",
    choices: [
      { text: "You all speak the same language, one common speech", nextScene: "proposal", tag: "one-tongue", feedback: "Genesis 11:1 — The whole world had one language and a common speech.", isCorrect: true, sentiment: "positive" },
      { text: "Every family speaks a different tongue", nextScene: "proposal", tag: "invented", feedback: "Genesis says everyone spoke one language at this point.", isCorrect: false, sentiment: "negative" },
      { text: "No one speaks at all", nextScene: "proposal", tag: "invented", feedback: "Genesis says the people spoke — with one common speech.", isCorrect: false, sentiment: "negative" },
    ],
  },
  proposal: {
    id: "proposal",
    title: "The Proposal",
    text: "The people gather.\nWhat do they propose to build?",
    choices: [
      { text: "'Let us build a city, and a tower that reaches to the heavens — and make a name for ourselves'", nextScene: "bricks", tag: "tower", feedback: "Genesis 11:4 — They said, 'Come, let us build ourselves a city, with a tower that reaches to the heavens, so that we may make a name for ourselves.'", isCorrect: true, sentiment: "negative" },
      { text: "'Let us build an altar to the Lord'", nextScene: "bricks", tag: "invented", feedback: "Genesis says they built a city and a tower to make a name for themselves, not an altar.", isCorrect: false, sentiment: "positive" },
      { text: "'Let us go back and travel alone'", nextScene: "bricks", tag: "invented", feedback: "Genesis says the people stayed together to build.", isCorrect: false, sentiment: "positive" },
    ],
  },
  bricks: {
    id: "bricks",
    title: "Bricks and Tar",
    text: "You gather materials for the great work.\nHow do you build?",
    choices: [
      { text: "Make bricks and bake them thoroughly, using tar for mortar", nextScene: "construction", tag: "bricks", feedback: "Genesis 11:3 — They said, 'Come, let's make bricks and bake them thoroughly.' They used brick instead of stone, and tar for mortar.", isCorrect: true, sentiment: "positive" },
      { text: "Cut stones from the mountains", nextScene: "construction", tag: "invented", feedback: "Genesis says they used bricks and tar, not cut stones.", isCorrect: false, sentiment: "negative" },
      { text: "Weave the tower from reeds", nextScene: "construction", tag: "invented", feedback: "Genesis says they used baked bricks and tar.", isCorrect: false, sentiment: "negative" },
    ],
  },
  construction: {
    id: "construction",
    title: "The City and the Tower",
    text: "The work begins.\nWhat do you build together?",
    choices: [
      { text: "Build a city and a tower with its top in the heavens", nextScene: "rising", tag: "city-tower", feedback: "Genesis 11:4-5 — They set out to build a city and a tower with its top in the heavens.", isCorrect: true, sentiment: "negative" },
      { text: "Build separate homes far from one another", nextScene: "rising", tag: "invented", feedback: "Genesis says they built one city together, not scattered homes.", isCorrect: false, sentiment: "positive" },
      { text: "Build a bridge across the sea", nextScene: "rising", tag: "invented", feedback: "Genesis says they built a city and a tower, not a bridge.", isCorrect: false, sentiment: "negative" },
    ],
  },
  rising: {
    id: "rising",
    title: "Higher and Higher",
    text: "The tower climbs into the sky.\nWhy do the people keep building?",
    choices: [
      { text: "To make a name for themselves, so they will not be scattered over the earth", nextScene: "summit", tag: "name", feedback: "Genesis 11:4 — 'Let us make a name for ourselves, and not be scattered over the face of the whole earth.'", isCorrect: true, sentiment: "negative" },
      { text: "To honor the Lord who made the heavens", nextScene: "summit", tag: "invented", feedback: "Genesis says they built to make a name for themselves, not to honor the Lord.", isCorrect: false, sentiment: "positive" },
      { text: "To hide from a coming flood", nextScene: "summit", tag: "invented", feedback: "God had already promised never again to flood the earth (Genesis 9).", isCorrect: false, sentiment: "negative" },
    ],
  },
  summit: {
    id: "summit",
    title: "The Lord Comes Down",
    text: "The tower rises. What happens next?",
    choices: [
      { text: "The Lord comes down to see the city and the tower", nextScene: "gods_gaze", tag: "descend", feedback: "Genesis 11:5 — The Lord came down to see the city and the tower the people were building.", isCorrect: true, sentiment: "positive" },
      { text: "The tower reaches heaven and the people enter it", nextScene: "gods_gaze", tag: "invented", feedback: "Genesis does not say the tower reached heaven; the Lord came down to see it.", isCorrect: false, sentiment: "negative" },
      { text: "Angels descend to help the workers build", nextScene: "gods_gaze", tag: "invented", feedback: "Genesis does not describe angels helping to build.", isCorrect: false, sentiment: "negative" },
    ],
  },
  gods_gaze: {
    id: "gods_gaze",
    title: "The Lord's Decision",
    text: "The Lord speaks about the people.\nWhat does He decide to do?",
    choices: [
      { text: "'Come, let us go down and confuse their language'", nextScene: "confusion", tag: "confuse", feedback: "Genesis 11:6-7 — The Lord said, 'Come, let us go down and confuse their language so they will not understand each other.'", isCorrect: true, sentiment: "positive" },
      { text: "'Let us praise their great work'", nextScene: "confusion", tag: "invented", feedback: "Genesis says the Lord confused their language, not praised the tower.", isCorrect: false, sentiment: "negative" },
      { text: "'Let us destroy the tower with fire'", nextScene: "confusion", tag: "invented", feedback: "Genesis says the Lord confused their language and scattered them, not that He destroyed the tower with fire.", isCorrect: false, sentiment: "negative" },
    ],
  },
  confusion: {
    id: "confusion",
    title: "Strange Words",
    text: "You turn to your neighbor and speak.\nWhat happens?",
    choices: [
      { text: "You can no longer understand one another's speech", nextScene: "scattering", tag: "confused", feedback: "Genesis 11:7 — The Lord confused their language so they could not understand each other.", isCorrect: true, sentiment: "negative" },
      { text: "Everyone suddenly speaks even more clearly", nextScene: "scattering", tag: "invented", feedback: "Genesis says their speech was confused, not made clearer.", isCorrect: false, sentiment: "positive" },
      { text: "Everyone falls silent and never speaks again", nextScene: "scattering", tag: "invented", feedback: "Genesis says the languages were confused, not that speech ended.", isCorrect: false, sentiment: "negative" },
    ],
  },
  scattering: {
    id: "scattering",
    title: "Scattered Over the Earth",
    text: "The building stops.\nWhat happens to the people?",
    choices: [
      { text: "The Lord scatters them from there over all the earth, and they stop building the city", nextScene: "reflection", tag: "scatter", feedback: "Genesis 11:8 — The Lord scattered them from there over all the earth, and they stopped building the city.", isCorrect: true, sentiment: "positive" },
      { text: "The people stay in Shinar and finish the tower", nextScene: "reflection", tag: "invented", feedback: "Genesis says they stopped building and were scattered.", isCorrect: false, sentiment: "negative" },
      { text: "The people sail back to Eden", nextScene: "reflection", tag: "invented", feedback: "Genesis says they were scattered over the whole earth, not that they returned to Eden.", isCorrect: false, sentiment: "negative" },
    ],
  },
  reflection: {
    id: "reflection",
    title: "Babel",
    text: "That is why the city was called Babel —\nfor there the Lord confused the language of the whole world.",
    choices: [],
    isFinal: true,
  },
};
