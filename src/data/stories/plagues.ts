import { StoryScene } from "@/data/stories/creation";

// THE PLAGUES OF EGYPT — Exodus 7–10
// You ARE Moses, sent again and again to confront Pharaoh.
// 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars per line, choices ≤40 chars. Order shuffled at runtime.
// NO Passover, NO Exodus departure, NO Red Sea — those are next stories.

export const plaguesScenes: Record<string, StoryScene> = {
  // ============ ACT I — STAFF AND SERPENT ============
  start: {
    id: "start",
    title: "Return to the Throne",
    text: "Pharaoh sits cold upon his throne.\nAaron stands at your side.",
    choices: [
      { text: "Hide the Lord's command", nextScene: "hide_consequence", tag: "fearful", feedback: "Do not hide His word.", isCorrect: false, sentiment: "negative" },
      { text: "Cast down the staff before him", nextScene: "serpent_sign", tag: "obedient", feedback: "It twists into a serpent.", isCorrect: true, sentiment: "positive" },
      { text: "Storm out in anger", nextScene: "storm_consequence", tag: "rash", feedback: "Stand. Speak the sign.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Speak the Sign",
    text: "He sent you to show His power.\nDo not silence the Lord here.",
    choices: [
      { text: "Cast down the staff before him", nextScene: "serpent_sign", tag: "obedient", feedback: "Wood becomes living thing.", isCorrect: true, sentiment: "positive" },
    ],
  },
  storm_consequence: {
    id: "storm_consequence",
    title: "Do Not Walk Away",
    text: "Pride will not free your people.\nReturn and obey.",
    choices: [
      { text: "Cast down the staff before him", nextScene: "serpent_sign", tag: "obedient", feedback: "The court gasps.", isCorrect: true, sentiment: "positive" },
    ],
  },

  serpent_sign: {
    id: "serpent_sign",
    title: "Magicians Match the Sign",
    text: "Their staffs become serpents too.\nYet yours devours theirs whole.",
    choices: [
      { text: "Boast over the magicians", nextScene: "boast_consequence", tag: "prideful", feedback: "Glory is His, not yours.", isCorrect: false, sentiment: "negative" },
      { text: "Demand again: let them go", nextScene: "to_the_nile", tag: "faithful", feedback: "Pharaoh's heart hardens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Not Your Glory",
    text: "He alone undid their craft.\nSpeak only what He gave.",
    choices: [
      { text: "Demand again: let them go", nextScene: "to_the_nile", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — PLAGUE OF BLOOD ============
  to_the_nile: {
    id: "to_the_nile",
    title: "Beside the River",
    text: "Pharaoh comes down to the Nile.\nThe Lord says: strike the water.",
    choices: [
      { text: "Wait for him to ask first", nextScene: "wait_consequence", tag: "fearful", feedback: "Obey now, not later.", isCorrect: false, sentiment: "negative" },
      { text: "Beg pity from the king", nextScene: "beg_consequence", tag: "fearful", feedback: "It is a sign, not a plea.", isCorrect: false, sentiment: "negative" },
      { text: "Strike the water with the staff", nextScene: "nile_blood", tag: "obedient", feedback: "The river runs red.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Now Is the Hour",
    text: "His word does not wait on kings.\nLift the staff and strike.",
    choices: [
      { text: "Strike the water with the staff", nextScene: "nile_blood", tag: "obedient", feedback: "The Nile turns to blood.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Not a Plea, a Sign",
    text: "He sent judgment, not a prayer.\nDo what He commanded.",
    choices: [
      { text: "Strike the water with the staff", nextScene: "nile_blood", tag: "obedient", feedback: "Blood spreads downstream.", isCorrect: true, sentiment: "positive" },
    ],
  },

  nile_blood: {
    id: "nile_blood",
    title: "Seven Days of Blood",
    text: "Fish die. Egypt cannot drink.\nPharaoh's heart will not bend.",
    choices: [
      { text: "Threaten frogs upon the land", nextScene: "frogs_plague", tag: "faithful", feedback: "He laughs. Then he hears.", isCorrect: true, sentiment: "positive" },
      { text: "Mock his powerless gods", nextScene: "mock_consequence", tag: "prideful", feedback: "Speak the Lord's word, not yours.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "His Word, Not Mockery",
    text: "Pride does not break a king.\nDeliver the warning given you.",
    choices: [
      { text: "Threaten frogs upon the land", nextScene: "frogs_plague", tag: "faithful", feedback: "You speak it plainly.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — FROGS AND A FALSE PROMISE ============
  frogs_plague: {
    id: "frogs_plague",
    title: "Frogs Cover the Land",
    text: "They fill the houses, ovens, beds.\nPharaoh begs you: \"Pray for me.\"",
    choices: [
      { text: "Pray as the Lord commanded", nextScene: "pharaoh_lies", tag: "obedient", feedback: "Tomorrow, he says. Tomorrow.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse until they go free", nextScene: "refuse_pray_consequence", tag: "rash", feedback: "Mercy is not yours to barter.", isCorrect: false, sentiment: "negative" },
      { text: "Demand silver for the prayer", nextScene: "silver_consequence", tag: "evasive", feedback: "His mercy is never sold.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_pray_consequence: {
    id: "refuse_pray_consequence",
    title: "Mercy Is His to Give",
    text: "When a king begs, you carry it.\nPray as you were told.",
    choices: [
      { text: "Pray as the Lord commanded", nextScene: "pharaoh_lies", tag: "obedient", feedback: "You lift your hands.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silver_consequence: {
    id: "silver_consequence",
    title: "His Mercy Is Free",
    text: "The Lord asks no payment from you.\nDo not stain His name with greed.",
    choices: [
      { text: "Pray as the Lord commanded", nextScene: "pharaoh_lies", tag: "obedient", feedback: "You kneel and pray.", isCorrect: true, sentiment: "positive" },
    ],
  },

  pharaoh_lies: {
    id: "pharaoh_lies",
    title: "The First Lie",
    text: "Frogs die. The land stinks of them.\nPharaoh's heart hardens again.",
    choices: [
      { text: "Despair and turn back", nextScene: "despair_consequence", tag: "fearful", feedback: "He is not finished here.", isCorrect: false, sentiment: "negative" },
      { text: "Strike the dust: gnats arise", nextScene: "swarms", tag: "obedient", feedback: "Dust becomes biting clouds.", isCorrect: true, sentiment: "positive" },
    ],
  },
  despair_consequence: {
    id: "despair_consequence",
    title: "He Is Not Done",
    text: "His power has only begun to speak.\nLift the staff again.",
    choices: [
      { text: "Strike the dust: gnats arise", nextScene: "swarms", tag: "obedient", feedback: "The dust comes alive.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — SWARMS, LIVESTOCK, BOILS ============
  swarms: {
    id: "swarms",
    title: "\"This Is the Finger of God\"",
    text: "The magicians bow at last.\nBut Pharaoh will not yield.",
    choices: [
      { text: "Boast over the broken sorcerers", nextScene: "boast_again_consequence", tag: "prideful", feedback: "He humbled them, not you.", isCorrect: false, sentiment: "negative" },
      { text: "Take pity and stop the signs", nextScene: "pity_consequence", tag: "fearful", feedback: "Mercy is not yours to grant.", isCorrect: false, sentiment: "negative" },
      { text: "Warn of flies, then livestock", nextScene: "livestock_die", tag: "faithful", feedback: "Goshen alone is spared.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_again_consequence: {
    id: "boast_again_consequence",
    title: "His Finger, Not Yours",
    text: "It is the Lord they confess.\nDo not steal what is His.",
    choices: [
      { text: "Warn of flies, then livestock", nextScene: "livestock_die", tag: "faithful", feedback: "You speak the warning given.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pity_consequence: {
    id: "pity_consequence",
    title: "Not Yours to Stop",
    text: "Pharaoh's pride must be broken.\nDeliver each word, in order.",
    choices: [
      { text: "Warn of flies, then livestock", nextScene: "livestock_die", tag: "faithful", feedback: "You stand firm and speak.", isCorrect: true, sentiment: "positive" },
    ],
  },

  livestock_die: {
    id: "livestock_die",
    title: "Cattle Fall in the Field",
    text: "All Egypt's herds lie dead in dust.\nIsrael's flocks graze unharmed.",
    choices: [
      { text: "Throw soot toward the sky", nextScene: "boils_plague", tag: "obedient", feedback: "Boils break out on every man.", isCorrect: true, sentiment: "positive" },
      { text: "Hide from Pharaoh's wrath", nextScene: "hide_wrath_consequence", tag: "fearful", feedback: "He sent you back. Stand.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_wrath_consequence: {
    id: "hide_wrath_consequence",
    title: "Do Not Hide",
    text: "He goes before you into the court.\nTake the soot and obey.",
    choices: [
      { text: "Throw soot toward the sky", nextScene: "boils_plague", tag: "obedient", feedback: "The wind carries it far.", isCorrect: true, sentiment: "positive" },
    ],
  },

  boils_plague: {
    id: "boils_plague",
    title: "Boils on Every Man",
    text: "Even the magicians cannot stand.\nStill Pharaoh's heart is iron.",
    choices: [
      { text: "Curse the king to his face", nextScene: "curse_consequence", tag: "rash", feedback: "Speak the warning, not curses.", isCorrect: false, sentiment: "negative" },
      { text: "Warn of hail and fire from sky", nextScene: "hail_fire", tag: "faithful", feedback: "Some servants believe and hide.", isCorrect: true, sentiment: "positive" },
      { text: "Give up. Return to Midian.", nextScene: "give_up_consequence", tag: "rebellious", feedback: "There is no road back now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "His Word, Not Yours",
    text: "Judgment belongs to the Lord.\nDeliver the next warning given.",
    choices: [
      { text: "Warn of hail and fire from sky", nextScene: "hail_fire", tag: "faithful", feedback: "You speak the word.", isCorrect: true, sentiment: "positive" },
    ],
  },
  give_up_consequence: {
    id: "give_up_consequence",
    title: "There Is No Going Back",
    text: "He has set you on this road.\nWalk it to the end.",
    choices: [
      { text: "Warn of hail and fire from sky", nextScene: "hail_fire", tag: "faithful", feedback: "You straighten and speak.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — HAIL, LOCUSTS, DARKNESS ============
  hail_fire: {
    id: "hail_fire",
    title: "Fire Walks With the Hail",
    text: "Crops, beasts, and trees are shattered.\nPharaoh cries: \"I have sinned.\"",
    choices: [
      { text: "Trust the king's confession", nextScene: "trust_consequence", tag: "fearful", feedback: "He will lie again. Be ready.", isCorrect: false, sentiment: "negative" },
      { text: "Pray, knowing he will turn", nextScene: "locusts_warning", tag: "humble", feedback: "The storm stops. So does he.", isCorrect: true, sentiment: "positive" },
    ],
  },
  trust_consequence: {
    id: "trust_consequence",
    title: "Pray, but Know His Heart",
    text: "Mercy still answers, even here.\nPray, and watch what he does.",
    choices: [
      { text: "Pray, knowing he will turn", nextScene: "locusts_warning", tag: "humble", feedback: "You lift your hands.", isCorrect: true, sentiment: "positive" },
    ],
  },

  locusts_warning: {
    id: "locusts_warning",
    title: "Locusts Strip the Land",
    text: "What hail left, the locusts eat.\nPharaoh's own court pleads with him.",
    choices: [
      { text: "Side with his frightened servants", nextScene: "side_servants_consequence", tag: "evasive", feedback: "Speak only to Pharaoh, plainly.", isCorrect: false, sentiment: "negative" },
      { text: "Refuse Pharaoh's half-measures", nextScene: "darkness", tag: "faithful", feedback: "All Israel must go, with all.", isCorrect: true, sentiment: "positive" },
      { text: "Accept his offer to free some", nextScene: "accept_consequence", tag: "fearful", feedback: "Not one hoof stays behind.", isCorrect: false, sentiment: "negative" },
    ],
  },
  side_servants_consequence: {
    id: "side_servants_consequence",
    title: "To the King Alone",
    text: "Speak the Lord's word to Pharaoh.\nLet his servants hear it through him.",
    choices: [
      { text: "Refuse Pharaoh's half-measures", nextScene: "darkness", tag: "faithful", feedback: "You hold the line.", isCorrect: true, sentiment: "positive" },
    ],
  },
  accept_consequence: {
    id: "accept_consequence",
    title: "Not One Will Stay",
    text: "All the people. All their flocks.\nThat was the Lord's word.",
    choices: [
      { text: "Refuse Pharaoh's half-measures", nextScene: "darkness", tag: "faithful", feedback: "You hold the line.", isCorrect: true, sentiment: "positive" },
    ],
  },

  darkness: {
    id: "darkness",
    title: "Three Days of Darkness",
    text: "No man rises. No fire is seen.\nIn Goshen, lamps still burn warm.",
    choices: [
      { text: "Steal from Egypt in the dark", nextScene: "steal_consequence", tag: "evasive", feedback: "He will give them favor in time.", isCorrect: false, sentiment: "negative" },
      { text: "Wait quietly with your people", nextScene: "final_threat", tag: "humble", feedback: "Israel rests in Goshen's light.", isCorrect: true, sentiment: "positive" },
    ],
  },
  steal_consequence: {
    id: "steal_consequence",
    title: "He Will Provide",
    text: "What is given is better than stolen.\nWait for His hand to act.",
    choices: [
      { text: "Wait quietly with your people", nextScene: "final_threat", tag: "humble", feedback: "You sit by the fire.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — THE LAST WARNING ============
  final_threat: {
    id: "final_threat",
    title: "\"Never See My Face Again\"",
    text: "Pharaoh banishes you in fury.\nOne plague remains, the worst of all.",
    choices: [
      { text: "Beg him to reconsider", nextScene: "beg_again_consequence", tag: "fearful", feedback: "His heart is set in stone.", isCorrect: false, sentiment: "negative" },
      { text: "Boast of victory now", nextScene: "victory_consequence", tag: "prideful", feedback: "It is not yet finished.", isCorrect: false, sentiment: "negative" },
      { text: "Warn of the firstborn at midnight", nextScene: "ending", tag: "faithful", feedback: "You leave the hall in flame.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_again_consequence: {
    id: "beg_again_consequence",
    title: "Speak the Last Word",
    text: "He will not hear pleas now.\nDeliver the final warning.",
    choices: [
      { text: "Warn of the firstborn at midnight", nextScene: "ending", tag: "faithful", feedback: "Your voice shakes the hall.", isCorrect: true, sentiment: "positive" },
    ],
  },
  victory_consequence: {
    id: "victory_consequence",
    title: "Not Yet",
    text: "The deepest hour is still to come.\nDeliver the warning given.",
    choices: [
      { text: "Warn of the firstborn at midnight", nextScene: "ending", tag: "faithful", feedback: "You speak it plainly.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Toward the Night",
    text: "Egypt is broken. Israel waits.\nThe last and longest night draws near.",
    choices: [],
    isFinal: true,
  },
};
