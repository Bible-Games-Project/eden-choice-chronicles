import { StoryScene } from "@/data/stories/creation";

export const abrahamEgyptScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "The Land Dries Up",
    text: "The green hills turn brown.\nThe streams you followed — gone. The ground cracks.\nFamine spreads across the land God promised you.",
    choices: [
      { text: "Pray and wait for provision", nextScene: "prayer", tag: "faithful", feedback: "You kneel on cracked earth. The sky is silent.", sentiment: "positive" },
      { text: "Look south — toward Egypt", nextScene: "egypt_temptation", tag: "anxious", feedback: "They say Egypt has grain. Egypt has water. Egypt has everything.", sentiment: "negative" },
      { text: "Ration what remains", nextScene: "prayer", tag: "practical", feedback: "The food will last days. Not weeks.", sentiment: "negative" },
    ],
  },
  prayer: {
    id: "prayer",
    title: "Silence from Above",
    text: "You pray — but the heavens feel like bronze.\nSarah grows thin. The animals weaken.\nHow long can faith feed an empty stomach?",
    choices: [
      { text: "Trust that God will provide", nextScene: "egypt_temptation", tag: "steadfast", feedback: "You try. But your wife's face haunts you more than hunger.", sentiment: "positive" },
      { text: "Decide to go to Egypt", nextScene: "the_road_south", tag: "desperate", feedback: "You cannot watch them starve. You must act.", sentiment: "negative" },
    ],
  },
  egypt_temptation: {
    id: "egypt_temptation",
    title: "The Pull of Egypt",
    text: "Traders pass through, heading south.\n\"Egypt overflows with grain,\" one says.\n\"Pharaoh feeds even strangers.\"",
    choices: [
      { text: "Stay in the promised land", nextScene: "prayer", tag: "trusting", feedback: "This is where God sent you. But the famine doesn't care.", sentiment: "positive" },
      { text: "Pack up and head to Egypt", nextScene: "the_road_south", tag: "deciding", feedback: "Survival wins. You tell Sarah to prepare.", sentiment: "negative" },
    ],
  },
  the_road_south: {
    id: "the_road_south",
    title: "The Road to Egypt",
    text: "The desert stretches between you and Egypt.\nSarah walks beside you — silent, trusting.\nBut a dark thought begins to form.",
    choices: [
      { text: "Push the thought away", nextScene: "approaching_egypt", tag: "resisting", feedback: "You try. But it returns with every step.", sentiment: "positive" },
      { text: "Let the fear take shape", nextScene: "the_fear", tag: "afraid", feedback: "She is beautiful. And in Egypt — that is dangerous.", sentiment: "negative" },
    ],
  },
  approaching_egypt: {
    id: "approaching_egypt",
    title: "The Border",
    text: "Egypt rises before you — golden, powerful.\nSoldiers guard the crossing. They look at your wife.",
    choices: [
      { text: "Walk through with confidence", nextScene: "the_fear", tag: "bold", feedback: "Their eyes linger on Sarah. Your stomach tightens.", sentiment: "negative" },
      { text: "Pray before entering", nextScene: "the_fear", tag: "seeking", feedback: "You whisper to God. No answer comes. Only the wind.", sentiment: "positive" },
    ],
  },
  the_fear: {
    id: "the_fear",
    title: "A Terrible Thought",
    text: "\"When the Egyptians see you, they will say:\n'This is his wife.' And they will kill me.\"\nThe fear grips you — cold, suffocating.",
    choices: [
      { text: "Trust God to protect you both", nextScene: "entering_egypt", tag: "faithful", feedback: "He promised you descendants. He will keep you alive.", sentiment: "positive" },
      { text: "\"Say you are my sister\"", nextScene: "the_lie", tag: "scheming", feedback: "The words come out before you can stop them.", sentiment: "negative" },
    ],
  },
  entering_egypt: {
    id: "entering_egypt",
    title: "Into Egypt",
    text: "You enter Egypt openly — husband and wife.\nThe streets bustle with life. Abundance everywhere.\nBut eyes follow Sarah. Whispers spread.",
    choices: [
      { text: "Stay close to her", nextScene: "pharaoh_hears", tag: "protective", feedback: "You keep her near. But the whispers reach the palace.", sentiment: "positive" },
      { text: "Grow nervous — reconsider the lie", nextScene: "the_lie", tag: "wavering", feedback: "Fear returns. What if they come for you?", sentiment: "negative" },
    ],
  },
  the_lie: {
    id: "the_lie",
    title: "The Deception",
    text: "Sarah looks at you — pain in her eyes.\n\"You want me to lie?\"\nThe silence between you stretches like a wound.",
    choices: [
      { text: "\"Forgive me — I will tell the truth\"", nextScene: "entering_egypt", tag: "repenting", feedback: "You take her hand. \"I was wrong.\"", sentiment: "positive" },
      { text: "\"It's the only way to survive\"", nextScene: "sarah_taken", tag: "insisting", feedback: "She turns away. But she agrees. The lie takes root.", sentiment: "negative" },
    ],
  },
  pharaoh_hears: {
    id: "pharaoh_hears",
    title: "Word Reaches the Palace",
    text: "Officials arrive at your tent.\n\"Pharaoh has heard of the beautiful woman traveling with you.\"\nTheir smiles are polite. Their intent is not.",
    choices: [
      { text: "\"She is my wife. Touch her and face God's wrath.\"", nextScene: "gods_intervention", tag: "courageous", feedback: "They hesitate. Something in your voice shakes them.", sentiment: "positive" },
      { text: "Panic — claim she is your sister", nextScene: "sarah_taken", tag: "cowardly", feedback: "The lie spills out. They smile. They take her.", sentiment: "negative" },
    ],
  },
  sarah_taken: {
    id: "sarah_taken",
    title: "Sarah in the Palace",
    text: "They take her to Pharaoh's house.\nYou are given gifts — sheep, cattle, servants.\nWealth pours in. But your wife is gone.",
    choices: [
      { text: "Fall on your face and beg God for help", nextScene: "gods_intervention", tag: "desperate_prayer", feedback: "\"What have I done?\" The tears burn. The prayer is raw.", sentiment: "positive" },
      { text: "Accept the gifts in silence", nextScene: "consequences_wealth", tag: "complicit", feedback: "You count the animals. Your hands shake.", sentiment: "negative" },
    ],
  },
  consequences_wealth: {
    id: "consequences_wealth",
    title: "Blood Money",
    text: "Your tents overflow with Egyptian wealth.\nBut every gift feels like a nail in your chest.\nSarah is in Pharaoh's palace — because of you.",
    choices: [
      { text: "Cry out to God in anguish", nextScene: "gods_intervention", tag: "broken", feedback: "The cry tears from your throat — animal, desperate.", sentiment: "positive" },
      { text: "Try to negotiate her return", nextScene: "gods_intervention", tag: "scheming", feedback: "You send word. They laugh. She belongs to Pharaoh now.", sentiment: "negative" },
    ],
  },
  gods_intervention: {
    id: "gods_intervention",
    title: "God Strikes",
    text: "Plagues fall on Pharaoh's house.\nSickness sweeps through the palace.\nPharaoh's physicians cannot explain it.",
    choices: [
      { text: "Know that God is acting", nextScene: "pharaoh_confronts", tag: "recognizing", feedback: "The plagues are not random. God has not forgotten Sarah.", sentiment: "positive" },
      { text: "Fear what comes next", nextScene: "pharaoh_confronts", tag: "terrified", feedback: "If God strikes Pharaoh — what will He do to you?", sentiment: "negative" },
    ],
  },
  pharaoh_confronts: {
    id: "pharaoh_confronts",
    title: "The Reckoning",
    text: "Pharaoh summons you — his face burning with rage.\n\"What have you done to me?\nWhy did you say 'She is my sister'?\"",
    choices: [
      { text: "Bow your head — you have no defense", nextScene: "sent_away", tag: "ashamed", feedback: "There is nothing to say. Every word would be another lie.", sentiment: "positive" },
      { text: "Try to explain yourself", nextScene: "sent_away", tag: "excusing", feedback: "\"I thought you would kill me—\" He raises his hand. Silence.", sentiment: "negative" },
    ],
  },
  sent_away: {
    id: "sent_away",
    title: "Expelled",
    text: "\"Take your wife. Take everything. Leave.\"\nPharaoh's guards escort you to the border.\nSarah walks beside you — silent. The silence burns.",
    choices: [
      { text: "Reach for her hand", nextScene: "the_return", tag: "humble", feedback: "She doesn't pull away. But she doesn't look at you.", sentiment: "positive" },
      { text: "Walk ahead in shame", nextScene: "the_return", tag: "guilt", feedback: "You can't face her. You can barely face yourself.", sentiment: "negative" },
    ],
  },
  the_return: {
    id: "the_return",
    title: "Back to the Promise",
    text: "You return to the land God promised.\nThe famine has eased. Green returns to the hills.\nBut the weight of what you did follows you.",
    choices: [
      { text: "Build an altar and repent", nextScene: "the_altar", tag: "repentant", feedback: "Stone by stone. Each one a confession.", sentiment: "positive" },
      { text: "Try to forget Egypt ever happened", nextScene: "the_altar", tag: "avoidant", feedback: "You can't. The gifts remind you. Sarah's silence reminds you.", sentiment: "negative" },
    ],
  },
  the_altar: {
    id: "the_altar",
    title: "The Altar",
    text: "You build an altar where you first heard God's voice.\nSmoke rises. You kneel in the dust.\nThe promise remains — despite you, not because of you.",
    isFinal: true,
    choices: [],
  },
};
