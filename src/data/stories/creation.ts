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
    title: "In the Beginning",
    text: "You are God — Father, Son, and Holy Spirit.\nNothing has been created yet. What is your first act?",
    choices: [
      { text: "Remain silent and alone forever", nextScene: "silence", tag: "contemplative", feedback: "In Genesis 1:1, God's first act was to create the heavens and the earth.", isCorrect: false, sentiment: "negative" },
      { text: "Create the heavens and the earth", nextScene: "void", tag: "aware", feedback: "Correct — Genesis 1:1: 'In the beginning God created the heavens and the earth.'", isCorrect: true, sentiment: "positive" },
      { text: "Speak only to yourself", nextScene: "voice", tag: "faithful", feedback: "In Genesis 1:1, God did not stay silent — He created the heavens and the earth.", isCorrect: false, sentiment: "negative" },
    ],
  },
  silence: {
    id: "silence",
    title: "The Formless Earth",
    text: "The earth is formless and void.\nDarkness covers the deep. What do you do?",
    choices: [
      { text: "Say: 'Let there be light'", nextScene: "light", tag: "drawn", feedback: "Correct — Genesis 1:3: 'And God said, Let there be light.'", isCorrect: true, sentiment: "positive" },
      { text: "Command more darkness to cover everything", nextScene: "light_awe", tag: "awestruck", feedback: "In Genesis 1:3, God said 'Let there be light' — not more darkness.", isCorrect: false, sentiment: "negative" },
    ],
  },
  voice: {
    id: "voice",
    title: "The Spirit Over the Waters",
    text: "The Spirit of God hovers over the waters.\nWhat do you speak into being first?",
    choices: [
      { text: "'Let there be light'", nextScene: "light_obey", tag: "obedient", feedback: "Correct — light was the first thing God spoke into being (Genesis 1:3).", isCorrect: true, sentiment: "positive" },
      { text: "'Let there be trees and animals'", nextScene: "light_awe", tag: "reverent", feedback: "In Genesis 1, God created light first — plants come on Day Three, animals on Days Five and Six.", isCorrect: false, sentiment: "negative" },
    ],
  },
  void: {
    id: "void",
    title: "The Deep",
    text: "The earth is without form; darkness covers the deep.\nThe Spirit of God hovers over the waters. What now?",
    choices: [
      { text: "Say: 'Let there be light'", nextScene: "light", tag: "witness", feedback: "Correct — Genesis 1:3: 'Let there be light.'", isCorrect: true, sentiment: "positive" },
      { text: "Create humans right away", nextScene: "light_awe", tag: "prophetic", feedback: "In Genesis 1, humans are created on the sixth day, not first. Light comes first.", isCorrect: false, sentiment: "negative" },
    ],
  },
  light: {
    id: "light",
    title: "Light Has Come",
    text: "Light shines. You see that the light is good.\nWhat is your next act on Day One?",
    choices: [
      { text: "Add a second sun in the sky", nextScene: "sky", tag: "wonder", feedback: "In Genesis 1:4, God separated the light from the darkness — He did not create a second sun.", isCorrect: false, sentiment: "negative" },
      { text: "Erase the darkness completely", nextScene: "warmth", tag: "grateful", feedback: "In Genesis 1:4-5, God did not destroy darkness — He separated it from light and named it Night.", isCorrect: false, sentiment: "negative" },
      { text: "Separate the light from the darkness", nextScene: "day_night", tag: "understanding", feedback: "Correct — Genesis 1:4: 'And God separated the light from the darkness.'", isCorrect: true, sentiment: "positive" },
    ],
  },
  light_obey: {
    id: "light_obey",
    title: "Day and Night",
    text: "Light shines and it is good.\nHow do you complete the first day?",
    choices: [
      { text: "Call the light Day and the darkness Night", nextScene: "warmth", tag: "grateful", feedback: "Correct — Genesis 1:5: 'God called the light Day, and the darkness he called Night.'", isCorrect: true, sentiment: "positive" },
      { text: "Create the sun, moon, and stars now", nextScene: "sky", tag: "wonder", feedback: "In Genesis 1, the sun, moon, and stars are created on the fourth day — not the first.", isCorrect: false, sentiment: "negative" },
    ],
  },
  light_awe: {
    id: "light_awe",
    title: "The First Day",
    text: "There is light. There is darkness.\nWhat completes the first day?",
    choices: [
      { text: "Make the sea creatures now", nextScene: "sky", tag: "brave", feedback: "In Genesis 1:20-23, sea creatures come on Day Five. Day One separates light and darkness.", isCorrect: false, sentiment: "negative" },
      { text: "Call the light Day and the darkness Night", nextScene: "day_night", tag: "moved", feedback: "Correct — Genesis 1:5: God called the light Day and the darkness Night.", isCorrect: true, sentiment: "positive" },
    ],
  },
  warmth: {
    id: "warmth",
    title: "The Second Day",
    text: "The first day is complete.\nWhat do you create on Day Two?",
    choices: [
      { text: "An expanse to separate the waters above from below", nextScene: "sky", tag: "curious", feedback: "Correct — Genesis 1:6-7: God made an expanse and separated the waters above from the waters below.", isCorrect: true, sentiment: "positive" },
      { text: "Plant the first garden", nextScene: "sky_vast", tag: "amazed", feedback: "In Genesis 1:11, plants come on Day Three. Day Two is the expanse — the sky.", isCorrect: false, sentiment: "negative" },
    ],
  },
  day_night: {
    id: "day_night",
    title: "The Second Day",
    text: "Evening and morning — the first day is done.\nWhat comes on Day Two?",
    choices: [
      { text: "Create the expanse and call it Heaven", nextScene: "sky", tag: "patient", feedback: "Correct — Genesis 1:8: 'And God called the expanse Heaven.'", isCorrect: true, sentiment: "positive" },
      { text: "Create fish and birds", nextScene: "sky_vast", tag: "joyful", feedback: "In Genesis 1:20-23, fish and birds come on Day Five — not Day Two.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sky: {
    id: "sky",
    title: "The Third Day",
    text: "The expanse of Heaven is made.\nWhat is your first act on Day Three?",
    choices: [
      { text: "Command dry land to appear without moving the waters", nextScene: "land", tag: "expectant", feedback: "In Genesis 1:9, God first gathered the waters together — then the dry land appeared.", isCorrect: false, sentiment: "negative" },
      { text: "Gather the waters together into one place", nextScene: "waters_gather", tag: "peaceful", feedback: "Correct — Genesis 1:9: 'Let the waters be gathered into one place, and let the dry land appear.'", isCorrect: true, sentiment: "positive" },
      { text: "Create the sun to warm the sky", nextScene: "expanse", tag: "humbled", feedback: "In Genesis 1:14-16, the sun is made on the fourth day — not the third.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sky_vast: {
    id: "sky_vast",
    title: "The Third Day",
    text: "The expanse of Heaven is complete.\nWhat comes on Day Three?",
    choices: [
      { text: "Create the stars first", nextScene: "land", tag: "grounded", feedback: "In Genesis 1:14-16, stars are created on the fourth day. Day Three is dry land and seas.", isCorrect: false, sentiment: "negative" },
      { text: "Gather the waters into seas so dry land appears", nextScene: "waters_gather", tag: "anticipating", feedback: "Correct — Genesis 1:9-10: God gathered the waters into seas and dry land appeared.", isCorrect: true, sentiment: "positive" },
    ],
  },
  waters_gather: {
    id: "waters_gather",
    title: "Dry Land Appears",
    text: "The waters gather. Dry land emerges.\nWhat do you do next on Day Three?",
    choices: [
      { text: "Cover the land with plants, seeds, and fruit trees", nextScene: "land", tag: "explorer", feedback: "Correct — Genesis 1:11: 'Let the earth sprout vegetation, plants yielding seed, and fruit trees.'", isCorrect: true, sentiment: "positive" },
      { text: "Fill the seas with fish right now", nextScene: "land_emerge", tag: "eager", feedback: "In Genesis 1:20-21, fish come on Day Five. Day Three ends with plants and trees.", isCorrect: false, sentiment: "negative" },
    ],
  },
  expanse: {
    id: "expanse",
    title: "The Third Day",
    text: "The heavens stretch above.\nWhat do you do on Day Three?",
    choices: [
      { text: "Bring forth dry land, plants, and fruit trees", nextScene: "land", tag: "grounded", feedback: "Correct — Genesis 1:9-12: dry land, seas, and vegetation appear on Day Three.", isCorrect: true, sentiment: "positive" },
      { text: "Form Adam from the dust", nextScene: "land_emerge", tag: "worshipful", feedback: "In Genesis 2:7, Adam is formed on Day Six — not Day Three.", isCorrect: false, sentiment: "negative" },
    ],
  },
  land: {
    id: "land",
    title: "Vegetation",
    text: "Dry land appears.\nWhat kind of life do you cover it with?",
    choices: [
      { text: "Plants, herbs, and fruit trees — each according to its kind", nextScene: "plants", tag: "wanderer", feedback: "Correct — Genesis 1:11-12: plants and trees each 'according to its kind.'", isCorrect: true, sentiment: "positive" },
      { text: "Only flowers, and no trees", nextScene: "flowers", tag: "gentle", feedback: "In Genesis 1:11, God made plants, herbs, AND fruit trees — not flowers alone.", isCorrect: false, sentiment: "negative" },
      { text: "Wild animals to roam the mountains", nextScene: "mountain", tag: "bold", feedback: "In Genesis 1:24-25, land animals come on the sixth day — not the third.", isCorrect: false, sentiment: "negative" },
    ],
  },
  land_emerge: {
    id: "land_emerge",
    title: "The Earth Brings Forth",
    text: "The dry ground is ready.\nWhat sprouts on Day Three?",
    choices: [
      { text: "Vegetation with seed, and fruit trees bearing fruit", nextScene: "plants", tag: "wanderer", feedback: "Correct — Genesis 1:11: 'plants yielding seed, and fruit trees bearing fruit... each according to its kind.'", isCorrect: true, sentiment: "positive" },
      { text: "Bees and butterflies before any plants", nextScene: "flowers", tag: "patient", feedback: "In Genesis 1:24-25, creeping things come on Day Six. Day Three brings plants first.", isCorrect: false, sentiment: "negative" },
    ],
  },
  plants: {
    id: "plants",
    title: "The Fourth Day",
    text: "Day Three is complete — plants and trees cover the earth.\nWhat do you create on Day Four?",
    choices: [
      { text: "Lights in the expanse — sun, moon, and stars", nextScene: "stars", tag: "patient", feedback: "Correct — Genesis 1:14-16: God made the sun, moon, and stars on Day Four.", isCorrect: true, sentiment: "positive" },
      { text: "Sea creatures and birds", nextScene: "stars_delight", tag: "delighted", feedback: "In Genesis 1:20-23, sea creatures and birds come on Day Five — not Day Four.", isCorrect: false, sentiment: "negative" },
    ],
  },
  flowers: {
    id: "flowers",
    title: "The Fourth Day",
    text: "Plants cover the earth.\nWhat comes on Day Four?",
    choices: [
      { text: "Adam and Eve", nextScene: "stars_delight", tag: "savoring", feedback: "In Genesis 1:26-27, humans are created on Day Six — not Day Four.", isCorrect: false, sentiment: "negative" },
      { text: "The sun, moon, and stars", nextScene: "stars", tag: "dreamer", feedback: "Correct — Genesis 1:14-19: God set the sun, moon, and stars in the expanse of the heavens.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mountain: {
    id: "mountain",
    title: "The Fourth Day",
    text: "The land is full of plants and trees.\nWhat do you make on Day Four?",
    choices: [
      { text: "Sun, moon, and stars in the heavens", nextScene: "stars_vision", tag: "visionary", feedback: "Correct — Genesis 1:14-19: God set two great lights and the stars in the expanse of the heavens.", isCorrect: true, sentiment: "positive" },
      { text: "Rain, snow, and clouds", nextScene: "stars", tag: "humble", feedback: "In Genesis 1, Day Four is about the sun, moon, and stars — not weather.", isCorrect: false, sentiment: "negative" },
    ],
  },
  stars: {
    id: "stars",
    title: "The Greater and Lesser Lights",
    text: "Lights are set in the heavens.\nHow do you order them?",
    choices: [
      { text: "One single light to rule both day and night", nextScene: "sea_creatures", tag: "attentive", feedback: "In Genesis 1:16, God made TWO great lights — the greater for the day and the lesser for the night.", isCorrect: false, sentiment: "negative" },
      { text: "Only stars — no sun, no moon", nextScene: "countless_stars", tag: "awed", feedback: "In Genesis 1:16, God made the sun and the moon as well as the stars.", isCorrect: false, sentiment: "negative" },
      { text: "A greater light to rule the day, a lesser to rule the night, and the stars", nextScene: "moonrise", tag: "contemplative", feedback: "Correct — Genesis 1:16: 'The greater light to rule the day, and the lesser light to rule the night — and the stars.'", isCorrect: true, sentiment: "positive" },
    ],
  },
  stars_delight: {
    id: "stars_delight",
    title: "Lights in the Heavens",
    text: "Day Four continues.\nWhat is set in place?",
    choices: [
      { text: "The sun, the moon, and countless stars", nextScene: "countless_stars", tag: "awed", feedback: "Correct — Genesis 1:14-16: sun, moon, and stars — for signs and seasons, days and years.", isCorrect: true, sentiment: "positive" },
      { text: "Just one small light for the whole sky", nextScene: "moonrise", tag: "restful", feedback: "In Genesis 1:16, God made TWO great lights, plus the stars — not one small light.", isCorrect: false, sentiment: "negative" },
    ],
  },
  stars_vision: {
    id: "stars_vision",
    title: "Stars Beyond Number",
    text: "You place lights in the heavens.\nHow many stars will there be?",
    choices: [
      { text: "Countless — beyond number", nextScene: "countless_stars", tag: "longing", feedback: "Correct — Genesis 15:5 and 22:17 describe the stars of heaven as too many to count.", isCorrect: true, sentiment: "positive" },
      { text: "Exactly seven stars — no more", nextScene: "sea_creatures", tag: "trusting", feedback: "In Scripture, God's stars are innumerable — 'as the stars of the sky in multitude' (Genesis 22:17).", isCorrect: false, sentiment: "negative" },
    ],
  },
  countless_stars: {
    id: "countless_stars",
    title: "The Fifth Day",
    text: "The lights of Day Four are set.\nWhat do you create on Day Five?",
    choices: [
      { text: "Creatures that swarm the waters, and birds to fly above", nextScene: "sea_creatures", tag: "moved", feedback: "Correct — Genesis 1:20-21: 'Let the waters swarm with living creatures, and let birds fly above the earth.'", isCorrect: true, sentiment: "positive" },
      { text: "Trees, grass, and fruit", nextScene: "sea_dawn", tag: "peaceful", feedback: "In Genesis 1:11, plants come on Day Three — not Day Five.", isCorrect: false, sentiment: "negative" },
    ],
  },
  moonrise: {
    id: "moonrise",
    title: "The Fifth Day",
    text: "Night has its moon; day has its sun.\nWhat living things fill Day Five?",
    choices: [
      { text: "Sea creatures and flying birds", nextScene: "sea_creatures", tag: "alert", feedback: "Correct — Genesis 1:20-23: sea creatures and birds fill the waters and skies on Day Five.", isCorrect: true, sentiment: "positive" },
      { text: "Cattle and creeping things", nextScene: "sea_dawn", tag: "restful", feedback: "In Genesis 1:24-25, cattle and creeping things come on Day Six — not Day Five.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sea_dawn: {
    id: "sea_dawn",
    title: "Waters and Skies",
    text: "Day Five begins.\nWhich creatures do you make?",
    choices: [
      { text: "Great sea creatures, fish, and every winged bird", nextScene: "sea_creatures", tag: "eager", feedback: "Correct — Genesis 1:20-22: God created the great sea creatures and every winged bird, and blessed them.", isCorrect: true, sentiment: "positive" },
      { text: "Only bees for the flowers", nextScene: "bird_flight", tag: "savoring", feedback: "In Genesis 1:20-21, Day Five brings great sea creatures and every winged bird — not just insects.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sea_creatures: {
    id: "sea_creatures",
    title: "Be Fruitful and Multiply",
    text: "The seas swarm; birds fly above.\nWhat blessing do you speak over them?",
    choices: [
      { text: "'Be fruitful and multiply, and fill the waters and the earth'", nextScene: "land_creatures", tag: "eager", feedback: "Correct — Genesis 1:22: 'Be fruitful and multiply and fill the waters in the seas, and let birds multiply on the earth.'", isCorrect: true, sentiment: "positive" },
      { text: "'Return to the dust — you have failed'", nextScene: "bird_flight", tag: "free", feedback: "In Genesis 1:22, God BLESSED the creatures to multiply — He did not destroy them.", isCorrect: false, sentiment: "negative" },
    ],
  },
  bird_flight: {
    id: "bird_flight",
    title: "The Sixth Day",
    text: "Sea and sky are filled.\nWhat comes on Day Six?",
    choices: [
      { text: "Livestock, wild beasts, and creeping things of the earth", nextScene: "land_creatures", tag: "grounded", feedback: "Correct — Genesis 1:24-25: cattle, beasts of the earth, and creeping things on Day Six.", isCorrect: true, sentiment: "positive" },
      { text: "More stars in the sky", nextScene: "land_creatures_wind", tag: "free", feedback: "Stars were made on Day Four. Day Six brings land animals — and humans.", isCorrect: false, sentiment: "negative" },
    ],
  },
  land_creatures: {
    id: "land_creatures",
    title: "In Our Image",
    text: "The land teems with animals.\nWhat is your final work of creation?",
    choices: [
      { text: "Say: 'Let us make man in our image, after our likeness'", nextScene: "before_man", tag: "anticipating", feedback: "Correct — Genesis 1:26: 'Let us make man in our image, after our likeness.'", isCorrect: true, sentiment: "positive" },
      { text: "Turn one of the animals into a human", nextScene: "among_animals", tag: "connected", feedback: "In Genesis 2:7, God formed man from the dust of the ground — not from an animal.", isCorrect: false, sentiment: "negative" },
    ],
  },
  land_creatures_wind: {
    id: "land_creatures_wind",
    title: "The Crown of Creation",
    text: "The animals fill the earth.\nWhat is still missing?",
    choices: [
      { text: "Declare creation finished — nothing more is needed", nextScene: "among_animals", tag: "gentle", feedback: "In Genesis 1:26, after the animals, God said 'Let us make man in our image.' Creation was not yet complete.", isCorrect: false, sentiment: "negative" },
      { text: "A being made in the image of God", nextScene: "before_man", tag: "lonely", feedback: "Correct — Genesis 1:26-27: humans are made in the image and likeness of God.", isCorrect: true, sentiment: "positive" },
    ],
  },
  among_animals: {
    id: "among_animals",
    title: "Let Us Make Man",
    text: "No animal bears your image.\nHow do you make the first man?",
    choices: [
      { text: "Transform a lion into a man", nextScene: "before_man_lonely", tag: "lonely", feedback: "In Genesis 2:7, God formed man from the dust of the ground — not from another creature.", isCorrect: false, sentiment: "negative" },
      { text: "Form him from the dust of the ground", nextScene: "before_man", tag: "trusting", feedback: "Correct — Genesis 2:7: 'The Lord God formed the man of dust from the ground.'", isCorrect: true, sentiment: "positive" },
    ],
  },
  before_man: {
    id: "before_man",
    title: "Formed from Dust",
    text: "You form a man from the dust of the ground.\nHow does he become a living being?",
    choices: [
      { text: "Speak a word and let him wake on his own", nextScene: "breath_of_life", tag: "witness", feedback: "In Genesis 2:7, God specifically breathed the breath of life into the man's nostrils.", isCorrect: false, sentiment: "negative" },
      { text: "Breathe the breath of life into his nostrils", nextScene: "breath_of_life_sacred", tag: "sacred", feedback: "Correct — Genesis 2:7: 'He breathed into his nostrils the breath of life, and the man became a living creature.'", isCorrect: true, sentiment: "positive" },
    ],
  },
  before_man_lonely: {
    id: "before_man_lonely",
    title: "The Breath of Life",
    text: "The form of the man lies still in the dust.\nWhat brings him to life?",
    choices: [
      { text: "Your breath in his nostrils", nextScene: "breath_of_life_sacred", tag: "participant", feedback: "Correct — Genesis 2:7: God breathed the breath of life into the man's nostrils, and he became a living being.", isCorrect: true, sentiment: "positive" },
      { text: "Water poured over the clay", nextScene: "breath_of_life", tag: "reverent", feedback: "In Genesis 2:7, it was God's BREATH — not water — that gave man life.", isCorrect: false, sentiment: "negative" },
    ],
  },
  breath_of_life: {
    id: "breath_of_life",
    title: "The Garden",
    text: "The man is alive.\nWhere do you place him?",
    choices: [
      { text: "In a desert to prove himself", nextScene: "first_garden", tag: "born", feedback: "In Genesis 2:8, God planted a garden in Eden and placed the man there.", isCorrect: false, sentiment: "negative" },
      { text: "In the garden of Eden, to work it and keep it", nextScene: "first_garden_wonder", tag: "awakened", feedback: "Correct — Genesis 2:15: 'The Lord God took the man and put him in the garden of Eden to work it and keep it.'", isCorrect: true, sentiment: "positive" },
    ],
  },
  breath_of_life_sacred: {
    id: "breath_of_life_sacred",
    title: "Eden Prepared",
    text: "The man breathes and lives.\nWhat home do you prepare for him?",
    choices: [
      { text: "A garden in Eden, with every tree pleasant to the sight and good for food", nextScene: "first_garden_wonder", tag: "newborn", feedback: "Correct — Genesis 2:8-9: God planted a garden in Eden with every tree pleasant to sight and good for food.", isCorrect: true, sentiment: "positive" },
      { text: "A field of thorns and thistles", nextScene: "first_garden", tag: "alive", feedback: "In Genesis 2:8, Eden was a garden of delight. Thorns and thistles come only after the Fall (Genesis 3:18).", isCorrect: false, sentiment: "negative" },
    ],
  },
  first_garden: {
    id: "first_garden",
    title: "Behold, Very Good",
    text: "Creation is complete.\nWhat do you say when you look upon it all?",
    choices: [
      { text: "'Behold, it was very good'", nextScene: "very_good", tag: "complete", feedback: "Correct — Genesis 1:31: 'God saw everything that he had made, and behold, it was very good.'", isCorrect: true, sentiment: "positive" },
      { text: "'This is a failure — I must start over'", nextScene: "rest", tag: "peaceful", feedback: "In Genesis 1:31, God saw that everything He had made was very good — not a failure.", isCorrect: false, sentiment: "negative" },
    ],
  },
  first_garden_wonder: {
    id: "first_garden_wonder",
    title: "The Sixth Day is Complete",
    text: "Man walks in the garden. Creation is finished.\nWhat do you declare?",
    choices: [
      { text: "'Behold, it is very good'", nextScene: "very_good", tag: "grateful", feedback: "Correct — Genesis 1:31: 'And God saw everything that he had made, and behold, it was very good.'", isCorrect: true, sentiment: "positive" },
      { text: "'I will need to redo the humans tomorrow'", nextScene: "rest_blessed", tag: "beloved", feedback: "In Genesis 1:31, God declared everything He had made — including humans — very good.", isCorrect: false, sentiment: "negative" },
    ],
  },
  very_good: {
    id: "very_good",
    title: "The Seventh Day",
    text: "Six days of creation are complete.\nWhat do you do on the seventh day?",
    choices: [
      { text: "Rest, and bless the seventh day, making it holy", nextScene: "rest", tag: "blessed", feedback: "Correct — Genesis 2:2-3: 'On the seventh day God finished his work... He blessed the seventh day and made it holy.'", isCorrect: true, sentiment: "positive" },
    ],
  },
  rest: {
    id: "rest",
    title: "The Sabbath",
    text: "You rest from all your work.\nYou bless the seventh day and make it holy.\n\n'Thus the heavens and the earth were finished.' (Genesis 2:1)",
    choices: [],
    isFinal: true,
  },
  rest_blessed: {
    id: "rest_blessed",
    title: "The Sabbath",
    text: "You rest, and bless the seventh day as holy.\nAll creation is finished — and it is very good.",
    choices: [],
    isFinal: true,
  },
};
