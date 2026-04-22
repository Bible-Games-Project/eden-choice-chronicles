import { StoryScene } from "@/data/stories/creation";

export const sacrificeIsaacScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE CALL ============
  start: {
    id: "start",
    title: "A Voice in the Night",
    text: "The fire in your tent has burned low.\nIsaac sleeps beside Sarah — the son of promise, the laughter of your old age.\nThen, in the silence, a voice you have known all your life: \"Abraham.\"",
    choices: [
      { text: "Answer at once: \"Here I am\"", nextScene: "the_command", tag: "obedient", feedback: "The word leaves you before fear can catch it. \"Here I am, Lord.\"", sentiment: "positive" },
      { text: "Pretend you did not hear", nextScene: "doubt_consequence", tag: "evasive", feedback: "You pull the blanket higher. The voice does not move on.", sentiment: "negative" },
      { text: "Demand to know what He wants first", nextScene: "doubt_consequence", tag: "guarded", feedback: "Your heart bargains before it has even listened. The silence grows heavier.", sentiment: "negative" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "He Does Not Pass By",
    text: "The voice does not leave. It waits — patient, immense, certain.\nYou cannot run from the One who called you out of Ur.\nYou rise from the bed and step into the cold air.",
    choices: [
      { text: "Bow low and answer at last: \"Here I am\"", nextScene: "the_command", tag: "yielding", feedback: "You touch your forehead to the sand. \"Here I am, Lord.\"", sentiment: "positive" },
    ],
  },
  the_command: {
    id: "the_command",
    title: "Take Your Son",
    text: "The words come, slow and terrible:\n\"Take your son, your only son Isaac, whom you love, and go to the land of Moriah.\nOffer him there as a burnt offering, on a mountain I will show you.\"",
    choices: [
      { text: "Refuse — surely God could not ask this", nextScene: "refuse_consequence", tag: "refusing", feedback: "You shake your head. But the command does not unsay itself.", sentiment: "negative" },
      { text: "Bow in trembling silence and accept", nextScene: "the_weight", tag: "submitting", feedback: "You press your face to the ground. No words come — only surrender.", sentiment: "positive" },
      { text: "Beg God to take you instead", nextScene: "bargain_consequence", tag: "bargaining", feedback: "\"Take me, Lord — not the boy.\" The heavens do not answer the trade.", sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "The God Who Gave Him",
    text: "You stand alone under the vast stars.\nThis is the same God who promised Isaac when Sarah's womb was dead.\nHe gave the boy. He has not lied to you yet.",
    choices: [
      { text: "Trust the One who gave — and obey", nextScene: "the_weight", tag: "trusting", feedback: "Your refusal collapses. \"He who gave can also keep.\"", sentiment: "positive" },
    ],
  },
  bargain_consequence: {
    id: "bargain_consequence",
    title: "No Substitute You Can Offer",
    text: "Your bargains die in your throat.\nThis test is not for your life. It is for your heart.\nThe stars wait above you in their thousands — the very stars He once promised.",
    choices: [
      { text: "Let go of the bargain and obey", nextScene: "the_weight", tag: "yielding", feedback: "You stop bargaining. There is nothing left but to trust.", sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE PREPARATION ============
  the_weight: {
    id: "the_weight",
    title: "Before the Dawn",
    text: "You sit by the dying fire until the sky greys.\nIsaac breathes softly nearby. Sarah does not stir.\nSoon the sun will rise — and you must move before your courage breaks.",
    choices: [
      { text: "Wake the servants and saddle the donkey at once", nextScene: "departure", tag: "early_obedience", feedback: "Better to walk than to think. You rise and begin.", sentiment: "positive" },
      { text: "Wait — perhaps another sign will come", nextScene: "delay_consequence", tag: "delaying", feedback: "Dawn comes anyway. The command does not change.", sentiment: "negative" },
      { text: "Wake Sarah and tell her everything", nextScene: "tell_sarah_consequence", tag: "telling", feedback: "Your hand hovers over her shoulder — and falls back. She would not survive the parting.", sentiment: "negative" },
    ],
  },
  delay_consequence: {
    id: "delay_consequence",
    title: "No Other Sign Will Come",
    text: "The light grows. Birds begin their first calls.\nThe word once spoken does not need to be repeated.\nObedience delayed will not soften what must be done.",
    choices: [
      { text: "Rise and prepare for the journey", nextScene: "departure", tag: "rising", feedback: "You stand, stiff with the weight of it, and call the servants.", sentiment: "positive" },
    ],
  },
  tell_sarah_consequence: {
    id: "tell_sarah_consequence",
    title: "She Must Not Bear This",
    text: "She would tear the tent down.\nShe would cling to Isaac and curse the God who asked.\nThis burden is yours alone — and Isaac's, if it must be.",
    choices: [
      { text: "Leave quietly and prepare in silence", nextScene: "departure", tag: "shielding", feedback: "You step outside without a word. The dawn keeps your secret.", sentiment: "positive" },
    ],
  },
  departure: {
    id: "departure",
    title: "Three Days' Walk",
    text: "You split the wood for the burnt offering yourself — each blow of the axe heavier than the last.\nYou wake Isaac gently. Two servants come with you.\nThe land of Moriah lies three days to the north.",
    choices: [
      { text: "Set out at first light without explanation", nextScene: "the_road", tag: "set_out", feedback: "The boy follows, sleepy and trusting. You do not look back at the tent.", sentiment: "positive" },
      { text: "Lie to Isaac about where you are going", nextScene: "lie_consequence", tag: "lying", feedback: "The lie tastes of ash. He believes you without question — which is worse.", sentiment: "negative" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "Truth Enough for Today",
    text: "You cannot lie to him. Not the whole truth — but not a lie.\n\"We go to worship,\" you tell him. \"God will provide.\"\nIt is more true than you yet understand.",
    choices: [
      { text: "Walk on with him into the dawn", nextScene: "the_road", tag: "walking", feedback: "He smiles up at you and takes your hand. The road begins.", sentiment: "positive" },
    ],
  },

  // ============ ACT III — THE JOURNEY ============
  the_road: {
    id: "the_road",
    title: "The Long Road North",
    text: "Three days under a vast pale sky.\nIsaac chatters about lambs and stars and what Sarah will cook when you return.\nEvery word is a small knife — and a small mercy.",
    choices: [
      { text: "Listen to him fully — store every word", nextScene: "mountain_in_sight", tag: "treasuring", feedback: "You drink in his voice as if it were the last well in the desert.", sentiment: "positive" },
      { text: "Walk apart and harden your heart", nextScene: "harden_consequence", tag: "hardening", feedback: "You quicken your pace ahead of him. The distance does not protect you.", sentiment: "negative" },
      { text: "Turn back — claim the journey was a mistake", nextScene: "turn_back_consequence", tag: "fleeing", feedback: "Your feet slow. But you cannot outrun the voice that called you.", sentiment: "negative" },
    ],
  },
  harden_consequence: {
    id: "harden_consequence",
    title: "A Father Cannot Harden Himself",
    text: "You cannot make yourself small enough to escape this.\nIf God provides nothing, you will lose him either way — once on the altar, and forever in your soul.\nHe deserves your love until the last step.",
    choices: [
      { text: "Slow down and walk beside him again", nextScene: "mountain_in_sight", tag: "returning", feedback: "You match his pace. He smiles up at you. You do not deserve that smile.", sentiment: "positive" },
    ],
  },
  turn_back_consequence: {
    id: "turn_back_consequence",
    title: "There Is No Going Back",
    text: "If you turn back now, every promise unravels.\nThe stars He counted, the nations He swore — all collapse on a refusal.\nFaith is a road; you are already on it.",
    choices: [
      { text: "Face north again and keep walking", nextScene: "mountain_in_sight", tag: "facing", feedback: "You set your face like flint and walk on with him.", sentiment: "positive" },
    ],
  },
  mountain_in_sight: {
    id: "mountain_in_sight",
    title: "The Mountain Afar Off",
    text: "On the third day you lift your eyes — and see it.\nA single peak in the distance, wrapped in pale haze.\nSomething inside you knows this is the place.",
    choices: [
      { text: "Tell the servants to wait here with the donkey", nextScene: "leave_servants", tag: "separating", feedback: "\"Stay here with the donkey. The boy and I will go up to worship — and we will come again to you.\"", sentiment: "positive" },
      { text: "Bring the servants up with you for support", nextScene: "servants_consequence", tag: "leaning", feedback: "You take a step toward them — then stop. They cannot share this.", sentiment: "negative" },
    ],
  },
  servants_consequence: {
    id: "servants_consequence",
    title: "This Is for No Other Eyes",
    text: "If they witness, they will stop you. If they stop you, you have failed Him.\nThis is between you, the boy, and God.\nNo other hand may steady or hinder.",
    choices: [
      { text: "Tell them to wait here at the foot of the mountain", nextScene: "leave_servants", tag: "alone", feedback: "\"Stay here. We will return to you.\" The words feel like prophecy you do not yet understand.", sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE ASCENT ============
  leave_servants: {
    id: "leave_servants",
    title: "He Will Carry the Wood",
    text: "You lay the bundle of split wood across Isaac's strong young shoulders.\nYou carry the fire and the knife in your own hands.\nTogether you begin to climb the narrow path.",
    choices: [
      { text: "Walk in silence beside him", nextScene: "isaacs_question", tag: "silent_walk", feedback: "Step by step, the path winds upward. The wind sings in the cliffs.", sentiment: "positive" },
    ],
  },
  isaacs_question: {
    id: "isaacs_question",
    title: "Where Is the Lamb?",
    text: "Halfway up, Isaac stops and turns to you.\n\"My father — behold the fire and the wood. But where is the lamb for the burnt offering?\"\nHis eyes are clear and trusting. He waits for an answer.",
    choices: [
      { text: "\"God Himself will provide a lamb, my son\"", nextScene: "summit", tag: "faith_answer", feedback: "The words leave you like a prayer. Even you do not yet know what they mean.", sentiment: "positive" },
      { text: "Tell him the truth — that he is the lamb", nextScene: "tell_truth_consequence", tag: "harsh_truth", feedback: "His face goes white. He drops the wood and stumbles backward.", sentiment: "negative" },
      { text: "Say nothing and keep walking", nextScene: "silence_consequence", tag: "evading", feedback: "He waits a long moment. Then quietly follows. Something in him knows.", sentiment: "negative" },
    ],
  },
  tell_truth_consequence: {
    id: "tell_truth_consequence",
    title: "He Trusts You Still",
    text: "He trembles. But after a long silence, he picks up the wood again.\nHe does not run. He does not curse you.\nHe walks on beside you — because he trusts the God you have always trusted.",
    choices: [
      { text: "Walk with him in awed silence to the summit", nextScene: "summit", tag: "awed", feedback: "Two faiths walk side by side up the last of the path.", sentiment: "positive" },
    ],
  },
  silence_consequence: {
    id: "silence_consequence",
    title: "The Answer of Faith",
    text: "You cannot leave his question without an answer — not now, not ever.\nFaith is not silence. Faith is the word spoken into the dark.\nYou turn to him.",
    choices: [
      { text: "Say: \"God Himself will provide the lamb, my son\"", nextScene: "summit", tag: "faith_late", feedback: "You speak it. The mountain seems to hold its breath.", sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE ALTAR ============
  summit: {
    id: "summit",
    title: "The Place He Showed",
    text: "You reach the place. The wind stills.\nYou begin to gather stones. Isaac kneels and helps you, his small hands beside yours.\nThe altar rises — rough, sacred, terrible.",
    choices: [
      { text: "Lay the wood in order upon the stones", nextScene: "the_binding", tag: "ordering", feedback: "Each piece of wood goes down with care. The altar is ready.", sentiment: "positive" },
      { text: "Stop — you cannot do this", nextScene: "stop_consequence", tag: "wavering", feedback: "Your hands fall to your sides. The wind picks up around you.", sentiment: "negative" },
    ],
  },
  stop_consequence: {
    id: "stop_consequence",
    title: "Faith That Believes Resurrection",
    text: "Your hands shake. Then a thought enters you — older than the command itself:\n\"He who gave Isaac out of a dead womb can give him back from the dead.\"\nYou believe it. You do not understand it. But you believe.",
    choices: [
      { text: "Take up the wood and finish what was begun", nextScene: "the_binding", tag: "resurrection_faith", feedback: "Your hands steady. You complete the altar.", sentiment: "positive" },
    ],
  },
  the_binding: {
    id: "the_binding",
    title: "He Did Not Resist",
    text: "You turn to Isaac. There are no words — only your eyes meeting his.\nHe sees. He understands. And he does not run.\nHe kneels. He lets you bind his hands. He lays himself upon the wood.",
    choices: [
      { text: "Kiss his forehead and lift the knife", nextScene: "the_knife", tag: "lifting", feedback: "His tear meets your tear. You raise the knife.", sentiment: "positive" },
      { text: "Loose him — flee from the altar", nextScene: "flee_consequence", tag: "fleeing", feedback: "Your hand finds the cord — but stops. To turn back now is to make all his courage worthless.", sentiment: "negative" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "His Faith Holds You",
    text: "The boy lies still beneath you, eyes closed, breathing steady.\nHe trusts. He is offering himself with you.\nIf you flee, you betray not only God — but Isaac's own surrender.",
    choices: [
      { text: "Stand with him to the end — lift the knife", nextScene: "the_knife", tag: "standing", feedback: "You raise the knife above him, both hands trembling.", sentiment: "positive" },
    ],
  },

  // ============ ACT VI — THE VOICE FROM HEAVEN ============
  the_knife: {
    id: "the_knife",
    title: "Abraham! Abraham!",
    text: "The blade rises high. Your arms are stone.\nAt the highest point — a voice tears the sky open:\n\"Abraham! Abraham!\"",
    choices: [
      { text: "Answer at once: \"Here I am\"", nextScene: "the_stay", tag: "answering", feedback: "The knife stops. \"Here I am, Lord.\"", sentiment: "positive" },
      { text: "Strike before another command can come", nextScene: "strike_consequence", tag: "striking", feedback: "Your arm tenses — then locks. You cannot. The voice has the right of way.", sentiment: "negative" },
    ],
  },
  strike_consequence: {
    id: "strike_consequence",
    title: "The Test Is Not Blood",
    text: "Your arm will not move.\nGod did not ask for the death — He asked for the heart that would give the death.\nYou have given Him that heart. The blade has done its work already.",
    choices: [
      { text: "Lower the knife and answer the voice: \"Here I am\"", nextScene: "the_stay", tag: "lowering", feedback: "The knife falls from your hand into the dust. \"Here I am.\"", sentiment: "positive" },
    ],
  },
  the_stay: {
    id: "the_stay",
    title: "Lay Not Your Hand on the Boy",
    text: "\"Lay not your hand on the boy. Do nothing to him.\nFor now I know that you fear God — for you have not withheld your son, your only son, from Me.\"\nYou drop to your knees beside him. The world breathes again.",
    choices: [
      { text: "Loose Isaac's hands and lift him from the wood", nextScene: "the_ram", tag: "loosing", feedback: "Your trembling fingers free him. He clings to you and weeps.", sentiment: "positive" },
    ],
  },
  the_ram: {
    id: "the_ram",
    title: "Caught in the Thicket",
    text: "You lift your eyes — and there in the brush behind the altar, a ram stands caught by its horns in the thicket.\nIt did not come from the path. It is simply there.\nGod has provided.",
    choices: [
      { text: "Take the ram and offer it in Isaac's place", nextScene: "the_name", tag: "offering", feedback: "You free the ram and lay it on the wood. The fire rises.", sentiment: "positive" },
      { text: "Refuse — sacrifice nothing now", nextScene: "no_sacrifice_consequence", tag: "refusing", feedback: "You stand frozen. The ram waits. The altar waits.", sentiment: "negative" },
    ],
  },
  no_sacrifice_consequence: {
    id: "no_sacrifice_consequence",
    title: "Worship Must Be Completed",
    text: "You came to worship. The altar still calls for an offering.\nGod has provided one — to receive it is the final act of obedience.\nNot to offer it is to despise the mercy.",
    choices: [
      { text: "Take the ram and complete the offering", nextScene: "the_name", tag: "completing", feedback: "You free the ram and lay it on the wood. The smoke rises straight to heaven.", sentiment: "positive" },
    ],
  },
  the_name: {
    id: "the_name",
    title: "The Lord Will Provide",
    text: "You name the place Yahweh-Yireh — \"The Lord Will Provide.\"\nIsaac stands beside you, alive, breathing, his hand small in yours.\nThe smoke of the ram rises into the wide pale sky.",
    choices: [
      { text: "Bow and listen — the voice is not finished", nextScene: "the_blessing", tag: "listening", feedback: "You bow your head. The voice comes again, gentler this time.", sentiment: "positive" },
    ],
  },

  // ============ ACT VII — THE BLESSING ============
  the_blessing: {
    id: "the_blessing",
    title: "By Myself I Have Sworn",
    text: "\"By Myself I have sworn, says the Lord:\nbecause you have done this and have not withheld your only son,\nI will surely bless you, and multiply your seed as the stars of the heaven and as the sand upon the seashore.\nIn your seed shall all nations of the earth be blessed — because you have obeyed My voice.\"",
    choices: [
      { text: "Take Isaac's hand and begin the long walk home", nextScene: "homecoming", tag: "homeward", feedback: "You turn together toward the path, the sky burning gold around you.", sentiment: "positive" },
    ],
    isFinal: true,
  },
  homecoming: {
    id: "homecoming",
    title: "We Have Come Again",
    text: "You walk down the mountain together as the stars begin to show themselves.\nThe servants are waiting where you left them.\n\"We have come again to you,\" you say — and it is truer than they will ever know.",
    choices: [],
    isFinal: true,
  },
};
