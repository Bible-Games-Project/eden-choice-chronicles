import { StoryScene } from "@/data/stories/creation";

// EMPTY TOMB — Matthew 28:1-10, Mark 16:1-11, Luke 24:1-12, John 20:1-10
// You ARE Mary Magdalene. Focus: hope, awe, resurrection promise.
// Dialogue ≤100 chars, choices ≤40 chars. No appearance of Jesus here.

export const emptyTombScenes: Record<string, StoryScene> = {
  // ACT I — DAWN APPROACH
  start: {
    id: "start",
    title: "The First Light",
    text: "Spices in hand, you walk before sunrise.\nWho will roll the great stone away?",
    choices: [
      { text: "Turn back. It is too heavy", nextScene: "turn_consequence", tag: "fearful", feedback: "Hope must keep walking.", isCorrect: false, sentiment: "negative" },
      { text: "Walk on in quiet faith", nextScene: "stone", tag: "humble", feedback: "Your footsteps press through dew.", isCorrect: true, sentiment: "positive" },
      { text: "Wait until the disciples wake", nextScene: "wait_consequence", tag: "fearful", feedback: "Love does not wait at dawn.", isCorrect: false, sentiment: "negative" },
    ],
  },
  turn_consequence: {
    id: "turn_consequence",
    title: "Do Not Turn",
    text: "Grief calls you to honor His body.\nThe path is shorter than the fear.",
    choices: [
      { text: "Walk on in quiet faith", nextScene: "stone", tag: "humble", feedback: "Your feet find the path again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Go Now",
    text: "Some hopes cannot wait for morning.\nThe spices are in your hands.",
    choices: [
      { text: "Walk on in quiet faith", nextScene: "stone", tag: "humble", feedback: "You press on toward the tomb.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE STONE
  stone: {
    id: "stone",
    title: "The Stone Is Moved",
    text: "The great stone lies rolled aside.\nThe tomb gapes open in the dawn.",
    choices: [
      { text: "Run away in fear", nextScene: "run_consequence", tag: "fearful", feedback: "Fear cannot guard a miracle.", isCorrect: false, sentiment: "negative" },
      { text: "Accuse soldiers of theft", nextScene: "accuse_consequence", tag: "wrathful", feedback: "No human hand did this.", isCorrect: false, sentiment: "negative" },
      { text: "Step closer and look inside", nextScene: "enter", tag: "humble", feedback: "Trembling, you draw near.", isCorrect: true, sentiment: "positive" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "Do Not Flee Yet",
    text: "Truth waits inside the open door.\nGo near. See what God has done.",
    choices: [
      { text: "Step closer and look inside", nextScene: "enter", tag: "humble", feedback: "You move toward the threshold.", isCorrect: true, sentiment: "positive" },
    ],
  },
  accuse_consequence: {
    id: "accuse_consequence",
    title: "Not Theft",
    text: "No grave robber leaves linen folded.\nThis is something far greater.",
    choices: [
      { text: "Step closer and look inside", nextScene: "enter", tag: "humble", feedback: "You step softly into the light.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE EMPTY INTERIOR
  enter: {
    id: "enter",
    title: "Linen Cloths Lying",
    text: "The slab is bare. Folded cloths remain.\nHis body is not here.",
    choices: [
      { text: "Weep without lifting your eyes", nextScene: "weep_consequence", tag: "fearful", feedback: "Lift your eyes. Heaven is speaking.", isCorrect: false, sentiment: "negative" },
      { text: "Look around in quiet wonder", nextScene: "angels", tag: "humble", feedback: "A light begins to fill the cave.", isCorrect: true, sentiment: "positive" },
      { text: "Touch the folded cloths in anger", nextScene: "anger_consequence", tag: "wrathful", feedback: "Anger blinds the eye to glory.", isCorrect: false, sentiment: "negative" },
    ],
  },
  weep_consequence: {
    id: "weep_consequence",
    title: "Lift Your Eyes",
    text: "Tears are right, but look up now.\nYou are not alone in this place.",
    choices: [
      { text: "Look around in quiet wonder", nextScene: "angels", tag: "humble", feedback: "Light pours across the stone.", isCorrect: true, sentiment: "positive" },
    ],
  },
  anger_consequence: {
    id: "anger_consequence",
    title: "Not Anger",
    text: "Linen folded with care is no theft.\nLook up. See who waits with you.",
    choices: [
      { text: "Look around in quiet wonder", nextScene: "angels", tag: "humble", feedback: "Your hands fall open in awe.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE ANGELIC MESSAGE
  angels: {
    id: "angels",
    title: "Two Shining Ones",
    text: "Two figures in white ask softly,\n\"Why seek the living among the dead?\"",
    choices: [
      { text: "Argue: \"They have taken Him.\"", nextScene: "argue_consequence", tag: "fearful", feedback: "Listen first. Hope is speaking.", isCorrect: false, sentiment: "negative" },
      { text: "Demand the body be returned", nextScene: "demand_consequence", tag: "prideful", feedback: "He is not lost. He is risen.", isCorrect: false, sentiment: "negative" },
      { text: "Bow and listen in silence", nextScene: "message", tag: "humble", feedback: "Their words fall like gentle rain.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Be Still and Hear",
    text: "Your grief is heard, but listen now.\nThis is a message you must carry.",
    choices: [
      { text: "Bow and listen in silence", nextScene: "message", tag: "humble", feedback: "You bow your head in reverence.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "He Is Not Held",
    text: "No tomb can keep what God has raised.\nBe still and hear the truth.",
    choices: [
      { text: "Bow and listen in silence", nextScene: "message", tag: "humble", feedback: "Stillness opens your heart.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE PROMISE REMEMBERED
  message: {
    id: "message",
    title: "He Is Risen",
    text: "\"He is not here. He is risen,\nas He told you in Galilee.\"",
    choices: [
      { text: "Doubt: this cannot be true", nextScene: "doubt_consequence", tag: "fearful", feedback: "Remember what He promised.", isCorrect: false, sentiment: "negative" },
      { text: "Remember His own words", nextScene: "remember", tag: "humble", feedback: "His voice rises in your heart.", isCorrect: true, sentiment: "positive" },
      { text: "Boast that you knew all along", nextScene: "boast_consequence", tag: "prideful", feedback: "Humility carries this news.", isCorrect: false, sentiment: "negative" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust His Word",
    text: "He said on the third day He would rise.\nLet His promise meet your heart.",
    choices: [
      { text: "Remember His own words", nextScene: "remember", tag: "humble", feedback: "Memory becomes light within you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Not Pride",
    text: "This news is not yours to wear.\nIt is yours to carry, gently.",
    choices: [
      { text: "Remember His own words", nextScene: "remember", tag: "humble", feedback: "You lower your head in awe.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — TELL THE OTHERS
  remember: {
    id: "remember",
    title: "Run with the News",
    text: "The other women wait, pale with fear.\nWhat will you do with this hope?",
    choices: [
      { text: "Keep silent. Stay safe", nextScene: "silent_consequence", tag: "fearful", feedback: "Hope must be spoken aloud.", isCorrect: false, sentiment: "negative" },
      { text: "Tell them. Go to the disciples", nextScene: "disciples", tag: "merciful", feedback: "You take their hands and run.", isCorrect: true, sentiment: "positive" },
      { text: "Test them first with riddles", nextScene: "test_consequence", tag: "prideful", feedback: "Good news has no riddles.", isCorrect: false, sentiment: "negative" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Speak It Out",
    text: "A locked heart cannot carry light.\nLet the joy run from your lips.",
    choices: [
      { text: "Tell them. Go to the disciples", nextScene: "disciples", tag: "merciful", feedback: "Your voice trembles with joy.", isCorrect: true, sentiment: "positive" },
    ],
  },
  test_consequence: {
    id: "test_consequence",
    title: "Plain Words",
    text: "Tell them clearly. The tomb is empty.\nHe is risen, as He said.",
    choices: [
      { text: "Tell them. Go to the disciples", nextScene: "disciples", tag: "merciful", feedback: "Plain truth opens every ear.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — DISCIPLES INFORMED
  disciples: {
    id: "disciples",
    title: "Peter and John",
    text: "Peter stares. John leans in.\n\"The Lord is risen,\" you say.",
    choices: [
      { text: "Blame them for hiding away", nextScene: "blame_consequence", tag: "wrathful", feedback: "Blame poisons holy news.", isCorrect: false, sentiment: "negative" },
      { text: "Speak with steady, hopeful joy", nextScene: "sunrise", tag: "merciful", feedback: "Peter rises and begins to run.", isCorrect: true, sentiment: "positive" },
      { text: "Beg them to come prove it", nextScene: "beg_consequence", tag: "fearful", feedback: "They already believe enough to run.", isCorrect: false, sentiment: "negative" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Not Blame, Joy",
    text: "Their hiding will turn to running soon.\nGive them only the good news.",
    choices: [
      { text: "Speak with steady, hopeful joy", nextScene: "sunrise", tag: "merciful", feedback: "John's eyes fill with light.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Steady, Not Begging",
    text: "Truth needs no pleading to be true.\nStand and tell them plainly.",
    choices: [
      { text: "Speak with steady, hopeful joy", nextScene: "sunrise", tag: "merciful", feedback: "They rise and follow you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — REALIZATION OF FULFILLMENT
  sunrise: {
    id: "sunrise",
    title: "The Promise Fulfilled",
    text: "The sun crests the hills. Death is undone.\nWhat fills your heart now?",
    choices: [
      { text: "Fear of what comes next", nextScene: "fear_end_consequence", tag: "fearful", feedback: "Hope, not fear, has the last word.", isCorrect: false, sentiment: "negative" },
      { text: "Awe and quiet, rising joy", nextScene: "ending", tag: "humble", feedback: "You lift your face into the light.", isCorrect: true, sentiment: "positive" },
      { text: "Pride that you were first", nextScene: "pride_end_consequence", tag: "prideful", feedback: "Joy belongs to everyone now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  fear_end_consequence: {
    id: "fear_end_consequence",
    title: "Hope Wins",
    text: "Death itself has been undone today.\nNo fear can outlast that light.",
    choices: [
      { text: "Awe and quiet, rising joy", nextScene: "ending", tag: "humble", feedback: "Peace settles over your heart.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pride_end_consequence: {
    id: "pride_end_consequence",
    title: "Joy for All",
    text: "This morning is not a prize won.\nIt is a gift to share with everyone.",
    choices: [
      { text: "Awe and quiet, rising joy", nextScene: "ending", tag: "humble", feedback: "You open your hands to the sky.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "He Is Risen Indeed",
    text: "The grave is empty. The promise stands.\nDeath has lost. Hope has won.",
    choices: [],
    isFinal: true,
  },
};
