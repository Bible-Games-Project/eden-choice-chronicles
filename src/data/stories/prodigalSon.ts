import { StoryScene } from "@/data/stories/creation";

// PRODIGAL SON — Luke 15:11-32
// You walk through the parable Jesus tells.

export const prodigalSonScenes: Record<string, StoryScene> = {
  // ACT I — THE PARABLE BEGINS
  start: {
    id: "start",
    title: "A Father Had Two Sons",
    text: "Jesus sits on the hillside.\n\"A father had two sons. Listen.\"",
    choices: [
      { text: "Turn away from the story", nextScene: "turn_consequence", tag: "doubtful", feedback: "Stay. This is for you.", isCorrect: false, sentiment: "negative" },
      { text: "Open your heart and listen", nextScene: "inheritance", tag: "faithful", feedback: "His voice draws you near.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turn_consequence: {
    id: "turn_consequence",
    title: "Stay Awhile",
    text: "Some stories find you anyway.\nSit back down.",
    choices: [
      { text: "Open your heart and listen", nextScene: "inheritance", tag: "faithful", feedback: "You settle in.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE INHERITANCE
  inheritance: {
    id: "inheritance",
    title: "Give Me My Share",
    text: "\"Father, give me my inheritance now.\"\nThe father divides his wealth.",
    choices: [
      { text: "Praise the son's boldness", nextScene: "praise_consequence", tag: "doubtful", feedback: "This is not bravery.", isCorrect: false, sentiment: "negative" },
      { text: "Demand he stay home", nextScene: "demand_consequence", tag: "fearful", feedback: "Love does not cage.", isCorrect: false, sentiment: "negative" },
      { text: "Grieve with the father", nextScene: "leaving", tag: "faithful", feedback: "Your chest aches with his.", isCorrect: true, sentiment: "positive" },
    ],
  },
  praise_consequence: {
    id: "praise_consequence",
    title: "Look Closer",
    text: "He treats the gift as a wage.\nFeel what the father feels.",
    choices: [
      { text: "Grieve with the father", nextScene: "leaving", tag: "faithful", feedback: "Your eyes soften.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Love Lets Go",
    text: "The father will not force him.\nLove gives freedom, even painful.",
    choices: [
      { text: "Grieve with the father", nextScene: "leaving", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — LEAVING HOME
  leaving: {
    id: "leaving",
    title: "Far From Home",
    text: "The young son packs his bag.\nHe walks the road away from home.",
    choices: [
      { text: "Cheer him onward", nextScene: "cheer_consequence", tag: "doubtful", feedback: "He walks toward sorrow.", isCorrect: false, sentiment: "negative" },
      { text: "Watch with a heavy heart", nextScene: "revelry", tag: "faithful", feedback: "You sense the cost.", isCorrect: true, sentiment: "positive" },
    ],
  },
  cheer_consequence: {
    id: "cheer_consequence",
    title: "Not Yet",
    text: "Freedom without love grows cold.\nWatch carefully.",
    choices: [
      { text: "Watch with a heavy heart", nextScene: "revelry", tag: "faithful", feedback: "Your smile fades.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — WASTING THE WEALTH
  revelry: {
    id: "revelry",
    title: "Wild Living",
    text: "In a far country he spent it all\non feasts, friends, and folly.",
    choices: [
      { text: "Envy his free nights", nextScene: "envy_consequence", tag: "doubtful", feedback: "The lights will dim soon.", isCorrect: false, sentiment: "negative" },
      { text: "See the emptiness coming", nextScene: "famine", tag: "faithful", feedback: "Your stomach tightens.", isCorrect: true, sentiment: "positive" },
      { text: "Look away from him", nextScene: "lookaway_consequence", tag: "fearful", feedback: "Stay with him.", isCorrect: false, sentiment: "negative" },
    ],
  },
  envy_consequence: {
    id: "envy_consequence",
    title: "It Will Fade",
    text: "Pleasure without love is hollow.\nWait and watch.",
    choices: [
      { text: "See the emptiness coming", nextScene: "famine", tag: "faithful", feedback: "You sober quickly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lookaway_consequence: {
    id: "lookaway_consequence",
    title: "Stay With Him",
    text: "Mercy does not turn away.\nKeep your gaze on him.",
    choices: [
      { text: "See the emptiness coming", nextScene: "famine", tag: "faithful", feedback: "Your eyes return.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — POVERTY AND HUNGER
  famine: {
    id: "famine",
    title: "Famine Falls",
    text: "His money is gone. Famine comes.\nHis friends have all vanished.",
    choices: [
      { text: "Mock his foolishness", nextScene: "mock_consequence", tag: "doubtful", feedback: "Mockery is not mercy.", isCorrect: false, sentiment: "negative" },
      { text: "Ache for the lost son", nextScene: "pigs", tag: "faithful", feedback: "Your heart hurts for him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Have Mercy",
    text: "He is breaking. Do not laugh.\nFeel his hunger with him.",
    choices: [
      { text: "Ache for the lost son", nextScene: "pigs", tag: "faithful", feedback: "Compassion finds you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — AMONG THE PIGS
  pigs: {
    id: "pigs",
    title: "Among the Pigs",
    text: "He feeds pigs to survive.\nHe longs to eat their husks.",
    choices: [
      { text: "Pity but do nothing", nextScene: "pity_consequence", tag: "fearful", feedback: "Wait. Watch his heart.", isCorrect: false, sentiment: "negative" },
      { text: "Hope he comes to himself", nextScene: "repentance", tag: "faithful", feedback: "You whisper for him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pity_consequence: {
    id: "pity_consequence",
    title: "Look Deeper",
    text: "His soul is starting to wake.\nWatch what happens inside.",
    choices: [
      { text: "Hope he comes to himself", nextScene: "repentance", tag: "faithful", feedback: "A hush falls in you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — REPENTANCE
  repentance: {
    id: "repentance",
    title: "I Will Arise",
    text: "\"I will go to my father.\nI have sinned. I am not worthy.\"",
    choices: [
      { text: "Tell him to stay hidden", nextScene: "hidden_consequence", tag: "fearful", feedback: "Shame is not the answer.", isCorrect: false, sentiment: "negative" },
      { text: "Doubt his father's mercy", nextScene: "doubt_consequence", tag: "doubtful", feedback: "You do not know that father.", isCorrect: false, sentiment: "negative" },
      { text: "Walk the road home with him", nextScene: "return", tag: "faithful", feedback: "Every step is a prayer.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hidden_consequence: {
    id: "hidden_consequence",
    title: "Come Home",
    text: "Shame keeps you in the mud.\nRepentance rises and walks.",
    choices: [
      { text: "Walk the road home with him", nextScene: "return", tag: "faithful", feedback: "You take the first step.", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust the Father",
    text: "His love is greater than your fall.\nGo, and see.",
    choices: [
      { text: "Walk the road home with him", nextScene: "return", tag: "faithful", feedback: "Hope flickers awake.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — THE FATHER RUNS
  return: {
    id: "return",
    title: "While He Was Far Off",
    text: "The father sees him from afar.\nHe runs, and falls on his neck.",
    choices: [
      { text: "Expect a stern punishment", nextScene: "stern_consequence", tag: "fearful", feedback: "Love runs to embrace.", isCorrect: false, sentiment: "negative" },
      { text: "Weep with the embrace", nextScene: "feast", tag: "faithful", feedback: "Tears fill your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stern_consequence: {
    id: "stern_consequence",
    title: "Behold the Father",
    text: "He does not wait for the speech.\nHe runs. He kisses. He weeps.",
    choices: [
      { text: "Weep with the embrace", nextScene: "feast", tag: "faithful", feedback: "Your breath catches.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IX — THE CELEBRATION
  feast: {
    id: "feast",
    title: "Bring the Best Robe",
    text: "\"My son was lost and is found!\nBring the robe. Begin the feast!\"",
    choices: [
      { text: "Demand he prove himself first", nextScene: "prove_consequence", tag: "doubtful", feedback: "Grace asks no proof.", isCorrect: false, sentiment: "negative" },
      { text: "Rejoice at the welcome home", nextScene: "brother", tag: "faithful", feedback: "Your soul lifts.", isCorrect: true, sentiment: "positive" },
    ],
  },
  prove_consequence: {
    id: "prove_consequence",
    title: "Grace, Not Wages",
    text: "He was already a son.\nLove restores before it asks.",
    choices: [
      { text: "Rejoice at the welcome home", nextScene: "brother", tag: "faithful", feedback: "You join the song.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT X — THE OLDER BROTHER
  brother: {
    id: "brother",
    title: "The Elder Brother",
    text: "The older brother stands in the field.\n\"He gets a feast? I served you!\"",
    choices: [
      { text: "Agree he was unfair", nextScene: "agree_consequence", tag: "doubtful", feedback: "Mercy is never unfair.", isCorrect: false, sentiment: "negative" },
      { text: "Hide your own resentments", nextScene: "hide_consequence", tag: "fearful", feedback: "Bring them to the father.", isCorrect: false, sentiment: "negative" },
      { text: "Listen for the father's words", nextScene: "ending", tag: "faithful", feedback: "You lean in close.", isCorrect: true, sentiment: "positive" },
    ],
  },
  agree_consequence: {
    id: "agree_consequence",
    title: "Wider Than That",
    text: "What feels unfair to pride\nis pure joy to love.",
    choices: [
      { text: "Listen for the father's words", nextScene: "ending", tag: "faithful", feedback: "Your pride softens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Speak Honestly",
    text: "The father comes out to you too.\nDo not hide your heart.",
    choices: [
      { text: "Listen for the father's words", nextScene: "ending", tag: "faithful", feedback: "You uncover your face.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — THE FATHER'S MESSAGE
  ending: {
    id: "ending",
    title: "We Had to Celebrate",
    text: "\"Son, all I have is yours.\nBut he was lost, and is found.\"",
    choices: [],
    isFinal: true,
  },
};
