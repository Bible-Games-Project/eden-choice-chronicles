import { StoryScene } from "@/data/stories/creation";

export const noahScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "A Broken World",
    text: "The earth groans under violence.\nEvery face you pass is hollow — cruel.",
    choices: [
      { text: "Pray for the world", nextScene: "prayer", tag: "faithful", feedback: "You kneel. The silence above feels heavier than before.", sentiment: "positive" },
      { text: "Turn away and tend your family", nextScene: "family", tag: "protective", feedback: "Your sons gather close. At least here — there is goodness.", sentiment: "neutral" },
      { text: "Confront the wicked", nextScene: "confront", tag: "bold", feedback: "They laugh. Their eyes are empty.", sentiment: "negative" },
    ],
  },
  prayer: {
    id: "prayer",
    title: "On Your Knees",
    text: "You pray until your knees ache.\nThe sky seems to listen.",
    choices: [
      { text: "Wait for an answer", nextScene: "god_speaks", tag: "patient", feedback: "Hours pass. Then — a voice.", sentiment: "positive" },
      { text: "Rise and walk home", nextScene: "family", tag: "weary", feedback: "You stand. The world hasn't changed. But something in you has.", sentiment: "neutral" },
    ],
  },
  family: {
    id: "family",
    title: "Your Household",
    text: "Shem, Ham, and Japheth sit by the fire.\nYour wife watches you — she knows something is coming.",
    choices: [
      { text: "Tell them about the darkness", nextScene: "confront", tag: "honest", feedback: "Their faces harden. They see it too.", sentiment: "neutral" },
      { text: "Sit with them in silence", nextScene: "god_speaks", tag: "quiet", feedback: "No words. Just presence. Then — a voice breaks the night.", sentiment: "positive" },
    ],
  },
  confront: {
    id: "confront",
    title: "Voices in the Dark",
    text: "The people mock you.\n\"Old fool — talking to the sky.\"",
    choices: [
      { text: "Ignore them and walk on", nextScene: "god_speaks", tag: "steadfast", feedback: "Their laughter fades behind you. Ahead — only silence.", sentiment: "positive" },
      { text: "Feel the sting of their words", nextScene: "god_speaks", tag: "wounded", feedback: "It hurts. But the voice that matters hasn't spoken yet.", sentiment: "neutral" },
    ],
  },
  god_speaks: {
    id: "god_speaks",
    title: "The Voice",
    text: "\"Noah.\"\nThe word fills the air — heavier than thunder.",
    choices: [
      { text: "\"Here I am.\"", nextScene: "the_command", tag: "obedient", feedback: "Your voice trembles. But you answer.", sentiment: "positive" },
      { text: "Fall silent — listen", nextScene: "the_command", tag: "reverent", feedback: "You dare not speak. The presence is overwhelming.", sentiment: "neutral" },
      { text: "\"Why me?\"", nextScene: "the_command", tag: "doubting", feedback: "The question hangs. No answer — only the command.", sentiment: "negative" },
    ],
  },
  the_command: {
    id: "the_command",
    title: "Build",
    text: "\"Make yourself an ark of cypress wood.\"\nThe dimensions are impossible. The task — enormous.",
    choices: [
      { text: "Begin immediately", nextScene: "building_start", tag: "faithful", feedback: "You pick up the first tool. Your hands know what to do.", sentiment: "positive" },
      { text: "Ask your sons for help", nextScene: "sons_help", tag: "wise", feedback: "They look at each other. Then they nod.", sentiment: "positive" },
      { text: "Hesitate — this is madness", nextScene: "doubt", tag: "afraid", feedback: "An ark? For what? There is no sea here.", sentiment: "negative" },
    ],
  },
  building_start: {
    id: "building_start",
    title: "The First Cut",
    text: "Wood splits under your axe.\nThe sound echoes — strange and holy.",
    choices: [
      { text: "Work through the night", nextScene: "building_progress", tag: "driven", feedback: "Stars wheel overhead. Your arms burn. But the frame grows.", sentiment: "positive" },
      { text: "Pace yourself — this will take years", nextScene: "building_progress", tag: "patient", feedback: "Day by day. Plank by plank. Faith measured in splinters.", sentiment: "neutral" },
    ],
  },
  sons_help: {
    id: "sons_help",
    title: "Together",
    text: "Your sons lift the beams beside you.\nTheir faith is fragile — but present.",
    choices: [
      { text: "Encourage them", nextScene: "building_progress", tag: "fatherly", feedback: "\"God will show us. Keep building.\"", sentiment: "positive" },
      { text: "Work in silence together", nextScene: "building_progress", tag: "united", feedback: "No speeches needed. The work speaks.", sentiment: "neutral" },
    ],
  },
  doubt: {
    id: "doubt",
    title: "The Weight of Faith",
    text: "Your neighbors stare.\n\"What are you building, old man?\"",
    choices: [
      { text: "\"What God commanded.\"", nextScene: "building_start", tag: "defiant", feedback: "They shake their heads. But you lift the axe.", sentiment: "positive" },
      { text: "Say nothing — just build", nextScene: "building_start", tag: "resolute", feedback: "Words are wasted on the deaf. Let the wood speak.", sentiment: "neutral" },
    ],
  },
  building_progress: {
    id: "building_progress",
    title: "Rising",
    text: "The ark takes shape — massive, impossible.\nYears pass. The world grows darker.",
    choices: [
      { text: "Seal it with pitch", nextScene: "ark_complete", tag: "thorough", feedback: "Every crack filled. Every seam sealed. It must hold.", sentiment: "positive" },
      { text: "Look at the sky — something is changing", nextScene: "gathering_animals", tag: "watchful", feedback: "The clouds gather differently now. Heavier.", sentiment: "neutral" },
    ],
  },
  ark_complete: {
    id: "ark_complete",
    title: "It Is Finished",
    text: "The ark stands before you — towering, dark.\nA monument to faith or madness.",
    choices: [
      { text: "Walk inside", nextScene: "gathering_animals", tag: "ready", feedback: "The wood groans under your step. It is solid. It will hold.", sentiment: "positive" },
      { text: "Look back at the world", nextScene: "last_warning", tag: "sorrowful", feedback: "Children play in the distance. They don't know.", sentiment: "neutral" },
    ],
  },
  last_warning: {
    id: "last_warning",
    title: "One Last Chance",
    text: "You call out to the people one final time.\nThey throw stones. They curse your name.",
    choices: [
      { text: "Weep for them", nextScene: "gathering_animals", tag: "compassionate", feedback: "Tears fall. They will never know what you tried to give them.", sentiment: "neutral" },
      { text: "Turn toward the ark", nextScene: "gathering_animals", tag: "resolved", feedback: "You've done all you can. The rest belongs to God.", sentiment: "positive" },
    ],
  },
  gathering_animals: {
    id: "gathering_animals",
    title: "Two by Two",
    text: "They come from everywhere — pairs of every kind.\nLions walk beside lambs. Eagles land at your feet.",
    choices: [
      { text: "Guide them gently inside", nextScene: "boarding", tag: "gentle", feedback: "Each creature finds its place. As if they always knew.", sentiment: "positive" },
      { text: "Marvel at the sight", nextScene: "boarding", tag: "awed", feedback: "You've never seen anything like this. Creation walks toward you.", sentiment: "positive" },
      { text: "Count them — make sure none are missing", nextScene: "boarding", tag: "careful", feedback: "Two of each. Not one forgotten. God keeps His word.", sentiment: "neutral" },
    ],
  },
  boarding: {
    id: "boarding",
    title: "The Door",
    text: "Your family enters. The animals settle.\nGod shuts the door behind you.",
    choices: [
      { text: "Press your hand against the door", nextScene: "the_rain", tag: "grieving", feedback: "The world outside goes silent. Then — the first drop.", sentiment: "neutral" },
      { text: "Hold your wife's hand", nextScene: "the_rain", tag: "united", feedback: "She squeezes back. Whatever comes — together.", sentiment: "positive" },
    ],
  },
  the_rain: {
    id: "the_rain",
    title: "The Flood",
    text: "Rain falls like nothing you've ever seen.\nThe earth splits. Water rises from below.",
    choices: [
      { text: "Pray for those outside", nextScene: "the_deep", tag: "merciful", feedback: "Your lips move but the thunder swallows every word.", sentiment: "neutral" },
      { text: "Trust that God is just", nextScene: "the_deep", tag: "trusting", feedback: "Justice and mercy — you cannot hold both. But God can.", sentiment: "positive" },
      { text: "Cover your ears from the screaming", nextScene: "the_deep", tag: "broken", feedback: "The sounds will haunt you forever.", sentiment: "negative" },
    ],
  },
  the_deep: {
    id: "the_deep",
    title: "Forty Days",
    text: "The ark rocks on endless water.\nNo land. No horizon. Only gray.",
    choices: [
      { text: "Care for the animals", nextScene: "waiting", tag: "dutiful", feedback: "They depend on you. Purpose keeps the darkness at bay.", sentiment: "positive" },
      { text: "Sit in the dark and wait", nextScene: "waiting", tag: "patient", feedback: "Time loses meaning. Faith is all that holds you.", sentiment: "neutral" },
    ],
  },
  waiting: {
    id: "waiting",
    title: "The Long Silence",
    text: "Days blur together.\nYour sons grow restless. Your wife prays without ceasing.",
    choices: [
      { text: "Open the window", nextScene: "the_raven", tag: "hopeful", feedback: "Light floods in — gray, but real. The rain has stopped.", sentiment: "positive" },
      { text: "Keep faith — God will speak", nextScene: "the_raven", tag: "steadfast", feedback: "You wait. And wait. And then — silence. The rain has stopped.", sentiment: "positive" },
      { text: "Doubt creeps in", nextScene: "the_raven", tag: "wavering", feedback: "Has He forgotten you? No. The water is receding.", sentiment: "negative" },
    ],
  },
  the_raven: {
    id: "the_raven",
    title: "The Raven",
    text: "You send out a raven.\nIt flies and flies — but does not return.",
    choices: [
      { text: "Send a dove", nextScene: "the_dove", tag: "patient", feedback: "The dove leaves your hand — fragile, white, full of purpose.", sentiment: "positive" },
      { text: "Wait longer", nextScene: "the_dove", tag: "cautious", feedback: "Time stretches. Then you reach for the dove.", sentiment: "neutral" },
    ],
  },
  the_dove: {
    id: "the_dove",
    title: "The Dove Returns",
    text: "The dove comes back with an olive branch.\nGreen — alive — impossible.",
    choices: [
      { text: "Weep with joy", nextScene: "dry_land", tag: "grateful", feedback: "Tears fall on the small green leaf. Life survives.", sentiment: "positive" },
      { text: "Show your family", nextScene: "dry_land", tag: "sharing", feedback: "They gather around. Hope — real, tangible — in your hand.", sentiment: "positive" },
    ],
  },
  dry_land: {
    id: "dry_land",
    title: "New Earth",
    text: "The waters recede. Mountains appear.\nThe door opens — and sunlight floods in.",
    choices: [
      { text: "Step onto the earth", nextScene: "the_altar", tag: "first_step", feedback: "Your feet touch mud. Warm, alive. The world begins again.", sentiment: "positive" },
      { text: "Let the animals go first", nextScene: "the_altar", tag: "humble", feedback: "They rush out — joyful, wild, free. Creation breathes again.", sentiment: "positive" },
    ],
  },
  the_altar: {
    id: "the_altar",
    title: "The Sacrifice",
    text: "You build an altar — the first thing on the new earth.\nThe smoke rises. God breathes it in.",
    choices: [
      { text: "\"Never again.\"", nextScene: "the_rainbow", tag: "pleading", feedback: "The words escape you — half prayer, half cry.", sentiment: "neutral" },
      { text: "Kneel in gratitude", nextScene: "the_rainbow", tag: "thankful", feedback: "You survived. Not by strength — by obedience.", sentiment: "positive" },
    ],
  },
  the_rainbow: {
    id: "the_rainbow",
    title: "The Covenant",
    text: "A rainbow arcs across the sky — every color blazing.\n\"Never again will I destroy the earth with water.\"",
    choices: [],
    isFinal: true,
  },
};
