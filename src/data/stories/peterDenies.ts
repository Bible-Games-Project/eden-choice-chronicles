import { StoryScene } from "@/data/stories/creation";

// PETER DENIES JESUS — Matthew 26:69-75, Mark 14:66-72, Luke 22:54-62, John 18:15-27
// You ARE Peter. Focus: fear, weakness, regret. Dialogue ≤100 chars, choices ≤40 chars.

export const peterDeniesScenes: Record<string, StoryScene> = {
  // ACT I — FOLLOWING FROM A DISTANCE
  start: {
    id: "start",
    title: "From a Distance",
    text: "Torches lead Jesus away in chains.\nYour heart pounds. Do you dare follow?",
    choices: [
      { text: "Run home and hide your shame", nextScene: "hide_consequence", tag: "fearful", feedback: "Love must follow, even trembling.", isCorrect: false, sentiment: "negative" },
      { text: "Follow at a distance, silently", nextScene: "gate", tag: "cautious", feedback: "John 18:15 — Peter followed Jesus, as did another disciple.", isCorrect: true, sentiment: "positive" },
      { text: "Charge ahead and free Him", nextScene: "charge_consequence", tag: "rash", feedback: "This hour is not for swords.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Do Not Abandon",
    text: "He needs witness, not abandonment.\nReturn to His shadow.",
    choices: [
      { text: "Follow at a distance, silently", nextScene: "gate", tag: "cautious", feedback: "You turn back into the night.", isCorrect: true, sentiment: "positive" },
    ],
  },
  charge_consequence: {
    id: "charge_consequence",
    title: "Not by Force",
    text: "He told you to put the sword away.\nFollow softly, not in fury.",
    choices: [
      { text: "Follow at a distance, silently", nextScene: "gate", tag: "cautious", feedback: "You slip into the shadows.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — AT THE GATE
  gate: {
    id: "gate",
    title: "The Outer Gate",
    text: "John speaks to the gatekeeper for you.\nThe door creaks open into firelight.",
    choices: [
      { text: "Boldly announce who you are", nextScene: "boast_consequence", tag: "prideful", feedback: "Pride goes before falling.", isCorrect: false, sentiment: "negative" },
      { text: "Lie about your name at once", nextScene: "lie_consequence", tag: "fearful", feedback: "Deception breeds deeper denial.", isCorrect: false, sentiment: "negative" },
      { text: "Slip in quietly, eyes lowered", nextScene: "courtyard_fire", tag: "cautious", feedback: "John 18:16 — The other disciple, who was known to the high priest, spoke to the doorkeeper and brought Peter in.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Not Yet, Peter",
    text: "Boasting once cost you everything.\nEnter humbly tonight.",
    choices: [
      { text: "Slip in quietly, eyes lowered", nextScene: "courtyard_fire", tag: "cautious", feedback: "You step softly past the gate.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "Silence Over Lies",
    text: "One lie always asks for another.\nGo in without a word.",
    choices: [
      { text: "Slip in quietly, eyes lowered", nextScene: "courtyard_fire", tag: "cautious", feedback: "You hold your tongue.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE COURTYARD FIRE
  courtyard_fire: {
    id: "courtyard_fire",
    title: "Among the Guards",
    text: "Cold bites your hands. A fire crackles.\nGuards and servants warm themselves.",
    choices: [
      { text: "Stand apart in the shadows", nextScene: "first_recognized", tag: "cautious", feedback: "Your face still catches the glow.", isCorrect: false, sentiment: "negative" },
      { text: "Quietly pray for courage", nextScene: "pray_path", tag: "faithful", feedback: "Luke 22:55 — Peter sat among them in the middle of the courtyard as they kindled a fire and sat down together.", isCorrect: true, sentiment: "positive" },
      { text: "Joke loudly with the soldiers", nextScene: "joke_consequence", tag: "rash", feedback: "Hiding in laughter never works.", isCorrect: false, sentiment: "negative" },
    ],
  },
  joke_consequence: {
    id: "joke_consequence",
    title: "Not Like This",
    text: "Your loud voice will undo you.\nQuiet your heart instead.",
    choices: [
      { text: "Quietly pray for courage", nextScene: "pray_path", tag: "faithful", feedback: "You bow your head silently.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pray_path: {
    id: "pray_path",
    title: "A Whispered Prayer",
    text: "You ask for strength you do not feel.\nA servant girl steps closer.",
    choices: [
      { text: "Meet her eyes calmly", nextScene: "first_recognized", tag: "humble", feedback: "She studies your face.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — FIRST DENIAL
  first_recognized: {
    id: "first_recognized",
    title: "You Were With Him",
    text: "A servant girl says, \"You were with\nthe Galilean. I know your face.\"",
    choices: [
      { text: "\"Woman, I do not know him.\"", nextScene: "second_recognized", tag: "fearful", feedback: "Your stomach turns at your words.", isCorrect: false, sentiment: "negative" },
      { text: "\"Yes. I am His disciple.\"", nextScene: "confess_consequence", tag: "faithful", feedback: "Matthew 26:70 — Peter denied it before them all, saying, \"I do not know what you mean.\"", isCorrect: true, sentiment: "positive" },
      { text: "Glare at her in furious silence", nextScene: "glare_consequence", tag: "rash", feedback: "Silence here is its own denial.", isCorrect: false, sentiment: "negative" },
    ],
  },
  confess_consequence: {
    id: "confess_consequence",
    title: "If You Had Spoken",
    text: "The harder road would have held you.\nBut fear pulls another way.",
    choices: [
      { text: "\"Woman, I do not know him.\"", nextScene: "second_recognized", tag: "fearful", feedback: "The lie slips out before you stop it.", isCorrect: true, sentiment: "negative" },
    ],
  },
  glare_consequence: {
    id: "glare_consequence",
    title: "Words Spill Out",
    text: "Your silence draws more eyes than words.\nFear loosens your tongue.",
    choices: [
      { text: "\"Woman, I do not know him.\"", nextScene: "second_recognized", tag: "fearful", feedback: "The first denial leaves your lips.", isCorrect: true, sentiment: "negative" },
    ],
  },

  // ACT V — SECOND DENIAL
  second_recognized: {
    id: "second_recognized",
    title: "Another Voice",
    text: "Another servant points: \"This one too\nwas with Jesus of Nazareth.\"",
    choices: [
      { text: "Walk back into the firelight", nextScene: "walk_back_consequence", tag: "rash", feedback: "Returning calls more attention.", isCorrect: false, sentiment: "negative" },
      { text: "\"I do not know the man!\"", nextScene: "third_accusation", tag: "fearful", feedback: "Your voice trembles with the lie.", isCorrect: false, sentiment: "negative" },
      { text: "Swallow fear, admit the truth", nextScene: "admit_consequence", tag: "faithful", feedback: "Mark 14:70 — Peter denied it again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  walk_back_consequence: {
    id: "walk_back_consequence",
    title: "More Eyes Turn",
    text: "Returning only sharpens the questions.\nThe lie is already on your lips.",
    choices: [
      { text: "\"I do not know the man!\"", nextScene: "third_accusation", tag: "fearful", feedback: "The second denial escapes you.", isCorrect: true, sentiment: "negative" },
    ],
  },
  admit_consequence: {
    id: "admit_consequence",
    title: "Fear Wins Again",
    text: "Truth shines for a moment in your heart.\nThen fear smothers it.",
    choices: [
      { text: "\"I do not know the man!\"", nextScene: "third_accusation", tag: "fearful", feedback: "The second denial bursts out.", isCorrect: true, sentiment: "negative" },
    ],
  },

  // ACT VI — THIRD DENIAL
  third_accusation: {
    id: "third_accusation",
    title: "Your Accent Betrays You",
    text: "A man insists: \"Surely you are one.\nYour Galilean speech gives you away.\"",
    choices: [
      { text: "Curse and swear, \"I never knew him!\"", nextScene: "rooster", tag: "fearful", feedback: "Your own oath cuts the night.", isCorrect: false, sentiment: "negative" },
      { text: "\"I am His. Strike me if you must.\"", nextScene: "courage_consequence", tag: "faithful", feedback: "Matthew 26:74 — Peter began to curse and swear, saying, \"I do not know the man.\"", isCorrect: true, sentiment: "positive" },
      { text: "Flee through the gate at once", nextScene: "flee_consequence", tag: "rash", feedback: "You cannot outrun this moment.", isCorrect: false, sentiment: "negative" },
    ],
  },
  courage_consequence: {
    id: "courage_consequence",
    title: "Fear Speaks Louder",
    text: "Courage flickers, then fades to ash.\nThe oath rises up instead.",
    choices: [
      { text: "Curse and swear, \"I never knew him!\"", nextScene: "rooster", tag: "fearful", feedback: "The third denial tears free.", isCorrect: true, sentiment: "negative" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "The Door Is Closed",
    text: "Guards block the gate behind you.\nOnly your tongue can buy escape now.",
    choices: [
      { text: "Curse and swear, \"I never knew him!\"", nextScene: "rooster", tag: "fearful", feedback: "The third denial pours out.", isCorrect: true, sentiment: "negative" },
    ],
  },

  // ACT VII — THE ROOSTER & THE LOOK
  rooster: {
    id: "rooster",
    title: "A Rooster Crows",
    text: "Far off, a rooster splits the dark.\nAcross the court, His eyes find yours.",
    choices: [
      { text: "Look away and pretend not to see", nextScene: "lookaway_consequence", tag: "fearful", feedback: "His gaze has already pierced you.", isCorrect: false, sentiment: "negative" },
      { text: "Hold His gaze and remember", nextScene: "weeping", tag: "humble", feedback: "Matthew 26:74 — Immediately a rooster crowed.", isCorrect: true, sentiment: "positive" },
      { text: "Shout that it is not your fault", nextScene: "shout_consequence", tag: "rash", feedback: "Only honest grief can heal this.", isCorrect: false, sentiment: "negative" },
    ],
  },
  lookaway_consequence: {
    id: "lookaway_consequence",
    title: "He Sees You Anyway",
    text: "No shadow can hide you from love.\nLet His look reach you.",
    choices: [
      { text: "Hold His gaze and remember", nextScene: "weeping", tag: "humble", feedback: "His eyes are sorrow, not scorn.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Stop the Shouting",
    text: "Excuses cannot hold the truth back.\nOnly tears can.",
    choices: [
      { text: "Hold His gaze and remember", nextScene: "weeping", tag: "humble", feedback: "Your shouting falls into silence.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — WEEPING BITTERLY
  weeping: {
    id: "weeping",
    title: "Out Into the Night",
    text: "\"Before the rooster crows, you will\ndeny me three times.\" You remember.",
    choices: [
      { text: "Harden your heart and walk on", nextScene: "harden_consequence", tag: "prideful", feedback: "A broken heart is the doorway.", isCorrect: false, sentiment: "negative" },
      { text: "Go out, weep bitterly, repent", nextScene: "ending", tag: "humble", feedback: "Matthew 26:75 — Peter went out and wept bitterly, remembering Jesus' words.", isCorrect: true, sentiment: "positive" },
      { text: "Blame the guards for the lie", nextScene: "blame_consequence", tag: "rash", feedback: "Only your own heart can answer.", isCorrect: false, sentiment: "negative" },
    ],
  },
  harden_consequence: {
    id: "harden_consequence",
    title: "Let the Tears Come",
    text: "A hardened heart cannot be forgiven.\nA broken one already is.",
    choices: [
      { text: "Go out, weep bitterly, repent", nextScene: "ending", tag: "humble", feedback: "You stumble outside, weeping.", isCorrect: true, sentiment: "positive" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Own the Failing",
    text: "The fault is yours. Mercy waits for it.\nCarry it honestly into the night.",
    choices: [
      { text: "Go out, weep bitterly, repent", nextScene: "ending", tag: "humble", feedback: "You step into the cold and weep.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Bitter Tears",
    text: "Beyond the gate you fall to your knees.\nMercy will find you here, even now.",
    choices: [],
    isFinal: true,
  },
};
