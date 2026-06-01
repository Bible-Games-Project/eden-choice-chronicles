import { StoryScene } from "@/data/stories/creation";

// LAST SUPPER — Matthew 26, Mark 14, Luke 22, John 13
// You ARE Jesus gathering His disciples for the Passover meal.
// Stops BEFORE Gethsemane. Dialogue ≤100 chars, choices ≤40 chars.

export const lastSupperScenes: Record<string, StoryScene> = {
  // ============ ACT I — GATHERING ============
  start: {
    id: "start",
    title: "The Upper Room",
    text: "The hour has come. Twelve faces wait by lamplight.\nYou step inside the prepared room.",
    choices: [
      { text: "Send them home for safety", nextScene: "send_consequence", tag: "fearful", feedback: "This hour was always meant.", isCorrect: false, sentiment: "negative" },
      { text: "Welcome them to the table", nextScene: "gathered", tag: "loving", feedback: "Their eyes meet yours.", isCorrect: true, sentiment: "positive" },
      { text: "Speak of glory and crowns", nextScene: "glory_consequence", tag: "prideful", feedback: "Not glory. Service.", isCorrect: false, sentiment: "negative" },
    ],
  },
  send_consequence: {
    id: "send_consequence",
    title: "Stay With Me",
    text: "This night is for them too.\nThey must see what love does.",
    choices: [
      { text: "Welcome them to the table", nextScene: "gathered", tag: "loving", feedback: "You open your arms wide.", isCorrect: true, sentiment: "positive" },
    ],
  },
  glory_consequence: {
    id: "glory_consequence",
    title: "Not Tonight",
    text: "Tonight is bread, and cup, and love.\nGlory waits beyond the cross.",
    choices: [
      { text: "Welcome them to the table", nextScene: "gathered", tag: "loving", feedback: "You sit down among them.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — SERVICE ============
  gathered: {
    id: "gathered",
    title: "A Basin of Water",
    text: "Dust covers their feet. No servant has come.\nA folded towel waits by the door.",
    choices: [
      { text: "Order Peter to wash the feet", nextScene: "order_consequence", tag: "prideful", feedback: "Not order. Show them.", isCorrect: false, sentiment: "negative" },
      { text: "Rise and tie the towel on", nextScene: "washing", tag: "humble", feedback: "You kneel beside them.", isCorrect: true, sentiment: "positive" },
      { text: "Leave the dust unclean", nextScene: "leave_consequence", tag: "evasive", feedback: "Love does not ignore.", isCorrect: false, sentiment: "negative" },
    ],
  },
  order_consequence: {
    id: "order_consequence",
    title: "Show, Not Tell",
    text: "If you wish them to serve, serve first.\nThe master kneels tonight.",
    choices: [
      { text: "Rise and tie the towel on", nextScene: "washing", tag: "humble", feedback: "You take the basin in hand.", isCorrect: true, sentiment: "positive" },
    ],
  },
  leave_consequence: {
    id: "leave_consequence",
    title: "Love Stoops Low",
    text: "You came to wash more than feet.\nBegin with what is small.",
    choices: [
      { text: "Rise and tie the towel on", nextScene: "washing", tag: "humble", feedback: "You bend down to begin.", isCorrect: true, sentiment: "positive" },
    ],
  },

  washing: {
    id: "washing",
    title: "Peter Resists",
    text: "\"Lord, you shall never wash my feet!\"\nHis voice cracks with shame.",
    choices: [
      { text: "Agree and stand back up", nextScene: "agree_consequence", tag: "evasive", feedback: "Then he has no part in you.", isCorrect: false, sentiment: "negative" },
      { text: "Rebuke him for his pride", nextScene: "rebuke_consequence", tag: "prideful", feedback: "Teach him gently, not harshly.", isCorrect: false, sentiment: "negative" },
      { text: "Tell him he must be washed", nextScene: "bread_table", tag: "patient", feedback: "Peter offers his head and hands.", isCorrect: true, sentiment: "positive" },
    ],
  },
  agree_consequence: {
    id: "agree_consequence",
    title: "He Must Be Washed",
    text: "Unless he lets you serve him,\nhe cannot walk the road ahead.",
    choices: [
      { text: "Tell him he must be washed", nextScene: "bread_table", tag: "patient", feedback: "He yields with tears.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rebuke_consequence: {
    id: "rebuke_consequence",
    title: "Gently",
    text: "His pride hides a frightened heart.\nMeet him with truth, not fire.",
    choices: [
      { text: "Tell him he must be washed", nextScene: "bread_table", tag: "patient", feedback: "His shoulders soften.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — BREAD ============
  bread_table: {
    id: "bread_table",
    title: "The Loaf in Your Hands",
    text: "The unleavened bread rests on the cloth.\nThe room falls quiet around it.",
    choices: [
      { text: "Hide the loaf and say nothing", nextScene: "hide_consequence", tag: "fearful", feedback: "They must see and remember.", isCorrect: false, sentiment: "negative" },
      { text: "Give thanks, break, and share", nextScene: "cup_lifted", tag: "faithful", feedback: "\"This is my body, given for you.\"", isCorrect: true, sentiment: "positive" },
      { text: "Eat it alone in silence", nextScene: "alone_consequence", tag: "evasive", feedback: "This bread is for all of them.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Let Them See",
    text: "Memory is built from this moment.\nGive what cannot be hidden.",
    choices: [
      { text: "Give thanks, break, and share", nextScene: "cup_lifted", tag: "faithful", feedback: "You lift the loaf high.", isCorrect: true, sentiment: "positive" },
    ],
  },
  alone_consequence: {
    id: "alone_consequence",
    title: "For All of Them",
    text: "The bread is broken to be shared.\nNone eat it alone tonight.",
    choices: [
      { text: "Give thanks, break, and share", nextScene: "cup_lifted", tag: "faithful", feedback: "Twelve hands receive a piece.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — CUP ============
  cup_lifted: {
    id: "cup_lifted",
    title: "The Cup of Wine",
    text: "Dark wine glows in the clay cup.\nYou lift it slowly above the table.",
    choices: [
      { text: "Drink it quietly to yourself", nextScene: "quiet_consequence", tag: "evasive", feedback: "Pass it around, all of you.", isCorrect: false, sentiment: "negative" },
      { text: "Pour it out upon the floor", nextScene: "pour_consequence", tag: "rash", feedback: "This is the cup of covenant.", isCorrect: false, sentiment: "negative" },
      { text: "Pass it and speak of covenant", nextScene: "remembrance", tag: "faithful", feedback: "\"My blood, poured out for many.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  quiet_consequence: {
    id: "quiet_consequence",
    title: "Share the Cup",
    text: "The new covenant is given to them.\nNot kept hidden in your hand.",
    choices: [
      { text: "Pass it and speak of covenant", nextScene: "remembrance", tag: "faithful", feedback: "They drink, one by one.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pour_consequence: {
    id: "pour_consequence",
    title: "Not the Floor",
    text: "This cup is to be drunk, not spilled.\nLet them taste the promise.",
    choices: [
      { text: "Pass it and speak of covenant", nextScene: "remembrance", tag: "faithful", feedback: "The cup moves down the table.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — REMEMBRANCE ============
  remembrance: {
    id: "remembrance",
    title: "Do This in Memory",
    text: "Their eyes follow your every word.\nHow will they keep this night?",
    choices: [
      { text: "Tell them to forget the meal", nextScene: "forget_consequence", tag: "evasive", feedback: "No. Remember, always.", isCorrect: false, sentiment: "negative" },
      { text: "\"Do this in memory of me\"", nextScene: "betrayal_words", tag: "faithful", feedback: "The words settle deep in them.", isCorrect: true, sentiment: "positive" },
      { text: "Demand a feast in your name", nextScene: "demand_consequence", tag: "prideful", feedback: "Memory, not spectacle.", isCorrect: false, sentiment: "negative" },
    ],
  },
  forget_consequence: {
    id: "forget_consequence",
    title: "Always Remember",
    text: "This bread, this cup, this love.\nThese they must never forget.",
    choices: [
      { text: "\"Do this in memory of me\"", nextScene: "betrayal_words", tag: "faithful", feedback: "They nod in solemn silence.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Memory, Not Spectacle",
    text: "A quiet meal, broken and shared.\nThat is enough for love.",
    choices: [
      { text: "\"Do this in memory of me\"", nextScene: "betrayal_words", tag: "faithful", feedback: "Their hearts grow still.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — BETRAYAL FORETOLD ============
  betrayal_words: {
    id: "betrayal_words",
    title: "One of You",
    text: "Your voice grows low and sorrowful.\n\"One who eats with me will betray me.\"",
    choices: [
      { text: "Accuse Judas openly by name", nextScene: "accuse_consequence", tag: "rash", feedback: "His choice belongs to him.", isCorrect: false, sentiment: "negative" },
      { text: "Take back the hard saying", nextScene: "take_back_consequence", tag: "fearful", feedback: "Truth must stand tonight.", isCorrect: false, sentiment: "negative" },
      { text: "Let the words fall and wait", nextScene: "disciples_ask", tag: "patient", feedback: "Silence wraps the table.", isCorrect: true, sentiment: "positive" },
    ],
  },
  accuse_consequence: {
    id: "accuse_consequence",
    title: "Not by Force",
    text: "He must come to his own choice.\nLove does not shame him publicly.",
    choices: [
      { text: "Let the words fall and wait", nextScene: "disciples_ask", tag: "patient", feedback: "You lower your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  take_back_consequence: {
    id: "take_back_consequence",
    title: "Truth Stands",
    text: "What is true must be spoken,\neven when it wounds your heart.",
    choices: [
      { text: "Let the words fall and wait", nextScene: "disciples_ask", tag: "patient", feedback: "The lamplight flickers low.", isCorrect: true, sentiment: "positive" },
    ],
  },

  disciples_ask: {
    id: "disciples_ask",
    title: "\"Is It I, Lord?\"",
    text: "One by one they look up troubled.\n\"Surely not I, Lord? Surely not I?\"",
    choices: [
      { text: "Point your finger at each one", nextScene: "point_consequence", tag: "prideful", feedback: "Their hearts must speak first.", isCorrect: false, sentiment: "negative" },
      { text: "Answer with grief, not blame", nextScene: "farewell", tag: "loving", feedback: "\"The hand is here with mine.\"", isCorrect: true, sentiment: "positive" },
      { text: "Laugh and dismiss their fear", nextScene: "laugh_consequence", tag: "evasive", feedback: "This is no jest tonight.", isCorrect: false, sentiment: "negative" },
    ],
  },
  point_consequence: {
    id: "point_consequence",
    title: "Let Hearts Speak",
    text: "Each soul must look within tonight.\nDo not crush them with judgment.",
    choices: [
      { text: "Answer with grief, not blame", nextScene: "farewell", tag: "loving", feedback: "Your sorrow softens them.", isCorrect: true, sentiment: "positive" },
    ],
  },
  laugh_consequence: {
    id: "laugh_consequence",
    title: "Not a Jest",
    text: "Their fear is honest and tender.\nMeet it with honest love.",
    choices: [
      { text: "Answer with grief, not blame", nextScene: "farewell", tag: "loving", feedback: "You speak softly to them.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VII — FAREWELL ============
  farewell: {
    id: "farewell",
    title: "Love One Another",
    text: "The hour grows late. Lamps burn low.\nWhat last word will you give?",
    choices: [
      { text: "Leave without a final word", nextScene: "leave_silent_consequence", tag: "fearful", feedback: "They need this word most.", isCorrect: false, sentiment: "negative" },
      { text: "\"Love one another, as I have loved\"", nextScene: "ending", tag: "loving", feedback: "Their eyes shine with tears.", isCorrect: true, sentiment: "positive" },
      { text: "Warn them of every danger", nextScene: "warn_consequence", tag: "fearful", feedback: "Speak love, not only fear.", isCorrect: false, sentiment: "negative" },
    ],
  },
  leave_silent_consequence: {
    id: "leave_silent_consequence",
    title: "One Last Word",
    text: "They will need it in the dark hours.\nLet love be the lamp you leave.",
    choices: [
      { text: "\"Love one another, as I have loved\"", nextScene: "ending", tag: "loving", feedback: "You bless them with your gaze.", isCorrect: true, sentiment: "positive" },
    ],
  },
  warn_consequence: {
    id: "warn_consequence",
    title: "Love First",
    text: "Fear cannot carry them through.\nOnly love will hold them.",
    choices: [
      { text: "\"Love one another, as I have loved\"", nextScene: "ending", tag: "loving", feedback: "Your voice is gentle and clear.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Into the Night",
    text: "You rise from the table together.\nThe night waits beyond the door.",
    choices: [],
    isFinal: true,
  },
};
