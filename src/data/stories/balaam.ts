import { StoryScene } from "@/data/stories/creation";

// BALAAM AND THE DONKEY — Numbers 22
// You ARE Balaam. Spiritual blindness vs true vision; obedience vs greed.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const balaamScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE OFFER ============
  start: {
    id: "start",
    title: "The King's Messengers",
    text: "Moab's envoys arrive with gold.\n\"Curse Israel for our king.\"",
    choices: [
      { text: "Accept the gold without asking", nextScene: "greed_consequence", tag: "greedy", feedback: "Silver dazzles; God is silent.", isCorrect: false, sentiment: "negative" },
      { text: "Send them away with a vague vow", nextScene: "vague_consequence", tag: "evasive", feedback: "Half-hearted answers serve no one.", isCorrect: false, sentiment: "negative" },
      { text: "Ask the Lord what to say", nextScene: "first_word", tag: "obedient", feedback: "You bow to seek His voice.", isCorrect: true, sentiment: "positive" },
    ],
  },
  greed_consequence: {
    id: "greed_consequence",
    title: "Gold Cannot Buy His Word",
    text: "His mouth is not for sale.\nKneel and ask Him first.",
    choices: [
      { text: "Ask the Lord what to say", nextScene: "first_word", tag: "obedient", feedback: "Silence falls in your tent.", isCorrect: true, sentiment: "positive" },
    ],
  },
  vague_consequence: {
    id: "vague_consequence",
    title: "Speak Plainly Before Him",
    text: "Half-truths help no man.\nGo to the Lord directly.",
    choices: [
      { text: "Ask the Lord what to say", nextScene: "first_word", tag: "obedient", feedback: "You wait on His answer.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE SECOND OFFER ============
  first_word: {
    id: "first_word",
    title: "\"Do Not Go\"",
    text: "The Lord says, \"Bless, do not curse.\"\nThe envoys ride home empty.",
    choices: [
      { text: "Send messengers chasing the king's gold", nextScene: "chase_consequence", tag: "greedy", feedback: "Your heart already drifts.", isCorrect: false, sentiment: "negative" },
      { text: "Tell new envoys what God said", nextScene: "second_offer", tag: "honest", feedback: "Truth, not silver, on your tongue.", isCorrect: true, sentiment: "positive" },
    ],
  },
  chase_consequence: {
    id: "chase_consequence",
    title: "Stay Where He Set You",
    text: "Wages cannot weigh against His word.\nWait for His messengers instead.",
    choices: [
      { text: "Tell new envoys what God said", nextScene: "second_offer", tag: "honest", feedback: "You speak only what was given.", isCorrect: true, sentiment: "positive" },
    ],
  },

  second_offer: {
    id: "second_offer",
    title: "Princes at Your Door",
    text: "Greater nobles come, greater gold.\n\"Name your price,\" they say.",
    choices: [
      { text: "Pretend you never heard the first word", nextScene: "pretend_consequence", tag: "deceit", feedback: "His word does not unsay itself.", isCorrect: false, sentiment: "negative" },
      { text: "Refuse, even for a house of silver", nextScene: "saddle_donkey", tag: "obedient", feedback: "You speak the words plainly.", isCorrect: true, sentiment: "positive" },
      { text: "Demand a higher fee in secret", nextScene: "fee_consequence", tag: "greedy", feedback: "Greed is a louder god than truth.", isCorrect: false, sentiment: "negative" },
    ],
  },
  pretend_consequence: {
    id: "pretend_consequence",
    title: "His Word Stands",
    text: "You cannot bury what He spoke.\nAnswer with truth.",
    choices: [
      { text: "Refuse, even for a house of silver", nextScene: "saddle_donkey", tag: "obedient", feedback: "The princes hear you firmly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  fee_consequence: {
    id: "fee_consequence",
    title: "No Price for Prophecy",
    text: "His mouth is not a marketplace.\nLet your refusal be plain.",
    choices: [
      { text: "Refuse, even for a house of silver", nextScene: "saddle_donkey", tag: "obedient", feedback: "Their faces darken at your word.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — THE JOURNEY ============
  saddle_donkey: {
    id: "saddle_donkey",
    title: "Yet You Saddle the Donkey",
    text: "Their gold still glitters in your mind.\nYou ride toward Moab anyway.",
    choices: [
      { text: "Turn back and stay in your tent", nextScene: "ending_obedient", tag: "humble", feedback: "Wisdom keeps you home.", isCorrect: true, sentiment: "positive" },
      { text: "Press on, planning what to say", nextScene: "narrow_path", tag: "divided", feedback: "The road grows uneasy.", isCorrect: false, sentiment: "negative" },
    ],
  },

  // ============ ACT IV — THE FIRST BLOCK ============
  narrow_path: {
    id: "narrow_path",
    title: "The Donkey Stops",
    text: "She bolts into a field.\nYou see only stubborn beast.",
    choices: [
      { text: "Beat her back onto the road", nextScene: "second_block", tag: "blind", feedback: "You strike what you cannot see.", isCorrect: false, sentiment: "negative" },
      { text: "Pause and ask why she fears", nextScene: "humbled_early", tag: "discerning", feedback: "Her eye sees what yours cannot.", isCorrect: true, sentiment: "positive" },
    ],
  },
  humbled_early: {
    id: "humbled_early",
    title: "A Glimpse of Light",
    text: "The road shimmers with hidden warning.\nFear of God softens your heart.",
    choices: [
      { text: "Continue with humility", nextScene: "angel_revealed", tag: "humble", feedback: "Your eyes will soon be opened.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE SECOND BLOCK ============
  second_block: {
    id: "second_block",
    title: "Crushed Against the Wall",
    text: "She presses your foot to the stone.\nPain blinds you further.",
    choices: [
      { text: "Curse her and beat her again", nextScene: "third_block", tag: "blind", feedback: "Your anger grows; your sight does not.", isCorrect: false, sentiment: "negative" },
      { text: "Stop and listen to the silence", nextScene: "humbled_early", tag: "discerning", feedback: "Something stands ahead unseen.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — THE DONKEY SPEAKS ============
  third_block: {
    id: "third_block",
    title: "She Lies Down Beneath You",
    text: "The donkey will not rise.\nThen her mouth opens.",
    choices: [
      { text: "Strike her one more time", nextScene: "strike_consequence", tag: "blind", feedback: "Hardness will not save you now.", isCorrect: false, sentiment: "negative" },
      { text: "Hear her words in fear", nextScene: "angel_revealed", tag: "humble", feedback: "\"What have I done to you?\"", isCorrect: true, sentiment: "positive" },
      { text: "Laugh and call it madness", nextScene: "laugh_consequence", tag: "proud", feedback: "Mockery cannot dim the truth.", isCorrect: false, sentiment: "negative" },
    ],
  },
  strike_consequence: {
    id: "strike_consequence",
    title: "Your Hand Falls Empty",
    text: "Three times you have struck her.\nNow listen to what she says.",
    choices: [
      { text: "Hear her words in fear", nextScene: "angel_revealed", tag: "humble", feedback: "Your staff lowers slowly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  laugh_consequence: {
    id: "laugh_consequence",
    title: "This Is No Madness",
    text: "The Lord opened her mouth.\nClose your own and listen.",
    choices: [
      { text: "Hear her words in fear", nextScene: "angel_revealed", tag: "humble", feedback: "The laughter dies on your lips.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VII — THE ANGEL ============
  angel_revealed: {
    id: "angel_revealed",
    title: "Your Eyes Are Opened",
    text: "An angel stands, sword drawn.\n\"Your way is perverse before Me.\"",
    choices: [
      { text: "Defend yourself with proud excuses", nextScene: "defend_consequence", tag: "proud", feedback: "Truth needs no defense from you.", isCorrect: false, sentiment: "negative" },
      { text: "Bow your face to the dust", nextScene: "ending_humbled", tag: "humble", feedback: "\"I have sinned. I did not see.\"", isCorrect: true, sentiment: "positive" },
      { text: "Beg him for the king's gold instead", nextScene: "beg_consequence", tag: "greedy", feedback: "Even now your heart is divided.", isCorrect: false, sentiment: "negative" },
    ],
  },
  defend_consequence: {
    id: "defend_consequence",
    title: "Lower Your Pride",
    text: "His sword shines truer than your words.\nKneel and confess.",
    choices: [
      { text: "Bow your face to the dust", nextScene: "ending_humbled", tag: "humble", feedback: "You sink to the rocky ground.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Let Go of the Gold",
    text: "Silver cannot stand before His blade.\nRepent before you speak again.",
    choices: [
      { text: "Bow your face to the dust", nextScene: "ending_humbled", tag: "humble", feedback: "Your hands open and empty.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ENDINGS ============
  ending_obedient: {
    id: "ending_obedient",
    title: "The Tent at Dawn",
    text: "You stayed where He set you.\nNo blade. No blindness. Only peace.",
    choices: [],
    isFinal: true,
  },
  ending_humbled: {
    id: "ending_humbled",
    title: "\"Speak Only What I Tell You\"",
    text: "The angel sheathes his sword.\nYou ride on, His word in your mouth.",
    choices: [],
    isFinal: true,
  },
};
