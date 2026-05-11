import { StoryScene } from "@/data/stories/creation";

// DAVID AND SAUL — 1 Samuel 18–24
// You ARE David. Jealousy, fear, restraint and moral integrity.

export const davidSaulScenes: Record<string, StoryScene> = {
  // ACT I — DAVID IN SAUL'S COURT
  start: {
    id: "start",
    title: "The King's Harp",
    text: "Saul's eyes are dark and tired.\nThe harp waits in your hands.",
    choices: [
      { text: "Mock his troubled mind", nextScene: "mock_consequence", tag: "proud", feedback: "A servant does not scorn the king.", isCorrect: false, sentiment: "negative" },
      { text: "Play softly to soothe him", nextScene: "jealousy", tag: "faithful", feedback: "The notes calm his heart.", isCorrect: true, sentiment: "positive" },
      { text: "Demand a higher seat", nextScene: "demand_consequence", tag: "proud", feedback: "Pride poisons your gift.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Honor the King",
    text: "Even a jealous king is the Lord's anointed.\nServe with humility.",
    choices: [
      { text: "Play softly to soothe him", nextScene: "jealousy", tag: "faithful", feedback: "You bow your head and play.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Lay Down Your Pride",
    text: "Greatness comes through service.\nReturn to your task.",
    choices: [
      { text: "Play softly to soothe him", nextScene: "jealousy", tag: "faithful", feedback: "Your fingers find the strings.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — JEALOUSY GROWS
  jealousy: {
    id: "jealousy",
    title: "The Women Sing",
    text: "\"Saul slew thousands, David tens of thousands.\"\nSaul's face turns to stone.",
    choices: [
      { text: "Boast of your victories", nextScene: "boast_consequence", tag: "proud", feedback: "Words like these light a fire.", isCorrect: false, sentiment: "negative" },
      { text: "Stay quiet and serve faithfully", nextScene: "spear", tag: "faithful", feedback: "You lower your eyes.", isCorrect: true, sentiment: "positive" },
      { text: "Shame the king openly", nextScene: "shame_consequence", tag: "rash", feedback: "Do not strike at the crown.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Quiet Your Tongue",
    text: "Glory belongs to God alone.\nLet humility answer.",
    choices: [
      { text: "Stay quiet and serve faithfully", nextScene: "spear", tag: "faithful", feedback: "You hold your peace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shame_consequence: {
    id: "shame_consequence",
    title: "Honor Above Anger",
    text: "Saul is still the Lord's anointed.\nSpeak nothing against him.",
    choices: [
      { text: "Stay quiet and serve faithfully", nextScene: "spear", tag: "faithful", feedback: "You bow and step aside.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE SPEAR
  spear: {
    id: "spear",
    title: "Spear in the Air",
    text: "Saul's spear flies past your head.\nIt buries deep in the wall.",
    choices: [
      { text: "Draw your sword on the king", nextScene: "sword_consequence", tag: "rash", feedback: "Never lift a hand against him.", isCorrect: false, sentiment: "negative" },
      { text: "Curse Saul and storm out", nextScene: "curse_consequence", tag: "proud", feedback: "Anger is not your weapon.", isCorrect: false, sentiment: "negative" },
      { text: "Slip away in silence", nextScene: "jonathan_warns", tag: "faithful", feedback: "You leave without a word.", isCorrect: true, sentiment: "positive" },
    ],
  },
  sword_consequence: {
    id: "sword_consequence",
    title: "Stay Your Hand",
    text: "The Lord chose Saul.\nDo not take what God will give.",
    choices: [
      { text: "Slip away in silence", nextScene: "jonathan_warns", tag: "faithful", feedback: "You sheathe your blade.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Hold Your Tongue",
    text: "Cursing him will not free you.\nLeave with quiet dignity.",
    choices: [
      { text: "Slip away in silence", nextScene: "jonathan_warns", tag: "faithful", feedback: "You step into the corridor.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — JONATHAN'S WARNING
  jonathan_warns: {
    id: "jonathan_warns",
    title: "A Friend in the Field",
    text: "Jonathan grips your arm.\n\"My father seeks your life. Run.\"",
    choices: [
      { text: "Trust Jonathan and flee", nextScene: "flee", tag: "faithful", feedback: "True friendship is from God.", isCorrect: true, sentiment: "positive" },
      { text: "Return to confront Saul", nextScene: "confront_consequence", tag: "rash", feedback: "Do not walk into the spear.", isCorrect: false, sentiment: "negative" },
      { text: "Doubt Jonathan's loyalty", nextScene: "doubt_consequence", tag: "fearful", feedback: "He risks all to save you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  confront_consequence: {
    id: "confront_consequence",
    title: "Do Not Return",
    text: "Saul's heart is closed for now.\nThe Lord has another path.",
    choices: [
      { text: "Trust Jonathan and flee", nextScene: "flee", tag: "faithful", feedback: "You take his counsel to heart.", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust His Love",
    text: "Jonathan's covenant is your shield.\nReceive his warning.",
    choices: [
      { text: "Trust Jonathan and flee", nextScene: "flee", tag: "faithful", feedback: "You clasp his hand and go.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — INTO THE WILDERNESS
  flee: {
    id: "flee",
    title: "Into the Wilderness",
    text: "Saul's army hunts the red canyons.\nYour men whisper of vengeance.",
    choices: [
      { text: "Raise a war band against Saul", nextScene: "war_consequence", tag: "rash", feedback: "Do not fight the Lord's anointed.", isCorrect: false, sentiment: "negative" },
      { text: "Hide in the hills and pray", nextScene: "cave", tag: "faithful", feedback: "You wait on the Lord.", isCorrect: true, sentiment: "positive" },
      { text: "Flee to a foreign king", nextScene: "foreign_consequence", tag: "fearful", feedback: "Trust God, not strangers.", isCorrect: false, sentiment: "negative" },
    ],
  },
  war_consequence: {
    id: "war_consequence",
    title: "Lay Down the Sword",
    text: "Civil blood would stain your name.\nSeek the Lord instead.",
    choices: [
      { text: "Hide in the hills and pray", nextScene: "cave", tag: "faithful", feedback: "You climb the rocky path.", isCorrect: true, sentiment: "positive" },
    ],
  },
  foreign_consequence: {
    id: "foreign_consequence",
    title: "Stay Near the Lord",
    text: "Foreign kings cannot keep you.\nGod alone is your refuge.",
    choices: [
      { text: "Hide in the hills and pray", nextScene: "cave", tag: "faithful", feedback: "You turn back toward the wilderness.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE CAVE OF EN GEDI
  cave: {
    id: "cave",
    title: "Saul Sleeps Within Reach",
    text: "Saul lies asleep in your cave.\nYour men whisper, \"God has given him.\"",
    choices: [
      { text: "Strike Saul down now", nextScene: "strike_consequence", tag: "rash", feedback: "Never harm the Lord's anointed.", isCorrect: false, sentiment: "negative" },
      { text: "Wake him with angry words", nextScene: "wake_consequence", tag: "proud", feedback: "Show mercy without malice.", isCorrect: false, sentiment: "negative" },
      { text: "Cut only the corner of his robe", nextScene: "mercy_call", tag: "faithful", feedback: "Restraint speaks louder than blood.", isCorrect: true, sentiment: "positive" },
    ],
  },
  strike_consequence: {
    id: "strike_consequence",
    title: "Stay Your Blade",
    text: "Vengeance belongs to God.\nLet mercy be your witness.",
    choices: [
      { text: "Cut only the corner of his robe", nextScene: "mercy_call", tag: "faithful", feedback: "Your knife trembles, then turns.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wake_consequence: {
    id: "wake_consequence",
    title: "Speak with Honor",
    text: "Anger will twist a true witness.\nLet your deed speak first.",
    choices: [
      { text: "Cut only the corner of his robe", nextScene: "mercy_call", tag: "faithful", feedback: "You crouch silently beside him.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — THE CLIFF CALL
  mercy_call: {
    id: "mercy_call",
    title: "I Could Have Killed You",
    text: "From the cliff you raise the cloak.\nSaul weeps. \"You are more righteous than I.\"",
    choices: [],
    isFinal: true,
  },
};
