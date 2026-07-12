import { StoryScene } from "@/data/stories/creation";

// GOOD SAMARITAN — Luke 10:25-37
// You are the listener in the crowd, walking through the parable.

export const goodSamaritanScenes: Record<string, StoryScene> = {
  // ACT I — THE QUESTION
  start: {
    id: "start",
    title: "Who Is My Neighbor?",
    text: "Jesus sits on the hillside.\n\"Let me tell you a story.\"",
    choices: [
      { text: "Walk away, uninterested", nextScene: "walk_consequence", tag: "doubtful", feedback: "Stay and listen.", isCorrect: false, sentiment: "negative" },
      { text: "Lean in and listen", nextScene: "attack", tag: "faithful", feedback: "Luke 10:25-29 — Jesus told the parable of the Good Samaritan in response to a lawyer's question, \"Who is my neighbor?\"", isCorrect: true, sentiment: "positive" },
      { text: "Demand a clear rule", nextScene: "rule_consequence", tag: "fearful", feedback: "He answers with a story.", isCorrect: false, sentiment: "negative" },
    ],
  },
  walk_consequence: {
    id: "walk_consequence",
    title: "Turn Back",
    text: "Some stories find you anyway.\nReturn and listen.",
    choices: [
      { text: "Lean in and listen", nextScene: "attack", tag: "faithful", feedback: "You sit down again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rule_consequence: {
    id: "rule_consequence",
    title: "Listen First",
    text: "Love is not a rule to memorize.\nIt is a road to walk.",
    choices: [
      { text: "Lean in and listen", nextScene: "attack", tag: "faithful", feedback: "Your shoulders soften.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE ATTACK
  attack: {
    id: "attack",
    title: "Down to Jericho",
    text: "A man walked the lonely road.\nRobbers left him beaten, alone.",
    choices: [
      { text: "Pity him quietly", nextScene: "pity_consequence", tag: "fearful", feedback: "Pity is not enough.", isCorrect: false, sentiment: "negative" },
      { text: "Look closely at his pain", nextScene: "priest", tag: "faithful", feedback: "Luke 10:30 — The man was traveling from Jerusalem to Jericho when he was attacked by robbers.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pity_consequence: {
    id: "pity_consequence",
    title: "See Him",
    text: "Compassion must open its eyes.\nLook at him fully.",
    choices: [
      { text: "Look closely at his pain", nextScene: "priest", tag: "faithful", feedback: "You truly see him now.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE PRIEST
  priest: {
    id: "priest",
    title: "A Priest Passes By",
    text: "A priest walked the same road.\nHe saw the man, then crossed over.",
    choices: [
      { text: "Cheer the priest's caution", nextScene: "cheer_consequence", tag: "doubtful", feedback: "Caution is not love.", isCorrect: false, sentiment: "negative" },
      { text: "Excuse him: he is busy", nextScene: "excuse_consequence", tag: "fearful", feedback: "No errand outweighs mercy.", isCorrect: false, sentiment: "negative" },
      { text: "Grieve his cold heart", nextScene: "levite", tag: "faithful", feedback: "Luke 10:31 — A priest saw the injured man but passed by on the other side of the road.", isCorrect: true, sentiment: "positive" },
    ],
  },
  cheer_consequence: {
    id: "cheer_consequence",
    title: "Not Yet",
    text: "Holy clothes did not soften him.\nMercy is the holier robe.",
    choices: [
      { text: "Grieve his cold heart", nextScene: "levite", tag: "faithful", feedback: "Sorrow finds you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  excuse_consequence: {
    id: "excuse_consequence",
    title: "No Excuse",
    text: "Love makes time it does not have.\nFeel the wound.",
    choices: [
      { text: "Grieve his cold heart", nextScene: "levite", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE LEVITE
  levite: {
    id: "levite",
    title: "A Levite Passes By",
    text: "Then a Levite came near.\nHe looked, then walked away too.",
    choices: [
      { text: "Hope someone else helps", nextScene: "hope_consequence", tag: "fearful", feedback: "Someone else may not come.", isCorrect: false, sentiment: "negative" },
      { text: "Long for a true neighbor", nextScene: "samaritan", tag: "faithful", feedback: "Luke 10:32 — A Levite also came to the place, saw the man, and passed by on the other side.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hope_consequence: {
    id: "hope_consequence",
    title: "Be the Neighbor",
    text: "The world waits for someone.\nLet that someone be you.",
    choices: [
      { text: "Long for a true neighbor", nextScene: "samaritan", tag: "faithful", feedback: "You hold the wish close.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE SAMARITAN STOPS
  samaritan: {
    id: "samaritan",
    title: "A Samaritan Stops",
    text: "A Samaritan saw the broken man.\nHe knelt down beside him.",
    choices: [
      { text: "Doubt him: he is foreign", nextScene: "doubt_consequence", tag: "doubtful", feedback: "Mercy has no borders.", isCorrect: false, sentiment: "negative" },
      { text: "Bless the stranger's kindness", nextScene: "tend", tag: "faithful", feedback: "Luke 10:33 — A Samaritan, as he traveled, came where the man was and took pity on him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "No Borders",
    text: "He is the neighbor you did not expect.\nReceive his goodness.",
    choices: [
      { text: "Bless the stranger's kindness", nextScene: "tend", tag: "faithful", feedback: "Your pride softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — TENDING THE WOUNDS
  tend: {
    id: "tend",
    title: "Oil and Wine",
    text: "He cleansed the wounds with care.\nHe bound them with his own cloth.",
    choices: [
      { text: "Rush him: it takes too long", nextScene: "rush_consequence", tag: "fearful", feedback: "Mercy takes its time.", isCorrect: false, sentiment: "negative" },
      { text: "Watch the slow tenderness", nextScene: "inn", tag: "faithful", feedback: "Luke 10:34 — The Samaritan bandaged the man's wounds, pouring on oil and wine.", isCorrect: true, sentiment: "positive" },
      { text: "Look away from the wound", nextScene: "lookaway_consequence", tag: "doubtful", feedback: "Stay with the broken.", isCorrect: false, sentiment: "negative" },
    ],
  },
  rush_consequence: {
    id: "rush_consequence",
    title: "Be Patient",
    text: "Healing cannot be hurried.\nStay near him.",
    choices: [
      { text: "Watch the slow tenderness", nextScene: "inn", tag: "faithful", feedback: "You breathe slowly with him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lookaway_consequence: {
    id: "lookaway_consequence",
    title: "Stay With Him",
    text: "Mercy does not turn away.\nIt stays through the hard part.",
    choices: [
      { text: "Watch the slow tenderness", nextScene: "inn", tag: "faithful", feedback: "Your gaze steadies.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — TO THE INN
  inn: {
    id: "inn",
    title: "Bring Him to Shelter",
    text: "He lifted the man onto his donkey.\nHe carried him to a quiet inn.",
    choices: [
      { text: "Leave him at the door", nextScene: "leave_consequence", tag: "doubtful", feedback: "Stay with him longer.", isCorrect: false, sentiment: "negative" },
      { text: "Settle him into safety", nextScene: "pay", tag: "faithful", feedback: "Luke 10:34 — The Samaritan put the man on his own donkey and took him to an inn.", isCorrect: true, sentiment: "positive" },
    ],
  },
  leave_consequence: {
    id: "leave_consequence",
    title: "Finish the Mercy",
    text: "Half-finished kindness still wounds.\nSee him fully settled.",
    choices: [
      { text: "Settle him into safety", nextScene: "pay", tag: "faithful", feedback: "You stay until he rests.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — THE COST OF MERCY
  pay: {
    id: "pay",
    title: "Two Silver Coins",
    text: "\"Care for him. I will return\nand repay whatever it costs.\"",
    choices: [
      { text: "Pay only what is required", nextScene: "minimum_consequence", tag: "doubtful", feedback: "Love gives more.", isCorrect: false, sentiment: "negative" },
      { text: "Promise to cover any cost", nextScene: "ending", tag: "faithful", feedback: "Luke 10:35 — The Samaritan gave the innkeeper two denarii and promised to repay any extra expenses upon his return.", isCorrect: true, sentiment: "positive" },
    ],
  },
  minimum_consequence: {
    id: "minimum_consequence",
    title: "Go Further",
    text: "Love does not count its coins.\nIt covers what is needed.",
    choices: [
      { text: "Promise to cover any cost", nextScene: "ending", tag: "faithful", feedback: "Your hand opens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — GO AND DO LIKEWISE
  ending: {
    id: "ending",
    title: "Go and Do Likewise",
    text: "Jesus looks straight at you.\n\"Go now. Do the same.\"",
    choices: [],
    isFinal: true,
  },
};
