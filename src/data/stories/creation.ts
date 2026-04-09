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
      { text: "Hold still — don't move", nextScene: "silence", tag: "contemplative" },
      { text: "Reach into the darkness", nextScene: "void", tag: "aware" },
      { text: "Focus on a faint sound", nextScene: "voice", tag: "faithful" },
    ],
  },
  silence: {
    id: "silence",
    title: "The Great Silence",
    text: "You hold your breath.\nAn eternity passes — then something stirs.",
    choices: [
      { text: "Move toward it", nextScene: "light", tag: "drawn" },
      { text: "Stay still — let it come to you", nextScene: "light_awe", tag: "awestruck" },
    ],
  },
  voice: {
    id: "voice",
    title: "The Word",
    text: "A voice tears through the nothing.\nIt carries the weight of forever.",
    choices: [
      { text: "Join the voice — speak the words", nextScene: "light_obey", tag: "obedient" },
      { text: "Drop to your knees in fear", nextScene: "light_awe", tag: "reverent" },
    ],
  },
  void: {
    id: "void",
    title: "The Formless Deep",
    text: "Endless waters surround you.\nSomething moves… above the deep.",
    choices: [
      { text: "Swim toward the presence", nextScene: "light", tag: "witness" },
      { text: "Float still — surrender to the deep", nextScene: "light_awe", tag: "prophetic" },
    ],
  },
  light: {
    id: "light",
    title: "Let There Be Light",
    text: "Light bursts into the darkness.\nWarmth touches you for the first time.",
    choices: [
      { text: "Walk into the light", nextScene: "sky", tag: "wonder" },
      { text: "Cover your eyes — it's too bright", nextScene: "warmth", tag: "grateful" },
      { text: "Turn back toward the darkness", nextScene: "day_night", tag: "understanding" },
    ],
  },
  light_obey: {
    id: "light_obey",
    title: "Let There Be Light",
    text: "Your words merge with His.\nLight explodes — infinite, blinding, alive.",
    choices: [
      { text: "Let the warmth embrace you", nextScene: "warmth", tag: "grateful" },
      { text: "Force your eyes open", nextScene: "sky", tag: "wonder" },
    ],
  },
  light_awe: {
    id: "light_awe",
    title: "Let There Be Light",
    text: "Light crashes over you like a wave.\nYou tremble — but it is beautiful.",
    choices: [
      { text: "Stand up and face it", nextScene: "sky", tag: "brave" },
      { text: "Stay down — let yourself cry", nextScene: "day_night", tag: "moved" },
    ],
  },
  warmth: {
    id: "warmth",
    title: "First Warmth",
    text: "Light wraps around you.\nWhere there was cold — now there is life.",
    choices: [
      { text: "Look up — what's above?", nextScene: "sky", tag: "curious" },
      { text: "Spread your arms and take it all in", nextScene: "sky_vast", tag: "amazed" },
    ],
  },
  day_night: {
    id: "day_night",
    title: "Evening and Morning",
    text: "Color bleeds across the sky.\nThe first sunset. The first dawn.",
    choices: [
      { text: "Step forward into the new day", nextScene: "sky", tag: "patient" },
      { text: "Close your eyes — feel the rhythm", nextScene: "sky_vast", tag: "joyful" },
    ],
  },
  sky: {
    id: "sky",
    title: "The Heavens Above",
    text: "The sky stretches open above you.\nWaters part — above and below.",
    choices: [
      { text: "Search for solid ground", nextScene: "land", tag: "expectant" },
      { text: "Kneel beside the rushing water", nextScene: "waters_gather", tag: "peaceful" },
      { text: "Stay still — take in the vastness", nextScene: "expanse", tag: "humbled" },
    ],
  },
  sky_vast: {
    id: "sky_vast",
    title: "The Vast Sky",
    text: "Blue stretches endlessly above.\nYou feel impossibly small — and impossibly held.",
    choices: [
      { text: "Look down — find the earth", nextScene: "land", tag: "grounded" },
      { text: "Wait — something else is coming", nextScene: "waters_gather", tag: "anticipating" },
    ],
  },
  waters_gather: {
    id: "waters_gather",
    title: "The Gathering of Waters",
    text: "Oceans rush to their places.\nRivers carve paths through the young earth.",
    choices: [
      { text: "Follow the river downstream", nextScene: "land", tag: "explorer" },
      { text: "Dig your hands into the mud", nextScene: "land_emerge", tag: "eager" },
    ],
  },
  expanse: {
    id: "expanse",
    title: "The Dome of Heaven",
    text: "The sky arches like a cathedral.\nEvery direction holds a promise.",
    choices: [
      { text: "Drop to the ground and feel it", nextScene: "land", tag: "grounded" },
      { text: "Lift your hands toward the sky", nextScene: "land_emerge", tag: "worshipful" },
    ],
  },
  land: {
    id: "land",
    title: "Dry Ground",
    text: "Mountains rise from the sea.\nGreen erupts — sudden, wild, everywhere.",
    choices: [
      { text: "Walk into the forest", nextScene: "plants", tag: "wanderer" },
      { text: "Pick up a flower — the first one", nextScene: "flowers", tag: "gentle" },
      { text: "Climb to the top of the mountain", nextScene: "mountain", tag: "bold" },
    ],
  },
  land_emerge: {
    id: "land_emerge",
    title: "The Earth Rises",
    text: "Solid ground forms under your feet.\nYou feel the earth breathe for the first time.",
    choices: [
      { text: "Keep going — explore deeper", nextScene: "plants", tag: "wanderer" },
      { text: "Sit down beside a growing tree", nextScene: "flowers", tag: "patient" },
    ],
  },
  plants: {
    id: "plants",
    title: "The First Garden",
    text: "Trees stretch toward heaven.\nFruit hangs heavy — sweet, untouched.",
    choices: [
      { text: "Take a bite of the fruit", nextScene: "stars_delight", tag: "delighted" },
      { text: "Lie down and wait for night", nextScene: "stars", tag: "patient" },
    ],
  },
  flowers: {
    id: "flowers",
    title: "Colors Unnamed",
    text: "Petals open for the first time.\nNo eye has ever seen them before yours.",
    choices: [
      { text: "Bring it to your face — breathe it in", nextScene: "stars_delight", tag: "savoring" },
      { text: "Look up — the sky is darkening", nextScene: "stars", tag: "dreamer" },
    ],
  },
  mountain: {
    id: "mountain",
    title: "The Summit",
    text: "From the peak, you see it all.\nAn empty world — waiting to be filled.",
    choices: [
      { text: "Stay on the summit — wait for night", nextScene: "stars_vision", tag: "visionary" },
      { text: "Climb back down", nextScene: "stars", tag: "humble" },
    ],
  },
  stars: {
    id: "stars",
    title: "Sun, Moon, and Stars",
    text: "God hangs the sun like a lamp.\nA thousand stars pierce the velvet dark.",
    choices: [
      { text: "Turn toward the sound of the sea", nextScene: "sea_creatures", tag: "attentive" },
      { text: "Try to count every star", nextScene: "countless_stars", tag: "awed" },
      { text: "Step into the moonlight", nextScene: "moonrise", tag: "contemplative" },
    ],
  },
  stars_delight: {
    id: "stars_delight",
    title: "Sun, Moon, and Stars",
    text: "Sweetness lingers on your lips.\nAbove you, the first stars ignite.",
    choices: [
      { text: "Reach for the brightest star", nextScene: "countless_stars", tag: "awed" },
      { text: "Lie back — let the sky fill above you", nextScene: "moonrise", tag: "restful" },
    ],
  },
  stars_vision: {
    id: "stars_vision",
    title: "Sun, Moon, and Stars",
    text: "From the mountain, the stars feel close.\nYou could almost touch them.",
    choices: [
      { text: "Reach out and try to touch one", nextScene: "countless_stars", tag: "longing" },
      { text: "Follow the moonlight downward", nextScene: "sea_creatures", tag: "trusting" },
    ],
  },
  countless_stars: {
    id: "countless_stars",
    title: "Uncountable",
    text: "You try to count them.\nYou cannot. They are a promise.",
    choices: [
      { text: "Head toward the sea", nextScene: "sea_creatures", tag: "moved" },
      { text: "Close your eyes — fall asleep here", nextScene: "sea_dawn", tag: "peaceful" },
    ],
  },
  moonrise: {
    id: "moonrise",
    title: "The Lesser Light",
    text: "Silver light spills over still waters.\nThe moon guards the night.",
    choices: [
      { text: "Go toward the ocean sound", nextScene: "sea_creatures", tag: "alert" },
      { text: "Stay here — rest until dawn", nextScene: "sea_dawn", tag: "restful" },
    ],
  },
  sea_dawn: {
    id: "sea_dawn",
    title: "Dawn Over the Deep",
    text: "You wake to the sound of waves.\nThe water is alive — teeming, singing.",
    choices: [
      { text: "Run to the water's edge", nextScene: "sea_creatures", tag: "eager" },
      { text: "Stay back — just listen", nextScene: "bird_flight", tag: "savoring" },
    ],
  },
  sea_creatures: {
    id: "sea_creatures",
    title: "The Waters Teem",
    text: "Whales breach. Fish swarm the deep.\nBirds burst from nothing — filling the sky with song.",
    choices: [
      { text: "Turn inland — something stirs on land", nextScene: "land_creatures", tag: "eager" },
      { text: "Chase a bird across the sky", nextScene: "bird_flight", tag: "free" },
    ],
  },
  bird_flight: {
    id: "bird_flight",
    title: "First Flight",
    text: "Wings catch the wind.\nThe bird knows no fear — only sky.",
    choices: [
      { text: "Go back down to solid ground", nextScene: "land_creatures", tag: "grounded" },
      { text: "Spread your arms — feel the wind", nextScene: "land_creatures_wind", tag: "free" },
    ],
  },
  land_creatures: {
    id: "land_creatures",
    title: "Every Living Thing",
    text: "Lions, deer, serpents, insects.\nThe earth breathes with life all around you.",
    choices: [
      { text: "Something bigger is coming — move on", nextScene: "before_man", tag: "anticipating" },
      { text: "Walk among them without fear", nextScene: "among_animals", tag: "connected" },
    ],
  },
  land_creatures_wind: {
    id: "land_creatures_wind",
    title: "Every Living Thing",
    text: "You land among creatures — wild, warm, alive.\nThey do not run from you.",
    choices: [
      { text: "Sit beside them quietly", nextScene: "among_animals", tag: "gentle" },
      { text: "Walk away — you want something more", nextScene: "before_man", tag: "lonely" },
    ],
  },
  among_animals: {
    id: "among_animals",
    title: "Among the Creatures",
    text: "They do not fear you.\nBut none of them is like you.",
    choices: [
      { text: "Sit alone with the emptiness", nextScene: "before_man_lonely", tag: "lonely" },
      { text: "Keep waiting — trust what's coming", nextScene: "before_man", tag: "trusting" },
    ],
  },
  before_man: {
    id: "before_man",
    title: "The Sixth Day",
    text: "God kneels in the dust.\nHis hands begin to shape something new.",
    choices: [
      { text: "Step closer and watch Him work", nextScene: "breath_of_life", tag: "witness" },
      { text: "Whisper the words: \"In our image…\"", nextScene: "breath_of_life_sacred", tag: "sacred" },
    ],
  },
  before_man_lonely: {
    id: "before_man_lonely",
    title: "The Sixth Day",
    text: "The ache inside you grows.\nThen — God kneels beside you in the dust.",
    choices: [
      { text: "Touch the clay beside Him", nextScene: "breath_of_life_sacred", tag: "participant" },
      { text: "Step back — this is His moment", nextScene: "breath_of_life", tag: "reverent" },
    ],
  },
  breath_of_life: {
    id: "breath_of_life",
    title: "The Breath of Life",
    text: "Dust becomes flesh. Eyes open.\nYou are alive. You are the first.",
    choices: [
      { text: "Stand up — face what lies ahead", nextScene: "first_garden", tag: "born" },
      { text: "Look at your hands — you're real", nextScene: "first_garden_wonder", tag: "awakened" },
    ],
  },
  breath_of_life_sacred: {
    id: "breath_of_life_sacred",
    title: "The Breath of Life",
    text: "His breath enters the clay.\nYour chest rises. Your heart beats — once, twice, forever.",
    choices: [
      { text: "Open your eyes — see the world", nextScene: "first_garden_wonder", tag: "newborn" },
      { text: "Take your first step forward", nextScene: "first_garden", tag: "alive" },
    ],
  },
  first_garden: {
    id: "first_garden",
    title: "Eden",
    text: "Paradise stretches before you.\nGod looks at all He has made.",
    choices: [
      { text: "Wait — He's about to speak", nextScene: "very_good", tag: "complete" },
      { text: "Sit beside Him in silence", nextScene: "rest", tag: "peaceful" },
    ],
  },
  first_garden_wonder: {
    id: "first_garden_wonder",
    title: "Eden",
    text: "Your fingers tremble. Your eyes brim with tears.\nEverything — all of it — was for this moment.",
    choices: [
      { text: "Wait for Him to speak", nextScene: "very_good", tag: "grateful" },
      { text: "Close your eyes — rest beside Him", nextScene: "rest_blessed", tag: "beloved" },
    ],
  },
  very_good: {
    id: "very_good",
    title: "Very Good",
    text: "\"It is very good.\"\nThe Creator smiles upon His work.",
    choices: [
      { text: "Close your eyes — enter the rest", nextScene: "rest", tag: "blessed" },
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
