import { StoryScene } from "@/data/stories/creation";

// ROAD TO EMMAUS — Luke 24:13-35
// You ARE one of the two disciples. Focus: revelation, understanding, transformation.
// Dialogue ≤100 chars, choices ≤40 chars.

export const emmausScenes: Record<string, StoryScene> = {
  // ACT I — LEAVING JERUSALEM
  start: {
    id: "start",
    title: "Walking Away",
    text: "You and your friend leave the city.\nHope has died on a Roman cross.",
    choices: [
      { text: "Argue God has abandoned you", nextScene: "argue_consequence", tag: "wrathful", feedback: "Despair is not the last word.", isCorrect: false, sentiment: "negative" },
      { text: "Walk in silent shared grief", nextScene: "stranger_joins", tag: "humble", feedback: "Luke 24:14 — Cleopas and his companion were discussing everything that had happened.", isCorrect: true, sentiment: "positive" },
      { text: "Boast you saw it coming", nextScene: "boast_consequence", tag: "prideful", feedback: "Pride blinds the heart.", isCorrect: false, sentiment: "negative" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Not Abandoned",
    text: "Sorrow speaks loudly, but listen.\nWalk on. The road is not done.",
    choices: [
      { text: "Walk in silent shared grief", nextScene: "stranger_joins", tag: "humble", feedback: "You quiet your voice.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Not Pride",
    text: "No one foresaw this morning.\nWalk simply. Carry the grief.",
    choices: [
      { text: "Walk in silent shared grief", nextScene: "stranger_joins", tag: "humble", feedback: "Your shoulders soften.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE STRANGER
  stranger_joins: {
    id: "stranger_joins",
    title: "A Quiet Traveler",
    text: "A stranger falls in step beside you.\n\"What are you discussing?\" he asks.",
    choices: [
      { text: "Refuse to speak to him", nextScene: "refuse_consequence", tag: "fearful", feedback: "Welcome the stranger.", isCorrect: false, sentiment: "negative" },
      { text: "Mock his ignorance of events", nextScene: "mock_consequence", tag: "prideful", feedback: "Speak gently, not sharply.", isCorrect: false, sentiment: "negative" },
      { text: "Stop and share your sorrow", nextScene: "share_grief", tag: "humble", feedback: "Luke 24:17 — Cleopas and his companion stopped, their faces downcast, when the stranger asked what they were discussing.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Welcome Him",
    text: "A road shared is grief halved.\nSpeak. The stranger listens.",
    choices: [
      { text: "Stop and share your sorrow", nextScene: "share_grief", tag: "humble", feedback: "You open your hands.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Not Mockery",
    text: "He has asked in kindness.\nAnswer him in kind.",
    choices: [
      { text: "Stop and share your sorrow", nextScene: "share_grief", tag: "humble", feedback: "Your tone softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — TELLING THE STORY
  share_grief: {
    id: "share_grief",
    title: "Concerning Jesus",
    text: "\"He was a prophet, mighty in word.\nThey crucified Him. We had hoped...\"",
    choices: [
      { text: "Speak with honest heartbreak", nextScene: "scripture", tag: "humble", feedback: "Luke 24:19-21 — Cleopas and his companion explained to the stranger about Jesus of Nazareth, a prophet they had hoped would redeem Israel, but who had been crucified.", isCorrect: true, sentiment: "positive" },
      { text: "Blame the women for the rumor", nextScene: "blame_consequence", tag: "wrathful", feedback: "They told what they saw.", isCorrect: false, sentiment: "negative" },
      { text: "Cut the story short in shame", nextScene: "short_consequence", tag: "fearful", feedback: "Tell it whole. He is listening.", isCorrect: false, sentiment: "negative" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Do Not Blame",
    text: "The women carried only what they saw.\nTell the story whole.",
    choices: [
      { text: "Speak with honest heartbreak", nextScene: "scripture", tag: "humble", feedback: "You finish the telling.", isCorrect: true, sentiment: "positive" },
    ],
  },
  short_consequence: {
    id: "short_consequence",
    title: "Tell It All",
    text: "Hide nothing from this stranger.\nHe is more present than you know.",
    choices: [
      { text: "Speak with honest heartbreak", nextScene: "scripture", tag: "humble", feedback: "You let the words come.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — SCRIPTURES OPENED
  scripture: {
    id: "scripture",
    title: "Foolish and Slow",
    text: "\"Did the Christ not have to suffer\nand so enter into His glory?\"",
    choices: [
      { text: "Take offense at his words", nextScene: "offense_consequence", tag: "prideful", feedback: "He speaks for your sake.", isCorrect: false, sentiment: "negative" },
      { text: "Interrupt to correct him", nextScene: "interrupt_consequence", tag: "wrathful", feedback: "Listen. He knows more.", isCorrect: false, sentiment: "negative" },
      { text: "Lean in and listen closely", nextScene: "burning_hearts", tag: "humble", feedback: "Luke 24:27 — The stranger explained to Cleopas and his companion what was said in all the Scriptures concerning himself, beginning with Moses and all the Prophets.", isCorrect: true, sentiment: "positive" },
    ],
  },
  offense_consequence: {
    id: "offense_consequence",
    title: "Not Offense",
    text: "His sharpness is the surgeon's blade.\nReceive it. It is healing you.",
    choices: [
      { text: "Lean in and listen closely", nextScene: "burning_hearts", tag: "humble", feedback: "You quiet your pride.", isCorrect: true, sentiment: "positive" },
    ],
  },
  interrupt_consequence: {
    id: "interrupt_consequence",
    title: "Be Still",
    text: "You do not yet see what he sees.\nLet him finish. Then you will know.",
    choices: [
      { text: "Lean in and listen closely", nextScene: "burning_hearts", tag: "humble", feedback: "You hold your tongue.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — HEARTS BURNING
  burning_hearts: {
    id: "burning_hearts",
    title: "Hearts Aflame",
    text: "Something kindles inside your chest.\nYou cannot name it, but it burns.",
    choices: [
      { text: "Distrust the feeling and stop", nextScene: "distrust_consequence", tag: "fearful", feedback: "Let the fire keep burning.", isCorrect: false, sentiment: "negative" },
      { text: "Listen with your whole heart", nextScene: "invite_stay", tag: "humble", feedback: "Luke 24:32 — Cleopas and his companion later realized their hearts were burning within them while the stranger talked with them on the road and opened the Scriptures to them.", isCorrect: true, sentiment: "positive" },
      { text: "Demand he explain himself", nextScene: "demand_consequence", tag: "prideful", feedback: "Receive first. Question later.", isCorrect: false, sentiment: "negative" },
    ],
  },
  distrust_consequence: {
    id: "distrust_consequence",
    title: "Trust the Fire",
    text: "Your heart knows before your mind.\nLet it lead you forward.",
    choices: [
      { text: "Listen with your whole heart", nextScene: "invite_stay", tag: "humble", feedback: "Warmth fills your chest.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Not Demand",
    text: "Heaven does not yield to demand.\nReceive softly. Be carried.",
    choices: [
      { text: "Listen with your whole heart", nextScene: "invite_stay", tag: "humble", feedback: "You lower your guard.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE INVITATION
  invite_stay: {
    id: "invite_stay",
    title: "Emmaus Village",
    text: "The village nears. He acts as if to go on.\nThe sun sinks low.",
    choices: [
      { text: "Let him walk on alone", nextScene: "letgo_consequence", tag: "fearful", feedback: "Do not lose this stranger.", isCorrect: false, sentiment: "negative" },
      { text: "Urge him, \"Stay with us.\"", nextScene: "breaking_bread", tag: "merciful", feedback: "Luke 24:29 — Cleopas and his companion urged the stranger strongly, saying, \"Stay with us, for it is nearly evening; the day is almost over.\"", isCorrect: true, sentiment: "positive" },
      { text: "Charge him for your company", nextScene: "charge_consequence", tag: "prideful", feedback: "Hospitality is free.", isCorrect: false, sentiment: "negative" },
    ],
  },
  letgo_consequence: {
    id: "letgo_consequence",
    title: "Do Not Lose Him",
    text: "Some moments must be held.\nCall him back. Beg him to stay.",
    choices: [
      { text: "Urge him, \"Stay with us.\"", nextScene: "breaking_bread", tag: "merciful", feedback: "He smiles and turns back.", isCorrect: true, sentiment: "positive" },
    ],
  },
  charge_consequence: {
    id: "charge_consequence",
    title: "Not for Price",
    text: "A guest is welcomed, not sold to.\nOpen your door freely.",
    choices: [
      { text: "Urge him, \"Stay with us.\"", nextScene: "breaking_bread", tag: "merciful", feedback: "You set the table for three.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — THE BREAKING OF BREAD
  breaking_bread: {
    id: "breaking_bread",
    title: "He Took the Bread",
    text: "He takes the bread. Blesses it.\nBreaks it. Hands it to you.",
    choices: [
      { text: "Eat without truly looking up", nextScene: "look_consequence", tag: "fearful", feedback: "Lift your eyes. See Him.", isCorrect: false, sentiment: "negative" },
      { text: "Look at His hands. See Him.", nextScene: "recognition", tag: "humble", feedback: "Luke 24:30-31 — When the stranger was at the table with Cleopas and his companion, he took bread, gave thanks, broke it and began to give it to them, and their eyes were opened.", isCorrect: true, sentiment: "positive" },
      { text: "Boast of your fine hospitality", nextScene: "host_consequence", tag: "prideful", feedback: "This is no time for pride.", isCorrect: false, sentiment: "negative" },
    ],
  },
  look_consequence: {
    id: "look_consequence",
    title: "Lift Your Eyes",
    text: "Do not miss this for hunger.\nThe Guest is the Lord.",
    choices: [
      { text: "Look at His hands. See Him.", nextScene: "recognition", tag: "humble", feedback: "Recognition floods your chest.", isCorrect: true, sentiment: "positive" },
    ],
  },
  host_consequence: {
    id: "host_consequence",
    title: "Not Pride",
    text: "Your bread became His blessing.\nLook. Receive. Be still.",
    choices: [
      { text: "Look at His hands. See Him.", nextScene: "recognition", tag: "humble", feedback: "Your hands begin to tremble.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — RETURN TO JERUSALEM
  recognition: {
    id: "recognition",
    title: "He Vanishes",
    text: "It is the Lord! Your eyes are opened.\nAnd then He is gone.",
    choices: [
      { text: "Sit stunned and stay the night", nextScene: "stay_consequence", tag: "fearful", feedback: "This news cannot wait.", isCorrect: false, sentiment: "negative" },
      { text: "Whisper. Tell no one tonight", nextScene: "whisper_consequence", tag: "fearful", feedback: "The brothers must hear.", isCorrect: false, sentiment: "negative" },
      { text: "Rise at once. Run to Jerusalem", nextScene: "ending", tag: "merciful", feedback: "Luke 24:33 — Cleopas and his companion got up and returned at once to Jerusalem after recognizing the Lord.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stay_consequence: {
    id: "stay_consequence",
    title: "Do Not Wait",
    text: "The night is no obstacle now.\nGo. The eleven must hear.",
    choices: [
      { text: "Rise at once. Run to Jerusalem", nextScene: "ending", tag: "merciful", feedback: "You leap from the table.", isCorrect: true, sentiment: "positive" },
    ],
  },
  whisper_consequence: {
    id: "whisper_consequence",
    title: "Tell Them All",
    text: "This is not a secret to keep.\nLet the city hear, \"He lives!\"",
    choices: [
      { text: "Rise at once. Run to Jerusalem", nextScene: "ending", tag: "merciful", feedback: "You set out into the dusk.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "He Is Risen Indeed",
    text: "You burst in: \"The Lord is risen!\nHe broke bread with us tonight.\"",
    choices: [],
    isFinal: true,
  },
};
