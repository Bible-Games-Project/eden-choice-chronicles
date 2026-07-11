import { StoryScene } from "@/data/stories/creation";

// CROSSING THE RED SEA — Exodus 13–14
// You ARE Moses. From leaving Egypt through the destruction of Pharaoh's army.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const redSeaScenes: Record<string, StoryScene> = {
  // ============ ACT I — LEAVING EGYPT ============
  start: {
    id: "start",
    title: "Out of Egypt",
    text: "Israel walks free at first light.\nWhich way will you lead them?",
    choices: [
      { text: "Take the short road by the sea", nextScene: "short_road_consequence", tag: "rash", feedback: "War waits on that road.", isCorrect: false, sentiment: "negative" },
      { text: "Follow the Lord's pillar of cloud", nextScene: "pillar_follows", tag: "obedient", feedback: "Exodus 13:21 — The Lord led them with a pillar of cloud by day and a pillar of fire by night.", isCorrect: true, sentiment: "positive" },
      { text: "Hurry back to beg Pharaoh's blessing", nextScene: "beg_consequence", tag: "fearful", feedback: "Do not look back.", isCorrect: false, sentiment: "negative" },
    ],
  },
  short_road_consequence: {
    id: "short_road_consequence",
    title: "Not That Way",
    text: "The Philistines guard that path.\nThe Lord leads another way.",
    choices: [
      { text: "Follow the Lord's pillar of cloud", nextScene: "pillar_follows", tag: "obedient", feedback: "You turn toward the wilderness.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Do Not Turn Back",
    text: "Egypt is behind you forever.\nLook only ahead.",
    choices: [
      { text: "Follow the Lord's pillar of cloud", nextScene: "pillar_follows", tag: "obedient", feedback: "You set your face to the desert.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — PHARAOH CHANGES HIS MIND ============
  pillar_follows: {
    id: "pillar_follows",
    title: "Pillar of Cloud",
    text: "By day a cloud, by night a fire.\nThe Lord goes before His people.",
    choices: [
      { text: "Press on as He leads you", nextScene: "pharaoh_regrets", tag: "obedient", feedback: "You walk toward the sea.", isCorrect: true, sentiment: "positive" },
    ],
  },

  pharaoh_regrets: {
    id: "pharaoh_regrets",
    title: "Pharaoh's Regret",
    text: "In Egypt the king curses his weakness.\n\"Bring back our slaves!\"",
    choices: [
      { text: "Speed back to plead with him", nextScene: "plead_consequence", tag: "fearful", feedback: "He has chosen war.", isCorrect: false, sentiment: "negative" },
      { text: "Trust the Lord and keep moving", nextScene: "army_charges", tag: "faithful", feedback: "Exodus 14:2 — The Lord told Moses to tell the people to turn back and encamp before Pi-hahiroth.", isCorrect: true, sentiment: "positive" },
      { text: "Hide the people in the dunes", nextScene: "hide_consequence", tag: "evasive", feedback: "There is no hiding from this.", isCorrect: false, sentiment: "negative" },
    ],
  },
  plead_consequence: {
    id: "plead_consequence",
    title: "No More Pleading",
    text: "His chariots are already rolling.\nThe time for words is gone.",
    choices: [
      { text: "Trust the Lord and keep moving", nextScene: "army_charges", tag: "faithful", feedback: "You hold the line.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Sand Cannot Hide You",
    text: "Six hundred chariots can find you.\nOnly the Lord can save you.",
    choices: [
      { text: "Trust the Lord and keep moving", nextScene: "army_charges", tag: "faithful", feedback: "You walk on.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — TRAPPED AT THE SEA ============
  army_charges: {
    id: "army_charges",
    title: "Dust on the Horizon",
    text: "A red cloud rises behind you.\nChariots. Hundreds of them.",
    choices: [
      { text: "Tell the people: do not fear", nextScene: "people_panic", tag: "faithful", feedback: "Exodus 14:13 — Moses told the people not to be afraid, to stand firm and see the salvation of the Lord.", isCorrect: true, sentiment: "positive" },
      { text: "Run with them toward the cliffs", nextScene: "run_consequence", tag: "fearful", feedback: "Stand and see His salvation.", isCorrect: false, sentiment: "negative" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "Stand Firm",
    text: "There is nowhere left to run.\nThe Lord will fight for you.",
    choices: [
      { text: "Tell the people: do not fear", nextScene: "people_panic", tag: "faithful", feedback: "You turn to face them.", isCorrect: true, sentiment: "positive" },
    ],
  },

  people_panic: {
    id: "people_panic",
    title: "\"Why Bring Us Here to Die?\"",
    text: "The people cry out, trembling.\n\"Were there no graves in Egypt?\"",
    choices: [
      { text: "Curse them for their unbelief", nextScene: "curse_consequence", tag: "rash", feedback: "Their fear is real.", isCorrect: false, sentiment: "negative" },
      { text: "Surrender the people to Pharaoh", nextScene: "surrender_consequence", tag: "fearful", feedback: "Never. The Lord saves.", isCorrect: false, sentiment: "negative" },
      { text: "Speak peace: stand and see Him", nextScene: "moses_prays", tag: "faithful", feedback: "\"The Lord will fight for you.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Speak Hope, Not Wrath",
    text: "They are afraid. So were you once.\nLead them with His promise.",
    choices: [
      { text: "Speak peace: stand and see Him", nextScene: "moses_prays", tag: "faithful", feedback: "Your voice softens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  surrender_consequence: {
    id: "surrender_consequence",
    title: "Never Back to Chains",
    text: "He did not free you to bind you.\nStand and trust His hand.",
    choices: [
      { text: "Speak peace: stand and see Him", nextScene: "moses_prays", tag: "faithful", feedback: "You face the sea.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — MOSES TRUSTS GOD ============
  moses_prays: {
    id: "moses_prays",
    title: "A Cry to Heaven",
    text: "You stand at the water's edge.\nOnly the Lord can open this.",
    choices: [
      { text: "Demand the people build boats", nextScene: "boats_consequence", tag: "rash", feedback: "There is no time.", isCorrect: false, sentiment: "negative" },
      { text: "Lift your staff over the sea", nextScene: "sea_parts", tag: "faithful", feedback: "Exodus 14:16 — The Lord commanded Moses to lift up his staff and stretch out his hand over the sea to divide it.", isCorrect: true, sentiment: "positive" },
      { text: "Wait silently for some other sign", nextScene: "wait_consequence", tag: "fearful", feedback: "He has already spoken.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boats_consequence: {
    id: "boats_consequence",
    title: "No Boats Tonight",
    text: "He needs no wood, no sails.\nHis breath is enough.",
    choices: [
      { text: "Lift your staff over the sea", nextScene: "sea_parts", tag: "faithful", feedback: "You raise the staff high.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "He Has Spoken",
    text: "\"Why do you cry to me? Go forward.\"\nThe sign is in your hand.",
    choices: [
      { text: "Lift your staff over the sea", nextScene: "sea_parts", tag: "faithful", feedback: "Your arm rises.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE PARTING ============
  sea_parts: {
    id: "sea_parts",
    title: "The Waters Divide",
    text: "A great wind splits the sea in two.\nA dry road opens through it.",
    choices: [
      { text: "Send the people across at once", nextScene: "crossing", tag: "obedient", feedback: "Exodus 14:16 — The Lord commanded Moses to stretch out his hand over the sea so the Israelites could go through on dry ground.", isCorrect: true, sentiment: "positive" },
      { text: "Stand back and only watch", nextScene: "watch_consequence", tag: "evasive", feedback: "It opened so you could go.", isCorrect: false, sentiment: "negative" },
    ],
  },
  watch_consequence: {
    id: "watch_consequence",
    title: "Walk Through It",
    text: "His miracle is for crossing.\nLead them between the walls.",
    choices: [
      { text: "Send the people across at once", nextScene: "crossing", tag: "obedient", feedback: "You step onto the dry seabed.", isCorrect: true, sentiment: "positive" },
    ],
  },

  crossing: {
    id: "crossing",
    title: "Between the Walls",
    text: "Walls of water rise on each side.\nIsrael walks the dry path.",
    choices: [
      { text: "Boast of your power before them", nextScene: "boast_consequence", tag: "prideful", feedback: "It is His arm, not yours.", isCorrect: false, sentiment: "negative" },
      { text: "Lead them toward the far shore", nextScene: "far_shore", tag: "humble", feedback: "Exodus 14:22 — The Israelites went into the sea on dry ground, with the waters forming a wall on their right and on their left.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "His Hand, Not Yours",
    text: "Give Him glory, not yourself.\nLead with a humble heart.",
    choices: [
      { text: "Lead them toward the far shore", nextScene: "far_shore", tag: "humble", feedback: "You bow your head and walk.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — THE WATERS RETURN ============
  far_shore: {
    id: "far_shore",
    title: "On the Far Shore",
    text: "Israel stands safe. Behind you,\nchariots crash into the corridor.",
    choices: [
      { text: "Mock the drowning soldiers", nextScene: "mock_consequence", tag: "prideful", feedback: "Do not laugh at His judgment.", isCorrect: false, sentiment: "negative" },
      { text: "Run back to fight them yourself", nextScene: "fight_consequence", tag: "rash", feedback: "The Lord fights for you.", isCorrect: false, sentiment: "negative" },
      { text: "Stretch your hand back over the sea", nextScene: "sea_closes", tag: "obedient", feedback: "Exodus 14:26 — The Lord commanded Moses to stretch out his hand over the sea so the waters would come back over the Egyptians.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Solemn, Not Proud",
    text: "His judgment is heavy and just.\nReceive it with awe.",
    choices: [
      { text: "Stretch your hand back over the sea", nextScene: "sea_closes", tag: "obedient", feedback: "You raise your arm.", isCorrect: true, sentiment: "positive" },
    ],
  },
  fight_consequence: {
    id: "fight_consequence",
    title: "He Fights for You",
    text: "Do not lift a sword tonight.\nLift only your hand at His word.",
    choices: [
      { text: "Stretch your hand back over the sea", nextScene: "sea_closes", tag: "obedient", feedback: "You stretch out your arm.", isCorrect: true, sentiment: "positive" },
    ],
  },

  sea_closes: {
    id: "sea_closes",
    title: "The Sea Returns",
    text: "The walls fall as one great wave.\nNot one chariot rises again.",
    choices: [
      { text: "Sing to the Lord with the people", nextScene: "ending", tag: "humble", feedback: "Miriam lifts her timbrel.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Saved by His Hand",
    text: "Israel stands free on the shore.\nThe Lord alone has saved them.",
    choices: [],
    isFinal: true,
  },
};
