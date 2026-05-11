import { StoryScene } from "@/data/stories/creation";

// DAVID AND BATHSHEBA — 2 Samuel 11–12
// You ARE David. Temptation, responsibility, consequence, repentance.

export const davidBathshebaScenes: Record<string, StoryScene> = {
  // ACT I — PALACE IN WARTIME
  start: {
    id: "start",
    title: "When Kings Go to War",
    text: "Spring has come. Joab leads your army.\nYou linger alone in the palace.",
    choices: [
      { text: "Stay idle on the rooftop", nextScene: "rooftop_consequence", tag: "idle", feedback: "Idleness opens the door to sin.", isCorrect: false, sentiment: "negative" },
      { text: "Ride out and lead your men", nextScene: "seeing", tag: "faithful", feedback: "A king belongs with his people.", isCorrect: true, sentiment: "positive" },
      { text: "Demand new wine and music", nextScene: "wine_consequence", tag: "proud", feedback: "Comfort dulls the heart.", isCorrect: false, sentiment: "negative" },
    ],
  },
  rooftop_consequence: {
    id: "rooftop_consequence",
    title: "Restless on the Roof",
    text: "Idle eyes will find a wound.\nYou should have gone to war.",
    choices: [
      { text: "Continue to the rooftop view", nextScene: "seeing", tag: "idle", feedback: "Yet the evening unfolds...", isCorrect: true, sentiment: "positive" },
    ],
  },
  wine_consequence: {
    id: "wine_consequence",
    title: "Set the Cup Down",
    text: "A king is not led by appetite.\nReturn to your duty.",
    choices: [
      { text: "Walk out onto the rooftop", nextScene: "seeing", tag: "faithful", feedback: "You step into the cool air.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE LOOK
  seeing: {
    id: "seeing",
    title: "A Woman Bathing",
    text: "Below, a woman bathes in the courtyard.\nYour eyes will not turn away.",
    choices: [
      { text: "Send for her at once", nextScene: "summon_consequence", tag: "lust", feedback: "Power must not take what is not yours.", isCorrect: false, sentiment: "negative" },
      { text: "Look away and pray", nextScene: "uriah", tag: "faithful", feedback: "Turn your eyes from temptation.", isCorrect: true, sentiment: "positive" },
      { text: "Ask who her husband is", nextScene: "ask_consequence", tag: "lust", feedback: "Curiosity here is the first step to ruin.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ask_consequence: {
    id: "ask_consequence",
    title: "She Is Another's Wife",
    text: "She is Bathsheba, wife of Uriah.\nThe knowledge will not save you now.",
    choices: [
      { text: "Send for her anyway", nextScene: "summon_consequence", tag: "lust", feedback: "You step further into shadow.", isCorrect: false, sentiment: "negative" },
      { text: "Repent and walk away", nextScene: "uriah", tag: "faithful", feedback: "You close your eyes and breathe.", isCorrect: true, sentiment: "positive" },
    ],
  },
  summon_consequence: {
    id: "summon_consequence",
    title: "The Door Closes",
    text: "She comes. The deed is done.\nWord arrives: she is with child.",
    choices: [
      { text: "Continue", nextScene: "uriah", tag: "guilt", feedback: "The weight settles on your shoulders.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — URIAH IN THE PALACE
  uriah: {
    id: "uriah",
    title: "Uriah Stands Before You",
    text: "Uriah refuses comfort while his men sleep in fields.\n\"Shall I lie with my wife?\"",
    choices: [
      { text: "Order Uriah to the front to die", nextScene: "front_consequence", tag: "wicked", feedback: "Murder will not hide your sin.", isCorrect: false, sentiment: "negative" },
      { text: "Get him drunk to send him home", nextScene: "drunk_consequence", tag: "deceit", feedback: "Deceit breeds deeper deceit.", isCorrect: false, sentiment: "negative" },
      { text: "Confess your sin to him", nextScene: "nathan", tag: "faithful", feedback: "Truth is the only door out.", isCorrect: true, sentiment: "positive" },
    ],
  },
  drunk_consequence: {
    id: "drunk_consequence",
    title: "Still He Will Not Go",
    text: "Even drunk, Uriah sleeps at your gate.\nHis loyalty shames you.",
    choices: [
      { text: "Send him to die in battle", nextScene: "front_consequence", tag: "wicked", feedback: "You sink deeper still.", isCorrect: false, sentiment: "negative" },
      { text: "Confess everything to him", nextScene: "nathan", tag: "faithful", feedback: "Light is harder than the lie.", isCorrect: true, sentiment: "positive" },
    ],
  },
  front_consequence: {
    id: "front_consequence",
    title: "Blood on Your Hands",
    text: "Uriah falls by the wall.\nYou took his wife and his life.",
    choices: [
      { text: "Continue", nextScene: "nathan", tag: "guilt", feedback: "The Lord sees what you have done.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — NATHAN'S PARABLE
  nathan: {
    id: "nathan",
    title: "The Prophet Comes",
    text: "Nathan tells of a rich man who stole a poor man's lamb.\n\"You are the man.\"",
    choices: [
      { text: "Threaten the prophet's life", nextScene: "threaten_consequence", tag: "proud", feedback: "Do not silence the voice of God.", isCorrect: false, sentiment: "negative" },
      { text: "Deny the accusation", nextScene: "deny_consequence", tag: "proud", feedback: "Hiding cannot heal you.", isCorrect: false, sentiment: "negative" },
      { text: "Say: I have sinned against the Lord", nextScene: "repentance", tag: "faithful", feedback: "Confession opens the way.", isCorrect: true, sentiment: "positive" },
    ],
  },
  threaten_consequence: {
    id: "threaten_consequence",
    title: "Hear the Word",
    text: "Nathan does not flinch.\nGod's voice will not be silenced.",
    choices: [
      { text: "Bow and confess your sin", nextScene: "repentance", tag: "faithful", feedback: "Your knees give way.", isCorrect: true, sentiment: "positive" },
    ],
  },
  deny_consequence: {
    id: "deny_consequence",
    title: "The Truth Cannot Hide",
    text: "Your silence does not fool the Lord.\nA broken spirit He will not despise.",
    choices: [
      { text: "Say: I have sinned against the Lord", nextScene: "repentance", tag: "faithful", feedback: "The words break from your chest.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — REPENTANCE
  repentance: {
    id: "repentance",
    title: "A Broken Heart",
    text: "You fall in sackcloth, weeping.\n\"Create in me a clean heart, O God.\"",
    choices: [],
    isFinal: true,
  },
};
