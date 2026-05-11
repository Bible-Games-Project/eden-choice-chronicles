import { StoryScene } from "@/data/stories/creation";

// GIDEON — Judges 6-7
// You ARE Gideon. Faith overcoming fear, God using weakness for victory.

export const gideonScenes: Record<string, StoryScene> = {
  // ACT I — HIDING IN THE WINEPRESS
  start: {
    id: "start",
    title: "Hidden in the Winepress",
    text: "Midianites raid the harvest.\nYou thresh wheat in secret, afraid.",
    choices: [
      { text: "Curse the Lord for His silence", nextScene: "curse_consequence", tag: "bitter", feedback: "He has not abandoned you.", isCorrect: false, sentiment: "negative" },
      { text: "Quietly cry out to the Lord", nextScene: "angel_call", tag: "humble", feedback: "Your whisper reaches Him.", isCorrect: true, sentiment: "positive" },
      { text: "Flee with what little remains", nextScene: "flee_consequence", tag: "fearful", feedback: "He is calling you to stay.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "He Still Hears",
    text: "Bitterness will not feed Israel.\nTurn your heart toward Him.",
    choices: [
      { text: "Quietly cry out to the Lord", nextScene: "angel_call", tag: "humble", feedback: "Peace settles in you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "He Calls You Back",
    text: "Running cannot save your people.\nLift your eyes from the floor.",
    choices: [
      { text: "Quietly cry out to the Lord", nextScene: "angel_call", tag: "humble", feedback: "You stop and listen.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE ANGEL CALLS
  angel_call: {
    id: "angel_call",
    title: "Mighty Warrior",
    text: "\"The Lord is with you, mighty one.\"\nThe words shake your trembling heart.",
    choices: [
      { text: "Laugh and dismiss the angel", nextScene: "dismiss_consequence", tag: "proud", feedback: "Do not mock His messenger.", isCorrect: false, sentiment: "negative" },
      { text: "Insist you are too weak", nextScene: "weak_consequence", tag: "doubting", feedback: "His strength is your answer.", isCorrect: false, sentiment: "negative" },
      { text: "Bow and accept His calling", nextScene: "fleece_test", tag: "obedient", feedback: "You kneel before the flame.", isCorrect: true, sentiment: "positive" },
    ],
  },
  dismiss_consequence: {
    id: "dismiss_consequence",
    title: "The Fire Remains",
    text: "His sign burns on the rock.\nThis call will not pass you by.",
    choices: [
      { text: "Bow and accept His calling", nextScene: "fleece_test", tag: "obedient", feedback: "You bow your head low.", isCorrect: true, sentiment: "positive" },
    ],
  },
  weak_consequence: {
    id: "weak_consequence",
    title: "His Power, Not Yours",
    text: "He chose you because you are small.\nLet Him be strong through you.",
    choices: [
      { text: "Bow and accept His calling", nextScene: "fleece_test", tag: "obedient", feedback: "Your hands stop shaking.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE FLEECE
  fleece_test: {
    id: "fleece_test",
    title: "A Sign on the Fleece",
    text: "Doubt still gnaws at your heart.\nYou lay the wool on the ground.",
    choices: [
      { text: "Ask humbly for His confirmation", nextScene: "army_reduction", tag: "humble", feedback: "By dawn, the wool is wet.", isCorrect: true, sentiment: "positive" },
      { text: "Demand a sign as proof of power", nextScene: "demand_consequence", tag: "proud", feedback: "Ask, do not command.", isCorrect: false, sentiment: "negative" },
      { text: "Ignore your doubts and march", nextScene: "ignore_consequence", tag: "rash", feedback: "Faith and prayer must walk together.", isCorrect: false, sentiment: "negative" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Ask in Reverence",
    text: "He grants signs to the humble.\nKneel and ask, do not demand.",
    choices: [
      { text: "Ask humbly for His confirmation", nextScene: "army_reduction", tag: "humble", feedback: "Dew gathers on the fleece.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Bring Him Your Doubt",
    text: "He answers honest questions.\nLay your fear before Him.",
    choices: [
      { text: "Ask humbly for His confirmation", nextScene: "army_reduction", tag: "humble", feedback: "His sign comes with the morning.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — REDUCTION OF THE ARMY
  army_reduction: {
    id: "army_reduction",
    title: "The Spring of Harod",
    text: "\"Your army is too many,\" He says.\nThirty-two thousand wait behind you.",
    choices: [
      { text: "Refuse — you need every man", nextScene: "refuse_consequence", tag: "fearful", feedback: "His count is not your count.", isCorrect: false, sentiment: "negative" },
      { text: "Send home the fearful and watchful", nextScene: "night_attack", tag: "obedient", feedback: "Three hundred remain.", isCorrect: true, sentiment: "positive" },
      { text: "Hide some in the hills as backup", nextScene: "hide_consequence", tag: "doubting", feedback: "He needs no hidden reserves.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "He Saves By Few",
    text: "If you keep the many, you steal His glory.\nObey and trim the ranks.",
    choices: [
      { text: "Send home the fearful and watchful", nextScene: "night_attack", tag: "obedient", feedback: "The camp grows still and small.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "His Plan Is Enough",
    text: "Trust the few He has chosen.\nHidden men reveal hidden fear.",
    choices: [
      { text: "Send home the fearful and watchful", nextScene: "night_attack", tag: "obedient", feedback: "Only three hundred remain.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE NIGHT ATTACK
  night_attack: {
    id: "night_attack",
    title: "Three Hundred at Midnight",
    text: "The Midianite camp sprawls below.\nTorches in jars, trumpets in hand.",
    choices: [
      { text: "Charge the camp in silent steel", nextScene: "charge_consequence", tag: "rash", feedback: "His way is not the sword first.", isCorrect: false, sentiment: "negative" },
      { text: "Wait for daylight and reinforcements", nextScene: "wait_consequence", tag: "fearful", feedback: "Now is the hour He gave.", isCorrect: false, sentiment: "negative" },
      { text: "Break the jars and sound the trumpets", nextScene: "victory", tag: "obedient", feedback: "Light and sound flood the valley.", isCorrect: true, sentiment: "positive" },
    ],
  },
  charge_consequence: {
    id: "charge_consequence",
    title: "His Plan, His Victory",
    text: "Steel alone will not break them.\nObey the strange command.",
    choices: [
      { text: "Break the jars and sound the trumpets", nextScene: "victory", tag: "obedient", feedback: "You raise the clay jar high.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "The Hour Is Now",
    text: "He has shaken them in their dreams.\nDo not waste the night He gave.",
    choices: [
      { text: "Break the jars and sound the trumpets", nextScene: "victory", tag: "obedient", feedback: "You signal the three hundred.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE LORD'S VICTORY
  victory: {
    id: "victory",
    title: "The Sword of the Lord",
    text: "Midian turns sword on Midian.\nThe vast camp scatters into the dark.",
    choices: [
      { text: "Give the glory to the Lord alone", nextScene: "ending_faithful", tag: "humble", feedback: "Your shout joins three hundred.", isCorrect: true, sentiment: "positive" },
      { text: "Boast of your clever battle plan", nextScene: "boast_consequence", tag: "proud", feedback: "His arm broke them, not yours.", isCorrect: false, sentiment: "negative" },
      { text: "Demand a crown from the people", nextScene: "crown_consequence", tag: "proud", feedback: "The Lord shall rule over you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Lift His Name",
    text: "Three hundred could never have done this.\nGive Him every word of praise.",
    choices: [
      { text: "Give the glory to the Lord alone", nextScene: "ending_faithful", tag: "humble", feedback: "You bow as the camp burns.", isCorrect: true, sentiment: "positive" },
    ],
  },
  crown_consequence: {
    id: "crown_consequence",
    title: "He Is the King",
    text: "No throne belongs in your hand.\nReturn the glory to its Owner.",
    choices: [
      { text: "Give the glory to the Lord alone", nextScene: "ending_faithful", tag: "humble", feedback: "You lay the crown back down.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending_faithful: {
    id: "ending_faithful",
    title: "The Land Has Peace",
    text: "Forty years of quiet will follow.\nFear became faith, weakness His power.",
    choices: [],
    isFinal: true,
  },
};
