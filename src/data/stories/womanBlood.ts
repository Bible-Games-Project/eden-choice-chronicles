import { StoryScene } from "@/data/stories/creation";

// WOMAN WITH BLOOD ISSUE — Mark 5:25-34 / Luke 8:43-48
// You are the suffering woman in the crowd.

export const womanBloodScenes: Record<string, StoryScene> = {
  // ACT I — THE CROWD
  start: {
    id: "start",
    title: "He Is Passing By",
    text: "The Teacher walks through the press.\nTwelve years of pain ache in you.",
    choices: [
      { text: "Stay home, ashamed", nextScene: "stay_consequence", tag: "fearful", feedback: "Hope calls you forward.", isCorrect: false, sentiment: "negative" },
      { text: "Slip into the crowd", nextScene: "approach", tag: "faithful", feedback: "Mark 5:27 — The woman came up in the crowd behind Jesus and touched his garment.", isCorrect: true, sentiment: "positive" },
      { text: "Cry out for coins", nextScene: "coins_consequence", tag: "doubtful", feedback: "He is your only hope.", isCorrect: false, sentiment: "negative" },
    ],
  },
  stay_consequence: {
    id: "stay_consequence",
    title: "Rise and Go",
    text: "Healing waits where he walks.\nDo not be left behind.",
    choices: [
      { text: "Slip into the crowd", nextScene: "approach", tag: "faithful", feedback: "You step out.", isCorrect: true, sentiment: "positive" },
    ],
  },
  coins_consequence: {
    id: "coins_consequence",
    title: "Seek the Healer",
    text: "Silver cannot mend what bleeds.\nOnly he can.",
    choices: [
      { text: "Slip into the crowd", nextScene: "approach", tag: "faithful", feedback: "You press in.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE APPROACH
  approach: {
    id: "approach",
    title: "Closer, Closer",
    text: "Shoulders press, eyes do not see you.\nHis robe is near.",
    choices: [
      { text: "Call his name aloud", nextScene: "call_consequence", tag: "doubtful", feedback: "Faith may move in silence.", isCorrect: false, sentiment: "negative" },
      { text: "Reach in quiet faith", nextScene: "touch", tag: "faithful", feedback: "Mark 5:27 — The woman came up in the crowd behind Jesus and touched his garment.", isCorrect: true, sentiment: "positive" },
    ],
  },
  call_consequence: {
    id: "call_consequence",
    title: "Believe in Silence",
    text: "Your heart already speaks.\nReach.",
    choices: [
      { text: "Reach in quiet faith", nextScene: "touch", tag: "faithful", feedback: "You stretch your hand.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE TOUCH
  touch: {
    id: "touch",
    title: "The Hem",
    text: "Your fingers brush the edge.\nA stillness floods your bones.",
    choices: [
      { text: "Pull back in fear", nextScene: "pull_consequence", tag: "fearful", feedback: "Something has happened.", isCorrect: false, sentiment: "negative" },
      { text: "Believe you are healed", nextScene: "healed", tag: "faithful", feedback: "Mark 5:28 — The woman said, \"If I touch even his garments, I will be made whole.\"", isCorrect: true, sentiment: "positive" },
      { text: "Doubt what you feel", nextScene: "doubt_consequence", tag: "doubtful", feedback: "Trust the touch.", isCorrect: false, sentiment: "negative" },
    ],
  },
  pull_consequence: {
    id: "pull_consequence",
    title: "It Is Done",
    text: "The bleeding has stopped.\nReceive what he has given.",
    choices: [
      { text: "Believe you are healed", nextScene: "healed", tag: "faithful", feedback: "You breathe deep.", isCorrect: true, sentiment: "positive" },
    ],
  },
  doubt_consequence: {
    id: "doubt_consequence",
    title: "Feel the Peace",
    text: "Twelve years of pain are gone.\nThis is grace.",
    choices: [
      { text: "Believe you are healed", nextScene: "healed", tag: "faithful", feedback: "Tears fill your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — HEALED
  healed: {
    id: "healed",
    title: "Made Whole",
    text: "Strength returns. Light fills you.\nThen he stops walking.",
    choices: [
      { text: "Slip away in silence", nextScene: "slip_consequence", tag: "fearful", feedback: "He is calling for you.", isCorrect: false, sentiment: "negative" },
      { text: "Stay and listen", nextScene: "who_touched", tag: "faithful", feedback: "Mark 5:33 — The woman, knowing what had happened to her, came in fear and trembling and fell down before Jesus.", isCorrect: true, sentiment: "positive" },
    ],
  },
  slip_consequence: {
    id: "slip_consequence",
    title: "Do Not Hide",
    text: "His gaze searches the crowd.\nHe wants to see you.",
    choices: [
      { text: "Stay and listen", nextScene: "who_touched", tag: "faithful", feedback: "You turn back.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — WHO TOUCHED ME
  who_touched: {
    id: "who_touched",
    title: "Who Touched Me?",
    text: "\"Who touched my garment?\"\nThe disciples shake their heads.",
    choices: [
      { text: "Hide behind another", nextScene: "hide_consequence", tag: "fearful", feedback: "Step into the light.", isCorrect: false, sentiment: "negative" },
      { text: "Kneel and confess", nextScene: "confess", tag: "faithful", feedback: "Mark 5:33 — The woman, knowing what had happened to her, came in fear and trembling and fell down before Jesus and told him the whole truth.", isCorrect: true, sentiment: "positive" },
      { text: "Deny it was you", nextScene: "deny_consequence", tag: "doubtful", feedback: "Truth honours his work.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "He Is Gentle",
    text: "There is no anger in him.\nCome forward.",
    choices: [
      { text: "Kneel and confess", nextScene: "confess", tag: "faithful", feedback: "You step out.", isCorrect: true, sentiment: "positive" },
    ],
  },
  deny_consequence: {
    id: "deny_consequence",
    title: "Speak the Truth",
    text: "His mercy welcomes your story.\nDo not be afraid.",
    choices: [
      { text: "Kneel and confess", nextScene: "confess", tag: "faithful", feedback: "You bow low.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — PEACE
  confess: {
    id: "confess",
    title: "Trembling at His Feet",
    text: "You tell him everything.\nThe whole street goes quiet.",
    choices: [
      { text: "Wait for his word", nextScene: "peace", tag: "faithful", feedback: "He smiles upon you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  peace: {
    id: "peace",
    title: "Daughter, Go in Peace",
    text: "\"Daughter, your faith has healed you.\nGo in peace.\"",
    choices: [],
    isFinal: true,
  },
};
