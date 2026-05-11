import { StoryScene } from "@/data/stories/creation";

// ELIJAH VS PROPHETS OF BAAL — 1 Kings 18
// You ARE Elijah. Truth vs falsehood. Divine fire over empty ritual.

export const elijahBaalScenes: Record<string, StoryScene> = {
  // ACT I — BEFORE THE KING
  start: {
    id: "start",
    title: "The Land Is Dry",
    text: "King Ahab burns with anger.\n\"You troubler of Israel, where is your God?\"",
    choices: [
      { text: "Bow to Baal in fear", nextScene: "bow_consequence", tag: "fearful", feedback: "Fear must not silence truth.", isCorrect: false, sentiment: "negative" },
      { text: "Call Israel to Mount Carmel", nextScene: "carmel_call", tag: "faithful", feedback: "Let the Lord answer by fire.", isCorrect: true, sentiment: "positive" },
      { text: "Flee the king's court", nextScene: "flee_consequence", tag: "fearful", feedback: "A prophet must stand and speak.", isCorrect: false, sentiment: "negative" },
    ],
  },
  bow_consequence: {
    id: "bow_consequence",
    title: "Stand for the Lord",
    text: "Silence is not faith.\nThe people need to see whom to follow.",
    choices: [
      { text: "Call Israel to Mount Carmel", nextScene: "carmel_call", tag: "faithful", feedback: "You raise your voice without trembling.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Turn Back",
    text: "The Lord did not send you to hide.\nReturn and summon the nation.",
    choices: [
      { text: "Call Israel to Mount Carmel", nextScene: "carmel_call", tag: "faithful", feedback: "You walk back into the storm.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE GATHERING
  carmel_call: {
    id: "carmel_call",
    title: "How Long Will You Limp?",
    text: "Israel waits between two gods.\n\"Choose this day whom you serve.\"",
    choices: [
      { text: "Let Baal's prophets go first", nextScene: "baal_pray", tag: "faithful", feedback: "Truth need not rush.", isCorrect: true, sentiment: "positive" },
      { text: "Light your altar in secret", nextScene: "secret_consequence", tag: "deceit", feedback: "God needs no trickery.", isCorrect: false, sentiment: "negative" },
    ],
  },
  secret_consequence: {
    id: "secret_consequence",
    title: "In the Open",
    text: "Hidden flames prove nothing.\nLet the Lord be seen by all.",
    choices: [
      { text: "Let Baal's prophets go first", nextScene: "baal_pray", tag: "faithful", feedback: "You step back and let them call.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE SILENCE OF BAAL
  baal_pray: {
    id: "baal_pray",
    title: "No Voice, No Answer",
    text: "From dawn to noon they cry.\nTheir altar stands cold and still.",
    choices: [
      { text: "Mock their lifeless god", nextScene: "elijah_altar", tag: "bold", feedback: "Truth exposes empty ritual.", isCorrect: true, sentiment: "positive" },
      { text: "Pity them and end it", nextScene: "pity_consequence", tag: "soft", feedback: "Let the silence finish its work.", isCorrect: false, sentiment: "negative" },
      { text: "Walk away in disgust", nextScene: "walk_consequence", tag: "fearful", feedback: "The contest is not yet won.", isCorrect: false, sentiment: "negative" },
    ],
  },
  pity_consequence: {
    id: "pity_consequence",
    title: "Let It Be Seen",
    text: "Israel must hear the silence in full.\nThen the truth will burn brighter.",
    choices: [
      { text: "Mock their lifeless god", nextScene: "elijah_altar", tag: "bold", feedback: "You raise your voice with fire.", isCorrect: true, sentiment: "positive" },
    ],
  },
  walk_consequence: {
    id: "walk_consequence",
    title: "Stay Until the End",
    text: "The Lord's hour has not come.\nReturn to the altar.",
    choices: [
      { text: "Mock their lifeless god", nextScene: "elijah_altar", tag: "bold", feedback: "You face the silent stones again.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE ALTAR OF THE LORD
  elijah_altar: {
    id: "elijah_altar",
    title: "Twelve Stones",
    text: "You rebuild the altar of the Lord.\nThe people draw near in hush.",
    choices: [
      { text: "Drench it with water three times", nextScene: "elijah_pray", tag: "faithful", feedback: "Leave no room for doubt.", isCorrect: true, sentiment: "positive" },
      { text: "Hide oil beneath the wood", nextScene: "oil_consequence", tag: "deceit", feedback: "The Lord needs no help.", isCorrect: false, sentiment: "negative" },
      { text: "Light it yourself quickly", nextScene: "light_consequence", tag: "proud", feedback: "Wait for fire from heaven.", isCorrect: false, sentiment: "negative" },
    ],
  },
  oil_consequence: {
    id: "oil_consequence",
    title: "Pure Witness",
    text: "Trickery would shame the truth.\nLet only water touch the wood.",
    choices: [
      { text: "Drench it with water three times", nextScene: "elijah_pray", tag: "faithful", feedback: "The jars pour and pour.", isCorrect: true, sentiment: "positive" },
    ],
  },
  light_consequence: {
    id: "light_consequence",
    title: "Hands Off the Flame",
    text: "Only the Lord may answer here.\nStep back from the wood.",
    choices: [
      { text: "Drench it with water three times", nextScene: "elijah_pray", tag: "faithful", feedback: "The trench fills to the brim.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE PRAYER
  elijah_pray: {
    id: "elijah_pray",
    title: "Answer Me, O Lord",
    text: "Evening light falls on the altar.\nYou lift your voice once, in peace.",
    choices: [
      { text: "Shout louder than Baal's prophets", nextScene: "shout_consequence", tag: "proud", feedback: "God hears the quiet heart.", isCorrect: false, sentiment: "negative" },
      { text: "Pray that hearts may turn", nextScene: "fire_falls", tag: "faithful", feedback: "Prayer for souls moves heaven.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Not by Volume",
    text: "The Lord is not the storm of voices.\nSpeak as a son to a Father.",
    choices: [
      { text: "Pray that hearts may turn", nextScene: "fire_falls", tag: "faithful", feedback: "Your voice softens and rises.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — FIRE FROM HEAVEN
  fire_falls: {
    id: "fire_falls",
    title: "The Fire of God",
    text: "Flame tears down from the sky.\nWater, wood, and stones — all consumed.",
    choices: [
      { text: "Take credit before the crowd", nextScene: "credit_consequence", tag: "proud", feedback: "Glory belongs to God alone.", isCorrect: false, sentiment: "negative" },
      { text: "Point them to the true God", nextScene: "ending", tag: "faithful", feedback: "Let every face turn upward.", isCorrect: true, sentiment: "positive" },
    ],
  },
  credit_consequence: {
    id: "credit_consequence",
    title: "Lift His Name",
    text: "You did not bring the fire.\nGive the people the One they need.",
    choices: [
      { text: "Point them to the true God", nextScene: "ending", tag: "faithful", feedback: "You raise your hands to heaven.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — THE LORD, HE IS GOD
  ending: {
    id: "ending",
    title: "The Lord, He Is God",
    text: "The crowd falls upon their faces.\n\"The Lord — He is God! He is God!\"",
    choices: [],
    isFinal: true,
  },
};
