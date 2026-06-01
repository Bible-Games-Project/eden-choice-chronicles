import { StoryScene } from "@/data/stories/creation";

// LOST SHEEP — Luke 15:1-7 / Matthew 18:10-14
// You walk with the shepherd as he leaves the ninety-nine to find one.

export const lostSheepScenes: Record<string, StoryScene> = {
  // ACT I — JESUS BEGINS THE PARABLE
  start: {
    id: "start",
    title: "A Question of Love",
    text: "Jesus sits on the hill and asks,\n\"What man, having a hundred sheep...?\"",
    choices: [
      { text: "Turn away from the small story", nextScene: "turn_consequence", tag: "doubtful", feedback: "Small stories hold great love.", isCorrect: false, sentiment: "negative" },
      { text: "Sit close and listen", nextScene: "flock", tag: "faithful", feedback: "His voice draws you in.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turn_consequence: {
    id: "turn_consequence",
    title: "Stay a While",
    text: "He tells it only for hearts like yours.\nCome back and hear.",
    choices: [
      { text: "Sit close and listen", nextScene: "flock", tag: "faithful", feedback: "Your heart softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE FLOCK
  flock: {
    id: "flock",
    title: "The Hundred",
    text: "A shepherd walks among his sheep,\nknowing each one by name.",
    choices: [
      { text: "Count only the strong ones", nextScene: "count_consequence", tag: "doubtful", feedback: "He counts every one.", isCorrect: false, sentiment: "negative" },
      { text: "Watch him know each face", nextScene: "lost", tag: "faithful", feedback: "He sees them all.", isCorrect: true, sentiment: "positive" },
    ],
  },
  count_consequence: {
    id: "count_consequence",
    title: "Each One Matters",
    text: "No sheep is worth less than another.\nNot in his eyes.",
    choices: [
      { text: "Watch him know each face", nextScene: "lost", tag: "faithful", feedback: "You begin to see.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — ONE WANDERS OFF
  lost: {
    id: "lost",
    title: "One Wanders",
    text: "A small lamb slips beyond the rocks,\nalone in the gathering dusk.",
    choices: [
      { text: "Say it deserves to be lost", nextScene: "blame_consequence", tag: "doubtful", feedback: "Lost is not deserved.", isCorrect: false, sentiment: "negative" },
      { text: "Feel the shepherd's quiet ache", nextScene: "leave", tag: "faithful", feedback: "Your heart bends with his.", isCorrect: true, sentiment: "positive" },
      { text: "Hope the wolves find it first", nextScene: "cruel_consequence", tag: "fearful", feedback: "He would never wish that.", isCorrect: false, sentiment: "negative" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Mercy First",
    text: "He does not weigh the lamb's fault.\nHe only wants it home.",
    choices: [
      { text: "Feel the shepherd's quiet ache", nextScene: "leave", tag: "faithful", feedback: "Mercy moves you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  cruel_consequence: {
    id: "cruel_consequence",
    title: "Love Goes After",
    text: "Heaven does not abandon the small.\nIt runs to find them.",
    choices: [
      { text: "Feel the shepherd's quiet ache", nextScene: "leave", tag: "faithful", feedback: "Your heart turns gentle.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — LEAVING THE NINETY-NINE
  leave: {
    id: "leave",
    title: "Leaving the Ninety-Nine",
    text: "He sets the flock by a sheltered rock,\nand turns toward the dark hills.",
    choices: [
      { text: "Tell him the one is not worth it", nextScene: "worth_consequence", tag: "doubtful", feedback: "To him, every one is worth it.", isCorrect: false, sentiment: "negative" },
      { text: "Walk with him into the dusk", nextScene: "search", tag: "faithful", feedback: "You follow without a word.", isCorrect: true, sentiment: "positive" },
    ],
  },
  worth_consequence: {
    id: "worth_consequence",
    title: "Worth of One",
    text: "He would leave ninety-nine for you.\nThat is how love counts.",
    choices: [
      { text: "Walk with him into the dusk", nextScene: "search", tag: "faithful", feedback: "Love changes the math.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE SEARCH
  search: {
    id: "search",
    title: "Through the Valley",
    text: "Through mist and stone he calls its name,\nlantern raised against the night.",
    choices: [
      { text: "Give up when the path is hard", nextScene: "giveup_consequence", tag: "fearful", feedback: "He will not give up on you.", isCorrect: false, sentiment: "negative" },
      { text: "Keep calling with him", nextScene: "found", tag: "faithful", feedback: "Your voice joins his.", isCorrect: true, sentiment: "positive" },
    ],
  },
  giveup_consequence: {
    id: "giveup_consequence",
    title: "He Keeps Going",
    text: "Tired feet do not turn him back.\nLove is stubborn that way.",
    choices: [
      { text: "Keep calling with him", nextScene: "found", tag: "faithful", feedback: "You press on.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — FOUND
  found: {
    id: "found",
    title: "Found",
    text: "At dawn he kneels in a quiet ravine,\nand lifts the trembling lamb.",
    choices: [
      { text: "Scold the lamb for wandering", nextScene: "scold_consequence", tag: "fearful", feedback: "He only cradles it.", isCorrect: false, sentiment: "negative" },
      { text: "Weep at the gentleness", nextScene: "carry", tag: "faithful", feedback: "Tears come quietly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  scold_consequence: {
    id: "scold_consequence",
    title: "Only Kindness",
    text: "Not one harsh word leaves his mouth.\nOnly kindness, only joy.",
    choices: [
      { text: "Weep at the gentleness", nextScene: "carry", tag: "faithful", feedback: "His tenderness disarms you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — CARRIED HOME
  carry: {
    id: "carry",
    title: "On His Shoulders",
    text: "He lays the lamb across his shoulders,\nand walks the long road home.",
    choices: [
      { text: "Ask him to set it down to walk", nextScene: "walk_consequence", tag: "doubtful", feedback: "He carries what is weak.", isCorrect: false, sentiment: "negative" },
      { text: "Walk beside him in silence", nextScene: "celebration", tag: "faithful", feedback: "Joy needs no words.", isCorrect: true, sentiment: "positive" },
    ],
  },
  walk_consequence: {
    id: "walk_consequence",
    title: "He Carries You",
    text: "The lost are too tired to walk alone.\nLet him carry.",
    choices: [
      { text: "Walk beside him in silence", nextScene: "celebration", tag: "faithful", feedback: "You let him lift it.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — REJOICING
  celebration: {
    id: "celebration",
    title: "Rejoice With Me",
    text: "He calls his friends, eyes shining,\n\"Rejoice! I have found my lost one.\"",
    choices: [
      { text: "Envy the lamb's welcome", nextScene: "envy_consequence", tag: "doubtful", feedback: "The welcome is yours too.", isCorrect: false, sentiment: "negative" },
      { text: "Rejoice with the shepherd", nextScene: "ending", tag: "faithful", feedback: "Your joy spills over.", isCorrect: true, sentiment: "positive" },
    ],
  },
  envy_consequence: {
    id: "envy_consequence",
    title: "Joy for Each",
    text: "Heaven rejoices over every one.\nEvery one means you.",
    choices: [
      { text: "Rejoice with the shepherd", nextScene: "ending", tag: "faithful", feedback: "Envy melts into joy.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "Heaven's Joy",
    text: "Jesus smiles at you in the warm light.\n\"So heaven rejoices over one.\"",
    choices: [],
    isFinal: true,
  },
};
