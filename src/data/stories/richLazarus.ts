import { StoryScene } from "@/data/stories/creation";

// RICH MAN AND LAZARUS — Luke 16:19-31
// You walk through the parable Jesus tells.

export const richLazarusScenes: Record<string, StoryScene> = {
  // ACT I — THE PARABLE BEGINS
  start: {
    id: "start",
    title: "Two Men",
    text: "Jesus speaks quietly to the crowd.\n\"There was a rich man, and a poor man.\"",
    choices: [
      { text: "Turn away from the warning", nextScene: "turn_consequence", tag: "doubtful", feedback: "Stay. This is for you.", isCorrect: false, sentiment: "negative" },
      { text: "Listen with a serious heart", nextScene: "luxury", tag: "faithful", feedback: "Luke 16:19 — Jesus tells of a rich man and a poor man named Lazarus.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turn_consequence: {
    id: "turn_consequence",
    title: "Sit and Hear",
    text: "Some warnings save the soul.\nReturn to the words.",
    choices: [
      { text: "Listen with a serious heart", nextScene: "luxury", tag: "faithful", feedback: "You sit back down.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE RICH MAN'S LUXURY
  luxury: {
    id: "luxury",
    title: "Purple and Fine Linen",
    text: "Inside, the rich man feasts each day,\nclothed in purple, glad and full.",
    choices: [
      { text: "Envy his soft, easy life", nextScene: "envy_consequence", tag: "doubtful", feedback: "Look at what he ignores.", isCorrect: false, sentiment: "negative" },
      { text: "Wonder who waits outside", nextScene: "gate", tag: "faithful", feedback: "Luke 16:19 — The rich man was clothed in purple and fine linen and feasted sumptuously every day.", isCorrect: true, sentiment: "positive" },
    ],
  },
  envy_consequence: {
    id: "envy_consequence",
    title: "Look Wider",
    text: "Wealth is not the whole story.\nThere is more beyond the door.",
    choices: [
      { text: "Wonder who waits outside", nextScene: "gate", tag: "faithful", feedback: "Your gaze turns outward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — LAZARUS AT THE GATE
  gate: {
    id: "gate",
    title: "At the Gate",
    text: "Lazarus lies at the gate, covered in sores.\nHe longs for the crumbs.",
    choices: [
      { text: "Step over him quickly", nextScene: "step_consequence", tag: "fearful", feedback: "Do not pass him by.", isCorrect: false, sentiment: "negative" },
      { text: "Blame him for his fall", nextScene: "blame_consequence", tag: "doubtful", feedback: "Pain is not always guilt.", isCorrect: false, sentiment: "negative" },
      { text: "Kneel and see his face", nextScene: "dogs", tag: "faithful", feedback: "Luke 16:20 — Lazarus was laid at the rich man's gate, full of sores.", isCorrect: true, sentiment: "positive" },
    ],
  },
  step_consequence: {
    id: "step_consequence",
    title: "Do Not Pass",
    text: "Every face is a gate of heaven.\nReturn to him.",
    choices: [
      { text: "Kneel and see his face", nextScene: "dogs", tag: "faithful", feedback: "You bend down low.", isCorrect: true, sentiment: "positive" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "No Judgment",
    text: "You are not the judge of him.\nYou are the neighbor.",
    choices: [
      { text: "Kneel and see his face", nextScene: "dogs", tag: "faithful", feedback: "Your pride softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — DOGS LICK HIS WOUNDS
  dogs: {
    id: "dogs",
    title: "Only the Dogs",
    text: "Even the stray dogs come near\nto lick his open wounds.",
    choices: [
      { text: "Look away in disgust", nextScene: "disgust_consequence", tag: "doubtful", feedback: "Do not look away.", isCorrect: false, sentiment: "negative" },
      { text: "Stay with him in his pain", nextScene: "indifference", tag: "faithful", feedback: "Luke 16:21 — Even the dogs came and licked Lazarus's sores.", isCorrect: true, sentiment: "positive" },
    ],
  },
  disgust_consequence: {
    id: "disgust_consequence",
    title: "Do Not Turn",
    text: "Mercy looks at what hurts.\nStay near him.",
    choices: [
      { text: "Stay with him in his pain", nextScene: "indifference", tag: "faithful", feedback: "You lift your eyes again.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE RICH MAN'S INDIFFERENCE
  indifference: {
    id: "indifference",
    title: "The Rich Man Passes",
    text: "The rich man crosses his gate each day.\nHe does not see Lazarus.",
    choices: [
      { text: "Excuse the busy rich man", nextScene: "excuse_consequence", tag: "fearful", feedback: "No errand outweighs mercy.", isCorrect: false, sentiment: "negative" },
      { text: "Grieve the cold, closed heart", nextScene: "death_lazarus", tag: "faithful", feedback: "Luke 16:19-21 — The rich man did not help Lazarus, who longed to be fed with what fell from the rich man's table.", isCorrect: true, sentiment: "positive" },
    ],
  },
  excuse_consequence: {
    id: "excuse_consequence",
    title: "No Excuse",
    text: "He had eyes. He had gold.\nHe had no compassion.",
    choices: [
      { text: "Grieve the cold, closed heart", nextScene: "death_lazarus", tag: "faithful", feedback: "Your head bows.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — LAZARUS DIES, ANGELS CARRY HIM
  death_lazarus: {
    id: "death_lazarus",
    title: "Carried by Angels",
    text: "Lazarus dies. Angels lift him\ngently to Abraham's side.",
    choices: [
      { text: "Doubt this comfort is real", nextScene: "doubt_consequence", tag: "doubtful", feedback: "God sees the forgotten.", isCorrect: false, sentiment: "negative" },
      { text: "Weep with quiet joy", nextScene: "death_rich", tag: "faithful", feedback: "Luke 16:22 — Lazarus died and was carried by the angels to Abraham's side.", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "He Is Seen",
    text: "The world forgot him.\nHeaven never did.",
    choices: [
      { text: "Weep with quiet joy", nextScene: "death_rich", tag: "faithful", feedback: "Hope warms you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — THE RICH MAN IN TORMENT
  death_rich: {
    id: "death_rich",
    title: "Buried in Torment",
    text: "The rich man also dies.\nHe wakes in fire, in agony.",
    choices: [
      { text: "Mock his sudden ruin", nextScene: "mock_consequence", tag: "doubtful", feedback: "This is not for mockery.", isCorrect: false, sentiment: "negative" },
      { text: "Tremble at the reversal", nextScene: "plea", tag: "faithful", feedback: "Luke 16:22-23 — The rich man also died and was buried, and in Hades, being in torment, he lifted up his eyes.", isCorrect: true, sentiment: "positive" },
      { text: "Pity him without learning", nextScene: "pity_consequence", tag: "fearful", feedback: "Let his end teach you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Be Sobered",
    text: "Tomorrow's gate may be your own.\nReceive the warning.",
    choices: [
      { text: "Tremble at the reversal", nextScene: "plea", tag: "faithful", feedback: "Your laugh dies away.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pity_consequence: {
    id: "pity_consequence",
    title: "Let It Teach You",
    text: "Do not only feel sad.\nFeel what your life must become.",
    choices: [
      { text: "Tremble at the reversal", nextScene: "plea", tag: "faithful", feedback: "Resolve hardens in you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — THE PLEA ACROSS THE CHASM
  plea: {
    id: "plea",
    title: "Send Lazarus",
    text: "\"Father Abraham, have mercy.\nSend Lazarus, just one drop.\"",
    choices: [
      { text: "Demand God reverse it now", nextScene: "demand_consequence", tag: "doubtful", feedback: "The chasm is fixed.", isCorrect: false, sentiment: "negative" },
      { text: "Hear Abraham's sorrow", nextScene: "warning", tag: "faithful", feedback: "Luke 16:24 — The rich man cried out to Father Abraham to have mercy and send Lazarus to dip the tip of his finger in water and cool his tongue.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Listen First",
    text: "The time to choose was before.\nHear what Abraham must say.",
    choices: [
      { text: "Hear Abraham's sorrow", nextScene: "warning", tag: "faithful", feedback: "Your silence opens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IX — WARN MY BROTHERS
  warning: {
    id: "warning",
    title: "Warn My Brothers",
    text: "\"Send him to my five brothers.\nLet them not come to this place.\"",
    choices: [
      { text: "Wait for a sign from the dead", nextScene: "sign_consequence", tag: "fearful", feedback: "You already have the word.", isCorrect: false, sentiment: "negative" },
      { text: "Hear Moses and the prophets", nextScene: "ending", tag: "faithful", feedback: "Luke 16:29 — Abraham told the rich man that his brothers have Moses and the Prophets; they should listen to them.", isCorrect: true, sentiment: "positive" },
      { text: "Blame God for the silence", nextScene: "blame_god_consequence", tag: "doubtful", feedback: "He has not been silent.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sign_consequence: {
    id: "sign_consequence",
    title: "You Have the Word",
    text: "If you ignore the Scriptures,\nno wonder will move you.",
    choices: [
      { text: "Hear Moses and the prophets", nextScene: "ending", tag: "faithful", feedback: "You bow to the truth.", isCorrect: true, sentiment: "positive" },
    ],
  },
  blame_god_consequence: {
    id: "blame_god_consequence",
    title: "He Has Spoken",
    text: "The word has been given long ago.\nThe question is whether you obey.",
    choices: [
      { text: "Hear Moses and the prophets", nextScene: "ending", tag: "faithful", feedback: "Your excuse falls away.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — THE LESSON
  ending: {
    id: "ending",
    title: "Open Your Gate",
    text: "Jesus looks straight at you.\n\"Today, who lies at your gate?\"",
    choices: [],
    isFinal: true,
  },
};
