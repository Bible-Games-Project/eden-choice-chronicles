import { StoryScene } from "@/data/stories/creation";

// APPEARANCE TO MARY MAGDALENE — John 20:11-18
// You ARE Mary Magdalene. Focus: recognition, joy, transformation.
// Dialogue ≤100 chars, choices ≤40 chars.

export const appearanceMaryScenes: Record<string, StoryScene> = {
  // ACT I — GRIEF AT THE TOMB
  start: {
    id: "start",
    title: "Tears at Dawn",
    text: "The tomb is open. He is gone.\nYour tears fall on the cold stone.",
    choices: [
      { text: "Run away in despair", nextScene: "run_consequence", tag: "fearful", feedback: "Stay. Hope is closer than you know.", isCorrect: false, sentiment: "negative" },
      { text: "Stay and weep at the door", nextScene: "angels_ask", tag: "humble", feedback: "John 20:11 — Mary Magdalene stood outside the tomb weeping.", isCorrect: true, sentiment: "positive" },
      { text: "Curse those who took Him", nextScene: "curse_consequence", tag: "wrathful", feedback: "Anger blinds the eyes to wonder.", isCorrect: false, sentiment: "negative" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "Do Not Flee",
    text: "Love does not run from an empty grave.\nLinger. Something holy waits here.",
    choices: [
      { text: "Stay and weep at the door", nextScene: "angels_ask", tag: "humble", feedback: "You return, breath trembling.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Not Anger",
    text: "No hand stole Him. Be still.\nLet your tears speak instead.",
    choices: [
      { text: "Stay and weep at the door", nextScene: "angels_ask", tag: "humble", feedback: "You bow your head softly.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE ANGELS
  angels_ask: {
    id: "angels_ask",
    title: "Two in White",
    text: "Two shining figures ask gently,\n\"Woman, why are you weeping?\"",
    choices: [
      { text: "Boast you knew Him best", nextScene: "boast_consequence", tag: "prideful", feedback: "Grief is not a crown.", isCorrect: false, sentiment: "negative" },
      { text: "Demand they return His body", nextScene: "demand_consequence", tag: "wrathful", feedback: "They did not take Him.", isCorrect: false, sentiment: "negative" },
      { text: "Answer them through your tears", nextScene: "stranger", tag: "humble", feedback: "John 20:13 — Mary Magdalene answered the angels, \"They have taken away my Lord, and I do not know where they have laid Him.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Not Pride",
    text: "This sorrow is not yours alone.\nSpeak simply. Tell them your grief.",
    choices: [
      { text: "Answer them through your tears", nextScene: "stranger", tag: "humble", feedback: "Honesty opens the moment.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Not Demand",
    text: "Heaven does not answer demands.\nSpeak softly. Let love show.",
    choices: [
      { text: "Answer them through your tears", nextScene: "stranger", tag: "humble", feedback: "Your voice softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE STRANGER
  stranger: {
    id: "stranger",
    title: "Someone Behind You",
    text: "You turn. A figure stands in soft light.\nYou think He is the gardener.",
    choices: [
      { text: "Ignore Him and look away", nextScene: "ignore_consequence", tag: "fearful", feedback: "Listen. He is about to speak.", isCorrect: false, sentiment: "negative" },
      { text: "Speak to Him in plain hope", nextScene: "gardener_dialog", tag: "humble", feedback: "John 20:15 — Mary Magdalene, supposing Him to be the gardener, asked Him where He had laid Jesus.", isCorrect: true, sentiment: "positive" },
      { text: "Accuse Him of moving the body", nextScene: "accuse_consequence", tag: "wrathful", feedback: "Accusation closes the heart.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Do Not Turn Away",
    text: "He waits with patience for you.\nLift your eyes and speak.",
    choices: [
      { text: "Speak to Him in plain hope", nextScene: "gardener_dialog", tag: "humble", feedback: "You face Him at last.", isCorrect: true, sentiment: "positive" },
    ],
  },
  accuse_consequence: {
    id: "accuse_consequence",
    title: "Not Accusation",
    text: "Do not wound the stranger.\nAsk simply, and you will be heard.",
    choices: [
      { text: "Speak to Him in plain hope", nextScene: "gardener_dialog", tag: "humble", feedback: "Your words soften to a plea.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE PLEA
  gardener_dialog: {
    id: "gardener_dialog",
    title: "Tell Me Where",
    text: "\"Sir, if you took Him, tell me where,\nand I will carry Him away.\"",
    choices: [
      { text: "Beg with anger and tears", nextScene: "beg_consequence", tag: "wrathful", feedback: "Lower your voice. Listen.", isCorrect: false, sentiment: "negative" },
      { text: "Wait quietly for His answer", nextScene: "name_called", tag: "humble", feedback: "John 20:15 — Mary Magdalene asked the man she thought was the gardener to tell her where he had laid Jesus so she could take Him away.", isCorrect: true, sentiment: "positive" },
      { text: "Walk off to keep searching", nextScene: "walk_consequence", tag: "fearful", feedback: "The answer is right here.", isCorrect: false, sentiment: "negative" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Be Still",
    text: "Anger drowns the voice you long for.\nQuiet your heart and listen.",
    choices: [
      { text: "Wait quietly for His answer", nextScene: "name_called", tag: "humble", feedback: "Stillness opens your ears.", isCorrect: true, sentiment: "positive" },
    ],
  },
  walk_consequence: {
    id: "walk_consequence",
    title: "Do Not Leave",
    text: "What you seek stands beside you.\nTurn back. Be present.",
    choices: [
      { text: "Wait quietly for His answer", nextScene: "name_called", tag: "humble", feedback: "You stay, eyes lowered.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE NAME
  name_called: {
    id: "name_called",
    title: "He Speaks Your Name",
    text: "One word. Soft. Familiar.\n\"Mary.\" The world stops.",
    choices: [
      { text: "Doubt your own ears", nextScene: "doubt_consequence", tag: "fearful", feedback: "Trust the voice you know.", isCorrect: false, sentiment: "negative" },
      { text: "Reason it must be someone else", nextScene: "reason_consequence", tag: "prideful", feedback: "Only He speaks like this.", isCorrect: false, sentiment: "negative" },
      { text: "Turn fully toward His voice", nextScene: "recognition", tag: "humble", feedback: "John 20:16 — When Jesus called her name, Mary Magdalene turned and recognized Him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Trust the Voice",
    text: "No other voice has called you home.\nLet your name reach your heart.",
    choices: [
      { text: "Turn fully toward His voice", nextScene: "recognition", tag: "humble", feedback: "You turn, trembling.", isCorrect: true, sentiment: "positive" },
    ],
  },
  reason_consequence: {
    id: "reason_consequence",
    title: "Beyond Reason",
    text: "Some moments do not bend to logic.\nTurn. See with your own eyes.",
    choices: [
      { text: "Turn fully toward His voice", nextScene: "recognition", tag: "humble", feedback: "You face Him at last.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — RECOGNITION
  recognition: {
    id: "recognition",
    title: "Rabboni",
    text: "It is Him. Alive. Radiant.\n\"Rabboni!\" bursts from your lips.",
    choices: [
      { text: "Cling to Him with all your strength", nextScene: "cling_consequence", tag: "fearful", feedback: "Joy does not need to grasp.", isCorrect: false, sentiment: "negative" },
      { text: "Fall and worship in awe", nextScene: "do_not_cling", tag: "humble", feedback: "John 20:16 — Mary Magdalene turned and said to Him, \"Rabboni!\" (which means Teacher).", isCorrect: true, sentiment: "positive" },
      { text: "Faint and look away in fear", nextScene: "faint_consequence", tag: "fearful", feedback: "Lift your eyes. He is here.", isCorrect: false, sentiment: "negative" },
    ],
  },
  cling_consequence: {
    id: "cling_consequence",
    title: "Do Not Hold On",
    text: "He says, \"Do not cling to me.\nI have not yet ascended.\"",
    choices: [
      { text: "Fall and worship in awe", nextScene: "do_not_cling", tag: "humble", feedback: "Your hands open, releasing.", isCorrect: true, sentiment: "positive" },
    ],
  },
  faint_consequence: {
    id: "faint_consequence",
    title: "Rise and See",
    text: "He is not a ghost. He is risen.\nLift your eyes and meet Him.",
    choices: [
      { text: "Fall and worship in awe", nextScene: "do_not_cling", tag: "humble", feedback: "You rise on shaking knees.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — THE COMMISSION
  do_not_cling: {
    id: "do_not_cling",
    title: "Go to My Brothers",
    text: "\"Go tell my brothers,\" He says.\n\"I ascend to my Father and yours.\"",
    choices: [
      { text: "Refuse. Stay here with Him", nextScene: "refuse_consequence", tag: "fearful", feedback: "Love sends. Love obeys.", isCorrect: false, sentiment: "negative" },
      { text: "Go at once with His message", nextScene: "tell_disciples", tag: "merciful", feedback: "John 20:17 — Jesus told Mary Magdalene not to cling to Him, but to go to His brothers and tell them He was ascending to His Father and their Father, to His God and their God.", isCorrect: true, sentiment: "positive" },
      { text: "Argue they will not believe you", nextScene: "argue_consequence", tag: "prideful", feedback: "Speak the truth anyway.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "He Sends You",
    text: "This joy is meant to be carried.\nGo. The others wait in darkness.",
    choices: [
      { text: "Go at once with His message", nextScene: "tell_disciples", tag: "merciful", feedback: "You turn toward the city.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Tell Them Anyway",
    text: "Belief is not yours to give.\nYour task is only to tell.",
    choices: [
      { text: "Go at once with His message", nextScene: "tell_disciples", tag: "merciful", feedback: "You set out without delay.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — THE TELLING
  tell_disciples: {
    id: "tell_disciples",
    title: "I Have Seen the Lord",
    text: "Hands trembling, you knock and speak:\n\"I have seen the Lord!\"",
    choices: [
      { text: "Speak with quiet, steady joy", nextScene: "ending", tag: "merciful", feedback: "John 20:18 — Mary Magdalene went and announced to the disciples, \"I have seen the Lord,\" and told them what He had said to her.", isCorrect: true, sentiment: "positive" },
      { text: "Boast you were chosen first", nextScene: "pride_end_consequence", tag: "prideful", feedback: "Joy belongs to everyone.", isCorrect: false, sentiment: "negative" },
      { text: "Whisper, afraid of their faces", nextScene: "whisper_consequence", tag: "fearful", feedback: "Speak boldly. He is risen.", isCorrect: false, sentiment: "negative" },
    ],
  },
  pride_end_consequence: {
    id: "pride_end_consequence",
    title: "Joy for All",
    text: "This morning belongs to everyone.\nGive the news, not yourself.",
    choices: [
      { text: "Speak with quiet, steady joy", nextScene: "ending", tag: "merciful", feedback: "You lower your voice in awe.", isCorrect: true, sentiment: "positive" },
    ],
  },
  whisper_consequence: {
    id: "whisper_consequence",
    title: "Speak Clearly",
    text: "Hope must be heard to be carried.\nLift your voice. Tell them all.",
    choices: [
      { text: "Speak with quiet, steady joy", nextScene: "ending", tag: "merciful", feedback: "Your words ring out clearly.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "He Is Risen Indeed",
    text: "He called your name. You are changed.\nThe morning belongs to hope.",
    choices: [],
    isFinal: true,
  },
};
