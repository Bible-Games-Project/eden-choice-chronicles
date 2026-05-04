import { StoryScene } from "@/data/stories/creation";

// MOSES BEFORE PHARAOH — Exodus 4:27 – 5:23
// You ARE Moses, returning to Egypt to confront Pharaoh.
// 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars per line, choices ≤40 chars. Order shuffled at runtime.
// NO plagues, NO Exodus departure, NO Red Sea.

export const mosesPharaohScenes: Record<string, StoryScene> = {
  // ============ ACT I — RETURN TO EGYPT ============
  start: {
    id: "start",
    title: "The Road Back",
    text: "Egypt rises beyond the dust.\nThe land of your fear, and your call.",
    choices: [
      { text: "Hide your face and turn back", nextScene: "turn_back_consequence", tag: "fearful", feedback: "He did not send you to flee.", isCorrect: false, sentiment: "negative" },
      { text: "Walk on toward the city", nextScene: "meet_aaron", tag: "obedient", feedback: "Each step is a vow kept.", isCorrect: true, sentiment: "positive" },
      { text: "Wait for a sign first", nextScene: "wait_sign_consequence", tag: "doubtful", feedback: "The sign was the bush.", isCorrect: false, sentiment: "negative" },
    ],
  },
  turn_back_consequence: {
    id: "turn_back_consequence",
    title: "There Is No Going Back",
    text: "Midian holds nothing for you now.\nThe call is in front, not behind.",
    choices: [
      { text: "Walk on toward the city", nextScene: "meet_aaron", tag: "obedient", feedback: "You set your face forward.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_sign_consequence: {
    id: "wait_sign_consequence",
    title: "He Has Already Spoken",
    text: "The fire on Horeb was enough.\nObey before you ask again.",
    choices: [
      { text: "Walk on toward the city", nextScene: "meet_aaron", tag: "obedient", feedback: "You step forward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  meet_aaron: {
    id: "meet_aaron",
    title: "Aaron Comes to Meet You",
    text: "Your brother runs across the sand.\n\"The Lord sent me to find you.\"",
    choices: [
      { text: "Embrace him as brother", nextScene: "tell_elders", tag: "humble", feedback: "Joy returns to your bones.", isCorrect: true, sentiment: "positive" },
      { text: "Test him with hard words", nextScene: "test_aaron_consequence", tag: "prideful", feedback: "He is a gift, not a rival.", isCorrect: false, sentiment: "negative" },
    ],
  },
  test_aaron_consequence: {
    id: "test_aaron_consequence",
    title: "He Is Your Voice",
    text: "God Himself sent him to your side.\nReceive him with open arms.",
    choices: [
      { text: "Embrace him as brother", nextScene: "tell_elders", tag: "humble", feedback: "You hold him close.", isCorrect: true, sentiment: "positive" },
    ],
  },

  tell_elders: {
    id: "tell_elders",
    title: "Before the Elders of Israel",
    text: "Hebrew elders sit in the shadow.\nThey wait to hear from God.",
    choices: [
      { text: "Speak the words God gave", nextScene: "elders_believe", tag: "faithful", feedback: "Aaron speaks beside you.", isCorrect: true, sentiment: "positive" },
      { text: "Soften the message for them", nextScene: "soften_consequence", tag: "fearful", feedback: "His word is not yours to edit.", isCorrect: false, sentiment: "negative" },
      { text: "Boast of your own calling", nextScene: "boast_elders_consequence", tag: "prideful", feedback: "You are messenger, not master.", isCorrect: false, sentiment: "negative" },
    ],
  },
  soften_consequence: {
    id: "soften_consequence",
    title: "Speak It Whole",
    text: "What He gave you, give to them.\nDo not trim His word.",
    choices: [
      { text: "Speak the words God gave", nextScene: "elders_believe", tag: "faithful", feedback: "You begin again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_elders_consequence: {
    id: "boast_elders_consequence",
    title: "Not Your Glory",
    text: "It is His name that frees them.\nLower your eyes and speak.",
    choices: [
      { text: "Speak the words God gave", nextScene: "elders_believe", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },
  elders_believe: {
    id: "elders_believe",
    title: "And They Believed",
    text: "The signs are shown. The elders bow.\n\"The Lord has seen us at last.\"",
    choices: [
      { text: "Set out for the palace", nextScene: "palace_gates", tag: "brave", feedback: "Your heart steadies.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE PALACE ============
  palace_gates: {
    id: "palace_gates",
    title: "Gates of Pharaoh",
    text: "Stone giants flank the entrance.\nGuards watch you with cold eyes.",
    choices: [
      { text: "Ask audience with the king", nextScene: "court_official", tag: "obedient", feedback: "You speak with steady voice.", isCorrect: true, sentiment: "positive" },
      { text: "Force your way past guards", nextScene: "force_consequence", tag: "rash", feedback: "Iron will not open this door.", isCorrect: false, sentiment: "negative" },
      { text: "Bribe the gatekeeper", nextScene: "bribe_consequence", tag: "evasive", feedback: "God's word does not need silver.", isCorrect: false, sentiment: "negative" },
    ],
  },
  force_consequence: {
    id: "force_consequence",
    title: "Not by Strength",
    text: "Spears bar your way at once.\nAsk, do not seize.",
    choices: [
      { text: "Ask audience with the king", nextScene: "court_official", tag: "obedient", feedback: "You step back, then forward.", isCorrect: true, sentiment: "positive" },
    ],
  },
  bribe_consequence: {
    id: "bribe_consequence",
    title: "His Word, Not Coin",
    text: "You carry the name of the Lord.\nThat is gate enough.",
    choices: [
      { text: "Ask audience with the king", nextScene: "court_official", tag: "obedient", feedback: "You hide the silver away.", isCorrect: true, sentiment: "positive" },
    ],
  },

  court_official: {
    id: "court_official",
    title: "The King's Servant",
    text: "A bald scribe blocks the way.\n\"State your name and your god.\"",
    choices: [
      { text: "\"The God of the Hebrews sent us\"", nextScene: "enter_throne_hall", tag: "faithful", feedback: "He stiffens at the words.", isCorrect: true, sentiment: "positive" },
      { text: "Hide who sent you", nextScene: "hide_sender_consequence", tag: "fearful", feedback: "Hide His name and lose it.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_sender_consequence: {
    id: "hide_sender_consequence",
    title: "Do Not Hide Him",
    text: "He sent you in His name.\nSpeak it, even here.",
    choices: [
      { text: "\"The God of the Hebrews sent us\"", nextScene: "enter_throne_hall", tag: "faithful", feedback: "Your voice grows firm.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — BEFORE PHARAOH ============
  enter_throne_hall: {
    id: "enter_throne_hall",
    title: "Into the Light",
    text: "A shaft of sun falls on the throne.\nPharaoh waits, still as stone.",
    choices: [
      { text: "Approach with reverence to God", nextScene: "before_pharaoh", tag: "humble", feedback: "You bow only to Heaven.", isCorrect: true, sentiment: "positive" },
      { text: "Kneel and worship Pharaoh", nextScene: "worship_consequence", tag: "rebellious", feedback: "He is not your god.", isCorrect: false, sentiment: "negative" },
      { text: "Run from the hall", nextScene: "run_hall_consequence", tag: "fearful", feedback: "Stand. He is with you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  worship_consequence: {
    id: "worship_consequence",
    title: "Bow Only to Him",
    text: "No man wears the crown of God.\nStand and speak the truth.",
    choices: [
      { text: "Approach with reverence to God", nextScene: "before_pharaoh", tag: "humble", feedback: "You rise from your knees.", isCorrect: true, sentiment: "positive" },
    ],
  },
  run_hall_consequence: {
    id: "run_hall_consequence",
    title: "Do Not Flee Now",
    text: "He has gone before you here.\nSet your feet and speak.",
    choices: [
      { text: "Approach with reverence to God", nextScene: "before_pharaoh", tag: "humble", feedback: "You walk forward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  before_pharaoh: {
    id: "before_pharaoh",
    title: "The First Word",
    text: "Pharaoh's eyes weigh you in silence.\nThe court holds its breath.",
    choices: [
      { text: "\"Let my people go.\"", nextScene: "pharaoh_mocks", tag: "brave", feedback: "The words ring across the hall.", isCorrect: true, sentiment: "positive" },
      { text: "Beg favors for the Hebrews", nextScene: "beg_consequence", tag: "fearful", feedback: "It is a command, not a plea.", isCorrect: false, sentiment: "negative" },
      { text: "Threaten him with armies", nextScene: "threaten_consequence", tag: "prideful", feedback: "Your strength is His name.", isCorrect: false, sentiment: "negative" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Speak the Lord's Word",
    text: "Pity is not the message.\nDeliverance is.",
    choices: [
      { text: "\"Let my people go.\"", nextScene: "pharaoh_mocks", tag: "brave", feedback: "You straighten and speak.", isCorrect: true, sentiment: "positive" },
    ],
  },
  threaten_consequence: {
    id: "threaten_consequence",
    title: "His Word Is Enough",
    text: "You have no army at your back.\nYou have His name on your lips.",
    choices: [
      { text: "\"Let my people go.\"", nextScene: "pharaoh_mocks", tag: "brave", feedback: "You speak it again, plainly.", isCorrect: true, sentiment: "positive" },
    ],
  },

  pharaoh_mocks: {
    id: "pharaoh_mocks",
    title: "\"Who Is the Lord?\"",
    text: "\"I do not know your God,\nand I will not let Israel go.\"",
    choices: [
      { text: "Hold the word of the Lord", nextScene: "demand_again", tag: "faithful", feedback: "Your voice does not shake.", isCorrect: true, sentiment: "positive" },
      { text: "Curse Pharaoh in anger", nextScene: "curse_consequence", tag: "rash", feedback: "Speak God's word, not yours.", isCorrect: false, sentiment: "negative" },
      { text: "Apologize and withdraw", nextScene: "apologize_consequence", tag: "fearful", feedback: "Do not unsay His command.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Not Your Wrath",
    text: "Judgment belongs to the Lord.\nSpeak only what He gave.",
    choices: [
      { text: "Hold the word of the Lord", nextScene: "demand_again", tag: "faithful", feedback: "You quiet your tongue.", isCorrect: true, sentiment: "positive" },
    ],
  },
  apologize_consequence: {
    id: "apologize_consequence",
    title: "Do Not Take It Back",
    text: "His command stands, even here.\nRepeat it, do not retract it.",
    choices: [
      { text: "Hold the word of the Lord", nextScene: "demand_again", tag: "faithful", feedback: "You hold the line.", isCorrect: true, sentiment: "positive" },
    ],
  },

  demand_again: {
    id: "demand_again",
    title: "A Three Days' Journey",
    text: "\"Let us go to sacrifice in the desert,\nlest plague or sword find us.\"",
    choices: [
      { text: "Speak the request as given", nextScene: "pharaoh_refuses", tag: "obedient", feedback: "You deliver it whole.", isCorrect: true, sentiment: "positive" },
      { text: "Lie about your true purpose", nextScene: "lie_consequence", tag: "evasive", feedback: "Truth is your only ground.", isCorrect: false, sentiment: "negative" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "Do Not Lie for God",
    text: "His work needs no deceit.\nSpeak only what He told you.",
    choices: [
      { text: "Speak the request as given", nextScene: "pharaoh_refuses", tag: "obedient", feedback: "You speak the truth.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — REFUSAL & OPPRESSION ============
  pharaoh_refuses: {
    id: "pharaoh_refuses",
    title: "Pharaoh's Wrath",
    text: "\"You make the people idle!\nReturn to your burdens — now.\"",
    choices: [
      { text: "Stand silent before his rage", nextScene: "harsher_labor", tag: "humble", feedback: "You will not bow to him.", isCorrect: true, sentiment: "positive" },
      { text: "Argue louder with the king", nextScene: "argue_consequence", tag: "rash", feedback: "His heart only hardens more.", isCorrect: false, sentiment: "negative" },
      { text: "Flee the throne hall", nextScene: "flee_consequence", tag: "fearful", feedback: "Walk out, do not run.", isCorrect: false, sentiment: "negative" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "His Heart Is Stone",
    text: "Words alone will not move him.\nLet the Lord answer.",
    choices: [
      { text: "Stand silent before his rage", nextScene: "harsher_labor", tag: "humble", feedback: "You hold your peace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Do Not Run",
    text: "You came as a messenger of God.\nLeave standing, not fleeing.",
    choices: [
      { text: "Stand silent before his rage", nextScene: "harsher_labor", tag: "humble", feedback: "You straighten your shoulders.", isCorrect: true, sentiment: "positive" },
    ],
  },

  harsher_labor: {
    id: "harsher_labor",
    title: "No More Straw",
    text: "\"Let them gather their own straw.\nThe quota will not be lessened.\"",
    choices: [
      { text: "Carry the news to the people", nextScene: "foremen_beaten", tag: "obedient", feedback: "Hard truth, faithfully borne.", isCorrect: true, sentiment: "positive" },
      { text: "Hide the new decree from them", nextScene: "hide_decree_consequence", tag: "fearful", feedback: "They will know either way.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_decree_consequence: {
    id: "hide_decree_consequence",
    title: "They Must Know",
    text: "Silence will not soften the blow.\nGo and speak the truth.",
    choices: [
      { text: "Carry the news to the people", nextScene: "foremen_beaten", tag: "obedient", feedback: "You walk back to Goshen.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE BURDEN ============
  foremen_beaten: {
    id: "foremen_beaten",
    title: "The Foremen Bleed",
    text: "Hebrew foremen are struck for failing.\nBricks lie scattered in the dust.",
    choices: [
      { text: "Stay among the suffering", nextScene: "israelites_blame", tag: "humble", feedback: "You do not turn away.", isCorrect: true, sentiment: "positive" },
      { text: "Hide your face from them", nextScene: "hide_face_consequence", tag: "fearful", feedback: "They are still your people.", isCorrect: false, sentiment: "negative" },
      { text: "Strike a guard in vengeance", nextScene: "strike_guard_consequence", tag: "rash", feedback: "That sin already cost you years.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_face_consequence: {
    id: "hide_face_consequence",
    title: "Do Not Look Away",
    text: "Their wounds are part of the call.\nStand with them.",
    choices: [
      { text: "Stay among the suffering", nextScene: "israelites_blame", tag: "humble", feedback: "You step into the dust.", isCorrect: true, sentiment: "positive" },
    ],
  },
  strike_guard_consequence: {
    id: "strike_guard_consequence",
    title: "Not Again",
    text: "Once before you struck in rage.\nThis time, trust the Lord.",
    choices: [
      { text: "Stay among the suffering", nextScene: "israelites_blame", tag: "humble", feedback: "You lower your hand.", isCorrect: true, sentiment: "positive" },
    ],
  },

  israelites_blame: {
    id: "israelites_blame",
    title: "\"You Have Made Us Hated\"",
    text: "The foremen turn on you in grief.\n\"Pharaoh's sword is at our throats.\"",
    choices: [
      { text: "Take the blame in silence", nextScene: "moses_cries_out", tag: "humble", feedback: "You bear the weight.", isCorrect: true, sentiment: "positive" },
      { text: "Defend yourself proudly", nextScene: "defend_consequence", tag: "prideful", feedback: "Their pain is real. Listen.", isCorrect: false, sentiment: "negative" },
      { text: "Curse them for their unbelief", nextScene: "curse_people_consequence", tag: "rash", feedback: "They are crushed, not faithless.", isCorrect: false, sentiment: "negative" },
    ],
  },
  defend_consequence: {
    id: "defend_consequence",
    title: "Hear Their Pain",
    text: "Their backs bleed for your words.\nLet them speak it out.",
    choices: [
      { text: "Take the blame in silence", nextScene: "moses_cries_out", tag: "humble", feedback: "You lower your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_people_consequence: {
    id: "curse_people_consequence",
    title: "They Are Yours",
    text: "These are the flock you were given.\nDo not curse what He blesses.",
    choices: [
      { text: "Take the blame in silence", nextScene: "moses_cries_out", tag: "humble", feedback: "You hold your tongue.", isCorrect: true, sentiment: "positive" },
    ],
  },

  moses_cries_out: {
    id: "moses_cries_out",
    title: "Alone Before God",
    text: "Night falls on the brick fields.\nYou kneel beneath the cold stars.",
    choices: [
      { text: "Cry out: \"Why send me, Lord?\"", nextScene: "ending", tag: "faithful", feedback: "Honest grief is still prayer.", isCorrect: true, sentiment: "positive" },
      { text: "Resign and go back to Midian", nextScene: "resign_consequence", tag: "rebellious", feedback: "You cannot return now.", isCorrect: false, sentiment: "negative" },
      { text: "Blame Aaron for the failure", nextScene: "blame_aaron_consequence", tag: "prideful", feedback: "The burden is yours, not his.", isCorrect: false, sentiment: "negative" },
    ],
  },
  resign_consequence: {
    id: "resign_consequence",
    title: "He Is Not Done",
    text: "The work has barely begun.\nLift your eyes to Him.",
    choices: [
      { text: "Cry out: \"Why send me, Lord?\"", nextScene: "ending", tag: "faithful", feedback: "You raise your face.", isCorrect: true, sentiment: "positive" },
    ],
  },
  blame_aaron_consequence: {
    id: "blame_aaron_consequence",
    title: "He Is Your Helper",
    text: "Aaron was given to your weakness.\nDo not turn on him.",
    choices: [
      { text: "Cry out: \"Why send me, Lord?\"", nextScene: "ending", tag: "faithful", feedback: "You bring it to God instead.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "The Lord Will Answer",
    text: "Wind moves over the dark sand.\nHis hand is not yet revealed.",
    choices: [],
    isFinal: true,
  },
};
