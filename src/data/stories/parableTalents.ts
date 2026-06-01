import { StoryScene } from "@/data/stories/creation";

// PARABLE OF THE TALENTS — Matthew 25:14-30
// You stand among the servants as the master entrusts his wealth.

export const parableTalentsScenes: Record<string, StoryScene> = {
  // ACT I — JESUS BEGINS THE PARABLE
  start: {
    id: "start",
    title: "The Parable",
    text: "Jesus turns to you.\n\"A man entrusted his wealth to his servants.\"",
    choices: [
      { text: "Walk away, unconcerned", nextScene: "leave_consequence", tag: "doubtful", feedback: "Stay. This story is for you.", isCorrect: false, sentiment: "negative" },
      { text: "Listen with open heart", nextScene: "giving", tag: "faithful", feedback: "His voice steadies you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  leave_consequence: {
    id: "leave_consequence",
    title: "Come Back",
    text: "Every gift in your hand waits.\nReturn and hear.",
    choices: [
      { text: "Listen with open heart", nextScene: "giving", tag: "faithful", feedback: "You step closer.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE MASTER GIVES
  giving: {
    id: "giving",
    title: "The Master Gives",
    text: "He hands out talents:\nfive, two, and one, each by ability.",
    choices: [
      { text: "Resent the smaller share", nextScene: "resent_consequence", tag: "fearful", feedback: "Each gift is fully yours.", isCorrect: false, sentiment: "negative" },
      { text: "Receive what is given to you", nextScene: "five", tag: "faithful", feedback: "Your hands open.", isCorrect: true, sentiment: "positive" },
    ],
  },
  resent_consequence: {
    id: "resent_consequence",
    title: "Yours Is Enough",
    text: "Envy buries every talent.\nReceive what is yours.",
    choices: [
      { text: "Receive what is given to you", nextScene: "five", tag: "faithful", feedback: "Resentment fades.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE FIVE-TALENT SERVANT
  five: {
    id: "five",
    title: "Five Talents",
    text: "The first servant lifts five bags.\n\"I will go and trade at once.\"",
    choices: [
      { text: "Mock his ambition", nextScene: "mock_consequence", tag: "doubtful", feedback: "Courage is not pride.", isCorrect: false, sentiment: "negative" },
      { text: "Honor his courage", nextScene: "two", tag: "faithful", feedback: "You nod with respect.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "He Walks in Faith",
    text: "He trusts what was placed in him.\nLearn from his step.",
    choices: [
      { text: "Honor his courage", nextScene: "two", tag: "faithful", feedback: "Your mockery softens.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE TWO-TALENT SERVANT
  two: {
    id: "two",
    title: "Two Talents",
    text: "The second weighs two coins.\nHe sets out quietly to work.",
    choices: [
      { text: "Tell him to wait for more", nextScene: "wait_consequence", tag: "fearful", feedback: "Begin with what you hold.", isCorrect: false, sentiment: "negative" },
      { text: "Bless his small beginning", nextScene: "one", tag: "faithful", feedback: "Small starts grow far.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wait_consequence: {
    id: "wait_consequence",
    title: "Begin Today",
    text: "Tomorrow has its own seeds.\nUse what is in your hand.",
    choices: [
      { text: "Bless his small beginning", nextScene: "one", tag: "faithful", feedback: "You let him go.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — THE ONE-TALENT SERVANT HIDES
  one: {
    id: "one",
    title: "One Talent",
    text: "The third digs a hole at dusk.\nHe buries his single coin in fear.",
    choices: [
      { text: "Tell him fear is wisdom", nextScene: "fear_consequence", tag: "fearful", feedback: "Fear hides what should shine.", isCorrect: false, sentiment: "negative" },
      { text: "Hide your own gift as well", nextScene: "hide_consequence", tag: "doubtful", feedback: "Buried gifts feed no one.", isCorrect: false, sentiment: "negative" },
      { text: "Beg him to use it instead", nextScene: "return", tag: "faithful", feedback: "Your voice trembles for him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  fear_consequence: {
    id: "fear_consequence",
    title: "Fear Is Not Faith",
    text: "Caution that buries is not wise.\nIt is faithless.",
    choices: [
      { text: "Beg him to use it instead", nextScene: "return", tag: "faithful", feedback: "You change your mind.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Lift It Out",
    text: "No gift was meant for the dark.\nDig it up again.",
    choices: [
      { text: "Beg him to use it instead", nextScene: "return", tag: "faithful", feedback: "You uncover yours too.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — THE MASTER RETURNS
  return: {
    id: "return",
    title: "The Master Returns",
    text: "After a long time he comes back.\n\"Show me what you have done.\"",
    choices: [
      { text: "Make excuses for everyone", nextScene: "excuse_consequence", tag: "doubtful", feedback: "Account for yourself.", isCorrect: false, sentiment: "negative" },
      { text: "Stand and give your account", nextScene: "reward_five", tag: "faithful", feedback: "You step forward calmly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  excuse_consequence: {
    id: "excuse_consequence",
    title: "Own Your Work",
    text: "Each life answers for itself.\nSpeak for what is yours.",
    choices: [
      { text: "Stand and give your account", nextScene: "reward_five", tag: "faithful", feedback: "Your voice steadies.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — REWARD FOR THE FIVE
  reward_five: {
    id: "reward_five",
    title: "Well Done",
    text: "The first brings ten talents.\n\"Well done, good and faithful servant.\"",
    choices: [
      { text: "Envy his great reward", nextScene: "envy_consequence", tag: "fearful", feedback: "His joy can be yours too.", isCorrect: false, sentiment: "negative" },
      { text: "Rejoice with his master", nextScene: "reward_two", tag: "faithful", feedback: "Joy fills the room.", isCorrect: true, sentiment: "positive" },
    ],
  },
  envy_consequence: {
    id: "envy_consequence",
    title: "Run Your Race",
    text: "Faithfulness, not size, is praised.\nYou will be measured the same.",
    choices: [
      { text: "Rejoice with his master", nextScene: "reward_two", tag: "faithful", feedback: "Envy melts away.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — REWARD FOR THE TWO
  reward_two: {
    id: "reward_two",
    title: "Equal Praise",
    text: "The second brings four talents.\n\"Well done. Enter into joy.\"",
    choices: [
      { text: "Decide small gifts don't matter", nextScene: "small_consequence", tag: "doubtful", feedback: "Heaven counts faithfulness.", isCorrect: false, sentiment: "negative" },
      { text: "See that faithfulness is praised", nextScene: "judgment_one", tag: "faithful", feedback: "A truth settles in you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  small_consequence: {
    id: "small_consequence",
    title: "All of It Matters",
    text: "Two talents earned the same words.\nNothing given is too small.",
    choices: [
      { text: "See that faithfulness is praised", nextScene: "judgment_one", tag: "faithful", feedback: "Your view shifts.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IX — JUDGMENT OF THE THIRD
  judgment_one: {
    id: "judgment_one",
    title: "I Was Afraid",
    text: "The third holds out a dirty coin.\n\"I was afraid. I hid it away.\"",
    choices: [
      { text: "Defend his fear as humble", nextScene: "defend_consequence", tag: "doubtful", feedback: "Fear was never his master's wish.", isCorrect: false, sentiment: "negative" },
      { text: "Mourn what was never used", nextScene: "ending", tag: "faithful", feedback: "Tears rise for the buried gift.", isCorrect: true, sentiment: "positive" },
    ],
  },
  defend_consequence: {
    id: "defend_consequence",
    title: "Fear Is Not Humility",
    text: "True humility uses the gift.\nIt does not hide.",
    choices: [
      { text: "Mourn what was never used", nextScene: "ending", tag: "faithful", feedback: "You sit with the truth.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING — THE CHARGE
  ending: {
    id: "ending",
    title: "Use What You Hold",
    text: "Jesus looks at you and says,\n\"To everyone given much, much is asked.\"",
    choices: [],
    isFinal: true,
  },
};
