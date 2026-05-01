import { StoryScene } from "@/data/stories/creation";

// JACOB AND ESAU — Genesis 25 & 27
// Branching narrative across two acts (the Birthright, the Blessing)
// converging on the canonical flight to Haran.
// Each scene: 1 biblical (positive) + 1–2 incorrect (negative) — max 3 options.

export const jacobEsauScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE BIRTHRIGHT ============
  start: {
    id: "start",
    title: "Two Nations in the Womb",
    text: "You are Jacob. From birth you grasped Esau's heel.\nHe runs the wild fields. You stay among the tents.",
    choices: [
      { text: "Cook lentil stew at the tent", nextScene: "the_stew", tag: "patient", feedback: "The pot bubbles. Red. Fragrant. The day is quiet.", isCorrect: true, sentiment: "positive" },
      { text: "Run after Esau into the open hills", nextScene: "hunt_consequence", tag: "imitating", feedback: "The thorns tear your robe. The hunt is not yours.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hunt_consequence: {
    id: "hunt_consequence",
    title: "Not Your Field",
    text: "Esau laughs from a ridge. \"Go home, brother.\nThe wild is mine.\" You walk back, empty.",
    choices: [
      { text: "Return to the tents and cook", nextScene: "the_stew", tag: "returning", feedback: "Mother smiles. \"The Lord's word is on the quiet ones.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_stew: {
    id: "the_stew",
    title: "Esau Returns Famished",
    text: "Esau staggers in from the field, faint with hunger.\n\"Quick — let me gulp some of that red stuff!\"",
    choices: [
      { text: "Ask for the birthright in exchange", nextScene: "the_oath", tag: "shrewd", feedback: "Your voice is steady. \"First sell me your birthright.\"", isCorrect: true, sentiment: "positive" },
      { text: "Just give him the stew freely", nextScene: "free_consequence", tag: "yielding", feedback: "He eats and leaves. The promise of Abraham passes you by.", isCorrect: false, sentiment: "negative" },
      { text: "Send him away — let him hunt his own", nextScene: "send_consequence", tag: "harsh", feedback: "He curses and storms off. Mercy was the smaller test.", isCorrect: false, sentiment: "negative" },
    ],
  },
  free_consequence: {
    id: "free_consequence",
    title: "A Door Reopens",
    text: "Days later, hunger drives him back. The Lord's choosing\nstill waits on a word — yours.",
    choices: [
      { text: "This time, ask for the birthright", nextScene: "the_oath", tag: "claiming", feedback: "He nods, weary. \"Take it. What good is it to me?\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  send_consequence: {
    id: "send_consequence",
    title: "He Comes Back",
    text: "He returns at dusk, softer, hungrier.\nA second chance walks through the tent flap.",
    choices: [
      { text: "Offer the stew for the birthright", nextScene: "the_oath", tag: "claiming", feedback: "\"Swear to me first.\" The pot steams between you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_oath: {
    id: "the_oath",
    title: "\"Swear to Me First\"",
    text: "\"Look — I'm about to die. What good is a birthright to me?\"\nHis hand reaches for the bowl.",
    choices: [
      { text: "Make him swear before you give it", nextScene: "stew_eaten", tag: "binding", feedback: "He swears. The birthright is yours. He eats. He leaves. He despises it.", isCorrect: true, sentiment: "positive" },
      { text: "Trust his word — hand him the bowl", nextScene: "trust_consequence", tag: "naive", feedback: "He eats, laughs, walks out. Nothing was sealed but bread.", isCorrect: false, sentiment: "negative" },
    ],
  },
  trust_consequence: {
    id: "trust_consequence",
    title: "Words Are Wind",
    text: "Mother takes you aside. \"A promise unsealed is no promise.\nWhen he comes again — bind him with an oath.\"",
    choices: [
      { text: "Wait, and bind him with an oath next time", nextScene: "stew_eaten", tag: "learning", feedback: "Esau returns. This time, he swears. The birthright is yours.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stew_eaten: {
    id: "stew_eaten",
    title: "Bread, Stew, and a Birthright",
    text: "Esau eats and drinks, rises and walks away.\nSo he despised his birthright. The years go on.",
    choices: [
      { text: "Keep the secret and live quietly", nextScene: "isaac_old", tag: "waiting", feedback: "Years pass. Isaac grows old, his eyes dim with age.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE BLESSING ============
  isaac_old: {
    id: "isaac_old",
    title: "Isaac Calls for Esau",
    text: "Father is old. His eyes see only shadows. He calls Esau:\n\"Hunt me venison. I will bless you before I die.\"",
    choices: [
      { text: "Wait quietly — go to your mother Rebekah", nextScene: "rebekah_plan", tag: "listening", feedback: "She has heard everything. Her eyes are bright with purpose.", isCorrect: true, sentiment: "positive" },
      { text: "Confront Esau — demand the blessing now", nextScene: "confront_consequence", tag: "rash", feedback: "He laughs. \"You have my birthright. The blessing is mine.\"", isCorrect: false, sentiment: "negative" },
      { text: "Walk away — the blessing is not for you", nextScene: "walkaway_consequence", tag: "resigning", feedback: "Mother stops you at the door. \"The Lord told me — the older shall serve the younger.\"", isCorrect: false, sentiment: "negative" },
    ],
  },
  confront_consequence: {
    id: "confront_consequence",
    title: "Mother Calls You Aside",
    text: "Rebekah pulls you into the inner tent.\n\"Do nothing yet. Listen — and obey my voice.\"",
    choices: [
      { text: "Listen to your mother's plan", nextScene: "rebekah_plan", tag: "yielding", feedback: "You sit. Her voice is low and certain.", isCorrect: true, sentiment: "positive" },
    ],
  },
  walkaway_consequence: {
    id: "walkaway_consequence",
    title: "The Word at Your Birth",
    text: "\"Two nations are in your womb,\" the Lord told her.\n\"The older shall serve the younger.\" She remembers.",
    choices: [
      { text: "Listen to her plan", nextScene: "rebekah_plan", tag: "yielding", feedback: "You bow your head. \"Tell me what to do.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  rebekah_plan: {
    id: "rebekah_plan",
    title: "\"Obey My Voice\"",
    text: "\"Bring me two young goats. I will make a dish your father loves.\nYou will go to him and receive the blessing.\"",
    choices: [
      { text: "\"But Esau is hairy, and I am smooth…\"", nextScene: "the_disguise", tag: "uncertain", feedback: "She covers your arms with the kid-skins. \"My son, let the curse fall on me.\"", isCorrect: true, sentiment: "positive" },
      { text: "Refuse — the deception is too great", nextScene: "refuse_blessing", tag: "refusing", feedback: "She holds your face. \"The Lord has spoken. Do not turn back now.\"", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_blessing: {
    id: "refuse_blessing",
    title: "The Word Stands",
    text: "\"The promise is on you. The Lord said it before you were born.\nObey my voice, my son. Only obey.\"",
    choices: [
      { text: "Accept — let her dress you", nextScene: "the_disguise", tag: "yielding", feedback: "The kid-skins are warm against your arms. Your heart pounds.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_disguise: {
    id: "the_disguise",
    title: "Esau's Garments",
    text: "She brings Esau's best robes — they smell of the open field.\nThe kid-skins cover your hands and the smooth of your neck.",
    choices: [
      { text: "Take the dish and go to your father", nextScene: "father_tent", tag: "going", feedback: "The savory smell rises around you. You step toward the inner tent.", isCorrect: true, sentiment: "positive" },
    ],
  },
  father_tent: {
    id: "father_tent",
    title: "\"Who Are You, My Son?\"",
    text: "Isaac lifts his blind face. \"Who is it?\"\nYour throat is dry. The moment hangs.",
    choices: [
      { text: "\"I am Esau your firstborn.\"", nextScene: "the_test", tag: "claiming", feedback: "The words leave your lips. The tent holds its breath.", isCorrect: true, sentiment: "positive" },
      { text: "\"It is I, Jacob — forgive me.\"", nextScene: "confess_consequence", tag: "confessing", feedback: "He recoils. \"Then leave me — go!\" The blessing slips away.", isCorrect: false, sentiment: "negative" },
      { text: "Stay silent and offer the dish", nextScene: "silent_consequence", tag: "silent", feedback: "\"Speak, my son. Who are you?\" There is no path forward without words.", isCorrect: false, sentiment: "negative" },
    ],
  },
  confess_consequence: {
    id: "confess_consequence",
    title: "Mother at the Door",
    text: "Rebekah pulls you back. \"The hour is now. Esau returns soon.\nGo back. Speak the words I gave you.\"",
    choices: [
      { text: "Return and say, \"I am Esau your firstborn.\"", nextScene: "the_test", tag: "returning", feedback: "You step back into the tent. Your father turns his head.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "He Asks Again",
    text: "\"My son — speak. Who is it?\"\nThe silence cannot hold.",
    choices: [
      { text: "Answer, \"I am Esau your firstborn.\"", nextScene: "the_test", tag: "claiming", feedback: "The words come. \"I have done as you asked. Sit and eat.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_test: {
    id: "the_test",
    title: "\"Come Near That I May Feel You\"",
    text: "Isaac reaches out trembling hands.\n\"The voice is Jacob's, but the hands are Esau's.\"",
    choices: [
      { text: "Hold still and let him feel the kid-skins", nextScene: "the_blessing", tag: "steady", feedback: "His fingers pass over the rough hair. \"Are you truly my son Esau?\"", isCorrect: true, sentiment: "positive" },
      { text: "Pull back — flee the tent", nextScene: "flee_consequence", tag: "fleeing", feedback: "Rebekah catches you outside. \"Go back. The Lord's hand is on this hour.\"", isCorrect: false, sentiment: "negative" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "No Time Left",
    text: "Esau is already on the hills. The window closes.\n\"Go back, my son. Now.\"",
    choices: [
      { text: "Return and stand still", nextScene: "the_blessing", tag: "returning", feedback: "You enter again. He reaches out. You let him feel.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_blessing: {
    id: "the_blessing",
    title: "The Words of Blessing",
    text: "\"May God give you the dew of heaven and the fatness of the earth.\nLet peoples serve you. Cursed be those who curse you.\"",
    choices: [
      { text: "Receive the blessing and slip away", nextScene: "esau_returns", tag: "receiving", feedback: "You bow. You leave. The tent flap falls behind you like a closing door.", isCorrect: true, sentiment: "positive" },
    ],
  },
  esau_returns: {
    id: "esau_returns",
    title: "Esau Returns from the Hunt",
    text: "From outside the tent you hear his voice — then a great cry.\n\"Bless me, even me also, O my father!\"",
    choices: [
      { text: "Listen, hidden behind the tent", nextScene: "esau_wrath", tag: "hiding", feedback: "Isaac trembles. \"Your brother came in deceit and took your blessing.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  esau_wrath: {
    id: "esau_wrath",
    title: "\"I Will Kill My Brother\"",
    text: "Esau's voice rises like fire. \"The days of mourning my father\nare near. Then I will slay Jacob.\"",
    choices: [
      { text: "Run to your mother", nextScene: "rebekah_warning", tag: "fleeing", feedback: "She is already waiting, her face pale. \"Flee at once to my brother Laban.\"", isCorrect: true, sentiment: "positive" },
      { text: "Confront Esau — beg his forgiveness", nextScene: "confront_esau_consequence", tag: "rash", feedback: "His knife is half-drawn. Mother pulls you back through the tent flap.", isCorrect: false, sentiment: "negative" },
    ],
  },
  confront_esau_consequence: {
    id: "confront_esau_consequence",
    title: "Not Yet — Not Now",
    text: "Rebekah holds your face. \"He will not hear you tonight.\nGo to Haran. To my brother. Until his fury turns away.\"",
    choices: [
      { text: "Go to your mother's plan", nextScene: "rebekah_warning", tag: "yielding", feedback: "You bow. The night is wide. The road to Haran is far.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rebekah_warning: {
    id: "rebekah_warning",
    title: "\"Flee to Haran\"",
    text: "\"Stay with Laban a few days, until your brother's anger turns.\nI will send for you. Why should I lose you both in one day?\"",
    choices: [
      { text: "Pack lightly and slip out at dusk", nextScene: "isaac_sends", tag: "obedient", feedback: "She kisses your forehead. \"The Lord be with you, my son.\"", isCorrect: true, sentiment: "positive" },
      { text: "Refuse — you will not run", nextScene: "refuse_flee_consequence", tag: "stubborn", feedback: "\"Then you will die,\" she whispers. \"And the promise dies with you.\"", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_flee_consequence: {
    id: "refuse_flee_consequence",
    title: "The Promise Must Live",
    text: "Her grip is iron. \"The Lord chose you before your birth.\nFlee tonight. Live. Return when it is time.\"",
    choices: [
      { text: "Yield and prepare to leave", nextScene: "isaac_sends", tag: "yielding", feedback: "You gather a staff and a cloak. Nothing more.", isCorrect: true, sentiment: "positive" },
    ],
  },
  isaac_sends: {
    id: "isaac_sends",
    title: "A Father's Last Word",
    text: "Isaac calls you in. He lays his hand on your head once more.\n\"Take a wife from Laban's daughters. May God Almighty bless you.\"",
    choices: [
      { text: "Bow, and set out alone toward Haran", nextScene: "the_road", tag: "departing", feedback: "The blessing is sealed. You step into the dusk with a staff in your hand.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_road: {
    id: "the_road",
    title: "The Long Road East",
    text: "Behind you — the tents of your father.\nAhead — Haran, and a stone for a pillow under a wide sky.",
    choices: [],
    isFinal: true,
  },
};
