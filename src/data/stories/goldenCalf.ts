import { StoryScene } from "@/data/stories/creation";

// THE GOLDEN CALF — Exodus 32
// You ARE Moses. From the summit, return to a corrupted camp.
// Dialogue ≤100 chars. Choices ≤40 chars. Order shuffled at runtime.

export const goldenCalfScenes: Record<string, StoryScene> = {
  // ============ ACT I — STILL ON THE MOUNTAIN ============
  start: {
    id: "start",
    title: "Forty Days on Sinai",
    text: "The cloud has held you for weeks.\nBelow, the camp grows restless.",
    choices: [
      { text: "Stay and hear every word of God", nextScene: "people_demand", tag: "obedient", feedback: "His instruction is not yet finished.", isCorrect: true, sentiment: "positive" },
      { text: "Hurry down before you are ready", nextScene: "haste_consequence", tag: "rash", feedback: "His work cannot be rushed.", isCorrect: false, sentiment: "negative" },
    ],
  },
  haste_consequence: {
    id: "haste_consequence",
    title: "Wait on the Lord",
    text: "His covenant must be received in full.\nReturn to His voice.",
    choices: [
      { text: "Stay and hear every word of God", nextScene: "people_demand", tag: "obedient", feedback: "You bow again before Him.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — IMPATIENCE BELOW ============
  people_demand: {
    id: "people_demand",
    title: "\"Where Is This Moses?\"",
    text: "The people press around Aaron.\n\"Make us gods to lead the way.\"",
    choices: [
      { text: "(Aaron) Give in to keep the peace", nextScene: "aaron_yields", tag: "weak", feedback: "Fear of men silenced fear of God.", isCorrect: false, sentiment: "negative" },
      { text: "(Aaron) Refuse and urge them to wait", nextScene: "aaron_yields", tag: "faithful", feedback: "But Aaron's courage fails him.", isCorrect: true, sentiment: "positive" },
      { text: "(Aaron) Blame Moses for the delay", nextScene: "aaron_yields", tag: "evasive", feedback: "Blame builds no altar to God.", isCorrect: false, sentiment: "negative" },
    ],
  },
  aaron_yields: {
    id: "aaron_yields",
    title: "Gold from Every Ear",
    text: "Aaron gathers their rings and gold.\nA fire is kindled in the camp.",
    choices: [
      { text: "(In vision) See and grieve in spirit", nextScene: "god_warns", tag: "humble", feedback: "The Lord shows you their sin.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — GOD WARNS MOSES ============
  god_warns: {
    id: "god_warns",
    title: "\"Go Down at Once\"",
    text: "\"Your people have corrupted themselves.\nThey worship a calf of gold.\"",
    choices: [
      { text: "Let His anger consume them", nextScene: "consume_consequence", tag: "harsh", feedback: "His mercy seeks an intercessor.", isCorrect: false, sentiment: "negative" },
      { text: "Plead for Israel before the Lord", nextScene: "intercede", tag: "faithful", feedback: "\"Remember Abraham, Isaac, Israel.\"", isCorrect: true, sentiment: "positive" },
      { text: "Ask Him to make a new nation of you", nextScene: "self_consequence", tag: "prideful", feedback: "His promise is not for you alone.", isCorrect: false, sentiment: "negative" },
    ],
  },
  consume_consequence: {
    id: "consume_consequence",
    title: "Stand in the Gap",
    text: "A shepherd does not abandon the flock.\nLift your voice for them.",
    choices: [
      { text: "Plead for Israel before the Lord", nextScene: "intercede", tag: "faithful", feedback: "Your prayer rises like incense.", isCorrect: true, sentiment: "positive" },
    ],
  },
  self_consequence: {
    id: "self_consequence",
    title: "Not for Your Name",
    text: "His covenant is wider than you.\nPray for the people, not yourself.",
    choices: [
      { text: "Plead for Israel before the Lord", nextScene: "intercede", tag: "faithful", feedback: "His anger relents at your words.", isCorrect: true, sentiment: "positive" },
    ],
  },

  intercede: {
    id: "intercede",
    title: "The Lord Relents",
    text: "His wrath turns from full ruin.\nNow take the tablets and descend.",
    choices: [
      { text: "Carry the tablets down to the camp", nextScene: "descent", tag: "obedient", feedback: "Two stones, written by His finger.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE DESCENT ============
  descent: {
    id: "descent",
    title: "Sound of a Strange Song",
    text: "Joshua hears war in the camp.\n\"No,\" you say. \"It is revelry.\"",
    choices: [
      { text: "Pretend you did not hear it", nextScene: "ignore_consequence", tag: "evasive", feedback: "Sin cannot be unheard.", isCorrect: false, sentiment: "negative" },
      { text: "Press on toward the noisy camp", nextScene: "see_idol", tag: "faithful", feedback: "Your steps grow heavier.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Face the Truth",
    text: "A leader cannot turn away.\nGo and see what they have done.",
    choices: [
      { text: "Press on toward the noisy camp", nextScene: "see_idol", tag: "faithful", feedback: "Your jaw sets in resolve.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — SEEING THE CALF ============
  see_idol: {
    id: "see_idol",
    title: "The Calf and the Dance",
    text: "Firelight glints on a golden idol.\nThe people circle it in song.",
    choices: [
      { text: "Hide the tablets and walk on", nextScene: "hide_consequence", tag: "evasive", feedback: "His law cannot be smuggled past sin.", isCorrect: false, sentiment: "negative" },
      { text: "Throw the tablets down in holy wrath", nextScene: "tablets_broken", tag: "righteous", feedback: "Stone shatters at the foot of Sinai.", isCorrect: true, sentiment: "positive" },
      { text: "Join the circle to learn their hearts", nextScene: "join_consequence", tag: "weak", feedback: "Holiness does not bow to idols.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "His Word Demands Response",
    text: "The covenant they broke must be seen.\nLet the stones speak truth.",
    choices: [
      { text: "Throw the tablets down in holy wrath", nextScene: "tablets_broken", tag: "righteous", feedback: "The crash silences the camp.", isCorrect: true, sentiment: "positive" },
    ],
  },
  join_consequence: {
    id: "join_consequence",
    title: "No Compromise with Idols",
    text: "Light cannot dance with darkness.\nStand against, not among.",
    choices: [
      { text: "Throw the tablets down in holy wrath", nextScene: "tablets_broken", tag: "righteous", feedback: "Your steps turn toward the altar.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VI — DESTRUCTION OF THE IDOL ============
  tablets_broken: {
    id: "tablets_broken",
    title: "Silence in the Camp",
    text: "The dancing stops. Eyes drop low.\nThe calf still gleams on its altar.",
    choices: [
      { text: "Burn it, grind it, scatter the dust", nextScene: "aaron_questioned", tag: "righteous", feedback: "Nothing of the idol remains.", isCorrect: true, sentiment: "positive" },
      { text: "Leave the calf as a warning", nextScene: "leave_consequence", tag: "weak", feedback: "An idol left is an idol kept.", isCorrect: false, sentiment: "negative" },
    ],
  },
  leave_consequence: {
    id: "leave_consequence",
    title: "Tear It Down",
    text: "Idols must not be tolerated.\nDestroy it without delay.",
    choices: [
      { text: "Burn it, grind it, scatter the dust", nextScene: "aaron_questioned", tag: "righteous", feedback: "Hammer meets gold.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT VII — AARON ANSWERS ============
  aaron_questioned: {
    id: "aaron_questioned",
    title: "\"What Did They Do to You?\"",
    text: "Aaron stands trembling before you.\n\"The fire… and out came this calf.\"",
    choices: [
      { text: "Shrug off the people's great sin", nextScene: "shrug_consequence", tag: "weak", feedback: "Sin cannot be ignored.", isCorrect: false, sentiment: "negative" },
      { text: "Call all who are for the Lord to you", nextScene: "repentance", tag: "faithful", feedback: "The Levites step to your side.", isCorrect: true, sentiment: "positive" },
      { text: "Punish only Aaron and spare the rest", nextScene: "single_consequence", tag: "evasive", feedback: "All Israel shared this guilt.", isCorrect: false, sentiment: "negative" },
    ],
  },
  shrug_consequence: {
    id: "shrug_consequence",
    title: "Holiness Demands Action",
    text: "A camp unjudged learns nothing.\nCall the faithful to stand.",
    choices: [
      { text: "Call all who are for the Lord to you", nextScene: "repentance", tag: "faithful", feedback: "Your voice rings clear.", isCorrect: true, sentiment: "positive" },
    ],
  },
  single_consequence: {
    id: "single_consequence",
    title: "All Have Sinned",
    text: "Aaron alone cannot bear this.\nThe whole camp must repent.",
    choices: [
      { text: "Call all who are for the Lord to you", nextScene: "repentance", tag: "faithful", feedback: "The Levites gather around you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  repentance: {
    id: "repentance",
    title: "Hearts Bowed Low",
    text: "The camp kneels in dust and tears.\nThe Lord still walks with His people.",
    choices: [
      { text: "Climb again to plead for forgiveness", nextScene: "ending", tag: "humble", feedback: "\"Blot me out, but spare them.\"", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "Mercy After Wrath",
    text: "The covenant bruised but not broken.\nIsrael walks on, humbled and held.",
    choices: [],
    isFinal: true,
  },
};
