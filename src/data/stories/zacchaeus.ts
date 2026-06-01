import { StoryScene } from "@/data/stories/creation";

// ZACCHAEUS — Luke 19:1-10
// You are Zacchaeus, a small tax collector in Jericho.

export const zacchaeusScenes: Record<string, StoryScene> = {
  // ACT I — JERICHO ROAD
  start: {
    id: "start",
    title: "Jesus Passes By",
    text: "Jesus walks the road to Jericho.\nThe whole town comes to see.",
    choices: [
      { text: "Stay safe in your tax booth", nextScene: "hide_consequence", tag: "fearful", feedback: "He may pass and never return.", isCorrect: false, sentiment: "negative" },
      { text: "Hurry out to find him", nextScene: "crowd", tag: "faithful", feedback: "Your heart pulls you forward.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Do Not Hide",
    text: "This moment will not come again.\nGo and see.",
    choices: [
      { text: "Hurry out to find him", nextScene: "crowd", tag: "faithful", feedback: "You step into the street.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE CROWD
  crowd: {
    id: "crowd",
    title: "Too Short to See",
    text: "The crowd is tall and tight.\nYou cannot see him at all.",
    choices: [
      { text: "Push roughly to the front", nextScene: "push_consequence", tag: "doubtful", feedback: "Force will not open the way.", isCorrect: false, sentiment: "negative" },
      { text: "Give up and walk away", nextScene: "quit_consequence", tag: "fearful", feedback: "Do not turn back so soon.", isCorrect: false, sentiment: "negative" },
      { text: "Look for another way to see", nextScene: "tree", tag: "faithful", feedback: "Hope finds new paths.", isCorrect: true, sentiment: "positive" },
    ],
  },
  push_consequence: {
    id: "push_consequence",
    title: "Not by Force",
    text: "The crowd will not part for you.\nFind another way.",
    choices: [
      { text: "Look for another way to see", nextScene: "tree", tag: "faithful", feedback: "You step back and think.", isCorrect: true, sentiment: "positive" },
    ],
  },
  quit_consequence: {
    id: "quit_consequence",
    title: "Do Not Give Up",
    text: "He is close. Just a little courage.\nKeep going.",
    choices: [
      { text: "Look for another way to see", nextScene: "tree", tag: "faithful", feedback: "You lift your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE SYCAMORE
  tree: {
    id: "tree",
    title: "The Sycamore",
    text: "An old sycamore leans over the road.\nIts branches reach low.",
    choices: [
      { text: "Worry what others might think", nextScene: "shame_consequence", tag: "fearful", feedback: "Let dignity wait for grace.", isCorrect: false, sentiment: "negative" },
      { text: "Climb up to see him", nextScene: "seen", tag: "faithful", feedback: "You climb with joy.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shame_consequence: {
    id: "shame_consequence",
    title: "Climb Anyway",
    text: "Pride keeps you from seeing him.\nLet it go.",
    choices: [
      { text: "Climb up to see him", nextScene: "seen", tag: "faithful", feedback: "You set pride aside.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — JESUS LOOKS UP
  seen: {
    id: "seen",
    title: "He Looks Up",
    text: "Jesus stops and looks straight at you.\n\"Zacchaeus, come down.\"",
    choices: [
      { text: "Hide higher in the branches", nextScene: "hide_tree_consequence", tag: "fearful", feedback: "He has already seen you.", isCorrect: false, sentiment: "negative" },
      { text: "Climb down at once with joy", nextScene: "invite", tag: "faithful", feedback: "Joy floods your chest.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_tree_consequence: {
    id: "hide_tree_consequence",
    title: "Come Down",
    text: "He is calling you by name.\nDo not be afraid.",
    choices: [
      { text: "Climb down at once with joy", nextScene: "invite", tag: "faithful", feedback: "You drop to the ground.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE INVITATION
  invite: {
    id: "invite",
    title: "I Must Stay With You",
    text: "\"Today I must stay at your house.\"\nThe words shake your heart.",
    choices: [
      { text: "Refuse, ashamed of your home", nextScene: "refuse_consequence", tag: "fearful", feedback: "He chooses your house gladly.", isCorrect: false, sentiment: "negative" },
      { text: "Welcome him with full joy", nextScene: "grumble", tag: "faithful", feedback: "Light fills your face.", isCorrect: true, sentiment: "positive" },
      { text: "Bargain for a different day", nextScene: "bargain_consequence", tag: "doubtful", feedback: "Today is the day of grace.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Welcome Him",
    text: "He is not ashamed of you.\nOpen your door.",
    choices: [
      { text: "Welcome him with full joy", nextScene: "grumble", tag: "faithful", feedback: "You smile at last.", isCorrect: true, sentiment: "positive" },
    ],
  },
  bargain_consequence: {
    id: "bargain_consequence",
    title: "Today",
    text: "Grace comes today, not tomorrow.\nReceive him now.",
    choices: [
      { text: "Welcome him with full joy", nextScene: "grumble", tag: "faithful", feedback: "Now feels right.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE CROWD GRUMBLES
  grumble: {
    id: "grumble",
    title: "A Sinner's House",
    text: "The crowd mutters in disbelief.\n\"He goes in to a sinner's house.\"",
    choices: [
      { text: "Hide from their angry stares", nextScene: "stare_consequence", tag: "fearful", feedback: "Their voices cannot define you now.", isCorrect: false, sentiment: "negative" },
      { text: "Stand and let mercy speak", nextScene: "repent", tag: "faithful", feedback: "You stand in the light.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stare_consequence: {
    id: "stare_consequence",
    title: "Stand Tall",
    text: "Their judgment is not the last word.\nGrace is.",
    choices: [
      { text: "Stand and let mercy speak", nextScene: "repent", tag: "faithful", feedback: "You lift your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — REPENTANCE
  repent: {
    id: "repent",
    title: "I Will Make It Right",
    text: "Something new rises in you.\nWealth no longer holds your heart.",
    choices: [
      { text: "Keep your gold and stay quiet", nextScene: "keep_consequence", tag: "doubtful", feedback: "A changed heart cannot stay silent.", isCorrect: false, sentiment: "negative" },
      { text: "Give half to the poor today", nextScene: "ending", tag: "faithful", feedback: "Freedom rushes through you.", isCorrect: true, sentiment: "positive" },
      { text: "Promise nothing, just feast", nextScene: "feast_consequence", tag: "fearful", feedback: "True welcome bears fruit.", isCorrect: false, sentiment: "negative" },
    ],
  },
  keep_consequence: {
    id: "keep_consequence",
    title: "Let It Go",
    text: "Closed hands cannot hold grace.\nOpen them.",
    choices: [
      { text: "Give half to the poor today", nextScene: "ending", tag: "faithful", feedback: "You let it all go.", isCorrect: true, sentiment: "positive" },
    ],
  },
  feast_consequence: {
    id: "feast_consequence",
    title: "Bear Fruit",
    text: "Real change shows in your hands.\nGive freely.",
    choices: [
      { text: "Give half to the poor today", nextScene: "ending", tag: "faithful", feedback: "You make it right.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "Salvation Has Come",
    text: "\"Today salvation has come to this house.\"\nYou are seen, you are restored.",
    choices: [],
    isFinal: true,
  },
};
