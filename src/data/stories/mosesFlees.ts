import { StoryScene } from "@/data/stories/creation";

// MOSES FLEES EGYPT — Exodus 2:11–22
// You are Moses, raised in Pharaoh's house, witnessing your people's suffering.
// 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars. Choice order randomized per scene.

export const mosesFleesScenes: Record<string, StoryScene> = {
  // ============ ACT I — SEEING INJUSTICE ============
  start: {
    id: "start",
    title: "Among His People",
    text: "You walk where Hebrews labor.\nA taskmaster strikes a slave hard.",
    choices: [
      { text: "Walk away and say nothing", nextScene: "walk_away_consequence", tag: "cowardly", feedback: "Their cry weighs on you.", isCorrect: false, sentiment: "negative" },
      { text: "Move closer to see clearly", nextScene: "watch_closer", tag: "concerned", feedback: "You must see the truth.", isCorrect: true, sentiment: "positive" },
      { text: "Call the palace guards", nextScene: "call_guards_consequence", tag: "naive", feedback: "They serve Pharaoh, not justice.", isCorrect: false, sentiment: "negative" },
    ],
  },
  walk_away_consequence: {
    id: "walk_away_consequence",
    title: "The Cry Follows You",
    text: "The whip echoes in your ears.\nYou cannot pretend you did not see.",
    choices: [
      { text: "Turn back and look closer", nextScene: "watch_closer", tag: "concerned", feedback: "You return to the field.", isCorrect: true, sentiment: "positive" },
    ],
  },
  call_guards_consequence: {
    id: "call_guards_consequence",
    title: "They Will Not Help",
    text: "The guards serve the same masters.\nThis cry needs another answer.",
    choices: [
      { text: "Go closer to the slave yourself", nextScene: "watch_closer", tag: "concerned", feedback: "You step into the dust.", isCorrect: true, sentiment: "positive" },
    ],
  },
  watch_closer: {
    id: "watch_closer",
    title: "He Is My Brother",
    text: "The Hebrew is bleeding, half-broken.\nThe taskmaster lifts the whip again.",
    choices: [
      { text: "Look around. No one watches.", nextScene: "no_one_sees", tag: "cautious", feedback: "The field is empty.", isCorrect: true, sentiment: "positive" },
      { text: "Shout at the taskmaster", nextScene: "shout_consequence", tag: "rash", feedback: "You give yourself away.", isCorrect: false, sentiment: "negative" },
      { text: "Bribe him with gold", nextScene: "bribe_consequence", tag: "weak", feedback: "Cruelty cannot be bought off.", isCorrect: false, sentiment: "negative" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Too Loud",
    text: "Your voice carries far.\nWitnesses will remember every word.",
    choices: [
      { text: "Quiet. Look around again.", nextScene: "no_one_sees", tag: "cautious", feedback: "You lower your voice.", isCorrect: true, sentiment: "positive" },
    ],
  },
  bribe_consequence: {
    id: "bribe_consequence",
    title: "He Laughs at the Gold",
    text: "He pockets it and strikes again.\nGold cannot save your brother.",
    choices: [
      { text: "Step back. Check who sees.", nextScene: "no_one_sees", tag: "cautious", feedback: "You scan the field.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE KILLING ============
  no_one_sees: {
    id: "no_one_sees",
    title: "No One Is Near",
    text: "The field is empty. The whip falls.\nYour hands clench. Anger rises.",
    choices: [
      { text: "Strike down the Egyptian", nextScene: "strike_egyptian", tag: "decisive", feedback: "Justice — but at what cost?", isCorrect: true, sentiment: "positive" },
      { text: "Run for help to the palace", nextScene: "run_palace_consequence", tag: "fearful", feedback: "By then he will be dead.", isCorrect: false, sentiment: "negative" },
    ],
  },
  run_palace_consequence: {
    id: "run_palace_consequence",
    title: "Too Late",
    text: "The palace is far. He will die\nbefore any help arrives. Act now.",
    choices: [
      { text: "Strike down the Egyptian", nextScene: "strike_egyptian", tag: "decisive", feedback: "You move at last.", isCorrect: true, sentiment: "positive" },
    ],
  },
  strike_egyptian: {
    id: "strike_egyptian",
    title: "It Is Done",
    text: "One blow. He falls and breathes no more.\nThe Hebrew flees in silence.",
    choices: [
      { text: "Hide his body in the sand", nextScene: "bury_body", tag: "cautious", feedback: "You bury what you have done.", isCorrect: true, sentiment: "positive" },
      { text: "Leave him where he lies", nextScene: "leave_body_consequence", tag: "reckless", feedback: "Anyone passing will see.", isCorrect: false, sentiment: "negative" },
      { text: "Boast of it in the city", nextScene: "boast_consequence", tag: "prideful", feedback: "Your tongue is your downfall.", isCorrect: false, sentiment: "negative" },
    ],
  },
  leave_body_consequence: {
    id: "leave_body_consequence",
    title: "He Will Be Found",
    text: "A body in open sand will speak.\nCover what you have done.",
    choices: [
      { text: "Bury him in the sand", nextScene: "bury_body", tag: "cautious", feedback: "You drag him aside.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Words Travel",
    text: "Pride could undo everything.\nFirst — hide what you have done.",
    choices: [
      { text: "Bury him in the sand", nextScene: "bury_body", tag: "cautious", feedback: "You return to the field.", isCorrect: true, sentiment: "positive" },
    ],
  },
  bury_body: {
    id: "bury_body",
    title: "Buried in the Sand",
    text: "You cover him quickly. No one saw.\nYou hope no one ever knows.",
    choices: [
      { text: "Return quietly to the palace", nextScene: "return_palace", tag: "wise", feedback: "Act as though nothing happened.", isCorrect: true, sentiment: "positive" },
      { text: "Tell the Hebrew elders", nextScene: "tell_elders_consequence", tag: "trusting", feedback: "Word will spread too fast.", isCorrect: false, sentiment: "negative" },
    ],
  },
  tell_elders_consequence: {
    id: "tell_elders_consequence",
    title: "Whispers Travel",
    text: "The elders gasp. Word will spread\nfaster than you can follow.",
    choices: [
      { text: "Return quietly to the palace", nextScene: "return_palace", tag: "wise", feedback: "You walk back in silence.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — DISCOVERY ============
  return_palace: {
    id: "return_palace",
    title: "A Long Night",
    text: "The palace lamps burn low.\nYou sleep little. Tomorrow you must look.",
    choices: [
      { text: "Walk among the Hebrews again", nextScene: "second_day", tag: "compassionate", feedback: "You cannot stay away.", isCorrect: true, sentiment: "positive" },
      { text: "Stay hidden in your chamber", nextScene: "hide_chamber_consequence", tag: "fearful", feedback: "Hiding will not undo it.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_chamber_consequence: {
    id: "hide_chamber_consequence",
    title: "Silence Is No Shield",
    text: "Hiding cannot undo what is done.\nGo see your people.",
    choices: [
      { text: "Walk among the Hebrews again", nextScene: "second_day", tag: "compassionate", feedback: "You leave the chamber.", isCorrect: true, sentiment: "positive" },
    ],
  },
  second_day: {
    id: "second_day",
    title: "The Next Day",
    text: "Two Hebrews quarrel and shove.\nOne strikes the other in the dust.",
    choices: [
      { text: "Step between and rebuke them", nextScene: "rebuke_them", tag: "just", feedback: "\"Why strike your brother?\"", isCorrect: true, sentiment: "positive" },
      { text: "Take a side and strike one", nextScene: "take_side_consequence", tag: "violent", feedback: "More blood is not the answer.", isCorrect: false, sentiment: "negative" },
      { text: "Walk past in silence", nextScene: "ignore_consequence", tag: "cowardly", feedback: "You cannot keep walking past.", isCorrect: false, sentiment: "negative" },
    ],
  },
  take_side_consequence: {
    id: "take_side_consequence",
    title: "Not With Your Hand",
    text: "Yesterday's blow already haunts you.\nUse words today, not fists.",
    choices: [
      { text: "Step between and rebuke them", nextScene: "rebuke_them", tag: "just", feedback: "You raise your voice.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Brothers Wound Brothers",
    text: "If you say nothing, who will?\nSpeak to them.",
    choices: [
      { text: "Step between and rebuke them", nextScene: "rebuke_them", tag: "just", feedback: "You step into the quarrel.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rebuke_them: {
    id: "rebuke_them",
    title: "\"Why Strike Your Brother?\"",
    text: "The man sneers, eyes narrow.\n\"Will you kill me as you killed him?\"",
    choices: [
      { text: "Realize you are exposed", nextScene: "exposed", tag: "fearful", feedback: "Surely the thing is known.", isCorrect: true, sentiment: "positive" },
      { text: "Deny everything loudly", nextScene: "deny_consequence", tag: "deceitful", feedback: "Denial only confirms it.", isCorrect: false, sentiment: "negative" },
      { text: "Threaten him to stay silent", nextScene: "threaten_consequence", tag: "violent", feedback: "Fear breeds witnesses.", isCorrect: false, sentiment: "negative" },
    ],
  },
  deny_consequence: {
    id: "deny_consequence",
    title: "Lies Will Not Save You",
    text: "His eyes already know the truth.\nYour secret has slipped away.",
    choices: [
      { text: "Accept that you are exposed", nextScene: "exposed", tag: "fearful", feedback: "The thing is known.", isCorrect: true, sentiment: "positive" },
    ],
  },
  threaten_consequence: {
    id: "threaten_consequence",
    title: "Threats Make Witnesses",
    text: "He will tell others, afraid or angry.\nYour secret is undone.",
    choices: [
      { text: "Accept that you are exposed", nextScene: "exposed", tag: "fearful", feedback: "The thing is known.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — PHARAOH SEEKS MOSES ============
  exposed: {
    id: "exposed",
    title: "The Thing Is Known",
    text: "If a Hebrew knows, Pharaoh will know.\nGuards will come for you.",
    choices: [
      { text: "Prepare to flee from Egypt", nextScene: "pharaoh_hears", tag: "wise", feedback: "Survival demands flight.", isCorrect: true, sentiment: "positive" },
      { text: "Beg Pharaoh for mercy", nextScene: "beg_pharaoh_consequence", tag: "naive", feedback: "Pharaoh seeks your life.", isCorrect: false, sentiment: "negative" },
      { text: "Hide in the Hebrew quarter", nextScene: "hide_hebrews_consequence", tag: "desperate", feedback: "They will not shelter you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  beg_pharaoh_consequence: {
    id: "beg_pharaoh_consequence",
    title: "He Will Not Forgive",
    text: "An Egyptian was killed by your hand.\nMercy will not save you. Flee.",
    choices: [
      { text: "Prepare to flee from Egypt", nextScene: "pharaoh_hears", tag: "wise", feedback: "You gather your cloak.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_hebrews_consequence: {
    id: "hide_hebrews_consequence",
    title: "No Shelter Here",
    text: "They fear Pharaoh more than they trust you.\nFlight is the only way.",
    choices: [
      { text: "Prepare to flee from Egypt", nextScene: "pharaoh_hears", tag: "wise", feedback: "You slip out at dusk.", isCorrect: true, sentiment: "positive" },
    ],
  },
  pharaoh_hears: {
    id: "pharaoh_hears",
    title: "Pharaoh Hears",
    text: "His voice fills the throne hall.\n\"Find Moses. Bring me his life.\"",
    choices: [
      { text: "Slip out the eastern gate", nextScene: "leave_egypt", tag: "wise", feedback: "The desert lies beyond.", isCorrect: true, sentiment: "positive" },
      { text: "Flee by the river boats", nextScene: "river_consequence", tag: "rash", feedback: "Boats are watched first.", isCorrect: false, sentiment: "negative" },
      { text: "Raise the Hebrews in revolt", nextScene: "revolt_consequence", tag: "prideful", feedback: "It is not your hour.", isCorrect: false, sentiment: "negative" },
    ],
  },
  river_consequence: {
    id: "river_consequence",
    title: "The River Is Watched",
    text: "Every boat is searched at dawn.\nThe desert is the only road.",
    choices: [
      { text: "Slip out the eastern gate", nextScene: "leave_egypt", tag: "wise", feedback: "You turn east.", isCorrect: true, sentiment: "positive" },
    ],
  },
  revolt_consequence: {
    id: "revolt_consequence",
    title: "Not Your Hour",
    text: "The people are not ready.\nFlight, not war, is your road today.",
    choices: [
      { text: "Slip out the eastern gate", nextScene: "leave_egypt", tag: "wise", feedback: "You move toward the gate.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — INTO THE WILDERNESS ============
  leave_egypt: {
    id: "leave_egypt",
    title: "Out of Egypt",
    text: "The gate closes behind you.\nDust and silence open ahead.",
    choices: [
      { text: "Walk east, into the desert", nextScene: "desert_walk", tag: "brave", feedback: "Each step is freedom and exile.", isCorrect: true, sentiment: "positive" },
      { text: "Wait near the gate till dark", nextScene: "wait_gate_consequence", tag: "fearful", feedback: "Patrols will pass at dusk.", isCorrect: false, sentiment: "negative" },
    ],
  },
  wait_gate_consequence: {
    id: "wait_gate_consequence",
    title: "Patrols Are Coming",
    text: "Lingering here is your death.\nTake the desert road now.",
    choices: [
      { text: "Walk east, into the desert", nextScene: "desert_walk", tag: "brave", feedback: "You start walking.", isCorrect: true, sentiment: "positive" },
    ],
  },
  desert_walk: {
    id: "desert_walk",
    title: "Endless Sand",
    text: "Days pass. Sun and wind.\nYou are alone with your thoughts.",
    choices: [
      { text: "Press on toward Midian", nextScene: "canyon_pause", tag: "faithful", feedback: "You trust the road.", isCorrect: true, sentiment: "positive" },
      { text: "Turn back. Surrender.", nextScene: "surrender_consequence", tag: "cowardly", feedback: "Death waits behind you.", isCorrect: false, sentiment: "negative" },
      { text: "Curse God for your exile", nextScene: "curse_consequence", tag: "bitter", feedback: "Bitterness will not feed you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  surrender_consequence: {
    id: "surrender_consequence",
    title: "There Is No Going Back",
    text: "Pharaoh's blade waits in Egypt.\nKeep walking east.",
    choices: [
      { text: "Press on toward Midian", nextScene: "canyon_pause", tag: "faithful", feedback: "You face forward again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Quiet Your Heart",
    text: "Anger will not give you water.\nWalk. Trust. Breathe.",
    choices: [
      { text: "Press on toward Midian", nextScene: "canyon_pause", tag: "faithful", feedback: "You walk on in silence.", isCorrect: true, sentiment: "positive" },
    ],
  },
  canyon_pause: {
    id: "canyon_pause",
    title: "A Quiet Canyon",
    text: "You rest in cool shadow.\nFar from palace and chains.",
    choices: [
      { text: "Pray and keep walking", nextScene: "see_well", tag: "faithful", feedback: "Strength returns to you.", isCorrect: true, sentiment: "positive" },
      { text: "Lie down and give up", nextScene: "give_up_consequence", tag: "weary", feedback: "You must rise once more.", isCorrect: false, sentiment: "negative" },
    ],
  },
  give_up_consequence: {
    id: "give_up_consequence",
    title: "Rise, Moses",
    text: "Sleep here is sleep forever.\nStand. Walk. Live.",
    choices: [
      { text: "Pray and keep walking", nextScene: "see_well", tag: "faithful", feedback: "You rise again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  see_well: {
    id: "see_well",
    title: "A Well in the Sand",
    text: "Palms rise above the dust.\nYou have come to the land of Midian.",
    choices: [
      { text: "Sit and rest by the well", nextScene: "meet_midianite", tag: "humble", feedback: "A stranger in a strange land.", isCorrect: true, sentiment: "positive" },
      { text: "Hide and watch from afar", nextScene: "hide_well_consequence", tag: "fearful", feedback: "You need water, not shadows.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_well_consequence: {
    id: "hide_well_consequence",
    title: "You Need Water",
    text: "Hiding will not slake your thirst.\nGo. Sit. Drink.",
    choices: [
      { text: "Sit and rest by the well", nextScene: "meet_midianite", tag: "humble", feedback: "You step into the light.", isCorrect: true, sentiment: "positive" },
    ],
  },
  meet_midianite: {
    id: "meet_midianite",
    title: "A Kind Voice",
    text: "A young woman offers you water.\n\"You are welcome here, stranger.\"",
    choices: [
      { text: "Receive the water with thanks", nextScene: "ending", tag: "humble", feedback: "A new life begins.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse and walk on alone", nextScene: "refuse_consequence", tag: "proud", feedback: "Pride is not your friend now.", isCorrect: false, sentiment: "negative" },
      { text: "Lie about who you are", nextScene: "lie_consequence", tag: "deceitful", feedback: "Begin in truth, not lies.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Receive the Gift",
    text: "Kindness is given to be received.\nDrink and stay.",
    choices: [
      { text: "Receive the water with thanks", nextScene: "ending", tag: "humble", feedback: "You drink deeply.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "Begin in Truth",
    text: "A new life cannot rest on lies.\nReceive the water in honesty.",
    choices: [
      { text: "Receive the water with thanks", nextScene: "ending", tag: "humble", feedback: "You speak plainly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "A Stranger in Midian",
    text: "Egypt is behind you. The wilderness holds you.\nGod is not yet done with Moses.",
    choices: [],
    isFinal: true,
  },
};
