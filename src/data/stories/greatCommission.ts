import { StoryScene } from "@/data/stories/creation";

// GREAT COMMISSION — Matthew 28:16-20
// You ARE one of the eleven disciples on the mountain.
// Dialogue ≤100 chars, choices ≤40 chars.

export const greatCommissionScenes: Record<string, StoryScene> = {
  // ACT I — THE MOUNTAIN
  start: {
    id: "start",
    title: "The Appointed Mountain",
    text: "You climb to the place He named.\nGalilee opens wide beneath your feet.",
    choices: [
      { text: "Linger below in fear of meeting", nextScene: "linger_consequence", tag: "fearful", feedback: "He waits. Climb the path.", isCorrect: false, sentiment: "negative" },
      { text: "Climb expecting empty silence", nextScene: "empty_consequence", tag: "fearful", feedback: "Climb in expectant hope.", isCorrect: false, sentiment: "negative" },
      { text: "Climb with hope to meet Him", nextScene: "worship", tag: "humble", feedback: "Matthew 28:16 — The eleven disciples went to Galilee, to the mountain where Jesus had told them to go.", isCorrect: true, sentiment: "positive" },
    ],
  },
  linger_consequence: {
    id: "linger_consequence",
    title: "Do Not Linger",
    text: "Fear waits at the foot of mountains.\nHope waits at the top.",
    choices: [
      { text: "Climb with hope to meet Him", nextScene: "worship", tag: "humble", feedback: "You set your face upward.", isCorrect: true, sentiment: "positive" },
    ],
  },
  empty_consequence: {
    id: "empty_consequence",
    title: "Not Empty",
    text: "He keeps every promise He makes.\nClimb. He will be there.",
    choices: [
      { text: "Climb with hope to meet Him", nextScene: "worship", tag: "humble", feedback: "Your heart lifts.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — WORSHIP
  worship: {
    id: "worship",
    title: "He Is There",
    text: "He stands above you, radiant and calm.\nSome doubt. Most fall down.",
    choices: [
      { text: "Stand back, arms folded in doubt", nextScene: "doubt_consequence", tag: "fearful", feedback: "Even doubters He receives.", isCorrect: false, sentiment: "negative" },
      { text: "Bow low. Worship the Lord", nextScene: "authority", tag: "humble", feedback: "Matthew 28:17 — When they saw Jesus, they worshiped Him, though some doubted.", isCorrect: true, sentiment: "positive" },
      { text: "Ask Him for personal reward", nextScene: "reward_consequence", tag: "prideful", feedback: "This is not the hour for that.", isCorrect: false, sentiment: "negative" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Step Closer",
    text: "Doubt cannot hold against His face.\nKneel. He is the Lord.",
    choices: [
      { text: "Bow low. Worship the Lord", nextScene: "authority", tag: "humble", feedback: "Your doubts loosen.", isCorrect: true, sentiment: "positive" },
    ],
  },
  reward_consequence: {
    id: "reward_consequence",
    title: "Not for Reward",
    text: "He gives more than gold can name.\nWorship first. Receive after.",
    choices: [
      { text: "Bow low. Worship the Lord", nextScene: "authority", tag: "humble", feedback: "You lower your hands.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — ALL AUTHORITY
  authority: {
    id: "authority",
    title: "All Authority",
    text: "\"All authority in heaven and on earth\nhas been given to Me,\" He says.",
    choices: [
      { text: "Argue Rome still holds the world", nextScene: "argue_consequence", tag: "wrathful", feedback: "His reign is deeper than Rome.", isCorrect: false, sentiment: "negative" },
      { text: "Demand He prove it with a sign", nextScene: "demand_consequence", tag: "prideful", feedback: "His word is the sign.", isCorrect: false, sentiment: "negative" },
      { text: "Receive His word in awe", nextScene: "go_nations", tag: "humble", feedback: "Matthew 28:18 — Jesus came to them and said, \"All authority in heaven and on earth has been given to Me.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Higher Than Rome",
    text: "Empires rise. Empires fall.\nHis kingdom outlasts them all.",
    choices: [
      { text: "Receive His word in awe", nextScene: "go_nations", tag: "humble", feedback: "You bow in agreement.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "No Sign Needed",
    text: "He stands risen before your eyes.\nWhat sign is greater?",
    choices: [
      { text: "Receive His word in awe", nextScene: "go_nations", tag: "humble", feedback: "You lower your gaze.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — GO TO ALL NATIONS
  go_nations: {
    id: "go_nations",
    title: "Go and Make Disciples",
    text: "\"Go therefore and make disciples\nof all the nations,\" He says.",
    choices: [
      { text: "Keep this gift only for Israel", nextScene: "israel_consequence", tag: "prideful", feedback: "All nations. Hold nothing back.", isCorrect: false, sentiment: "negative" },
      { text: "Hide it among trusted friends", nextScene: "hide_consequence", tag: "fearful", feedback: "Hidden lamps light no one.", isCorrect: false, sentiment: "negative" },
      { text: "Say yes. Go to every nation", nextScene: "baptize", tag: "merciful", feedback: "Matthew 28:19 — Jesus commanded His disciples to go and make disciples of all nations.", isCorrect: true, sentiment: "positive" },
    ],
  },
  israel_consequence: {
    id: "israel_consequence",
    title: "Not Only One People",
    text: "His love crosses every border.\nGo to all the nations.",
    choices: [
      { text: "Say yes. Go to every nation", nextScene: "baptize", tag: "merciful", feedback: "You see the horizons open.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Do Not Hide",
    text: "This light is for the whole earth.\nCarry it into the open.",
    choices: [
      { text: "Say yes. Go to every nation", nextScene: "baptize", tag: "merciful", feedback: "You lift your eyes outward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — BAPTIZING
  baptize: {
    id: "baptize",
    title: "Baptizing Them",
    text: "\"Baptizing them in the name of\nthe Father, the Son, and the Spirit.\"",
    choices: [
      { text: "Baptize only the worthy few", nextScene: "worthy_consequence", tag: "prideful", feedback: "Grace welcomes all who come.", isCorrect: false, sentiment: "negative" },
      { text: "Baptize all who believe in Him", nextScene: "teach", tag: "merciful", feedback: "Matthew 28:19 — Jesus instructed His disciples to baptize new believers in the name of the Father, the Son, and the Holy Spirit.", isCorrect: true, sentiment: "positive" },
      { text: "Charge a price for the rite", nextScene: "price_consequence", tag: "prideful", feedback: "Grace cannot be sold.", isCorrect: false, sentiment: "negative" },
    ],
  },
  worthy_consequence: {
    id: "worthy_consequence",
    title: "All Who Believe",
    text: "No one is worthy on their own.\nAll are welcomed by His name.",
    choices: [
      { text: "Baptize all who believe in Him", nextScene: "teach", tag: "merciful", feedback: "You open the door wide.", isCorrect: true, sentiment: "positive" },
    ],
  },
  price_consequence: {
    id: "price_consequence",
    title: "Freely Received",
    text: "Freely you have received.\nFreely give. No price at all.",
    choices: [
      { text: "Baptize all who believe in Him", nextScene: "teach", tag: "merciful", feedback: "You let go of every coin.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — TEACHING
  teach: {
    id: "teach",
    title: "Teaching Them",
    text: "\"Teaching them to obey all I\nhave commanded you,\" He says.",
    choices: [
      { text: "Teach only what is easy to hear", nextScene: "easy_consequence", tag: "fearful", feedback: "Teach all He commanded. Not less.", isCorrect: false, sentiment: "negative" },
      { text: "Add your own rules to His", nextScene: "add_consequence", tag: "prideful", feedback: "Do not add. Do not subtract.", isCorrect: false, sentiment: "negative" },
      { text: "Teach all He has commanded", nextScene: "presence", tag: "humble", feedback: "Matthew 28:20 — Jesus told His disciples to teach new believers to obey everything He had commanded them.", isCorrect: true, sentiment: "positive" },
    ],
  },
  easy_consequence: {
    id: "easy_consequence",
    title: "Teach It All",
    text: "Soft truth is no truth at all.\nGive them the whole gospel.",
    choices: [
      { text: "Teach all He has commanded", nextScene: "presence", tag: "humble", feedback: "You let no word fall.", isCorrect: true, sentiment: "positive" },
    ],
  },
  add_consequence: {
    id: "add_consequence",
    title: "Add Nothing",
    text: "His commands are enough.\nDo not burden what He made light.",
    choices: [
      { text: "Teach all He has commanded", nextScene: "presence", tag: "humble", feedback: "You set your own rules aside.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — I AM WITH YOU
  presence: {
    id: "presence",
    title: "I Am With You",
    text: "\"And surely I am with you always,\nto the very end of the age.\"",
    choices: [
      { text: "Fear the road without His face", nextScene: "fear_consequence", tag: "fearful", feedback: "He never leaves your side.", isCorrect: false, sentiment: "negative" },
      { text: "Trust His Spirit goes with you", nextScene: "ending", tag: "humble", feedback: "Matthew 28:20 — Jesus promised His disciples that He would be with them always, to the very end of the age.", isCorrect: true, sentiment: "positive" },
      { text: "Wait on the mountain forever", nextScene: "wait_consequence", tag: "fearful", feedback: "The world is the field. Go.", isCorrect: false, sentiment: "negative" },
    ],
  },
  fear_consequence: {
    id: "fear_consequence",
    title: "Always With You",
    text: "He has not left. He will not leave.\nWalk in His unseen presence.",
    choices: [
      { text: "Trust His Spirit goes with you", nextScene: "ending", tag: "humble", feedback: "You breathe in deeply.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Do Not Wait",
    text: "The nations are waiting for you.\nDescend. Begin the work.",
    choices: [
      { text: "Trust His Spirit goes with you", nextScene: "ending", tag: "humble", feedback: "You turn toward the valley.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — DESCENDING WITH THE MISSION
  ending: {
    id: "ending",
    title: "Sent Into the World",
    text: "You descend the mountain together.\nThe world is wide. He goes with you.",
    choices: [],
    isFinal: true,
  },
};
