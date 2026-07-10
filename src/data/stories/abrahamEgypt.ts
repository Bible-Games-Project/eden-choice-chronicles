import { StoryScene } from "@/data/stories/creation";

// Story 7 — Abraham in Egypt (Genesis 12:10-20).
// First-person: the player IS Abram.
// Correct choices describe events explicitly told in Scripture.
// Incorrect choices describe actions that do NOT appear in the biblical account.
export const abrahamEgyptScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "A Famine in the Land",
    text: "A severe famine strikes the land of Canaan.\nWhat do you do?",
    choices: [
      { text: "Go down to Egypt to live there as a foreigner for a while", nextScene: "road_south", tag: "egypt", feedback: "Genesis 12:10 — Now there was a famine in the land, and Abram went down to Egypt to live there for a while, for the famine was severe.", isCorrect: true, sentiment: "positive" },
      { text: "Sail across the sea to a distant island", nextScene: "road_south", tag: "invented", feedback: "Genesis says Abram went down to Egypt during the famine.", isCorrect: false, sentiment: "negative" },
      { text: "Stay in Canaan and lead an army", nextScene: "road_south", tag: "invented", feedback: "Genesis says Abram went to Egypt because of the famine.", isCorrect: false, sentiment: "negative" },
    ],
  },
  road_south: {
    id: "road_south",
    title: "As You Near Egypt",
    text: "You are about to enter Egypt.\nWhat do you say to your wife Sarai?",
    choices: [
      { text: "'I know what a beautiful woman you are — the Egyptians will kill me to take you'", nextScene: "fear_rises", tag: "fear", feedback: "Genesis 12:11-12 — 'I know what a beautiful woman you are. When the Egyptians see you, they will kill me but will let you live.'", isCorrect: true, sentiment: "negative" },
      { text: "'The Lord will protect us; we have nothing to fear'", nextScene: "fear_rises", tag: "invented", feedback: "Genesis says Abram was afraid and did not trust openly; he devised a plan.", isCorrect: false, sentiment: "positive" },
      { text: "Say nothing at all to Sarai", nextScene: "fear_rises", tag: "invented", feedback: "Genesis records the words Abram spoke to Sarai about his fear.", isCorrect: false, sentiment: "negative" },
    ],
  },
  fear_rises: {
    id: "fear_rises",
    title: "The Request",
    text: "You ask Sarai to do something to protect your life.\nWhat is it?",
    choices: [
      { text: "'Say you are my sister, so that I will be treated well because of you'", nextScene: "the_lie", tag: "half-truth", feedback: "Genesis 12:13 — 'Say you are my sister, so that I will be treated well for your sake and my life will be spared because of you.'", isCorrect: true, sentiment: "negative" },
      { text: "'Say you are my mother, so no one will notice'", nextScene: "the_lie", tag: "invented", feedback: "Abram asked Sarai to say she was his sister.", isCorrect: false, sentiment: "negative" },
      { text: "'Say we are strangers who have never met'", nextScene: "the_lie", tag: "invented", feedback: "Abram's half-truth was to call her his sister.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_lie: {
    id: "the_lie",
    title: "The Egyptians See Sarai",
    text: "You arrive in Egypt.\nHow do the Egyptians respond to Sarai?",
    choices: [
      { text: "The Egyptians see that she is very beautiful", nextScene: "entering_egypt", tag: "beauty", feedback: "Genesis 12:14 — When Abram came to Egypt, the Egyptians saw that Sarai was a very beautiful woman.", isCorrect: true, sentiment: "negative" },
      { text: "The Egyptians ignore her completely", nextScene: "entering_egypt", tag: "invented", feedback: "Genesis says the Egyptians noticed how beautiful she was.", isCorrect: false, sentiment: "negative" },
      { text: "The Egyptians drive her away from the city", nextScene: "entering_egypt", tag: "invented", feedback: "The Egyptians praised her beauty; they did not drive her away.", isCorrect: false, sentiment: "negative" },
    ],
  },
  entering_egypt: {
    id: "entering_egypt",
    title: "Pharaoh's Officials",
    text: "Pharaoh's officials see Sarai.\nWhat do they do?",
    choices: [
      { text: "They praise her to Pharaoh, and she is taken into his palace", nextScene: "officials_come", tag: "taken", feedback: "Genesis 12:15 — When Pharaoh's officials saw her, they praised her to Pharaoh, and she was taken into his palace.", isCorrect: true, sentiment: "negative" },
      { text: "They chase Abram out of Egypt at once", nextScene: "officials_come", tag: "invented", feedback: "Genesis says Sarai was taken into Pharaoh's palace, not that Abram was chased out.", isCorrect: false, sentiment: "negative" },
      { text: "They ignore her and offer no attention", nextScene: "officials_come", tag: "invented", feedback: "Pharaoh's officials praised her beauty to the king.", isCorrect: false, sentiment: "negative" },
    ],
  },
  officials_come: {
    id: "officials_come",
    title: "For Sarai's Sake",
    text: "Because of Sarai, Pharaoh treats you well.\nHow does he treat Abram?",
    choices: [
      { text: "He gives you sheep, cattle, donkeys, servants and camels", nextScene: "sarah_taken", tag: "gifts", feedback: "Genesis 12:16 — He treated Abram well for her sake, and Abram acquired sheep and cattle, male and female donkeys, male and female servants, and camels.", isCorrect: true, sentiment: "negative" },
      { text: "He puts Abram in prison", nextScene: "sarah_taken", tag: "invented", feedback: "Genesis says Pharaoh gave Abram many gifts for Sarai's sake.", isCorrect: false, sentiment: "negative" },
      { text: "He gives Abram nothing at all", nextScene: "sarah_taken", tag: "invented", feedback: "Genesis lists the many gifts Abram received.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sarah_taken: {
    id: "sarah_taken",
    title: "The Lord Strikes",
    text: "The Lord does not remain silent.\nWhat does He do because of Sarai?",
    choices: [
      { text: "The Lord inflicts serious diseases on Pharaoh and his household", nextScene: "gifts_arrive", tag: "plague", feedback: "Genesis 12:17 — But the Lord inflicted serious diseases on Pharaoh and his household because of Abram's wife Sarai.", isCorrect: true, sentiment: "positive" },
      { text: "The Lord sends fire down on Egypt", nextScene: "gifts_arrive", tag: "invented", feedback: "Genesis says the Lord sent serious diseases, not fire.", isCorrect: false, sentiment: "negative" },
      { text: "The Lord remains silent", nextScene: "gifts_arrive", tag: "invented", feedback: "Genesis says the Lord acted; He struck Pharaoh's house.", isCorrect: false, sentiment: "negative" },
    ],
  },
  gifts_arrive: {
    id: "gifts_arrive",
    title: "Pharaoh Summons You",
    text: "Pharaoh calls for you.\nWhat does he say?",
    choices: [
      { text: "'What have you done to me? Why didn't you tell me she was your wife?'", nextScene: "plagues", tag: "rebuke", feedback: "Genesis 12:18 — 'What have you done to me? Why didn't you tell me she was your wife?'", isCorrect: true, sentiment: "negative" },
      { text: "'Thank you for your gifts — please stay'", nextScene: "plagues", tag: "invented", feedback: "Pharaoh rebuked Abram; he did not thank him.", isCorrect: false, sentiment: "negative" },
      { text: "'Sarai will remain in my house forever'", nextScene: "plagues", tag: "invented", feedback: "Pharaoh returned Sarai to Abram.", isCorrect: false, sentiment: "negative" },
    ],
  },
  plagues: {
    id: "plagues",
    title: "Take Her and Go",
    text: "Pharaoh gives his order.\nWhat does he command?",
    choices: [
      { text: "'Here is your wife. Take her and go!'", nextScene: "confronted", tag: "sendaway", feedback: "Genesis 12:19 — 'Now then, here is your wife. Take her and go!'", isCorrect: true, sentiment: "positive" },
      { text: "'You must remain here as my servant forever'", nextScene: "confronted", tag: "invented", feedback: "Pharaoh sent Abram away with Sarai.", isCorrect: false, sentiment: "negative" },
      { text: "'I will keep Sarai and you may return to Canaan alone'", nextScene: "confronted", tag: "invented", feedback: "Pharaoh returned Sarai to Abram.", isCorrect: false, sentiment: "negative" },
    ],
  },
  confronted: {
    id: "confronted",
    title: "Escorted Out",
    text: "Pharaoh gives orders about you.\nWhat happens?",
    choices: [
      { text: "Pharaoh's men send you on your way, with your wife and everything you have", nextScene: "expelled", tag: "escorted", feedback: "Genesis 12:20 — Then Pharaoh gave orders about Abram to his men, and they sent him on his way, with his wife and everything he had.", isCorrect: true, sentiment: "positive" },
      { text: "Pharaoh's men strip you of all your possessions", nextScene: "expelled", tag: "invented", feedback: "Genesis says Abram left with his wife and everything he had.", isCorrect: false, sentiment: "negative" },
      { text: "Pharaoh's men put you in chains", nextScene: "expelled", tag: "invented", feedback: "Genesis says Pharaoh's men sent Abram on his way in peace.", isCorrect: false, sentiment: "negative" },
    ],
  },
  expelled: {
    id: "expelled",
    title: "Going Up from Egypt",
    text: "You leave Egypt.\nWhere do you go?",
    choices: [
      { text: "Go up from Egypt to the Negev, with your wife and all you have", nextScene: "altar", tag: "negev", feedback: "Genesis 13:1 — So Abram went up from Egypt to the Negev, with his wife and everything he had, and Lot went with him.", isCorrect: true, sentiment: "positive" },
      { text: "Stay in Egypt and settle there for good", nextScene: "altar", tag: "invented", feedback: "Genesis says Abram went up from Egypt.", isCorrect: false, sentiment: "negative" },
      { text: "Go east across the desert to Assyria", nextScene: "altar", tag: "invented", feedback: "Genesis says Abram returned to the Negev, in the land of promise.", isCorrect: false, sentiment: "negative" },
    ],
  },
  altar: {
    id: "altar",
    title: "Back to the Altar",
    text: "You return to the place between Bethel and Ai,\nto the altar you had built at first, and there you call on the name of the Lord.",
    choices: [],
    isFinal: true,
  },
};
