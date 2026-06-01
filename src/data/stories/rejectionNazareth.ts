import { StoryScene } from "@/data/stories/creation";

// REJECTION IN NAZARETH — Matt 13, Mark 6, Luke 4
// You walk with Jesus into his hometown and feel familiarity turn to doubt.

export const rejectionNazarethScenes: Record<string, StoryScene> = {
  // ACT I — RETURNING HOME
  start: {
    id: "start",
    title: "Home Again",
    text: "Nazareth rises in the dawn.\nJesus walks the road of his youth.",
    choices: [
      { text: "Boast to the village he is here", nextScene: "boast_consequence", tag: "doubtful", feedback: "His coming needs no herald.", isCorrect: false, sentiment: "negative" },
      { text: "Walk beside him in quiet honor", nextScene: "synagogue", tag: "faithful", feedback: "You enter with reverence.", isCorrect: true, sentiment: "positive" },
      { text: "Hurry past, ashamed of the place", nextScene: "ashamed_consequence", tag: "fearful", feedback: "Do not despise the small place.", isCorrect: false, sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Be Still",
    text: "His glory is not a parade.\nLet him be seen as he is.",
    choices: [
      { text: "Walk beside him in quiet honor", nextScene: "synagogue", tag: "faithful", feedback: "You quiet your steps.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ashamed_consequence: {
    id: "ashamed_consequence",
    title: "Do Not Hide",
    text: "Even small towns hold holy ground.\nLift your eyes.",
    choices: [
      { text: "Walk beside him in quiet honor", nextScene: "synagogue", tag: "faithful", feedback: "You walk with him.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — INTO THE SYNAGOGUE
  synagogue: {
    id: "synagogue",
    title: "Sabbath in Nazareth",
    text: "The synagogue is quiet and warm.\nHe stands to read.",
    choices: [
      { text: "Listen with an open heart", nextScene: "scroll", tag: "faithful", feedback: "You lean in.", isCorrect: true, sentiment: "positive" },
      { text: "Whisper about his family", nextScene: "whisper_consequence", tag: "doubtful", feedback: "Hear him first.", isCorrect: false, sentiment: "negative" },
    ],
  },
  whisper_consequence: {
    id: "whisper_consequence",
    title: "Listen First",
    text: "Gossip drowns out the word.\nLet it be silent.",
    choices: [
      { text: "Listen with an open heart", nextScene: "scroll", tag: "faithful", feedback: "You go still.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE SCROLL
  scroll: {
    id: "scroll",
    title: "The Scroll Unrolled",
    text: "\"The Spirit of the Lord is on me…\"\nHis voice fills the room.",
    choices: [
      { text: "Test him — \"Prove it now.\"", nextScene: "test_consequence", tag: "doubtful", feedback: "Faith does not bargain.", isCorrect: false, sentiment: "negative" },
      { text: "Marvel at his gracious words", nextScene: "doubt", tag: "faithful", feedback: "Your heart stirs.", isCorrect: true, sentiment: "positive" },
      { text: "Walk out before he finishes", nextScene: "walkout_consequence", tag: "fearful", feedback: "Do not leave the light.", isCorrect: false, sentiment: "negative" },
    ],
  },
  test_consequence: {
    id: "test_consequence",
    title: "Do Not Test",
    text: "Demands silence the word in you.\nReceive instead.",
    choices: [
      { text: "Marvel at his gracious words", nextScene: "doubt", tag: "faithful", feedback: "You open your hands.", isCorrect: true, sentiment: "positive" },
    ],
  },
  walkout_consequence: {
    id: "walkout_consequence",
    title: "Stay and Hear",
    text: "What you flee, you cannot learn.\nReturn and listen.",
    choices: [
      { text: "Marvel at his gracious words", nextScene: "doubt", tag: "faithful", feedback: "You sit back down.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — DOUBT CREEPS IN
  doubt: {
    id: "doubt",
    title: "A Cold Shadow",
    text: "Wonder cools. Eyes narrow.\n\"Where did this man learn this?\"",
    choices: [
      { text: "Join the doubting murmur", nextScene: "join_consequence", tag: "doubtful", feedback: "Do not breathe doubt's air.", isCorrect: false, sentiment: "negative" },
      { text: "Hold steady in what you heard", nextScene: "carpenter", tag: "faithful", feedback: "Your heart keeps the word.", isCorrect: true, sentiment: "positive" },
    ],
  },
  join_consequence: {
    id: "join_consequence",
    title: "Hold On",
    text: "What stirred you was true.\nDo not let it go.",
    choices: [
      { text: "Hold steady in what you heard", nextScene: "carpenter", tag: "faithful", feedback: "You stand firm.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — "JOSEPH'S SON?"
  carpenter: {
    id: "carpenter",
    title: "Joseph's Son",
    text: "\"Is this not the carpenter's son?\nWe know his brothers.\"",
    choices: [
      { text: "Agree — \"He is only one of us.\"", nextScene: "agree_consequence", tag: "doubtful", feedback: "Familiarity is not the truth of him.", isCorrect: false, sentiment: "negative" },
      { text: "Remember the words, not the name", nextScene: "rejection", tag: "faithful", feedback: "You see past what you knew.", isCorrect: true, sentiment: "positive" },
      { text: "Mock him for his old trade", nextScene: "mock_consequence", tag: "doubtful", feedback: "Honor is not given by mocking.", isCorrect: false, sentiment: "negative" },
    ],
  },
  agree_consequence: {
    id: "agree_consequence",
    title: "Look Again",
    text: "He is more than the boy you knew.\nLook with new eyes.",
    choices: [
      { text: "Remember the words, not the name", nextScene: "rejection", tag: "faithful", feedback: "You see him truly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Do Not Mock",
    text: "What you mock, you cannot receive.\nBe quiet.",
    choices: [
      { text: "Remember the words, not the name", nextScene: "rejection", tag: "faithful", feedback: "You bow your head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — REJECTION
  rejection: {
    id: "rejection",
    title: "They Turn Away",
    text: "The room grows cold.\nFaces close like shutters.",
    choices: [
      { text: "Stay near him as they reject", nextScene: "explain", tag: "faithful", feedback: "You do not leave his side.", isCorrect: true, sentiment: "positive" },
      { text: "Slip into the crowd, unseen", nextScene: "slip_consequence", tag: "fearful", feedback: "Do not hide from love.", isCorrect: false, sentiment: "negative" },
    ],
  },
  slip_consequence: {
    id: "slip_consequence",
    title: "Stand With Him",
    text: "Loyalty is louder than the crowd.\nReturn to his side.",
    choices: [
      { text: "Stay near him as they reject", nextScene: "explain", tag: "faithful", feedback: "You step back beside him.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — HE EXPLAINS
  explain: {
    id: "explain",
    title: "A Prophet at Home",
    text: "\"No prophet is welcomed\nin his own hometown.\"",
    choices: [
      { text: "Argue that they will change", nextScene: "argue_consequence", tag: "doubtful", feedback: "Unbelief is a closed door.", isCorrect: false, sentiment: "negative" },
      { text: "Receive his quiet sorrow", nextScene: "leaving", tag: "faithful", feedback: "You feel what he feels.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Hear the Sorrow",
    text: "What he says is true and aching.\nLet it land.",
    choices: [
      { text: "Receive his quiet sorrow", nextScene: "leaving", tag: "faithful", feedback: "Your heart softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — HE LEAVES
  leaving: {
    id: "leaving",
    title: "The Road Out",
    text: "He turns toward the open road.\nHis steps are slow but sure.",
    choices: [
      { text: "Stay behind with the doubters", nextScene: "stay_consequence", tag: "fearful", feedback: "Do not stay where faith died.", isCorrect: false, sentiment: "negative" },
      { text: "Walk out with him in faith", nextScene: "ending", tag: "faithful", feedback: "You go where he goes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stay_consequence: {
    id: "stay_consequence",
    title: "Follow Him",
    text: "Faith walks forward.\nDo not stay behind.",
    choices: [
      { text: "Walk out with him in faith", nextScene: "ending", tag: "faithful", feedback: "You follow him out.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "Familiar Eyes, Closed",
    text: "Where familiarity blocks the heart,\nfaith finds a quieter road.",
    choices: [],
    isFinal: true,
  },
};
