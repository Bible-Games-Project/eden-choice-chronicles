import { StoryScene } from "@/data/stories/creation";

// ABRAHAM IN EGYPT — Genesis 12:10-20
// You ARE Abraham. Fear, faith failure, divine protection.

export const abrahamEgyptScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "The Famine",
    text: "The promised land cracks under drought.\nFlocks weaken. Sarah grows thin.",
    choices: [
      { text: "Trust God and wait for rain", nextScene: "road_south", isCorrect: true, sentiment: "positive" },
      { text: "Curse the dry sky", nextScene: "road_south", isCorrect: false, sentiment: "negative" },
      { text: "Turn south to Egypt at once", nextScene: "road_south", isCorrect: false, sentiment: "negative" },
    ],
  },
  road_south: {
    id: "road_south",
    title: "The Road South",
    text: "Egypt promises grain. Sarah walks beside you, silent.\nThe horizon shimmers.",
    choices: [
      { text: "Pray before each step forward", nextScene: "fear_rises", isCorrect: true, sentiment: "positive" },
      { text: "Push on without a word to God", nextScene: "fear_rises", isCorrect: false, sentiment: "negative" },
    ],
  },
  fear_rises: {
    id: "fear_rises",
    title: "A Cold Thought",
    text: "Egyptians may kill you to take your wife.\nFear coils tight inside your chest.",
    choices: [
      { text: "Plot a lie to save yourself", nextScene: "the_lie", isCorrect: false, sentiment: "negative" },
      { text: "Trust God to guard you both", nextScene: "the_lie", isCorrect: true, sentiment: "positive" },
      { text: "Turn back to the famine", nextScene: "the_lie", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_lie: {
    id: "the_lie",
    title: "The Half-Truth",
    text: "Sarah's eyes find yours. \"Say you are my sister.\"\nThe words taste like ash.",
    choices: [
      { text: "Confess fear and speak truth", nextScene: "entering_egypt", isCorrect: true, sentiment: "positive" },
      { text: "Make her agree to the lie", nextScene: "entering_egypt", isCorrect: false, sentiment: "negative" },
    ],
  },
  entering_egypt: {
    id: "entering_egypt",
    title: "The Gates of Egypt",
    text: "The city teems. Eyes follow Sarah everywhere.\nWhispers reach the palace.",
    choices: [
      { text: "Stay close and shield her", nextScene: "officials_come", isCorrect: true, sentiment: "positive" },
      { text: "Step away to seem unrelated", nextScene: "officials_come", isCorrect: false, sentiment: "negative" },
      { text: "Boast of the gifts you'll receive", nextScene: "officials_come", isCorrect: false, sentiment: "negative" },
    ],
  },
  officials_come: {
    id: "officials_come",
    title: "Pharaoh's Officials",
    text: "An official arrives. \"Pharaoh has heard of her beauty.\"\nHis smile is polite. Sharp.",
    choices: [
      { text: "Repeat the lie — \"My sister\"", nextScene: "sarah_taken", isCorrect: false, sentiment: "negative" },
      { text: "Speak truth — \"She is my wife\"", nextScene: "sarah_taken", isCorrect: true, sentiment: "positive" },
    ],
  },
  sarah_taken: {
    id: "sarah_taken",
    title: "Alone",
    text: "They lead Sarah toward the palace.\nThe tent is suddenly unbearably quiet.",
    choices: [
      { text: "Fall to your knees and cry to God", nextScene: "gifts_arrive", isCorrect: true, sentiment: "positive" },
      { text: "Sit numb and count your losses", nextScene: "gifts_arrive", isCorrect: false, sentiment: "negative" },
    ],
  },
  gifts_arrive: {
    id: "gifts_arrive",
    title: "The Price of Silence",
    text: "Sheep, gold, servants — Pharaoh's payment.\nEach gift feels like a nail.",
    choices: [
      { text: "Accept them, hide the shame", nextScene: "plagues", isCorrect: false, sentiment: "negative" },
      { text: "Refuse them and beg God to act", nextScene: "plagues", isCorrect: true, sentiment: "positive" },
      { text: "Send them back to Pharaoh", nextScene: "plagues", isCorrect: false, sentiment: "negative" },
    ],
  },
  plagues: {
    id: "plagues",
    title: "God Strikes",
    text: "Sickness sweeps through Pharaoh's house.\nNo healer can name its cause.",
    choices: [
      { text: "Know that God has not forgotten", nextScene: "confronted", isCorrect: true, sentiment: "positive" },
      { text: "Fear what God will do to you", nextScene: "confronted", isCorrect: false, sentiment: "negative" },
    ],
  },
  confronted: {
    id: "confronted",
    title: "The Reckoning",
    text: "Pharaoh's voice shakes. \"Why did you do this?\nWhy did you say 'my sister'?\"",
    choices: [
      { text: "Make excuses for your fear", nextScene: "expelled", isCorrect: false, sentiment: "negative" },
      { text: "Bow your head — no defense", nextScene: "expelled", isCorrect: true, sentiment: "positive" },
      { text: "Blame the famine for it all", nextScene: "expelled", isCorrect: false, sentiment: "negative" },
    ],
  },
  expelled: {
    id: "expelled",
    title: "Sent Away",
    text: "\"Take your wife. Take it all. Go.\"\nGuards walk you to the border.",
    choices: [
      { text: "Walk ahead, too ashamed to look", nextScene: "altar", isCorrect: false, sentiment: "negative" },
      { text: "Reach for Sarah's hand in silence", nextScene: "altar", isCorrect: true, sentiment: "positive" },
    ],
  },
  altar: {
    id: "altar",
    title: "The Altar",
    text: "Back in the promised land, you build stones.\nThe promise stands — despite you.",
    isFinal: true,
    choices: [],
  },
};
