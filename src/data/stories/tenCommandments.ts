import { StoryScene } from "@/data/stories/creation";

// THE TEN COMMANDMENTS — Exodus 19–20, 24
// You ARE Moses. From foot of Sinai to receiving the covenant.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const tenCommandmentsScenes: Record<string, StoryScene> = {
  // ============ ACT I — ARRIVAL AT SINAI ============
  start: {
    id: "start",
    title: "At the Foot of Sinai",
    text: "The mountain stands wrapped in cloud.\nThe people wait in silent awe.",
    choices: [
      { text: "Climb at once without preparing", nextScene: "haste_consequence", tag: "rash", feedback: "His holiness asks reverence first.", isCorrect: false, sentiment: "negative" },
      { text: "Consecrate the people, then ascend", nextScene: "people_tremble", tag: "obedient", feedback: "You set His order in motion.", isCorrect: true, sentiment: "positive" },
      { text: "Send another in your place", nextScene: "shift_consequence", tag: "evasive", feedback: "He has called your name.", isCorrect: false, sentiment: "negative" },
    ],
  },
  haste_consequence: {
    id: "haste_consequence",
    title: "Holiness First",
    text: "One does not run before the Lord.\nPrepare the camp, then climb.",
    choices: [
      { text: "Consecrate the people, then ascend", nextScene: "people_tremble", tag: "obedient", feedback: "You slow your steps in awe.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shift_consequence: {
    id: "shift_consequence",
    title: "He Called You",
    text: "The path belongs to your feet.\nObedience cannot be borrowed.",
    choices: [
      { text: "Consecrate the people, then ascend", nextScene: "people_tremble", tag: "obedient", feedback: "You take up the staff.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE PEOPLE TREMBLE ============
  people_tremble: {
    id: "people_tremble",
    title: "Thunder on the Mountain",
    text: "Lightning splits the dark cloud.\nThe people draw back in fear.",
    choices: [
      { text: "Mock their fear of the Lord", nextScene: "mock_consequence", tag: "prideful", feedback: "Holy fear is no shame.", isCorrect: false, sentiment: "negative" },
      { text: "Calm them and set the boundary", nextScene: "ascend_begin", tag: "faithful", feedback: "\"Stand here. Touch not the mount.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Honor Their Awe",
    text: "Trembling before Him is wisdom.\nSpeak peace, not scorn.",
    choices: [
      { text: "Calm them and set the boundary", nextScene: "ascend_begin", tag: "faithful", feedback: "Your voice steadies them.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — THE ASCENT ============
  ascend_begin: {
    id: "ascend_begin",
    title: "Into the Cloud",
    text: "The path winds upward into mist.\nThe air grows still and warm.",
    choices: [
      { text: "Turn back, afraid of the cloud", nextScene: "fear_consequence", tag: "fearful", feedback: "He calls you forward.", isCorrect: false, sentiment: "negative" },
      { text: "Climb in trust toward His voice", nextScene: "summit", tag: "faithful", feedback: "Each step is steady.", isCorrect: true, sentiment: "positive" },
      { text: "Rest halfway and wait for a sign", nextScene: "delay_consequence", tag: "evasive", feedback: "His sign is the climb itself.", isCorrect: false, sentiment: "negative" },
    ],
  },
  fear_consequence: {
    id: "fear_consequence",
    title: "Do Not Fear",
    text: "He summoned you to the summit.\nFear has no place on this path.",
    choices: [
      { text: "Climb in trust toward His voice", nextScene: "summit", tag: "faithful", feedback: "Your courage returns.", isCorrect: true, sentiment: "positive" },
    ],
  },
  delay_consequence: {
    id: "delay_consequence",
    title: "Press On",
    text: "He waits above, not on the slope.\nKeep climbing into the light.",
    choices: [
      { text: "Climb in trust toward His voice", nextScene: "summit", tag: "faithful", feedback: "Mist parts before you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — AT THE SUMMIT ============
  summit: {
    id: "summit",
    title: "Before His Glory",
    text: "Light fills the cloud around you.\nA voice speaks like rolling thunder.",
    choices: [
      { text: "Stand tall and meet His gaze", nextScene: "pride_consequence", tag: "prideful", feedback: "No flesh stands in His glory.", isCorrect: false, sentiment: "negative" },
      { text: "Bow low in reverence and listen", nextScene: "god_speaks", tag: "humble", feedback: "Your face touches the stone.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pride_consequence: {
    id: "pride_consequence",
    title: "Bow Before Him",
    text: "Even angels veil their eyes.\nLower your head and hear.",
    choices: [
      { text: "Bow low in reverence and listen", nextScene: "god_speaks", tag: "humble", feedback: "You sink to your knees.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE COMMANDMENTS ============
  god_speaks: {
    id: "god_speaks",
    title: "\"I Am the Lord Your God\"",
    text: "Ten holy words fall like fire.\nLove for Him. Love for neighbor.",
    choices: [
      { text: "Argue the words are too heavy", nextScene: "argue_consequence", tag: "fearful", feedback: "His commands are life.", isCorrect: false, sentiment: "negative" },
      { text: "Receive every word in silence", nextScene: "tablets_given", tag: "obedient", feedback: "You write them on your heart.", isCorrect: true, sentiment: "positive" },
      { text: "Try to add words of your own", nextScene: "add_consequence", tag: "prideful", feedback: "His word stands complete.", isCorrect: false, sentiment: "negative" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "His Yoke Is Light",
    text: "What He commands, He empowers.\nReceive without dispute.",
    choices: [
      { text: "Receive every word in silence", nextScene: "tablets_given", tag: "obedient", feedback: "You bow in agreement.", isCorrect: true, sentiment: "positive" },
    ],
  },
  add_consequence: {
    id: "add_consequence",
    title: "Add Nothing to His Word",
    text: "His ten are whole and perfect.\nLet them stand alone.",
    choices: [
      { text: "Receive every word in silence", nextScene: "tablets_given", tag: "obedient", feedback: "Your lips fall still.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — THE TABLETS ============
  tablets_given: {
    id: "tablets_given",
    title: "Stone Inscribed by God",
    text: "Two tablets glow with sacred fire.\nWritten by the finger of God.",
    choices: [
      { text: "Hide them away for yourself", nextScene: "hide_consequence", tag: "fearful", feedback: "They are for all Israel.", isCorrect: false, sentiment: "negative" },
      { text: "Carry them down to the people", nextScene: "descent", tag: "obedient", feedback: "You hold them close to your chest.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Share His Covenant",
    text: "His law is light for every tent.\nBring it down to His people.",
    choices: [
      { text: "Carry them down to the people", nextScene: "descent", tag: "obedient", feedback: "You turn toward the slope.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VII — THE COVENANT ============
  descent: {
    id: "descent",
    title: "Down the Holy Path",
    text: "The valley opens beneath you.\nThe camp waits below in hush.",
    choices: [
      { text: "Boast of seeing the Lord", nextScene: "boast_consequence", tag: "prideful", feedback: "Glory is His alone.", isCorrect: false, sentiment: "negative" },
      { text: "Read the words to all Israel", nextScene: "covenant_sealed", tag: "humble", feedback: "Your voice carries clearly.", isCorrect: true, sentiment: "positive" },
      { text: "Hide the tablets under your robe", nextScene: "secret_consequence", tag: "evasive", feedback: "His covenant is for the open day.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Lift His Name",
    text: "The mountain showed His glory.\nLet His name fill their ears.",
    choices: [
      { text: "Read the words to all Israel", nextScene: "covenant_sealed", tag: "humble", feedback: "You unroll the holy words.", isCorrect: true, sentiment: "positive" },
    ],
  },
  secret_consequence: {
    id: "secret_consequence",
    title: "Light Cannot Hide",
    text: "His law is meant to shine.\nLift the tablets in plain sight.",
    choices: [
      { text: "Read the words to all Israel", nextScene: "covenant_sealed", tag: "humble", feedback: "The camp falls still.", isCorrect: true, sentiment: "positive" },
    ],
  },

  covenant_sealed: {
    id: "covenant_sealed",
    title: "\"All He Has Said, We Will Do\"",
    text: "Hands lift toward the cloud above.\nOne voice answers: \"We will obey.\"",
    choices: [
      { text: "Lead them in solemn worship", nextScene: "ending", tag: "humble", feedback: "Aaron stands quietly beside you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "The Covenant",
    text: "Stone holds the words of heaven.\nIsrael belongs to her God.",
    choices: [],
    isFinal: true,
  },
};
