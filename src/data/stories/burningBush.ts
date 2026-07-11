import { StoryScene } from "@/data/stories/creation";

// THE BURNING BUSH — Exodus 3:1–4:17
// You are Moses, a shepherd in Midian.
// 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars. Choice order randomized per scene.

export const burningBushScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE WILDERNESS ============
  start: {
    id: "start",
    title: "Beyond the Wilderness",
    text: "You lead the flock past familiar hills.\nA strange light flickers ahead.",
    choices: [
      { text: "Turn aside to look", nextScene: "approach_mountain", tag: "curious", feedback: "Exodus 3:3 — Moses turned aside to look at the great sight of the burning bush.", isCorrect: true, sentiment: "positive" },
      { text: "Ignore it. Stay with sheep.", nextScene: "ignore_consequence", tag: "fearful", feedback: "The light keeps calling.", isCorrect: false, sentiment: "negative" },
      { text: "Throw a stone at it", nextScene: "stone_consequence", tag: "rash", feedback: "Sacred things are not toys.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "It Will Not Leave You",
    text: "The light flickers brighter still.\nYou cannot pretend you did not see.",
    choices: [
      { text: "Turn aside to look", nextScene: "approach_mountain", tag: "curious", feedback: "You walk toward it.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stone_consequence: {
    id: "stone_consequence",
    title: "Not Like That",
    text: "Mockery suits a child, not a man.\nGo and see with humility.",
    choices: [
      { text: "Turn aside to look", nextScene: "approach_mountain", tag: "curious", feedback: "You walk toward it.", isCorrect: true, sentiment: "positive" },
    ],
  },
  approach_mountain: {
    id: "approach_mountain",
    title: "Toward the Mountain",
    text: "Horeb rises before you in silence.\nThe glow is on its slope.",
    choices: [
      { text: "Climb closer to see", nextScene: "see_bush", tag: "brave", feedback: "Exodus 3:1 — Moses led the flock to Horeb, the mountain of God.", isCorrect: true, sentiment: "positive" },
      { text: "Run back to the camp", nextScene: "run_back_consequence", tag: "fearful", feedback: "You cannot outrun this.", isCorrect: false, sentiment: "negative" },
      { text: "Call your father-in-law", nextScene: "call_jethro_consequence", tag: "evasive", feedback: "This sight is meant for you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  run_back_consequence: {
    id: "run_back_consequence",
    title: "You Cannot Outrun It",
    text: "The glow burns in your memory.\nReturn and see the truth.",
    choices: [
      { text: "Climb closer to see", nextScene: "see_bush", tag: "brave", feedback: "You turn back to the slope.", isCorrect: true, sentiment: "positive" },
    ],
  },
  call_jethro_consequence: {
    id: "call_jethro_consequence",
    title: "This Is for You",
    text: "No one else is meant to stand here.\nGo, and look.",
    choices: [
      { text: "Climb closer to see", nextScene: "see_bush", tag: "brave", feedback: "You go alone.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE BUSH ============
  see_bush: {
    id: "see_bush",
    title: "It Burns and Is Not Consumed",
    text: "Flame wraps the bush. Yet it stands whole.\nNothing turns to ash.",
    choices: [
      { text: "Step closer with wonder", nextScene: "voice_calls", tag: "wise", feedback: "Exodus 3:3 — Moses said, \"I will now turn aside and see this great sight, why the bush does not burn.\"", isCorrect: true, sentiment: "positive" },
      { text: "Smother the flames", nextScene: "smother_consequence", tag: "rash", feedback: "This fire is not yours to stop.", isCorrect: false, sentiment: "negative" },
      { text: "Hide behind a rock", nextScene: "hide_consequence", tag: "fearful", feedback: "Do not turn from holy ground.", isCorrect: false, sentiment: "negative" },
    ],
  },
  smother_consequence: {
    id: "smother_consequence",
    title: "Do Not Touch",
    text: "This fire is not of your world.\nApproach with awe, not hands.",
    choices: [
      { text: "Step closer with wonder", nextScene: "voice_calls", tag: "wise", feedback: "You lower your hands.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Do Not Hide",
    text: "What hides from you is also revealed.\nStep into the light.",
    choices: [
      { text: "Step closer with wonder", nextScene: "voice_calls", tag: "wise", feedback: "You step out from the rock.", isCorrect: true, sentiment: "positive" },
    ],
  },
  voice_calls: {
    id: "voice_calls",
    title: "\"Moses! Moses!\"",
    text: "A voice from the flame calls your name.\nIt knows you fully.",
    choices: [
      { text: "Answer: \"Here I am.\"", nextScene: "remove_sandals", tag: "humble", feedback: "Exodus 3:4 — God called to Moses from the midst of the bush, \"Moses, Moses!\" And Moses said, \"Here I am.\"", isCorrect: true, sentiment: "positive" },
      { text: "Demand who is speaking", nextScene: "demand_consequence", tag: "prideful", feedback: "Reverence comes before knowing.", isCorrect: false, sentiment: "negative" },
      { text: "Stay silent and wait", nextScene: "silent_consequence", tag: "fearful", feedback: "He has called. Answer Him.", isCorrect: false, sentiment: "negative" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Bow First",
    text: "You stand before holiness, not a man.\nAnswer with humility.",
    choices: [
      { text: "Answer: \"Here I am.\"", nextScene: "remove_sandals", tag: "humble", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Answer Him",
    text: "He called your name aloud.\nDo not leave Him with silence.",
    choices: [
      { text: "Answer: \"Here I am.\"", nextScene: "remove_sandals", tag: "humble", feedback: "Your voice trembles.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — HOLY GROUND ============
  remove_sandals: {
    id: "remove_sandals",
    title: "Holy Ground",
    text: "\"Take off your sandals, Moses.\nThe place where you stand is holy.\"",
    choices: [
      { text: "Take off your sandals", nextScene: "hide_face", tag: "obedient", feedback: "Exodus 3:5 — God commanded Moses to take off his sandals because the place where he stood was holy ground.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse — stones will hurt", nextScene: "refuse_sandals_consequence", tag: "stubborn", feedback: "Obedience first, comfort after.", isCorrect: false, sentiment: "negative" },
      { text: "Argue this is unnecessary", nextScene: "argue_sandals_consequence", tag: "prideful", feedback: "He decides what is holy.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_sandals_consequence: {
    id: "refuse_sandals_consequence",
    title: "Obey First",
    text: "Comfort matters less than holiness.\nDo as He asks.",
    choices: [
      { text: "Take off your sandals", nextScene: "hide_face", tag: "obedient", feedback: "You bend down slowly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_sandals_consequence: {
    id: "argue_sandals_consequence",
    title: "He Decides",
    text: "He is the one who calls it holy.\nKneel and obey.",
    choices: [
      { text: "Take off your sandals", nextScene: "hide_face", tag: "obedient", feedback: "You bend down slowly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_face: {
    id: "hide_face",
    title: "I Am the God of Your Fathers",
    text: "\"I am the God of Abraham, Isaac,\nand Jacob.\" You hide your face.",
    choices: [
      { text: "Listen with reverence", nextScene: "see_affliction", tag: "humble", feedback: "Exodus 3:6 — Moses hid his face, for he was afraid to look upon God.", isCorrect: true, sentiment: "positive" },
      { text: "Look up to see Him", nextScene: "look_up_consequence", tag: "prideful", feedback: "No man may see and live.", isCorrect: false, sentiment: "negative" },
    ],
  },
  look_up_consequence: {
    id: "look_up_consequence",
    title: "Lower Your Eyes",
    text: "His glory is more than you can bear.\nListen, do not stare.",
    choices: [
      { text: "Listen with reverence", nextScene: "see_affliction", tag: "humble", feedback: "You bow lower.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE MISSION ============
  see_affliction: {
    id: "see_affliction",
    title: "I Have Seen Their Misery",
    text: "\"I have heard My people cry in Egypt.\nI will deliver them by your hand.\"",
    choices: [
      { text: "Ask: \"Who am I to go?\"", nextScene: "i_will_be_with_you", tag: "humble", feedback: "Exodus 3:11 — Moses said to God, \"Who am I that I should go to Pharaoh, and that I should bring the children of Israel out of Egypt?\"", isCorrect: true, sentiment: "positive" },
      { text: "Boast you can lead them", nextScene: "boast_consequence", tag: "prideful", feedback: "Pride is not strength.", isCorrect: false, sentiment: "negative" },
      { text: "Refuse the mission outright", nextScene: "refuse_consequence", tag: "rebellious", feedback: "Do not flee what He calls.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Not by Your Might",
    text: "It is not your strength that frees them.\nSpeak honestly.",
    choices: [
      { text: "Ask: \"Who am I to go?\"", nextScene: "i_will_be_with_you", tag: "humble", feedback: "You speak the truth.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Do Not Flee",
    text: "You ran from Egypt once before.\nThis time, listen first.",
    choices: [
      { text: "Ask: \"Who am I to go?\"", nextScene: "i_will_be_with_you", tag: "humble", feedback: "You bow again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  i_will_be_with_you: {
    id: "i_will_be_with_you",
    title: "I Will Be With You",
    text: "\"I will be with you,\" He says.\n\"This shall be the sign.\"",
    choices: [
      { text: "Ask His name to tell them", nextScene: "i_am", tag: "wise", feedback: "Exodus 3:13 — Moses said to God, \"Indeed, when I come to the children of Israel and say to them, 'The God of your fathers has sent me to you,' and they say to me, 'What is His name?' what shall I tell them?\"", isCorrect: true, sentiment: "positive" },
      { text: "Bargain for more proof", nextScene: "bargain_consequence", tag: "doubtful", feedback: "His word is enough.", isCorrect: false, sentiment: "negative" },
    ],
  },
  bargain_consequence: {
    id: "bargain_consequence",
    title: "His Word Is Enough",
    text: "He has spoken. Trust the voice.\nAsk only what is needed.",
    choices: [
      { text: "Ask His name to tell them", nextScene: "i_am", tag: "wise", feedback: "You ask plainly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  i_am: {
    id: "i_am",
    title: "I AM WHO I AM",
    text: "\"Tell them I AM has sent you.\"\nThe name fills the silence.",
    choices: [
      { text: "Receive the name in awe", nextScene: "accept_mission", tag: "faithful", feedback: "Exodus 3:14 — God tells Moses His name is \"I AM WHO I AM.\"", isCorrect: true, sentiment: "positive" },
      { text: "Question what it means", nextScene: "question_consequence", tag: "doubtful", feedback: "Some names you simply receive.", isCorrect: false, sentiment: "negative" },
    ],
  },
  question_consequence: {
    id: "question_consequence",
    title: "Some Names Are Received",
    text: "You will not grasp it with the mind.\nReceive it with the heart.",
    choices: [
      { text: "Receive the name in awe", nextScene: "accept_mission", tag: "faithful", feedback: "You hold it in silence.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE RETURN ============
  accept_mission: {
    id: "accept_mission",
    title: "Go, Moses",
    text: "\"Go. Speak to Pharaoh.\nLead My people out of Egypt.\"",
    choices: [
      { text: "Accept and bow your head", nextScene: "stand_resolved", tag: "obedient", feedback: "Exodus 3:10 — God commands Moses to go to Pharaoh and bring the Israelites out of Egypt.", isCorrect: true, sentiment: "positive" },
      { text: "Plead you cannot speak well", nextScene: "plead_consequence", tag: "fearful", feedback: "He will give you the words.", isCorrect: false, sentiment: "negative" },
      { text: "Ask Him to send another", nextScene: "another_consequence", tag: "rebellious", feedback: "He has chosen you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  plead_consequence: {
    id: "plead_consequence",
    title: "He Will Give the Words",
    text: "Your tongue is not your strength.\nHis word will be on your lips.",
    choices: [
      { text: "Accept and bow your head", nextScene: "stand_resolved", tag: "obedient", feedback: "You answer yes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  another_consequence: {
    id: "another_consequence",
    title: "He Has Chosen You",
    text: "It is your name He called by the bush.\nYou cannot pass it on.",
    choices: [
      { text: "Accept and bow your head", nextScene: "stand_resolved", tag: "obedient", feedback: "You answer yes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stand_resolved: {
    id: "stand_resolved",
    title: "You Rise",
    text: "The flame still burns. The bush still stands.\nYour heart is no longer the same.",
    choices: [
      { text: "Set your face toward Egypt", nextScene: "ending", tag: "brave", feedback: "Exodus 4:18-20 — Moses left Midian with his family to return to Egypt, carrying the staff of God.", isCorrect: true, sentiment: "positive" },
      { text: "Return to the sheep instead", nextScene: "return_sheep_consequence", tag: "fearful", feedback: "You are no longer a shepherd of sheep.", isCorrect: false, sentiment: "negative" },
    ],
  },
  return_sheep_consequence: {
    id: "return_sheep_consequence",
    title: "Not Sheep — A People",
    text: "Your flock now is the children of Israel.\nTurn toward Egypt.",
    choices: [
      { text: "Set your face toward Egypt", nextScene: "ending", tag: "brave", feedback: "You take the first step.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "Toward Egypt",
    text: "The desert opens before you.\nGod walks unseen at your side.",
    choices: [],
    isFinal: true,
  },
};
