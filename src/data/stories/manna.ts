import { StoryScene } from "@/data/stories/creation";

// MANNA IN THE DESERT — Exodus 16
// You ARE Moses. From hunger in the wilderness to daily provision.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const mannaScenes: Record<string, StoryScene> = {
  // ============ ACT I — HUNGER IN THE WILDERNESS ============
  start: {
    id: "start",
    title: "The Wilderness of Sin",
    text: "Weeks since the sea. Bread is gone.\nThe people murmur behind you.",
    choices: [
      { text: "Silence them with anger", nextScene: "anger_consequence", tag: "rash", feedback: "Their hunger is real.", isCorrect: false, sentiment: "negative" },
      { text: "Listen to their cry, then seek God", nextScene: "people_complain", tag: "humble", feedback: "Exodus 16:3 — The people of Israel complained to Moses and Aaron in the wilderness.", isCorrect: true, sentiment: "positive" },
      { text: "Promise them food you do not have", nextScene: "lie_consequence", tag: "fearful", feedback: "Only the Lord can promise that.", isCorrect: false, sentiment: "negative" },
    ],
  },
  anger_consequence: {
    id: "anger_consequence",
    title: "Hear Them First",
    text: "A leader hears before he speaks.\nTheir hunger is not rebellion alone.",
    choices: [
      { text: "Listen to their cry, then seek God", nextScene: "people_complain", tag: "humble", feedback: "Your face softens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "Speak Only Truth",
    text: "Empty promises will break them.\nGo to the One who fills hands.",
    choices: [
      { text: "Listen to their cry, then seek God", nextScene: "people_complain", tag: "humble", feedback: "You take their words to heaven.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE COMPLAINT ============
  people_complain: {
    id: "people_complain",
    title: "\"Better in Egypt\"",
    text: "\"We had pots of meat there!\"\nTheir eyes look back, not forward.",
    choices: [
      { text: "Agree and turn back to Egypt", nextScene: "turnback_consequence", tag: "fearful", feedback: "He did not free you for chains.", isCorrect: false, sentiment: "negative" },
      { text: "Carry their cry to the Lord", nextScene: "moses_seeks_god", tag: "faithful", feedback: "Exodus 16:12 — The Lord heard the grumbling of the people of Israel.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turnback_consequence: {
    id: "turnback_consequence",
    title: "Never Backward",
    text: "The Lord leads forward, always.\nBring their hunger to Him.",
    choices: [
      { text: "Carry their cry to the Lord", nextScene: "moses_seeks_god", tag: "faithful", feedback: "You lift your eyes upward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — MOSES SEEKS GOD ============
  moses_seeks_god: {
    id: "moses_seeks_god",
    title: "Alone Before Him",
    text: "Twilight falls on the silent hill.\nYou wait for His voice.",
    choices: [
      { text: "Demand bread as your right", nextScene: "demand_consequence", tag: "prideful", feedback: "Bread is His gift, not your wage.", isCorrect: false, sentiment: "negative" },
      { text: "Blame yourself and lose hope", nextScene: "despair_consequence", tag: "fearful", feedback: "He has not forgotten you.", isCorrect: false, sentiment: "negative" },
      { text: "Lay their hunger before Him", nextScene: "god_speaks", tag: "humble", feedback: "Exodus 16:12 — The Lord told Moses that He had heard the grumbling of the people of Israel.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "He Gives, You Receive",
    text: "Bread falls only from open hands.\nKneel and ask, do not demand.",
    choices: [
      { text: "Lay their hunger before Him", nextScene: "god_speaks", tag: "humble", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },
  despair_consequence: {
    id: "despair_consequence",
    title: "He Hears You",
    text: "Your weakness is not the end.\nHis mercy is just beginning.",
    choices: [
      { text: "Lay their hunger before Him", nextScene: "god_speaks", tag: "humble", feedback: "You speak the people's pain.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE PROMISE ============
  god_speaks: {
    id: "god_speaks",
    title: "\"I Will Rain Bread\"",
    text: "His voice fills the still desert:\n\"Bread from heaven, day by day.\"",
    choices: [
      { text: "Hide the promise from the people", nextScene: "hide_consequence", tag: "fearful", feedback: "His word is for them too.", isCorrect: false, sentiment: "negative" },
      { text: "Tell Aaron and the people at once", nextScene: "tell_people", tag: "obedient", feedback: "Exodus 16:10 — As Aaron spoke to the whole Israelite community, they looked toward the desert, and there was the glory of the Lord appearing in the cloud.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Speak the Promise",
    text: "Hope shared is hope doubled.\nGo, tell what you have heard.",
    choices: [
      { text: "Tell Aaron and the people at once", nextScene: "tell_people", tag: "obedient", feedback: "You run to the camp.", isCorrect: true, sentiment: "positive" },
    ],
  },

  tell_people: {
    id: "tell_people",
    title: "Word to the Camp",
    text: "Aaron stands ready beside you.\nThe weary lift their faces.",
    choices: [
      { text: "Boast you brought the answer", nextScene: "boast_consequence", tag: "prideful", feedback: "It is the Lord, not you.", isCorrect: false, sentiment: "negative" },
      { text: "Give the Lord all the glory", nextScene: "manna_falls", tag: "humble", feedback: "\"At evening, you shall know.\"", isCorrect: true, sentiment: "positive" },
      { text: "Tell only the elders, not the rest", nextScene: "secret_consequence", tag: "evasive", feedback: "His promise is for all Israel.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "His Glory, Not Yours",
    text: "The bread is from heaven, not you.\nLet His name be lifted high.",
    choices: [
      { text: "Give the Lord all the glory", nextScene: "manna_falls", tag: "humble", feedback: "Heads bow with yours.", isCorrect: true, sentiment: "positive" },
    ],
  },
  secret_consequence: {
    id: "secret_consequence",
    title: "All Must Hear",
    text: "Every tent must know His mercy.\nSpeak openly to the camp.",
    choices: [
      { text: "Give the Lord all the glory", nextScene: "manna_falls", tag: "humble", feedback: "The whole camp listens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — MANNA FROM HEAVEN ============
  manna_falls: {
    id: "manna_falls",
    title: "Bread from Heaven",
    text: "At dawn, white flakes lie like dew.\nThe ground is covered in mercy.",
    choices: [
      { text: "Forbid the people to gather", nextScene: "forbid_consequence", tag: "rash", feedback: "It is given to be eaten.", isCorrect: false, sentiment: "negative" },
      { text: "Tell each to gather one omer a day", nextScene: "gather_daily", tag: "obedient", feedback: "\"Enough for the day,\" you say.", isCorrect: true, sentiment: "positive" },
    ],
  },
  forbid_consequence: {
    id: "forbid_consequence",
    title: "Receive His Gift",
    text: "He sent it for their hands.\nLet them gather and live.",
    choices: [
      { text: "Tell each to gather one omer a day", nextScene: "gather_daily", tag: "obedient", feedback: "You wave them forward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — DAILY TRUST ============
  gather_daily: {
    id: "gather_daily",
    title: "An Omer a Day",
    text: "Some hands tremble with fear:\n\"What of tomorrow's hunger?\"",
    choices: [
      { text: "Let them store extra in jars", nextScene: "hoarding_consequence", tag: "fearful", feedback: "He provides each new day.", isCorrect: false, sentiment: "negative" },
      { text: "Teach them: trust Him each morning", nextScene: "next_morning", tag: "faithful", feedback: "\"His mercy is new at dawn.\"", isCorrect: true, sentiment: "positive" },
      { text: "Take a double share for yourself", nextScene: "selfish_consequence", tag: "prideful", feedback: "A leader takes only his omer.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hoarding_consequence: {
    id: "hoarding_consequence",
    title: "Worms by Morning",
    text: "Stored manna stinks at sunrise.\nFear cannot keep His gift fresh.",
    choices: [
      { text: "Teach them: trust Him each morning", nextScene: "next_morning", tag: "faithful", feedback: "You lift the lesson before all.", isCorrect: true, sentiment: "positive" },
    ],
  },
  selfish_consequence: {
    id: "selfish_consequence",
    title: "One Omer for All",
    text: "A shepherd does not feast alone.\nShare what He gives, in measure.",
    choices: [
      { text: "Teach them: trust Him each morning", nextScene: "next_morning", tag: "faithful", feedback: "You set down the extra.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VII — A NEW DAY ============
  next_morning: {
    id: "next_morning",
    title: "Mercy at Dawn",
    text: "Again the white flakes lie waiting.\nAgain Israel eats and lives.",
    choices: [
      { text: "Lead the people in quiet thanks", nextScene: "ending", tag: "humble", feedback: "Aaron lifts his hands with yours.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Daily Bread",
    text: "Day by day He fed them all.\nEach morning, mercy from heaven.",
    choices: [],
    isFinal: true,
  },
};
