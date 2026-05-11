import { StoryScene } from "@/data/stories/creation";

// FALL OF JERUSALEM — 2 Kings 25 / Jeremiah
// You ARE King Zedekiah. Prophecy ignored becomes ruin.

export const fallJerusalemScenes: Record<string, StoryScene> = {
  // ACT I — THE WARNING IN THE THRONE
  start: {
    id: "start",
    title: "A Prophet at the Door",
    text: "Jeremiah stands before your throne.\nHe says Babylon is the Lord's rod.",
    choices: [
      { text: "Throw him into the cistern", nextScene: "imprison_consequence", tag: "proud", feedback: "You silence the voice, not the truth.", isCorrect: false, sentiment: "negative" },
      { text: "Listen to the Lord's word", nextScene: "preach", tag: "faithful", feedback: "Hard words can save a kingdom.", isCorrect: true, sentiment: "positive" },
      { text: "Dismiss him as a traitor", nextScene: "ignore_consequence", tag: "proud", feedback: "Pride closes the only open door.", isCorrect: false, sentiment: "negative" },
    ],
  },
  imprison_consequence: {
    id: "imprison_consequence",
    title: "Chains Cannot Bind Truth",
    text: "The cistern is deep, but his words remain.\nThe Lord still speaks through him.",
    choices: [
      { text: "Listen to the Lord's word", nextScene: "preach", tag: "faithful", feedback: "You call for him in secret.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Silence Is Not Safety",
    text: "The throne grows colder when prophets are sent away.\nHis warning still rings in your ears.",
    choices: [
      { text: "Listen to the Lord's word", nextScene: "preach", tag: "faithful", feedback: "You bring him back to speak.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — JEREMIAH IN THE SQUARE
  preach: {
    id: "preach",
    title: "The Streets of Jerusalem",
    text: "Jeremiah cries out in the square.\n\"Turn back, or this city will fall.\"",
    choices: [
      { text: "Soften his message for the people", nextScene: "soften_consequence", tag: "proud", feedback: "A watered prophecy saves no one.", isCorrect: false, sentiment: "negative" },
      { text: "Pull him from the square", nextScene: "retreat_consequence", tag: "fearful", feedback: "Hiding the warning hides the way out.", isCorrect: false, sentiment: "negative" },
      { text: "Let him speak the full word", nextScene: "reject", tag: "faithful", feedback: "You let the truth be heard.", isCorrect: true, sentiment: "positive" },
    ],
  },
  soften_consequence: {
    id: "soften_consequence",
    title: "Half a Word",
    text: "A muffled prophecy is no prophecy.\nThe Lord asked for the whole truth.",
    choices: [
      { text: "Let him speak the full word", nextScene: "reject", tag: "faithful", feedback: "You step back and let him preach.", isCorrect: true, sentiment: "positive" },
    ],
  },
  retreat_consequence: {
    id: "retreat_consequence",
    title: "The Square Is Quiet",
    text: "Without his voice, the city hears nothing.\nOnly its own pride.",
    choices: [
      { text: "Let him speak the full word", nextScene: "reject", tag: "faithful", feedback: "You return him to the steps.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — REJECTION
  reject: {
    id: "reject",
    title: "Folded Arms, Closed Hearts",
    text: "The citizens mock the prophet.\n\"Peace, peace,\" they cry.",
    choices: [
      { text: "Curse them with the prophet", nextScene: "curse_consequence", tag: "proud", feedback: "The Lord did not send you to curse.", isCorrect: false, sentiment: "negative" },
      { text: "Stand with Jeremiah's warning", nextScene: "siege", tag: "faithful", feedback: "You refuse to join the laughter.", isCorrect: true, sentiment: "positive" },
      { text: "Join the people's mockery", nextScene: "giveup_consequence", tag: "proud", feedback: "Mocking the prophet mocks the Lord.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Not Yours to Judge",
    text: "Anger is not the answer the Lord asks of you.\nOnly faithful witness.",
    choices: [
      { text: "Stand with Jeremiah's warning", nextScene: "siege", tag: "faithful", feedback: "You quiet your tongue.", isCorrect: true, sentiment: "positive" },
    ],
  },
  giveup_consequence: {
    id: "giveup_consequence",
    title: "Turn from the Crowd",
    text: "Their laughter will not save the walls.\nOnly the word will.",
    choices: [
      { text: "Stand with Jeremiah's warning", nextScene: "siege", tag: "faithful", feedback: "You leave the mocking circle.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE SIEGE
  siege: {
    id: "siege",
    title: "Babylon at the Gates",
    text: "Nebuchadnezzar's army surrounds the walls.\nThe prophet says: do not resist.",
    choices: [
      { text: "Trust the idols on the high places", nextScene: "idols_consequence", tag: "proud", feedback: "Wood and stone cannot lift a siege.", isCorrect: false, sentiment: "negative" },
      { text: "Send for Egypt's chariots", nextScene: "egypt_consequence", tag: "fearful", feedback: "Egypt is a broken reed.", isCorrect: false, sentiment: "negative" },
      { text: "Submit to the Lord's word", nextScene: "famine", tag: "faithful", feedback: "Submission to God outweighs strength.", isCorrect: true, sentiment: "positive" },
    ],
  },
  idols_consequence: {
    id: "idols_consequence",
    title: "Silent Stones",
    text: "The idols cannot answer the rams at the gate.\nThe Lord alone speaks.",
    choices: [
      { text: "Submit to the Lord's word", nextScene: "famine", tag: "faithful", feedback: "You turn from the high places.", isCorrect: true, sentiment: "positive" },
    ],
  },
  egypt_consequence: {
    id: "egypt_consequence",
    title: "A Broken Reed",
    text: "Egypt's army falters and turns home.\nOnly the Lord's word remains.",
    choices: [
      { text: "Submit to the Lord's word", nextScene: "famine", tag: "faithful", feedback: "You set down the false hope.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — FAMINE
  famine: {
    id: "famine",
    title: "Bread Is Gone",
    text: "Inside the walls, the children grow thin.\nJeremiah weeps in the empty streets.",
    choices: [
      { text: "Blame the prophet for the hunger", nextScene: "blame_consequence", tag: "proud", feedback: "Blame will not feed your people.", isCorrect: false, sentiment: "negative" },
      { text: "Flee the city in secret", nextScene: "flee_consequence", tag: "fearful", feedback: "You cannot outrun the Lord's word.", isCorrect: false, sentiment: "negative" },
      { text: "Repent before the Lord", nextScene: "fall", tag: "faithful", feedback: "Late repentance is still repentance.", isCorrect: true, sentiment: "positive" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "He Only Spoke",
    text: "The prophet did not bring the army.\nYour ears refused his words.",
    choices: [
      { text: "Repent before the Lord", nextScene: "fall", tag: "faithful", feedback: "You bow your head at last.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "No Hidden Path",
    text: "Every road is watched, every gate is closed.\nOnly the Lord can be sought now.",
    choices: [
      { text: "Repent before the Lord", nextScene: "fall", tag: "faithful", feedback: "You turn from the back gate.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE FALL
  fall: {
    id: "fall",
    title: "The Walls Are Breached",
    text: "Fire climbs the temple stones.\nSmoke covers the holy hill.",
    choices: [
      { text: "Hide inside the burning temple", nextScene: "hide_consequence", tag: "fearful", feedback: "The walls cannot shelter you now.", isCorrect: false, sentiment: "negative" },
      { text: "Try to escape the broken wall", nextScene: "escape_consequence", tag: "fearful", feedback: "The plain of Jericho will catch you.", isCorrect: false, sentiment: "negative" },
      { text: "Accept the Lord's judgment", nextScene: "exile", tag: "faithful", feedback: "You bow beneath the rod He warned of.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Stones Will Fall",
    text: "The temple will not be a fortress.\nIts hour has come.",
    choices: [
      { text: "Accept the Lord's judgment", nextScene: "exile", tag: "faithful", feedback: "You step into the open.", isCorrect: true, sentiment: "positive" },
    ],
  },
  escape_consequence: {
    id: "escape_consequence",
    title: "Caught at Jericho",
    text: "The Babylonians ride faster than your fear.\nThere is nowhere left to run.",
    choices: [
      { text: "Accept the Lord's judgment", nextScene: "exile", tag: "faithful", feedback: "You let the chariots take you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — EXILE
  exile: {
    id: "exile",
    title: "The Long Road East",
    text: "Jerusalem falls behind in smoke.\nThe people walk the road to Babylon.",
    choices: [],
    isFinal: true,
  },
};
