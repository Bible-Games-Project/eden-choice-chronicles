import { StoryChoice, StoryScene, ChoiceSentiment } from "@/data/stories/creation";

export const cainAbelScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "East of Eden",
    text: "The ground is hard beneath your hands.\nYou till the earth — it resists you.",
    choices: [
      { text: "Dig harder", nextScene: "toil", tag: "determined", feedback: "Your hands bleed. The soil gives — barely.", sentiment: "neutral" },
      { text: "Look at Abel in the distance", nextScene: "watch_abel", tag: "observant", feedback: "He sits among the lambs, laughing. It comes so easily to him.", sentiment: "negative" },
      { text: "Pause and wipe the sweat away", nextScene: "rest", tag: "weary", feedback: "Your muscles ache. The sun is merciless.", sentiment: "neutral" },
    ],
  },
  toil: {
    id: "toil",
    title: "The Stubborn Earth",
    text: "You pull weeds until your fingers crack.\nThe harvest will come — it must.",
    choices: [
      { text: "Gather your best crops", nextScene: "offering_proud", tag: "proud", feedback: "You select the tallest stalks. They should be enough.", sentiment: "positive" },
      { text: "Grab whatever is nearest", nextScene: "offering_careless", tag: "careless", feedback: "It doesn't matter. An offering is an offering.", sentiment: "negative" },
    ],
  },
  watch_abel: {
    id: "watch_abel",
    title: "Your Brother",
    text: "Abel kneels beside a newborn lamb.\nHis hands are gentle. His face — peaceful.",
    choices: [
      { text: "Call out to him", nextScene: "brothers_talk", tag: "reaching", feedback: "He waves back, smiling. The distance feels wider than it looks.", sentiment: "neutral" },
      { text: "Turn back to your work", nextScene: "toil", tag: "resentful", feedback: "You grip the hoe tighter. You don't need his peace.", sentiment: "negative" },
    ],
  },
  rest: {
    id: "rest",
    title: "A Moment's Rest",
    text: "You sit on a stone and stare at the horizon.\nEden's gate still glows — far away, unreachable.",
    choices: [
      { text: "Think about the offering", nextScene: "offering_proud", tag: "dutiful", feedback: "God will see your effort. He must.", sentiment: "neutral" },
      { text: "Watch Abel tend his flock", nextScene: "watch_abel", tag: "lonely", feedback: "He hums a song you almost remember.", sentiment: "negative" },
    ],
  },
  brothers_talk: {
    id: "brothers_talk",
    title: "Brothers",
    text: "Abel sits beside you. \"The lambs are growing strong.\"\nHis joy is honest. It stings.",
    choices: [
      { text: "\"My crops are growing too.\"", nextScene: "offering_proud", tag: "competitive", feedback: "He nods. But you hear the doubt in your own voice.", sentiment: "neutral" },
      { text: "Stay silent", nextScene: "offering_careless", tag: "withdrawn", feedback: "Words stick in your throat. You say nothing.", sentiment: "negative" },
    ],
  },
  offering_proud: {
    id: "offering_proud",
    title: "Your Offering",
    text: "You lay grain and fruit before the altar.\nYou step back and wait.",
    choices: [
      { text: "Watch the smoke rise", nextScene: "god_responds", tag: "hopeful", feedback: "The smoke drifts sideways — thin, uncertain.", sentiment: "neutral" },
      { text: "Glance at Abel's offering", nextScene: "god_responds", tag: "comparing", feedback: "His lamb burns bright. The smoke climbs straight to heaven.", sentiment: "negative" },
    ],
  },
  offering_careless: {
    id: "offering_careless",
    title: "A Hasty Gift",
    text: "You toss your harvest onto the stone.\nIt sits there — ordinary, small.",
    choices: [
      { text: "Step back and wait", nextScene: "god_responds", tag: "indifferent", feedback: "The flames barely catch. The wind scatters ash.", sentiment: "negative" },
    ],
  },
  god_responds: {
    id: "god_responds",
    title: "The Answer",
    text: "Abel's offering burns with golden fire.\nYours lies cold. Untouched.",
    choices: [
      { text: "Feel the heat rise inside you", nextScene: "anger_rises", tag: "burning", feedback: "Something dark coils tight in your chest.", sentiment: "negative" },
      { text: "Try to understand", nextScene: "god_speaks", tag: "searching", feedback: "Why? You gave what you had. Wasn't it enough?", sentiment: "neutral" },
    ],
  },
  anger_rises: {
    id: "anger_rises",
    title: "The Fire Within",
    text: "Your jaw tightens. Your fists clench.\nAbel smiles — he doesn't even notice.",
    choices: [
      { text: "Storm away", nextScene: "god_speaks", tag: "furious", feedback: "You kick the dust. Your shadow stretches long and dark.", sentiment: "negative" },
      { text: "Stare at the ground", nextScene: "god_speaks", tag: "simmering", feedback: "You swallow the poison. It doesn't go down.", sentiment: "negative" },
    ],
  },
  god_speaks: {
    id: "god_speaks",
    title: "A Voice",
    text: "\"Why are you angry?\"\nThe voice is everywhere — inside you, above you.",
    choices: [
      { text: "\"It's not fair.\"", nextScene: "warning", tag: "defiant", feedback: "The words crack in your mouth like dry earth.", sentiment: "negative" },
      { text: "Listen carefully", nextScene: "warning", tag: "trembling", feedback: "Your heart pounds. You know the voice.", sentiment: "neutral" },
      { text: "Turn away", nextScene: "the_field", tag: "deaf", feedback: "You walk. The voice fades behind you.", sentiment: "negative" },
    ],
  },
  warning: {
    id: "warning",
    title: "The Warning",
    text: "\"Sin crouches at your door.\"\nThe words settle like stones in your chest.",
    choices: [
      { text: "\"I can master it.\"", nextScene: "the_field", tag: "proud", feedback: "Can you? Your hands are already shaking.", sentiment: "negative" },
      { text: "Try to breathe", nextScene: "struggle", tag: "fighting", feedback: "You close your eyes. The anger is still there — waiting.", sentiment: "neutral" },
    ],
  },
  struggle: {
    id: "struggle",
    title: "The Struggle",
    text: "You stand alone in the wind.\nTwo paths pull at you — mercy and rage.",
    choices: [
      { text: "Seek Abel out", nextScene: "the_field", tag: "drawn", feedback: "Your feet carry you toward him. You don't know why.", sentiment: "neutral" },
      { text: "Walk away — far away", nextScene: "the_field", tag: "fleeing", feedback: "But his face is already in your mind. You can't escape it.", sentiment: "negative" },
    ],
  },
  the_field: {
    id: "the_field",
    title: "The Field",
    text: "\"Come, let's walk together.\"\nAbel follows you into the open field.",
    choices: [
      { text: "Raise your hand", nextScene: "the_act", tag: "fallen", feedback: "The shadow moves before you do.", sentiment: "negative" },
      { text: "Try to speak", nextScene: "the_act", tag: "choking", feedback: "Words die in your throat. Something else takes over.", sentiment: "negative" },
    ],
  },
  the_act: {
    id: "the_act",
    title: "Silence",
    text: "The field goes still.\nAbel lies before you. The sky darkens.",
    choices: [
      { text: "Look at your hands", nextScene: "blood_cries", tag: "horror", feedback: "They are red. They won't stop shaking.", sentiment: "negative" },
      { text: "Run", nextScene: "blood_cries", tag: "fleeing", feedback: "Where? There is nowhere far enough.", sentiment: "negative" },
    ],
  },
  blood_cries: {
    id: "blood_cries",
    title: "The Ground Speaks",
    text: "\"Where is your brother?\"\nThe earth itself screams beneath your feet.",
    choices: [
      { text: "\"Am I my brother's keeper?\"", nextScene: "judgment", tag: "defiant", feedback: "The lie tastes like iron.", sentiment: "negative" },
      { text: "Fall to your knees", nextScene: "judgment", tag: "broken", feedback: "Your legs give out. You cannot stand before this voice.", sentiment: "neutral" },
    ],
  },
  judgment: {
    id: "judgment",
    title: "The Curse",
    text: "\"The ground will no longer yield for you.\"\nYou are marked. You are sent away.",
    choices: [
      { text: "\"My punishment is too great.\"", nextScene: "wanderer", tag: "despairing", feedback: "The weight crushes you — but you still breathe.", sentiment: "negative" },
      { text: "Accept it in silence", nextScene: "wanderer", tag: "resigned", feedback: "There are no words left. Only the road ahead.", sentiment: "neutral" },
    ],
  },
  wanderer: {
    id: "wanderer",
    title: "East of Everything",
    text: "You walk into the land of Nod.\nBehind you, the earth remembers what you did.",
    choices: [],
    isFinal: true,
  },
};
