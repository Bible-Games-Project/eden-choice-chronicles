import { StoryChoice, StoryScene, ChoiceSentiment } from "@/data/stories/creation";

export const adamEveScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "The Garden of Eden",
    text: "You open your eyes.\nEverything is golden, warm, alive.",
    choices: [
      { text: "Approach the animals", nextScene: "animals", tag: "curious", feedback: "They gather around you — trusting, unafraid.", isCorrect: true, sentiment: "positive" },
      { text: "Follow the sound of water", nextScene: "river", tag: "explorer", feedback: "The current calls you forward — cool, inviting.", isCorrect: false, sentiment: "negative" },
      { text: "Be still. Just breathe.", nextScene: "meditation", tag: "contemplative", feedback: "You inhale. The whole garden breathes with you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  animals: {
    id: "animals",
    title: "Among the Creatures",
    text: "A lion breathes warmth into your hand.\nIt does not fear you.",
    choices: [
      { text: "Give them names", nextScene: "naming", tag: "steward", feedback: "Words form on your tongue — the first names ever spoken.", isCorrect: true, sentiment: "positive" },
      { text: "Play with them", nextScene: "play", tag: "joyful", feedback: "You run, they follow — laughing without sound.", isCorrect: true, sentiment: "positive" },
      { text: "Walk deeper into the garden", nextScene: "flowers", tag: "wanderer", feedback: "Something pulls you inward — past the trees, past the light.", isCorrect: false, sentiment: "negative" },
    ],
  },
  river: {
    id: "river",
    title: "The River of Life",
    text: "Crystal water splits into four streams.\nThe river hums beneath your feet.",
    choices: [
      { text: "Swim toward the flowers", nextScene: "flowers", tag: "adventurous", feedback: "You plunge in. The water holds you like a hymn.", isCorrect: true, sentiment: "positive" },
      { text: "Follow the river upstream", nextScene: "upstream", tag: "seeker", feedback: "The current resists — but something glows ahead.", isCorrect: false, sentiment: "negative" },
      { text: "Rest and listen", nextScene: "meditation_river", tag: "peaceful", feedback: "You sit. The river whispers secrets you almost understand.", isCorrect: false, sentiment: "negative" },
    ],
  },
  meditation: {
    id: "meditation",
    title: "Stillness",
    text: "You close your eyes.\nA presence settles — vast and tender.",
    choices: [
      { text: "Seek the animals", nextScene: "animals", tag: "connected", feedback: "You hear them calling — soft, expectant.", isCorrect: true, sentiment: "positive" },
      { text: "Wander toward the flowers", nextScene: "flowers", tag: "inspired", feedback: "Color catches your eye — impossible, beautiful.", isCorrect: false, sentiment: "negative" },
      { text: "Go deeper into the garden", nextScene: "deep_garden", tag: "bold", feedback: "Your feet move on their own. The center pulls.", isCorrect: false, sentiment: "negative" },
    ],
  },
  naming: {
    id: "naming",
    title: "The Gift of Names",
    text: "Every creature comes in pairs.\nYou are the only one alone.",
    choices: [
      { text: "Walk through the loneliness", nextScene: "deep_garden", tag: "lonely", feedback: "The ache sharpens. None of them can know you.", isCorrect: false, sentiment: "negative" },
      { text: "Sit among the flowers", nextScene: "flowers", tag: "reflective", feedback: "You sit — surrounded by beauty, touched by sadness.", isCorrect: true, sentiment: "positive" },
    ],
  },
  play: {
    id: "play",
    title: "Innocent Joy",
    text: "You laugh — the first laughter ever.\nIt rings through paradise like a bell.",
    choices: [
      { text: "Chase a butterfly deeper", nextScene: "deep_garden", tag: "carefree", feedback: "Wings flash gold. You follow without thinking.", isCorrect: false, sentiment: "negative" },
      { text: "Follow the scent of flowers", nextScene: "flowers", tag: "drawn", feedback: "Sweetness drifts toward you — heady, magnetic.", isCorrect: true, sentiment: "positive" },
    ],
  },
  flowers: {
    id: "flowers",
    title: "The Meadow of Colors",
    text: "Roses dark as night. Orchids that shift color.\nA faint path leads between ancient trees.",
    choices: [
      { text: "Weave a garland", nextScene: "garland", tag: "tender", feedback: "Your fingers work gently — who will wear it?", isCorrect: false, sentiment: "negative" },
      { text: "Follow the path", nextScene: "approach_tree", tag: "curious_path", feedback: "The trees lean close. The air grows thick.", isCorrect: false, sentiment: "negative" },
      { text: "Lie down and gaze at the sky", nextScene: "sky_gaze", tag: "dreamer", feedback: "Stars open above you — infinite, watching.", isCorrect: true, sentiment: "positive" },
    ],
  },
  upstream: {
    id: "upstream",
    title: "The Source",
    text: "The river springs from living rock.\nTiny rainbows dance in the mist.",
    choices: [
      { text: "Descend toward the center", nextScene: "approach_tree", tag: "drawn_center", feedback: "The garden's heart beats below. You feel it.", isCorrect: false, sentiment: "negative" },
      { text: "Return to the flowers", nextScene: "flowers", tag: "returning", feedback: "You turn back. The flowers wait — patient, perfect.", isCorrect: true, sentiment: "positive" },
    ],
  },
  meditation_river: {
    id: "meditation_river",
    title: "Peace by the Water",
    text: "Time dissolves.\nSomething calls from the heart of the garden.",
    choices: [
      { text: "Answer the call", nextScene: "deep_garden", tag: "called", feedback: "You stand. The pull is undeniable now.", isCorrect: false, sentiment: "negative" },
      { text: "Visit the animals", nextScene: "animals", tag: "caring", feedback: "You rise — they need you. Or you need them.", isCorrect: true, sentiment: "positive" },
    ],
  },
  deep_garden: {
    id: "deep_garden",
    title: "The Heart of Eden",
    text: "Two trees stand apart from all others.\nOne blazes with life. The other is dark and beautiful.",
    choices: [
      { text: "Approach the Tree of Life", nextScene: "tree_of_life", tag: "wise", feedback: "Golden light washes over you. Warmth deepens.", isCorrect: true, sentiment: "positive" },
      { text: "Approach the dark tree", nextScene: "forbidden_tree", tag: "tempted", feedback: "The fruit hangs low. Something whispers your name.", isCorrect: false, sentiment: "negative" },
      { text: "Rest beneath a fig tree", nextScene: "fig_rest", tag: "cautious", feedback: "You sit in the shade. Eyes watch from the branches.", isCorrect: false, sentiment: "negative" },
    ],
  },
  garland: {
    id: "garland",
    title: "A Crown of Flowers",
    text: "You weave roses and jasmine.\nWho would wear it? There is no one else.",
    choices: [
      { text: "Walk toward the center", nextScene: "deep_garden", tag: "yearning", feedback: "The ache rises — beautiful and unbearable.", isCorrect: false, sentiment: "negative" },
      { text: "Keep exploring", nextScene: "upstream", tag: "restless", feedback: "Movement helps. You press onward.", isCorrect: true, sentiment: "positive" },
    ],
  },
  sky_gaze: {
    id: "sky_gaze",
    title: "The Heavens Above",
    text: "Stars open like eyes.\nYou feel impossibly small. Impossibly loved.",
    choices: [
      { text: "Follow the pull toward the center", nextScene: "deep_garden", tag: "destined", feedback: "Something waits for you. It has always waited.", isCorrect: false, sentiment: "negative" },
      { text: "Walk toward an ancient path", nextScene: "approach_tree", tag: "night_walker", feedback: "Moonlight shows the way — silver and certain.", isCorrect: true, sentiment: "positive" },
    ],
  },
  approach_tree: {
    id: "approach_tree",
    title: "The Ancient Path",
    text: "The trees grow older here, taller.\nSomething sacred — or dangerous — waits ahead.",
    choices: [
      { text: "Continue toward the center", nextScene: "deep_garden", tag: "determined", feedback: "The path narrows. Your heart quickens.", isCorrect: false, sentiment: "negative" },
      { text: "Turn back to the meadow", nextScene: "flowers", tag: "cautious", feedback: "You pause. The flowers call you back — safe, familiar.", isCorrect: true, sentiment: "positive" },
      { text: "Rest beneath a fig tree", nextScene: "fig_rest", tag: "resting", feedback: "You sit in the shade. The silence deepens.", isCorrect: false, sentiment: "negative" },
    ],
  },
  tree_of_life: {
    id: "tree_of_life",
    title: "The Tree of Life",
    text: "Its fruit tastes like sunlight.\nBut your eyes drift to the other tree.",
    choices: [
      { text: "Turn away", nextScene: "sleep", tag: "resistant", feedback: "You force your gaze elsewhere. But the pull remains.", isCorrect: true, sentiment: "positive" },
      { text: "Step toward it", nextScene: "forbidden_tree", tag: "falling", feedback: "One step. Then another. The dark tree waits.", isCorrect: false, sentiment: "negative" },
    ],
  },
  fig_rest: {
    id: "fig_rest",
    title: "Beneath the Fig Tree",
    text: "A serpent watches from the dark tree.\nIts ancient eyes seem to know you.",
    choices: [
      { text: "Ignore it", nextScene: "sleep", tag: "wary", feedback: "You close your eyes. But the gaze lingers.", isCorrect: true, sentiment: "positive" },
      { text: "Approach the serpent's tree", nextScene: "forbidden_tree", tag: "curious_serpent", feedback: "Your feet carry you closer. The serpent smiles.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sleep: {
    id: "sleep",
    title: "A Deep Sleep",
    text: "God's hand touches your brow.\nYou fall into the deepest sleep — and dream of someone.",
    choices: [
      { text: "Reach toward the dream", nextScene: "eve_appears", tag: "longing", feedback: "In the dream, a face — familiar, beautiful.", isCorrect: true, sentiment: "positive" },
      { text: "Surrender to the dark", nextScene: "eve_appears_gentle", tag: "trusting", feedback: "You let go. Warmth fills the emptiness.", isCorrect: true, sentiment: "positive" },
    ],
  },
  eve_appears: {
    id: "eve_appears",
    title: "Bone of My Bone",
    text: "You wake — and she is there.\n\"This one is flesh of my flesh.\"",
    choices: [
      { text: "Take her hand", nextScene: "paradise_together", tag: "united", feedback: "Her hand is warm. You are no longer alone.", isCorrect: true, sentiment: "positive" },
      { text: "Show her the garden", nextScene: "eden_walk", tag: "generous", feedback: "You reach out — everything you know is now hers too.", isCorrect: true, sentiment: "positive" },
    ],
  },
  eve_appears_gentle: {
    id: "eve_appears_gentle",
    title: "Bone of My Bone",
    text: "You open your eyes. She stands before you — perfect, alive.\nThe ache in your chest is gone.",
    choices: [
      { text: "Speak to her", nextScene: "paradise_together", tag: "tender", feedback: "Words form — the first ever spoken to another.", isCorrect: true, sentiment: "positive" },
      { text: "Walk together in silence", nextScene: "eden_walk", tag: "intimate", feedback: "No words needed. You walk side by side.", isCorrect: true, sentiment: "positive" },
    ],
  },
  paradise_together: {
    id: "paradise_together",
    title: "Paradise",
    text: "You walk together — naked, unashamed.\nEvery fruit is yours. Every path open.",
    choices: [
      { text: "Show her the Tree of Life", nextScene: "eden_walk", tag: "protective", feedback: "You lead her toward the golden tree — safe, good.", isCorrect: true, sentiment: "positive" },
      { text: "Wander toward the center", nextScene: "approach_tree_together", tag: "curious_together", feedback: "You walk deeper. She follows, trusting.", isCorrect: false, sentiment: "negative" },
    ],
  },
  eden_walk: {
    id: "eden_walk",
    title: "Walking in Eden",
    text: "She names the flowers you missed.\nHer laugh fills the spaces your voice couldn't reach.",
    choices: [
      { text: "Explore further together", nextScene: "approach_tree_together", tag: "bonded", feedback: "Hand in hand, you press deeper into the garden.", isCorrect: false, sentiment: "negative" },
      { text: "Stay here — this is enough", nextScene: "approach_tree_together", tag: "content", feedback: "But the garden is vast. And curiosity is older than fear.", isCorrect: false, sentiment: "negative" },
    ],
  },
  approach_tree_together: {
    id: "approach_tree_together",
    title: "The Path Narrows",
    text: "The air grows heavy. Too sweet.\nA whisper drifts from the shadows.",
    choices: [
      { text: "Listen to the whisper", nextScene: "serpent_speaks", tag: "listening", feedback: "The voice is smooth — like honey, like poison.", isCorrect: false, sentiment: "negative" },
      { text: "Try to turn back", nextScene: "serpent_speaks", tag: "reluctant", feedback: "Your feet slow. But she has already stopped to listen.", isCorrect: false, sentiment: "negative" },
    ],
  },
  forbidden_tree: {
    id: "forbidden_tree",
    title: "The Forbidden Tree",
    text: "The fruit glows softly in the dusk.\nYou hear a voice — not God's.",
    choices: [
      { text: "Listen to the serpent", nextScene: "serpent_speaks", tag: "curious", feedback: "The serpent coils closer. Its words are sweet.", isCorrect: false, sentiment: "negative" },
      { text: "Step back — remember the warning", nextScene: "sleep", tag: "obedient", feedback: "You retreat. But the image stays behind your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  serpent_speaks: {
    id: "serpent_speaks",
    title: "The Serpent",
    text: "\"Did God really say you must not eat?\"\nThe question cuts deeper than you expected.",
    choices: [
      { text: "Hesitate — consider the question", nextScene: "temptation", tag: "doubting", feedback: "Silence. The serpent waits — patient, knowing.", isCorrect: false, sentiment: "negative" },
      { text: "Defend what God said", nextScene: "temptation", tag: "defending", feedback: "Your words sound right. But something in you wavers.", isCorrect: true, sentiment: "positive" },
      { text: "Look at the fruit", nextScene: "temptation", tag: "drawn", feedback: "Your eyes drift to it. Beautiful. Desirable.", isCorrect: false, sentiment: "negative" },
    ],
  },
  temptation: {
    id: "temptation",
    title: "The Choice",
    text: "\"You will not die. Your eyes will be opened.\"\nThe fruit hangs within reach — and she reaches first.",
    choices: [
      { text: "Watch her eat", nextScene: "the_fall", tag: "passive", feedback: "She bites. Her eyes change. She offers it to you.", isCorrect: false, sentiment: "negative" },
      { text: "Take it from her hand", nextScene: "the_fall", tag: "willing", feedback: "You reach out. Your fingers close around the fruit.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_fall: {
    id: "the_fall",
    title: "The Fall",
    text: "The fruit touches your lips.\nSweetness. Then bitterness. Then — you know.",
    choices: [
      { text: "Look at each other", nextScene: "shame", tag: "aware", feedback: "Her eyes meet yours. Something has broken.", isCorrect: false, sentiment: "negative" },
      { text: "Look down at yourself", nextScene: "shame", tag: "exposed", feedback: "You see yourself — truly — for the first time. And tremble.", isCorrect: false, sentiment: "negative" },
    ],
  },
  shame: {
    id: "shame",
    title: "Naked",
    text: "You are naked.\nFor the first time, you feel it — raw, burning shame.",
    choices: [
      { text: "Grab fig leaves — cover yourself", nextScene: "hiding", tag: "ashamed", feedback: "Your hands shake. The leaves barely hold.", isCorrect: false, sentiment: "negative" },
      { text: "Try to hide among the trees", nextScene: "hiding", tag: "fleeing", feedback: "You stumble backward — deeper into shadow.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hiding: {
    id: "hiding",
    title: "Hiding from God",
    text: "\"Where are you?\"\nHis voice fills the garden — and you cannot move.",
    choices: [
      { text: "\"I was afraid… I was naked\"", nextScene: "judgment", tag: "confessing", feedback: "The words fall from you — broken, honest.", isCorrect: true, sentiment: "positive" },
      { text: "Stay silent — press into the dark", nextScene: "judgment", tag: "hiding", feedback: "You hold your breath. But He already knows.", isCorrect: false, sentiment: "negative" },
    ],
  },
  judgment: {
    id: "judgment",
    title: "The Reckoning",
    text: "\"Who told you that you were naked?\"\nThe question splits you open.",
    choices: [
      { text: "\"The woman gave it to me\"", nextScene: "expulsion", tag: "blaming", feedback: "You point. She looks away. The serpent coils tighter.", isCorrect: false, sentiment: "negative" },
      { text: "Say nothing — bow your head", nextScene: "expulsion", tag: "silent", feedback: "Words fail. You lower your eyes.", isCorrect: true, sentiment: "positive" },
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
