import { StoryScene } from "@/data/stories/creation";

// CLEANSING OF THE TEMPLE — Matt 21, Mark 11, John 2
// You stand with Jesus as he enters the temple and confronts corruption.

export const cleansingTempleScenes: Record<string, StoryScene> = {
  // ACT I — ENTERING
  start: {
    id: "start",
    title: "Into the Temple",
    text: "You enter the temple courts with Jesus.\nHis eyes are steady.",
    choices: [
      { text: "Wait outside, away from trouble", nextScene: "wait_consequence", tag: "fearful", feedback: "Do not turn away from the holy.", isCorrect: false, sentiment: "negative" },
      { text: "Walk in beside him with reverence", nextScene: "see_market", tag: "faithful", feedback: "Matthew 21:12 — Jesus entered the temple courts and drove out all who were buying and selling there.", isCorrect: true, sentiment: "positive" },
      { text: "Run ahead to shout warnings", nextScene: "shout_consequence", tag: "doubtful", feedback: "Wait. Watch. Learn.", isCorrect: false, sentiment: "negative" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Come Inside",
    text: "The holy place is not for hiding from.\nFollow him.",
    choices: [
      { text: "Walk in beside him with reverence", nextScene: "see_market", tag: "faithful", feedback: "You take your place.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Quiet First",
    text: "Loud words come before listening.\nBe still.",
    choices: [
      { text: "Walk in beside him with reverence", nextScene: "see_market", tag: "faithful", feedback: "You quiet down.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — SEEING CORRUPTION
  see_market: {
    id: "see_market",
    title: "A House of Trade",
    text: "Tables of coin. Cages of doves.\nThe holy court has become a market.",
    choices: [
      { text: "Shrug — \"This is how it is.\"", nextScene: "shrug_consequence", tag: "doubtful", feedback: "Do not bless what is broken.", isCorrect: false, sentiment: "negative" },
      { text: "Buy a dove to fit in", nextScene: "buy_consequence", tag: "fearful", feedback: "You cannot purchase holiness.", isCorrect: false, sentiment: "negative" },
      { text: "Feel the wrongness with him", nextScene: "cord", tag: "faithful", feedback: "John 2:14 — Jesus found people selling cattle, sheep, and doves, and others sitting at tables exchanging money.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shrug_consequence: {
    id: "shrug_consequence",
    title: "It Is Not Right",
    text: "What is wrong is not made right by time.\nLook again.",
    choices: [
      { text: "Feel the wrongness with him", nextScene: "cord", tag: "faithful", feedback: "You see clearly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  buy_consequence: {
    id: "buy_consequence",
    title: "Not for Sale",
    text: "Worship is not bought.\nSet the coin down.",
    choices: [
      { text: "Feel the wrongness with him", nextScene: "cord", tag: "faithful", feedback: "You step away from the table.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE CORD
  cord: {
    id: "cord",
    title: "He Lifts the Cord",
    text: "He weaves a cord of small ropes.\nHis purpose is clear.",
    choices: [
      { text: "Stop him — \"Do not cause trouble.\"", nextScene: "stop_consequence", tag: "fearful", feedback: "Righteous action is not trouble.", isCorrect: false, sentiment: "negative" },
      { text: "Stand near him, ready to follow", nextScene: "tables", tag: "faithful", feedback: "John 2:15 — Jesus made a whip out of cords, and drove all from the temple courts, both sheep and cattle.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stop_consequence: {
    id: "stop_consequence",
    title: "Let Him Act",
    text: "What looks like trouble is justice waking.\nStand with him.",
    choices: [
      { text: "Stand near him, ready to follow", nextScene: "tables", tag: "faithful", feedback: "You take your place.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — OVERTURNING TABLES
  tables: {
    id: "tables",
    title: "Tables Overturned",
    text: "Tables tip. Coins ring on stone.\nThe air shakes with holy fire.",
    choices: [
      { text: "Grab coins for yourself in the chaos", nextScene: "grab_consequence", tag: "doubtful", feedback: "Greed has no place here.", isCorrect: false, sentiment: "negative" },
      { text: "Help clear the path for him", nextScene: "drive_out", tag: "faithful", feedback: "Matthew 21:12 — Jesus overturned the tables of the money changers and the benches of those selling doves.", isCorrect: true, sentiment: "positive" },
      { text: "Cover your ears and look away", nextScene: "cover_consequence", tag: "fearful", feedback: "Bear witness. Do not hide.", isCorrect: false, sentiment: "negative" },
    ],
  },
  grab_consequence: {
    id: "grab_consequence",
    title: "Drop the Coin",
    text: "You become what is being driven out.\nLet it fall.",
    choices: [
      { text: "Help clear the path for him", nextScene: "drive_out", tag: "faithful", feedback: "Your hands open.", isCorrect: true, sentiment: "positive" },
    ],
  },
  cover_consequence: {
    id: "cover_consequence",
    title: "Open Your Eyes",
    text: "Witness what holiness costs.\nDo not look away.",
    choices: [
      { text: "Help clear the path for him", nextScene: "drive_out", tag: "faithful", feedback: "You stand and watch.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — DRIVING OUT MERCHANTS
  drive_out: {
    id: "drive_out",
    title: "Out You Go",
    text: "Merchants hurry away with their cages.\nDoves rise into open air.",
    choices: [
      { text: "Mock them as they retreat", nextScene: "mock_consequence", tag: "doubtful", feedback: "Justice is not cruelty.", isCorrect: false, sentiment: "negative" },
      { text: "Open the cages, set doves free", nextScene: "proclaim", tag: "faithful", feedback: "John 2:15 — Jesus poured out the coins of the money changers and overturned their tables.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Without Scorn",
    text: "Cleansing is not contempt.\nDo good instead.",
    choices: [
      { text: "Open the cages, set doves free", nextScene: "proclaim", tag: "faithful", feedback: "Wings lift.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — PROCLAIMING PURITY
  proclaim: {
    id: "proclaim",
    title: "A House of Prayer",
    text: "\"My house shall be called\na house of prayer.\"",
    choices: [
      { text: "Argue that trade pays for repairs", nextScene: "argue_consequence", tag: "doubtful", feedback: "Holiness is not a budget.", isCorrect: false, sentiment: "negative" },
      { text: "Receive his words into your heart", nextScene: "disciples", tag: "faithful", feedback: "Matthew 21:13 — Jesus told them, \"It is written, 'My house will be called a house of prayer,' but you are making it 'a den of robbers.'\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Holiness First",
    text: "What is sacred cannot be sold for upkeep.\nListen again.",
    choices: [
      { text: "Receive his words into your heart", nextScene: "disciples", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — DISCIPLES WITNESS
  disciples: {
    id: "disciples",
    title: "They Remember",
    text: "The disciples watch and remember:\n\"Zeal for your house consumes him.\"",
    choices: [
      { text: "Boast that you saw it first", nextScene: "boast_consequence", tag: "doubtful", feedback: "Witness without pride.", isCorrect: false, sentiment: "negative" },
      { text: "Stand quietly, take it in", nextScene: "restored", tag: "faithful", feedback: "John 2:17 — His disciples remembered that it is written: \"Zeal for your house will consume me.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Be Humble",
    text: "Awe is louder than boasting.\nBe still.",
    choices: [
      { text: "Stand quietly, take it in", nextScene: "restored", tag: "faithful", feedback: "You grow still.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — RESTORATION
  restored: {
    id: "restored",
    title: "Sacred Space",
    text: "Dust settles. Light returns.\nThe court breathes again.",
    choices: [
      { text: "Refill the tables when he leaves", nextScene: "refill_consequence", tag: "doubtful", feedback: "Do not rebuild what he tore down.", isCorrect: false, sentiment: "negative" },
      { text: "Pray here as it was meant", nextScene: "ending", tag: "faithful", feedback: "Luke 19:47 — Every day Jesus was teaching at the temple.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refill_consequence: {
    id: "refill_consequence",
    title: "Keep It Clean",
    text: "What was cleansed must stay clean.\nLet it be holy.",
    choices: [
      { text: "Pray here as it was meant", nextScene: "ending", tag: "faithful", feedback: "You bow in the quiet.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "Holy Ground",
    text: "Where corruption was loud,\nprayer rises, quiet and bright.",
    choices: [],
    isFinal: true,
  },
};
