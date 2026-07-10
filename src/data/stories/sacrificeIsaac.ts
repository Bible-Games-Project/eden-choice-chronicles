import { StoryScene } from "@/data/stories/creation";

// Story 10 — The Sacrifice of Isaac (Genesis 22).
// First-person: the player IS Abraham.
// Correct choices describe events explicitly told in Scripture.
// Incorrect choices describe actions that do NOT appear in the biblical account.
export const sacrificeIsaacScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "God Tests Abraham",
    text: "God calls to you.\nHow do you answer?",
    choices: [
      { text: "Answer: 'Here I am'", nextScene: "the_command", tag: "answer", feedback: "Genesis 22:1 — Some time later God tested Abraham. He said to him, 'Abraham!' 'Here I am,' he replied.", isCorrect: true, sentiment: "positive" },
      { text: "Ignore the voice and go back to sleep", nextScene: "the_command", tag: "invented", feedback: "Abraham answered the Lord at once, 'Here I am.'", isCorrect: false, sentiment: "negative" },
      { text: "Demand to know the Lord's name first", nextScene: "the_command", tag: "invented", feedback: "Abraham simply answered, 'Here I am.'", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_command: {
    id: "the_command",
    title: "Take Your Son",
    text: "God speaks the command.\nWhat does He say?",
    choices: [
      { text: "'Take your son, your only son, whom you love — Isaac — and offer him as a burnt offering on a mountain I will show you'", nextScene: "the_weight", tag: "command", feedback: "Genesis 22:2 — 'Take your son, your only son, whom you love — Isaac — and go to the region of Moriah. Sacrifice him there as a burnt offering on a mountain I will show you.'", isCorrect: true, sentiment: "negative" },
      { text: "'Take a lamb from your flock and offer it here'", nextScene: "the_weight", tag: "invented", feedback: "God commanded Abraham to offer Isaac, his son.", isCorrect: false, sentiment: "negative" },
      { text: "'Build a great temple in Beersheba'", nextScene: "the_weight", tag: "invented", feedback: "God's command was to offer Isaac on a mountain in Moriah.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_weight: {
    id: "the_weight",
    title: "Early the Next Morning",
    text: "Early the next morning you prepare for the journey.\nWhat do you do?",
    choices: [
      { text: "Get up early, saddle your donkey, take two servants and your son Isaac, and cut enough wood for the burnt offering", nextScene: "departure", tag: "prepare", feedback: "Genesis 22:3 — Early the next morning Abraham got up and loaded his donkey. He took with him two of his servants and his son Isaac. When he had cut enough wood for the burnt offering, he set out.", isCorrect: true, sentiment: "positive" },
      { text: "Refuse to go and stay in Beersheba", nextScene: "departure", tag: "invented", feedback: "Abraham obeyed God at once, rising early in the morning.", isCorrect: false, sentiment: "negative" },
      { text: "Wait for a sign before setting out", nextScene: "departure", tag: "invented", feedback: "Abraham set out immediately, without waiting.", isCorrect: false, sentiment: "negative" },
    ],
  },
  departure: {
    id: "departure",
    title: "Toward Moriah",
    text: "You travel toward the place God has told you.\nHow long do you journey?",
    choices: [
      { text: "Travel for three days, until you look up and see the place in the distance", nextScene: "the_road", tag: "three-days", feedback: "Genesis 22:4 — On the third day Abraham looked up and saw the place in the distance.", isCorrect: true, sentiment: "positive" },
      { text: "Travel only a single hour before arriving", nextScene: "the_road", tag: "invented", feedback: "The journey to Moriah took three days.", isCorrect: false, sentiment: "negative" },
      { text: "Travel for forty years through the desert", nextScene: "the_road", tag: "invented", feedback: "Genesis says Abraham reached the place on the third day.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_road: {
    id: "the_road",
    title: "Stay Here With the Donkey",
    text: "You come near the mountain.\nWhat do you tell the servants?",
    choices: [
      { text: "'Stay here with the donkey while I and the boy go over there. We will worship and then we will come back to you'", nextScene: "mountain_in_sight", tag: "return", feedback: "Genesis 22:5 — 'Stay here with the donkey while I and the boy go over there. We will worship and then we will come back to you.'", isCorrect: true, sentiment: "positive" },
      { text: "'Come with us up the mountain to watch'", nextScene: "mountain_in_sight", tag: "invented", feedback: "Abraham told the servants to wait behind with the donkey.", isCorrect: false, sentiment: "negative" },
      { text: "'Take the donkey home; we are not coming back'", nextScene: "mountain_in_sight", tag: "invented", feedback: "Abraham said, 'We will come back to you.'", isCorrect: false, sentiment: "positive" },
    ],
  },
  mountain_in_sight: {
    id: "mountain_in_sight",
    title: "The Wood and the Fire",
    text: "You prepare to climb the mountain.\nWho carries what?",
    choices: [
      { text: "Place the wood for the burnt offering on Isaac's shoulders; carry the fire and the knife yourself", nextScene: "leave_servants", tag: "wood", feedback: "Genesis 22:6 — Abraham took the wood for the burnt offering and placed it on his son Isaac, and he himself carried the fire and the knife.", isCorrect: true, sentiment: "positive" },
      { text: "Carry the wood yourself while Isaac carries nothing", nextScene: "leave_servants", tag: "invented", feedback: "Isaac carried the wood; Abraham carried the fire and the knife.", isCorrect: false, sentiment: "negative" },
      { text: "Leave the wood behind at the foot of the mountain", nextScene: "leave_servants", tag: "invented", feedback: "The wood for the burnt offering was placed on Isaac.", isCorrect: false, sentiment: "negative" },
    ],
  },
  leave_servants: {
    id: "leave_servants",
    title: "Father",
    text: "As you walk together, Isaac speaks up.\nWhat does he say?",
    choices: [
      { text: "'Father — the fire and wood are here, but where is the lamb for the burnt offering?'", nextScene: "isaacs_question", tag: "question", feedback: "Genesis 22:7 — 'Father, the fire and wood are here, but where is the lamb for the burnt offering?'", isCorrect: true, sentiment: "positive" },
      { text: "'Father — let us go back home right now'", nextScene: "isaacs_question", tag: "invented", feedback: "Isaac asked about the lamb for the offering.", isCorrect: false, sentiment: "negative" },
      { text: "Isaac says nothing the whole way up", nextScene: "isaacs_question", tag: "invented", feedback: "Genesis records Isaac's question about the lamb.", isCorrect: false, sentiment: "negative" },
    ],
  },
  isaacs_question: {
    id: "isaacs_question",
    title: "God Will Provide",
    text: "You answer Isaac.\nWhat do you say?",
    choices: [
      { text: "'God Himself will provide the lamb for the burnt offering, my son'", nextScene: "summit", tag: "provide", feedback: "Genesis 22:8 — 'God Himself will provide the lamb for the burnt offering, my son.'", isCorrect: true, sentiment: "positive" },
      { text: "'You are the lamb, Isaac'", nextScene: "summit", tag: "invented", feedback: "Abraham told Isaac that God Himself would provide the lamb.", isCorrect: false, sentiment: "negative" },
      { text: "'There is no lamb — we go home now'", nextScene: "summit", tag: "invented", feedback: "Abraham answered with faith: God would provide.", isCorrect: false, sentiment: "negative" },
    ],
  },
  summit: {
    id: "summit",
    title: "The Altar",
    text: "You reach the place God has told you about.\nWhat do you build there?",
    choices: [
      { text: "Build an altar, arrange the wood on it, bind Isaac and lay him on the altar, on top of the wood", nextScene: "the_binding", tag: "altar", feedback: "Genesis 22:9 — When they reached the place God had told him about, Abraham built an altar there and arranged the wood on it. He bound his son Isaac and laid him on the altar, on top of the wood.", isCorrect: true, sentiment: "negative" },
      { text: "Build a shrine to another god instead", nextScene: "the_binding", tag: "invented", feedback: "Abraham built an altar to the Lord, exactly as commanded.", isCorrect: false, sentiment: "negative" },
      { text: "Refuse to build anything and turn back", nextScene: "the_binding", tag: "invented", feedback: "Abraham obeyed and built the altar.", isCorrect: false, sentiment: "positive" },
    ],
  },
  the_binding: {
    id: "the_binding",
    title: "The Knife",
    text: "Isaac is bound on the altar.\nWhat do you do next?",
    choices: [
      { text: "Reach out your hand and take the knife to slay your son", nextScene: "the_knife", tag: "knife", feedback: "Genesis 22:10 — Then he reached out his hand and took the knife to slay his son.", isCorrect: true, sentiment: "negative" },
      { text: "Set the knife aside and refuse", nextScene: "the_knife", tag: "invented", feedback: "Abraham reached out with the knife to obey God fully.", isCorrect: false, sentiment: "positive" },
      { text: "Loose Isaac and flee down the mountain", nextScene: "the_knife", tag: "invented", feedback: "Abraham raised the knife in obedience; he did not flee.", isCorrect: false, sentiment: "positive" },
    ],
  },
  the_knife: {
    id: "the_knife",
    title: "The Angel of the Lord",
    text: "The angel of the Lord calls out to you from heaven.\nWhat does he say?",
    choices: [
      { text: "'Abraham! Abraham! Do not lay a hand on the boy. Do not do anything to him'", nextScene: "the_stay", tag: "stay", feedback: "Genesis 22:11-12 — 'Abraham! Abraham!' 'Here I am,' he replied. 'Do not lay a hand on the boy,' he said. 'Do not do anything to him.'", isCorrect: true, sentiment: "positive" },
      { text: "'Strike the boy quickly — do not delay'", nextScene: "the_stay", tag: "invented", feedback: "The angel stopped Abraham from harming Isaac.", isCorrect: false, sentiment: "negative" },
      { text: "The angel says nothing at all", nextScene: "the_stay", tag: "invented", feedback: "The angel called out clearly and stopped Abraham.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_stay: {
    id: "the_stay",
    title: "Now I Know",
    text: "The angel explains why you were stopped.\nWhat does he say?",
    choices: [
      { text: "'Now I know that you fear God, because you have not withheld from Me your son, your only son'", nextScene: "the_ram", tag: "fear-god", feedback: "Genesis 22:12 — 'Now I know that you fear God, because you have not withheld from Me your son, your only son.'", isCorrect: true, sentiment: "positive" },
      { text: "'You have failed the test; go home in shame'", nextScene: "the_ram", tag: "invented", feedback: "The angel commended Abraham's obedience.", isCorrect: false, sentiment: "negative" },
      { text: "'Isaac must still die; try again tomorrow'", nextScene: "the_ram", tag: "invented", feedback: "The angel commanded Abraham not to harm Isaac.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_ram: {
    id: "the_ram",
    title: "A Ram in the Thicket",
    text: "You look up.\nWhat do you see caught in the thicket?",
    choices: [
      { text: "A ram caught by its horns in a thicket — you take it and offer it as a burnt offering in place of your son", nextScene: "the_name", tag: "ram", feedback: "Genesis 22:13 — Abraham looked up and there in a thicket he saw a ram caught by its horns. He went over and took the ram and sacrificed it as a burnt offering instead of his son.", isCorrect: true, sentiment: "positive" },
      { text: "A dove flying above the altar", nextScene: "the_name", tag: "invented", feedback: "Abraham saw a ram caught by its horns in a thicket.", isCorrect: false, sentiment: "negative" },
      { text: "Nothing at all — the altar remains empty", nextScene: "the_name", tag: "invented", feedback: "God provided a ram caught in the thicket.", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_name: {
    id: "the_name",
    title: "The Lord Will Provide",
    text: "You name that place to mark what happened.\nWhat name do you give it?",
    choices: [
      { text: "'The Lord Will Provide' (Yahweh Yireh)", nextScene: "the_blessing", tag: "name", feedback: "Genesis 22:14 — So Abraham called that place 'The Lord Will Provide.'", isCorrect: true, sentiment: "positive" },
      { text: "'The Place of Grief'", nextScene: "the_blessing", tag: "invented", feedback: "Abraham named it 'The Lord Will Provide.'", isCorrect: false, sentiment: "negative" },
      { text: "'The Mountain of Fire'", nextScene: "the_blessing", tag: "invented", feedback: "Abraham named the place 'The Lord Will Provide.'", isCorrect: false, sentiment: "negative" },
    ],
  },
  the_blessing: {
    id: "the_blessing",
    title: "The Oath",
    text: "The angel of the Lord calls to you a second time from heaven.\nWhat is the promise?",
    choices: [
      { text: "'I will surely bless you and make your descendants as numerous as the stars in the sky and the sand on the seashore; through your offspring all nations on earth will be blessed'", nextScene: "homecoming", tag: "blessing", feedback: "Genesis 22:16-18 — 'I swear by Myself... I will surely bless you and make your descendants as numerous as the stars in the sky and as the sand on the seashore... and through your offspring all nations on earth will be blessed, because you have obeyed Me.'", isCorrect: true, sentiment: "positive" },
      { text: "'Your descendants will be few and forgotten'", nextScene: "homecoming", tag: "invented", feedback: "The Lord promised descendants as many as the stars and the sand.", isCorrect: false, sentiment: "negative" },
      { text: "'You will lose all you have as punishment'", nextScene: "homecoming", tag: "invented", feedback: "The Lord blessed Abraham for his obedience.", isCorrect: false, sentiment: "negative" },
    ],
  },
  homecoming: {
    id: "homecoming",
    title: "Back to Beersheba",
    text: "Abraham returns to his servants, and together they set off for Beersheba.\nAnd Abraham stays in Beersheba.",
    choices: [],
    isFinal: true,
  },
};
