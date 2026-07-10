import { StoryScene } from "@/data/stories/creation";

// REBEKAH AND THE SERVANT — Genesis 24
// Two interlocking perspectives (servant + Rebekah) converging on the canonical journey home.
// Each scene: 1 biblical (positive) + 1-2 incorrect (negative) — max 3 options.

export const rebekahScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE OATH ============
  start: {
    id: "start",
    title: "The Master's Charge",
    text: "Abraham is old. He places your hand under his thigh.\n\"Swear by the Lord — do not take a wife for Isaac from the Canaanites.\"",
    choices: [
      { text: "Swear and accept the journey to his homeland", nextScene: "the_oath", tag: "obedient", feedback: "Genesis 24:3 — Abraham made his servant swear an oath not to take a wife for Isaac from the Canaanites.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse — the road is too long for an old servant", nextScene: "refuse_consequence", tag: "refusing", feedback: "Abraham's eyes do not waver. The promise is heavier than the road.", isCorrect: false, sentiment: "negative" },
      { text: "Suggest a Canaanite girl from a wealthy house", nextScene: "canaan_consequence", tag: "compromising", feedback: "\"No,\" he says. \"Not from this land. The Lord swore to my fathers.\"", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Faith Over Fear",
    text: "Abraham only smiles. \"The Lord who took me from my father's house\nwill send His angel before you.\"",
    choices: [
      { text: "Yield, and swear the oath", nextScene: "the_oath", tag: "yielding", feedback: "You bow low. \"I will go.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  canaan_consequence: {
    id: "canaan_consequence",
    title: "Not From This Land",
    text: "\"My son must not return there. But you are free of the oath\nif the woman will not follow.\"",
    choices: [
      { text: "Accept and swear properly", nextScene: "the_oath", tag: "yielding", feedback: "You place your hand again, and swear by the Lord.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_oath: {
    id: "the_oath",
    title: "Ten Camels Loaded",
    text: "You take ten camels and the best of your master's goods.\nThe road to Mesopotamia is long. Aram-Naharaim waits.",
    choices: [
      { text: "Set out at once with quiet trust", nextScene: "the_well", tag: "trusting", feedback: "Genesis 24:10 — Abraham's servant took ten of his master's camels and departed for Aram-Naharaim, to the city of Nahor.", isCorrect: true, sentiment: "positive" },
      { text: "Delay — gather more men and weapons first", nextScene: "delay_consequence", tag: "delaying", feedback: "You linger over preparations. But faith does not wait on iron.", isCorrect: false, sentiment: "negative" },
    ],
  },
  delay_consequence: {
    id: "delay_consequence",
    title: "The Lord Is Your Guard",
    text: "Abraham's words return to you: \"His angel will go before you.\"\nNo blade you carry will weigh more than that promise.",
    choices: [
      { text: "Set out in faith, with what you have", nextScene: "the_well", tag: "trusting", feedback: "You leave at first light. The camels' bells ring across the dunes.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE WELL ============
  the_well: {
    id: "the_well",
    title: "The Well of Nahor",
    text: "Evening. You arrive at a stone well outside the city of Nahor.\nThe time when the women come out to draw water.",
    choices: [
      { text: "Make the camels kneel and pray for a sign", nextScene: "the_prayer", tag: "praying", feedback: "You bow your head beside the kneeling beasts. \"O Lord, God of my master Abraham…\"", isCorrect: true, sentiment: "positive" },
      { text: "Walk into the city and ask for Nahor's house", nextScene: "city_consequence", tag: "self-reliant", feedback: "Strangers are wary. No one knows you. You return to the well, weary.", isCorrect: false, sentiment: "negative" },
      { text: "Pick the most beautiful girl you see", nextScene: "beauty_consequence", tag: "shallow", feedback: "Beauty is not the sign. Your master sent you for kindness, not a face.", isCorrect: false, sentiment: "negative" },
    ],
  },
  city_consequence: {
    id: "city_consequence",
    title: "Back to the Well",
    text: "The city is closed to a stranger. The well is where God answers.\nYou kneel beside the camels.",
    choices: [
      { text: "Pray for a sign instead", nextScene: "the_prayer", tag: "praying", feedback: "\"Lord, give me success today,\" you whisper.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beauty_consequence: {
    id: "beauty_consequence",
    title: "Not What You See",
    text: "Your master did not send you for the eyes of men.\nHe sent you for the heart God will choose.",
    choices: [
      { text: "Bow your head and ask for the true sign", nextScene: "the_prayer", tag: "humbled", feedback: "You forget the faces and pray instead.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_prayer: {
    id: "the_prayer",
    title: "The Sign You Ask",
    text: "What sign will you set before the Lord?",
    choices: [
      { text: "\"She who offers to water my camels — let her be the one\"", nextScene: "rebekah_arrives", tag: "biblical_sign", feedback: "Genesis 24:14 — Abraham's servant prayed that the woman who offered water to him and his camels would be the one the Lord appointed for Isaac.", isCorrect: true, sentiment: "positive" },
      { text: "\"Send me a sign of fire from heaven\"", nextScene: "fire_consequence", tag: "spectacle", feedback: "The sky stays still. God answers in kindness, not in flame.", isCorrect: false, sentiment: "negative" },
      { text: "\"The first one to greet me — let her be the one\"", nextScene: "greeting_consequence", tag: "shallow_sign", feedback: "A greeting costs nothing. Your master needs a heart that gives.", isCorrect: false, sentiment: "negative" },
    ],
  },
  fire_consequence: {
    id: "fire_consequence",
    title: "Quiet Heaven",
    text: "The heavens do not roar. They wait.\nThe sign of God's choice will be a small kindness, not a wonder.",
    choices: [
      { text: "Ask instead for the one who waters the camels", nextScene: "rebekah_arrives", tag: "yielding", feedback: "You change your prayer — and a girl steps from the city gate.", isCorrect: true, sentiment: "positive" },
    ],
  },
  greeting_consequence: {
    id: "greeting_consequence",
    title: "More Than Words",
    text: "Words are easy. Service is the heart God reads.\nAsk for the sign that costs something.",
    choices: [
      { text: "Pray for the one who will water the camels", nextScene: "rebekah_arrives", tag: "yielding", feedback: "You change the prayer — and look up.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — REBEKAH'S KINDNESS ============
  rebekah_arrives: {
    id: "rebekah_arrives",
    title: "A Girl at the Well",
    text: "She is young, careful, lovely.\nShe fills her jar and turns to leave.",
    choices: [
      { text: "Run to her: \"Please give me a little water from your jar\"", nextScene: "rebekah_pov_request", tag: "humble_request", feedback: "Genesis 24:17 — Abraham's servant ran to meet Rebekah and asked her for a little water from her jar.", isCorrect: true, sentiment: "positive" },
      { text: "Order her to water your camels at once", nextScene: "command_consequence", tag: "demanding", feedback: "Her face hardens. She walks away without a word.", isCorrect: false, sentiment: "negative" },
    ],
  },
  command_consequence: {
    id: "command_consequence",
    title: "Pride Drives Her Away",
    text: "She is gone. The camels are still thirsty.\nYou must wait — and ask the next one with humility.",
    choices: [
      { text: "Wait, and ask the next girl gently", nextScene: "rebekah_pov_request", tag: "humbled", feedback: "She returns again, having forgotten her sandal. You speak softly this time.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ===== Rebekah's perspective begins =====
  rebekah_pov_request: {
    id: "rebekah_pov_request",
    title: "A Stranger's Voice",
    text: "You are Rebekah, daughter of Bethuel.\nA dusty old man at the well asks for a sip of water.",
    choices: [
      { text: "\"Drink, my lord\" — and offer to draw for his camels too", nextScene: "watering_camels", tag: "biblical_kindness", feedback: "You lower the jar to his hands. \"I will draw for your camels also, until they have done.\"", isCorrect: true, sentiment: "positive" },
      { text: "Give him only a sip and hurry home", nextScene: "stingy_consequence", tag: "stingy", feedback: "Your jar is heavy. But the camels watch you with tired, dust-rimmed eyes.", isCorrect: false, sentiment: "negative" },
      { text: "Refuse — your father warned you about strangers", nextScene: "refuse_water_consequence", tag: "fearful", feedback: "He has not asked for much. A sip of water is no danger.", isCorrect: false, sentiment: "negative" },
    ],
  },
  stingy_consequence: {
    id: "stingy_consequence",
    title: "The Camels' Eyes",
    text: "Ten camels. Days in the desert. Their thirst is enormous.\nYour mother taught you better than this.",
    choices: [
      { text: "Turn back and offer to water them all", nextScene: "watering_camels", tag: "generous", feedback: "You return to the trough. \"I will draw for your camels also.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_water_consequence: {
    id: "refuse_water_consequence",
    title: "A Sip Is No Sin",
    text: "He is old and bent and dusty. The well is the gathering place.\nHospitality is the law of your people.",
    choices: [
      { text: "Offer him drink — and the camels too", nextScene: "watering_camels", tag: "yielding", feedback: "You lift the jar. \"Drink, my lord.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  watering_camels: {
    id: "watering_camels",
    title: "Until They Have Done",
    text: "You run between well and trough until your arms ache.\nTen camels drink their fill. The old man watches you in silence.",
    choices: [
      { text: "Finish the work fully, then ask if he needs more", nextScene: "the_gifts", tag: "thorough", feedback: "Genesis 24:19-20 — Rebekah quickly emptied her jar into the trough and ran again to the well to draw water for all the camels until they had finished drinking.", isCorrect: true, sentiment: "positive" },
      { text: "Stop halfway — surely that is enough", nextScene: "halfway_consequence", tag: "incomplete", feedback: "The camels still murmur with thirst. The work is not done.", isCorrect: false, sentiment: "negative" },
    ],
  },
  halfway_consequence: {
    id: "halfway_consequence",
    title: "Until the Last One Drinks",
    text: "The Lord watches the work that is finished, not begun.\nThe camels are still pressing close to the trough.",
    choices: [
      { text: "Return to the well and finish", nextScene: "the_gifts", tag: "completing", feedback: "You draw and pour until every beast turns away satisfied.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE GIFTS AND THE HOUSE ============
  the_gifts: {
    id: "the_gifts",
    title: "Gold in His Hand",
    text: "The old servant takes a heavy gold ring and two bracelets.\n\"Tell me — whose daughter are you? Is there room in your father's house?\"",
    choices: [
      { text: "\"I am Bethuel's daughter — son of Milcah and Nahor\"", nextScene: "the_blessing_well", tag: "honest", feedback: "Genesis 24:23-24 — Abraham's servant asked Rebekah whose daughter she was and if there was room in her father's house for them to spend the night, and she replied that she was the daughter of Bethuel, son of Milcah, whom she bore to Nahor.", isCorrect: true, sentiment: "positive" },
      { text: "Hide your name — he might be a thief", nextScene: "hide_consequence", tag: "evasive", feedback: "His kind eyes do not look like a thief's. The truth would have cost you nothing.", isCorrect: false, sentiment: "negative" },
      { text: "Take the gold and run home without answering", nextScene: "run_consequence", tag: "greedy", feedback: "You clutch the gold to your chest. But the man's voice follows you, gentle, unhurried.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "The Lord's Hand Is Plain",
    text: "The man's tears say what no thief could fake.\n\"Blessed be the Lord, the God of my master Abraham,\" he murmurs.",
    choices: [
      { text: "Tell him your true name", nextScene: "the_blessing_well", tag: "honest", feedback: "\"I am Rebekah, daughter of Bethuel, son of Milcah.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "He Has Not Wronged You",
    text: "He is old, alone, and weeping with joy beside the well.\nThis is no robber. The Lord is in this meeting.",
    choices: [
      { text: "Return and tell him your name", nextScene: "the_blessing_well", tag: "humbled", feedback: "You walk back. \"I am Rebekah, daughter of Bethuel.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_blessing_well: {
    id: "the_blessing_well",
    title: "Blessed Be the Lord",
    text: "He bows his head to the ground, weeping.\n\"Blessed be the Lord, who has led me to the house of my master's brothers.\"",
    choices: [
      { text: "Run home and tell your mother's house everything", nextScene: "laban_meets", tag: "telling", feedback: "Genesis 24:28 — Rebekah ran home and told her mother's household about the servant's words and actions.", isCorrect: true, sentiment: "positive" },
      { text: "Say nothing — keep the gold for yourself", nextScene: "secret_consequence", tag: "selfish", feedback: "The Lord's hand cannot be hidden in a pocket. Your mother sees the gold at once.", isCorrect: false, sentiment: "negative" },
    ],
  },
  secret_consequence: {
    id: "secret_consequence",
    title: "The Gold Speaks for You",
    text: "The bracelets shine on your wrist. Your mother gasps.\nShe asks for the whole story.",
    choices: [
      { text: "Tell her everything truthfully", nextScene: "laban_meets", tag: "honest", feedback: "Your brother Laban listens with widening eyes — and runs out toward the well.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE HOUSE OF BETHUEL ============
  laban_meets: {
    id: "laban_meets",
    title: "Laban Brings Him In",
    text: "Your brother Laban runs to the well and brings the man home.\nThe camels are unloaded. Water is brought for his feet.",
    choices: [
      { text: "Set bread and wine before him at once", nextScene: "the_errand_told", tag: "hospitable", feedback: "Food is laid on the low table. He raises his hand: \"I will not eat until I have told my errand.\"", isCorrect: true, sentiment: "positive" },
      { text: "Demand to know his business first", nextScene: "demand_consequence", tag: "rude", feedback: "His face stiffens. A guest is honored before he is questioned.", isCorrect: false, sentiment: "negative" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "First the Welcome",
    text: "Your father Bethuel shakes his head gently.\n\"Bread first. Then his words.\"",
    choices: [
      { text: "Set the table and listen properly", nextScene: "the_errand_told", tag: "yielding", feedback: "You bring the bread. The lamp is lit. He begins to speak.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_errand_told: {
    id: "the_errand_told",
    title: "I Am Abraham's Servant",
    text: "He tells everything — the oath, the journey, the prayer at the well,\nyour kindness, the sign of the Lord. The room is silent.",
    choices: [
      { text: "Bethuel and Laban speak: \"This thing is from the Lord\"", nextScene: "rebekahs_choice", tag: "discerning", feedback: "\"We cannot speak to you bad or good. Take her, and let her be your master's son's wife.\"", isCorrect: true, sentiment: "positive" },
      { text: "Refuse — the journey is too far, and he is a stranger", nextScene: "stranger_consequence", tag: "refusing", feedback: "The servant lifts his hands. \"Hinder me not — the Lord has prospered my way.\"", isCorrect: false, sentiment: "negative" },
    ],
  },
  stranger_consequence: {
    id: "stranger_consequence",
    title: "The Lord Has Prospered His Way",
    text: "Every word he has spoken bears the mark of God's hand.\nWho can stand against what the Lord has chosen?",
    choices: [
      { text: "Bow to the will of the Lord", nextScene: "rebekahs_choice", tag: "yielding", feedback: "Your father lifts his eyes. \"Let it be as the Lord has said.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  rebekahs_choice: {
    id: "rebekahs_choice",
    title: "Will You Go With This Man?",
    text: "In the morning the servant says: \"Send me away to my master.\"\nYour family asks: \"Let her stay with us a few days — at least ten.\"\nThen they turn to you. \"Will you go with this man?\"",
    choices: [
      { text: "\"I will go.\"", nextScene: "the_blessing_send", tag: "biblical_choice", feedback: "Genesis 24:58 — Rebekah answered, \"I will go.\"", isCorrect: true, sentiment: "positive" },
      { text: "\"Let me wait ten days at least\"", nextScene: "wait_consequence", tag: "delaying", feedback: "The servant's face is pleading. The Lord's hand has been on this from the first hour.", isCorrect: false, sentiment: "negative" },
      { text: "\"I will not leave my mother's house\"", nextScene: "stay_consequence", tag: "refusing", feedback: "Your mother lowers her eyes. The God who called Abraham is calling you now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "The Lord Has Already Spoken",
    text: "The sign was given. The gold was given. The way is opened.\nWhat is ten days against the call of God?",
    choices: [
      { text: "Change your answer — \"I will go.\"", nextScene: "the_blessing_send", tag: "yielding", feedback: "You straighten. \"I will go.\" Your nurse begins quietly to pack.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stay_consequence: {
    id: "stay_consequence",
    title: "A Larger House Waits",
    text: "Your mother takes your hand. \"Daughter, the Lord has chosen.\nGo where He sends. Our blessing goes with you.\"",
    choices: [
      { text: "Answer at last: \"I will go.\"", nextScene: "the_blessing_send", tag: "yielding", feedback: "You let her hand go. \"I will go.\"", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — THE JOURNEY AND THE MEETING ============
  the_blessing_send: {
    id: "the_blessing_send",
    title: "Mother of Thousands",
    text: "Your family blesses you at the door:\n\"Be the mother of thousands of millions.\nMay your offspring possess the gates of those who hate them.\"",
    choices: [
      { text: "Mount the camel and ride out with the servant", nextScene: "the_road_home", tag: "obedient", feedback: "Your nurse Deborah climbs up beside you. The caravan turns south toward Canaan.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_road_home: {
    id: "the_road_home",
    title: "South Toward Canaan",
    text: "The desert stretches for many days. The servant rides ahead, watchful and quiet.\nYou feel the Lord's hand on every mile.",
    choices: [
      { text: "Trust the journey and pray as you ride", nextScene: "isaac_in_field", tag: "trusting", feedback: "Genesis 24:61 — Rebekah and her female attendants mounted the camels and followed the man, with the servant leading the way.", isCorrect: true, sentiment: "positive" },
      { text: "Beg the servant to turn the caravan back", nextScene: "turn_back_consequence", tag: "doubting", feedback: "He shakes his head, kindly. \"The Lord goes before us, my lady.\"", isCorrect: false, sentiment: "negative" },
    ],
  },
  turn_back_consequence: {
    id: "turn_back_consequence",
    title: "Forward Is the Way",
    text: "The Lord has not led you this far to send you back.\nThe land of promise lies ahead, just over the hills.",
    choices: [
      { text: "Settle into the saddle and ride on", nextScene: "isaac_in_field", tag: "yielding", feedback: "You pull the veil closer. The caravan keeps moving.", isCorrect: true, sentiment: "positive" },
    ],
  },
  isaac_in_field: {
    id: "isaac_in_field",
    title: "A Man in the Field",
    text: "At evening you see the hills of the Negev.\nA man is walking alone in the field, in the time of meditation.",
    choices: [
      { text: "Ask the servant: \"Who is this man?\"", nextScene: "the_meeting", tag: "asking", feedback: "\"It is my master,\" he says. You take your veil and cover your face.", isCorrect: true, sentiment: "positive" },
      { text: "Ride past — he is none of your business", nextScene: "ride_past_consequence", tag: "indifferent", feedback: "The servant gently raises his hand: \"My lady — that is the man.\"", isCorrect: false, sentiment: "negative" },
    ],
  },
  ride_past_consequence: {
    id: "ride_past_consequence",
    title: "That Is the Man",
    text: "Your heart catches in your chest.\nYou slip down from the camel and take the veil to your face.",
    choices: [
      { text: "Walk forward to meet him", nextScene: "the_meeting", tag: "humble", feedback: "Across the field, Isaac stops. He has been waiting longer than you know.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_meeting: {
    id: "the_meeting",
    title: "Isaac and Rebekah",
    text: "The servant tells Isaac everything that has happened.\nIsaac brings you into his mother Sarah's tent.",
    choices: [
      { text: "Stand with him beneath the open sky", nextScene: "the_comfort", tag: "obedient", feedback: "He takes your hand. The wind is soft over the field of evening.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_comfort: {
    id: "the_comfort",
    title: "And He Loved Her",
    text: "Isaac took Rebekah, and she became his wife.\nAnd he loved her — and was comforted after his mother's death.\nThe promise to Abraham walks on, into another generation.",
    choices: [
      { text: "Step into the story God has written", nextScene: "the_comfort", tag: "ending", feedback: "The lamp glows in Sarah's tent. The covenant continues.", isCorrect: true, sentiment: "positive" },
    ],
    isFinal: true,
  },
};
