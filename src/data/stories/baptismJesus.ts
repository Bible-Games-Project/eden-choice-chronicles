import { StoryScene } from "@/data/stories/creation";

// BAPTISM OF JESUS — Matthew 3, Mark 1, Luke 3
// You ARE Jesus, coming to the Jordan to be baptized by John.

export const baptismJesusScenes: Record<string, StoryScene> = {
  // ACT I — JOHN PREACHES
  start: {
    id: "start",
    title: "The Voice in the Wilderness",
    text: "John cries by the Jordan:\n\"Repent, the Kingdom is near.\"",
    choices: [
      { text: "Mock his strange clothing", nextScene: "mock_consequence", tag: "proud", feedback: "He speaks the word of God.", isCorrect: false, sentiment: "negative" },
      { text: "Listen with an open heart", nextScene: "crowds", tag: "faithful", feedback: "His words pierce the silence.", isCorrect: true, sentiment: "positive" },
      { text: "Turn back to the city", nextScene: "turn_consequence", tag: "faithless", feedback: "The river is calling you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Honor the Prophet",
    text: "He is the voice prepared by God.\nLisen humbly.",
    choices: [
      { text: "Listen with an open heart", nextScene: "crowds", tag: "faithful", feedback: "Your heart softens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turn_consequence: {
    id: "turn_consequence",
    title: "Stay at the River",
    text: "Your hour begins here.\nThe Father has called you.",
    choices: [
      { text: "Listen with an open heart", nextScene: "crowds", tag: "faithful", feedback: "You step closer.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — CROWDS GATHER
  crowds: {
    id: "crowds",
    title: "Among the People",
    text: "Crowds gather along the shore.\nThey come to be cleansed.",
    choices: [
      { text: "Stand apart in pride", nextScene: "apart_consequence", tag: "proud", feedback: "You came to be among them.", isCorrect: false, sentiment: "negative" },
      { text: "Walk among them as a brother", nextScene: "approach", tag: "faithful", feedback: "You move quietly through the crowd.", isCorrect: true, sentiment: "positive" },
    ],
  },
  apart_consequence: {
    id: "apart_consequence",
    title: "Walk With Them",
    text: "You came to share their humanity.\nWalk among them.",
    choices: [
      { text: "Walk among them as a brother", nextScene: "approach", tag: "faithful", feedback: "You join the people.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — APPROACH JOHN
  approach: {
    id: "approach",
    title: "Toward John",
    text: "John stands in the river.\nHis eyes find yours.",
    choices: [
      { text: "Demand he recognize you", nextScene: "demand_consequence", tag: "proud", feedback: "Come in humility.", isCorrect: false, sentiment: "negative" },
      { text: "Wait silently in line", nextScene: "wait_consequence", tag: "fearful", feedback: "The Father calls you forward.", isCorrect: false, sentiment: "negative" },
      { text: "Step forward to be baptized", nextScene: "hesitate", tag: "faithful", feedback: "You walk into the water.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Be Humble",
    text: "You did not come to be honored.\nYou came to obey.",
    choices: [
      { text: "Step forward to be baptized", nextScene: "hesitate", tag: "faithful", feedback: "You enter the river.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "The Hour Has Come",
    text: "The Father waits for this moment.\nGo to John.",
    choices: [
      { text: "Step forward to be baptized", nextScene: "hesitate", tag: "faithful", feedback: "You step into the current.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — JOHN HESITATES
  hesitate: {
    id: "hesitate",
    title: "John's Hesitation",
    text: "John whispers:\n\"I should be baptized by You.\"",
    choices: [
      { text: "Agree and turn away", nextScene: "agree_consequence", tag: "faithless", feedback: "All righteousness must be fulfilled.", isCorrect: false, sentiment: "negative" },
      { text: "\"Let it be so to fulfill all.\"", nextScene: "baptism", tag: "faithful", feedback: "John bows and obeys.", isCorrect: true, sentiment: "positive" },
      { text: "Rebuke him sharply", nextScene: "rebuke_consequence", tag: "proud", feedback: "Speak to him with grace.", isCorrect: false, sentiment: "negative" },
    ],
  },
  agree_consequence: {
    id: "agree_consequence",
    title: "Fulfill the Way",
    text: "This must be done in obedience.\nSpeak the word.",
    choices: [
      { text: "\"Let it be so to fulfill all.\"", nextScene: "baptism", tag: "faithful", feedback: "John lifts his hands.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rebuke_consequence: {
    id: "rebuke_consequence",
    title: "Speak Gently",
    text: "He is your forerunner.\nAnswer him with peace.",
    choices: [
      { text: "\"Let it be so to fulfill all.\"", nextScene: "baptism", tag: "faithful", feedback: "John consents in awe.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — BAPTISM
  baptism: {
    id: "baptism",
    title: "Into the Water",
    text: "The cool river rises.\nYou bow your head.",
    choices: [
      { text: "Resist the waters", nextScene: "resist_consequence", tag: "fearful", feedback: "Surrender to the Father.", isCorrect: false, sentiment: "negative" },
      { text: "Accept the waters in silence", nextScene: "dove", tag: "faithful", feedback: "You are washed in obedience.", isCorrect: true, sentiment: "positive" },
    ],
  },
  resist_consequence: {
    id: "resist_consequence",
    title: "Surrender",
    text: "This is the will of the Father.\nYield to the moment.",
    choices: [
      { text: "Accept the waters in silence", nextScene: "dove", tag: "faithful", feedback: "You bow into the water.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — DOVE & VOICE
  dove: {
    id: "dove",
    title: "The Heavens Open",
    text: "The sky parts above you.\nA dove descends in silence.",
    choices: [
      { text: "Hide your face in shame", nextScene: "hide_consequence", tag: "fearful", feedback: "The Father delights in you.", isCorrect: false, sentiment: "negative" },
      { text: "Boast aloud to the crowd", nextScene: "boast_consequence", tag: "proud", feedback: "Receive in stillness.", isCorrect: false, sentiment: "negative" },
      { text: "Lift your eyes to the Father", nextScene: "voice", tag: "faithful", feedback: "Light fills your face.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Look Up",
    text: "You are the Beloved Son.\nReceive the gift.",
    choices: [
      { text: "Lift your eyes to the Father", nextScene: "voice", tag: "faithful", feedback: "You raise your face.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Receive in Silence",
    text: "This moment is sacred.\nLet the Spirit speak.",
    choices: [
      { text: "Lift your eyes to the Father", nextScene: "voice", tag: "faithful", feedback: "You stand in quiet awe.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  voice: {
    id: "voice",
    title: "The Father's Voice",
    text: "\"This is My beloved Son,\nin whom I am well pleased.\"",
    choices: [],
    isFinal: true,
  },
};
