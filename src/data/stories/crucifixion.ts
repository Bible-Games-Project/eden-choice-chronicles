import { StoryScene } from "@/data/stories/creation";

// CRUCIFIXION — Matthew 27:32-44, Mark 15:21-32, Luke 23:26-43, John 19:16-27
// You ARE Jesus. Focus: sacrifice, suffering, forgiveness.
// Stops BEFORE death (story #46). Dialogue ≤100 chars, choices ≤40 chars.

export const crucifixionScenes: Record<string, StoryScene> = {
  // ACT I — LED OUT
  start: {
    id: "start",
    title: "Led to the Hill",
    text: "Soldiers push you through the city gate.\nThe cross beam waits on your shoulders.",
    choices: [
      { text: "Curse the soldiers for their cruelty", nextScene: "curse_consequence", tag: "rash", feedback: "Wrath is not your weapon today.", isCorrect: false, sentiment: "negative" },
      { text: "Accept the beam in silence", nextScene: "carrying", tag: "obedient", feedback: "Wood meets your shoulders.", isCorrect: true, sentiment: "positive" },
      { text: "Drop the beam and refuse to walk", nextScene: "drop_consequence", tag: "fearful", feedback: "The hour is given. Walk it.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "No Curse, Only Love",
    text: "You came to bless, not to curse.\nLet love carry the weight.",
    choices: [
      { text: "Accept the beam in silence", nextScene: "carrying", tag: "obedient", feedback: "You bow beneath the wood.", isCorrect: true, sentiment: "positive" },
    ],
  },
  drop_consequence: {
    id: "drop_consequence",
    title: "Lift It Up",
    text: "The road is yours to walk.\nNo other hand can carry this love.",
    choices: [
      { text: "Accept the beam in silence", nextScene: "carrying", tag: "obedient", feedback: "Your knees bend, then rise.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — CARRYING THE CROSS
  carrying: {
    id: "carrying",
    title: "The Long Road",
    text: "Stones bite your feet. You stumble once,\nthen twice. The crowd watches in silence.",
    choices: [
      { text: "Shout at the crowd in pain", nextScene: "shout_consequence", tag: "rash", feedback: "Your suffering speaks louder.", isCorrect: false, sentiment: "negative" },
      { text: "Beg a stranger to take it", nextScene: "beg_consequence", tag: "fearful", feedback: "Help will come. Keep walking.", isCorrect: false, sentiment: "negative" },
      { text: "Press onward without a word", nextScene: "simon", tag: "obedient", feedback: "Each step is offered as love.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Silence Is Stronger",
    text: "Cries cannot save them; only your love can.\nWalk on without a word.",
    choices: [
      { text: "Press onward without a word", nextScene: "simon", tag: "obedient", feedback: "You straighten, breath shaking.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Help Is Sent",
    text: "The Father will send one for you.\nKeep walking until he comes.",
    choices: [
      { text: "Press onward without a word", nextScene: "simon", tag: "obedient", feedback: "Your steps push forward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — SIMON OF CYRENE
  simon: {
    id: "simon",
    title: "A Stranger Lifts It",
    text: "Soldiers seize a man from the crowd.\nSimon of Cyrene bends to share the beam.",
    choices: [
      { text: "Receive his help with thanks", nextScene: "golgotha", tag: "humble", feedback: "Your eyes meet. Silent grace.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse, insist on carrying alone", nextScene: "refuse_consequence", tag: "prideful", feedback: "Even God's Son receives help.", isCorrect: false, sentiment: "negative" },
      { text: "Order him to carry it all", nextScene: "order_consequence", tag: "rash", feedback: "Share the road, do not shove it.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Even You Receive",
    text: "Love allows itself to be helped.\nLet Simon lift the wood with you.",
    choices: [
      { text: "Receive his help with thanks", nextScene: "golgotha", tag: "humble", feedback: "His shoulder fits beside yours.", isCorrect: true, sentiment: "positive" },
    ],
  },
  order_consequence: {
    id: "order_consequence",
    title: "Not by Command",
    text: "The cross is yours to bear.\nHe shares it; he does not replace you.",
    choices: [
      { text: "Receive his help with thanks", nextScene: "golgotha", tag: "humble", feedback: "Together you climb the road.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — GOLGOTHA
  golgotha: {
    id: "golgotha",
    title: "The Skull-Shaped Hill",
    text: "The hill rises bare against pale sky.\nThree wooden posts stand waiting.",
    choices: [
      { text: "Turn and run from the hill", nextScene: "run_consequence", tag: "fearful", feedback: "This is the why of your coming.", isCorrect: false, sentiment: "negative" },
      { text: "Walk forward, eyes on the cross", nextScene: "wine_offered", tag: "obedient", feedback: "Your feet keep moving.", isCorrect: true, sentiment: "positive" },
      { text: "Demand a different death", nextScene: "demand_consequence", tag: "rash", feedback: "Not your will, but the Father's.", isCorrect: false, sentiment: "negative" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "For This You Came",
    text: "You said the great yes in the garden.\nKeep the yes here, too.",
    choices: [
      { text: "Walk forward, eyes on the cross", nextScene: "wine_offered", tag: "obedient", feedback: "You step onto the bare ground.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Not Your Will",
    text: "In Gethsemane you chose the Father's way.\nChoose it again, here.",
    choices: [
      { text: "Walk forward, eyes on the cross", nextScene: "wine_offered", tag: "obedient", feedback: "You bow your head and walk on.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — WINE WITH GALL / NAILS
  wine_offered: {
    id: "wine_offered",
    title: "Wine Mixed With Gall",
    text: "A soldier lifts a cup of bitter wine.\nIt would dull the pain to come.",
    choices: [
      { text: "Drink deeply to numb the body", nextScene: "drink_consequence", tag: "fearful", feedback: "Bear it awake, in full love.", isCorrect: false, sentiment: "negative" },
      { text: "Taste, then turn the cup away", nextScene: "nails", tag: "obedient", feedback: "You will feel every moment.", isCorrect: true, sentiment: "positive" },
      { text: "Smash the cup from his hand", nextScene: "smash_consequence", tag: "rash", feedback: "Even refusal can be gentle.", isCorrect: false, sentiment: "negative" },
    ],
  },
  drink_consequence: {
    id: "drink_consequence",
    title: "Awake in Love",
    text: "The cup of suffering must be drunk fully.\nNo numbness can carry the world.",
    choices: [
      { text: "Taste, then turn the cup away", nextScene: "nails", tag: "obedient", feedback: "Your lips touch it, then refuse.", isCorrect: true, sentiment: "positive" },
    ],
  },
  smash_consequence: {
    id: "smash_consequence",
    title: "Gentle Refusal",
    text: "Even the soldier is loved by the Father.\nTurn the cup away, do not strike.",
    choices: [
      { text: "Taste, then turn the cup away", nextScene: "nails", tag: "obedient", feedback: "Your hand closes on his, gently.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE NAILS / LIFTED UP
  nails: {
    id: "nails",
    title: "Iron and Wood",
    text: "Soldiers stretch your arms across the wood.\nThe hammer rises against the sky.",
    choices: [
      { text: "Call down fire on the soldiers", nextScene: "fire_consequence", tag: "rash", feedback: "Twelve legions wait, unsummoned.", isCorrect: false, sentiment: "negative" },
      { text: "Pull free and end the trial", nextScene: "pull_consequence", tag: "fearful", feedback: "Love does not pull away now.", isCorrect: false, sentiment: "negative" },
      { text: "Open your hands, surrender", nextScene: "lifted", tag: "obedient", feedback: "Your palms lie still upon the wood.", isCorrect: true, sentiment: "positive" },
    ],
  },
  fire_consequence: {
    id: "fire_consequence",
    title: "Mercy, Not Fire",
    text: "Angels stand ready, yet you stay.\nLet love hold the hammer.",
    choices: [
      { text: "Open your hands, surrender", nextScene: "lifted", tag: "obedient", feedback: "Your fingers unfold like a prayer.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pull_consequence: {
    id: "pull_consequence",
    title: "Stay for Love",
    text: "Every soul in the world is waiting.\nDo not pull your hand away.",
    choices: [
      { text: "Open your hands, surrender", nextScene: "lifted", tag: "obedient", feedback: "You lay your hands open.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — MOCKING UNDER THE INSCRIPTION
  lifted: {
    id: "lifted",
    title: "Lifted Between Earth and Sky",
    text: "The cross rises. Above your head:\n\"Jesus of Nazareth, King of the Jews.\"",
    choices: [
      { text: "Curse them all from the cross", nextScene: "curse_cross_consequence", tag: "rash", feedback: "Not curses. Forgiveness.", isCorrect: false, sentiment: "negative" },
      { text: "Stay silent in cold endurance", nextScene: "silent_consequence", tag: "evasive", feedback: "Speak the word the world needs.", isCorrect: false, sentiment: "negative" },
      { text: "Pray: \"Father, forgive them.\"", nextScene: "forgiveness", tag: "faithful", feedback: "Heaven leans close to listen.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_cross_consequence: {
    id: "curse_cross_consequence",
    title: "Forgive, Not Curse",
    text: "They do not know what they do.\nSpeak the word of mercy instead.",
    choices: [
      { text: "Pray: \"Father, forgive them.\"", nextScene: "forgiveness", tag: "faithful", feedback: "Your voice shakes with love.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Speak the Mercy",
    text: "Silence cannot save them now.\nLet the great word of pardon rise.",
    choices: [
      { text: "Pray: \"Father, forgive them.\"", nextScene: "forgiveness", tag: "faithful", feedback: "The prayer escapes your lips.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — DARKNESS AND FORGIVENESS
  forgiveness: {
    id: "forgiveness",
    title: "Darkness Over the Land",
    text: "At noon the sky turns black as night.\nA thief beside you whispers your name.",
    choices: [
      { text: "Ignore the dying thief", nextScene: "ignore_consequence", tag: "evasive", feedback: "Every soul matters, even now.", isCorrect: false, sentiment: "negative" },
      { text: "Rebuke him for his crimes", nextScene: "rebuke_consequence", tag: "rash", feedback: "He confesses already. Bless him.", isCorrect: false, sentiment: "negative" },
      { text: "\"Today you will be with me.\"", nextScene: "ending", tag: "faithful", feedback: "He weeps. Paradise opens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Turn to Him",
    text: "He has nothing left but you.\nMeet his eyes with mercy.",
    choices: [
      { text: "\"Today you will be with me.\"", nextScene: "ending", tag: "faithful", feedback: "Light enters his dying face.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rebuke_consequence: {
    id: "rebuke_consequence",
    title: "Mercy, Not Rebuke",
    text: "His heart has already turned.\nReceive him into the kingdom.",
    choices: [
      { text: "\"Today you will be with me.\"", nextScene: "ending", tag: "faithful", feedback: "Your promise opens paradise.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Held in Darkness",
    text: "The whole world hangs upon this love.\nIt is almost finished.",
    choices: [],
    isFinal: true,
  },
};
