import { StoryScene } from "@/data/stories/creation";

// SIN OF ACHAN — Joshua 7
// You ARE Joshua. Hidden sin brings collective consequences.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const sinAchanScenes: Record<string, StoryScene> = {
  // ============ ACT I — AFTER JERICHO ============
  start: {
    id: "start",
    title: "After the Walls Fell",
    text: "Jericho lies in dust at your feet.\nThe Lord forbade all spoils.",
    choices: [
      { text: "Take some gold for the camp", nextScene: "take_consequence", tag: "greedy", feedback: "His command was absolute.", isCorrect: false, sentiment: "negative" },
      { text: "Devote everything to the Lord", nextScene: "warn_camp", tag: "obedient", feedback: "Joshua 6:17-19 — The Lord commanded that Jericho and everything in it be devoted to Him, with only the silver, gold, bronze, and iron vessels going into the Lord's treasury.", isCorrect: true, sentiment: "positive" },
      { text: "Let each man keep a token", nextScene: "token_consequence", tag: "permissive", feedback: "One stolen thread defiles all.", isCorrect: false, sentiment: "negative" },
    ],
  },
  take_consequence: {
    id: "take_consequence",
    title: "Nothing Is Yours",
    text: "What is devoted belongs to Him.\nNot one shekel for your hand.",
    choices: [
      { text: "Devote everything to the Lord", nextScene: "warn_camp", tag: "obedient", feedback: "You drop the gold from your fingers.", isCorrect: true, sentiment: "positive" },
    ],
  },
  token_consequence: {
    id: "token_consequence",
    title: "No Exceptions",
    text: "A small theft poisons the whole.\nThe ban allows no token.",
    choices: [
      { text: "Devote everything to the Lord", nextScene: "warn_camp", tag: "obedient", feedback: "You command the ranks to leave it.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE HIDDEN SIN ============
  warn_camp: {
    id: "warn_camp",
    title: "A Whisper in the Camp",
    text: "Yet one man bends in his tent.\nA cloak. Silver. Buried gold.",
    choices: [
      { text: "Ignore the rumor of theft", nextScene: "ignore_consequence", tag: "negligent", feedback: "Hidden sin will not stay hidden.", isCorrect: false, sentiment: "negative" },
      { text: "Send scouts ahead to small Ai", nextScene: "ai_battle", tag: "proud", feedback: "You move without seeking Him.", isCorrect: false, sentiment: "negative" },
      { text: "Seek the Lord before the next step", nextScene: "seek_lord", tag: "faithful", feedback: "Joshua 7:1 — Achan took some of the devoted things, which was an act of unfaithfulness against the Lord.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Sin Cannot Hide",
    text: "What is buried still defiles.\nThe camp is not as it seems.",
    choices: [
      { text: "Seek the Lord before the next step", nextScene: "seek_lord", tag: "faithful", feedback: "You turn toward the tent of meeting.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — DEFEAT AT AI ============
  ai_battle: {
    id: "ai_battle",
    title: "The Hill of Ai",
    text: "Three thousand men climb proud.\nThirty-six fall. The rest flee.",
    choices: [
      { text: "Blame the soldiers' weakness", nextScene: "blame_consequence", tag: "proud", feedback: "The fault is deeper than swords.", isCorrect: false, sentiment: "negative" },
      { text: "Tear your robe before the ark", nextScene: "joshua_grief", tag: "humble", feedback: "Joshua 7:6 — Joshua tore his clothes and fell facedown before the ark of the Lord until evening, along with the elders of Israel.", isCorrect: true, sentiment: "positive" },
      { text: "Order an immediate counter-attack", nextScene: "counter_consequence", tag: "willful", feedback: "He has withdrawn His hand. Wait.", isCorrect: false, sentiment: "negative" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Look Higher",
    text: "Their arms did not fail today.\nSomething among you has.",
    choices: [
      { text: "Tear your robe before the ark", nextScene: "joshua_grief", tag: "humble", feedback: "You sink to the dust in mourning.", isCorrect: true, sentiment: "positive" },
    ],
  },
  counter_consequence: {
    id: "counter_consequence",
    title: "Not Without Him",
    text: "You charge again, but no breath of victory comes.\nTurn back.",
    choices: [
      { text: "Tear your robe before the ark", nextScene: "joshua_grief", tag: "humble", feedback: "You lay down arms and cry out.", isCorrect: true, sentiment: "positive" },
    ],
  },
  seek_lord: {
    id: "seek_lord",
    title: "Before the Battle",
    text: "He answers: \"Israel has sinned.\"\nDefeat already waits at Ai.",
    choices: [
      { text: "Tear your robe before the ark", nextScene: "joshua_grief", tag: "humble", feedback: "You fall on your face in grief.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — GRIEF & INVESTIGATION ============
  joshua_grief: {
    id: "joshua_grief",
    title: "Why, O Lord?",
    text: "He answers: rise, sin is in the camp.\nIt must be brought to light.",
    choices: [
      { text: "Hush the matter to keep peace", nextScene: "hush_consequence", tag: "fearful", feedback: "Silence will cost more lives.", isCorrect: false, sentiment: "negative" },
      { text: "Gather the tribes for inquiry", nextScene: "investigation", tag: "obedient", feedback: "Joshua 7:13 — The Lord commanded Joshua to consecrate the people and to identify the one who had taken the devoted things.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hush_consequence: {
    id: "hush_consequence",
    title: "Truth Must Stand",
    text: "He will not march beside hidden sin.\nBring it into the day.",
    choices: [
      { text: "Gather the tribes for inquiry", nextScene: "investigation", tag: "obedient", feedback: "You summon the elders at dawn.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — REVELATION ============
  investigation: {
    id: "investigation",
    title: "Tribe by Tribe",
    text: "Lots are cast. Judah is taken.\nThen the clan. Then the man.",
    choices: [
      { text: "Stop before the name is spoken", nextScene: "stop_consequence", tag: "fearful", feedback: "His justice cannot be halted now.", isCorrect: false, sentiment: "negative" },
      { text: "Press on until truth is named", nextScene: "achan_revealed", tag: "just", feedback: "Joshua 7:16-18 — Joshua brought Israel by tribes, then by clans, then by families, until Achan was singled out.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stop_consequence: {
    id: "stop_consequence",
    title: "Justice Will Out",
    text: "What He has begun, He finishes.\nLet truth speak its full word.",
    choices: [
      { text: "Press on until truth is named", nextScene: "achan_revealed", tag: "just", feedback: "You nod to the priests to continue.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — CONFESSION & CONSEQUENCE ============
  achan_revealed: {
    id: "achan_revealed",
    title: "\"My Son, Confess\"",
    text: "Achan speaks: a cloak, silver, gold.\nBuried beneath his tent floor.",
    choices: [
      { text: "Excuse him, the loss was small", nextScene: "excuse_consequence", tag: "lenient", feedback: "Sin is never small to a holy God.", isCorrect: false, sentiment: "negative" },
      { text: "Carry out the Lord's judgment", nextScene: "ending_obedient", tag: "obedient", feedback: "Joshua 7:25 — Joshua and all Israel took Achan, the silver, the cloak, the gold, his sons, daughters, oxen, donkeys, sheep, tent, and everything he had, to the Valley of Achor.", isCorrect: true, sentiment: "positive" },
      { text: "Hide the items and move on", nextScene: "hide_consequence", tag: "deceptive", feedback: "Concealment will only spread the rot.", isCorrect: false, sentiment: "negative" },
    ],
  },
  excuse_consequence: {
    id: "excuse_consequence",
    title: "The Whole Camp Bears It",
    text: "Mercy without justice keeps the curse.\nThe Lord's word must stand.",
    choices: [
      { text: "Carry out the Lord's judgment", nextScene: "ending_obedient", tag: "obedient", feedback: "You give the solemn order.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "No More Hiding",
    text: "Hidden sin already cost lives.\nIt cannot be buried again.",
    choices: [
      { text: "Carry out the Lord's judgment", nextScene: "ending_obedient", tag: "obedient", feedback: "You step into the light of obedience.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ENDING ============
  ending_obedient: {
    id: "ending_obedient",
    title: "The Valley of Achor",
    text: "The camp is cleansed. Stones rise as a witness.\nThe Lord turns from His anger.",
    choices: [],
    isFinal: true,
  },
};
