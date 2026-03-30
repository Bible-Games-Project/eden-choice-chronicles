export interface Choice {
  text: string;
  nextScene: string;
  tag?: string;
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
    text: "You open your eyes for the first time.\nEverything is golden, warm, and alive.",
    choices: [
      { text: "Approach the animals nearby", nextScene: "animals", tag: "curious" },
      { text: "Follow the sound of water", nextScene: "river", tag: "explorer" },
      { text: "Be still. Just breathe.", nextScene: "meditation", tag: "contemplative" },
    ],
  },
  animals: {
    id: "animals",
    title: "Among the Creatures",
    text: "A lion watches you without fear.\nIt breathes warmth into your open hand.",
    choices: [
      { text: "Give them names", nextScene: "naming", tag: "steward" },
      { text: "Play with them", nextScene: "play", tag: "joyful" },
      { text: "Walk deeper into the garden", nextScene: "flowers", tag: "wanderer" },
    ],
  },
  river: {
    id: "river",
    title: "The River of Life",
    text: "Crystal water splits into four streams.\nThe river hums with the breath of God.",
    choices: [
      { text: "Swim to the flowers across", nextScene: "flowers", tag: "adventurous" },
      { text: "Follow the river upstream", nextScene: "upstream", tag: "seeker" },
      { text: "Rest and listen to the water", nextScene: "meditation_river", tag: "peaceful" },
    ],
  },
  meditation: {
    id: "meditation",
    title: "A Moment of Stillness",
    text: "You close your eyes. The world sings.\nA presence settles — vast and tender.",
    choices: [
      { text: "Seek out the animals", nextScene: "animals", tag: "connected" },
      { text: "Wander toward the flowers", nextScene: "flowers", tag: "inspired" },
      { text: "Explore the heart of the garden", nextScene: "deep_garden", tag: "bold" },
    ],
  },
  naming: {
    id: "naming",
    title: "The Gift of Names",
    text: "Tiger. Giraffe. Fox.\nEvery creature came in pairs. You are alone.",
    choices: [
      { text: "Walk through the loneliness", nextScene: "deep_garden", tag: "lonely" },
      { text: "Sit among the flowers and think", nextScene: "flowers", tag: "reflective" },
    ],
  },
  play: {
    id: "play",
    title: "Innocent Joy",
    text: "You laugh — the first laughter ever.\nThe sound rings through paradise like a bell.",
    choices: [
      { text: "Chase a butterfly deeper", nextScene: "deep_garden", tag: "carefree" },
      { text: "Follow the scent of flowers", nextScene: "flowers", tag: "drawn" },
    ],
  },
  flowers: {
    id: "flowers",
    title: "The Meadow of Colors",
    text: "Roses dark as night. Orchids that shift color.\nA faint path leads between ancient trees.",
    choices: [
      { text: "Weave a garland of flowers", nextScene: "garland", tag: "tender" },
      { text: "Follow the path into the trees", nextScene: "approach_tree", tag: "curious_path" },
      { text: "Lie down and gaze at the sky", nextScene: "sky_gaze", tag: "dreamer" },
    ],
  },
  upstream: {
    id: "upstream",
    title: "The Source",
    text: "The river springs from living rock.\nA thousand tiny rainbows dance in the mist.",
    choices: [
      { text: "Descend toward the garden's center", nextScene: "approach_tree", tag: "drawn_center" },
      { text: "Return to the flower meadows", nextScene: "flowers", tag: "returning" },
    ],
  },
  meditation_river: {
    id: "meditation_river",
    title: "Peace by the Water",
    text: "Time dissolves by the river.\nSomething is calling from the heart of the garden.",
    choices: [
      { text: "Answer the call", nextScene: "deep_garden", tag: "called" },
      { text: "Visit the animals before nightfall", nextScene: "animals", tag: "caring" },
    ],
  },
  deep_garden: {
    id: "deep_garden",
    title: "The Heart of Eden",
    text: "Two trees stand apart from all others.\nOne blazes with life. The other is dark and beautiful.",
    choices: [
      { text: "Approach the Tree of Life", nextScene: "tree_of_life", tag: "wise" },
      { text: "Approach the dark tree", nextScene: "forbidden_tree", tag: "tempted" },
      { text: "Rest beneath a fig tree", nextScene: "fig_rest", tag: "cautious" },
    ],
  },
  garland: {
    id: "garland",
    title: "A Crown of Flowers",
    text: "You weave a crown of roses and jasmine.\nWho would wear it? There is no one else.",
    choices: [
      { text: "Walk toward the garden's center", nextScene: "deep_garden", tag: "yearning" },
      { text: "Keep exploring", nextScene: "upstream", tag: "restless" },
    ],
  },
  sky_gaze: {
    id: "sky_gaze",
    title: "The Heavens Above",
    text: "Stars open like eyes in the darkening sky.\nYou feel impossibly small. Impossibly loved.",
    choices: [
      { text: "Follow the pull toward the center", nextScene: "deep_garden", tag: "destined" },
      { text: "Walk toward an ancient path", nextScene: "approach_tree", tag: "night_walker" },
    ],
  },
  tree_of_life: {
    id: "tree_of_life",
    title: "The Tree of Life",
    text: "Its fruit tastes like sunlight and first breath.\nBut your eyes drift to the other tree.",
    choices: [
      { text: "Turn away", nextScene: "approach_tree", tag: "resistant" },
      { text: "Step toward the forbidden tree", nextScene: "forbidden_tree", tag: "falling" },
    ],
  },
  fig_rest: {
    id: "fig_rest",
    title: "Beneath the Fig Tree",
    text: "A serpent winds along the dark tree's branch.\nIts ancient eyes seem to know you.",
    choices: [
      { text: "Ignore it and rest", nextScene: "approach_tree", tag: "wary" },
      { text: "Approach the serpent's tree", nextScene: "forbidden_tree", tag: "curious_serpent" },
    ],
  },
  approach_tree: {
    id: "approach_tree",
    title: "The Path Narrows",
    text: "The air grows heavy. Too sweet.\nA silky whisper drifts from the shadows.",
    choices: [
      { text: "Listen to the whisper", nextScene: "forbidden_tree", tag: "listening" },
      { text: "Try to turn back", nextScene: "forbidden_tree", tag: "reluctant" },
    ],
  },
  forbidden_tree: {
    id: "forbidden_tree",
    title: "The Forbidden Tree",
    text: "The fruit touches your lips.\nSweetness and bitterness. You know. And you are afraid.",
    choices: [
      { text: "Offer the fruit to Eve", nextScene: "share_eve", tag: "shared" },
      { text: "Try to hide what you've done", nextScene: "hide", tag: "ashamed" },
    ],
  },
  share_eve: {
    id: "share_eve",
    title: "The Sharing",
    text: "\"Taste it,\" you whisper. She does.\nIn her eyes, the light of innocence dies.",
    choices: [
      { text: "Continue...", nextScene: "expulsion", tag: "together" },
    ],
  },
  hide: {
    id: "hide",
    title: "Hiding from God",
    text: "You grab fig leaves. You hide.\nBut Eve finds you — and eats.",
    choices: [
      { text: "Continue...", nextScene: "expulsion", tag: "hiding" },
    ],
  },
  expulsion: {
    id: "expulsion",
    title: "East of Eden",
    text: "An angel with a sword of fire guards the gate.\nYou take her hand. You walk east. Together.",
    choices: [],
    isFinal: true,
  },
};
