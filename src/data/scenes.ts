export interface Choice {
  text: string;
  nextScene: string;
  tag?: string; // tracks what the player chose
}

export interface Scene {
  id: string;
  title: string;
  text: string;
  choices: Choice[];
  isFinal?: boolean;
}

export const scenes: Record<string, Scene> = {
  start: {
    id: "start",
    title: "The Garden of Eden",
    text: "You open your eyes for the first time. Warmth floods your skin as golden light filters through an endless canopy of emerald leaves. The air is thick with the fragrance of jasmine, cedar, and something sweeter than anything you will ever smell again. You are Adam — the first man — and this paradise stretches before you in every direction. A gentle breeze carries the distant sound of flowing water, the chirping of birds you have not yet named, and the rustle of creatures moving through the undergrowth.",
    choices: [
      { text: "Approach the animals grazing nearby", nextScene: "animals", tag: "curious" },
      { text: "Follow the sound of rushing water", nextScene: "river", tag: "explorer" },
      { text: "Sit still and take in the beauty around you", nextScene: "meditation", tag: "contemplative" },
    ],
  },

  animals: {
    id: "animals",
    title: "Among the Creatures",
    text: "A lion lies in the tall grass, its amber eyes watching you without fear. A pair of deer graze just beyond, their fawns stumbling on new legs. A great eagle descends from the sky and lands on a branch above you, tilting its head as if waiting. You feel a stirring in your chest — a purpose. God has given you dominion over these creatures, and it falls to you to give each one its name. The lion rumbles softly as you reach toward it, and you feel the warmth of its breath on your palm.",
    choices: [
      { text: "Name the animals one by one", nextScene: "naming", tag: "steward" },
      { text: "Play with the lion and the fawns", nextScene: "play", tag: "joyful" },
      { text: "Walk deeper into the garden", nextScene: "flowers", tag: "wanderer" },
    ],
  },

  river: {
    id: "river",
    title: "The River of Life",
    text: "You push through curtains of hanging vines and find a river so clear you can see every smooth stone on its bed. It splits into four streams that flow in different directions, each disappearing into the lush wilderness beyond. Fish leap and shimmer in the sunlight like living jewels. The water is cool against your feet as you wade in, and you feel an overwhelming sense of peace, as though the river itself carries the breath of God. On the far bank, brilliantly colored flowers bloom in patterns you have never imagined.",
    choices: [
      { text: "Swim across to the flower fields", nextScene: "flowers", tag: "adventurous" },
      { text: "Follow the river upstream", nextScene: "upstream", tag: "seeker" },
      { text: "Rest on the bank and listen to the water", nextScene: "meditation_river", tag: "peaceful" },
    ],
  },

  meditation: {
    id: "meditation",
    title: "A Moment of Stillness",
    text: "You sit on the soft moss and close your eyes. The world does not quiet — it sings. You hear the harmonies of creation: wind through leaves like a harp, birdsong like a choir, the deep hum of the earth beneath you. A presence settles over you, vast and tender, and you know without seeing that God is near. 'It is good,' a voice seems to say — not in words, but in the feeling of sun on your face and grass between your fingers. When you open your eyes, the garden seems even more vivid than before.",
    choices: [
      { text: "Seek out the animals of the garden", nextScene: "animals", tag: "connected" },
      { text: "Wander toward the colorful flowers", nextScene: "flowers", tag: "inspired" },
      { text: "Explore the heart of the garden", nextScene: "deep_garden", tag: "bold" },
    ],
  },

  naming: {
    id: "naming",
    title: "The Gift of Names",
    text: "One by one, the creatures of the garden come before you. The great striped cat becomes 'Tiger.' The long-necked beast that eats from the treetops becomes 'Giraffe.' The small, clever creature with bright eyes becomes 'Fox.' Each name feels right, as though it was always waiting inside you. Hours pass, or perhaps days — time means little here. But as the last creature departs, a strange hollowness settles in your chest. Every animal came in pairs. Every creature had a companion. You are alone.",
    choices: [
      { text: "Walk through the garden, feeling the loneliness", nextScene: "deep_garden", tag: "lonely" },
      { text: "Sit by the flowers and ponder this feeling", nextScene: "flowers", tag: "reflective" },
    ],
  },

  play: {
    id: "play",
    title: "Innocent Joy",
    text: "You chase the fawns through meadows of golden grass. The lion bounds alongside you, powerful but gentle, its mane catching the light like a crown of fire. You laugh — the first laughter in all of creation — and the sound rings through the garden like a bell. Butterflies spiral around you in clouds of blue and orange. You tumble into a bed of soft clover, breathless and grinning, and the animals pile around you in a warm, ridiculous heap. For a timeless moment, everything is perfect.",
    choices: [
      { text: "Follow a butterfly deeper into the garden", nextScene: "deep_garden", tag: "carefree" },
      { text: "Head toward the scent of blooming flowers", nextScene: "flowers", tag: "drawn" },
    ],
  },

  flowers: {
    id: "flowers",
    title: "The Meadow of Colors",
    text: "The meadow explodes with color. Roses the size of your fist bloom in reds so deep they are almost black. Lilies of impossible blue sway beside orchids that shift color as you watch — violet to amber to pale green. The fragrance is intoxicating. Bees the size of your thumb drone lazily from blossom to blossom. You kneel and cup a flower in your hands, and its petals are soft as a whisper. In the distance, you notice a faint path winding between ancient trees, and something in you stirs — a pull you cannot name.",
    choices: [
      { text: "Gather flowers and weave a garland", nextScene: "garland", tag: "tender" },
      { text: "Follow the faint path into the ancient trees", nextScene: "approach_tree", tag: "curious_path" },
      { text: "Lie among the flowers and gaze at the sky", nextScene: "sky_gaze", tag: "dreamer" },
    ],
  },

  upstream: {
    id: "upstream",
    title: "The Source",
    text: "You follow the river as it narrows and the banks rise into gentle cliffs draped with ferns and moss. The water grows swifter, colder, purer. At last you reach a place where the river springs from the living rock itself — a crystal fountain that catches the light and scatters it into a thousand tiny rainbows. The mist on your face feels like a blessing. You sense that this place is sacred, close to the heart of creation itself. From here, you can see the whole garden spread below you.",
    choices: [
      { text: "Descend toward the ancient trees at the garden's center", nextScene: "approach_tree", tag: "drawn_center" },
      { text: "Return to explore the flower meadows", nextScene: "flowers", tag: "returning" },
    ],
  },

  meditation_river: {
    id: "meditation_river",
    title: "Peace by the Water",
    text: "You lie on the mossy bank and let the river's song wash over you. Time dissolves. You dream — or perhaps you simply see — visions of the garden's vastness: mountains crowned with snow, valleys thick with fruit trees, caverns glittering with gems. You feel God's hand upon the world like a potter shaping clay, deliberate and loving. When you rise, the sun has shifted, painting the sky in shades of coral and gold. Something is calling you from the heart of the garden.",
    choices: [
      { text: "Answer the call and walk toward the garden's center", nextScene: "deep_garden", tag: "called" },
      { text: "Visit the animals before nightfall", nextScene: "animals", tag: "caring" },
    ],
  },

  deep_garden: {
    id: "deep_garden",
    title: "The Heart of Eden",
    text: "The trees grow taller here, their trunks silver-barked and ancient. Shafts of light fall through the canopy like pillars of gold. The air hums with a quiet energy, as though the garden itself is breathing. You pass through groves of pomegranate and fig, their branches heavy with fruit. Everything here feels older, deeper, closer to the source of all things. And then you see it — ahead, where the light gathers most intensely, two trees stand apart from all others. One blazes with life. The other is dark and beautiful, its branches laden with fruit that gleams like rubies.",
    choices: [
      { text: "Approach the Tree of Life", nextScene: "tree_of_life", tag: "wise" },
      { text: "Approach the dark, beautiful tree", nextScene: "forbidden_tree", tag: "tempted" },
      { text: "Sit beneath a fig tree and rest", nextScene: "fig_rest", tag: "cautious" },
    ],
  },

  garland: {
    id: "garland",
    title: "A Crown of Flowers",
    text: "Your hands work instinctively, weaving stems and petals into a garland of extraordinary beauty — roses and lilies intertwined with trailing jasmine. You hold it up and it catches the light like a crown. You wonder who might wear it. The thought surprises you; there is no one else. A pang of something — not quite sadness, but a deep, unnamed yearning — moves through you. The garden is paradise, but paradise, you are beginning to feel, was meant to be shared. The ancient trees at the garden's center seem to beckon.",
    choices: [
      { text: "Walk toward the center of the garden", nextScene: "deep_garden", tag: "yearning" },
      { text: "Explore more of the garden's wonders", nextScene: "upstream", tag: "restless" },
    ],
  },

  sky_gaze: {
    id: "sky_gaze",
    title: "The Heavens Above",
    text: "You lie back among the flowers and watch the sky. Clouds drift in shapes that seem almost intentional — a great fish, a soaring bird, a hand reaching down. As the sun begins its descent, the sky blazes with colors that have no names yet: the burning edge of day meeting the cool breath of approaching night. Stars begin to appear, one by one, like eyes opening. You feel impossibly small and impossibly loved. But as darkness gathers, you feel a tug in your chest, pulling you toward the center of the garden.",
    choices: [
      { text: "Follow the pull toward the garden's heart", nextScene: "deep_garden", tag: "destined" },
      { text: "Walk along the tree line toward an ancient path", nextScene: "approach_tree", tag: "night_walker" },
    ],
  },

  tree_of_life: {
    id: "tree_of_life",
    title: "The Tree of Life",
    text: "The Tree of Life pulses with golden light. Its leaves shimmer like beaten gold, and its fruit glows with an inner fire. You feel warmth radiating from it — not heat, but something deeper, as though life itself is pouring out of its roots and into the ground beneath your feet. You eat one of its fruits, and it tastes like sunlight and honey and the first breath you ever took. Energy floods through you. But your eyes are drawn, inevitably, to the other tree — the one God warned you about. Its fruit is beautiful. Its shadow is cool and inviting.",
    choices: [
      { text: "Turn away and explore elsewhere", nextScene: "approach_tree", tag: "resistant" },
      { text: "Step toward the forbidden tree", nextScene: "forbidden_tree", tag: "falling" },
    ],
  },

  fig_rest: {
    id: "fig_rest",
    title: "Beneath the Fig Tree",
    text: "You sit in the shade of a great fig tree, its broad leaves creating a cool canopy. You eat a ripe fig — sweet and earthy — and lean back against the smooth trunk. From here, you can see both trees: the Tree of Life, blazing like a beacon, and the Tree of Knowledge, dark and alluring. A serpent — more cunning than any beast you have named — winds along a branch of the darker tree, its scales catching the light. It seems to watch you with ancient, knowing eyes.",
    choices: [
      { text: "Ignore the serpent and rest", nextScene: "approach_tree", tag: "wary" },
      { text: "Approach the tree where the serpent waits", nextScene: "forbidden_tree", tag: "curious_serpent" },
    ],
  },

  approach_tree: {
    id: "approach_tree",
    title: "The Path Narrows",
    text: "The path winds between ancient oaks and cedars, growing narrower with each step. The light changes — still golden, but with a strange, amber quality, like the last moments before a storm. The birdsong fades. The air grows heavy with the scent of ripe fruit, almost too sweet. And then, through a break in the trees, you see it clearly: the Tree of the Knowledge of Good and Evil. Its trunk is twisted and dark, but its branches are laden with fruit more beautiful than anything in the garden. A voice — silky and reasonable — seems to whisper from its shade.",
    choices: [
      { text: "Listen to the whisper", nextScene: "forbidden_tree", tag: "listening" },
      { text: "Try to turn back", nextScene: "forbidden_tree", tag: "reluctant" },
    ],
  },

  forbidden_tree: {
    id: "forbidden_tree",
    title: "The Forbidden Tree",
    text: "You stand before the Tree of the Knowledge of Good and Evil. The serpent coils among its branches, its voice like honey poured over glass. 'Did God truly say you must not eat from any tree in the garden?' it asks, though you both know that is not what God said. The fruit hangs before you — deep crimson, glistening with dew, more beautiful than any fruit you have tasted. Your hand rises, almost of its own will. You know what God commanded. You know. And yet the fruit is in your hand, and then it is at your lips, and then — sweetness and bitterness flood your mouth at once. Knowledge crashes into you like a wave. You see yourself as you are. And you are afraid.",
    choices: [
      { text: "Offer the fruit to Eve", nextScene: "share_eve", tag: "shared" },
      { text: "Try to hide what you have done", nextScene: "hide", tag: "ashamed" },
    ],
  },

  share_eve: {
    id: "share_eve",
    title: "The Sharing",
    text: "Eve stands beside you — your companion, bone of your bone, flesh of your flesh. You look into her eyes for the first time with the weight of knowledge behind yours, and you see her innocence, still untouched. The fruit is still in your hand, sweet juice running between your fingers. You cannot bear this knowledge alone. You cannot bear to be separated from her by this terrible new understanding. 'Taste it,' you say, and your voice breaks. She takes it. She bites. And in her eyes, you watch the same light of innocence die. You reach for fig leaves to cover yourselves, because for the first time, you feel the cold wind of shame.",
    choices: [
      { text: "Continue...", nextScene: "expulsion", tag: "together" },
    ],
  },

  hide: {
    id: "hide",
    title: "Hiding from God",
    text: "You stumble away from the tree, the taste of the fruit still burning on your tongue. You grab fig leaves and press them to your body, desperate to cover what you now see as nakedness. You hear footsteps — not the serpent's slither, but the steady, familiar sound of God walking in the garden in the cool of the day. Terror seizes you. You crouch behind the bushes, heart hammering. But Eve finds you there, and she sees the juice on your lips, the guilt in your eyes. Without a word, she takes the remaining fruit from your trembling hand and eats. Now you are both hiding. Now you are both afraid.",
    choices: [
      { text: "Continue...", nextScene: "expulsion", tag: "hiding" },
    ],
  },

  expulsion: {
    id: "expulsion",
    title: "East of Eden",
    text: "God's voice rolls through the garden like thunder wrapped in sorrow. 'Where are you?' He asks, though He already knows. You step out from behind the trees, fig leaves clutched to your chest, and the words spill out — blame and confession tangled together. The serpent is cursed to crawl on its belly. Eve will bear children in pain. And you — you will toil and sweat to coax bread from ground that will fight you at every turn. God makes garments of skin to clothe you, and in that act of provision, you glimpse His love even through His judgment. Then the angel appears — terrible and beautiful, a sword of fire turning in every direction. You take Eve's hand. Together, you walk east, out of the garden, into a world that is beautiful and broken, just like you. Behind you, the gates of Eden close forever.",
    choices: [],
    isFinal: true,
  },
};
