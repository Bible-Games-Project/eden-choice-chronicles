import { StoryScene } from "@/data/stories/creation";

// JOSEPH AND HIS BROTHERS IN EGYPT — Genesis 42
// You are Joseph, vizier of Egypt. Your brothers arrive begging grain.
// SCOPE: brothers arrive → you recognize them → you test them → Simeon kept →
//        brothers return to Canaan → preparation for second visit.
// DO NOT include reveal or reconciliation (next story).
// Each scene: 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars. Choice order randomized.

export const josephBrothersEgyptScenes: Record<string, StoryScene> = {
  // ============ ACT I — A FAMILIAR FACE ============
  start: {
    id: "start",
    title: "Famine in the Land",
    text: "Foreigners come daily for grain.\nA new group bows before your dais.",
    choices: [
      { text: "Wave them off, you are busy", nextScene: "wave_consequence", tag: "proud", feedback: "A vizier serves the people.", sentiment: "negative" },
      { text: "Look closely at their faces", nextScene: "recognize", tag: "wise", feedback: "Your breath catches.", sentiment: "positive" },
      { text: "Demand silver before listening", nextScene: "demand_consequence", tag: "greedy", feedback: "First hear them out.", sentiment: "negative" },
    ],
  },
  wave_consequence: {
    id: "wave_consequence",
    title: "Look Again",
    text: "Something pulls your eye back.\nThose beards, that posture…",
    choices: [
      { text: "Look closely at their faces", nextScene: "recognize", tag: "wise", feedback: "You step down from the dais.", sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Steady Yourself",
    text: "Their voices reach you. Hebrew.\nYour heart begins to pound.",
    choices: [
      { text: "Look closely at their faces", nextScene: "recognize", tag: "wise", feedback: "You finally see them.", sentiment: "positive" },
    ],
  },
  recognize: {
    id: "recognize",
    title: "It Is Them",
    text: "Reuben. Judah. Levi. All ten.\nThey do not know you.",
    choices: [
      { text: "Reveal yourself in joy now", nextScene: "reveal_consequence", tag: "fearful", feedback: "Not yet — first their hearts.", sentiment: "negative" },
      { text: "Hide your face and test them", nextScene: "hide_face", tag: "wise", feedback: "You must know if they have changed.", sentiment: "positive" },
      { text: "Order their immediate arrest", nextScene: "arrest_consequence", tag: "bitter", feedback: "Vengeance is not your way.", sentiment: "negative" },
    ],
  },
  reveal_consequence: {
    id: "reveal_consequence",
    title: "Too Soon",
    text: "Their hearts are not yet known.\nIs Benjamin safe? Is father alive?",
    choices: [
      { text: "Hide your face and test them", nextScene: "hide_face", tag: "wise", feedback: "You compose yourself.", sentiment: "positive" },
    ],
  },
  arrest_consequence: {
    id: "arrest_consequence",
    title: "A Cold Heart",
    text: "Anger burns — but God put you here\nfor more than revenge.",
    choices: [
      { text: "Hide your face and test them", nextScene: "hide_face", tag: "wise", feedback: "You set vengeance aside.", sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE FIRST TEST ============
  hide_face: {
    id: "hide_face",
    title: "A Stranger's Voice",
    text: "Through an interpreter you speak harsh.\n\"Where do you come from?\"",
    choices: [
      { text: "\"From Canaan, to buy food\"", nextScene: "spy_accusation", tag: "test", feedback: "They answer truly.", sentiment: "positive" },
      { text: "Skip the test, give grain", nextScene: "skip_consequence", tag: "fearful", feedback: "First test their hearts.", sentiment: "negative" },
    ],
  },
  skip_consequence: {
    id: "skip_consequence",
    title: "Hold the Plan",
    text: "If you skip the test now,\nyou will never know their hearts.",
    choices: [
      { text: "Continue the test in disguise", nextScene: "spy_accusation", tag: "wise", feedback: "You hold the line.", sentiment: "positive" },
    ],
  },
  spy_accusation: {
    id: "spy_accusation",
    title: "\"You Are Spies!\"",
    text: "You point and roar the word.\nThe brothers fall to their knees.",
    choices: [
      { text: "Smile and admit the trick", nextScene: "smile_consequence", tag: "fearful", feedback: "Stay in character.", sentiment: "negative" },
      { text: "Hold the accusation firmly", nextScene: "they_protest", tag: "test", feedback: "Pressure brings the truth.", sentiment: "positive" },
    ],
  },
  smile_consequence: {
    id: "smile_consequence",
    title: "Mask On",
    text: "You must not soften yet.\nThe test is only beginning.",
    choices: [
      { text: "Hold the accusation firmly", nextScene: "they_protest", tag: "test", feedback: "Your face hardens again.", sentiment: "positive" },
    ],
  },
  they_protest: {
    id: "they_protest",
    title: "Their Defense",
    text: "\"We are twelve sons. One is no more.\nThe youngest is with our father.\"",
    choices: [
      { text: "\"Bring the youngest to me\"", nextScene: "demand_benjamin", tag: "test", feedback: "The true test takes shape.", sentiment: "positive" },
      { text: "Pretend to believe them", nextScene: "pretend_consequence", tag: "fearful", feedback: "The plan needs Benjamin.", sentiment: "negative" },
      { text: "Mock their dead brother", nextScene: "mock_consequence", tag: "bitter", feedback: "That cruelty isn't you.", sentiment: "negative" },
    ],
  },
  pretend_consequence: {
    id: "pretend_consequence",
    title: "Steady",
    text: "Without Benjamin, the test fails.\nYou must press on.",
    choices: [
      { text: "\"Bring the youngest to me\"", nextScene: "demand_benjamin", tag: "test", feedback: "You name the price.", sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Bite Your Tongue",
    text: "Mocking the lost wounds father too.\nYou pull the words back.",
    choices: [
      { text: "\"Bring the youngest to me\"", nextScene: "demand_benjamin", tag: "test", feedback: "You return to the plan.", sentiment: "positive" },
    ],
  },

  // ============ ACT III — THREE DAYS, ONE HOSTAGE ============
  demand_benjamin: {
    id: "demand_benjamin",
    title: "Three Days' Hold",
    text: "\"You will be held three days.\nThen one fetches the youngest.\"",
    choices: [
      { text: "Lock them all in the chamber", nextScene: "three_days", tag: "test", feedback: "Time will speak.", sentiment: "positive" },
      { text: "Free them with no condition", nextScene: "free_consequence", tag: "fearful", feedback: "The test must hold.", sentiment: "negative" },
    ],
  },
  free_consequence: {
    id: "free_consequence",
    title: "Hold the Line",
    text: "Without pressure, the truth hides.\nThree days will reveal much.",
    choices: [
      { text: "Lock them all in the chamber", nextScene: "three_days", tag: "test", feedback: "You give the order.", sentiment: "positive" },
    ],
  },
  three_days: {
    id: "three_days",
    title: "Third Morning",
    text: "Three days have weighed on them.\nNow you offer a softer terms.",
    choices: [
      { text: "Demand all stay, send one", nextScene: "all_stay_consequence", tag: "harsh", feedback: "Their families would starve.", sentiment: "negative" },
      { text: "Keep one, send the rest with grain", nextScene: "keep_one", tag: "wise", feedback: "Mercy mixed with the test.", sentiment: "positive" },
    ],
  },
  all_stay_consequence: {
    id: "all_stay_consequence",
    title: "Be Just",
    text: "Their wives and children would die.\nGod would not honor that.",
    choices: [
      { text: "Keep one, send the rest with grain", nextScene: "keep_one", tag: "wise", feedback: "You temper the test.", sentiment: "positive" },
    ],
  },
  keep_one: {
    id: "keep_one",
    title: "Their Confession",
    text: "They speak among themselves, not knowing\nyou understand every word.",
    choices: [
      { text: "Plug your ears, ignore it", nextScene: "ignore_consequence", tag: "fearful", feedback: "These words matter.", sentiment: "negative" },
      { text: "Listen quietly to their words", nextScene: "overhear", tag: "wise", feedback: "You strain to hear.", sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Listen",
    text: "These are the words you waited\ntwenty years to hear.",
    choices: [
      { text: "Listen quietly to their words", nextScene: "overhear", tag: "wise", feedback: "Your heart stops.", sentiment: "positive" },
    ],
  },
  overhear: {
    id: "overhear",
    title: "\"This Is For Joseph\"",
    text: "\"We sinned against our brother.\nWe saw his anguish and would not hear.\"",
    choices: [
      { text: "Show your tears in front of them", nextScene: "tears_open_consequence", tag: "fearful", feedback: "They must not see, yet.", sentiment: "negative" },
      { text: "Turn aside and weep alone", nextScene: "weep_alone", tag: "faithful", feedback: "Tears in the shadow.", sentiment: "positive" },
    ],
  },
  tears_open_consequence: {
    id: "tears_open_consequence",
    title: "Not Yet",
    text: "They would see and the test\nwould be undone too soon.",
    choices: [
      { text: "Turn aside and weep alone", nextScene: "weep_alone", tag: "faithful", feedback: "You step into shadow.", sentiment: "positive" },
    ],
  },
  weep_alone: {
    id: "weep_alone",
    title: "Choose Simeon",
    text: "You return composed. Now choose\nwhich brother to hold.",
    choices: [
      { text: "Bind Reuben, the eldest", nextScene: "reuben_consequence", tag: "harsh", feedback: "Reuben tried to save you.", sentiment: "negative" },
      { text: "Bind Simeon before their eyes", nextScene: "bind_simeon", tag: "wise", feedback: "The fierce one — fitting.", sentiment: "positive" },
    ],
  },
  reuben_consequence: {
    id: "reuben_consequence",
    title: "Not Reuben",
    text: "Reuben spoke for you long ago.\nLet justice fall on another.",
    choices: [
      { text: "Bind Simeon before their eyes", nextScene: "bind_simeon", tag: "wise", feedback: "Simeon it is.", sentiment: "positive" },
    ],
  },
  bind_simeon: {
    id: "bind_simeon",
    title: "Simeon Bound",
    text: "Ropes circle his wrists. He goes\nwithout protest. The brothers pale.",
    choices: [
      { text: "Order their sacks filled with grain", nextScene: "fill_sacks", tag: "kind", feedback: "Mercy under the mask.", sentiment: "positive" },
      { text: "Send them empty, to teach a lesson", nextScene: "empty_consequence", tag: "harsh", feedback: "Their families would starve.", sentiment: "negative" },
    ],
  },
  empty_consequence: {
    id: "empty_consequence",
    title: "Mercy Returns",
    text: "Famine kills children too.\nGive them what they came for.",
    choices: [
      { text: "Order their sacks filled with grain", nextScene: "fill_sacks", tag: "kind", feedback: "You restore the order.", sentiment: "positive" },
    ],
  },

  // ============ ACT IV — A SECRET MERCY ============
  fill_sacks: {
    id: "fill_sacks",
    title: "Silver Returned",
    text: "You whisper to the steward:\n\"Put each man's silver back in his sack.\"",
    choices: [
      { text: "Take the silver as fair pay", nextScene: "silver_consequence", tag: "greedy", feedback: "It must go back.", sentiment: "negative" },
      { text: "Hide it deep within the grain", nextScene: "silver_hidden", tag: "kind", feedback: "A secret gift.", sentiment: "positive" },
      { text: "Toss it openly into their cart", nextScene: "open_consequence", tag: "fearful", feedback: "It must be hidden.", sentiment: "negative" },
    ],
  },
  silver_consequence: {
    id: "silver_consequence",
    title: "No Profit",
    text: "You will not take from your father's house.\nReturn it in secret.",
    choices: [
      { text: "Hide it deep within the grain", nextScene: "silver_hidden", tag: "kind", feedback: "You command it done.", sentiment: "positive" },
    ],
  },
  open_consequence: {
    id: "open_consequence",
    title: "Hidden, Not Open",
    text: "An open gift would frighten them.\nBetter discovered later.",
    choices: [
      { text: "Hide it deep within the grain", nextScene: "silver_hidden", tag: "kind", feedback: "Secret it is.", sentiment: "positive" },
    ],
  },
  silver_hidden: {
    id: "silver_hidden",
    title: "Provision for the Road",
    text: "The steward also packs food\nfor the long journey home.",
    choices: [
      { text: "Send them off with no warning", nextScene: "no_warning_consequence", tag: "harsh", feedback: "Repeat the terms once more.", sentiment: "negative" },
      { text: "Repeat: bring the youngest back", nextScene: "send_off", tag: "test", feedback: "The condition is set.", sentiment: "positive" },
    ],
  },
  no_warning_consequence: {
    id: "no_warning_consequence",
    title: "Make It Clear",
    text: "If they forget the terms,\nthe test cannot be completed.",
    choices: [
      { text: "Repeat: bring the youngest back", nextScene: "send_off", tag: "test", feedback: "You speak it firmly.", sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE ROAD HOME ============
  send_off: {
    id: "send_off",
    title: "They Depart",
    text: "Donkeys laden, the nine ride out.\nFrom your window, you watch.",
    choices: [
      { text: "Run after them and confess all", nextScene: "run_consequence", tag: "fearful", feedback: "The test must finish.", sentiment: "negative" },
      { text: "Pray for their safe return", nextScene: "first_camp", tag: "faithful", feedback: "May God bring them back.", sentiment: "positive" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "Hold the Plan",
    text: "Father's heart, Benjamin's safety —\nthe test must be finished.",
    choices: [
      { text: "Pray for their safe return", nextScene: "first_camp", tag: "faithful", feedback: "You bow your head.", sentiment: "positive" },
    ],
  },
  first_camp: {
    id: "first_camp",
    title: "Camp at Dusk",
    text: "Far away, the brothers stop.\nOne opens his sack for grain.",
    choices: [
      { text: "Silver gleams atop the grain", nextScene: "silver_found", tag: "test", feedback: "Their faces drain white.", sentiment: "positive" },
    ],
  },
  silver_found: {
    id: "silver_found",
    title: "\"What Has God Done?\"",
    text: "They tremble. \"What is this God\nhas done to us?\" they cry.",
    choices: [
      { text: "They will turn back in panic", nextScene: "press_on", tag: "test", feedback: "Famine forces them home.", sentiment: "positive" },
    ],
  },
  press_on: {
    id: "press_on",
    title: "Onward to Canaan",
    text: "Fear pushes them home.\nFather is waiting.",
    choices: [
      { text: "Hide the truth from Jacob", nextScene: "hide_consequence", tag: "fearful", feedback: "Truth must be told.", sentiment: "negative" },
      { text: "Tell Jacob everything plainly", nextScene: "tell_jacob", tag: "honest", feedback: "Honesty, even when hard.", sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Speak True",
    text: "Father will see the missing son.\nA lie will only deepen the pain.",
    choices: [
      { text: "Tell Jacob everything plainly", nextScene: "tell_jacob", tag: "honest", feedback: "They steady themselves.", sentiment: "positive" },
    ],
  },

  // ============ ACT VI — JACOB'S GRIEF ============
  tell_jacob: {
    id: "tell_jacob",
    title: "Father Hears",
    text: "Jacob's hand trembles at his chest.\n\"Joseph is gone. Simeon now too…\"",
    choices: [
      { text: "Promise to bring Benjamin", nextScene: "promise_jacob", tag: "responsible", feedback: "Reuben pledges his sons.", sentiment: "positive" },
      { text: "Argue and shout at father", nextScene: "argue_consequence", tag: "harsh", feedback: "Patience with the grieving.", sentiment: "negative" },
      { text: "Walk away in frustration", nextScene: "walk_consequence", tag: "fearful", feedback: "Stay with him.", sentiment: "negative" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Be Gentle",
    text: "Shouting will not heal a father\nwho has buried a son in his heart.",
    choices: [
      { text: "Promise to bring Benjamin", nextScene: "promise_jacob", tag: "responsible", feedback: "You soften your voice.", sentiment: "positive" },
    ],
  },
  walk_consequence: {
    id: "walk_consequence",
    title: "Stay With Him",
    text: "Leaving solves nothing.\nFather needs a steady son now.",
    choices: [
      { text: "Promise to bring Benjamin", nextScene: "promise_jacob", tag: "responsible", feedback: "You return to his side.", sentiment: "positive" },
    ],
  },
  promise_jacob: {
    id: "promise_jacob",
    title: "Jacob Refuses",
    text: "\"My son shall not go down with you.\"\nThe grain bag empties slowly.",
    choices: [
      { text: "Force the journey now", nextScene: "force_consequence", tag: "harsh", feedback: "Wait for the famine to speak.", sentiment: "negative" },
      { text: "Wait until the grain runs out", nextScene: "wait_famine", tag: "patient", feedback: "Hunger will move his hand.", sentiment: "positive" },
    ],
  },
  force_consequence: {
    id: "force_consequence",
    title: "Patience",
    text: "Father will not be forced.\nGod's time will come.",
    choices: [
      { text: "Wait until the grain runs out", nextScene: "wait_famine", tag: "patient", feedback: "You bow and wait.", sentiment: "positive" },
    ],
  },

  // ============ ACT VII — PREPARING TO RETURN ============
  wait_famine: {
    id: "wait_famine",
    title: "Sacks Run Empty",
    text: "Weeks pass. The last grain is gone.\nFather summons his sons.",
    choices: [
      { text: "Stay silent and let Reuben speak", nextScene: "judah_speaks", tag: "wise", feedback: "Judah steps forward instead.", sentiment: "positive" },
      { text: "Boast you can fix it alone", nextScene: "boast_consequence", tag: "proud", feedback: "Pride helps no one.", sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Quiet, Brother",
    text: "Father needs a pledge, not a boast.\nLet Judah speak.",
    choices: [
      { text: "Stay silent and let Judah speak", nextScene: "judah_speaks", tag: "wise", feedback: "You step back.", sentiment: "positive" },
    ],
  },
  judah_speaks: {
    id: "judah_speaks",
    title: "Judah's Pledge",
    text: "\"Send the boy with me. I will be\nsurety. On me alone the blame.\"",
    choices: [
      { text: "Mock Judah's pledge", nextScene: "mock_judah_consequence", tag: "bitter", feedback: "His pledge is a true one.", sentiment: "negative" },
      { text: "Father weighs it in silence", nextScene: "father_relents", tag: "patient", feedback: "Jacob's eyes close in pain.", sentiment: "positive" },
    ],
  },
  mock_judah_consequence: {
    id: "mock_judah_consequence",
    title: "Hush",
    text: "This is the moment of pledge.\nDo not break it with mockery.",
    choices: [
      { text: "Father weighs it in silence", nextScene: "father_relents", tag: "patient", feedback: "Quiet returns.", sentiment: "positive" },
    ],
  },
  father_relents: {
    id: "father_relents",
    title: "\"If I Am Bereaved…\"",
    text: "\"Take double silver. Take a gift.\nAnd may God Almighty give you mercy.\"",
    choices: [
      { text: "Pack only what is required", nextScene: "stingy_consequence", tag: "fearful", feedback: "Father said double — and a gift.", sentiment: "negative" },
      { text: "Prepare double silver and a gift", nextScene: "preparation", tag: "obedient", feedback: "Honey, balm, almonds, spices.", sentiment: "positive" },
    ],
  },
  stingy_consequence: {
    id: "stingy_consequence",
    title: "Honor Father",
    text: "Father has spoken with care.\nObey him in full.",
    choices: [
      { text: "Prepare double silver and a gift", nextScene: "preparation", tag: "obedient", feedback: "You honor his word.", sentiment: "positive" },
    ],
  },
  preparation: {
    id: "preparation",
    title: "Donkeys Loaded",
    text: "Benjamin tightens his sash.\nThe road south waits in the dust.",
    choices: [
      { text: "Set out without praying", nextScene: "no_pray_consequence", tag: "unfaithful", feedback: "Begin in God's hand.", sentiment: "negative" },
      { text: "Bow with father in prayer", nextScene: "ending", tag: "faithful", feedback: "\"God Almighty, give us mercy.\"", sentiment: "positive" },
    ],
  },
  no_pray_consequence: {
    id: "no_pray_consequence",
    title: "Pray First",
    text: "Egypt is far. The vizier is harsh.\nAsk God's mercy now.",
    choices: [
      { text: "Bow with father in prayer", nextScene: "ending", tag: "faithful", feedback: "You kneel together.", sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "Toward Egypt Again",
    text: "Eleven brothers ride south.\nA strange vizier waits — and watches.",
    choices: [],
    isFinal: true,
  },
};
