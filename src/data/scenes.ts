export interface Choice {
  text: string;
  nextScene: string;
  tag?: string;
  isCorrect: boolean;
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
    text: "You open your eyes.\nEverything is golden, warm, alive.",
    choices: [
      { text: "Approach the animals", isCorrect: true, nextScene: "animals", tag: "curious" },
      { text: "Follow the sound of water", isCorrect: false, nextScene: "river", tag: "explorer" },
      { text: "Be still. Just breathe.", isCorrect: false, nextScene: "meditation", tag: "contemplative" },
    ],
  },
  animals: {
    id: "animals",
    title: "Among the Creatures",
    text: "A lion breathes warmth into your hand.\nIt does not fear you.",
    choices: [
      { text: "Give them names", isCorrect: true, nextScene: "naming", tag: "steward" },
      { text: "Play with them", isCorrect: true, nextScene: "play", tag: "joyful" },
      { text: "Walk deeper into the garden", isCorrect: false, nextScene: "flowers", tag: "wanderer" },
    ],
  },
  river: {
    id: "river",
    title: "The River of Life",
    text: "Crystal water splits into four streams.\nThe river hums beneath your feet.",
    choices: [
      { text: "Swim toward the flowers", isCorrect: true, nextScene: "flowers", tag: "adventurous" },
      { text: "Follow the river upstream", isCorrect: false, nextScene: "upstream", tag: "seeker" },
      { text: "Rest and listen", isCorrect: false, nextScene: "meditation_river", tag: "peaceful" },
    ],
  },
  meditation: {
    id: "meditation",
    title: "Stillness",
    text: "You close your eyes.\nA presence settles — vast and tender.",
    choices: [
      { text: "Seek the animals", isCorrect: true, nextScene: "animals", tag: "connected" },
      { text: "Wander toward the flowers", isCorrect: false, nextScene: "flowers", tag: "inspired" },
      { text: "Go deeper into the garden", isCorrect: false, nextScene: "deep_garden", tag: "bold" },
    ],
  },
  naming: {
    id: "naming",
    title: "The Gift of Names",
    text: "Every creature comes in pairs.\nYou are the only one alone.",
    choices: [
      { text: "Walk through the loneliness", isCorrect: false, nextScene: "deep_garden", tag: "lonely" },
      { text: "Sit among the flowers", isCorrect: true, nextScene: "flowers", tag: "reflective" },
    ],
  },
  play: {
    id: "play",
    title: "Innocent Joy",
    text: "You laugh — the first laughter ever.\nIt rings through paradise like a bell.",
    choices: [
      { text: "Chase a butterfly deeper", isCorrect: false, nextScene: "deep_garden", tag: "carefree" },
      { text: "Follow the scent of flowers", isCorrect: true, nextScene: "flowers", tag: "drawn" },
    ],
  },
  flowers: {
    id: "flowers",
    title: "The Meadow of Colors",
    text: "Roses dark as night. Orchids that shift color.\nA faint path leads between ancient trees.",
    choices: [
      { text: "Weave a garland", isCorrect: false, nextScene: "garland", tag: "tender" },
      { text: "Follow the path", isCorrect: false, nextScene: "approach_tree", tag: "curious_path" },
      { text: "Lie down and gaze at the sky", isCorrect: true, nextScene: "sky_gaze", tag: "dreamer" },
    ],
  },
  upstream: {
    id: "upstream",
    title: "The Source",
    text: "The river springs from living rock.\nTiny rainbows dance in the mist.",
    choices: [
      { text: "Descend toward the center", isCorrect: false, nextScene: "approach_tree", tag: "drawn_center" },
      { text: "Return to the flowers", isCorrect: true, nextScene: "flowers", tag: "returning" },
    ],
  },
  meditation_river: {
    id: "meditation_river",
    title: "Peace by the Water",
    text: "Time dissolves.\nSomething calls from the heart of the garden.",
    choices: [
      { text: "Answer the call", isCorrect: false, nextScene: "deep_garden", tag: "called" },
      { text: "Visit the animals", isCorrect: true, nextScene: "animals", tag: "caring" },
    ],
  },
  deep_garden: {
    id: "deep_garden",
    title: "The Heart of Eden",
    text: "Two trees stand apart from all others.\nOne blazes with life. The other is dark and beautiful.",
    choices: [
      { text: "Approach the Tree of Life", isCorrect: true, nextScene: "tree_of_life", tag: "wise" },
      { text: "Approach the dark tree", isCorrect: false, nextScene: "forbidden_tree", tag: "tempted" },
      { text: "Rest beneath a fig tree", isCorrect: false, nextScene: "fig_rest", tag: "cautious" },
    ],
  },
  garland: {
    id: "garland",
    title: "A Crown of Flowers",
    text: "You weave roses and jasmine.\nWho would wear it? There is no one else.",
    choices: [
      { text: "Walk toward the center", isCorrect: false, nextScene: "deep_garden", tag: "yearning" },
      { text: "Keep exploring", isCorrect: true, nextScene: "upstream", tag: "restless" },
    ],
  },
  sky_gaze: {
    id: "sky_gaze",
    title: "The Heavens Above",
    text: "Stars open like eyes.\nYou feel impossibly small. Impossibly loved.",
    choices: [
      { text: "Follow the pull toward the center", isCorrect: false, nextScene: "deep_garden", tag: "destined" },
      { text: "Walk toward an ancient path", isCorrect: true, nextScene: "approach_tree", tag: "night_walker" },
    ],
  },
  tree_of_life: {
    id: "tree_of_life",
    title: "The Tree of Life",
    text: "Its fruit tastes like sunlight.\nBut your eyes drift to the other tree.",
    choices: [
      { text: "Turn away", isCorrect: true, nextScene: "approach_tree", tag: "resistant" },
      { text: "Step toward it", isCorrect: false, nextScene: "forbidden_tree", tag: "falling" },
    ],
  },
  fig_rest: {
    id: "fig_rest",
    title: "Beneath the Fig Tree",
    text: "A serpent watches from the dark tree.\nIts ancient eyes seem to know you.",
    choices: [
      { text: "Ignore it", isCorrect: true, nextScene: "approach_tree", tag: "wary" },
      { text: "Approach the serpent's tree", isCorrect: false, nextScene: "forbidden_tree", tag: "curious_serpent" },
    ],
  },
  approach_tree: {
    id: "approach_tree",
    title: "The Path Narrows",
    text: "The air grows heavy. Too sweet.\nA whisper drifts from the shadows.",
    choices: [
      { text: "Listen to the whisper", isCorrect: false, nextScene: "forbidden_tree", tag: "listening" },
      { text: "Try to turn back", isCorrect: false, nextScene: "forbidden_tree", tag: "reluctant" },
    ],
  },
  forbidden_tree: {
    id: "forbidden_tree",
    title: "The Forbidden Tree",
    text: "The fruit touches your lips.\nSweetness. Bitterness. You know.",
    choices: [
      { text: "Offer it to Eve", isCorrect: false, nextScene: "share_eve", tag: "shared" },
      { text: "Try to hide what you've done", isCorrect: false, nextScene: "hide", tag: "ashamed" },
    ],
  },
  share_eve: {
    id: "share_eve",
    title: "The Sharing",
    text: "\"Taste it,\" you whisper. She does.\nThe light in her eyes dies.",
    choices: [
      { text: "Continue...", isCorrect: false, nextScene: "expulsion", tag: "together" },
    ],
  },
  hide: {
    id: "hide",
    title: "Hiding from God",
    text: "You grab fig leaves. You hide.\nBut Eve finds you — and eats.",
    choices: [
      { text: "Continue...", isCorrect: false, nextScene: "expulsion", tag: "hiding" },
    ],
  },
  expulsion: {
    id: "expulsion",
    title: "East of Eden",
    text: "A sword of fire guards the gate.\nYou take her hand. You walk east.",
    choices: [],
    isFinal: true,
  },
};
