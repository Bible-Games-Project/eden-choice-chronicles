import { StoryScene } from "@/data/stories/creation";

export const abrahamScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "Ur of the Chaldeans",
    text: "You are Abram — a man of seventy-five years.\nThe city of Ur hums around you. Familiar. Safe.",
    choices: [
      { text: "Walk through the marketplace", nextScene: "familiar_life", tag: "routine", feedback: "The same faces. The same roads. The same gods of stone.", isCorrect: false, sentiment: "negative" },
      { text: "Sit alone on the rooftop at dusk", nextScene: "restlessness", tag: "reflective", feedback: "The sky stretches endlessly. Something in you aches.", isCorrect: true, sentiment: "positive" },
      { text: "Tend to your flocks outside the walls", nextScene: "familiar_life", tag: "dutiful", feedback: "The sheep follow you without question. You envy them.", isCorrect: false, sentiment: "negative" },
    ],
  },
  familiar_life: {
    id: "familiar_life",
    title: "A Life Already Built",
    text: "You have wealth. You have a wife who loves you.\nBut no child. No heir. The years weigh heavy.",
    choices: [
      { text: "Accept what you have", nextScene: "restlessness", tag: "resigned", feedback: "You try. But the emptiness returns every night.", isCorrect: false, sentiment: "negative" },
      { text: "Cry out silently to the heavens", nextScene: "the_voice", tag: "desperate", feedback: "No words — just a groan from your deepest self.", isCorrect: true, sentiment: "positive" },
      { text: "Distract yourself with work", nextScene: "restlessness", tag: "avoidant", feedback: "Your hands stay busy. Your heart stays hollow.", isCorrect: false, sentiment: "negative" },
    ],
  },
  restlessness: {
    id: "restlessness",
    title: "A Stirring Within",
    text: "Something is shifting — inside you, around you.\nThe idols your father carved feel cold. Lifeless.\nThe stars feel closer than any god of stone.",
    choices: [
      { text: "Look up at the stars and listen", nextScene: "the_voice", tag: "open", feedback: "Silence. Then — not silence. Something deeper.", isCorrect: true, sentiment: "positive" },
      { text: "Push the feeling away", nextScene: "the_voice", tag: "resistant", feedback: "You turn over in bed. But the stirring does not stop.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_voice: {
    id: "the_voice",
    title: "The Voice",
    text: "It comes without thunder. Without fire.\nA voice — clear as water, heavy as the earth beneath you:\n\"Go from your country, your people, your father's household.\"",
    choices: [
      { text: "Fall to your knees", nextScene: "the_promise", tag: "reverent", feedback: "Your face meets the dust. You tremble.", isCorrect: true, sentiment: "positive" },
      { text: "\"Who speaks?\"", nextScene: "the_promise", tag: "questioning", feedback: "No answer — only the weight of presence. Undeniable.", isCorrect: false, sentiment: "negative" },
      { text: "Cover your ears", nextScene: "the_promise", tag: "afraid", feedback: "Your hands press against your head. The voice is inside you.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_promise: {
    id: "the_promise",
    title: "The Promise",
    text: "\"I will make you into a great nation.\nI will bless you and make your name great.\nAll peoples on earth will be blessed through you.\"",
    choices: [
      { text: "\"But I have no son…\"", nextScene: "the_weight", tag: "doubting", feedback: "The promise feels impossible. A nation — from you?", isCorrect: false, sentiment: "negative" },
      { text: "Let the words wash over you", nextScene: "the_weight", tag: "receiving", feedback: "You don't understand. But something in you believes.", isCorrect: true, sentiment: "positive" },
      { text: "\"Why me?\"", nextScene: "the_weight", tag: "unworthy", feedback: "Silence. The question hangs unanswered. Perhaps it doesn't need one.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_weight: {
    id: "the_weight",
    title: "The Weight of It",
    text: "Leave everything.\nYour home. Your father's grave. Your name in this city.\nGo to a land you have never seen.",
    choices: [
      { text: "Think of Sarai — what will she say?", nextScene: "telling_sarai", tag: "devoted", feedback: "She has followed you through everything. But this…", isCorrect: false, sentiment: "negative" },
      { text: "Walk to the edge of the city and look out", nextScene: "the_horizon", tag: "drawn", feedback: "The desert stretches — endless, terrifying, beautiful.", isCorrect: true, sentiment: "positive" },
      { text: "Return to your house and close the door", nextScene: "the_struggle", tag: "retreating", feedback: "The walls feel smaller than before.", isCorrect: false, sentiment: "negative" },
    ],
  },
  telling_sarai: {
    id: "telling_sarai",
    title: "Sarai",
    text: "You find her grinding grain.\nHer eyes search your face — she knows something has changed.\n\"What happened to you?\"",
    choices: [
      { text: "\"God spoke to me. We must leave.\"", nextScene: "sarai_responds", tag: "direct", feedback: "The words sound impossible even as you say them.", isCorrect: true, sentiment: "positive" },
      { text: "\"I… I don't know how to explain.\"", nextScene: "sarai_responds", tag: "struggling", feedback: "She waits. Patient. She has always been patient.", isCorrect: false, sentiment: "negative" },
      { text: "Say nothing yet — you're not ready", nextScene: "the_struggle", tag: "withholding", feedback: "She watches you leave the room. Her eyes follow.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sarai_responds: {
    id: "sarai_responds",
    title: "Her Eyes",
    text: "Sarai is quiet for a long time.\nThen she looks at you — not with fear, but with something fierce.\n\"Then we go.\"",
    choices: [
      { text: "Take her hands in yours", nextScene: "the_decision", tag: "grateful", feedback: "Her grip is strong. Stronger than yours.", isCorrect: true, sentiment: "positive" },
      { text: "\"You would leave everything?\"", nextScene: "the_decision", tag: "amazed", feedback: "\"I would leave everything for the truth,\" she says.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_horizon: {
    id: "the_horizon",
    title: "The Edge of the Known",
    text: "Beyond the walls — nothing familiar.\nDust, wind, the unknown.\nBehind you — everything you've ever known.",
    choices: [
      { text: "Take one step forward", nextScene: "the_decision", tag: "brave", feedback: "Just one. The ground holds.", isCorrect: true, sentiment: "positive" },
      { text: "Turn back — not yet", nextScene: "the_struggle", tag: "hesitant", feedback: "Your feet know the way home. Your heart does not.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_struggle: {
    id: "the_struggle",
    title: "The Long Night",
    text: "You lie awake.\nEvery reason to stay wars with the voice that called you.\nThe room is dark. The ceiling presses down.",
    choices: [
      { text: "Get up. Begin packing.", nextScene: "the_decision", tag: "resolved", feedback: "Your hands shake. But they move.", isCorrect: true, sentiment: "positive" },
      { text: "Bargain — \"Just a little longer\"", nextScene: "the_decision", tag: "delaying", feedback: "The voice says nothing. It waits. It has always waited.", isCorrect: false, sentiment: "negative" },
      { text: "Pray through the darkness", nextScene: "the_decision", tag: "surrendering", feedback: "No words. Just breath. And slowly — peace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_decision: {
    id: "the_decision",
    title: "The Morning",
    text: "Dawn breaks.\nYou stand at your doorway — bags gathered, animals loaded.\nThe city watches. Some weep. Some shake their heads.",
    choices: [
      { text: "Walk forward without looking back", nextScene: "the_road", tag: "committed", feedback: "Your feet leave the only ground they've ever known.", isCorrect: true, sentiment: "positive" },
      { text: "Look back one last time", nextScene: "the_road", tag: "torn", feedback: "The rooftops shimmer in morning light. Goodbye.", isCorrect: false, sentiment: "negative" },
      { text: "Hesitate at the gate", nextScene: "the_road", tag: "wavering", feedback: "Sarai touches your arm. \"Come.\" You go.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_road: {
    id: "the_road",
    title: "The Road",
    text: "The desert swallows the city behind you.\nDust in your mouth. Sun on your back.\nSarai walks beside you — steady, quiet.",
    choices: [
      { text: "Trust each step", nextScene: "the_stars", tag: "faithful", feedback: "You don't know where. But you know Who.", isCorrect: true, sentiment: "positive" },
      { text: "\"What have I done?\"", nextScene: "the_stars", tag: "doubting", feedback: "The question fades into the wind. There is no answer but forward.", isCorrect: false, sentiment: "negative" },
      { text: "Walk in silence with Sarai", nextScene: "the_stars", tag: "together", feedback: "No words needed. Her presence is enough.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_stars: {
    id: "the_stars",
    title: "Under the Stars",
    text: "Night falls on the open desert.\nYou look up — and the sky is infinite.\nMore stars than grains of sand. More light than you've ever seen.",
    choices: [
      { text: "\"So shall your offspring be…\"", nextScene: "arrival", tag: "remembering", feedback: "The promise returns. Impossible. Beautiful.", isCorrect: true, sentiment: "positive" },
      { text: "Weep — from exhaustion and wonder", nextScene: "arrival", tag: "overwhelmed", feedback: "The tears fall into the dust. The stars hold you.", isCorrect: false, sentiment: "negative" },
      { text: "Close your eyes and sleep", nextScene: "arrival", tag: "resting", feedback: "For the first time in weeks — peace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  arrival: {
    id: "arrival",
    title: "The Land",
    text: "Days become weeks. Weeks become months.\nThen — you see it.\nGreen hills. Running water. A land that breathes.\n\"To your offspring I will give this land.\"",
    isFinal: true,
    choices: [],
  },
};
