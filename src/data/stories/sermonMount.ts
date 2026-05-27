import { StoryScene } from "@/data/stories/creation";

// SERMON ON THE MOUNT — Matthew 5–7
// You are a listener climbing the mountainside to hear Jesus.

export const sermonMountScenes: Record<string, StoryScene> = {
  // ACT I — CROWDS GATHER
  start: {
    id: "start",
    title: "Crowds Climb the Hill",
    text: "Word spreads through the valley.\nThe teacher sits upon the hill.",
    choices: [
      { text: "Hurry past, too busy", nextScene: "hurry_consequence", tag: "doubtful", feedback: "Stay and listen.", isCorrect: false, sentiment: "negative" },
      { text: "Climb up to listen", nextScene: "beatitudes", tag: "faithful", feedback: "Your steps slow with awe.", isCorrect: true, sentiment: "positive" },
      { text: "Mock the gathering", nextScene: "mock_consequence", tag: "fearful", feedback: "Quiet your pride.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hurry_consequence: {
    id: "hurry_consequence",
    title: "Pause",
    text: "Some words are worth stopping for.\nClimb.",
    choices: [
      { text: "Climb up to listen", nextScene: "beatitudes", tag: "faithful", feedback: "You turn back.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Soften",
    text: "Pride deafens the heart.\nListen first.",
    choices: [
      { text: "Climb up to listen", nextScene: "beatitudes", tag: "faithful", feedback: "You sit on the grass.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE BEATITUDES
  beatitudes: {
    id: "beatitudes",
    title: "Blessed Are",
    text: "\"Blessed are the poor in spirit.\nTheirs is the kingdom of heaven.\"",
    choices: [
      { text: "Boast of your own strength", nextScene: "boast_consequence", tag: "doubtful", feedback: "Lowliness is the door.", isCorrect: false, sentiment: "negative" },
      { text: "Bow your head humbly", nextScene: "mercy", tag: "faithful", feedback: "Peace settles on you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Lay It Down",
    text: "He blesses the meek, not the proud.\nReceive his word.",
    choices: [
      { text: "Bow your head humbly", nextScene: "mercy", tag: "faithful", feedback: "Your heart softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — MERCY AND HUMILITY
  mercy: {
    id: "mercy",
    title: "Blessed Are the Merciful",
    text: "\"Show mercy, and you will receive it.\nPure hearts will see God.\"",
    choices: [
      { text: "Hold a grudge tightly", nextScene: "grudge_consequence", tag: "fearful", feedback: "Open your hand.", isCorrect: false, sentiment: "negative" },
      { text: "Forgive someone today", nextScene: "salt_light", tag: "faithful", feedback: "Mercy flows out of you.", isCorrect: true, sentiment: "positive" },
      { text: "Judge the crowd around you", nextScene: "judge_consequence", tag: "doubtful", feedback: "First examine yourself.", isCorrect: false, sentiment: "negative" },
    ],
  },
  grudge_consequence: {
    id: "grudge_consequence",
    title: "Release",
    text: "Mercy untangles the heart.\nLet it go.",
    choices: [
      { text: "Forgive someone today", nextScene: "salt_light", tag: "faithful", feedback: "You exhale slowly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  judge_consequence: {
    id: "judge_consequence",
    title: "Look Inward",
    text: "Remove the beam from your eye.\nThen you will see.",
    choices: [
      { text: "Forgive someone today", nextScene: "salt_light", tag: "faithful", feedback: "Your gaze softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — SALT AND LIGHT
  salt_light: {
    id: "salt_light",
    title: "Salt and Light",
    text: "\"You are the light of the world.\nLet your light shine before others.\"",
    choices: [
      { text: "Hide your gift away", nextScene: "hide_consequence", tag: "fearful", feedback: "A lamp belongs on a stand.", isCorrect: false, sentiment: "negative" },
      { text: "Let your good shine out", nextScene: "enemies", tag: "faithful", feedback: "Warmth spreads from you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Shine",
    text: "Salt forgotten loses its taste.\nGive what you carry.",
    choices: [
      { text: "Let your good shine out", nextScene: "enemies", tag: "faithful", feedback: "You step into the light.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — LOVE YOUR ENEMIES
  enemies: {
    id: "enemies",
    title: "Love Your Enemies",
    text: "\"Love your enemies.\nPray for those who hurt you.\"",
    choices: [
      { text: "Curse those who wronged you", nextScene: "curse_consequence", tag: "doubtful", feedback: "Bless instead.", isCorrect: false, sentiment: "negative" },
      { text: "Repay evil with evil", nextScene: "repay_consequence", tag: "fearful", feedback: "That path only deepens it.", isCorrect: false, sentiment: "negative" },
      { text: "Pray for your enemy", nextScene: "worry", tag: "faithful", feedback: "Your heart unclenches.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Bless Instead",
    text: "Cursing keeps the wound open.\nPray for them.",
    choices: [
      { text: "Pray for your enemy", nextScene: "worry", tag: "faithful", feedback: "You whisper their name.", isCorrect: true, sentiment: "positive" },
    ],
  },
  repay_consequence: {
    id: "repay_consequence",
    title: "Break the Cycle",
    text: "Evil cannot drive out evil.\nOnly love can.",
    choices: [
      { text: "Pray for your enemy", nextScene: "worry", tag: "faithful", feedback: "Your hands open.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — DO NOT WORRY
  worry: {
    id: "worry",
    title: "Do Not Worry",
    text: "\"Look at the birds, the lilies.\nYour Father knows your need.\"",
    choices: [
      { text: "Worry about tomorrow", nextScene: "worry_consequence", tag: "fearful", feedback: "Each day has enough.", isCorrect: false, sentiment: "negative" },
      { text: "Trust your Father's care", nextScene: "foundation", tag: "faithful", feedback: "Peace fills your chest.", isCorrect: true, sentiment: "positive" },
    ],
  },
  worry_consequence: {
    id: "worry_consequence",
    title: "Today",
    text: "Tomorrow will care for itself.\nTrust him now.",
    choices: [
      { text: "Trust your Father's care", nextScene: "foundation", tag: "faithful", feedback: "Your breath slows.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — TWO FOUNDATIONS
  foundation: {
    id: "foundation",
    title: "Build on the Rock",
    text: "\"Hear my words and live them.\nBuild your house upon the rock.\"",
    choices: [
      { text: "Build your life on sand", nextScene: "sand_consequence", tag: "doubtful", feedback: "It will not stand.", isCorrect: false, sentiment: "negative" },
      { text: "Build your life on his word", nextScene: "ending", tag: "faithful", feedback: "Your heart stands firm.", isCorrect: true, sentiment: "positive" },
    ],
  },
  sand_consequence: {
    id: "sand_consequence",
    title: "Choose Rock",
    text: "Sand gives way in the storm.\nChoose the firm ground.",
    choices: [
      { text: "Build your life on his word", nextScene: "ending", tag: "faithful", feedback: "You feel rooted.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "The Crowd Was Amazed",
    text: "You walk down the mountain changed.\nHis words have become your house.",
    choices: [],
    isFinal: true,
  },
};
