export interface StoryChoice {
  text: string;
  nextScene: string;
  tag?: string;
}

export interface StoryScene {
  id: string;
  title: string;
  text: string;
  choices: StoryChoice[];
  isFinal?: boolean;
}

export const creationScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "Before All Things",
    text: "Darkness covers the deep.\nNothing exists. Nothing moves.",
    choices: [
      { text: "Listen to the silence", nextScene: "silence", tag: "contemplative" },
      { text: "Wait for the voice", nextScene: "voice", tag: "faithful" },
      { text: "Feel the void", nextScene: "void", tag: "aware" },
    ],
  },
  silence: {
    id: "silence",
    title: "The Great Silence",
    text: "An eternity of stillness.\nThen — a breath.",
    choices: [
      { text: "Follow the breath", nextScene: "light", tag: "drawn" },
      { text: "Tremble at what comes", nextScene: "light", tag: "awestruck" },
    ],
  },
  voice: {
    id: "voice",
    title: "The Word",
    text: "A voice thunders across nothing.\nIt speaks with the weight of forever.",
    choices: [
      { text: "\"Let there be light\"", nextScene: "light", tag: "obedient" },
      { text: "Feel the power of the word", nextScene: "light", tag: "reverent" },
    ],
  },
  void: {
    id: "void",
    title: "The Formless Deep",
    text: "Water without shores. Dark without end.\nThe Spirit hovers over the face of the deep.",
    choices: [
      { text: "Watch the Spirit move", nextScene: "light", tag: "witness" },
      { text: "Sense what is coming", nextScene: "light", tag: "prophetic" },
    ],
  },
  light: {
    id: "light",
    title: "Let There Be Light",
    text: "Light explodes from nothing.\nGod divides light from darkness.",
    choices: [
      { text: "Watch the sky form", nextScene: "sky", tag: "wonder" },
      { text: "Feel warmth for the first time", nextScene: "warmth", tag: "grateful" },
      { text: "See day and night born", nextScene: "day_night", tag: "understanding" },
    ],
  },
  warmth: {
    id: "warmth",
    title: "First Warmth",
    text: "Light touches everything.\nWhere there was cold, now there is life.",
    choices: [
      { text: "Look upward", nextScene: "sky", tag: "curious" },
      { text: "Watch the waters part", nextScene: "sky", tag: "amazed" },
    ],
  },
  day_night: {
    id: "day_night",
    title: "Evening and Morning",
    text: "The first sunset. The first dawn.\nTime begins.",
    choices: [
      { text: "Witness the second day", nextScene: "sky", tag: "patient" },
      { text: "Marvel at the rhythm", nextScene: "sky", tag: "joyful" },
    ],
  },
  sky: {
    id: "sky",
    title: "The Heavens Above",
    text: "God stretches out the sky.\nWaters above, waters below — separated by breath.",
    choices: [
      { text: "Watch the land emerge", nextScene: "land", tag: "expectant" },
      { text: "Listen to the waters", nextScene: "waters_gather", tag: "peaceful" },
      { text: "Look at the vast expanse", nextScene: "expanse", tag: "humbled" },
    ],
  },
  waters_gather: {
    id: "waters_gather",
    title: "The Gathering of Waters",
    text: "Oceans rush into their places.\nRivers carve the young earth.",
    choices: [
      { text: "See dry land appear", nextScene: "land", tag: "eager" },
      { text: "Follow the rivers", nextScene: "land", tag: "explorer" },
    ],
  },
  expanse: {
    id: "expanse",
    title: "The Vast Sky",
    text: "Blue stretches endlessly.\nThe dome of heaven arches over all creation.",
    choices: [
      { text: "Turn your gaze downward", nextScene: "land", tag: "grounded" },
      { text: "Wait for what fills it", nextScene: "land", tag: "anticipating" },
    ],
  },
  land: {
    id: "land",
    title: "Dry Ground",
    text: "Mountains rise from the sea.\nGod speaks — and green erupts everywhere.",
    choices: [
      { text: "Walk through the new forest", nextScene: "plants", tag: "wanderer" },
      { text: "Touch the first flower", nextScene: "flowers", tag: "gentle" },
      { text: "Climb the first mountain", nextScene: "mountain", tag: "bold" },
    ],
  },
  plants: {
    id: "plants",
    title: "The First Garden",
    text: "Trees stretch toward heaven.\nFruit hangs heavy — sweet and untouched.",
    choices: [
      { text: "Wait for the stars", nextScene: "stars", tag: "patient" },
      { text: "Taste the first fruit", nextScene: "stars", tag: "delighted" },
    ],
  },
  flowers: {
    id: "flowers",
    title: "Colors Unnamed",
    text: "Petals open for the first time.\nNo eye has seen them before yours.",
    choices: [
      { text: "Look up at the darkening sky", nextScene: "stars", tag: "dreamer" },
      { text: "Breathe in the fragrance", nextScene: "stars", tag: "savoring" },
    ],
  },
  mountain: {
    id: "mountain",
    title: "The Summit",
    text: "From the peak, you see it all.\nAn empty world — waiting to be filled.",
    choices: [
      { text: "Watch the sky change", nextScene: "stars", tag: "visionary" },
      { text: "Descend into the valley", nextScene: "stars", tag: "humble" },
    ],
  },
  stars: {
    id: "stars",
    title: "Sun, Moon, and Stars",
    text: "God hangs the sun like a lamp.\nA thousand stars pierce the velvet dark.",
    choices: [
      { text: "Listen for the sea", nextScene: "sea_creatures", tag: "attentive" },
      { text: "Count the stars", nextScene: "countless_stars", tag: "awed" },
      { text: "Watch the moon rise", nextScene: "moonrise", tag: "contemplative" },
    ],
  },
  countless_stars: {
    id: "countless_stars",
    title: "Uncountable",
    text: "You try to count them.\nYou cannot. They are a promise.",
    choices: [
      { text: "Turn toward the sea", nextScene: "sea_creatures", tag: "moved" },
      { text: "Wait for morning", nextScene: "sea_creatures", tag: "patient" },
    ],
  },
  moonrise: {
    id: "moonrise",
    title: "The Lesser Light",
    text: "Silver light over still waters.\nThe moon guards the night.",
    choices: [
      { text: "Hear something in the ocean", nextScene: "sea_creatures", tag: "alert" },
      { text: "Sleep until dawn", nextScene: "sea_creatures", tag: "restful" },
    ],
  },
  sea_creatures: {
    id: "sea_creatures",
    title: "The Waters Teem",
    text: "Whales breach. Fish swarm.\nBirds burst from nothing — filling the sky with song.",
    choices: [
      { text: "Watch the land creatures appear", nextScene: "land_creatures", tag: "eager" },
      { text: "Follow a bird in flight", nextScene: "bird_flight", tag: "free" },
    ],
  },
  bird_flight: {
    id: "bird_flight",
    title: "First Flight",
    text: "Wings catch the wind.\nThe bird does not know fear — only sky.",
    choices: [
      { text: "Return to the earth", nextScene: "land_creatures", tag: "grounded" },
      { text: "Watch from above", nextScene: "land_creatures", tag: "observing" },
    ],
  },
  land_creatures: {
    id: "land_creatures",
    title: "Every Living Thing",
    text: "Lions, deer, insects, serpents.\nThe earth breathes with life.",
    choices: [
      { text: "Sense something greater coming", nextScene: "before_man", tag: "anticipating" },
      { text: "Walk among them", nextScene: "among_animals", tag: "connected" },
    ],
  },
  among_animals: {
    id: "among_animals",
    title: "Among the Creatures",
    text: "They do not fear you.\nBut none of them is like you.",
    choices: [
      { text: "Feel the emptiness", nextScene: "before_man", tag: "lonely" },
      { text: "Wait for what comes next", nextScene: "before_man", tag: "trusting" },
    ],
  },
  before_man: {
    id: "before_man",
    title: "The Sixth Day",
    text: "God kneels in the dust.\nHis hands shape something new — something different.",
    choices: [
      { text: "Watch Him breathe life", nextScene: "breath_of_life", tag: "witness" },
      { text: "\"In our image...\"", nextScene: "breath_of_life", tag: "sacred" },
    ],
  },
  breath_of_life: {
    id: "breath_of_life",
    title: "The Breath of Life",
    text: "Dust becomes flesh. Eyes open.\nYou are alive. You are the first.",
    choices: [
      { text: "Stand in the garden", nextScene: "first_garden", tag: "born" },
      { text: "Look at your hands", nextScene: "first_garden", tag: "awakened" },
    ],
  },
  first_garden: {
    id: "first_garden",
    title: "Eden",
    text: "Paradise stretches before you.\nGod looks at all He has made.",
    choices: [
      { text: "Hear the final words", nextScene: "very_good", tag: "complete" },
      { text: "Rest beside the Creator", nextScene: "rest", tag: "peaceful" },
    ],
  },
  very_good: {
    id: "very_good",
    title: "Very Good",
    text: "\"It is very good.\"\nThe Creator smiles upon His work.",
    choices: [
      { text: "Enter the rest", nextScene: "rest", tag: "blessed" },
    ],
  },
  rest: {
    id: "rest",
    title: "The Seventh Day",
    text: "God rests. All creation breathes.\nThe story has only just begun.",
    choices: [],
    isFinal: true,
  },
};

