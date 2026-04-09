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
    text: "Nothing exists yet.\nOnly you — and the deep, endless dark.",
    choices: [
      { text: "Hold still — feel the emptiness", nextScene: "silence", tag: "contemplative" },
      { text: "Reach into the darkness", nextScene: "void", tag: "aware" },
      { text: "Speak — break the silence", nextScene: "voice", tag: "faithful" },
    ],
  },
  silence: {
    id: "silence",
    title: "The Great Silence",
    text: "You wait in the stillness.\nThe emptiness aches — it needs something more.",
    choices: [
      { text: "Let the first word form", nextScene: "light", tag: "drawn" },
      { text: "Breathe over the waters", nextScene: "light_awe", tag: "awestruck" },
    ],
  },
  voice: {
    id: "voice",
    title: "The Word",
    text: "Your voice tears through the nothing.\nIt carries the weight of forever.",
    choices: [
      { text: "Command — let there be light", nextScene: "light_obey", tag: "obedient" },
      { text: "Whisper it gently into being", nextScene: "light_awe", tag: "reverent" },
    ],
  },
  void: {
    id: "void",
    title: "The Formless Deep",
    text: "Endless waters stretch beneath you.\nYou hover above the deep.",
    choices: [
      { text: "Descend toward the waters", nextScene: "light", tag: "witness" },
      { text: "Stir the surface with your breath", nextScene: "light_awe", tag: "prophetic" },
    ],
  },
  light: {
    id: "light",
    title: "Let There Be Light",
    text: "Light bursts from you — blinding, infinite.\nWarmth floods the emptiness for the first time.",
    choices: [
      { text: "Let the light expand everywhere", nextScene: "sky", tag: "wonder" },
      { text: "Shape the light — give it edges", nextScene: "warmth", tag: "grateful" },
      { text: "Separate it from the darkness", nextScene: "day_night", tag: "understanding" },
    ],
  },
  light_obey: {
    id: "light_obey",
    title: "Let There Be Light",
    text: "Your command shakes the void.\nLight explodes — infinite, blinding, alive.",
    choices: [
      { text: "Hold the light close", nextScene: "warmth", tag: "grateful" },
      { text: "Push it outward — fill everything", nextScene: "sky", tag: "wonder" },
    ],
  },
  light_awe: {
    id: "light_awe",
    title: "Let There Be Light",
    text: "Light rises gently from your breath.\nSoft at first — then blazing, unstoppable.",
    choices: [
      { text: "Shape it into something greater", nextScene: "sky", tag: "brave" },
      { text: "Divide the light from the dark", nextScene: "day_night", tag: "moved" },
    ],
  },
  warmth: {
    id: "warmth",
    title: "First Warmth",
    text: "The light settles into warmth.\nYou feel creation responding to your touch.",
    choices: [
      { text: "Stretch the sky open above", nextScene: "sky", tag: "curious" },
      { text: "Spread your hands — expand it all", nextScene: "sky_vast", tag: "amazed" },
    ],
  },
  day_night: {
    id: "day_night",
    title: "Evening and Morning",
    text: "You name the light Day and the darkness Night.\nThe first sunset. The first dawn.",
    choices: [
      { text: "Begin the second day", nextScene: "sky", tag: "patient" },
      { text: "Pause — take in what you've made", nextScene: "sky_vast", tag: "joyful" },
    ],
  },
  sky: {
    id: "sky",
    title: "The Heavens Above",
    text: "You stretch out the sky like a curtain.\nWaters part — above and below.",
    choices: [
      { text: "Command the dry land to appear", nextScene: "land", tag: "expectant" },
      { text: "Gather the waters together", nextScene: "waters_gather", tag: "peaceful" },
      { text: "Step back — admire the vastness", nextScene: "expanse", tag: "humbled" },
    ],
  },
  sky_vast: {
    id: "sky_vast",
    title: "The Vast Sky",
    text: "Blue stretches endlessly in every direction.\nYour creation grows beyond what even you imagined.",
    choices: [
      { text: "Call forth the land below", nextScene: "land", tag: "grounded" },
      { text: "Gather the seas into their places", nextScene: "waters_gather", tag: "anticipating" },
    ],
  },
  waters_gather: {
    id: "waters_gather",
    title: "The Gathering of Waters",
    text: "You push the oceans into their places.\nRivers carve paths at your command.",
    choices: [
      { text: "Raise the mountains from the deep", nextScene: "land", tag: "explorer" },
      { text: "Shape the earth with your hands", nextScene: "land_emerge", tag: "eager" },
    ],
  },
  expanse: {
    id: "expanse",
    title: "The Dome of Heaven",
    text: "The sky arches like a cathedral you built.\nEvery direction holds a promise.",
    choices: [
      { text: "Bring forth the ground below", nextScene: "land", tag: "grounded" },
      { text: "Press your hands into the earth", nextScene: "land_emerge", tag: "worshipful" },
    ],
  },
  land: {
    id: "land",
    title: "Dry Ground",
    text: "Mountains rise at your word.\nGreen erupts — sudden, wild, everywhere.",
    choices: [
      { text: "Plant a forest with a thought", nextScene: "plants", tag: "wanderer" },
      { text: "Craft the first flower by hand", nextScene: "flowers", tag: "gentle" },
      { text: "Climb to the highest peak", nextScene: "mountain", tag: "bold" },
    ],
  },
  land_emerge: {
    id: "land_emerge",
    title: "The Earth Rises",
    text: "Solid ground forms under your touch.\nYou feel the earth breathe for the first time.",
    choices: [
      { text: "Scatter seeds across the soil", nextScene: "plants", tag: "wanderer" },
      { text: "Kneel beside a growing tree", nextScene: "flowers", tag: "patient" },
    ],
  },
  plants: {
    id: "plants",
    title: "The First Garden",
    text: "Trees stretch toward the sky you made.\nFruit hangs heavy — sweet, untouched.",
    choices: [
      { text: "Taste your own creation", nextScene: "stars_delight", tag: "delighted" },
      { text: "Wait for darkness — then fill it", nextScene: "stars", tag: "patient" },
    ],
  },
  flowers: {
    id: "flowers",
    title: "Colors Unnamed",
    text: "Petals open at your touch.\nColors no eye has ever seen — until now.",
    choices: [
      { text: "Breathe in what you've made", nextScene: "stars_delight", tag: "savoring" },
      { text: "Turn your gaze upward — the sky is empty", nextScene: "stars", tag: "dreamer" },
    ],
  },
  mountain: {
    id: "mountain",
    title: "The Summit",
    text: "From the peak, you see everything you've made.\nAn empty sky — waiting to be filled.",
    choices: [
      { text: "Hang the stars yourself", nextScene: "stars_vision", tag: "visionary" },
      { text: "Descend — there is more to do", nextScene: "stars", tag: "humble" },
    ],
  },
  stars: {
    id: "stars",
    title: "Sun, Moon, and Stars",
    text: "You hang the sun like a lamp.\nA thousand stars fly from your fingertips.",
    choices: [
      { text: "Turn toward the empty sea", nextScene: "sea_creatures", tag: "attentive" },
      { text: "Place every star one by one", nextScene: "countless_stars", tag: "awed" },
      { text: "Set the moon in its place", nextScene: "moonrise", tag: "contemplative" },
    ],
  },
  stars_delight: {
    id: "stars_delight",
    title: "Sun, Moon, and Stars",
    text: "Sweetness lingers — your creation is good.\nAbove you, the sky waits for light.",
    choices: [
      { text: "Ignite the brightest star", nextScene: "countless_stars", tag: "awed" },
      { text: "Paint the night sky with silver", nextScene: "moonrise", tag: "restful" },
    ],
  },
  stars_vision: {
    id: "stars_vision",
    title: "Sun, Moon, and Stars",
    text: "From the mountaintop, you fling stars into the dark.\nEach one a promise.",
    choices: [
      { text: "Keep going — fill every corner", nextScene: "countless_stars", tag: "longing" },
      { text: "Set the moon to guard the night", nextScene: "sea_creatures", tag: "trusting" },
    ],
  },
  countless_stars: {
    id: "countless_stars",
    title: "Uncountable",
    text: "You place them beyond counting.\nEach one a covenant — a whisper of what's to come.",
    choices: [
      { text: "Turn to the empty seas", nextScene: "sea_creatures", tag: "moved" },
      { text: "Rest a moment beneath your sky", nextScene: "sea_dawn", tag: "peaceful" },
    ],
  },
  moonrise: {
    id: "moonrise",
    title: "The Lesser Light",
    text: "Silver light spills across still waters.\nThe moon takes its place — faithful, quiet.",
    choices: [
      { text: "Fill the oceans with life", nextScene: "sea_creatures", tag: "alert" },
      { text: "Wait for the dawn you designed", nextScene: "sea_dawn", tag: "restful" },
    ],
  },
  sea_dawn: {
    id: "sea_dawn",
    title: "Dawn Over the Deep",
    text: "Dawn breaks — your dawn.\nThe waters stir, ready to receive life.",
    choices: [
      { text: "Speak life into the deep", nextScene: "sea_creatures", tag: "eager" },
      { text: "Listen to the silence before it fills", nextScene: "bird_flight", tag: "savoring" },
    ],
  },
  sea_creatures: {
    id: "sea_creatures",
    title: "The Waters Teem",
    text: "You fill the seas — whales, fish, swarms of life.\nBirds burst from your hands — filling the sky with song.",
    choices: [
      { text: "Turn to the land — it's still empty", nextScene: "land_creatures", tag: "eager" },
      { text: "Send a bird soaring across the sky", nextScene: "bird_flight", tag: "free" },
    ],
  },
  bird_flight: {
    id: "bird_flight",
    title: "First Flight",
    text: "Wings catch the wind you made.\nThe bird knows no fear — only sky.",
    choices: [
      { text: "Return to the ground — fill it next", nextScene: "land_creatures", tag: "grounded" },
      { text: "Feel the wind on your face", nextScene: "land_creatures_wind", tag: "free" },
    ],
  },
  land_creatures: {
    id: "land_creatures",
    title: "Every Living Thing",
    text: "You speak — lions, deer, serpents, insects appear.\nThe earth breathes with life you gave it.",
    choices: [
      { text: "Something is still missing — press on", nextScene: "before_man", tag: "anticipating" },
      { text: "Walk among them — your creatures", nextScene: "among_animals", tag: "connected" },
    ],
  },
  land_creatures_wind: {
    id: "land_creatures_wind",
    title: "Every Living Thing",
    text: "You stand among creatures — wild, warm, alive.\nThey do not run. They know your voice.",
    choices: [
      { text: "Sit among them quietly", nextScene: "among_animals", tag: "gentle" },
      { text: "Something greater stirs inside you", nextScene: "before_man", tag: "lonely" },
    ],
  },
  among_animals: {
    id: "among_animals",
    title: "Among the Creatures",
    text: "They gather around you — trusting, alive.\nBut none of them can know you. Not truly.",
    choices: [
      { text: "Feel the ache of being alone", nextScene: "before_man_lonely", tag: "lonely" },
      { text: "Begin the final work", nextScene: "before_man", tag: "trusting" },
    ],
  },
  before_man: {
    id: "before_man",
    title: "The Sixth Day",
    text: "You kneel in the dust.\nYour hands begin to shape something new — something like you.",
    choices: [
      { text: "Mold the clay carefully", nextScene: "breath_of_life", tag: "witness" },
      { text: "Whisper: \"In our image…\"", nextScene: "breath_of_life_sacred", tag: "sacred" },
    ],
  },
  before_man_lonely: {
    id: "before_man_lonely",
    title: "The Sixth Day",
    text: "The ache deepens — you want to be known.\nYou kneel in the dust and begin.",
    choices: [
      { text: "Shape the clay with trembling hands", nextScene: "breath_of_life_sacred", tag: "participant" },
      { text: "Take your time — this matters most", nextScene: "breath_of_life", tag: "reverent" },
    ],
  },
  breath_of_life: {
    id: "breath_of_life",
    title: "The Breath of Life",
    text: "Dust becomes flesh under your hands.\nYou lean close — and breathe life into him.",
    choices: [
      { text: "Watch his eyes open", nextScene: "first_garden", tag: "born" },
      { text: "Place him gently in the garden", nextScene: "first_garden_wonder", tag: "awakened" },
    ],
  },
  breath_of_life_sacred: {
    id: "breath_of_life_sacred",
    title: "The Breath of Life",
    text: "Your breath enters the clay.\nHis chest rises. His heart beats — once, twice, forever.",
    choices: [
      { text: "Set him down in paradise", nextScene: "first_garden_wonder", tag: "newborn" },
      { text: "Stand back — let him see the world", nextScene: "first_garden", tag: "alive" },
    ],
  },
  first_garden: {
    id: "first_garden",
    title: "Eden",
    text: "Paradise stretches before you — your masterpiece.\nYou look at all you have made.",
    choices: [
      { text: "Say it — the words that complete it all", nextScene: "very_good", tag: "complete" },
      { text: "Sit beside your creation in silence", nextScene: "rest", tag: "peaceful" },
    ],
  },
  first_garden_wonder: {
    id: "first_garden_wonder",
    title: "Eden",
    text: "He stands in the garden — alive, breathing, yours.\nEverything — all of it — was for this moment.",
    choices: [
      { text: "Speak the final words", nextScene: "very_good", tag: "grateful" },
      { text: "Rest — your work is finished", nextScene: "rest_blessed", tag: "beloved" },
    ],
  },
  very_good: {
    id: "very_good",
    title: "Very Good",
    text: "\"It is very good.\"\nYou smile upon your work.",
    choices: [
      { text: "Rest — you have finished", nextScene: "rest", tag: "blessed" },
    ],
  },
  rest: {
    id: "rest",
    title: "The Seventh Day",
    text: "You rest. All creation breathes.\nThe story has only just begun.",
    choices: [],
    isFinal: true,
  },
  rest_blessed: {
    id: "rest_blessed",
    title: "The Seventh Day",
    text: "You rest beside the one you made.\nPeace fills every corner of your world.",
    choices: [],
    isFinal: true,
  },
};
