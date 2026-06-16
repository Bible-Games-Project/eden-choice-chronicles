export type ChoiceSentiment = "positive" | "negative";

export interface StoryChoice {
  text: string;
  nextScene: string;
  tag?: string;
  feedback?: string;
  isCorrect: boolean;
  sentiment?: ChoiceSentiment;
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
      { text: "Hold still — feel the emptiness", nextScene: "silence", tag: "contemplative", feedback: "You wait. The darkness presses closer — patient, heavy.", isCorrect: false, sentiment: "negative" },
      { text: "Reach into the darkness", nextScene: "void", tag: "aware", feedback: "Your hand stretches forward. Something stirs beneath the surface.", isCorrect: true, sentiment: "positive" },
      { text: "Speak — break the silence", nextScene: "voice", tag: "faithful", feedback: "A sound rises from deep within you — the first sound ever made.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silence: {
    id: "silence",
    title: "The Great Silence",
    text: "You wait in the stillness.\nThe emptiness aches — it needs something more.",
    choices: [
      { text: "Let the first word form", nextScene: "light", tag: "drawn", feedback: "The word gathers inside you — heavy with purpose.", isCorrect: true, sentiment: "positive" },
      { text: "Breathe over the waters", nextScene: "light_awe", tag: "awestruck", feedback: "Your breath ripples across the deep. Something awakens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  voice: {
    id: "voice",
    title: "The Word",
    text: "Your voice tears through the nothing.\nIt carries the weight of forever.",
    choices: [
      { text: "Command — let there be light", nextScene: "light_obey", tag: "obedient", feedback: "The command explodes from you. There is no turning back.", isCorrect: true, sentiment: "positive" },
      { text: "Whisper it gently into being", nextScene: "light_awe", tag: "reverent", feedback: "The whisper leaves your lips — soft, yet unstoppable.", isCorrect: false, sentiment: "negative" },
    ],
  },
  void: {
    id: "void",
    title: "The Formless Deep",
    text: "Endless waters stretch beneath you.\nYou hover above the deep.",
    choices: [
      { text: "Descend toward the waters", nextScene: "light", tag: "witness", feedback: "You lower yourself. The water trembles at your presence.", isCorrect: true, sentiment: "positive" },
      { text: "Stir the surface with your breath", nextScene: "light_awe", tag: "prophetic", feedback: "Your breath moves across the face of the deep.", isCorrect: false, sentiment: "negative" },
    ],
  },
  light: {
    id: "light",
    title: "Let There Be Light",
    text: "Light bursts from you — blinding, infinite.\nWarmth floods the emptiness for the first time.",
    choices: [
      { text: "Let the light expand everywhere", nextScene: "sky", tag: "wonder", feedback: "The light races outward — filling every void.", isCorrect: true, sentiment: "positive" },
      { text: "Shape the light — give it edges", nextScene: "warmth", tag: "grateful", feedback: "You cup the light in your hands. It pulses, alive.", isCorrect: false, sentiment: "negative" },
      { text: "Separate it from the darkness", nextScene: "day_night", tag: "understanding", feedback: "You draw a line between light and dark. Order begins.", isCorrect: true, sentiment: "positive" },
    ],
  },
  light_obey: {
    id: "light_obey",
    title: "Let There Be Light",
    text: "Your command shakes the void.\nLight explodes — infinite, blinding, alive.",
    choices: [
      { text: "Hold the light close", nextScene: "warmth", tag: "grateful", feedback: "Warmth gathers around you — golden, tender.", isCorrect: false, sentiment: "negative" },
      { text: "Push it outward — fill everything", nextScene: "sky", tag: "wonder", feedback: "The light obeys. It floods the emptiness without end.", isCorrect: true, sentiment: "positive" },
    ],
  },
  light_awe: {
    id: "light_awe",
    title: "Let There Be Light",
    text: "Light rises gently from your breath.\nSoft at first — then blazing, unstoppable.",
    choices: [
      { text: "Shape it into something greater", nextScene: "sky", tag: "brave", feedback: "You press the light upward — it stretches into sky.", isCorrect: true, sentiment: "positive" },
      { text: "Divide the light from the dark", nextScene: "day_night", tag: "moved", feedback: "Shadow and radiance separate at your touch.", isCorrect: true, sentiment: "positive" },
    ],
  },
  warmth: {
    id: "warmth",
    title: "First Warmth",
    text: "The light settles into warmth.\nYou feel creation responding to your touch.",
    choices: [
      { text: "Stretch the sky open above", nextScene: "sky", tag: "curious", feedback: "You reach upward. The sky begins to unfold.", isCorrect: true, sentiment: "positive" },
      { text: "Spread your hands — expand it all", nextScene: "sky_vast", tag: "amazed", feedback: "Everything stretches — wider, higher, limitless.", isCorrect: true, sentiment: "positive" },
    ],
  },
  day_night: {
    id: "day_night",
    title: "Evening and Morning",
    text: "You name the light Day and the darkness Night.\nThe first sunset. The first dawn.",
    choices: [
      { text: "Begin the second day", nextScene: "sky", tag: "patient", feedback: "You move forward. There is more to create.", isCorrect: true, sentiment: "positive" },
      { text: "Pause — linger in what you've made", nextScene: "sky_vast", tag: "joyful", feedback: "You stop. The colors are yours — and they are beautiful.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sky: {
    id: "sky",
    title: "The Heavens Above",
    text: "You stretch out the sky like a curtain.\nWaters part — above and below.",
    choices: [
      { text: "Command the dry land to appear", nextScene: "land", tag: "expectant", feedback: "Your voice strikes the deep. The earth begins to rise.", isCorrect: true, sentiment: "positive" },
      { text: "Gather the waters together", nextScene: "waters_gather", tag: "peaceful", feedback: "The waters obey — drawing inward, making room.", isCorrect: true, sentiment: "positive" },
      { text: "Step back — admire the vastness", nextScene: "expanse", tag: "humbled", feedback: "You pause. The sky stretches further than you imagined.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sky_vast: {
    id: "sky_vast",
    title: "The Vast Sky",
    text: "Blue stretches endlessly in every direction.\nYour creation grows beyond what even you imagined.",
    choices: [
      { text: "Call forth the land below", nextScene: "land", tag: "grounded", feedback: "You speak downward. The ground trembles in answer.", isCorrect: true, sentiment: "positive" },
      { text: "Gather the seas into their places", nextScene: "waters_gather", tag: "anticipating", feedback: "The waters rush to their boundaries — eager, wild.", isCorrect: true, sentiment: "positive" },
    ],
  },
  waters_gather: {
    id: "waters_gather",
    title: "The Gathering of Waters",
    text: "You push the oceans into their places.\nRivers carve paths at your command.",
    choices: [
      { text: "Raise the mountains from the deep", nextScene: "land", tag: "explorer", feedback: "Stone groans upward. The peaks reach toward you.", isCorrect: true, sentiment: "positive" },
      { text: "Shape the earth with your hands", nextScene: "land_emerge", tag: "eager", feedback: "You kneel. The soil is warm beneath your fingers.", isCorrect: false, sentiment: "negative" },
    ],
  },
  expanse: {
    id: "expanse",
    title: "The Dome of Heaven",
    text: "The sky arches like a cathedral you built.\nEvery direction holds a promise.",
    choices: [
      { text: "Bring forth the ground below", nextScene: "land", tag: "grounded", feedback: "You look down. The earth rises to meet your gaze.", isCorrect: true, sentiment: "positive" },
      { text: "Press your hands into the earth", nextScene: "land_emerge", tag: "worshipful", feedback: "Your palms sink into the clay. It yields to you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  land: {
    id: "land",
    title: "Dry Ground",
    text: "Mountains rise at your word.\nGreen erupts — sudden, wild, everywhere.",
    choices: [
      { text: "Plant a forest with a thought", nextScene: "plants", tag: "wanderer", feedback: "Trees spring up — tall, ancient, reaching for your sky.", isCorrect: true, sentiment: "positive" },
      { text: "Craft the first flower by hand", nextScene: "flowers", tag: "gentle", feedback: "A single bloom opens in your palm. Perfect.", isCorrect: false, sentiment: "negative" },
      { text: "Climb to the highest peak", nextScene: "mountain", tag: "bold", feedback: "You ascend. The world unfolds beneath you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  land_emerge: {
    id: "land_emerge",
    title: "The Earth Rises",
    text: "Solid ground forms under your touch.\nYou feel the earth breathe for the first time.",
    choices: [
      { text: "Scatter seeds across the soil", nextScene: "plants", tag: "wanderer", feedback: "Seeds fall from your hands like rain. Life begins.", isCorrect: true, sentiment: "positive" },
      { text: "Kneel beside a growing tree", nextScene: "flowers", tag: "patient", feedback: "You watch it grow — slowly, tenderly, from nothing.", isCorrect: false, sentiment: "negative" },
    ],
  },
  plants: {
    id: "plants",
    title: "The First Garden",
    text: "Trees stretch toward the sky you made.\nFruit hangs heavy — sweet, untouched.",
    choices: [
      { text: "Taste your own creation", nextScene: "stars_delight", tag: "delighted", feedback: "Sweetness fills you — your own gift, tasted for the first time.", isCorrect: true, sentiment: "positive" },
      { text: "Wait for darkness — then fill it", nextScene: "stars", tag: "patient", feedback: "You wait. The empty sky calls to you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  flowers: {
    id: "flowers",
    title: "Colors Unnamed",
    text: "Petals open at your touch.\nColors no eye has ever seen — until now.",
    choices: [
      { text: "Breathe in what you've made", nextScene: "stars_delight", tag: "savoring", feedback: "The scent is unlike anything. Because nothing existed before.", isCorrect: true, sentiment: "positive" },
      { text: "Turn your gaze upward — the sky is empty", nextScene: "stars", tag: "dreamer", feedback: "The dark sky waits — a canvas, unfinished.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mountain: {
    id: "mountain",
    title: "The Summit",
    text: "From the peak, you see everything you've made.\nAn empty sky — waiting to be filled.",
    choices: [
      { text: "Hang the stars yourself", nextScene: "stars_vision", tag: "visionary", feedback: "You reach up. The first star burns in your hand.", isCorrect: true, sentiment: "positive" },
      { text: "Descend — there is more to do", nextScene: "stars", tag: "humble", feedback: "You climb down. The work is not yet finished.", isCorrect: false, sentiment: "negative" },
    ],
  },
  stars: {
    id: "stars",
    title: "Sun, Moon, and Stars",
    text: "You hang the sun like a lamp.\nA thousand stars fly from your fingertips.",
    choices: [
      { text: "Turn toward the empty sea", nextScene: "sea_creatures", tag: "attentive", feedback: "The ocean stretches before you — vast, silent, waiting.", isCorrect: false, sentiment: "negative" },
      { text: "Place every star one by one", nextScene: "countless_stars", tag: "awed", feedback: "Each star finds its place. You name them all.", isCorrect: true, sentiment: "positive" },
      { text: "Set the moon in its place", nextScene: "moonrise", tag: "contemplative", feedback: "Silver rises. The night breathes softly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stars_delight: {
    id: "stars_delight",
    title: "Sun, Moon, and Stars",
    text: "Sweetness lingers — your creation is good.\nAbove you, the sky waits for light.",
    choices: [
      { text: "Ignite the brightest star", nextScene: "countless_stars", tag: "awed", feedback: "Fire leaps from your fingers. The sky blazes.", isCorrect: true, sentiment: "positive" },
      { text: "Paint the night sky with silver", nextScene: "moonrise", tag: "restful", feedback: "Moonlight pours down — gentle, steady, yours.", isCorrect: false, sentiment: "negative" },
    ],
  },
  stars_vision: {
    id: "stars_vision",
    title: "Sun, Moon, and Stars",
    text: "From the mountaintop, you fling stars into the dark.\nEach one a promise.",
    choices: [
      { text: "Keep going — fill every corner", nextScene: "countless_stars", tag: "longing", feedback: "More. More. The darkness shrinks with every throw.", isCorrect: true, sentiment: "positive" },
      { text: "Set the moon to guard the night", nextScene: "sea_creatures", tag: "trusting", feedback: "The moon rises — faithful, watching over what you made.", isCorrect: false, sentiment: "negative" },
    ],
  },
  countless_stars: {
    id: "countless_stars",
    title: "Uncountable",
    text: "You place them beyond counting.\nEach one a covenant — a whisper of what's to come.",
    choices: [
      { text: "Turn to the empty seas", nextScene: "sea_creatures", tag: "moved", feedback: "Below, the waters are still. They need life.", isCorrect: true, sentiment: "positive" },
      { text: "Rest a moment beneath your sky", nextScene: "sea_dawn", tag: "peaceful", feedback: "You lie back. Your stars shine above you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  moonrise: {
    id: "moonrise",
    title: "The Lesser Light",
    text: "Silver light spills across still waters.\nThe moon takes its place — faithful, quiet.",
    choices: [
      { text: "Fill the oceans with life", nextScene: "sea_creatures", tag: "alert", feedback: "You turn to the deep. It's time to fill it.", isCorrect: true, sentiment: "positive" },
      { text: "Wait for the dawn you designed", nextScene: "sea_dawn", tag: "restful", feedback: "You wait. The horizon glows with approaching light.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sea_dawn: {
    id: "sea_dawn",
    title: "Dawn Over the Deep",
    text: "Dawn breaks — your dawn.\nThe waters stir, ready to receive life.",
    choices: [
      { text: "Speak life into the deep", nextScene: "sea_creatures", tag: "eager", feedback: "Your voice enters the water. Movement begins.", isCorrect: true, sentiment: "positive" },
      { text: "Listen to the silence before it fills", nextScene: "bird_flight", tag: "savoring", feedback: "One last breath of stillness. Then — everything.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sea_creatures: {
    id: "sea_creatures",
    title: "The Waters Teem",
    text: "You fill the seas — whales, fish, swarms of life.\nBirds burst from your hands — filling the sky with song.",
    choices: [
      { text: "Turn to the land — it's still empty", nextScene: "land_creatures", tag: "eager", feedback: "The ground waits. You have more to give.", isCorrect: true, sentiment: "positive" },
      { text: "Send a bird soaring across the sky", nextScene: "bird_flight", tag: "free", feedback: "Wings spread. The bird trusts the wind you made.", isCorrect: false, sentiment: "negative" },
    ],
  },
  bird_flight: {
    id: "bird_flight",
    title: "First Flight",
    text: "Wings catch the wind you made.\nThe bird knows no fear — only sky.",
    choices: [
      { text: "Return to the ground — fill it next", nextScene: "land_creatures", tag: "grounded", feedback: "You descend. The earth needs creatures of its own.", isCorrect: true, sentiment: "positive" },
      { text: "Feel the wind on your face", nextScene: "land_creatures_wind", tag: "free", feedback: "The breeze you made touches your skin. It's good.", isCorrect: false, sentiment: "negative" },
    ],
  },
  land_creatures: {
    id: "land_creatures",
    title: "Every Living Thing",
    text: "You speak — lions, deer, serpents, insects appear.\nThe earth breathes with life you gave it.",
    choices: [
      { text: "Something is still missing — press on", nextScene: "before_man", tag: "anticipating", feedback: "A restlessness stirs in you. This isn't finished.", isCorrect: true, sentiment: "positive" },
      { text: "Walk among them — your creatures", nextScene: "among_animals", tag: "connected", feedback: "They gather around you — warm, trusting, alive.", isCorrect: false, sentiment: "negative" },
    ],
  },
  land_creatures_wind: {
    id: "land_creatures_wind",
    title: "Every Living Thing",
    text: "You stand among creatures — wild, warm, alive.\nThey do not run. They know your voice.",
    choices: [
      { text: "Sit among them quietly", nextScene: "among_animals", tag: "gentle", feedback: "You sit. They press close — unafraid.", isCorrect: false, sentiment: "negative" },
      { text: "Something greater stirs inside you", nextScene: "before_man", tag: "lonely", feedback: "The ache rises. None of them can truly know you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  among_animals: {
    id: "among_animals",
    title: "Among the Creatures",
    text: "They gather around you — trusting, alive.\nBut none of them can know you. Not truly.",
    choices: [
      { text: "Feel the ache of being alone", nextScene: "before_man_lonely", tag: "lonely", feedback: "The loneliness deepens. You need someone who understands.", isCorrect: false, sentiment: "negative" },
      { text: "Begin the final work", nextScene: "before_man", tag: "trusting", feedback: "You stand. Your hands know what to do.", isCorrect: true, sentiment: "positive" },
    ],
  },
  before_man: {
    id: "before_man",
    title: "The Sixth Day",
    text: "You kneel in the dust.\nYour hands begin to shape something new — something like you.",
    choices: [
      { text: "Mold the clay carefully", nextScene: "breath_of_life", tag: "witness", feedback: "Your fingers press into the dust. A form takes shape.", isCorrect: true, sentiment: "negative" },
      { text: "Whisper: \"In our image…\"", nextScene: "breath_of_life_sacred", tag: "sacred", feedback: "The words leave your lips. The clay trembles.", isCorrect: true, sentiment: "positive" },
    ],
  },
  before_man_lonely: {
    id: "before_man_lonely",
    title: "The Sixth Day",
    text: "The ache deepens — you want to be known.\nYou kneel in the dust and begin.",
    choices: [
      { text: "Shape the clay with trembling hands", nextScene: "breath_of_life_sacred", tag: "participant", feedback: "Your hands shake. This one will be different.", isCorrect: true, sentiment: "positive" },
      { text: "Take your time — this matters most", nextScene: "breath_of_life", tag: "reverent", feedback: "You slow down. Every detail matters.", isCorrect: false, sentiment: "negative" },
    ],
  },
  breath_of_life: {
    id: "breath_of_life",
    title: "The Breath of Life",
    text: "Dust becomes flesh under your hands.\nYou lean close — and breathe life into him.",
    choices: [
      { text: "Watch his eyes open", nextScene: "first_garden", tag: "born", feedback: "His eyes open. He sees you first.", isCorrect: true, sentiment: "positive" },
      { text: "Place him gently in the garden", nextScene: "first_garden_wonder", tag: "awakened", feedback: "You carry him — warm, breathing — into paradise.", isCorrect: true, sentiment: "positive" },
    ],
  },
  breath_of_life_sacred: {
    id: "breath_of_life_sacred",
    title: "The Breath of Life",
    text: "Your breath enters the clay.\nHis chest rises. His heart beats — once, twice, forever.",
    choices: [
      { text: "Set him down in paradise", nextScene: "first_garden_wonder", tag: "newborn", feedback: "You lay him gently on the grass. He stirs.", isCorrect: true, sentiment: "positive" },
      { text: "Stand back — let him see the world", nextScene: "first_garden", tag: "alive", feedback: "You step away. His eyes open to everything you made.", isCorrect: true, sentiment: "positive" },
    ],
  },
  first_garden: {
    id: "first_garden",
    title: "Eden",
    text: "Paradise stretches before you — your masterpiece.\nYou look at all you have made.",
    choices: [
      { text: "Say it — the words that complete it all", nextScene: "very_good", tag: "complete", feedback: "The words rise in you — final, certain.", isCorrect: true, sentiment: "positive" },
      { text: "Sit beside your creation in silence", nextScene: "rest", tag: "peaceful", feedback: "You sit. No words needed. It is enough.", isCorrect: false, sentiment: "negative" },
    ],
  },
  first_garden_wonder: {
    id: "first_garden_wonder",
    title: "Eden",
    text: "He stands in the garden — alive, breathing, yours.\nEverything — all of it — was for this moment.",
    choices: [
      { text: "Speak the final words", nextScene: "very_good", tag: "grateful", feedback: "Your voice fills the garden — warm, full, complete.", isCorrect: true, sentiment: "positive" },
      { text: "Rest — your work is finished", nextScene: "rest_blessed", tag: "beloved", feedback: "You exhale. It is done.", isCorrect: true, sentiment: "positive" },
    ],
  },
  very_good: {
    id: "very_good",
    title: "Very Good",
    text: "\"It is very good.\"\nYou smile upon your work.",
    choices: [
      { text: "Rest — you have finished", nextScene: "rest", tag: "blessed", feedback: "Peace settles over everything.", isCorrect: true, sentiment: "positive" },
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
