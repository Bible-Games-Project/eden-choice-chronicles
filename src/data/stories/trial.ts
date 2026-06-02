import { StoryScene } from "@/data/stories/creation";

// TRIAL — Matthew 26-27, Mark 14-15, Luke 22-23, John 18-19
// You ARE Jesus. Focus: injustice, truth, silence under pressure.
// Stops BEFORE crucifixion. Dialogue ≤100 chars, choices ≤40 chars.

export const trialScenes: Record<string, StoryScene> = {
  // ACT I — BEFORE THE SANHEDRIN
  start: {
    id: "start",
    title: "Before Caiaphas",
    text: "The high priest's hall burns with torches.\nAll eyes turn to you, bound and silent.",
    choices: [
      { text: "Curse the council for their malice", nextScene: "curse_consequence", tag: "rash", feedback: "Their judgment will judge them.", isCorrect: false, sentiment: "negative" },
      { text: "Stand quietly and meet their gaze", nextScene: "false_witnesses", tag: "humble", feedback: "Your silence fills the hall.", isCorrect: true, sentiment: "positive" },
      { text: "Beg them to release you", nextScene: "beg_consequence", tag: "fearful", feedback: "The cup is in your hand.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Bless, Not Curse",
    text: "Even now, the answer is grace.\nMeet wrath with steady silence.",
    choices: [
      { text: "Stand quietly and meet their gaze", nextScene: "false_witnesses", tag: "humble", feedback: "You straighten without a word.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Not by Begging",
    text: "You came for this hour.\nLet your stillness be your answer.",
    choices: [
      { text: "Stand quietly and meet their gaze", nextScene: "false_witnesses", tag: "humble", feedback: "Your eyes do not waver.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — FALSE WITNESSES
  false_witnesses: {
    id: "false_witnesses",
    title: "False Words",
    text: "Two witnesses twist your every saying.\nTheir stories do not even agree.",
    choices: [
      { text: "Argue against every false word", nextScene: "argue_consequence", tag: "rash", feedback: "Lies collapse beneath silence.", isCorrect: false, sentiment: "negative" },
      { text: "Mock the men for their lies", nextScene: "mock_consequence", tag: "prideful", feedback: "Truth needs no mockery.", isCorrect: false, sentiment: "negative" },
      { text: "Answer them with silence", nextScene: "high_priest_demands", tag: "humble", feedback: "You say nothing. They falter.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Silence Speaks",
    text: "Their lies cannot stand alone.\nLet the silence undo them.",
    choices: [
      { text: "Answer them with silence", nextScene: "high_priest_demands", tag: "humble", feedback: "Your stillness is louder than words.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Truth Stands Alone",
    text: "Mockery is not your way.\nLet truth bear its own weight.",
    choices: [
      { text: "Answer them with silence", nextScene: "high_priest_demands", tag: "humble", feedback: "The hall grows uneasy.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE HIGH PRIEST DEMANDS
  high_priest_demands: {
    id: "high_priest_demands",
    title: "Are You the Christ?",
    text: "Caiaphas rises. \"Tell us under oath.\nAre you the Son of God?\"",
    choices: [
      { text: "Deny it to save your life", nextScene: "deny_consequence", tag: "fearful", feedback: "Truth, even unto death.", isCorrect: false, sentiment: "negative" },
      { text: "Refuse to answer at all", nextScene: "refuse_consequence", tag: "evasive", feedback: "The hour calls for the great Yes.", isCorrect: false, sentiment: "negative" },
      { text: "\"I am. You will see me coming.\"", nextScene: "to_pilate", tag: "faithful", feedback: "Caiaphas tears his robes in rage.", isCorrect: true, sentiment: "positive" },
    ],
  },
  deny_consequence: {
    id: "deny_consequence",
    title: "Truth, Always",
    text: "You did not come to deny who you are.\nDeclare it before them all.",
    choices: [
      { text: "\"I am. You will see me coming.\"", nextScene: "to_pilate", tag: "faithful", feedback: "The hall erupts in shouts.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Speak the Yes",
    text: "For this you came into the world:\nto bear witness to the truth.",
    choices: [
      { text: "\"I am. You will see me coming.\"", nextScene: "to_pilate", tag: "faithful", feedback: "Your voice rings without fear.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — TAKEN TO PILATE
  to_pilate: {
    id: "to_pilate",
    title: "To the Roman",
    text: "Dawn breaks over the city walls.\nGuards drag you toward the praetorium.",
    choices: [
      { text: "Drag your feet to slow them", nextScene: "drag_consequence", tag: "fearful", feedback: "Walk with steady peace.", isCorrect: false, sentiment: "negative" },
      { text: "Demand a fair Roman hearing", nextScene: "demand_consequence", tag: "rash", feedback: "Trust the Father, not Rome.", isCorrect: false, sentiment: "negative" },
      { text: "Walk in silent obedience", nextScene: "pilate_questions", tag: "obedient", feedback: "Your steps match theirs.", isCorrect: true, sentiment: "positive" },
    ],
  },
  drag_consequence: {
    id: "drag_consequence",
    title: "Steady Steps",
    text: "Fear slows the feet of the unwilling.\nYou are not unwilling.",
    choices: [
      { text: "Walk in silent obedience", nextScene: "pilate_questions", tag: "obedient", feedback: "You keep pace with quiet grace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Not by Rights",
    text: "Justice will not be won here today.\nThe Father holds the verdict.",
    choices: [
      { text: "Walk in silent obedience", nextScene: "pilate_questions", tag: "obedient", feedback: "You enter the hall at peace.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — PILATE QUESTIONS
  pilate_questions: {
    id: "pilate_questions",
    title: "What Is Truth?",
    text: "Pilate studies you. \"Are you a king?\"\nHis voice is curious, half afraid.",
    choices: [
      { text: "Mock his Roman power", nextScene: "mock_rome_consequence", tag: "prideful", feedback: "Speak truth, not insults.", isCorrect: false, sentiment: "negative" },
      { text: "\"My kingdom is not of this world.\"", nextScene: "crowd_demands", tag: "faithful", feedback: "Pilate frowns, intrigued.", isCorrect: true, sentiment: "positive" },
      { text: "Stay silent to confuse him", nextScene: "silent_pilate_consequence", tag: "evasive", feedback: "Here, truth must be spoken plainly.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_rome_consequence: {
    id: "mock_rome_consequence",
    title: "Truth, Not Scorn",
    text: "Even Pilate must hear the kingdom.\nSpeak it gently and clearly.",
    choices: [
      { text: "\"My kingdom is not of this world.\"", nextScene: "crowd_demands", tag: "faithful", feedback: "Pilate steps closer to listen.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_pilate_consequence: {
    id: "silent_pilate_consequence",
    title: "Speak Plainly Here",
    text: "Pilate is searching for an exit.\nGive him the truth he asks for.",
    choices: [
      { text: "\"My kingdom is not of this world.\"", nextScene: "crowd_demands", tag: "faithful", feedback: "He weighs the words in silence.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE CROWD ROARS
  crowd_demands: {
    id: "crowd_demands",
    title: "Crucify Him!",
    text: "Outside, the crowd swells and shouts.\n\"Crucify him! Crucify him!\"",
    choices: [
      { text: "Call down judgment on the crowd", nextScene: "judgment_consequence", tag: "rash", feedback: "Forgive them. They do not know.", isCorrect: false, sentiment: "negative" },
      { text: "Plead with them to stop", nextScene: "plead_consequence", tag: "fearful", feedback: "The hour is set. Bear it in silence.", isCorrect: false, sentiment: "negative" },
      { text: "Bear their cries in silence", nextScene: "pilate_washes", tag: "humble", feedback: "Their shouts wash over you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  judgment_consequence: {
    id: "judgment_consequence",
    title: "Forgive Them",
    text: "They do not know what they do.\nMercy is the harder word today.",
    choices: [
      { text: "Bear their cries in silence", nextScene: "pilate_washes", tag: "humble", feedback: "You bow your head, praying.", isCorrect: true, sentiment: "positive" },
    ],
  },
  plead_consequence: {
    id: "plead_consequence",
    title: "Silence Now",
    text: "The crowd cannot be turned by pleading.\nOnly the cross will turn them.",
    choices: [
      { text: "Bear their cries in silence", nextScene: "pilate_washes", tag: "humble", feedback: "Your stillness is its own answer.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — PILATE WASHES HIS HANDS
  pilate_washes: {
    id: "pilate_washes",
    title: "I Am Innocent",
    text: "Pilate calls for water and washes his hands.\n\"I am innocent of this man's blood.\"",
    choices: [
      { text: "Accuse Pilate of cowardice", nextScene: "accuse_consequence", tag: "rash", feedback: "Let his own conscience speak.", isCorrect: false, sentiment: "negative" },
      { text: "Receive his words without protest", nextScene: "condemned", tag: "humble", feedback: "Your peace unsettles him deeper.", isCorrect: true, sentiment: "positive" },
      { text: "Demand he free you outright", nextScene: "demand_free_consequence", tag: "fearful", feedback: "The cup is in your hand still.", isCorrect: false, sentiment: "negative" },
    ],
  },
  accuse_consequence: {
    id: "accuse_consequence",
    title: "Let Conscience Speak",
    text: "His own heart will accuse him later.\nYou need not raise your voice.",
    choices: [
      { text: "Receive his words without protest", nextScene: "condemned", tag: "humble", feedback: "He turns away, troubled.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_free_consequence: {
    id: "demand_free_consequence",
    title: "The Cup Remains",
    text: "Freedom now would unmake the rescue.\nThe yes is still your yes.",
    choices: [
      { text: "Receive his words without protest", nextScene: "condemned", tag: "humble", feedback: "Your peace is unshaken.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — CONDEMNED
  condemned: {
    id: "condemned",
    title: "The Sentence",
    text: "Pilate hands you over to the soldiers.\nThe verdict is sealed in silence.",
    choices: [
      { text: "Cry out against the injustice", nextScene: "cry_out_consequence", tag: "rash", feedback: "Carry it with quiet love.", isCorrect: false, sentiment: "negative" },
      { text: "Walk forward with steady peace", nextScene: "ending", tag: "obedient", feedback: "Each step is a willing yes.", isCorrect: true, sentiment: "positive" },
      { text: "Collapse and refuse to move", nextScene: "collapse_consequence", tag: "fearful", feedback: "Rise. The road is yours.", isCorrect: false, sentiment: "negative" },
    ],
  },
  cry_out_consequence: {
    id: "cry_out_consequence",
    title: "Quiet Love",
    text: "The greatest love walks in silence here.\nLet it carry you onward.",
    choices: [
      { text: "Walk forward with steady peace", nextScene: "ending", tag: "obedient", feedback: "Your shoulders lift with grace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  collapse_consequence: {
    id: "collapse_consequence",
    title: "Rise and Walk",
    text: "The road has been written for you.\nWalk it as the willing Lamb.",
    choices: [
      { text: "Walk forward with steady peace", nextScene: "ending", tag: "obedient", feedback: "You stand. The soldiers part.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Led Toward the Road",
    text: "Soldiers fall in around you.\nThe stone steps wait beneath the dawn.",
    choices: [],
    isFinal: true,
  },
};
