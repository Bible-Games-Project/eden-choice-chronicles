import { StoryScene } from "@/data/stories/creation";

// CALL OF ABRAHAM — Genesis 12
// You ARE Abraham. Faith, obedience, trust into the unknown.

export const abrahamScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "A Life in Ur",
    text: "Seventy-five years behind you.\nThe city hums. Your heart is restless.",
    choices: [
      { text: "Bow before the household idols", nextScene: "the_call", isCorrect: false, sentiment: "negative" },
      { text: "Step to the rooftop and listen", nextScene: "the_call", isCorrect: true, sentiment: "positive" },
      { text: "Bury the longing in work", nextScene: "the_call", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_call: {
    id: "the_call",
    title: "The Voice",
    text: "A voice — clear, unmistakable.\n\"Leave your land. Go where I will show you.\"",
    choices: [
      { text: "Cover your ears in fear", nextScene: "the_promise", isCorrect: false, sentiment: "negative" },
      { text: "Kneel and answer \"Here I am\"", nextScene: "the_promise", isCorrect: true, sentiment: "positive" },
      { text: "Demand proof of His name", nextScene: "the_promise", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_promise: {
    id: "the_promise",
    title: "The Promise",
    text: "\"I will make of you a great nation.\nAll peoples will be blessed through you.\"",
    choices: [
      { text: "Doubt — you have no son", nextScene: "telling_sarah", isCorrect: false, sentiment: "negative" },
      { text: "Receive the words in silence", nextScene: "telling_sarah", isCorrect: true, sentiment: "positive" },
    ],
  },
  telling_sarah: {
    id: "telling_sarah",
    title: "Telling Sarah",
    text: "Sarah's eyes search yours.\n\"What did the voice ask of us?\"",
    choices: [
      { text: "Hide the truth to spare her", nextScene: "preparing", isCorrect: false, sentiment: "negative" },
      { text: "Speak plainly — \"We must leave\"", nextScene: "preparing", isCorrect: true, sentiment: "positive" },
      { text: "Ask her to decide for you", nextScene: "preparing", isCorrect: false, sentiment: "negative" },
    ],
  },
  preparing: {
    id: "preparing",
    title: "Gathering What Matters",
    text: "Tents. Flocks. A few bundles.\nA whole life cannot fit on a camel.",
    choices: [
      { text: "Pack only what is needed", nextScene: "departure", isCorrect: true, sentiment: "positive" },
      { text: "Cling to every possession", nextScene: "departure", isCorrect: false, sentiment: "negative" },
      { text: "Delay one more day", nextScene: "departure", isCorrect: false, sentiment: "negative" },
    ],
  },
  departure: {
    id: "departure",
    title: "The Gate at Dawn",
    text: "Ur watches you leave.\nSome weep. Some shake their heads.",
    choices: [
      { text: "Linger and lose your courage", nextScene: "the_road", isCorrect: false, sentiment: "negative" },
      { text: "Walk forward without looking back", nextScene: "the_road", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_road: {
    id: "the_road",
    title: "The Long Road",
    text: "Sun. Sand. Endless horizon.\nSarah walks beside you in silence.",
    choices: [
      { text: "Turn back — this is too much", nextScene: "doubt_night", isCorrect: false, sentiment: "negative" },
      { text: "Trust each step forward", nextScene: "doubt_night", isCorrect: true, sentiment: "positive" },
      { text: "Curse the road beneath you", nextScene: "doubt_night", isCorrect: false, sentiment: "negative" },
    ],
  },
  doubt_night: {
    id: "doubt_night",
    title: "The Long Night",
    text: "Inside the tent, the silence is heavy.\n\"What if I have misheard?\"",
    choices: [
      { text: "Pray through the darkness", nextScene: "stargazing", isCorrect: true, sentiment: "positive" },
      { text: "Bargain — \"Just give me a sign\"", nextScene: "stargazing", isCorrect: false, sentiment: "negative" },
      { text: "Plan a return to Ur", nextScene: "stargazing", isCorrect: false, sentiment: "negative" },
    ],
  },
  stargazing: {
    id: "stargazing",
    title: "Under the Stars",
    text: "The sky is wide. Countless lights.\n\"So shall your offspring be.\"",
    choices: [
      { text: "Believe the promise as given", nextScene: "canaan_arrival", isCorrect: true, sentiment: "positive" },
      { text: "Mock the impossible vow", nextScene: "canaan_arrival", isCorrect: false, sentiment: "negative" },
    ],
  },
  canaan_arrival: {
    id: "canaan_arrival",
    title: "The Land of Canaan",
    text: "Green hills. Running water. A land that breathes.\n\"This land I give to your offspring.\"",
    choices: [
      { text: "Claim it loudly as your own", nextScene: "altar", isCorrect: false, sentiment: "negative" },
      { text: "Receive it with quiet gratitude", nextScene: "altar", isCorrect: true, sentiment: "positive" },
      { text: "Question — \"Why this land?\"", nextScene: "altar", isCorrect: false, sentiment: "negative" },
    ],
  },
  altar: {
    id: "altar",
    title: "The Altar",
    text: "You gather stones and kneel.\nFaith has carried you here. It will carry you on.",
    isFinal: true,
    choices: [],
  },
};
