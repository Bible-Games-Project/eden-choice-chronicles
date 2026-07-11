import { StoryScene } from "@/data/stories/creation";

// ELISHA AND NAAMAN — 2 Kings 5
// You ARE Naaman. Pride must bow to simple obedience.

export const elishaNaamanScenes: Record<string, StoryScene> = {
  // ACT I — THE COMMANDER'S SHAME
  start: {
    id: "start",
    title: "A Hidden Wound",
    text: "Beneath your armor, the leprosy spreads.\nA young Israelite servant whispers of a prophet.",
    choices: [
      { text: "Curse her foreign god", nextScene: "curse_consequence", tag: "proud", feedback: "Pride keeps your wound hidden.", isCorrect: false, sentiment: "negative" },
      { text: "Hide the disease forever", nextScene: "hide_consequence", tag: "fearful", feedback: "Silence will not heal you.", isCorrect: false, sentiment: "negative" },
      { text: "Listen to the servant girl", nextScene: "journey", tag: "faithful", feedback: "2 Kings 5:3 — The servant girl told her mistress that the prophet in Samaria could cure Naaman of his leprosy.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Soften Your Heart",
    text: "Her words are not a threat.\nThey may be the only door open to you.",
    choices: [
      { text: "Listen to the servant girl", nextScene: "journey", tag: "faithful", feedback: "You set down your pride and listen.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "No More Hiding",
    text: "The mark grows beneath your armor.\nOnly truth can lead to healing.",
    choices: [
      { text: "Listen to the servant girl", nextScene: "journey", tag: "faithful", feedback: "You turn to her quiet voice.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE JOURNEY
  journey: {
    id: "journey",
    title: "Letters and Gold",
    text: "The king sends silver, gold, and a letter.\nThe road to Israel waits.",
    choices: [
      { text: "Demand healing from a king", nextScene: "king_consequence", tag: "proud", feedback: "2 Kings 5:4-6 — Naaman went to the king of Aram, who then sent a letter and gifts to the king of Israel, not directly to the prophet.", isCorrect: true, sentiment: "negative" },
      { text: "Seek out the prophet Elisha", nextScene: "arrival", tag: "faithful", feedback: "The Lord works through His servant.", isCorrect: false, sentiment: "positive" },
    ],
  },
  king_consequence: {
    id: "king_consequence",
    title: "Not by Royal Hand",
    text: "Israel's king tears his robe in fear.\nThe prophet sends word: come to him.",
    choices: [
      { text: "Seek out the prophet Elisha", nextScene: "arrival", tag: "faithful", feedback: "You turn the chariot toward Elisha.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — AT THE PROPHET'S DOOR
  arrival: {
    id: "arrival",
    title: "A Closed Door",
    text: "Your chariot waits at the prophet's house.\nElisha does not come out.",
    choices: [
      { text: "Wait quietly for his word", nextScene: "instruction", tag: "faithful", feedback: "2 Kings 5:10 — Elisha sent a messenger to Naaman with instructions, rather than coming out himself.", isCorrect: true, sentiment: "positive" },
      { text: "Force the door open", nextScene: "force_consequence", tag: "proud", feedback: "Healing is not seized.", isCorrect: false, sentiment: "negative" },
      { text: "Throw gold at the threshold", nextScene: "gold_consequence", tag: "proud", feedback: "Grace is not bought.", isCorrect: false, sentiment: "negative" },
    ],
  },
  force_consequence: {
    id: "force_consequence",
    title: "Lower Your Sword",
    text: "Strength will not heal your skin.\nWait, and listen.",
    choices: [
      { text: "Wait quietly for his word", nextScene: "instruction", tag: "faithful", feedback: "You step back from the door.", isCorrect: true, sentiment: "positive" },
    ],
  },
  gold_consequence: {
    id: "gold_consequence",
    title: "Treasures Will Not Cleanse",
    text: "Your silver cannot reach the wound.\nThe prophet asks no payment.",
    choices: [
      { text: "Wait quietly for his word", nextScene: "instruction", tag: "faithful", feedback: "You gather the coins back in.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE SIMPLE COMMAND
  instruction: {
    id: "instruction",
    title: "Wash Seven Times",
    text: "The messenger speaks for the prophet.\n\"Wash in the Jordan and be clean.\"",
    choices: [
      { text: "Refuse — the rivers at home are better", nextScene: "refuse_consequence", tag: "proud", feedback: "2 Kings 5:11-12 — Naaman was angry and turned away, believing the rivers of Damascus were better than the Jordan.", isCorrect: true, sentiment: "negative" },
      { text: "Demand a grand ceremony", nextScene: "ceremony_consequence", tag: "proud", feedback: "God does not need a stage.", isCorrect: true, sentiment: "negative" },
      { text: "Listen to your servants", nextScene: "jordan", tag: "faithful", feedback: "Humble counsel softens stone.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "If It Were a Great Thing",
    text: "Your servants whisper at your side.\n\"If he had asked something hard, would you not do it?\"",
    choices: [
      { text: "Listen to your servants", nextScene: "jordan", tag: "faithful", feedback: "Their words land deep.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ceremony_consequence: {
    id: "ceremony_consequence",
    title: "Lay Down the Show",
    text: "There is no parade, no fire, no chant.\nOnly muddy water and obedience.",
    choices: [
      { text: "Listen to your servants", nextScene: "jordan", tag: "faithful", feedback: "You let go of the spectacle.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE RIVER
  jordan: {
    id: "jordan",
    title: "Into the Brown Water",
    text: "The Jordan flows slow and muddy.\nYou step in, armor laid aside.",
    choices: [
      { text: "Wash once and turn away", nextScene: "once_consequence", tag: "proud", feedback: "Half-faith leaves you unchanged.", isCorrect: false, sentiment: "negative" },
      { text: "Bow and dip seven times", nextScene: "healed", tag: "faithful", feedback: "2 Kings 5:14 — Naaman went down and dipped himself seven times in the Jordan, according to the word of the man of God.", isCorrect: true, sentiment: "positive" },
    ],
  },
  once_consequence: {
    id: "once_consequence",
    title: "Finish What He Said",
    text: "His word was seven, not one.\nReturn into the water.",
    choices: [
      { text: "Bow and dip seven times", nextScene: "healed", tag: "faithful", feedback: "You sink beneath the current again.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — RESTORED
  healed: {
    id: "healed",
    title: "Skin Like a Child",
    text: "You rise from the water clean.\n\"Now I know the God of Israel is true.\"",
    choices: [],
    isFinal: true,
  },
};
