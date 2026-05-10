import { StoryScene } from "@/data/stories/creation";

// FALL OF JERICHO — Joshua 6
// You ARE Joshua. Obedience, faith, divine intervention over force.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const jerichoScenes: Record<string, StoryScene> = {
  // ============ ACT I — APPROACH ============
  start: {
    id: "start",
    title: "The Walls of Jericho",
    text: "The city stands shut and silent.\nIts walls swallow the horizon.",
    choices: [
      { text: "Charge the gates with full force", nextScene: "charge_consequence", tag: "willful", feedback: "These walls will not yield to swords.", isCorrect: false, sentiment: "negative" },
      { text: "Lay siege and starve them out", nextScene: "siege_consequence", tag: "worldly", feedback: "The Lord has another way.", isCorrect: false, sentiment: "negative" },
      { text: "Wait for the Lord's instruction", nextScene: "divine_word", tag: "obedient", feedback: "You bow before His silence.", isCorrect: true, sentiment: "positive" },
    ],
  },
  charge_consequence: {
    id: "charge_consequence",
    title: "Not by Might",
    text: "These stones laugh at sword and spear.\nSeek His word first.",
    choices: [
      { text: "Wait for the Lord's instruction", nextScene: "divine_word", tag: "obedient", feedback: "You lower your blade.", isCorrect: true, sentiment: "positive" },
    ],
  },
  siege_consequence: {
    id: "siege_consequence",
    title: "His Plan, Not Yours",
    text: "Hunger is no weapon of faith.\nKneel and ask Him.",
    choices: [
      { text: "Wait for the Lord's instruction", nextScene: "divine_word", tag: "obedient", feedback: "You step away from the war camp.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE COMMAND ============
  divine_word: {
    id: "divine_word",
    title: "\"I Have Given It Into Your Hand\"",
    text: "March around the city six days.\nOn the seventh, march seven times.",
    choices: [
      { text: "Argue this is foolish strategy", nextScene: "argue_consequence", tag: "doubtful", feedback: "His ways are not your ways.", isCorrect: false, sentiment: "negative" },
      { text: "Receive the strange command", nextScene: "instruct_priests", tag: "faithful", feedback: "You bow your face to the earth.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Faith, Not Reason",
    text: "His command may seem strange.\nObedience is your part.",
    choices: [
      { text: "Receive the strange command", nextScene: "instruct_priests", tag: "faithful", feedback: "Your heart settles in trust.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — INSTRUCTING THE PRIESTS ============
  instruct_priests: {
    id: "instruct_priests",
    title: "Take Up the Trumpets",
    text: "Seven priests, seven horns of ram.\nThe ark goes before the people.",
    choices: [
      { text: "Hide the ark behind the warriors", nextScene: "hide_consequence", tag: "fearful", feedback: "His presence must lead, not follow.", isCorrect: false, sentiment: "negative" },
      { text: "Send priests in the rear for safety", nextScene: "rear_consequence", tag: "fearful", feedback: "Faith walks in front, not behind.", isCorrect: false, sentiment: "negative" },
      { text: "Place the priests at the front", nextScene: "first_march", tag: "faithful", feedback: "The horns rise toward the sky.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Let Him Lead",
    text: "His presence is your only banner.\nLift it high before all eyes.",
    choices: [
      { text: "Place the priests at the front", nextScene: "first_march", tag: "faithful", feedback: "The procession forms behind the ark.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rear_consequence: {
    id: "rear_consequence",
    title: "Faith Walks First",
    text: "If He goes before, who can stand?\nLet the trumpets lead.",
    choices: [
      { text: "Place the priests at the front", nextScene: "first_march", tag: "faithful", feedback: "The horns lift in trembling hands.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE SIX DAYS ============
  first_march: {
    id: "first_march",
    title: "The First Circle",
    text: "Only trumpets break the silence.\nJericho mocks from the walls.",
    choices: [
      { text: "Shout back at their mockery", nextScene: "shout_consequence", tag: "willful", feedback: "Not yet. Hold your voice.", isCorrect: false, sentiment: "negative" },
      { text: "Walk in disciplined silence", nextScene: "sixth_day", tag: "obedient", feedback: "Dust rises beneath quiet feet.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Wait for His Signal",
    text: "Your voice must wait six more days.\nLet the horns alone speak.",
    choices: [
      { text: "Walk in disciplined silence", nextScene: "sixth_day", tag: "obedient", feedback: "You close your lips and march.", isCorrect: true, sentiment: "positive" },
    ],
  },

  sixth_day: {
    id: "sixth_day",
    title: "Six Days Have Passed",
    text: "The people grow weary, doubting.\nTomorrow is the seventh.",
    choices: [
      { text: "Quit, the plan has failed", nextScene: "quit_consequence", tag: "doubtful", feedback: "His promise stands. Hold the line.", isCorrect: false, sentiment: "negative" },
      { text: "Encourage them to trust one more day", nextScene: "seventh_day", tag: "faithful", feedback: "You speak peace through the camp.", isCorrect: true, sentiment: "positive" },
    ],
  },
  quit_consequence: {
    id: "quit_consequence",
    title: "His Word Does Not Fail",
    text: "Six days obeyed are not wasted.\nFinish what He began.",
    choices: [
      { text: "Encourage them to trust one more day", nextScene: "seventh_day", tag: "faithful", feedback: "Hope returns to weary faces.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE SEVENTH DAY ============
  seventh_day: {
    id: "seventh_day",
    title: "Seven Times Around",
    text: "The horns blow. The dust rises.\nThe seventh circle is complete.",
    choices: [
      { text: "Wait still longer in silence", nextScene: "wait_consequence", tag: "fearful", feedback: "The moment He named has come.", isCorrect: false, sentiment: "negative" },
      { text: "Command Israel to shout!", nextScene: "walls_fall", tag: "obedient", feedback: "Your voice splits the silence open.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Now Is the Hour",
    text: "He has set this very moment.\nLift your voice without fear.",
    choices: [
      { text: "Command Israel to shout!", nextScene: "walls_fall", tag: "obedient", feedback: "The cry rises from every throat.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — COLLAPSE ============
  walls_fall: {
    id: "walls_fall",
    title: "The Walls Tremble",
    text: "Stones crack. Towers lean.\nJericho falls into its own dust.",
    choices: [
      { text: "Boast in your military genius", nextScene: "boast_consequence", tag: "proud", feedback: "Not your hand. His.", isCorrect: false, sentiment: "negative" },
      { text: "Give all glory to the Lord", nextScene: "ending_obedient", tag: "humble", feedback: "You kneel where the walls once stood.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "His Victory, Not Yours",
    text: "No sword struck these walls.\nLift your eyes, not your name.",
    choices: [
      { text: "Give all glory to the Lord", nextScene: "ending_obedient", tag: "humble", feedback: "You bow your head in the dust.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ENDING ============
  ending_obedient: {
    id: "ending_obedient",
    title: "Into the City",
    text: "The Lord has given Jericho.\nFaith walked where strength could not.",
    choices: [],
    isFinal: true,
  },
};
