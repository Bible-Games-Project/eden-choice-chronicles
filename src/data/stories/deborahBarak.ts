import { StoryScene } from "@/data/stories/creation";

// DEBORAH AND BARAK — Judges 4-5
// You ARE Deborah. Faith-driven leadership, courage, divine victory.

export const deborahBarakScenes: Record<string, StoryScene> = {
  // ACT I — JUDGING UNDER THE PALM
  start: {
    id: "start",
    title: "Under the Palm of Deborah",
    text: "Israel comes to you for judgment.\nThe Lord's word burns in your heart.",
    choices: [
      { text: "Send the people away unheard", nextScene: "ignore_consequence", tag: "neglectful", feedback: "His people need a voice.", isCorrect: false, sentiment: "negative" },
      { text: "Listen and judge with His wisdom", nextScene: "call_barak", tag: "faithful", feedback: "Your words bring peace.", isCorrect: true, sentiment: "positive" },
      { text: "Judge by your own opinion", nextScene: "self_consequence", tag: "proud", feedback: "Lean not on your own mind.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "They Still Come",
    text: "His call cannot be silenced.\nReturn to your seat of judgment.",
    choices: [
      { text: "Listen and judge with His wisdom", nextScene: "call_barak", tag: "faithful", feedback: "You take your place again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  self_consequence: {
    id: "self_consequence",
    title: "Not Your Wisdom",
    text: "His Spirit must speak through you.\nQuiet your heart and listen.",
    choices: [
      { text: "Listen and judge with His wisdom", nextScene: "call_barak", tag: "faithful", feedback: "His voice fills your silence.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — CALLING BARAK
  call_barak: {
    id: "call_barak",
    title: "The Lord's Command",
    text: "Sisera oppresses Israel with iron.\nThe Lord names Barak as captain.",
    choices: [
      { text: "Lead the army yourself instead", nextScene: "lead_consequence", tag: "willful", feedback: "His chosen must be called.", isCorrect: false, sentiment: "negative" },
      { text: "Summon Barak to receive the word", nextScene: "barak_arrives", tag: "obedient", feedback: "You send word to Kedesh.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lead_consequence: {
    id: "lead_consequence",
    title: "His Order, Not Yours",
    text: "The Lord has chosen Barak.\nObey the calling He has given.",
    choices: [
      { text: "Summon Barak to receive the word", nextScene: "barak_arrives", tag: "obedient", feedback: "Messengers ride at dawn.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — BARAK HESITATES
  barak_arrives: {
    id: "barak_arrives",
    title: "Barak Hesitates",
    text: "\"I will go only if you go.\"\nHis faith leans on your presence.",
    choices: [
      { text: "Refuse and shame his weakness", nextScene: "refuse_consequence", tag: "harsh", feedback: "Lift him; do not crush him.", isCorrect: false, sentiment: "negative" },
      { text: "Mock him before the elders", nextScene: "mock_consequence", tag: "proud", feedback: "Pride builds no army.", isCorrect: false, sentiment: "negative" },
      { text: "Agree to go with him", nextScene: "march_to_tabor", tag: "courageous", feedback: "You will stand beside him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Strengthen His Hand",
    text: "Faith grows when leaders walk together.\nGo with him to the battle.",
    choices: [
      { text: "Agree to go with him", nextScene: "march_to_tabor", tag: "courageous", feedback: "You take up your staff.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Lead, Do Not Wound",
    text: "Your presence is His gift to him.\nWalk beside, not above.",
    choices: [
      { text: "Agree to go with him", nextScene: "march_to_tabor", tag: "courageous", feedback: "You step toward Tabor.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — MOUNT TABOR
  march_to_tabor: {
    id: "march_to_tabor",
    title: "Ten Thousand on Tabor",
    text: "Sisera's chariots gather below.\nThe army watches you for a sign.",
    choices: [
      { text: "Wait for better odds and weapons", nextScene: "wait_consequence", tag: "fearful", feedback: "His timing is your strength.", isCorrect: false, sentiment: "negative" },
      { text: "Declare the Lord goes before you", nextScene: "battle_kishon", tag: "faithful", feedback: "Your voice rings clear.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Now Is the Hour",
    text: "He has delivered them already.\nLift the banner and descend.",
    choices: [
      { text: "Declare the Lord goes before you", nextScene: "battle_kishon", tag: "faithful", feedback: "Hope kindles in every heart.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — BATTLE AT KISHON
  battle_kishon: {
    id: "battle_kishon",
    title: "Down Into the Plain",
    text: "Storm clouds darken the river.\nChariots sink in the rising mud.",
    choices: [
      { text: "Hold back, fearing the chariots", nextScene: "hold_consequence", tag: "fearful", feedback: "He fights for you today.", isCorrect: false, sentiment: "negative" },
      { text: "Charge in the strength He gives", nextScene: "victory", tag: "courageous", feedback: "Israel sweeps down the slope.", isCorrect: true, sentiment: "positive" },
      { text: "Negotiate peace with Sisera", nextScene: "negotiate_consequence", tag: "compromise", feedback: "His enemy will not be reasoned with.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hold_consequence: {
    id: "hold_consequence",
    title: "Iron Cannot Stand Today",
    text: "The Lord has shaken their wheels.\nDo not waste His mercy.",
    choices: [
      { text: "Charge in the strength He gives", nextScene: "victory", tag: "courageous", feedback: "You sound the advance.", isCorrect: true, sentiment: "positive" },
    ],
  },
  negotiate_consequence: {
    id: "negotiate_consequence",
    title: "No Truce With Tyranny",
    text: "Sisera will not free His people.\nThe Lord has handed him over.",
    choices: [
      { text: "Charge in the strength He gives", nextScene: "victory", tag: "courageous", feedback: "You raise your hand and call.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — VICTORY
  victory: {
    id: "victory",
    title: "Sisera's Army Falls",
    text: "Not one chariot remains standing.\nIsrael breathes free again.",
    choices: [
      { text: "Take credit for the victory", nextScene: "credit_consequence", tag: "proud", feedback: "His arm, not yours.", isCorrect: false, sentiment: "negative" },
      { text: "Sing praise to the Lord", nextScene: "ending_faithful", tag: "humble", feedback: "Your song rises with Barak's.", isCorrect: true, sentiment: "positive" },
    ],
  },
  credit_consequence: {
    id: "credit_consequence",
    title: "His Glory Alone",
    text: "No sword of yours broke them.\nLift His name above your own.",
    choices: [
      { text: "Sing praise to the Lord", nextScene: "ending_faithful", tag: "humble", feedback: "You bow your head in song.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending_faithful: {
    id: "ending_faithful",
    title: "The Land Has Rest",
    text: "Forty years of peace will follow.\nFaith led where fear could not.",
    choices: [],
    isFinal: true,
  },
};
