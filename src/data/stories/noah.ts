import { StoryScene } from "@/data/stories/creation";

export const noahScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "The Voice from Above",
    text: "A voice fills the sky.\n\"Noah — build an ark. A flood is coming.\"",
    choices: [
      { text: "Doubt — this cannot be true", nextScene: "mockery", tag: "doubting", feedback: "The voice fades. But the weight in your chest remains.", isCorrect: false, sentiment: "negative" },
      { text: "\"Here I am. I will obey.\"", nextScene: "mockery", tag: "obedient", feedback: "Your voice trembles, but the words are true.", isCorrect: true, sentiment: "positive" },
      { text: "Ask why you were chosen", nextScene: "mockery", tag: "questioning", feedback: "No answer comes. Only the command remains.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mockery: {
    id: "mockery",
    title: "Voices of the Crowd",
    text: "Villagers gather, laughing.\n\"A boat? Here? You are mad, old man.\"",
    choices: [
      { text: "Shout back in anger", nextScene: "building", tag: "angry", feedback: "Your words only feed their mockery.", isCorrect: false, sentiment: "negative" },
      { text: "Stay silent and keep working", nextScene: "building", tag: "steadfast", feedback: "Their laughter fades behind your steady hands.", isCorrect: true, sentiment: "positive" },
      { text: "Beg them to believe", nextScene: "building", tag: "pleading", feedback: "They turn their backs. You are alone in faith.", isCorrect: false, sentiment: "negative" },
    ],
  },
  building: {
    id: "building",
    title: "Cypress and Pitch",
    text: "Years of sweat. Wood splits. Pitch seals.\nYour back aches, but the ark rises.",
    choices: [
      { text: "Rest a while, the work is endless", nextScene: "ark_done", tag: "weary", feedback: "Doubt creeps in with the silence.", isCorrect: false, sentiment: "negative" },
      { text: "Press on — God commanded it", nextScene: "ark_done", tag: "faithful", feedback: "Each plank is a prayer. Each beam, a promise.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ark_done: {
    id: "ark_done",
    title: "It Stands Finished",
    text: "The ark towers above you.\nYour family gathers, silent before the wood.",
    choices: [
      { text: "Boast to the watching crowd", nextScene: "animals", tag: "proud", feedback: "Pride poisons the work. You catch yourself.", isCorrect: false, sentiment: "negative" },
      { text: "Thank God for the strength given", nextScene: "animals", tag: "thankful", feedback: "Your knees bend. The work was never yours alone.", isCorrect: true, sentiment: "positive" },
    ],
  },
  animals: {
    id: "animals",
    title: "Two by Two",
    text: "Creatures come from every land.\nLions beside lambs. Eagles at your feet.",
    choices: [
      { text: "Drive the dangerous ones away", nextScene: "boarding", tag: "fearful", feedback: "Fear blinds you. God sent every one.", isCorrect: false, sentiment: "negative" },
      { text: "Welcome each pair gently", nextScene: "boarding", tag: "gentle", feedback: "They walk past you in peace, as if they always knew.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boarding: {
    id: "boarding",
    title: "The Door Closes",
    text: "Your family is inside. The animals settle.\nGod Himself shuts the door.",
    choices: [
      { text: "Run back out to warn them again", nextScene: "storm", tag: "anxious", feedback: "The door is sealed. The choice has been made.", isCorrect: false, sentiment: "negative" },
      { text: "Hold your wife's hand and wait", nextScene: "storm", tag: "trusting", feedback: "Together. Whatever comes — together.", isCorrect: true, sentiment: "positive" },
    ],
  },
  storm: {
    id: "storm",
    title: "The Heavens Open",
    text: "Rain crashes like nothing seen before.\nThe deep bursts. The world drowns.",
    choices: [
      { text: "Curse the sky in horror", nextScene: "inside", tag: "broken", feedback: "The sound swallows your cry.", isCorrect: false, sentiment: "negative" },
      { text: "Trust that God is just and merciful", nextScene: "inside", tag: "faithful", feedback: "You bow your head. The ark holds.", isCorrect: true, sentiment: "positive" },
      { text: "Try to pull strangers from the water", nextScene: "inside", tag: "desperate", feedback: "The door is sealed. There is nothing to be done.", isCorrect: false, sentiment: "negative" },
    ],
  },
  inside: {
    id: "inside",
    title: "Forty Days",
    text: "The ark rocks. The animals breathe.\nDays blur. Only the creak of wood remains.",
    choices: [
      { text: "Tend the creatures with care", nextScene: "dove", tag: "dutiful", feedback: "Purpose holds the darkness at bay.", isCorrect: true, sentiment: "positive" },
      { text: "Sit alone and let despair grow", nextScene: "dove", tag: "despairing", feedback: "The silence presses on you. Faith dims.", isCorrect: false, sentiment: "negative" },
    ],
  },
  dove: {
    id: "dove",
    title: "The Dove Returns",
    text: "You release a dove. Hours pass.\nIt comes back — an olive leaf in its beak.",
    choices: [
      { text: "Doubt — perhaps a stray branch", nextScene: "dry_land", tag: "doubting", feedback: "Even now, doubt fights to hold you.", isCorrect: false, sentiment: "negative" },
      { text: "Weep — life still grows", nextScene: "dry_land", tag: "grateful", feedback: "Tears fall on the small green leaf. Hope is real.", isCorrect: true, sentiment: "positive" },
    ],
  },
  dry_land: {
    id: "dry_land",
    title: "Earth Beneath Your Feet",
    text: "The door opens. Sun spills in.\nYou step onto warm, living mud.",
    choices: [
      { text: "Rush to claim the new land", nextScene: "covenant", tag: "greedy", feedback: "The land was never yours to claim.", isCorrect: false, sentiment: "negative" },
      { text: "Kneel and build an altar to God", nextScene: "covenant", tag: "worshipful", feedback: "The first stone is for the One who saved you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  covenant: {
    id: "covenant",
    title: "The Rainbow",
    text: "A rainbow arcs across the sky.\n\"Never again. This is my covenant with you.\"",
    choices: [],
    isFinal: true,
  },
};
