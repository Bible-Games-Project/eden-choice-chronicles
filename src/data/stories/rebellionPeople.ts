import { StoryScene } from "@/data/stories/creation";

// REBELLION OF THE PEOPLE — Numbers 14, 16, 21
// You ARE Moses. The people doubt, complain, and seek to return to Egypt.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const rebellionPeopleScenes: Record<string, StoryScene> = {
  // ============ ACT I — MURMURS IN THE DUST ============
  start: {
    id: "start",
    title: "Murmurs in the Dust",
    text: "The camp grows restless again.\nVoices rise against the long road.",
    choices: [
      { text: "Walk among them and listen", nextScene: "complaints", tag: "humble", feedback: "Numbers 11:1 — The people complained about their hardships, and the Lord heard them.", isCorrect: true, sentiment: "positive" },
      { text: "Shout them into silence", nextScene: "shout_consequence", tag: "harsh", feedback: "Anger only deepens the wound.", isCorrect: false, sentiment: "negative" },
      { text: "Pretend you do not hear", nextScene: "ignore_consequence", tag: "evasive", feedback: "A shepherd cannot turn away.", isCorrect: false, sentiment: "negative" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Lead with Patience",
    text: "Force will not silence fear.\nGo and listen instead.",
    choices: [
      { text: "Walk among them and listen", nextScene: "complaints", tag: "humble", feedback: "Their eyes find yours.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "A Shepherd Stays",
    text: "Silence will not heal them.\nGo where their cry is loudest.",
    choices: [
      { text: "Walk among them and listen", nextScene: "complaints", tag: "humble", feedback: "You step into the crowd.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE COMPLAINT ============
  complaints: {
    id: "complaints",
    title: "\"Were There No Graves in Egypt?\"",
    text: "\"Why bring us out to die here?\"\nTheir hands clench in the dust.",
    choices: [
      { text: "Agree the journey is hopeless", nextScene: "agree_consequence", tag: "weak", feedback: "Despair is no answer.", isCorrect: false, sentiment: "negative" },
      { text: "Promise quick comfort to please them", nextScene: "promise_consequence", tag: "evasive", feedback: "Empty words bring no peace.", isCorrect: false, sentiment: "negative" },
      { text: "Remind them what God has done", nextScene: "egypt_longing", tag: "faithful", feedback: "\"Remember the sea He parted.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  agree_consequence: {
    id: "agree_consequence",
    title: "Stand on His Word",
    text: "His promise has not failed.\nSpeak truth, not despair.",
    choices: [
      { text: "Remind them what God has done", nextScene: "egypt_longing", tag: "faithful", feedback: "Your voice steadies the camp.", isCorrect: true, sentiment: "positive" },
    ],
  },
  promise_consequence: {
    id: "promise_consequence",
    title: "Do Not Flatter Them",
    text: "Soothing lies cannot save them.\nPoint to the One who can.",
    choices: [
      { text: "Remind them what God has done", nextScene: "egypt_longing", tag: "faithful", feedback: "You raise your staff in memory.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — LONGING FOR EGYPT ============
  egypt_longing: {
    id: "egypt_longing",
    title: "\"Let Us Choose a New Leader\"",
    text: "\"Back to Egypt!\" some begin to cry.\n\"Choose a captain. Lead us home.\"",
    choices: [
      { text: "Step aside; let them have their way", nextScene: "step_aside_consequence", tag: "weak", feedback: "Surrender is not faith.", isCorrect: false, sentiment: "negative" },
      { text: "Fall on your face before them all", nextScene: "intercede", tag: "humble", feedback: "Numbers 14:5 — Moses and Aaron fell on their faces before the assembly of the congregation of the children of Israel.", isCorrect: true, sentiment: "positive" },
      { text: "Curse the rebels in your anger", nextScene: "curse_consequence", tag: "harsh", feedback: "Mercy must come first.", isCorrect: false, sentiment: "negative" },
    ],
  },
  step_aside_consequence: {
    id: "step_aside_consequence",
    title: "A Shepherd Does Not Flee",
    text: "He set you over them.\nDo not abandon what He gave.",
    choices: [
      { text: "Fall on your face before them all", nextScene: "intercede", tag: "humble", feedback: "Your knees meet the dust.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Stand in the Breach",
    text: "Wrath cannot save the lost.\nLift a humbler prayer.",
    choices: [
      { text: "Fall on your face before them all", nextScene: "intercede", tag: "humble", feedback: "Your forehead touches the ground.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — INTERCESSION ============
  intercede: {
    id: "intercede",
    title: "On the Hill of Prayer",
    text: "You climb away from the noise.\nThe Lord's voice meets your silence.",
    choices: [
      { text: "Ask Him to make a nation of you", nextScene: "self_consequence", tag: "prideful", feedback: "His promise is for Israel.", isCorrect: false, sentiment: "negative" },
      { text: "Demand He punish them at once", nextScene: "demand_consequence", tag: "harsh", feedback: "Mercy is not yours to refuse.", isCorrect: false, sentiment: "negative" },
      { text: "Plead for His mercy on them", nextScene: "joshua_warns", tag: "faithful", feedback: "\"Pardon them, O Lord.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  self_consequence: {
    id: "self_consequence",
    title: "Not for Your Name Alone",
    text: "Pray for the flock, not yourself.\nMercy is wider than one man.",
    choices: [
      { text: "Plead for His mercy on them", nextScene: "joshua_warns", tag: "faithful", feedback: "Your prayer rises like smoke.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Mercy Before Judgment",
    text: "He delights to forgive.\nLet your prayer match His heart.",
    choices: [
      { text: "Plead for His mercy on them", nextScene: "joshua_warns", tag: "faithful", feedback: "His anger relents at your words.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE WARNING ============
  joshua_warns: {
    id: "joshua_warns",
    title: "Joshua Stands Beside You",
    text: "\"They must not return to Egypt.\"\nHis young face is set like flint.",
    choices: [
      { text: "Send Joshua to gather the elders", nextScene: "consequences", tag: "wise", feedback: "Numbers 14:6-7 — Joshua and Caleb tore their clothes and spoke to the congregation, saying the land was an exceedingly good land.", isCorrect: true, sentiment: "positive" },
      { text: "Hide Joshua's words from the camp", nextScene: "hide_consequence_2", tag: "evasive", feedback: "Truth must not be silenced.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence_2: {
    id: "hide_consequence_2",
    title: "Do Not Bury the Truth",
    text: "His warning came from the Lord.\nLet it be heard.",
    choices: [
      { text: "Send Joshua to gather the elders", nextScene: "consequences", tag: "wise", feedback: "His call goes through the camp.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — THE CONSEQUENCE ============
  consequences: {
    id: "consequences",
    title: "Forty Years in the Wilderness",
    text: "\"None who doubted will see the land.\"\nThe sentence falls like rain.",
    choices: [
      { text: "Hide the verdict from the people", nextScene: "hide_verdict_consequence", tag: "evasive", feedback: "They must hear what is true.", isCorrect: false, sentiment: "negative" },
      { text: "Blame Aaron and Joshua before them", nextScene: "blame_consequence", tag: "weak", feedback: "A shepherd carries the weight.", isCorrect: false, sentiment: "negative" },
      { text: "Speak the Lord's word plainly", nextScene: "people_mourn", tag: "faithful", feedback: "Numbers 14:28-30 — The Lord declared that none of those who had grumbled would see the land, except Caleb and Joshua.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_verdict_consequence: {
    id: "hide_verdict_consequence",
    title: "Do Not Soften His Word",
    text: "Half-truth is no kindness.\nLet them hear it whole.",
    choices: [
      { text: "Speak the Lord's word plainly", nextScene: "people_mourn", tag: "faithful", feedback: "The camp falls silent.", isCorrect: true, sentiment: "positive" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Carry the Burden Yourself",
    text: "You were sent to lead them.\nDo not lay the weight on others.",
    choices: [
      { text: "Speak the Lord's word plainly", nextScene: "people_mourn", tag: "faithful", feedback: "You stand alone before them.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VII — MOURNING & PRESS ON ============
  people_mourn: {
    id: "people_mourn",
    title: "A Long Lament",
    text: "The camp weeps through the night.\nDoubt's harvest is bitter.",
    choices: [
      { text: "Mock their late-coming sorrow", nextScene: "mock_consequence", tag: "harsh", feedback: "Even broken hearts deserve grace.", isCorrect: false, sentiment: "negative" },
      { text: "Sit among them in silence", nextScene: "ending", tag: "humble", feedback: "Numbers 14:39 — When Moses told these words to all the children of Israel, the people mourned greatly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Sit With Their Sorrow",
    text: "Scorn cannot mend the camp.\nBe near them in their pain.",
    choices: [
      { text: "Sit among them in silence", nextScene: "ending", tag: "humble", feedback: "You lower yourself beside them.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "The Long Road Ahead",
    text: "Dawn breaks on the wilderness path.\nFaith, not fear, will lead them home.",
    choices: [],
    isFinal: true,
  },
};
