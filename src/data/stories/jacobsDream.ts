import { StoryScene } from "@/data/stories/creation";

// JACOB'S DREAM — Genesis 28:10–22
// You are Jacob, fleeing Esau, on the road from Beersheba toward Haran.
// Branching paths converge at Bethel for the dream of the ladder.
// Each scene: 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars.

export const jacobsDreamScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE FLIGHT ============
  start: {
    id: "start",
    title: "The Road from Beersheba",
    text: "You are Jacob, fleeing Esau's wrath.\nThe sun lowers. Haran is far. Night is near.",
    choices: [
      { text: "Keep walking — find a place to rest", nextScene: "wilderness", tag: "obedient", feedback: "You walk on. The wind cools. The hills stretch wide.", sentiment: "positive" },
      { text: "Turn back — beg Esau's mercy", nextScene: "turn_back_consequence", tag: "fearful", feedback: "Fear pulls you home. But the path back is closed.", sentiment: "negative" },
      { text: "Hide in the rocks until dark", nextScene: "hide_consequence", tag: "hiding", feedback: "Hiding is not your road. Father said: go.", sentiment: "negative" },
    ],
  },
  turn_back_consequence: {
    id: "turn_back_consequence",
    title: "No Way Back",
    text: "Esau's anger still burns. Your mother's voice returns:\n\"Flee to Haran. Stay until his fury cools.\"",
    choices: [
      { text: "Turn east again — keep walking", nextScene: "wilderness", tag: "obedient", feedback: "You set your face toward Haran once more.", sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "The Rocks Are Cold",
    text: "Hidden, you wait. But hiding is not the calling.\nThe stars rise. The road still waits.",
    choices: [
      { text: "Step out and walk on", nextScene: "wilderness", tag: "obedient", feedback: "You leave the shadows. The journey is yours.", sentiment: "positive" },
    ],
  },
  wilderness: {
    id: "wilderness",
    title: "Open Wilderness",
    text: "Hills stretch in every direction. Light is failing.\nYou must stop somewhere — soon.",
    choices: [
      { text: "Rest at this stony place", nextScene: "the_place", tag: "trusting", feedback: "Something quiet here. You step off the path.", sentiment: "positive" },
      { text: "Push on through the night", nextScene: "push_on_consequence", tag: "restless", feedback: "Darkness swallows the road. You stumble blind.", sentiment: "negative" },
    ],
  },
  push_on_consequence: {
    id: "push_on_consequence",
    title: "Lost in the Dark",
    text: "The path vanishes under your feet.\nYou turn back to the stones you passed.",
    choices: [
      { text: "Stop and rest at the stony place", nextScene: "the_place", tag: "trusting", feedback: "The Lord's place was waiting all along.", sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE PLACE ============
  the_place: {
    id: "the_place",
    title: "A Certain Place",
    text: "Bare ground. Scattered stones. The sun is gone.\nYou have nothing for a pillow.",
    choices: [
      { text: "Take a stone for a pillow", nextScene: "lay_down", tag: "humble", feedback: "You choose a smooth stone. It is enough.", sentiment: "positive" },
      { text: "Use your cloak — stones are too hard", nextScene: "soft_consequence", tag: "comfort", feedback: "You shiver. The wind cuts through. Sleep won't come.", sentiment: "negative" },
      { text: "Walk on — find a softer spot", nextScene: "wander_consequence", tag: "wandering", feedback: "Each spot is the same. The night is not for searching.", sentiment: "negative" },
    ],
  },
  soft_consequence: {
    id: "soft_consequence",
    title: "The Wind Won't Let You",
    text: "The cold is sharper without a pillow.\nA stone lies near your hand.",
    choices: [
      { text: "Place a stone beneath your head", nextScene: "lay_down", tag: "humble", feedback: "Hardness becomes rest. You close your eyes.", sentiment: "positive" },
    ],
  },
  wander_consequence: {
    id: "wander_consequence",
    title: "All Ground Is the Same",
    text: "You return to the first stones. Every place is\nthe same in the dark. This place will do.",
    choices: [
      { text: "Take a stone for a pillow", nextScene: "lay_down", tag: "humble", feedback: "You set a stone for your head and lie down.", sentiment: "positive" },
    ],
  },
  lay_down: {
    id: "lay_down",
    title: "Sleep Comes",
    text: "The stone is cold beneath your cheek.\nThe sky deepens. Your breathing slows.",
    choices: [
      { text: "Close your eyes and sleep", nextScene: "the_dream", tag: "resting", feedback: "Sleep takes you. And then — light.", sentiment: "positive" },
    ],
  },

  // ============ ACT III — THE DREAM ============
  the_dream: {
    id: "the_dream",
    title: "A Stairway",
    text: "A great stairway rises from earth to heaven.\nAngels of God ascend and descend on it.",
    choices: [
      { text: "Watch in silent awe", nextScene: "the_voice", tag: "reverent", feedback: "You do not move. The light pours down.", sentiment: "positive" },
      { text: "Try to climb the stairway", nextScene: "climb_consequence", tag: "presumptuous", feedback: "Your foot will not lift. This is not for climbing — for seeing.", sentiment: "negative" },
      { text: "Call out to the angels", nextScene: "call_consequence", tag: "interrupting", feedback: "Your voice is small. They pass without turning.", sentiment: "negative" },
    ],
  },
  climb_consequence: {
    id: "climb_consequence",
    title: "Not by Climbing",
    text: "The stair is not yours to ascend.\nA voice stirs above. You must only listen.",
    choices: [
      { text: "Stand still and watch", nextScene: "the_voice", tag: "reverent", feedback: "You bow your head. Light fills your eyes.", sentiment: "positive" },
    ],
  },
  call_consequence: {
    id: "call_consequence",
    title: "They Do Not Answer",
    text: "The angels pass on their errand.\nA greater Voice waits at the top of the stair.",
    choices: [
      { text: "Be silent and listen", nextScene: "the_voice", tag: "reverent", feedback: "You fall quiet. Then He speaks.", sentiment: "positive" },
    ],
  },
  the_voice: {
    id: "the_voice",
    title: "The Voice Above",
    text: "\"I am the LORD, God of Abraham and Isaac.\nThe land where you lie I will give to you.\"",
    choices: [
      { text: "Receive the promise in silence", nextScene: "the_promise", tag: "receiving", feedback: "You let the words enter you. Earth and heaven hold still.", sentiment: "positive" },
      { text: "Bargain — ask for proof first", nextScene: "bargain_consequence", tag: "bargaining", feedback: "The promise is freely given. It needs no haggling.", sentiment: "negative" },
    ],
  },
  bargain_consequence: {
    id: "bargain_consequence",
    title: "No Need to Bargain",
    text: "His word is sure. The Voice speaks again,\ngentle: \"I am with you. I will keep you.\"",
    choices: [
      { text: "Receive the promise", nextScene: "the_promise", tag: "receiving", feedback: "Your heart bows. The promise rests upon you.", sentiment: "positive" },
    ],
  },
  the_promise: {
    id: "the_promise",
    title: "\"I Am With You\"",
    text: "\"I am with you. I will keep you wherever you go,\nand bring you back to this land.\"",
    choices: [
      { text: "Treasure His words in your heart", nextScene: "awakening", tag: "treasuring", feedback: "The vision fades. The stars return. Dawn is near.", sentiment: "positive" },
    ],
  },

  // ============ ACT IV — AWAKENING ============
  awakening: {
    id: "awakening",
    title: "Surely the LORD Is Here",
    text: "You wake trembling. \"Surely the LORD is in this place,\nand I did not know it.\"",
    choices: [
      { text: "Call this place the house of God", nextScene: "set_pillar", tag: "naming", feedback: "\"This is none other than Bethel — the gate of heaven.\"", sentiment: "positive" },
      { text: "Hurry away before the vision returns", nextScene: "flee_consequence", tag: "fearful", feedback: "Fear is not faith. The place asks something of you.", sentiment: "negative" },
      { text: "Tell no one — keep it secret", nextScene: "secret_consequence", tag: "hiding", feedback: "Some things are sealed by remembrance, not silence.", sentiment: "negative" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "The Place Holds You",
    text: "You take a few steps — and stop.\nThe stone where you slept must not be left bare.",
    choices: [
      { text: "Return and set up the stone", nextScene: "set_pillar", tag: "naming", feedback: "You walk back. The stone is waiting.", sentiment: "positive" },
    ],
  },
  secret_consequence: {
    id: "secret_consequence",
    title: "A Mark Must Be Made",
    text: "Silence is not enough. Generations must know\nwhat the LORD did at this place.",
    choices: [
      { text: "Set up the stone as a pillar", nextScene: "set_pillar", tag: "naming", feedback: "You lift the stone. It will stand as witness.", sentiment: "positive" },
    ],
  },
  set_pillar: {
    id: "set_pillar",
    title: "The Stone Pillar",
    text: "You take the stone from beneath your head\nand set it upright. Dawn breaks soft and pink.",
    choices: [
      { text: "Pour oil on it as an offering", nextScene: "anoint", tag: "consecrating", feedback: "Oil runs down the stone. It glistens in the morning light.", sentiment: "positive" },
      { text: "Leave it plain — it is enough", nextScene: "plain_consequence", tag: "withholding", feedback: "Something more is owed. The Lord met you here.", sentiment: "negative" },
    ],
  },
  plain_consequence: {
    id: "plain_consequence",
    title: "Honor It Fully",
    text: "A bare stone is not yet an altar.\nYou have a small flask of oil at your side.",
    choices: [
      { text: "Anoint the stone with oil", nextScene: "anoint", tag: "consecrating", feedback: "You pour the oil. It is the Lord's portion.", sentiment: "positive" },
    ],
  },
  anoint: {
    id: "anoint",
    title: "Bethel — House of God",
    text: "\"This place shall be called Bethel.\nThe LORD shall be my God.\"",
    choices: [
      { text: "Vow a tenth of all He gives you", nextScene: "the_vow", tag: "vowing", feedback: "\"Of all You give me, I will surely give a tenth to You.\"", sentiment: "positive" },
      { text: "Promise nothing — just receive", nextScene: "withhold_consequence", tag: "withholding", feedback: "Grace welcomes a vow in return. Words become a covenant.", sentiment: "negative" },
    ],
  },
  withhold_consequence: {
    id: "withhold_consequence",
    title: "Make a Vow",
    text: "Your heart is full. A pledge rises in you —\na portion returned for a promise received.",
    choices: [
      { text: "Vow a tenth of all to the LORD", nextScene: "the_vow", tag: "vowing", feedback: "\"Of all You give me, I will give a tenth to You.\"", sentiment: "positive" },
    ],
  },
  the_vow: {
    id: "the_vow",
    title: "The Road East",
    text: "You take up your staff. The morning is wide.\nHaran lies far ahead — but you are not alone.",
    choices: [
      { text: "Walk on with the LORD", nextScene: "journey_on", tag: "trusting", feedback: "Each step is lighter than the last. The promise walks with you.", sentiment: "positive" },
    ],
    isFinal: false,
  },
  journey_on: {
    id: "journey_on",
    title: "The Promise Goes With You",
    text: "Bethel falls behind. The east opens before you.\nYou are kept. You are sent. You are seen.",
    choices: [],
    isFinal: true,
  },
};
