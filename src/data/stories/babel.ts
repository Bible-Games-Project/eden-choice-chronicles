import { StoryScene } from "@/data/stories/creation";

export const babelScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "One Voice",
    text: "The whole earth speaks one language.\nEvery word understood. Every voice in harmony.",
    choices: [
      { text: "Gather the people and speak", nextScene: "unity", tag: "leader", feedback: "They turn to you. They listen.", isCorrect: false, sentiment: "negative" },
      { text: "Marvel at the unity around you", nextScene: "unity", tag: "grateful", feedback: "It feels like nothing could ever divide you.", isCorrect: true, sentiment: "positive" },
      { text: "Wonder how long this can last", nextScene: "ambition_seed", tag: "uneasy", feedback: "A whisper in you — something restless.", isCorrect: false, sentiment: "negative" },
    ],
  },
  unity: {
    id: "unity",
    title: "The Plain of Shinar",
    text: "You settle on a great plain.\nThe land stretches endlessly — open, inviting.",
    choices: [
      { text: "Begin building homes together", nextScene: "first_bricks", tag: "communal", feedback: "Stone by stone, a settlement rises.", isCorrect: true, sentiment: "positive" },
      { text: "Claim the best land for yourself", nextScene: "ambition_seed", tag: "greedy", feedback: "Others notice. A flicker of envy spreads.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ambition_seed: {
    id: "ambition_seed",
    title: "A Restless Heart",
    text: "Something stirs inside you — a hunger.\nYou look at the sky and feel… small.",
    choices: [
      { text: "Accept your place beneath the heavens", nextScene: "first_bricks", tag: "humble", feedback: "The earth is enough. For now.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse to feel small", nextScene: "the_idea", tag: "proud", feedback: "You clench your fists. You will not be forgotten.", isCorrect: false, sentiment: "negative" },
      { text: "Share the feeling with others", nextScene: "first_bricks", tag: "honest", feedback: "They nod slowly. They feel it too.", isCorrect: false, sentiment: "negative" },
    ],
  },
  first_bricks: {
    id: "first_bricks",
    title: "Fire and Clay",
    text: "Someone discovers how to bake bricks — hard as stone.\nThe people cheer. Anything seems possible now.",
    choices: [
      { text: "\"Let us build something that lasts\"", nextScene: "the_idea", tag: "ambitious", feedback: "The words ignite something in every heart.", isCorrect: false, sentiment: "negative" },
      { text: "Use the bricks to shelter the weak", nextScene: "the_idea", tag: "compassionate", feedback: "Homes rise. But ambition rises faster.", isCorrect: true, sentiment: "positive" },
      { text: "\"We could reach the sky itself\"", nextScene: "the_idea", tag: "daring", feedback: "Eyes widen. The dream takes hold.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_idea: {
    id: "the_idea",
    title: "The Dream",
    text: "A voice rises from the crowd:\n\"Let us build a tower — its top in the heavens.\nLet us make a name for ourselves.\"",
    choices: [
      { text: "Join the vision with full heart", nextScene: "construction_begins", tag: "zealous", feedback: "You raise your fist. The crowd roars.", isCorrect: false, sentiment: "negative" },
      { text: "Question the purpose", nextScene: "doubt_rises", tag: "cautious", feedback: "\"But why? What are we reaching for?\"", isCorrect: true, sentiment: "positive" },
      { text: "Stay silent and observe", nextScene: "construction_begins", tag: "passive", feedback: "The tide carries you. You say nothing.", isCorrect: false, sentiment: "negative" },
    ],
  },
  doubt_rises: {
    id: "doubt_rises",
    title: "A Quiet Warning",
    text: "An elder pulls you aside.\n\"This is not building — this is defiance.\"",
    choices: [
      { text: "Listen to the elder's wisdom", nextScene: "construction_begins", tag: "wise", feedback: "You hear the words. But the hammers have already started.", isCorrect: true, sentiment: "positive" },
      { text: "Dismiss the old man", nextScene: "construction_begins", tag: "dismissive", feedback: "\"Times have changed, old one.\" He turns away, sorrow in his eyes.", isCorrect: false, sentiment: "negative" },
    ],
  },
  construction_begins: {
    id: "construction_begins",
    title: "The Foundation",
    text: "Thousands work as one.\nBrick upon brick. Mortar and sweat.\nThe tower begins to rise.",
    choices: [
      { text: "Work harder than anyone", nextScene: "tower_rising", tag: "driven", feedback: "Your hands bleed. But the tower climbs.", isCorrect: false, sentiment: "negative" },
      { text: "Encourage the weary workers", nextScene: "tower_rising", tag: "leader", feedback: "\"Higher! We are making history!\"", isCorrect: false, sentiment: "negative" },
      { text: "Pause and look up", nextScene: "tower_rising", tag: "reflective", feedback: "The sky seems no closer. A chill runs through you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  tower_rising: {
    id: "tower_rising",
    title: "Pride Ascends",
    text: "The tower grows taller than anything ever built.\nPeople climb for hours just to reach the top.\nFrom up here — you feel like gods.",
    choices: [
      { text: "\"Nothing can stop us now\"", nextScene: "gods_gaze", tag: "proud", feedback: "The words echo. Above — something stirs.", isCorrect: false, sentiment: "negative" },
      { text: "Feel a tremor of fear", nextScene: "gods_gaze", tag: "afraid", feedback: "Your hands shake. This height was not meant for you.", isCorrect: true, sentiment: "positive" },
      { text: "Look down at the people below", nextScene: "gods_gaze", tag: "detached", feedback: "They look so small. Were you ever that small?", isCorrect: false, sentiment: "negative" },
    ],
  },
  gods_gaze: {
    id: "gods_gaze",
    title: "The Eyes Above",
    text: "The air changes.\nA weight presses down — invisible, immense.\nSomething is watching.",
    choices: [
      { text: "Kneel instinctively", nextScene: "the_confusion", tag: "reverent", feedback: "Your knees hit stone. You know this feeling — it is holy.", isCorrect: true, sentiment: "positive" },
      { text: "Ignore it and keep building", nextScene: "the_confusion", tag: "defiant", feedback: "You lift another brick. Your arms feel heavier than before.", isCorrect: false, sentiment: "negative" },
      { text: "Warn the others", nextScene: "the_confusion", tag: "alert", feedback: "\"Something is wrong — stop!\" They don't listen.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_confusion: {
    id: "the_confusion",
    title: "Tongues Divide",
    text: "It happens in an instant.\nYou open your mouth — and the words come out wrong.\nThe man beside you speaks — you cannot understand him.",
    choices: [
      { text: "Try to speak again — louder", nextScene: "panic", tag: "desperate", feedback: "The sounds pour out — meaningless. Alien.", isCorrect: false, sentiment: "negative" },
      { text: "Reach out your hand in silence", nextScene: "panic", tag: "gentle", feedback: "He stares at your hand. His eyes are full of fear.", isCorrect: true, sentiment: "positive" },
      { text: "Cover your ears", nextScene: "panic", tag: "overwhelmed", feedback: "The noise is unbearable — a thousand voices, none making sense.", isCorrect: false, sentiment: "negative" },
    ],
  },
  panic: {
    id: "panic",
    title: "The Collapse",
    text: "Chaos erupts.\nWorkers shout at each other — none understand.\nTools fall. People flee the tower.",
    choices: [
      { text: "Try to hold the people together", nextScene: "scattering", tag: "leader", feedback: "You gesture, you plead — but your words reach no one.", isCorrect: true, sentiment: "positive" },
      { text: "Run with the others", nextScene: "scattering", tag: "survival", feedback: "You run. The tower shrinks behind you.", isCorrect: false, sentiment: "negative" },
      { text: "Climb higher — refuse to leave", nextScene: "scattering", tag: "stubborn", feedback: "You climb alone. The wind howls. There is nothing up here.", isCorrect: false, sentiment: "negative" },
    ],
  },
  scattering: {
    id: "scattering",
    title: "The Scattering",
    text: "Families split apart.\nGroups form around shared sounds — new languages, new peoples.\nThe plain empties. The tower stands abandoned.",
    choices: [
      { text: "Follow a group heading east", nextScene: "new_land", tag: "east", feedback: "You walk with strangers who share your strange new tongue.", isCorrect: false, sentiment: "negative" },
      { text: "Stay and mourn what was lost", nextScene: "new_land", tag: "grieving", feedback: "You sit in the shadow of the tower. Alone.", isCorrect: false, sentiment: "negative" },
      { text: "Accept and walk forward", nextScene: "new_land", tag: "accepting", feedback: "You don't look back. The road ahead is wide.", isCorrect: true, sentiment: "positive" },
    ],
  },
  new_land: {
    id: "new_land",
    title: "A New Beginning",
    text: "You find a new place — green, quiet, unfamiliar.\nThe old unity is gone. But something new grows here.",
    choices: [
      { text: "Build a home — humbly this time", nextScene: "reflection", tag: "humble", feedback: "Small stones. A simple roof. It is enough.", isCorrect: true, sentiment: "positive" },
      { text: "Remember the tower with longing", nextScene: "reflection", tag: "nostalgic", feedback: "The dream was beautiful. But it was not yours to keep.", isCorrect: false, sentiment: "negative" },
      { text: "Resent what was taken from you", nextScene: "reflection", tag: "bitter", feedback: "The anger burns. But slowly — it fades.", isCorrect: false, sentiment: "negative" },
    ],
  },
  reflection: {
    id: "reflection",
    title: "The Lesson",
    text: "You sit under open sky.\nThe stars are countless — far beyond any tower.\nYou were never meant to reach them. Only to marvel.",
    isFinal: true,
    choices: [],
  },
};
