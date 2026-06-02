import { StoryScene } from "@/data/stories/creation";

// DEATH OF JESUS — Matthew 27:33-56, Mark 15:22-41, Luke 23:33-49, John 19:17-37
// You ARE Jesus on the cross. Focus: fulfillment, sacrifice, love.
// Dialogue ≤100 chars, choices ≤40 chars. No resurrection here.

export const deathJesusScenes: Record<string, StoryScene> = {
  // ACT I — RAISED UP
  start: {
    id: "start",
    title: "Lifted Up",
    text: "The cross rises beneath the noon sun.\nNails burn. Breath comes thin and slow.",
    choices: [
      { text: "Call down legions of angels", nextScene: "legions_consequence", tag: "rash", feedback: "This cup is yours to drink.", isCorrect: false, sentiment: "negative" },
      { text: "Pray for those who crucify you", nextScene: "mocking", tag: "merciful", feedback: "\"Father, forgive them.\"", isCorrect: true, sentiment: "positive" },
      { text: "Curse the soldiers below", nextScene: "curse_consequence", tag: "wrathful", feedback: "Love does not curse here.", isCorrect: false, sentiment: "negative" },
    ],
  },
  legions_consequence: {
    id: "legions_consequence",
    title: "Not by Power",
    text: "Heaven waits, but love stays nailed.\nForgiveness is the only sword now.",
    choices: [
      { text: "Pray for those who crucify you", nextScene: "mocking", tag: "merciful", feedback: "\"They know not what they do.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Not the Father's Way",
    text: "A curse here would unmake the gift.\nOnly mercy can complete it.",
    choices: [
      { text: "Pray for those who crucify you", nextScene: "mocking", tag: "merciful", feedback: "\"Father, forgive them.\"", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE MOCKERS
  mocking: {
    id: "mocking",
    title: "The Crowd Mocks",
    text: "\"Save yourself! Come down from there!\"\nTheir shouts climb the wood like smoke.",
    choices: [
      { text: "Shout proof of your power", nextScene: "shout_consequence", tag: "prideful", feedback: "Glory is not won by display.", isCorrect: false, sentiment: "negative" },
      { text: "Climb down to silence them", nextScene: "climb_consequence", tag: "rash", feedback: "Climbing down undoes salvation.", isCorrect: false, sentiment: "negative" },
      { text: "Receive their scorn in silence", nextScene: "two_thieves", tag: "humble", feedback: "Silence carries the weight of love.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Not by Voice",
    text: "Shouting cannot heal their blindness.\nOnly your stillness can.",
    choices: [
      { text: "Receive their scorn in silence", nextScene: "two_thieves", tag: "humble", feedback: "You bow your head silently.", isCorrect: true, sentiment: "positive" },
    ],
  },
  climb_consequence: {
    id: "climb_consequence",
    title: "Stay for Love",
    text: "To step down is to abandon them.\nLove holds you to the wood.",
    choices: [
      { text: "Receive their scorn in silence", nextScene: "two_thieves", tag: "humble", feedback: "You remain, and the world is held.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE TWO THIEVES
  two_thieves: {
    id: "two_thieves",
    title: "A Thief Turns",
    text: "One thief jeers. The other whispers,\n\"Remember me when you come as King.\"",
    choices: [
      { text: "\"Today you will be with me.\"", nextScene: "mother_john", tag: "merciful", feedback: "Paradise opens for him.", isCorrect: true, sentiment: "positive" },
      { text: "Ignore him and look away", nextScene: "ignore_consequence", tag: "wrathful", feedback: "No repentant heart is turned away.", isCorrect: false, sentiment: "negative" },
      { text: "Rebuke him for past sins", nextScene: "rebuke_consequence", tag: "prideful", feedback: "Mercy never measures the past.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Mercy Speaks",
    text: "A turning heart must be answered.\nSpeak the promise of paradise.",
    choices: [
      { text: "\"Today you will be with me.\"", nextScene: "mother_john", tag: "merciful", feedback: "His eyes fill with light.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rebuke_consequence: {
    id: "rebuke_consequence",
    title: "No Past Held",
    text: "You came to save, not to weigh sin.\nGrant him what he asks.",
    choices: [
      { text: "\"Today you will be with me.\"", nextScene: "mother_john", tag: "merciful", feedback: "Paradise is promised.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — MOTHER AND DISCIPLE
  mother_john: {
    id: "mother_john",
    title: "Behold Your Mother",
    text: "Mary stands below, John beside her.\nHer eyes meet yours through the dust.",
    choices: [
      { text: "Send her away to spare her pain", nextScene: "send_consequence", tag: "fearful", feedback: "Love does not flinch from sorrow.", isCorrect: false, sentiment: "negative" },
      { text: "Give her to John as his mother", nextScene: "darkness", tag: "merciful", feedback: "\"Woman, behold your son.\"", isCorrect: true, sentiment: "positive" },
      { text: "Cry out blame against the crowd", nextScene: "blame_consequence", tag: "wrathful", feedback: "Blame cannot carry this hour.", isCorrect: false, sentiment: "negative" },
    ],
  },
  send_consequence: {
    id: "send_consequence",
    title: "She Must Stay",
    text: "She bore you. She must witness this.\nEntrust her to your friend.",
    choices: [
      { text: "Give her to John as his mother", nextScene: "darkness", tag: "merciful", feedback: "\"Behold your son.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Not Blame, but Love",
    text: "The crowd is not why you are here.\nLove is. Care for your mother.",
    choices: [
      { text: "Give her to John as his mother", nextScene: "darkness", tag: "merciful", feedback: "John bows and takes her hand.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — DARKNESS FALLS
  darkness: {
    id: "darkness",
    title: "Darkness Covers the Land",
    text: "At noon the sun is hidden.\nA cold shadow drinks the hill.",
    choices: [
      { text: "Demand the sun shine again", nextScene: "demand_consequence", tag: "prideful", feedback: "The darkness has a purpose.", isCorrect: false, sentiment: "negative" },
      { text: "Bear the darkness in silence", nextScene: "my_god", tag: "humble", feedback: "Sin's weight settles on you.", isCorrect: true, sentiment: "positive" },
      { text: "Flee the cross in your spirit", nextScene: "flee_consequence", tag: "fearful", feedback: "You will not turn from this hour.", isCorrect: false, sentiment: "negative" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Let the Darkness Come",
    text: "The world's sin gathers in this hour.\nReceive it without resistance.",
    choices: [
      { text: "Bear the darkness in silence", nextScene: "my_god", tag: "humble", feedback: "You take the weight upon yourself.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Stay Within Love",
    text: "Even now, do not turn away.\nStay, and the world is healed.",
    choices: [
      { text: "Bear the darkness in silence", nextScene: "my_god", tag: "humble", feedback: "Your breath steadies in the dark.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — MY GOD, MY GOD
  my_god: {
    id: "my_god",
    title: "A Cry to the Father",
    text: "The Father feels far. Your soul aches.\nWhat words rise from the dark?",
    choices: [
      { text: "Accuse the Father of leaving", nextScene: "accuse_consequence", tag: "wrathful", feedback: "Trust still binds you to Him.", isCorrect: false, sentiment: "negative" },
      { text: "\"My God, why have You left me?\"", nextScene: "veil_torn", tag: "humble", feedback: "Even the cry is faithful.", isCorrect: true, sentiment: "positive" },
      { text: "Stay silent and clench your jaw", nextScene: "silent_consequence", tag: "prideful", feedback: "Even psalms of sorrow are prayer.", isCorrect: false, sentiment: "negative" },
    ],
  },
  accuse_consequence: {
    id: "accuse_consequence",
    title: "Cry, Do Not Accuse",
    text: "The psalm of dereliction is yours.\nPray it as it was written.",
    choices: [
      { text: "\"My God, why have You left me?\"", nextScene: "veil_torn", tag: "humble", feedback: "The cry rises in faith.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Let the Cry Out",
    text: "Sorrow shared is sorrow offered.\nLet the Father hear your heart.",
    choices: [
      { text: "\"My God, why have You left me?\"", nextScene: "veil_torn", tag: "humble", feedback: "The cry breaks from your lips.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — IT IS FINISHED / VEIL TORN
  veil_torn: {
    id: "veil_torn",
    title: "The Work Is Done",
    text: "Strength fades. Salvation stands fulfilled.\nThe temple veil waits to be torn.",
    choices: [
      { text: "\"I thirst.\" Then \"It is finished.\"", nextScene: "final_breath", tag: "humble", feedback: "From top to bottom, the veil tears.", isCorrect: true, sentiment: "positive" },
      { text: "Beg for one more hour of life", nextScene: "beg_consequence", tag: "fearful", feedback: "The hour has come and is enough.", isCorrect: false, sentiment: "negative" },
      { text: "Boast of victory over enemies", nextScene: "boast_consequence", tag: "prideful", feedback: "Victory whispers; it does not boast.", isCorrect: false, sentiment: "negative" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "It Is Time",
    text: "Every prophecy is now fulfilled.\nSpeak the word and let it be done.",
    choices: [
      { text: "\"I thirst.\" Then \"It is finished.\"", nextScene: "final_breath", tag: "humble", feedback: "The veil splits from heaven down.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Quiet Triumph",
    text: "This victory wears a crown of thorns.\nLet the finishing word be gentle.",
    choices: [
      { text: "\"I thirst.\" Then \"It is finished.\"", nextScene: "final_breath", tag: "humble", feedback: "Holy curtain torn in two.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — FINAL BREATH
  final_breath: {
    id: "final_breath",
    title: "Into Your Hands",
    text: "The earth trembles. The light bends low.\nOne breath remains. What is it?",
    choices: [
      { text: "Curse those who killed you", nextScene: "curse_end_consequence", tag: "wrathful", feedback: "Love is the only word now.", isCorrect: false, sentiment: "negative" },
      { text: "Cling to life with all your strength", nextScene: "cling_consequence", tag: "fearful", feedback: "Trust opens the hand at last.", isCorrect: false, sentiment: "negative" },
      { text: "\"Father, into Your hands.\"", nextScene: "ending", tag: "humble", feedback: "You bow your head, and breathe out.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_end_consequence: {
    id: "curse_end_consequence",
    title: "End in Love",
    text: "A curse cannot seal this gift.\nGive your last breath to the Father.",
    choices: [
      { text: "\"Father, into Your hands.\"", nextScene: "ending", tag: "humble", feedback: "You surrender all you are.", isCorrect: true, sentiment: "positive" },
    ],
  },
  cling_consequence: {
    id: "cling_consequence",
    title: "Open Your Hands",
    text: "To keep your life is to lose it.\nGive it back, and save the world.",
    choices: [
      { text: "\"Father, into Your hands.\"", nextScene: "ending", tag: "humble", feedback: "Your spirit returns to the Father.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "It Is Accomplished",
    text: "The centurion whispers, \"Truly,\nthis was the Son of God.\"",
    choices: [],
    isFinal: true,
  },
};
