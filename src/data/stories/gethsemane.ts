import { StoryScene } from "@/data/stories/creation";

// GETHSEMANE — Matthew 26, Mark 14, Luke 22
// You ARE Jesus. Focus: prayer, obedience, surrender.
// Stops BEFORE Judas' arrival. Dialogue ≤100 chars, choices ≤40 chars.

export const gethsemaneScenes: Record<string, StoryScene> = {
  // ============ ACT I — ENTRY ============
  start: {
    id: "start",
    title: "The Garden Gate",
    text: "Olive trees breathe in the moonlight.\nThe hour you knew was coming has come.",
    choices: [
      { text: "Turn back from the garden", nextScene: "back_consequence", tag: "fearful", feedback: "The Father waits inside.", isCorrect: false, sentiment: "negative" },
      { text: "Enter quietly with the eleven", nextScene: "inner_circle", tag: "faithful", feedback: "You step beneath the boughs.", isCorrect: true, sentiment: "positive" },
      { text: "Send them all back to the city", nextScene: "send_consequence", tag: "evasive", feedback: "Take at least the three with you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  back_consequence: {
    id: "back_consequence",
    title: "Not Away",
    text: "This cup will not pass by retreat.\nWalk into the garden, not away.",
    choices: [
      { text: "Enter quietly with the eleven", nextScene: "inner_circle", tag: "faithful", feedback: "You set your face toward prayer.", isCorrect: true, sentiment: "positive" },
    ],
  },
  send_consequence: {
    id: "send_consequence",
    title: "Keep the Three",
    text: "Peter, James, and John must witness.\nThis night will shape their hearts.",
    choices: [
      { text: "Enter quietly with the eleven", nextScene: "inner_circle", tag: "faithful", feedback: "You beckon them forward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — INNER CIRCLE ============
  inner_circle: {
    id: "inner_circle",
    title: "Stay and Watch",
    text: "Peter, James, John look up at you.\n\"My soul is sorrowful unto death.\"",
    choices: [
      { text: "Hide your sorrow from them", nextScene: "hide_consequence", tag: "evasive", feedback: "Let them see the weight you bear.", isCorrect: false, sentiment: "negative" },
      { text: "\"Stay here. Watch and pray.\"", nextScene: "stone_alone", tag: "faithful", feedback: "They nod, eyes wide and afraid.", isCorrect: true, sentiment: "positive" },
      { text: "Demand they fight off any threat", nextScene: "demand_consequence", tag: "rash", feedback: "Prayer, not swords, tonight.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Let Them See",
    text: "Your honesty becomes their training.\nLove does not hide its tears.",
    choices: [
      { text: "\"Stay here. Watch and pray.\"", nextScene: "stone_alone", tag: "faithful", feedback: "They sit beneath an olive tree.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Not by Force",
    text: "The Father's will is not won by swords.\nThis hour calls for prayer.",
    choices: [
      { text: "\"Stay here. Watch and pray.\"", nextScene: "stone_alone", tag: "faithful", feedback: "You lower your voice gently.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — FIRST PRAYER ============
  stone_alone: {
    id: "stone_alone",
    title: "A Stone's Throw",
    text: "A pale moon-lit rock waits ahead.\nYou step away from your friends.",
    choices: [
      { text: "Stand and shout at the sky", nextScene: "shout_consequence", tag: "rash", feedback: "Kneel. Speak as a son.", isCorrect: false, sentiment: "negative" },
      { text: "Fall to your knees in prayer", nextScene: "anguish", tag: "humble", feedback: "Your knees press the cold earth.", isCorrect: true, sentiment: "positive" },
      { text: "Demand the Father change His plan", nextScene: "demand_father_consequence", tag: "prideful", feedback: "Ask, do not demand.", isCorrect: false, sentiment: "negative" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "As a Son",
    text: "Heaven hears the quiet word too.\nKneel as the beloved Son.",
    choices: [
      { text: "Fall to your knees in prayer", nextScene: "anguish", tag: "humble", feedback: "You bow low to the ground.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_father_consequence: {
    id: "demand_father_consequence",
    title: "Ask, Don't Demand",
    text: "Trust does not force the Father's hand.\nIt opens its own.",
    choices: [
      { text: "Fall to your knees in prayer", nextScene: "anguish", tag: "humble", feedback: "You sink down in surrender.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — ANGUISH ============
  anguish: {
    id: "anguish",
    title: "The Cup Before You",
    text: "Your breath shakes. A tear falls.\nThe cup of suffering is so heavy.",
    choices: [
      { text: "Refuse the cup outright", nextScene: "refuse_consequence", tag: "fearful", feedback: "Speak truth, then surrender.", isCorrect: false, sentiment: "negative" },
      { text: "Pretend the fear is not real", nextScene: "pretend_consequence", tag: "evasive", feedback: "Honesty opens the way to peace.", isCorrect: false, sentiment: "negative" },
      { text: "\"Father, if possible, take this cup\"", nextScene: "submission", tag: "honest", feedback: "Your words rise into the night.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Speak, Then Yield",
    text: "Name the fear. Then offer it.\nNot refusal, but trust.",
    choices: [
      { text: "\"Father, if possible, take this cup\"", nextScene: "submission", tag: "honest", feedback: "Your voice breaks softly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pretend_consequence: {
    id: "pretend_consequence",
    title: "Be Honest",
    text: "The Father knows your every fear.\nBring it openly to Him.",
    choices: [
      { text: "\"Father, if possible, take this cup\"", nextScene: "submission", tag: "honest", feedback: "The words come from deep within.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — SUBMISSION ============
  submission: {
    id: "submission",
    title: "Your Will Be Done",
    text: "Silence answers from heaven.\nWhat shall you say next?",
    choices: [
      { text: "Curse the silence above", nextScene: "curse_consequence", tag: "rash", feedback: "Even silence is the Father near.", isCorrect: false, sentiment: "negative" },
      { text: "\"Yet not my will, but yours\"", nextScene: "find_sleeping_1", tag: "obedient", feedback: "A deep peace settles in your bones.", isCorrect: true, sentiment: "positive" },
      { text: "Stand and walk away from prayer", nextScene: "walk_away_consequence", tag: "fearful", feedback: "Stay until the surrender is full.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "The Father Is Near",
    text: "He does not abandon the obedient.\nSpeak the harder, truer word.",
    choices: [
      { text: "\"Yet not my will, but yours\"", nextScene: "find_sleeping_1", tag: "obedient", feedback: "Peace returns like a quiet tide.", isCorrect: true, sentiment: "positive" },
    ],
  },
  walk_away_consequence: {
    id: "walk_away_consequence",
    title: "Stay in Surrender",
    text: "The hour requires more than presence.\nIt asks for yes.",
    choices: [
      { text: "\"Yet not my will, but yours\"", nextScene: "find_sleeping_1", tag: "obedient", feedback: "The words become a covenant.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — SLEEPING DISCIPLES ============
  find_sleeping_1: {
    id: "find_sleeping_1",
    title: "Could You Not Watch?",
    text: "You return. Peter, James, John sleep.\nTheir lamps lie low beside them.",
    choices: [
      { text: "Shake them awake in anger", nextScene: "anger_consequence", tag: "rash", feedback: "Compassion, not anger, here.", isCorrect: false, sentiment: "negative" },
      { text: "Wake them and call them to pray", nextScene: "pray_again", tag: "patient", feedback: "\"The spirit is willing, the flesh weak.\"", isCorrect: true, sentiment: "positive" },
      { text: "Leave them and never come back", nextScene: "leave_consequence", tag: "fearful", feedback: "You must return to the Father.", isCorrect: false, sentiment: "negative" },
    ],
  },
  anger_consequence: {
    id: "anger_consequence",
    title: "Compassion First",
    text: "Their weakness is not your enemy.\nMeet it with gentleness.",
    choices: [
      { text: "Wake them and call them to pray", nextScene: "pray_again", tag: "patient", feedback: "Peter opens heavy eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  leave_consequence: {
    id: "leave_consequence",
    title: "Return to the Father",
    text: "Surrender is not finished yet.\nGo back, and pray again.",
    choices: [
      { text: "Wake them and call them to pray", nextScene: "pray_again", tag: "patient", feedback: "You speak softly to each one.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VII — SECOND PRAYER ============
  pray_again: {
    id: "pray_again",
    title: "A Second Time",
    text: "You walk back to the stone alone.\nWhat will you offer the Father now?",
    choices: [
      { text: "Beg only for an easier path", nextScene: "easier_consequence", tag: "fearful", feedback: "Trust, not bargain.", isCorrect: false, sentiment: "negative" },
      { text: "\"Your will be done, Father\"", nextScene: "find_sleeping_2", tag: "obedient", feedback: "The same yes, deeper this time.", isCorrect: true, sentiment: "positive" },
      { text: "Stand silent and refuse to pray", nextScene: "silent_consequence", tag: "evasive", feedback: "Prayer is the strength of this hour.", isCorrect: false, sentiment: "negative" },
    ],
  },
  easier_consequence: {
    id: "easier_consequence",
    title: "Trust the Plan",
    text: "The Father's path leads through, not around.\nWalk the road of yes.",
    choices: [
      { text: "\"Your will be done, Father\"", nextScene: "find_sleeping_2", tag: "obedient", feedback: "Strength rises from the surrender.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Pray Through It",
    text: "The hour gains power through prayer.\nDo not face it mute.",
    choices: [
      { text: "\"Your will be done, Father\"", nextScene: "find_sleeping_2", tag: "obedient", feedback: "Heaven steadies your heart.", isCorrect: true, sentiment: "positive" },
    ],
  },

  find_sleeping_2: {
    id: "find_sleeping_2",
    title: "Asleep Again",
    text: "They could not keep their eyes open.\nTheir heads rest against each other.",
    choices: [
      { text: "Mock them for their weakness", nextScene: "mock_consequence", tag: "prideful", feedback: "Their hearts are with you still.", isCorrect: false, sentiment: "negative" },
      { text: "Let them rest, return to pray", nextScene: "final_resolve", tag: "loving", feedback: "You walk back without a word.", isCorrect: true, sentiment: "positive" },
      { text: "Wake them and flee the garden", nextScene: "flee_consequence", tag: "fearful", feedback: "The hour is not for fleeing.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "They Are With You",
    text: "Their bodies fail; their love does not.\nLet mercy cover their sleep.",
    choices: [
      { text: "Let them rest, return to pray", nextScene: "final_resolve", tag: "loving", feedback: "You touch a shoulder gently.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Stand Your Ground",
    text: "Obedience does not run tonight.\nIt rises and walks forward.",
    choices: [
      { text: "Let them rest, return to pray", nextScene: "final_resolve", tag: "loving", feedback: "You move quietly back to the rock.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VIII — RESOLVE ============
  final_resolve: {
    id: "final_resolve",
    title: "The Hour Has Come",
    text: "Dawn light bleeds across the hills.\nFootsteps echo on the far path.",
    choices: [
      { text: "Hide among the olive trees", nextScene: "hide_trees_consequence", tag: "fearful", feedback: "Rise. The hour will not be hidden from.", isCorrect: false, sentiment: "negative" },
      { text: "Rise and wake the disciples", nextScene: "ending", tag: "obedient", feedback: "\"Rise. Let us go.\"", isCorrect: true, sentiment: "positive" },
      { text: "Pray a fourth time in panic", nextScene: "fourth_consequence", tag: "fearful", feedback: "The surrender is complete now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_trees_consequence: {
    id: "hide_trees_consequence",
    title: "Not Hidden",
    text: "The Father's will is to be met.\nWalk into the morning openly.",
    choices: [
      { text: "Rise and wake the disciples", nextScene: "ending", tag: "obedient", feedback: "You stand to your full height.", isCorrect: true, sentiment: "positive" },
    ],
  },
  fourth_consequence: {
    id: "fourth_consequence",
    title: "It Is Finished Here",
    text: "The cup is taken in your hands.\nGo now to drink it for love.",
    choices: [
      { text: "Rise and wake the disciples", nextScene: "ending", tag: "obedient", feedback: "Your peace is unshaken.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Rise, Let Us Go",
    text: "Your three friends stand beside you.\nDawn breaks. The path leads onward.",
    choices: [],
    isFinal: true,
  },
};
