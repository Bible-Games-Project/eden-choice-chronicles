import { StoryScene } from "@/data/stories/creation";

// DEATH OF MOSES — Deuteronomy 31-34
// You ARE Moses. Legacy, obedience, fulfillment, peaceful closure.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const deathMosesScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE EDGE OF THE LAND ============
  start: {
    id: "start",
    title: "The Plains of Moab",
    text: "Israel rests at the edge of promise.\nYour years now end at the river.",
    choices: [
      { text: "Press on and cross with them", nextScene: "press_consequence", tag: "willful", feedback: "The Lord told you not to cross.", isCorrect: false, sentiment: "negative" },
      { text: "Gather the people one last time", nextScene: "gather_people", tag: "obedient", feedback: "You call them with quiet love.", isCorrect: true, sentiment: "positive" },
      { text: "Say nothing and slip away alone", nextScene: "silent_consequence", tag: "avoidant", feedback: "They deserve a farewell.", isCorrect: false, sentiment: "negative" },
    ],
  },
  press_consequence: {
    id: "press_consequence",
    title: "Honor His Word",
    text: "The Jordan is not yours to cross.\nGather the people instead.",
    choices: [
      { text: "Gather the people one last time", nextScene: "gather_people", tag: "obedient", feedback: "You bow and turn back.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "They Need Your Blessing",
    text: "Forty years walked together.\nDo not leave them in silence.",
    choices: [
      { text: "Gather the people one last time", nextScene: "gather_people", tag: "obedient", feedback: "You raise your staff to call them.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — FAREWELL TO THE PEOPLE ============
  gather_people: {
    id: "gather_people",
    title: "All Israel Listens",
    text: "Their faces wait, hushed and still.\nWhat words will you give them?",
    choices: [
      { text: "Recount your own great deeds", nextScene: "boast_consequence", tag: "proud", feedback: "Your story is His story.", isCorrect: false, sentiment: "negative" },
      { text: "Remind them of the Lord's faithfulness", nextScene: "blessing", tag: "faithful", feedback: "You speak of manna and sea.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Lift His Name, Not Yours",
    text: "He led you. He fed you. He saved you.\nLet them remember Him.",
    choices: [
      { text: "Remind them of the Lord's faithfulness", nextScene: "blessing", tag: "faithful", feedback: "Your voice softens with truth.", isCorrect: true, sentiment: "positive" },
    ],
  },

  blessing: {
    id: "blessing",
    title: "A Blessing on the Tribes",
    text: "You bless each tribe by name.\nYour staff trembles with love.",
    choices: [
      { text: "Now appoint your successor", nextScene: "appoint_joshua", tag: "obedient", feedback: "Leadership must continue.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — PASSING THE MANTLE ============
  appoint_joshua: {
    id: "appoint_joshua",
    title: "Who Will Lead Them?",
    text: "Joshua stands beside you, steady.\nThe Lord has chosen him.",
    choices: [
      { text: "Choose someone of your own bloodline", nextScene: "bloodline_consequence", tag: "willful", feedback: "The Lord chose Joshua, not kin.", isCorrect: false, sentiment: "negative" },
      { text: "Cling to leadership a little longer", nextScene: "cling_consequence", tag: "fearful", feedback: "Your time has come to release it.", isCorrect: false, sentiment: "negative" },
      { text: "Lay your hands on Joshua", nextScene: "joshua_blessed", tag: "obedient", feedback: "Spirit and wisdom pass to him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  bloodline_consequence: {
    id: "bloodline_consequence",
    title: "His Choice, Not Yours",
    text: "Joshua has walked beside you all along.\nThe Lord has named him.",
    choices: [
      { text: "Lay your hands on Joshua", nextScene: "joshua_blessed", tag: "obedient", feedback: "You turn toward Joshua.", isCorrect: true, sentiment: "positive" },
    ],
  },
  cling_consequence: {
    id: "cling_consequence",
    title: "Open Your Hand",
    text: "Faithfulness now means letting go.\nGive what He asks of you.",
    choices: [
      { text: "Lay your hands on Joshua", nextScene: "joshua_blessed", tag: "obedient", feedback: "Your hands come to rest on him.", isCorrect: true, sentiment: "positive" },
    ],
  },

  joshua_blessed: {
    id: "joshua_blessed",
    title: "Be Strong and Courageous",
    text: "\"The Lord goes before you,\" you say.\n\"He will not leave you.\"",
    choices: [
      { text: "Now climb Mount Nebo as God said", nextScene: "ascent", tag: "obedient", feedback: "The mountain waits in the dawn.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE ASCENT ============
  ascent: {
    id: "ascent",
    title: "The Path Up Nebo",
    text: "Each step is heavy and holy.\nAt the top, the Lord will speak.",
    choices: [
      { text: "Turn back to the comfort of camp", nextScene: "turnback_consequence", tag: "fearful", feedback: "He calls you upward, not back.", isCorrect: false, sentiment: "negative" },
      { text: "Climb in quiet trust", nextScene: "summit", tag: "obedient", feedback: "Your staff steadies your steps.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turnback_consequence: {
    id: "turnback_consequence",
    title: "He Waits Above",
    text: "This last climb is His gift to you.\nDo not refuse the summit.",
    choices: [
      { text: "Climb in quiet trust", nextScene: "summit", tag: "obedient", feedback: "You turn your face upward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE LORD SHOWS THE LAND ============
  summit: {
    id: "summit",
    title: "All the Land Before You",
    text: "Valleys and hills shine in gold.\n\"This is the land,\" He says.",
    choices: [
      { text: "Grieve that you may not enter", nextScene: "grief_consequence", tag: "sorrowful", feedback: "You have already received enough.", isCorrect: false, sentiment: "negative" },
      { text: "Demand to cross with the people", nextScene: "demand_consequence", tag: "willful", feedback: "His word is gentle but firm.", isCorrect: false, sentiment: "negative" },
      { text: "Receive the vision with thanks", nextScene: "vision_received", tag: "grateful", feedback: "Tears of joy fall in silence.", isCorrect: true, sentiment: "positive" },
    ],
  },
  grief_consequence: {
    id: "grief_consequence",
    title: "Look With Joy, Not Sorrow",
    text: "He lets you see what He promised.\nThis vision is His kindness.",
    choices: [
      { text: "Receive the vision with thanks", nextScene: "vision_received", tag: "grateful", feedback: "Your heart softens at His mercy.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Trust His Boundary",
    text: "Joshua will lead them across.\nYour part is complete.",
    choices: [
      { text: "Receive the vision with thanks", nextScene: "vision_received", tag: "grateful", feedback: "You bow your head in peace.", isCorrect: true, sentiment: "positive" },
    ],
  },

  vision_received: {
    id: "vision_received",
    title: "\"You Have Seen It With Your Eyes\"",
    text: "His voice settles like warm wind.\nYour journey draws to its rest.",
    choices: [
      { text: "Lie down where He has appointed", nextScene: "ending_peaceful", tag: "obedient", feedback: "The mountain holds you gently.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ENDING ============
  ending_peaceful: {
    id: "ending_peaceful",
    title: "Rest on the Mountain",
    text: "You close your eyes in His presence.\nThe Lord Himself buries His servant.",
    choices: [],
    isFinal: true,
  },
};
