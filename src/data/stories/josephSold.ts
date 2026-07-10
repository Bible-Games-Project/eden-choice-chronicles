import { StoryScene } from "@/data/stories/creation";

// JOSEPH SOLD BY HIS BROTHERS — Genesis 37
// You are Joseph. Branching paths converge on being sold to the Ishmaelites.
// Each scene: 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars. Choice order varied.

export const josephSoldScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE COAT AND THE DREAM ============
  start: {
    id: "start",
    title: "Father's Favor",
    text: "You are Joseph. Father gave you a long coat of many colors.\nYour brothers stare in silence.",
    choices: [
      { text: "Mock them with the coat", nextScene: "mock_consequence", tag: "proud", feedback: "Their faces darken. Hatred grows.", isCorrect: false, sentiment: "negative" },
      { text: "Wear it humbly and thank Father", nextScene: "thank_father", tag: "humble", feedback: "You bow your head. \"Thank you, Father.\"", isCorrect: true, sentiment: "positive" },
      { text: "Hide the coat to keep peace", nextScene: "hide_consequence", tag: "fearful", feedback: "Father's gift cannot be hidden forever.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Bitter Glances",
    text: "They turn away, muttering.\nThe coat feels heavier than before.",
    choices: [
      { text: "Wear it and thank Father", nextScene: "thank_father", tag: "humble", feedback: "You return to him with quiet gratitude.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Father Notices",
    text: "Jacob asks where the gift has gone.\nYou cannot lie to him.",
    choices: [
      { text: "Wear it openly and thank him", nextScene: "thank_father", tag: "humble", feedback: "He smiles. The coat is yours to bear.", isCorrect: true, sentiment: "positive" },
    ],
  },
  thank_father: {
    id: "thank_father",
    title: "The Dream",
    text: "That night you dream: eleven sheaves bow to yours.\nYou wake with the vision burning.",
    choices: [
      { text: "Tell your brothers the dream", nextScene: "tell_brothers", tag: "honest", feedback: "Genesis 37:5 — Joseph told his brothers about his dream, which made them hate him even more.", isCorrect: true, sentiment: "positive" },
      { text: "Keep the dream a secret", nextScene: "secret_consequence", tag: "fearful", feedback: "But God's words ask to be spoken.", isCorrect: false, sentiment: "negative" },
    ],
  },
  secret_consequence: {
    id: "secret_consequence",
    title: "It Burns Inside",
    text: "The dream returns each night.\nYou cannot hold it alone.",
    choices: [
      { text: "Go and tell your brothers", nextScene: "tell_brothers", tag: "honest", feedback: "You walk to them at dawn.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE BROTHERS' HATRED ============
  tell_brothers: {
    id: "tell_brothers",
    title: "The Sheaves Bowed",
    text: "\"Your sheaves bowed to mine.\"\nTheir eyes flash. \"Will you reign over us?\"",
    choices: [
      { text: "Take back the words", nextScene: "retract_consequence", tag: "fearful", feedback: "The dream is from God. You cannot unsay it.", isCorrect: false, sentiment: "negative" },
      { text: "Stand firm — it is from God", nextScene: "stand_firm", tag: "faithful", feedback: "Genesis 37:8 — Joseph's brothers asked if he intended to reign over them, showing their resentment.", isCorrect: true, sentiment: "positive" },
    ],
  },
  retract_consequence: {
    id: "retract_consequence",
    title: "The Dream Returns",
    text: "Sun, moon and stars now bow to you.\nGod will not let you forget.",
    choices: [
      { text: "Stand firm — it is from God", nextScene: "stand_firm", tag: "faithful", feedback: "You face them again, unshaken.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stand_firm: {
    id: "stand_firm",
    title: "Father Sends You",
    text: "Jacob calls: \"Go see if your brothers are well at Shechem.\"\nThey are far in the north.",
    choices: [
      { text: "Refuse — you fear them", nextScene: "refuse_consequence", tag: "fearful", feedback: "A son obeys his father.", isCorrect: false, sentiment: "negative" },
      { text: "Obey and go find them", nextScene: "set_out", tag: "obedient", feedback: "\"Here am I,\" you answer.", isCorrect: true, sentiment: "positive" },
      { text: "Send a servant in your place", nextScene: "servant_consequence", tag: "proud", feedback: "Father asked you, not another.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Jacob's Quiet Look",
    text: "Your father waits. He says nothing.\nObedience cannot be refused.",
    choices: [
      { text: "Obey and go to your brothers", nextScene: "set_out", tag: "obedient", feedback: "You take up your sandals.", isCorrect: true, sentiment: "positive" },
    ],
  },
  servant_consequence: {
    id: "servant_consequence",
    title: "He Asked for You",
    text: "The servant cannot bring back his sons.\nFather asked for you.",
    choices: [
      { text: "Set out yourself", nextScene: "set_out", tag: "obedient", feedback: "You shoulder the bundle and walk.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — THE JOURNEY ============
  set_out: {
    id: "set_out",
    title: "The Long Road",
    text: "The hills stretch on. Shechem is empty.\nA stranger says: \"They went to Dothan.\"",
    choices: [
      { text: "Turn back home", nextScene: "turnback_consequence", tag: "fearful", feedback: "You came to find them. Press on.", isCorrect: false, sentiment: "negative" },
      { text: "Press on toward Dothan", nextScene: "to_dothan", tag: "faithful", feedback: "Genesis 37:17 — Joseph was told his brothers had moved on to Dothan, so he followed them there.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turnback_consequence: {
    id: "turnback_consequence",
    title: "The Path Is Clear",
    text: "Father trusted you with this errand.\nYou cannot return empty-handed.",
    choices: [
      { text: "Press on toward Dothan", nextScene: "to_dothan", tag: "faithful", feedback: "You turn north again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  to_dothan: {
    id: "to_dothan",
    title: "They See You",
    text: "Across the green fields, your brothers spot the colored coat.\nThey gather, pointing.",
    choices: [
      { text: "Run from them", nextScene: "run_consequence", tag: "fearful", feedback: "Where can you run? The fields are open.", isCorrect: false, sentiment: "negative" },
      { text: "Hide the coat first", nextScene: "hide2_consequence", tag: "shrewd", feedback: "They have already seen it.", isCorrect: false, sentiment: "negative" },
      { text: "Approach in peace", nextScene: "approach", tag: "honest", feedback: "You raise your hand. \"Peace, my brothers.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "Caught in the Field",
    text: "Their long strides catch you.\nThe coat marks you from afar.",
    choices: [
      { text: "Stand and greet them in peace", nextScene: "approach", tag: "honest", feedback: "You stop running and face them.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide2_consequence: {
    id: "hide2_consequence",
    title: "Too Late",
    text: "They are already coming.\nThe coat lies crumpled at your feet.",
    choices: [
      { text: "Approach them in peace", nextScene: "approach", tag: "honest", feedback: "You walk forward, hands open.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE PIT ============
  approach: {
    id: "approach",
    title: "\"The Dreamer Comes\"",
    text: "\"Behold, this dreamer.\"\nThey seize you. The coat is torn from your shoulders.",
    choices: [
      { text: "Beg Reuben for mercy", nextScene: "beg_reuben", tag: "humble", feedback: "Genesis 37:23 — When Joseph reached his brothers, they stripped him of his coat of many colors.", isCorrect: true, sentiment: "positive" },
      { text: "Curse them in your fear", nextScene: "curse_consequence", tag: "proud", feedback: "Your words make their hands tighter.", isCorrect: false, sentiment: "negative" },
      { text: "Fight back with all your strength", nextScene: "fight_consequence", tag: "violent", feedback: "Ten against one. You fall to the dust.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Hands Like Iron",
    text: "Their grip will not loosen.\nOnly mercy can save you now.",
    choices: [
      { text: "Beg Reuben for mercy", nextScene: "beg_reuben", tag: "humble", feedback: "You turn to the eldest. \"Reuben—\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  fight_consequence: {
    id: "fight_consequence",
    title: "Pinned to the Earth",
    text: "Bruised and breathless, you cannot rise.\nOnly Reuben might still hear you.",
    choices: [
      { text: "Beg Reuben for mercy", nextScene: "beg_reuben", tag: "humble", feedback: "\"Reuben, my brother — please.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_reuben: {
    id: "beg_reuben",
    title: "Reuben Intervenes",
    text: "\"Shed no blood,\" Reuben says. \"Cast him into this pit.\"\nHe plans to rescue you later.",
    choices: [
      { text: "Cry out to Heaven from the pit", nextScene: "cry_out", tag: "faithful", feedback: "Genesis 37:24 — Joseph's brothers took him and cast him into a pit, which was empty of water.", isCorrect: true, sentiment: "positive" },
      { text: "Threaten Father's wrath", nextScene: "threat_consequence", tag: "proud", feedback: "Threats from a pit fall back on the speaker.", isCorrect: false, sentiment: "negative" },
    ],
  },
  threat_consequence: {
    id: "threat_consequence",
    title: "Stones Above",
    text: "Their laughter echoes down.\nOnly God can hear you here.",
    choices: [
      { text: "Cry out to Heaven", nextScene: "cry_out", tag: "faithful", feedback: "You whisper, \"O God of my fathers...\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  cry_out: {
    id: "cry_out",
    title: "Voices Above",
    text: "Hooves and bells. Camels passing.\nA caravan of Ishmaelites comes near.",
    choices: [
      { text: "Stay silent and wait for Reuben", nextScene: "silent_consequence", tag: "fearful", feedback: "Judah's voice rises before Reuben returns.", isCorrect: false, sentiment: "negative" },
      { text: "Trust God's hand in this", nextScene: "judah_speaks", tag: "faithful", feedback: "Genesis 37:28 — Joseph was sold into slavery, but God was with him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "The Plan Unfolds",
    text: "You hear Judah's voice — calm, calculating.\nGod is at work even now.",
    choices: [
      { text: "Trust God's hand", nextScene: "judah_speaks", tag: "faithful", feedback: "You lift your eyes to the slit of sky.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — SOLD ============
  judah_speaks: {
    id: "judah_speaks",
    title: "Judah's Counsel",
    text: "\"What profit if we kill our brother? Let us sell him.\"\nThey haul you up by the rope.",
    choices: [
      { text: "Plead with the merchants", nextScene: "plead_consequence", tag: "fearful", feedback: "Silver has already been counted.", isCorrect: false, sentiment: "negative" },
      { text: "Accept the path God allows", nextScene: "accept", tag: "faithful", feedback: "Genesis 37:28 — Joseph's brothers sold him to the Ishmaelites for twenty shekels of silver.", isCorrect: true, sentiment: "positive" },
      { text: "Strike Judah in fury", nextScene: "strike_consequence", tag: "violent", feedback: "Bound hands cannot strike. Bound hearts can pray.", isCorrect: false, sentiment: "negative" },
    ],
  },
  plead_consequence: {
    id: "plead_consequence",
    title: "Twenty Pieces of Silver",
    text: "Coins clink into Judah's hand.\nThe merchants nod and bind your wrists.",
    choices: [
      { text: "Accept the path God allows", nextScene: "accept", tag: "faithful", feedback: "Your tears are silent. Your trust is not.", isCorrect: true, sentiment: "positive" },
    ],
  },
  strike_consequence: {
    id: "strike_consequence",
    title: "Bound Wrists",
    text: "The rope tightens. There is no fight to be had.\nOnly faith remains.",
    choices: [
      { text: "Accept the path God allows", nextScene: "accept", tag: "faithful", feedback: "You whisper a prayer for them all.", isCorrect: true, sentiment: "positive" },
    ],
  },
  accept: {
    id: "accept",
    title: "Toward Egypt",
    text: "The caravan turns south, dust rising.\nBehind you, your brothers grow small.",
    choices: [
      { text: "Carry the dream in your heart", nextScene: "to_egypt", tag: "faithful", feedback: "The vision of sheaves remains, alive.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — THE BLOODIED COAT ============
  to_egypt: {
    id: "to_egypt",
    title: "The Bloodied Coat",
    text: "Far behind, your brothers dip the coat in goat's blood.\nThey carry it home to Jacob.",
    choices: [
      { text: "Pray for your father", nextScene: "father_grief", tag: "faithful", feedback: "\"Comfort him, O God of Israel.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  father_grief: {
    id: "father_grief",
    title: "Jacob Mourns",
    text: "Jacob tears his clothes. \"A wild beast has devoured him.\"\nHe will not be comforted.",
    choices: [
      { text: "Trust that God's plan endures", nextScene: "ending", tag: "faithful", feedback: "What man means for evil, God means for good.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "The Road to Egypt",
    text: "The dunes rise gold ahead.\nA boy goes down to Egypt — but God goes with him.",
    choices: [],
    isFinal: true,
  },
};
