import { StoryScene } from "@/data/stories/creation";

// PASSOVER — Exodus 11–12
// You ARE Moses. The final plague approaches. Stops at Pharaoh letting Israel go.
// Dialogue ≤100 chars per line. Choices ≤40 chars. Order shuffled at runtime.

export const passoverScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE LORD'S INSTRUCTION ============
  start: {
    id: "start",
    title: "One Last Word",
    text: "The Lord speaks at dusk in Goshen.\nA final sign will free His people.",
    choices: [
      { text: "Argue: surely it is enough", nextScene: "argue_consequence", tag: "rash", feedback: "His word is not yours to weigh.", isCorrect: false, sentiment: "negative" },
      { text: "Listen and obey His word", nextScene: "gather_elders", tag: "obedient", feedback: "Exodus 12:28 — The Israelites did as the Lord commanded Moses and Aaron.", isCorrect: true, sentiment: "positive" },
      { text: "Hide His word from the people", nextScene: "hide_consequence", tag: "fearful", feedback: "It must be told to all.", isCorrect: false, sentiment: "negative" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Do Not Argue",
    text: "He has set the hour Himself.\nReceive what He commands.",
    choices: [
      { text: "Listen and obey His word", nextScene: "gather_elders", tag: "obedient", feedback: "You kneel in silence.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Speak It to All",
    text: "His word is for every household.\nDo not keep it to yourself.",
    choices: [
      { text: "Listen and obey His word", nextScene: "gather_elders", tag: "obedient", feedback: "You go to the elders.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE LAMB ============
  gather_elders: {
    id: "gather_elders",
    title: "Aaron at Your Side",
    text: "Aaron waits, the elders behind him.\nWhat must each household do?",
    choices: [
      { text: "Take a lamb without blemish", nextScene: "lamb_chosen", tag: "obedient", feedback: "Exodus 12:3 — Moses told the elders that each man was to take a lamb for his family, one for each household.", isCorrect: true, sentiment: "positive" },
      { text: "Buy any animal in haste", nextScene: "any_animal_consequence", tag: "evasive", feedback: "Without blemish, He said.", isCorrect: false, sentiment: "negative" },
    ],
  },
  any_animal_consequence: {
    id: "any_animal_consequence",
    title: "Without Blemish",
    text: "Not any beast. The Lord chose this.\nObey His word exactly.",
    choices: [
      { text: "Take a lamb without blemish", nextScene: "lamb_chosen", tag: "obedient", feedback: "The elders nod.", isCorrect: true, sentiment: "positive" },
    ],
  },

  lamb_chosen: {
    id: "lamb_chosen",
    title: "On the Fourteenth Day",
    text: "The lamb is kept until twilight.\nThen all Israel slays it together.",
    choices: [
      { text: "Hide the lamb's blood away", nextScene: "hide_blood_consequence", tag: "fearful", feedback: "The blood must be shown.", isCorrect: false, sentiment: "negative" },
      { text: "Mark the doorposts with blood", nextScene: "doorposts_marked", tag: "obedient", feedback: "Exodus 12:7 — The Israelites were to take some of the blood and put it on the sides and tops of the doorframes of the houses where they ate the lambs.", isCorrect: true, sentiment: "positive" },
      { text: "Pour the blood on the ground", nextScene: "ground_consequence", tag: "rash", feedback: "On the doorframe, He said.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_blood_consequence: {
    id: "hide_blood_consequence",
    title: "Show the Sign",
    text: "It is the sign He looks for.\nDo not hide what He commanded.",
    choices: [
      { text: "Mark the doorposts with blood", nextScene: "doorposts_marked", tag: "obedient", feedback: "You take the hyssop.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ground_consequence: {
    id: "ground_consequence",
    title: "On the Doorframe",
    text: "Lintel and side posts, He said.\nThat is where the sign must rest.",
    choices: [
      { text: "Mark the doorposts with blood", nextScene: "doorposts_marked", tag: "obedient", feedback: "Each home is marked.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — DOORPOSTS AND MEAL ============
  doorposts_marked: {
    id: "doorposts_marked",
    title: "The Sign on Every Door",
    text: "Red marks the wood of every home.\nNow the meal must be prepared.",
    choices: [
      { text: "Roast the lamb with bitter herbs", nextScene: "meal_prepared", tag: "obedient", feedback: "Exodus 12:8 — That same night, the Israelites were to eat the meat roasted over the fire, along with bitter herbs and bread made without yeast.", isCorrect: true, sentiment: "positive" },
      { text: "Boil it with leavened bread", nextScene: "boil_consequence", tag: "evasive", feedback: "Roasted, with no leaven.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boil_consequence: {
    id: "boil_consequence",
    title: "As He Commanded",
    text: "Roasted by fire. No leaven tonight.\nDo it the way He spoke.",
    choices: [
      { text: "Roast the lamb with bitter herbs", nextScene: "meal_prepared", tag: "obedient", feedback: "The fire is lit.", isCorrect: true, sentiment: "positive" },
    ],
  },

  meal_prepared: {
    id: "meal_prepared",
    title: "Eat in Haste",
    text: "Loins girded. Sandals on. Staff in hand.\nReady to leave at His word.",
    choices: [
      { text: "Sit at ease, take your time", nextScene: "ease_consequence", tag: "evasive", feedback: "In haste, He said.", isCorrect: false, sentiment: "negative" },
      { text: "Wander out into the street", nextScene: "wander_consequence", tag: "rash", feedback: "Not one foot outside tonight.", isCorrect: false, sentiment: "negative" },
      { text: "Stay inside until morning", nextScene: "stay_inside", tag: "obedient", feedback: "Exodus 12:22 — The Lord commanded that no one was to go outside his house until morning.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ease_consequence: {
    id: "ease_consequence",
    title: "Be Ready",
    text: "Tonight you eat as travelers.\nReady to rise and go.",
    choices: [
      { text: "Stay inside until morning", nextScene: "stay_inside", tag: "obedient", feedback: "You gird your robe.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wander_consequence: {
    id: "wander_consequence",
    title: "Stay Within",
    text: "The blood guards only those inside.\nDo not step beyond the door.",
    choices: [
      { text: "Stay inside until morning", nextScene: "stay_inside", tag: "obedient", feedback: "You bolt the door.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE NIGHT OF JUDGMENT ============
  stay_inside: {
    id: "stay_inside",
    title: "Midnight",
    text: "A great cry rises from Egypt.\nIn Goshen, only silence.",
    choices: [
      { text: "Open the door to look out", nextScene: "open_consequence", tag: "rash", feedback: "Not yet. Wait on Him.", isCorrect: false, sentiment: "negative" },
      { text: "Boast that you are spared", nextScene: "boast_consequence", tag: "prideful", feedback: "It is His mercy, not yours.", isCorrect: false, sentiment: "negative" },
      { text: "Wait quietly with your family", nextScene: "morning_summons", tag: "humble", feedback: "Exodus 12:23 — The Lord will pass through to strike down the Egyptians, and when he sees the blood on the top and sides of the doorframe, he will pass over that doorway and will not permit the destroyer to enter your houses and strike you down.", isCorrect: true, sentiment: "positive" },
    ],
  },
  open_consequence: {
    id: "open_consequence",
    title: "Wait on Him",
    text: "The Lord passes over tonight.\nDo not break the watch.",
    choices: [
      { text: "Wait quietly with your family", nextScene: "morning_summons", tag: "humble", feedback: "You sit beside the fire.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "His Mercy, Not Yours",
    text: "It is the blood that spares you.\nNot your hand, not your name.",
    choices: [
      { text: "Wait quietly with your family", nextScene: "morning_summons", tag: "humble", feedback: "You bow your head low.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — PHARAOH BREAKS ============
  morning_summons: {
    id: "morning_summons",
    title: "Pharaoh's Messengers",
    text: "Before dawn they pound your door.\nThe king himself summons you now.",
    choices: [
      { text: "Refuse and stay in Goshen", nextScene: "refuse_consequence", tag: "fearful", feedback: "Go. The hour has come.", isCorrect: false, sentiment: "negative" },
      { text: "Go to Pharaoh with Aaron", nextScene: "before_broken_pharaoh", tag: "obedient", feedback: "Exodus 12:31 — Pharaoh summoned Moses and Aaron during the night and said, \"Up! Leave my people, you and the Israelites! Go, worship the Lord as you have requested.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "The Hour Has Come",
    text: "He calls. Do not turn aside.\nThis is the moment promised.",
    choices: [
      { text: "Go to Pharaoh with Aaron", nextScene: "before_broken_pharaoh", tag: "obedient", feedback: "You take the road to the palace.", isCorrect: true, sentiment: "positive" },
    ],
  },

  before_broken_pharaoh: {
    id: "before_broken_pharaoh",
    title: "\"Go. Serve the Lord.\"",
    text: "Pharaoh stands hollow with grief.\n\"Take your flocks. Leave my land.\"",
    choices: [
      { text: "Mock him in his sorrow", nextScene: "mock_consequence", tag: "prideful", feedback: "Do not strike a broken man.", isCorrect: false, sentiment: "negative" },
      { text: "Demand half stay behind", nextScene: "half_consequence", tag: "evasive", feedback: "All Israel goes, with all.", isCorrect: false, sentiment: "negative" },
      { text: "Accept and call the people forth", nextScene: "ending", tag: "faithful", feedback: "Exodus 12:31-32 — Pharaoh told Moses and Aaron to go, worship the Lord, and take their flocks and herds as they had requested, and to bless him also.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Not Mockery",
    text: "Judgment was His to give.\nReceive his word and go.",
    choices: [
      { text: "Accept and call the people forth", nextScene: "ending", tag: "faithful", feedback: "You bow and turn away.", isCorrect: true, sentiment: "positive" },
    ],
  },
  half_consequence: {
    id: "half_consequence",
    title: "All, With All",
    text: "Not one child. Not one beast.\nAll the people go free.",
    choices: [
      { text: "Accept and call the people forth", nextScene: "ending", tag: "faithful", feedback: "You hold the line.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Toward the Sunrise",
    text: "Israel rises from Goshen at dawn.\nThe long night is finished.",
    choices: [],
    isFinal: true,
  },
};
