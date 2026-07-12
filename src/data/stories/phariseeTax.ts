import { StoryScene } from "@/data/stories/creation";

// PHARISEE AND TAX COLLECTOR — Luke 18:9-14
// You walk into the temple and watch two men pray.

export const phariseeTaxScenes: Record<string, StoryScene> = {
  // ACT I — JESUS BEGINS
  start: {
    id: "start",
    title: "Two Men, One Temple",
    text: "Jesus speaks softly to the crowd,\n\"Two men went up to the temple to pray.\"",
    choices: [
      { text: "Decide you already know best", nextScene: "know_consequence", tag: "doubtful", feedback: "Pride hears nothing new.", isCorrect: false, sentiment: "negative" },
      { text: "Lean in and listen", nextScene: "temple", tag: "faithful", feedback: "Luke 18:9 — Jesus told this parable to some who trusted in themselves that they were righteous.", isCorrect: true, sentiment: "positive" },
    ],
  },
  know_consequence: {
    id: "know_consequence",
    title: "Listen Again",
    text: "Pride is the first wall against truth.\nLay it down and hear.",
    choices: [
      { text: "Lean in and listen", nextScene: "temple", tag: "faithful", feedback: "You let your guard down.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — INTO THE TEMPLE
  temple: {
    id: "temple",
    title: "Into the Temple",
    text: "Light falls in long warm beams.\nTwo figures step inside to pray.",
    choices: [
      { text: "Judge them before they speak", nextScene: "judge_consequence", tag: "doubtful", feedback: "Wait. Watch first.", isCorrect: false, sentiment: "negative" },
      { text: "Watch each man in silence", nextScene: "pharisee_pray", tag: "faithful", feedback: "Luke 18:10 — Jesus said that two men went up into the temple to pray.", isCorrect: true, sentiment: "positive" },
    ],
  },
  judge_consequence: {
    id: "judge_consequence",
    title: "Hold Your Judgment",
    text: "God sees the heart, not the robe.\nWait and watch.",
    choices: [
      { text: "Watch each man in silence", nextScene: "pharisee_pray", tag: "faithful", feedback: "You hold your peace.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE PHARISEE PRAYS
  pharisee_pray: {
    id: "pharisee_pray",
    title: "The Pharisee Stands",
    text: "The Pharisee lifts his hands and prays,\n\"God, I thank you I am not like others.\"",
    choices: [
      { text: "Admire his confident faith", nextScene: "admire_consequence", tag: "doubtful", feedback: "He prays to himself.", isCorrect: false, sentiment: "negative" },
      { text: "Notice he prays to himself", nextScene: "boast", tag: "faithful", feedback: "Luke 18:11 — The Pharisee stood and prayed with himself, thanking God that he was not like other men.", isCorrect: true, sentiment: "positive" },
    ],
  },
  admire_consequence: {
    id: "admire_consequence",
    title: "Look Again",
    text: "Loud prayer is not the same as true prayer.\nListen to what he says.",
    choices: [
      { text: "Notice he prays to himself", nextScene: "boast", tag: "faithful", feedback: "Your eyes open.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE PHARISEE BOASTS
  boast: {
    id: "boast",
    title: "I Fast, I Give",
    text: "\"I fast twice a week. I give tithes.\"\nHis chest swells with each word.",
    choices: [
      { text: "Copy his proud posture", nextScene: "copy_consequence", tag: "doubtful", feedback: "Pride dries the soul.", isCorrect: false, sentiment: "negative" },
      { text: "Feel the emptiness in his voice", nextScene: "tax_far", tag: "faithful", feedback: "Luke 18:12 — The Pharisee boasted that he fasted twice a week and gave tithes of all he possessed.", isCorrect: true, sentiment: "positive" },
      { text: "Wish you were as righteous", nextScene: "wish_consequence", tag: "fearful", feedback: "True righteousness is humble.", isCorrect: false, sentiment: "negative" },
    ],
  },
  copy_consequence: {
    id: "copy_consequence",
    title: "Do Not Copy",
    text: "Imitating pride builds nothing.\nGod looks lower than the loud.",
    choices: [
      { text: "Feel the emptiness in his voice", nextScene: "tax_far", tag: "faithful", feedback: "You see through the words.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wish_consequence: {
    id: "wish_consequence",
    title: "Not That Way",
    text: "His list is long and his heart small.\nDo not envy that.",
    choices: [
      { text: "Feel the emptiness in his voice", nextScene: "tax_far", tag: "faithful", feedback: "Envy fades quietly.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE TAX COLLECTOR STANDS FAR OFF
  tax_far: {
    id: "tax_far",
    title: "Far From the Altar",
    text: "A tax collector stands in shadow,\neyes down, afraid to lift them.",
    choices: [
      { text: "Mock him for hiding back there", nextScene: "mock_consequence", tag: "doubtful", feedback: "Heaven is closer to him now.", isCorrect: false, sentiment: "negative" },
      { text: "Step closer with quiet respect", nextScene: "mercy", tag: "faithful", feedback: "Luke 18:13 — The tax collector stood afar off, and would not lift up his eyes to heaven.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Do Not Mock",
    text: "The lowest place is the holy place.\nDo not laugh at sorrow.",
    choices: [
      { text: "Step closer with quiet respect", nextScene: "mercy", tag: "faithful", feedback: "Your mockery fades.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE PLEA FOR MERCY
  mercy: {
    id: "mercy",
    title: "Have Mercy on Me",
    text: "He strikes his chest and whispers,\n\"God, have mercy on me, a sinner.\"",
    choices: [
      { text: "Tell him to pray more impressively", nextScene: "impress_consequence", tag: "doubtful", feedback: "Heaven hears the broken cry.", isCorrect: false, sentiment: "negative" },
      { text: "Pray the same words with him", nextScene: "forgiven", tag: "faithful", feedback: "Luke 18:13 — The tax collector beat his breast, saying, \"God be merciful to me a sinner.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  impress_consequence: {
    id: "impress_consequence",
    title: "Heaven Hears Honesty",
    text: "Short and true beats long and loud.\nPray with him instead.",
    choices: [
      { text: "Pray the same words with him", nextScene: "forgiven", tag: "faithful", feedback: "Your heart bows.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — FORGIVENESS
  forgiven: {
    id: "forgiven",
    title: "Lifted Up",
    text: "Light touches his bowed face.\nHe breathes as if for the first time.",
    choices: [
      { text: "Doubt that mercy is so easy", nextScene: "doubt_consequence", tag: "doubtful", feedback: "Mercy is costly, but freely given.", isCorrect: false, sentiment: "negative" },
      { text: "Believe heaven has heard him", nextScene: "jesus_explains", tag: "faithful", feedback: "Luke 18:14 — Jesus said the tax collector went down to his house justified.", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Mercy Is Real",
    text: "Mercy is not earned, only received.\nLet yourself believe.",
    choices: [
      { text: "Believe heaven has heard him", nextScene: "jesus_explains", tag: "faithful", feedback: "Your doubt softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — JESUS EXPLAINS
  jesus_explains: {
    id: "jesus_explains",
    title: "The One Who Was Heard",
    text: "Jesus says, \"This man went home justified,\nnot the other.\"",
    choices: [
      { text: "Argue the proud man deserved more", nextScene: "argue_consequence", tag: "doubtful", feedback: "Humility is the only door.", isCorrect: false, sentiment: "negative" },
      { text: "Receive the lesson in silence", nextScene: "ending", tag: "faithful", feedback: "Luke 18:14 — Jesus said that everyone who exalts himself will be humbled, but he who humbles himself will be exalted.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "The Door Is Low",
    text: "Only the bowed can enter mercy.\nThere is no other door.",
    choices: [
      { text: "Receive the lesson in silence", nextScene: "ending", tag: "faithful", feedback: "You let go of the argument.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "Lifted by Humility",
    text: "Jesus looks at you and says softly,\n\"Whoever humbles himself will be lifted up.\"",
    choices: [],
    isFinal: true,
  },
};
