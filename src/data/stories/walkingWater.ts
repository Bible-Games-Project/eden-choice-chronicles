import { StoryScene } from "@/data/stories/creation";

// WALKING ON WATER — Matthew 14 / Mark 6 / John 6
// You are Peter, crossing the sea at night with the disciples.

export const walkingWaterScenes: Record<string, StoryScene> = {
  // ACT I — NIGHT CROSSING
  start: {
    id: "start",
    title: "Night Crossing",
    text: "The boat drifts under the moon.\nThe wind begins to rise.",
    choices: [
      { text: "Sleep through the wind", nextScene: "sleep_consequence", tag: "doubtful", feedback: "Stay alert.", isCorrect: false, sentiment: "negative" },
      { text: "Take up the oars", nextScene: "wind", tag: "faithful", feedback: "Mark 6:48 — Jesus saw the disciples straining at the oars, because the wind was against them.", isCorrect: true, sentiment: "positive" },
      { text: "Turn back to shore", nextScene: "turnback_consequence", tag: "fearful", feedback: "He sent you across.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sleep_consequence: {
    id: "sleep_consequence",
    title: "Stay Awake",
    text: "The sea will not wait.\nGrip an oar.",
    choices: [
      { text: "Take up the oars", nextScene: "wind", tag: "faithful", feedback: "You row.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turnback_consequence: {
    id: "turnback_consequence",
    title: "Cross As He Said",
    text: "He told you to cross.\nKeep going.",
    choices: [
      { text: "Take up the oars", nextScene: "wind", tag: "faithful", feedback: "You press on.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — WIND AND WAVES
  wind: {
    id: "wind",
    title: "Wind Against You",
    text: "Wind tears the sail.\nWaves slam the hull.",
    choices: [
      { text: "Curse the wind", nextScene: "curse_consequence", tag: "fearful", feedback: "Anger will not help.", isCorrect: false, sentiment: "negative" },
      { text: "Row with the others", nextScene: "ghost", tag: "faithful", feedback: "Mark 6:48 — The disciples were straining at the oars, because the wind was against them.", isCorrect: true, sentiment: "positive" },
      { text: "Hide in the hull", nextScene: "hide_consequence", tag: "fearful", feedback: "Help your brothers.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Hold Fast",
    text: "Cursing stills no sea.\nRow with them.",
    choices: [
      { text: "Row with the others", nextScene: "ghost", tag: "faithful", feedback: "You grip the oar.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Stand With Them",
    text: "Your brothers need your hands.\nRise.",
    choices: [
      { text: "Row with the others", nextScene: "ghost", tag: "faithful", feedback: "You take your place.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE FIGURE
  ghost: {
    id: "ghost",
    title: "A Figure on the Sea",
    text: "Someone walks on the water.\nThe disciples cry, \"A ghost!\"",
    choices: [
      { text: "Scream and hide your face", nextScene: "scream_consequence", tag: "fearful", feedback: "Look again.", isCorrect: false, sentiment: "negative" },
      { text: "Look and listen", nextScene: "reassure", tag: "faithful", feedback: "Matthew 14:26 — When the disciples saw him walking on the lake, they were terrified and said, \"It's a ghost!\" and cried out in fear.", isCorrect: true, sentiment: "positive" },
    ],
  },
  scream_consequence: {
    id: "scream_consequence",
    title: "Look Again",
    text: "Fear will blind you.\nLift your eyes.",
    choices: [
      { text: "Look and listen", nextScene: "reassure", tag: "faithful", feedback: "You watch closely.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — IT IS I
  reassure: {
    id: "reassure",
    title: "Take Courage",
    text: "His voice carries on the wind.\n\"Take heart. It is I.\"",
    choices: [
      { text: "Doubt it is him", nextScene: "doubt_consequence", tag: "doubtful", feedback: "Test the voice.", isCorrect: false, sentiment: "negative" },
      { text: "\"Lord, bid me come\"", nextScene: "peter_step", tag: "faithful", feedback: "He says, \"Come.\"", isCorrect: true, sentiment: "positive" },
      { text: "Stay silent in the boat", nextScene: "silent_consequence", tag: "fearful", feedback: "Speak to him.", isCorrect: false, sentiment: "negative" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust His Voice",
    text: "It is the Lord.\nAsk him.",
    choices: [
      { text: "\"Lord, bid me come\"", nextScene: "peter_step", tag: "faithful", feedback: "He calls you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Speak To Him",
    text: "Silence holds you back.\nCall to him.",
    choices: [
      { text: "\"Lord, bid me come\"", nextScene: "peter_step", tag: "faithful", feedback: "His word is yes.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — STEPPING OUT
  peter_step: {
    id: "peter_step",
    title: "Out of the Boat",
    text: "Your foot hovers above the wave.\nWill you trust?",
    choices: [
      { text: "Stay safe in the boat", nextScene: "stay_consequence", tag: "fearful", feedback: "He called you out.", isCorrect: false, sentiment: "negative" },
      { text: "Step onto the water", nextScene: "peter_sink", tag: "faithful", feedback: "Matthew 14:29 — Then Peter got down out of the boat and walked on the water to Jesus.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stay_consequence: {
    id: "stay_consequence",
    title: "Answer the Call",
    text: "Faith is on the water.\nStep out.",
    choices: [
      { text: "Step onto the water", nextScene: "peter_sink", tag: "faithful", feedback: "You walk.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — SINKING AND RESCUE
  peter_sink: {
    id: "peter_sink",
    title: "The Wind, the Waves",
    text: "You see the wind.\nFear pulls you down.",
    choices: [
      { text: "Try to swim alone", nextScene: "swim_consequence", tag: "doubtful", feedback: "You cannot save yourself.", isCorrect: false, sentiment: "negative" },
      { text: "\"Lord, save me!\"", nextScene: "calm", tag: "faithful", feedback: "Matthew 14:30 — But when he saw the wind, he was afraid and, beginning to sink, cried out, \"Lord, save me!\"", isCorrect: true, sentiment: "positive" },
      { text: "Curse your weakness", nextScene: "curse_self_consequence", tag: "fearful", feedback: "Cry to him.", isCorrect: false, sentiment: "negative" },
    ],
  },
  swim_consequence: {
    id: "swim_consequence",
    title: "Call To Him",
    text: "Your strength fails.\nHe is reaching.",
    choices: [
      { text: "\"Lord, save me!\"", nextScene: "calm", tag: "faithful", feedback: "He pulls you up.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_self_consequence: {
    id: "curse_self_consequence",
    title: "Look To Him",
    text: "Shame will not lift you.\nReach.",
    choices: [
      { text: "\"Lord, save me!\"", nextScene: "calm", tag: "faithful", feedback: "He takes your hand.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — TRULY THE SON OF GOD
  calm: {
    id: "calm",
    title: "Truly the Son of God",
    text: "He steps into the boat.\nThe wind goes still.",
    choices: [],
    isFinal: true,
  },
};
