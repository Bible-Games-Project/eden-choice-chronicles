import { StoryScene } from "@/data/stories/creation";

// JOSEPH IN PRISON — Genesis 39:20–40:23
// You are Joseph, falsely imprisoned in Pharaoh's jail.
// Each scene: 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars. Choice order randomized.
// Themes: patience, injustice, trust in God.

export const josephPrisonScenes: Record<string, StoryScene> = {
  // ============ ACT I — THROWN INTO PRISON ============
  start: {
    id: "start",
    title: "Iron Gate",
    text: "The gate slams shut behind you.\nFalsely accused. Stripped of all favor.",
    choices: [
      { text: "Curse the woman who lied", nextScene: "curse_consequence", tag: "bitter", feedback: "Bitterness will rot you here.", sentiment: "negative" },
      { text: "Quietly trust the Lord", nextScene: "first_night", tag: "faithful", feedback: "You breathe deep. God is still here.", sentiment: "positive" },
      { text: "Plot a way to escape", nextScene: "escape_consequence", tag: "fearful", feedback: "Walls are thick. Guards are many.", sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Hollow Words",
    text: "Anger only echoes off the stone.\nHate cannot free you.",
    choices: [
      { text: "Quietly trust the Lord", nextScene: "first_night", tag: "faithful", feedback: "You let the bitterness fall.", sentiment: "positive" },
    ],
  },
  escape_consequence: {
    id: "escape_consequence",
    title: "No Way Out",
    text: "Every corner is watched.\nYou sit back down on the cold floor.",
    choices: [
      { text: "Quietly trust the Lord", nextScene: "first_night", tag: "faithful", feedback: "Trust where you cannot run.", sentiment: "positive" },
    ],
  },
  first_night: {
    id: "first_night",
    title: "First Night",
    text: "Lamplight flickers low.\nYou kneel and whisper His name.",
    choices: [
      { text: "Sleep with hope in God", nextScene: "morning_work", tag: "faithful", feedback: "Peace settles on your eyes.", sentiment: "positive" },
      { text: "Curse the day you were born", nextScene: "despair_consequence", tag: "bitter", feedback: "Despair feeds nothing.", sentiment: "negative" },
    ],
  },
  despair_consequence: {
    id: "despair_consequence",
    title: "Dawn Returns",
    text: "Even in darkness, morning comes.\nYou choose to rise again.",
    choices: [
      { text: "Get up and serve", nextScene: "morning_work", tag: "faithful", feedback: "You stand. A new day waits.", sentiment: "positive" },
    ],
  },

  // ============ ACT II — FAVOR WITH THE KEEPER ============
  morning_work: {
    id: "morning_work",
    title: "A Task to Do",
    text: "The keeper points to the buckets.\nWater. Floors. Bread to carry.",
    choices: [
      { text: "Refuse — you are no slave", nextScene: "refuse_consequence", tag: "proud", feedback: "Pride will earn you the lash.", sentiment: "negative" },
      { text: "Work as if for the Lord", nextScene: "faithful_work", tag: "diligent", feedback: "You lift the bucket without a word.", sentiment: "positive" },
      { text: "Do little, hide from him", nextScene: "lazy_consequence", tag: "lazy", feedback: "He will see. He always sees.", sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "A Hard Lesson",
    text: "The keeper's eyes narrow.\nYou take the bucket in silence.",
    choices: [
      { text: "Work as if for the Lord", nextScene: "faithful_work", tag: "diligent", feedback: "Better to serve than to suffer pride.", sentiment: "positive" },
    ],
  },
  lazy_consequence: {
    id: "lazy_consequence",
    title: "Caught",
    text: "The keeper finds you idle.\nHis voice is sharp and short.",
    choices: [
      { text: "Apologize and work hard", nextScene: "faithful_work", tag: "diligent", feedback: "You bow your head and lift the load.", sentiment: "positive" },
    ],
  },
  faithful_work: {
    id: "faithful_work",
    title: "The Lord Is With Joseph",
    text: "Whatever you touch, prospers.\nThe keeper begins to watch.",
    choices: [
      { text: "Quietly thank God in your heart", nextScene: "trusted_steward", tag: "humble", feedback: "Heaven hears the silent prayer.", sentiment: "positive" },
      { text: "Boast of your skill aloud", nextScene: "boast_consequence", tag: "proud", feedback: "Boasting ruins what humility built.", sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Cold Looks",
    text: "Other prisoners turn away.\nYour words have cost you trust.",
    choices: [
      { text: "Humble yourself before God", nextScene: "trusted_steward", tag: "humble", feedback: "You bow. The Lord lifts the lowly.", sentiment: "positive" },
    ],
  },
  trusted_steward: {
    id: "trusted_steward",
    title: "Keys in His Hand",
    text: "The keeper hands you the ring.\n\"All the prisoners — your charge.\"",
    choices: [
      { text: "Demand release in return", nextScene: "demand_consequence", tag: "proud", feedback: "He laughs. You are still a prisoner.", sentiment: "negative" },
      { text: "Bow and serve faithfully", nextScene: "two_arrivals", tag: "humble", feedback: "You bow. The keys are heavy and warm.", sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Still a Prisoner",
    text: "His face hardens.\nThe keys remain — but only just.",
    choices: [
      { text: "Bow and serve with thanks", nextScene: "two_arrivals", tag: "humble", feedback: "You take the keys in silence.", sentiment: "positive" },
    ],
  },

  // ============ ACT III — TWO TROUBLED MEN ============
  two_arrivals: {
    id: "two_arrivals",
    title: "Pharaoh's Servants",
    text: "Two new prisoners arrive.\nCupbearer and chief baker. Pale, afraid.",
    choices: [
      { text: "Ignore them — not your problem", nextScene: "ignore_consequence", tag: "cold", feedback: "A shepherd does not turn away.", sentiment: "negative" },
      { text: "Welcome and care for them", nextScene: "morning_sad", tag: "kind", feedback: "You pour them water. They breathe.", sentiment: "positive" },
      { text: "Mock the fallen nobles", nextScene: "mock_consequence", tag: "cruel", feedback: "Cruelty is not in the Lord's house.", sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "A Soft Voice",
    text: "Their faces stay heavy.\nYou cannot turn from them.",
    choices: [
      { text: "Go and care for them", nextScene: "morning_sad", tag: "kind", feedback: "You kneel beside them.", sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Their Eyes",
    text: "They look up, hurt.\nShame settles in your chest.",
    choices: [
      { text: "Apologize and serve them", nextScene: "morning_sad", tag: "kind", feedback: "You ask their forgiveness.", sentiment: "positive" },
    ],
  },
  morning_sad: {
    id: "morning_sad",
    title: "Why So Downcast?",
    text: "At dawn their faces are dark.\nSomething troubles them deeply.",
    choices: [
      { text: "Tell me your dreams, please", nextScene: "interpret_offer", tag: "wise", feedback: "Both men look up at once.", sentiment: "positive" },
      { text: "Stay silent — none of your concern", nextScene: "silent_consequence", tag: "cold", feedback: "Silence helps no one here.", sentiment: "negative" },
      { text: "Charge them coins to listen", nextScene: "greedy_consequence", tag: "greedy", feedback: "God's gift is not for sale.", sentiment: "negative" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Their Burden",
    text: "They sit in silence.\nYou cannot leave them this way.",
    choices: [
      { text: "Ask them about their dreams", nextScene: "interpret_offer", tag: "wise", feedback: "Their eyes lift toward you.", sentiment: "positive" },
    ],
  },
  greedy_consequence: {
    id: "greedy_consequence",
    title: "A Gift, Not Goods",
    text: "Their faces fall further.\nThis is not how the Lord gives.",
    choices: [
      { text: "Ask freely — it is God's gift", nextScene: "interpret_offer", tag: "wise", feedback: "You smile. \"Speak. Tell me.\"", sentiment: "positive" },
    ],
  },
  interpret_offer: {
    id: "interpret_offer",
    title: "To God Belong Answers",
    text: "\"Do not interpretations belong to God?\nTell me your dreams.\"",
    choices: [
      { text: "Listen carefully to both", nextScene: "cupbearer_dream", tag: "wise", feedback: "The cupbearer leans forward to speak.", sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE TWO DREAMS ============
  cupbearer_dream: {
    id: "cupbearer_dream",
    title: "The Vine",
    text: "\"A vine — three branches budding.\nI pressed grapes into Pharaoh's cup.\"",
    choices: [
      { text: "Invent a flattering meaning", nextScene: "flatter_consequence", tag: "deceitful", feedback: "The Lord does not speak through flattery.", sentiment: "negative" },
      { text: "Speak what God reveals", nextScene: "cupbearer_meaning", tag: "wise", feedback: "Words rise clearly in your heart.", sentiment: "positive" },
    ],
  },
  flatter_consequence: {
    id: "flatter_consequence",
    title: "Truth Only",
    text: "Lies will not honor God.\nYou must speak what is true.",
    choices: [
      { text: "Speak what God reveals", nextScene: "cupbearer_meaning", tag: "wise", feedback: "You bow your head and begin.", sentiment: "positive" },
    ],
  },
  cupbearer_meaning: {
    id: "cupbearer_meaning",
    title: "Three Days",
    text: "\"Three branches: three days.\nPharaoh will lift up your head.\"",
    choices: [
      { text: "Ask him to remember you", nextScene: "remember_request", tag: "hopeful", feedback: "His eyes shine with promise.", sentiment: "positive" },
      { text: "Demand half his future wages", nextScene: "demand_wages_consequence", tag: "greedy", feedback: "God's gift was never for sale.", sentiment: "negative" },
    ],
  },
  demand_wages_consequence: {
    id: "demand_wages_consequence",
    title: "Open Hands",
    text: "His face goes cold.\nYou must serve, not bargain.",
    choices: [
      { text: "Only ask him to remember you", nextScene: "remember_request", tag: "hopeful", feedback: "\"Only remember me,\" you whisper.", sentiment: "positive" },
    ],
  },
  remember_request: {
    id: "remember_request",
    title: "Remember Me",
    text: "\"When all is well — remember me.\nI was stolen from my land.\"",
    choices: [
      { text: "Now hear the baker's dream", nextScene: "baker_dream", tag: "wise", feedback: "The baker steps forward, hopeful.", sentiment: "positive" },
    ],
  },
  baker_dream: {
    id: "baker_dream",
    title: "Three Baskets",
    text: "\"Three baskets on my head — birds\nate the bread meant for Pharaoh.\"",
    choices: [
      { text: "Lie to spare him pain", nextScene: "lie_consequence", tag: "deceitful", feedback: "A lie helps no one in the end.", sentiment: "negative" },
      { text: "Tell the hard truth gently", nextScene: "baker_meaning", tag: "wise", feedback: "You take a slow breath. Truth.", sentiment: "positive" },
      { text: "Refuse to interpret it", nextScene: "refuse_interp_consequence", tag: "fearful", feedback: "Refusing will not change the dream.", sentiment: "negative" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "He Deserves Truth",
    text: "A kind lie still leaves him blind.\nHe must hear what is real.",
    choices: [
      { text: "Tell the hard truth gently", nextScene: "baker_meaning", tag: "wise", feedback: "You meet his eyes with sorrow.", sentiment: "positive" },
    ],
  },
  refuse_interp_consequence: {
    id: "refuse_interp_consequence",
    title: "He Waits",
    text: "His pleading eyes hold yours.\nGod has given. You must speak.",
    choices: [
      { text: "Tell the hard truth gently", nextScene: "baker_meaning", tag: "wise", feedback: "You begin softly, with care.", sentiment: "positive" },
    ],
  },
  baker_meaning: {
    id: "baker_meaning",
    title: "Hard Words",
    text: "\"Three baskets: three days.\nPharaoh will lift you on a tree.\"",
    choices: [
      { text: "Comfort and pray with him", nextScene: "third_day", tag: "kind", feedback: "You sit with him until the lamp dims.", sentiment: "positive" },
    ],
  },

  // ============ ACT V — FORGOTTEN ============
  third_day: {
    id: "third_day",
    title: "The Third Day",
    text: "Pharaoh's birthday dawns.\nGuards come for both men.",
    choices: [
      { text: "Bless them as they go", nextScene: "wait_news", tag: "faithful", feedback: "You lay a hand on each shoulder.", sentiment: "positive" },
      { text: "Rage against the guards", nextScene: "rage_consequence", tag: "bitter", feedback: "Anger will only earn you chains.", sentiment: "negative" },
    ],
  },
  rage_consequence: {
    id: "rage_consequence",
    title: "Be Still",
    text: "A spear lowers toward your chest.\nYou fall back, breathing hard.",
    choices: [
      { text: "Bless them quietly", nextScene: "wait_news", tag: "faithful", feedback: "You whisper a prayer instead.", sentiment: "positive" },
    ],
  },
  wait_news: {
    id: "wait_news",
    title: "Word Returns",
    text: "It is as you said.\nThe cupbearer lives. The baker does not.",
    choices: [
      { text: "Wait quietly to be remembered", nextScene: "forgotten", tag: "faithful", feedback: "You sit by the small window.", sentiment: "positive" },
      { text: "Curse the cupbearer's silence", nextScene: "curse2_consequence", tag: "bitter", feedback: "Bitterness blinds the watchful eye.", sentiment: "negative" },
    ],
  },
  curse2_consequence: {
    id: "curse2_consequence",
    title: "Let It Go",
    text: "Hate cannot reach Pharaoh's hall.\nOnly God can.",
    choices: [
      { text: "Wait quietly on the Lord", nextScene: "forgotten", tag: "faithful", feedback: "You release the bitter knot inside.", sentiment: "positive" },
    ],
  },
  forgotten: {
    id: "forgotten",
    title: "Forgotten",
    text: "Days. Months. Two long years.\nThe cupbearer remembers him not.",
    choices: [
      { text: "Lose all faith and despair", nextScene: "despair2_consequence", tag: "bitter", feedback: "Despair will steal the morning.", sentiment: "negative" },
      { text: "Keep trusting God's timing", nextScene: "still_trust", tag: "faithful", feedback: "You whisper, \"He has not forgotten.\"", sentiment: "positive" },
      { text: "Try to bribe a guard", nextScene: "bribe_consequence", tag: "fearful", feedback: "The guard takes nothing. You lose more.", sentiment: "negative" },
    ],
  },
  despair2_consequence: {
    id: "despair2_consequence",
    title: "A Soft Light",
    text: "Through the window, a single ray.\nGod is still near.",
    choices: [
      { text: "Lift your eyes again", nextScene: "still_trust", tag: "faithful", feedback: "You rise. Hope is not gone.", sentiment: "positive" },
    ],
  },
  bribe_consequence: {
    id: "bribe_consequence",
    title: "Empty Hands",
    text: "He laughs. Your bread is gone.\nNo one will buy your freedom.",
    choices: [
      { text: "Trust the Lord alone", nextScene: "still_trust", tag: "faithful", feedback: "Only God can open this gate.", sentiment: "positive" },
    ],
  },
  still_trust: {
    id: "still_trust",
    title: "The Lord Is With You",
    text: "Even forgotten by men,\nyou are not forgotten by Him.",
    choices: [
      { text: "Continue serving faithfully", nextScene: "ending", tag: "faithful", feedback: "The keys jingle softly at your side.", sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "His Time Will Come",
    text: "The lamp burns. The Lord watches.\nPharaoh's dream is yet to come.",
    choices: [],
    isFinal: true,
  },
};
