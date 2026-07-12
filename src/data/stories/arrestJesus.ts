import { StoryScene } from "@/data/stories/creation";

// ARREST OF JESUS — Matthew 26, Mark 14, Luke 22, John 18
// You ARE Jesus. Focus: betrayal, obedience, peace.
// Stops BEFORE trial. Dialogue ≤100 chars, choices ≤40 chars.

export const arrestJesusScenes: Record<string, StoryScene> = {
  // ACT I — TORCHES APPROACH
  start: {
    id: "start",
    title: "Torches in the Trees",
    text: "Torchlight floods the olive grove.\nJudas leads armed men toward you.",
    choices: [
      { text: "Hide among the olive trunks", nextScene: "hide_consequence", tag: "fearful", feedback: "The hour will not be hidden from.", isCorrect: false, sentiment: "negative" },
      { text: "Stand and face them openly", nextScene: "judas_arrives", tag: "obedient", feedback: "John 18:4 — Jesus, knowing all that was going to happen to him, went out and asked them, \"Who is it you want?\"", isCorrect: true, sentiment: "positive" },
      { text: "Call angels to scatter them", nextScene: "angels_consequence", tag: "prideful", feedback: "Not by power, but by surrender.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Not Hidden",
    text: "The Father's will must be met openly.\nWalk into the light.",
    choices: [
      { text: "Stand and face them openly", nextScene: "judas_arrives", tag: "obedient", feedback: "You rise to meet them.", isCorrect: true, sentiment: "positive" },
    ],
  },
  angels_consequence: {
    id: "angels_consequence",
    title: "Twelve Legions Wait",
    text: "Heaven could rescue you in a breath.\nBut Scripture must be fulfilled.",
    choices: [
      { text: "Stand and face them openly", nextScene: "judas_arrives", tag: "obedient", feedback: "You set your face like flint.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — JUDAS ARRIVES
  judas_arrives: {
    id: "judas_arrives",
    title: "Friend, Why Have You Come?",
    text: "Judas walks ahead of the crowd.\nHis lantern trembles in his hand.",
    choices: [
      { text: "Shout and shame his betrayal", nextScene: "shame_consequence", tag: "rash", feedback: "Meet betrayal with grace.", isCorrect: false, sentiment: "negative" },
      { text: "Run before he reaches you", nextScene: "run_consequence", tag: "fearful", feedback: "Stay. The cup is here.", isCorrect: false, sentiment: "negative" },
      { text: "Call him 'friend' and wait", nextScene: "kiss", tag: "loving", feedback: "Matthew 26:50 — Jesus said to Judas, \"Friend, why have you come?\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  shame_consequence: {
    id: "shame_consequence",
    title: "Grace, Not Wrath",
    text: "Even now, love is your answer.\nLet him hear it once more.",
    choices: [
      { text: "Call him 'friend' and wait", nextScene: "kiss", tag: "loving", feedback: "His eyes break under your gaze.", isCorrect: true, sentiment: "positive" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "The Cup Is Here",
    text: "You did not pray all night to flee.\nMeet him where you stand.",
    choices: [
      { text: "Call him 'friend' and wait", nextScene: "kiss", tag: "loving", feedback: "You hold your ground in peace.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE KISS
  kiss: {
    id: "kiss",
    title: "A Sign of a Kiss",
    text: "Judas leans close. \"Rabbi.\"\nHis lips brush your cheek in betrayal.",
    choices: [
      { text: "Strike him for his treachery", nextScene: "strike_consequence", tag: "rash", feedback: "No violence answers this kiss.", isCorrect: false, sentiment: "negative" },
      { text: "Receive it without resistance", nextScene: "step_forward", tag: "humble", feedback: "\"Do what you came to do.\"", isCorrect: true, sentiment: "positive" },
      { text: "Pretend you do not know him", nextScene: "pretend_consequence", tag: "evasive", feedback: "Truth, even now. Especially now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  strike_consequence: {
    id: "strike_consequence",
    title: "Not by the Sword",
    text: "Even Judas is loved to the end.\nLet the kiss become his witness.",
    choices: [
      { text: "Receive it without resistance", nextScene: "step_forward", tag: "humble", feedback: "Your stillness is louder than wrath.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pretend_consequence: {
    id: "pretend_consequence",
    title: "Truth, Even Now",
    text: "Denial is not your way.\nMeet him face to face.",
    choices: [
      { text: "Receive it without resistance", nextScene: "step_forward", tag: "humble", feedback: "You stand fully revealed.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — STEP FORWARD
  step_forward: {
    id: "step_forward",
    title: "Whom Do You Seek?",
    text: "The guards halt at the edge of the light.\nTheir eyes search the disciples.",
    choices: [
      { text: "Let the disciples be taken too", nextScene: "let_taken_consequence", tag: "fearful", feedback: "Shield them. The hour is yours alone.", isCorrect: false, sentiment: "negative" },
      { text: "Stand silent and let them guess", nextScene: "silent_consequence", tag: "evasive", feedback: "Speak. Name yourself.", isCorrect: false, sentiment: "negative" },
      { text: "\"I am he. Let these men go.\"", nextScene: "peter_sword", tag: "faithful", feedback: "John 18:8 — Jesus answered, \"I told you that I am he. If you are looking for me, then let these men go.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  let_taken_consequence: {
    id: "let_taken_consequence",
    title: "Shield Them",
    text: "Not one of them must be lost tonight.\nYou drink this cup alone.",
    choices: [
      { text: "\"I am he. Let these men go.\"", nextScene: "peter_sword", tag: "faithful", feedback: "The guards step back at your voice.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Name Yourself",
    text: "Truth must be spoken in the dark.\nDeclare who you are.",
    choices: [
      { text: "\"I am he. Let these men go.\"", nextScene: "peter_sword", tag: "faithful", feedback: "The crowd staggers and falls back.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — PETER'S SWORD
  peter_sword: {
    id: "peter_sword",
    title: "Peter Draws Steel",
    text: "Peter lifts a sword above his head.\nIt flashes toward the high priest's servant.",
    choices: [
      { text: "Cheer Peter on to fight", nextScene: "cheer_consequence", tag: "rash", feedback: "This is not the kingdom's way.", isCorrect: false, sentiment: "negative" },
      { text: "\"Put your sword away, Peter.\"", nextScene: "heal_ear", tag: "peaceful", feedback: "Matthew 26:52 — Jesus said to Peter, \"Put your sword back in its place, for all who draw the sword will die by the sword.\"", isCorrect: true, sentiment: "positive" },
      { text: "Take the sword and fight beside him", nextScene: "fight_consequence", tag: "rash", feedback: "The kingdom is not won by blades.", isCorrect: false, sentiment: "negative" },
    ],
  },
  cheer_consequence: {
    id: "cheer_consequence",
    title: "Not by Blades",
    text: "Those who live by the sword die by it.\nSpeak the harder word.",
    choices: [
      { text: "\"Put your sword away, Peter.\"", nextScene: "heal_ear", tag: "peaceful", feedback: "Peter lowers the blade trembling.", isCorrect: true, sentiment: "positive" },
    ],
  },
  fight_consequence: {
    id: "fight_consequence",
    title: "The Cup, Not the Sword",
    text: "The Father's plan needs no defenders.\nIt needs a willing Son.",
    choices: [
      { text: "\"Put your sword away, Peter.\"", nextScene: "heal_ear", tag: "peaceful", feedback: "Your calm halts the night.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — HEALING THE EAR
  heal_ear: {
    id: "heal_ear",
    title: "No More of This",
    text: "The servant clutches his bleeding ear.\nFear and pain shake his whole frame.",
    choices: [
      { text: "Walk past him to be arrested", nextScene: "walk_past_consequence", tag: "evasive", feedback: "Even now, mercy. Heal him.", isCorrect: false, sentiment: "negative" },
      { text: "Touch his ear and heal him", nextScene: "disciples_flee", tag: "loving", feedback: "Luke 22:51 — Jesus touched the servant's ear and healed him.", isCorrect: true, sentiment: "positive" },
      { text: "Curse the men who came for you", nextScene: "curse_consequence", tag: "rash", feedback: "Bless, do not curse, tonight.", isCorrect: false, sentiment: "negative" },
    ],
  },
  walk_past_consequence: {
    id: "walk_past_consequence",
    title: "Mercy, Always",
    text: "The last miracle before the cross\nbelongs to your enemy.",
    choices: [
      { text: "Touch his ear and heal him", nextScene: "disciples_flee", tag: "loving", feedback: "He looks up at you, stunned.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Bless, Not Curse",
    text: "Love your enemies, you taught.\nLive it now, in the torchlight.",
    choices: [
      { text: "Touch his ear and heal him", nextScene: "disciples_flee", tag: "loving", feedback: "The grove falls silent in awe.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — DISCIPLES FLEE
  disciples_flee: {
    id: "disciples_flee",
    title: "They All Forsook Him",
    text: "Your friends turn and run.\nCloaks drop. Footsteps fade into the dark.",
    choices: [
      { text: "Call them back in anger", nextScene: "call_back_consequence", tag: "rash", feedback: "Let mercy cover their fear.", isCorrect: false, sentiment: "negative" },
      { text: "Let them go without a word", nextScene: "taken_away", tag: "loving", feedback: "Matthew 26:56 — Then all the disciples deserted him and fled.", isCorrect: true, sentiment: "positive" },
      { text: "Curse them for abandoning you", nextScene: "curse_friends_consequence", tag: "prideful", feedback: "They will return. Forgive them now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  call_back_consequence: {
    id: "call_back_consequence",
    title: "Let Them Go",
    text: "The Shepherd is struck. Sheep scatter.\nIt was written. It is right.",
    choices: [
      { text: "Let them go without a word", nextScene: "taken_away", tag: "loving", feedback: "Their footsteps fade into the night.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_friends_consequence: {
    id: "curse_friends_consequence",
    title: "Forgive Them",
    text: "They will weep and return.\nLeave the door of love open.",
    choices: [
      { text: "Let them go without a word", nextScene: "taken_away", tag: "loving", feedback: "Forgiveness goes ahead of them.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — TAKEN AWAY
  taken_away: {
    id: "taken_away",
    title: "Bound and Led",
    text: "Rope tightens around your wrists.\nThe road to Jerusalem opens ahead.",
    choices: [
      { text: "Struggle against the cords", nextScene: "struggle_consequence", tag: "fearful", feedback: "Walk with peace into the dawn.", isCorrect: false, sentiment: "negative" },
      { text: "Beg to be released one last time", nextScene: "beg_consequence", tag: "fearful", feedback: "The yes is already spoken.", isCorrect: false, sentiment: "negative" },
      { text: "Walk forward in steady silence", nextScene: "ending", tag: "obedient", feedback: "John 18:12 — Then the detachment of soldiers with its commander and the Jewish officials arrested Jesus and bound him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  struggle_consequence: {
    id: "struggle_consequence",
    title: "Peace in the Cords",
    text: "These ropes you have chosen freely.\nWear them like a king.",
    choices: [
      { text: "Walk forward in steady silence", nextScene: "ending", tag: "obedient", feedback: "Your head lifts toward the dawn.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Already Yes",
    text: "In the garden you said your yes.\nLet the body follow the heart.",
    choices: [
      { text: "Walk forward in steady silence", nextScene: "ending", tag: "obedient", feedback: "The path is yours to walk.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Led Toward the Dawn",
    text: "Torches line the road to the city.\nYou walk in peace toward what comes.",
    choices: [],
    isFinal: true,
  },
};
