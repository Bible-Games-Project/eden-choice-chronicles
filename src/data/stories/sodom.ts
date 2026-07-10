import { StoryScene } from "@/data/stories/creation";

// Story 9 — The Destruction of Sodom (Genesis 19).
// First-person: the player IS Lot.
// Correct choices describe events explicitly told in Scripture.
// Incorrect choices describe actions that do NOT appear in the biblical account.
export const sodomScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "At the Gate of Sodom",
    text: "It is evening. You are sitting in the gateway of the city of Sodom.\nTwo angels arrive at Sodom. What do you do?",
    choices: [
      { text: "Get up to meet them and bow down with your face to the ground", nextScene: "wickedness", tag: "meet", feedback: "Genesis 19:1 — When Lot saw them, he got up to meet them and bowed down with his face to the ground.", isCorrect: true, sentiment: "positive" },
      { text: "Turn away and ignore the strangers", nextScene: "wickedness", tag: "invented", feedback: "Genesis says Lot rose and bowed before them.", isCorrect: false, sentiment: "negative" },
      { text: "Chase them out of the city with a staff", nextScene: "wickedness", tag: "invented", feedback: "Genesis says Lot welcomed them respectfully.", isCorrect: false, sentiment: "negative" },
    ],
  },
  wickedness: {
    id: "wickedness",
    title: "Come to My House",
    text: "You speak to the two strangers.\nWhat do you say?",
    choices: [
      { text: "'My lords, please turn aside to your servant's house; you can wash your feet and spend the night'", nextScene: "strangers", tag: "invite", feedback: "Genesis 19:2 — 'My lords, please turn aside to your servant's house. You can wash your feet and spend the night and then go on your way early in the morning.'", isCorrect: true, sentiment: "positive" },
      { text: "'Leave Sodom at once — it is not safe here'", nextScene: "strangers", tag: "invented", feedback: "Lot urged them to spend the night at his house.", isCorrect: false, sentiment: "negative" },
      { text: "'Sleep here in the square as you planned'", nextScene: "strangers", tag: "invented", feedback: "Lot insisted the angels come home with him rather than stay in the square.", isCorrect: false, sentiment: "negative" },
    ],
  },
  strangers: {
    id: "strangers",
    title: "A Meal in Your House",
    text: "The angels come home with you.\nWhat do you prepare for them?",
    choices: [
      { text: "Prepare a meal for them, baking bread without yeast", nextScene: "welcome", tag: "meal", feedback: "Genesis 19:3 — He prepared a meal for them, baking bread without yeast, and they ate.", isCorrect: true, sentiment: "positive" },
      { text: "Offer them only water and send them to bed", nextScene: "welcome", tag: "invented", feedback: "Lot baked bread and prepared a meal for them.", isCorrect: false, sentiment: "negative" },
      { text: "Offer them a lamb roasted with fire", nextScene: "welcome", tag: "invented", feedback: "Genesis specifies unleavened bread, not roasted lamb.", isCorrect: false, sentiment: "negative" },
    ],
  },
  welcome: {
    id: "welcome",
    title: "The Men of the City",
    text: "Before you go to bed, all the men of Sodom — young and old — surround the house.\nWhat do they demand?",
    choices: [
      { text: "'Where are the men who came to you tonight? Bring them out to us'", nextScene: "mob", tag: "mob", feedback: "Genesis 19:5 — They called to Lot, 'Where are the men who came to you tonight? Bring them out to us so that we can have sex with them.'", isCorrect: true, sentiment: "negative" },
      { text: "'Give us food and gold from your house'", nextScene: "mob", tag: "invented", feedback: "The men demanded Lot's guests, not gold.", isCorrect: false, sentiment: "negative" },
      { text: "'Welcome us to eat with the strangers'", nextScene: "mob", tag: "invented", feedback: "The men of Sodom came with hostile intent, not a friendly request.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mob: {
    id: "mob",
    title: "At the Door",
    text: "You go outside to speak to the crowd.\nWhat do you do with the door?",
    choices: [
      { text: "Go out to them and shut the door behind you", nextScene: "angels_warn", tag: "door", feedback: "Genesis 19:6 — Lot went outside to meet them and shut the door behind him.", isCorrect: true, sentiment: "positive" },
      { text: "Leave the door wide open so the guests can flee", nextScene: "angels_warn", tag: "invented", feedback: "Lot shut the door behind him to protect the guests.", isCorrect: false, sentiment: "negative" },
      { text: "Hand the guests over to the crowd yourself", nextScene: "angels_warn", tag: "invented", feedback: "Lot pleaded with the men not to harm his guests.", isCorrect: false, sentiment: "negative" },
    ],
  },
  angels_warn: {
    id: "angels_warn",
    title: "Pulled Inside",
    text: "The crowd surges to break down the door.\nWhat do the angels do?",
    choices: [
      { text: "The angels reach out, pull you back into the house, and strike the men with blindness", nextScene: "sons_in_law", tag: "blind", feedback: "Genesis 19:10-11 — The men inside reached out and pulled Lot back into the house and shut the door. Then they struck the men at the door with blindness.", isCorrect: true, sentiment: "positive" },
      { text: "The angels open the door and let the crowd inside", nextScene: "sons_in_law", tag: "invented", feedback: "The angels pulled Lot in and struck the crowd with blindness.", isCorrect: false, sentiment: "negative" },
      { text: "The angels vanish silently and abandon you", nextScene: "sons_in_law", tag: "invented", feedback: "The angels rescued Lot and stayed with him.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sons_in_law: {
    id: "sons_in_law",
    title: "Warn Your Family",
    text: "The angels tell you to warn your relatives about the coming destruction.\nHow do your sons-in-law respond?",
    choices: [
      { text: "Your sons-in-law think you are joking", nextScene: "urge", tag: "joke", feedback: "Genesis 19:14 — Lot went out and spoke to his sons-in-law, but they thought he was joking.", isCorrect: true, sentiment: "negative" },
      { text: "Your sons-in-law believe you and follow at once", nextScene: "urge", tag: "invented", feedback: "The sons-in-law did not take Lot seriously.", isCorrect: false, sentiment: "positive" },
      { text: "Your sons-in-law kill you for the warning", nextScene: "urge", tag: "invented", feedback: "Genesis says they thought Lot was joking.", isCorrect: false, sentiment: "negative" },
    ],
  },
  urge: {
    id: "urge",
    title: "Dawn — Flee for Your Lives",
    text: "As dawn breaks, the angels urge you to hurry.\nWhat do they say?",
    choices: [
      { text: "'Flee for your lives! Don't look back, and don't stop anywhere in the plain! Flee to the mountains'", nextScene: "flee", tag: "flee", feedback: "Genesis 19:17 — 'Flee for your lives! Don't look back, and don't stop anywhere in the plain! Flee to the mountains or you will be swept away!'", isCorrect: true, sentiment: "positive" },
      { text: "'Take your gold and hide inside the city'", nextScene: "flee", tag: "invented", feedback: "The angels commanded Lot to flee to the mountains, not to hide.", isCorrect: false, sentiment: "negative" },
      { text: "'Wait a few more days before leaving'", nextScene: "flee", tag: "invented", feedback: "The angels said 'Flee!' urgently, not to wait.", isCorrect: false, sentiment: "negative" },
    ],
  },
  flee: {
    id: "flee",
    title: "Fire from Heaven",
    text: "You reach the town of Zoar as the sun rises.\nWhat does the Lord do to Sodom and Gomorrah?",
    choices: [
      { text: "The Lord rains down burning sulfur out of the heavens on Sodom and Gomorrah", nextScene: "wife_looks", tag: "fire", feedback: "Genesis 19:24 — Then the Lord rained down burning sulfur on Sodom and Gomorrah — from the Lord out of the heavens.", isCorrect: true, sentiment: "positive" },
      { text: "The Lord sends a great flood over the cities", nextScene: "wife_looks", tag: "invented", feedback: "Genesis says burning sulfur fell from heaven, not a flood.", isCorrect: false, sentiment: "negative" },
      { text: "The Lord spares the cities and lets them stand", nextScene: "wife_looks", tag: "invented", feedback: "Sodom and Gomorrah were destroyed by fire from heaven.", isCorrect: false, sentiment: "negative" },
    ],
  },
  wife_looks: {
    id: "wife_looks",
    title: "She Looked Back",
    text: "Your wife is behind you.\nWhat happens to her?",
    choices: [
      { text: "She looks back and becomes a pillar of salt", nextScene: "aftermath", tag: "salt", feedback: "Genesis 19:26 — But Lot's wife looked back, and she became a pillar of salt.", isCorrect: true, sentiment: "negative" },
      { text: "She runs safely into Zoar with you", nextScene: "aftermath", tag: "invented", feedback: "Lot's wife looked back and was turned into a pillar of salt.", isCorrect: false, sentiment: "positive" },
      { text: "She turns into a bird and flies away", nextScene: "aftermath", tag: "invented", feedback: "Genesis says she became a pillar of salt.", isCorrect: false, sentiment: "negative" },
    ],
  },
  aftermath: {
    id: "aftermath",
    title: "The Smoke of the Plain",
    text: "Early in the morning, Abraham gets up and looks down toward Sodom.\nHe sees dense smoke rising from the land, like smoke from a furnace.\nGod remembered Abraham, and He brought Lot out of the catastrophe.",
    choices: [],
    isFinal: true,
  },
};
