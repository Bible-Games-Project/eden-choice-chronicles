import { StoryScene } from "@/data/stories/creation";

// CALLING OF THE DISCIPLES — Luke 5, Matthew 4
// You ARE Peter, a fisherman by the Sea of Galilee.

export const callingDisciplesScenes: Record<string, StoryScene> = {
  // ACT I — EMPTY NETS
  start: {
    id: "start",
    title: "Empty Nets",
    text: "Dawn over the lake.\nAll night, and not one fish.",
    choices: [
      { text: "Curse the silent sea", nextScene: "curse_consequence", tag: "faithless", feedback: "Bitterness catches no fish.", isCorrect: false, sentiment: "negative" },
      { text: "Wash the nets in silence", nextScene: "teaching", tag: "faithful", feedback: "Quiet hands, open heart.", isCorrect: true, sentiment: "positive" },
      { text: "Pack up and go home", nextScene: "leave_consequence", tag: "fearful", feedback: "Wait. Something stirs.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Stay",
    text: "Anger will not feed you.\nBegin again.",
    choices: [
      { text: "Wash the nets in silence", nextScene: "teaching", tag: "faithful", feedback: "Peace returns.", isCorrect: true, sentiment: "positive" },
    ],
  },
  leave_consequence: {
    id: "leave_consequence",
    title: "Linger",
    text: "Stay by the water.\nA voice is coming.",
    choices: [
      { text: "Wash the nets in silence", nextScene: "teaching", tag: "faithful", feedback: "You bend to the work.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — JESUS TEACHES FROM THE BOAT
  teaching: {
    id: "teaching",
    title: "A Stranger's Voice",
    text: "Crowds press near.\n\"May I teach from your boat?\"",
    choices: [
      { text: "Push out into the water", nextScene: "catch", tag: "faithful", feedback: "His words fill the air.", isCorrect: true, sentiment: "positive" },
      { text: "Tell him to find another", nextScene: "refuse_consequence", tag: "faithless", feedback: "Open the door wider.", isCorrect: false, sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Welcome Him",
    text: "His voice is gentle.\nGive what little you have.",
    choices: [
      { text: "Push out into the water", nextScene: "catch", tag: "faithful", feedback: "He smiles and steps in.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — MIRACULOUS CATCH
  catch: {
    id: "catch",
    title: "Cast the Nets",
    text: "\"Cast into the deep,\" he says.\nBut the night gave nothing.",
    choices: [
      { text: "Refuse, the nets are washed", nextScene: "refuse_cast_consequence", tag: "faithless", feedback: "Trust the word.", isCorrect: false, sentiment: "negative" },
      { text: "Argue about the timing", nextScene: "argue_consequence", tag: "proud", feedback: "Set words aside.", isCorrect: false, sentiment: "negative" },
      { text: "\"At your word, I will.\"", nextScene: "miracle", tag: "faithful", feedback: "Obedience opens the deep.", isCorrect: true, sentiment: "positive" },
    ],
  },
  refuse_cast_consequence: {
    id: "refuse_cast_consequence",
    title: "Trust",
    text: "His word is not like other words.\nLower the nets.",
    choices: [
      { text: "\"At your word, I will.\"", nextScene: "miracle", tag: "faithful", feedback: "The boat sways forward.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Obey",
    text: "There is nothing to lose.\nDo as he asks.",
    choices: [
      { text: "\"At your word, I will.\"", nextScene: "miracle", tag: "faithful", feedback: "You grip the rope.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE MIRACLE & HUMILITY
  miracle: {
    id: "miracle",
    title: "Nets Overflowing",
    text: "Fish surge, the nets break.\nYou fall to your knees.",
    choices: [
      { text: "Boast of your catch", nextScene: "boast_consequence", tag: "proud", feedback: "This is not your doing.", isCorrect: false, sentiment: "negative" },
      { text: "\"Lord, depart from me.\"", nextScene: "call", tag: "faithful", feedback: "He sees your heart.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Humble Yourself",
    text: "The miracle is not yours.\nKneel before him.",
    choices: [
      { text: "\"Lord, depart from me.\"", nextScene: "call", tag: "faithful", feedback: "He lifts you up.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE CALL
  call: {
    id: "call",
    title: "Follow Me",
    text: "\"Do not be afraid.\nFrom now, you will fish for men.\"",
    choices: [
      { text: "Hesitate, the boats are yours", nextScene: "hesitate_consequence", tag: "fearful", feedback: "He calls you onward.", isCorrect: false, sentiment: "negative" },
      { text: "Leave everything and follow", nextScene: "follow", tag: "faithful", feedback: "Your heart is light.", isCorrect: true, sentiment: "positive" },
      { text: "Bargain for tomorrow", nextScene: "bargain_consequence", tag: "proud", feedback: "Now is the hour.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hesitate_consequence: {
    id: "hesitate_consequence",
    title: "Step Forward",
    text: "Boats and nets will pass.\nHis call will not.",
    choices: [
      { text: "Leave everything and follow", nextScene: "follow", tag: "faithful", feedback: "You rise.", isCorrect: true, sentiment: "positive" },
    ],
  },
  bargain_consequence: {
    id: "bargain_consequence",
    title: "Today",
    text: "Tomorrow is not promised.\nFollow now.",
    choices: [
      { text: "Leave everything and follow", nextScene: "follow", tag: "faithful", feedback: "The shore opens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  follow: {
    id: "follow",
    title: "A New Road",
    text: "Nets fall to the sand.\nYou walk into a new life.",
    choices: [],
    isFinal: true,
  },
};
