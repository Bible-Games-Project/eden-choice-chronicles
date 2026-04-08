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
    text: "Darkness covers everything.\nSilence… deeper than silence.",
    choices: [
      { text: "Stay still in the void", nextScene: "silence", tag: "contemplative" },
      { text: "Reach out into the darkness", nextScene: "void", tag: "aware" },
      { text: "Listen… closely", nextScene: "voice", tag: "faithful" },
    ],
  },
  silence: {
    id: "silence",
    title: "The Great Silence",
    text: "You hold your breath.\nAn eternity passes — then something stirs.",
    choices: [
      { text: "Lean toward the stirring", nextScene: "light", tag: "drawn" },
      { text: "Let it wash over you", nextScene: "light_awe", tag: "awestruck" },
    ],
  },
  voice: {
    id: "voice",
    title: "The Word",
    text: "A voice tears through the nothing.\nIt carries the weight of forever.",
    choices: [
      { text: "Speak with it: \"Let there be light\"", nextScene: "light_obey", tag: "obedient" },
      { text: "Fall to your knees", nextScene: "light_awe", tag: "reverent" },
    ],
  },
  void: {
    id: "void",
    title: "The Formless Deep",
    text: "Endless waters surround you.\nSomething moves… above the deep.",
    choices: [
      { text: "Draw closer to the presence", nextScene: "light", tag: "witness" },
      { text: "Hold still and let it pass over you", nextScene: "light_awe", tag: "prophetic" },
    ],
  },
  light: {
    id: "light",
    title: "Let There Be Light",
    text: "Light bursts into the darkness.\nWarmth touches you for the first time.",
    choices: [
      { text: "Step into the light", nextScene: "sky", tag: "wonder" },
      { text: "Shield your eyes", nextScene: "warmth", tag: "grateful" },
      { text: "Turn back toward the dark", nextScene: "day_night", tag: "understanding" },
    ],
  },
  light_obey: {
    id: "light_obey",
    title: "Let There Be Light",
    text: "Your words merge with His.\nLight explodes — infinite, blinding, alive.",
    choices: [
      { text: "Breathe in the warmth", nextScene: "warmth", tag: "grateful" },
      { text: "Open your eyes slowly", nextScene: "sky", tag: "wonder" },
    ],
  },
  light_awe: {
    id: "light_awe",
    title: "Let There Be Light",
    text: "Light crashes over you like a wave.\nYou tremble — but it is beautiful.",
    choices: [
      { text: "Rise and face it", nextScene: "sky", tag: "brave" },
      { text: "Let tears fall", nextScene: "day_night", tag: "moved" },
    ],
  },
  warmth: {
    id: "warmth",
    title: "First Warmth",
    text: "Light wraps around you.\nWhere there was cold — now there is life.",
    choices: [
      { text: "Lift your face upward", nextScene: "sky", tag: "curious" },
      { text: "Stretch your arms wide", nextScene: "sky_vast", tag: "amazed" },
    ],
  },
  day_night: {
    id: "day_night",
    title: "Evening and Morning",
    text: "Color bleeds across the sky.\nThe first sunset. The first dawn.",
    choices: [
      { text: "Step into the new morning", nextScene: "sky", tag: "patient" },
      { text: "Close your eyes and feel the rhythm", nextScene: "sky_vast", tag: "joyful" },
    ],
  },
  sky: {
    id: "sky",
    title: "The Heavens Above",
    text: "The sky stretches open above you.\nWaters part — above and below.",
    choices: [
      { text: "Reach for the ground beneath you", nextScene: "land", tag: "expectant" },
      { text: "Kneel by the rushing waters", nextScene: "waters_gather", tag: "peaceful" },
      { text: "Stand beneath the vast expanse", nextScene: "expanse", tag: "humbled" },
    ],
  },
  sky_vast: {
    id: "sky_vast",
    title: "The Vast Sky",
    text: "Blue stretches endlessly above.\nYou feel impossibly small — and impossibly held.",
    choices: [
      { text: "Turn your gaze downward", nextScene: "land", tag: "grounded" },
      { text: "Breathe deeply and wait", nextScene: "waters_gather", tag: "anticipating" },
    ],
  },
  waters_gather: {
    id: "waters_gather",
    title: "The Gathering of Waters",
    text: "Oceans rush to their places.\nRivers carve paths through the young earth.",
    choices: [
      { text: "Follow a river's path", nextScene: "land", tag: "explorer" },
      { text: "Press your hands into the wet ground", nextScene: "land_emerge", tag: "eager" },
    ],
  },
  expanse: {
    id: "expanse",
    title: "The Dome of Heaven",
    text: "The sky arches like a cathedral.\nEvery direction holds a promise.",
    choices: [
      { text: "Kneel on the new ground", nextScene: "land", tag: "grounded" },
      { text: "Raise your hands toward it", nextScene: "land_emerge", tag: "worshipful" },
    ],
  },
  land: {
    id: "land",
    title: "Dry Ground",
    text: "Mountains rise from the sea.\nGreen erupts — sudden, wild, everywhere.",
    choices: [
      { text: "Step into the new forest", nextScene: "plants", tag: "wanderer" },
      { text: "Bend down and touch the first flower", nextScene: "flowers", tag: "gentle" },
      { text: "Climb the highest peak", nextScene: "mountain", tag: "bold" },
    ],
  },
  land_emerge: {
    id: "land_emerge",
    title: "The Earth Rises",
    text: "Solid ground forms under your feet.\nYou feel the earth breathe for the first time.",
    choices: [
      { text: "Walk deeper into the green", nextScene: "plants", tag: "wanderer" },
      { text: "Sit beside a growing tree", nextScene: "flowers", tag: "patient" },
    ],
  },
  plants: {
    id: "plants",
    title: "The First Garden",
    text: "Trees stretch toward heaven.\nFruit hangs heavy — sweet, untouched.",
    choices: [
      { text: "Taste the first fruit", nextScene: "stars_delight", tag: "delighted" },
      { text: "Lie beneath the branches and wait", nextScene: "stars", tag: "patient" },
    ],
  },
  flowers: {
    id: "flowers",
    title: "Colors Unnamed",
    text: "Petals open for the first time.\nNo eye has ever seen them before yours.",
    choices: [
      { text: "Breathe in the fragrance", nextScene: "stars_delight", tag: "savoring" },
      { text: "Lift your gaze to the darkening sky", nextScene: "stars", tag: "dreamer" },
    ],
  },
  mountain: {
    id: "mountain",
    title: "The Summit",
    text: "From the peak, you see it all.\nAn empty world — waiting to be filled.",
    choices: [
      { text: "Stay and let the sky change", nextScene: "stars_vision", tag: "visionary" },
      { text: "Descend into the valley", nextScene: "stars", tag: "humble" },
    ],
  },
  stars: {
    id: "stars",
    title: "Sun, Moon, and Stars",
    text: "God hangs the sun like a lamp.\nA thousand stars pierce the velvet dark.",
    choices: [
      { text: "Close your eyes and listen for the sea", nextScene: "sea_creatures", tag: "attentive" },
      { text: "Try to count the stars", nextScene: "countless_stars", tag: "awed" },
      { text: "Stand in the silver moonlight", nextScene: "moonrise", tag: "contemplative" },
    ],
  },
  stars_delight: {
    id: "stars_delight",
    title: "Sun, Moon, and Stars",
    text: "Sweetness lingers on your lips.\nAbove you, the first stars ignite.",
    choices: [
      { text: "Reach toward the brightest one", nextScene: "countless_stars", tag: "awed" },
      { text: "Lie down and let the sky fill", nextScene: "moonrise", tag: "restful" },
    ],
  },
  stars_vision: {
    id: "stars_vision",
    title: "Sun, Moon, and Stars",
    text: "From the mountain, the stars feel close.\nYou could almost touch them.",
    choices: [
      { text: "Stretch your hand toward them", nextScene: "countless_stars", tag: "longing" },
      { text: "Let the moonlight guide you down", nextScene: "sea_creatures", tag: "trusting" },
    ],
  },
  countless_stars: {
    id: "countless_stars",
    title: "Uncountable",
    text: "You try to count them.\nYou cannot. They are a promise.",
    choices: [
      { text: "Carry the promise and turn toward the sea", nextScene: "sea_creatures", tag: "moved" },
      { text: "Fall asleep beneath them", nextScene: "sea_dawn", tag: "peaceful" },
    ],
  },
  moonrise: {
    id: "moonrise",
    title: "The Lesser Light",
    text: "Silver light spills over still waters.\nThe moon guards the night.",
    choices: [
      { text: "Follow a sound from the ocean", nextScene: "sea_creatures", tag: "alert" },
      { text: "Rest until dawn", nextScene: "sea_dawn", tag: "restful" },
    ],
  },
  sea_dawn: {
    id: "sea_dawn",
    title: "Dawn Over the Deep",
    text: "You wake to the sound of waves.\nThe water is alive — teeming, singing.",
    choices: [
      { text: "Run to the shore", nextScene: "sea_creatures", tag: "eager" },
      { text: "Sit and let the sound wash over you", nextScene: "bird_flight", tag: "savoring" },
    ],
  },
  sea_creatures: {
    id: "sea_creatures",
    title: "The Waters Teem",
    text: "Whales breach. Fish swarm the deep.\nBirds burst from nothing — filling the sky with song.",
    choices: [
      { text: "Feel the ground tremble with new life", nextScene: "land_creatures", tag: "eager" },
      { text: "Chase a bird into the wind", nextScene: "bird_flight", tag: "free" },
    ],
  },
  bird_flight: {
    id: "bird_flight",
    title: "First Flight",
    text: "Wings catch the wind.\nThe bird knows no fear — only sky.",
    choices: [
      { text: "Return to the solid earth", nextScene: "land_creatures", tag: "grounded" },
      { text: "Spread your arms and feel the wind", nextScene: "land_creatures_wind", tag: "free" },
    ],
  },
  land_creatures: {
    id: "land_creatures",
    title: "Every Living Thing",
    text: "Lions, deer, serpents, insects.\nThe earth breathes with life all around you.",
    choices: [
      { text: "Sense something greater approaching", nextScene: "before_man", tag: "anticipating" },
      { text: "Walk among them, unafraid", nextScene: "among_animals", tag: "connected" },
    ],
  },
  land_creatures_wind: {
    id: "land_creatures_wind",
    title: "Every Living Thing",
    text: "You land among creatures — wild, warm, alive.\nThey do not run from you.",
    choices: [
      { text: "Kneel beside them", nextScene: "among_animals", tag: "gentle" },
      { text: "Feel a longing rise inside you", nextScene: "before_man", tag: "lonely" },
    ],
  },
  among_animals: {
    id: "among_animals",
    title: "Among the Creatures",
    text: "They do not fear you.\nBut none of them is like you.",
    choices: [
      { text: "Feel the emptiness in your chest", nextScene: "before_man_lonely", tag: "lonely" },
      { text: "Trust that something more is coming", nextScene: "before_man", tag: "trusting" },
    ],
  },
  before_man: {
    id: "before_man",
    title: "The Sixth Day",
    text: "God kneels in the dust.\nHis hands begin to shape something new.",
    choices: [
      { text: "Hold your breath and lean closer", nextScene: "breath_of_life", tag: "witness" },
      { text: "Whisper: \"In our image…\"", nextScene: "breath_of_life_sacred", tag: "sacred" },
    ],
  },
  before_man_lonely: {
    id: "before_man_lonely",
    title: "The Sixth Day",
    text: "The ache inside you grows.\nThen — God kneels beside you in the dust.",
    choices: [
      { text: "Place your hand on the clay", nextScene: "breath_of_life_sacred", tag: "participant" },
      { text: "Step back and let Him work", nextScene: "breath_of_life", tag: "reverent" },
    ],
  },
  breath_of_life: {
    id: "breath_of_life",
    title: "The Breath of Life",
    text: "Dust becomes flesh. Eyes open.\nYou are alive. You are the first.",
    choices: [
      { text: "Stand and face the garden", nextScene: "first_garden", tag: "born" },
      { text: "Look at your own hands", nextScene: "first_garden_wonder", tag: "awakened" },
    ],
  },
  breath_of_life_sacred: {
    id: "breath_of_life_sacred",
    title: "The Breath of Life",
    text: "His breath enters the clay.\nYour chest rises. Your heart beats — once, twice, forever.",
    choices: [
      { text: "Open your eyes", nextScene: "first_garden_wonder", tag: "newborn" },
      { text: "Take your first step", nextScene: "first_garden", tag: "alive" },
    ],
  },
  first_garden: {
    id: "first_garden",
    title: "Eden",
    text: "Paradise stretches before you.\nGod looks at all He has made.",
    choices: [
      { text: "Listen to His final words", nextScene: "very_good", tag: "complete" },
      { text: "Sit beside the Creator", nextScene: "rest", tag: "peaceful" },
    ],
  },
  first_garden_wonder: {
    id: "first_garden_wonder",
    title: "Eden",
    text: "Your fingers tremble. Your eyes brim with tears.\nEverything — all of it — was for this moment.",
    choices: [
      { text: "Hear Him speak", nextScene: "very_good", tag: "grateful" },
      { text: "Rest in His presence", nextScene: "rest_blessed", tag: "beloved" },
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
  rest_blessed: {
    id: "rest_blessed",
    title: "The Seventh Day",
    text: "You rest beside the One who made you.\nPeace fills every corner of the world.",
    choices: [],
    isFinal: true,
  },
};
