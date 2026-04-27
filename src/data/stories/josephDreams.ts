import { StoryScene } from "@/data/stories/creation";

// JOSEPH INTERPRETS DREAMS — Genesis 41
// You are Joseph. Two years after the cupbearer forgot you, Pharaoh dreams.
// Each scene: 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars. Choice order randomized — no patterns.
// Themes: humility, God-given interpretation, wisdom, faithful service.

export const josephDreamsScenes: Record<string, StoryScene> = {
  // ============ ACT I — REMEMBERED AT LAST ============
  start: {
    id: "start",
    title: "Two Years Later",
    text: "Dawn breaks on your prison cell.\nFootsteps approach the iron door.",
    choices: [
      { text: "Curse the lost years", nextScene: "curse_consequence", tag: "bitter", feedback: "Bitterness has no place here.", sentiment: "negative" },
      { text: "Rise and pray to the Lord", nextScene: "summons", tag: "faithful", feedback: "Peace fills your heart.", sentiment: "positive" },
      { text: "Pretend to be sick", nextScene: "hide_consequence", tag: "fearful", feedback: "Fear cannot hide you.", sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Hollow Anger",
    text: "Anger only weighs you down.\nThe key still turns in the lock.",
    choices: [
      { text: "Rise and pray to the Lord", nextScene: "summons", tag: "faithful", feedback: "You let it go.", sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "No Hiding",
    text: "The guard pulls back the blanket.\n\"Pharaoh has called for you.\"",
    choices: [
      { text: "Rise and pray to the Lord", nextScene: "summons", tag: "faithful", feedback: "You stand up trembling but firm.", sentiment: "positive" },
    ],
  },
  summons: {
    id: "summons",
    title: "Pharaoh Calls",
    text: "\"Pharaoh demands you. Quickly!\"\nThe magicians have all failed him.",
    choices: [
      { text: "Boast you can solve it", nextScene: "boast_consequence", tag: "proud", feedback: "Pride goes before the fall.", sentiment: "negative" },
      { text: "Shave and dress for the king", nextScene: "preparation", tag: "obedient", feedback: "You honor the king's house.", sentiment: "positive" },
      { text: "Refuse out of fear", nextScene: "refuse_consequence", tag: "fearful", feedback: "There is no refusing Pharaoh.", sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Empty Words",
    text: "The guard frowns. \"Many boasted.\nNone could read the dream.\"",
    choices: [
      { text: "Shave and dress for the king", nextScene: "preparation", tag: "humble", feedback: "You bow your head.", sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Dragged Forth",
    text: "The guard grips your arm hard.\n\"Pharaoh will not be denied.\"",
    choices: [
      { text: "Shave and dress for the king", nextScene: "preparation", tag: "obedient", feedback: "You go willingly now.", sentiment: "positive" },
    ],
  },
  preparation: {
    id: "preparation",
    title: "Made Ready",
    text: "Razor and clean linen await.\nYou must look fit for a king.",
    choices: [
      { text: "Whisper a prayer to God", nextScene: "antechamber_arrive", tag: "faithful", feedback: "\"Lord, give me Your words.\"", sentiment: "positive" },
      { text: "Rehearse clever guesses", nextScene: "rehearse_consequence", tag: "proud", feedback: "Cleverness will not save you.", sentiment: "negative" },
    ],
  },
  rehearse_consequence: {
    id: "rehearse_consequence",
    title: "Empty Words",
    text: "Your guesses crumble in your mind.\nOnly God knows the dream.",
    choices: [
      { text: "Whisper a prayer to God", nextScene: "antechamber_arrive", tag: "faithful", feedback: "You let go of yourself.", sentiment: "positive" },
    ],
  },

  // ============ ACT II — BEFORE PHARAOH ============
  antechamber_arrive: {
    id: "antechamber_arrive",
    title: "Palace Halls",
    text: "Cool stone, painted columns.\nAn official waits to lead you in.",
    choices: [
      { text: "Demand pay before you speak", nextScene: "demand_consequence", tag: "greedy", feedback: "This is not a market.", sentiment: "negative" },
      { text: "Bow and follow in silence", nextScene: "throne_enter", tag: "humble", feedback: "Silence shows respect.", sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "A Hard Look",
    text: "The official stiffens. \"You stand\nbefore the king. Walk.\"",
    choices: [
      { text: "Bow and follow in silence", nextScene: "throne_enter", tag: "humble", feedback: "You bow your head.", sentiment: "positive" },
    ],
  },
  throne_enter: {
    id: "throne_enter",
    title: "The Throne Hall",
    text: "Light pours through high windows.\nPharaoh sits, deeply troubled.",
    choices: [
      { text: "Stare boldly at the king", nextScene: "stare_consequence", tag: "proud", feedback: "Such pride is foolish here.", sentiment: "negative" },
      { text: "Bow low to the ground", nextScene: "pharaoh_speaks", tag: "humble", feedback: "Your forehead touches stone.", sentiment: "positive" },
    ],
  },
  stare_consequence: {
    id: "stare_consequence",
    title: "Eyes Down",
    text: "Guards step forward. The official\nhisses, \"Bow before the king!\"",
    choices: [
      { text: "Bow low to the ground", nextScene: "pharaoh_speaks", tag: "humble", feedback: "You drop to your knees.", sentiment: "positive" },
    ],
  },
  pharaoh_speaks: {
    id: "pharaoh_speaks",
    title: "The King's Words",
    text: "\"I have dreamed. None can interpret.\nI hear you can. Is it so?\"",
    choices: [
      { text: "\"Yes, the gift is mine alone\"", nextScene: "claim_consequence", tag: "proud", feedback: "You take credit that isn't yours.", sentiment: "negative" },
      { text: "\"It is not in me; God will speak\"", nextScene: "humble_answer", tag: "faithful", feedback: "Truthful and humble.", sentiment: "positive" },
      { text: "\"I will try my best, mighty king\"", nextScene: "try_consequence", tag: "proud", feedback: "Trying is not enough.", sentiment: "negative" },
    ],
  },
  claim_consequence: {
    id: "claim_consequence",
    title: "Pride Cracks",
    text: "Pharaoh's eyes narrow. The room\ngrows quiet. You feel God's nudge.",
    choices: [
      { text: "\"Forgive me. God will answer\"", nextScene: "humble_answer", tag: "humble", feedback: "You correct yourself in time.", sentiment: "positive" },
    ],
  },
  try_consequence: {
    id: "try_consequence",
    title: "A Shaken Heart",
    text: "Words feel hollow in your mouth.\nThis is not your wisdom to give.",
    choices: [
      { text: "\"It is not in me; God will speak\"", nextScene: "humble_answer", tag: "humble", feedback: "You speak the truth at last.", sentiment: "positive" },
    ],
  },

  // ============ ACT III — THE DREAMS TOLD ============
  humble_answer: {
    id: "humble_answer",
    title: "God Will Answer",
    text: "Pharaoh leans forward, quieter now.\n\"Then hear my dream, Hebrew.\"",
    choices: [
      { text: "Listen with full attention", nextScene: "cattle_dream", tag: "faithful", feedback: "You quiet your heart.", sentiment: "positive" },
      { text: "Interrupt with questions", nextScene: "interrupt_consequence", tag: "proud", feedback: "Let the king speak first.", sentiment: "negative" },
    ],
  },
  interrupt_consequence: {
    id: "interrupt_consequence",
    title: "Be Silent",
    text: "Pharaoh raises his hand. \"Listen,\nthen speak. Not before.\"",
    choices: [
      { text: "Listen with full attention", nextScene: "cattle_dream", tag: "humble", feedback: "You bow your head and wait.", sentiment: "positive" },
    ],
  },
  cattle_dream: {
    id: "cattle_dream",
    title: "Seven Cattle",
    text: "\"Seven fat cows came from the Nile.\nSeven gaunt cows ate them whole.\"",
    choices: [
      { text: "Tell him what cows mean in Egypt", nextScene: "egypt_lore_consequence", tag: "proud", feedback: "This is no folk tale.", sentiment: "negative" },
      { text: "Listen for the second dream", nextScene: "grain_dream", tag: "wise", feedback: "Two dreams, one message.", sentiment: "positive" },
    ],
  },
  egypt_lore_consequence: {
    id: "egypt_lore_consequence",
    title: "Not Yet",
    text: "Pharaoh frowns. \"There is more.\nHear the second before you speak.\"",
    choices: [
      { text: "Listen for the second dream", nextScene: "grain_dream", tag: "wise", feedback: "You wait patiently.", sentiment: "positive" },
    ],
  },
  grain_dream: {
    id: "grain_dream",
    title: "Seven Heads",
    text: "\"Seven full heads of grain rose.\nSeven thin ones swallowed them up.\"",
    choices: [
      { text: "Praise Egypt's many gods", nextScene: "idols_consequence", tag: "unfaithful", feedback: "There is one true God.", sentiment: "negative" },
      { text: "Speak God's interpretation", nextScene: "interpretation", tag: "faithful", feedback: "God puts words in your mouth.", sentiment: "positive" },
      { text: "Ask for a sign first", nextScene: "sign_consequence", tag: "fearful", feedback: "God's word is the sign.", sentiment: "negative" },
    ],
  },
  idols_consequence: {
    id: "idols_consequence",
    title: "Holy Silence",
    text: "Your tongue stops mid-praise.\nGod alone gives the answer here.",
    choices: [
      { text: "Speak God's interpretation", nextScene: "interpretation", tag: "faithful", feedback: "You return to truth.", sentiment: "positive" },
    ],
  },
  sign_consequence: {
    id: "sign_consequence",
    title: "No Delay",
    text: "Pharaoh waits. The room is still.\nGod's word is already in you.",
    choices: [
      { text: "Speak God's interpretation", nextScene: "interpretation", tag: "faithful", feedback: "You open your mouth in faith.", sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE INTERPRETATION ============
  interpretation: {
    id: "interpretation",
    title: "One Dream",
    text: "\"The dreams are one, O King.\nGod has shown what He will do.\"",
    choices: [
      { text: "Soften the bad news", nextScene: "soften_consequence", tag: "fearful", feedback: "Truth must be spoken whole.", sentiment: "negative" },
      { text: "Speak it plainly", nextScene: "plain_truth", tag: "faithful", feedback: "Pharaoh leans in to hear.", sentiment: "positive" },
    ],
  },
  soften_consequence: {
    id: "soften_consequence",
    title: "Speak True",
    text: "Half-truth helps no one.\nA king must hear the full word.",
    choices: [
      { text: "Speak it plainly", nextScene: "plain_truth", tag: "faithful", feedback: "You find your courage.", sentiment: "positive" },
    ],
  },
  plain_truth: {
    id: "plain_truth",
    title: "Seven and Seven",
    text: "\"Seven years of plenty will come.\nThen seven years of famine.\"",
    choices: [
      { text: "Stop and wait for praise", nextScene: "stop_consequence", tag: "proud", feedback: "The word is not finished.", sentiment: "negative" },
      { text: "Continue with God's counsel", nextScene: "give_counsel", tag: "wise", feedback: "Wisdom must follow warning.", sentiment: "positive" },
    ],
  },
  stop_consequence: {
    id: "stop_consequence",
    title: "Finish It",
    text: "Pharaoh waits. \"What then?\nWhat must I do, Hebrew?\"",
    choices: [
      { text: "Continue with God's counsel", nextScene: "give_counsel", tag: "wise", feedback: "You give him the plan.", sentiment: "positive" },
    ],
  },
  give_counsel: {
    id: "give_counsel",
    title: "A Wise Plan",
    text: "\"Find a wise man. Store one fifth\nof the grain in years of plenty.\"",
    choices: [
      { text: "Name yourself for the role", nextScene: "self_consequence", tag: "proud", feedback: "Let the king choose.", sentiment: "negative" },
      { text: "Leave the choice to Pharaoh", nextScene: "leave_choice", tag: "humble", feedback: "Humility honors God.", sentiment: "positive" },
      { text: "Demand silver to share more", nextScene: "silver_consequence", tag: "greedy", feedback: "God gives freely.", sentiment: "negative" },
    ],
  },
  self_consequence: {
    id: "self_consequence",
    title: "Quiet, Joseph",
    text: "Pharaoh tilts his head. Pride\nwould undo all you have said.",
    choices: [
      { text: "Leave the choice to Pharaoh", nextScene: "leave_choice", tag: "humble", feedback: "You bow your head again.", sentiment: "positive" },
    ],
  },
  silver_consequence: {
    id: "silver_consequence",
    title: "No Price",
    text: "God's word is not for sale.\nYou feel shame for asking.",
    choices: [
      { text: "Leave the choice to Pharaoh", nextScene: "leave_choice", tag: "humble", feedback: "You return to humility.", sentiment: "positive" },
    ],
  },

  // ============ ACT V — RAISED UP ============
  leave_choice: {
    id: "leave_choice",
    title: "The King Decides",
    text: "Pharaoh stands. The court is silent.\n\"Can we find such a man?\"",
    choices: [
      { text: "Wait quietly for his word", nextScene: "pharaoh_chooses", tag: "humble", feedback: "Calm trust on your face.", sentiment: "positive" },
      { text: "Push your own name forward", nextScene: "push_consequence", tag: "proud", feedback: "Pride could ruin all.", sentiment: "negative" },
    ],
  },
  push_consequence: {
    id: "push_consequence",
    title: "Hold Your Tongue",
    text: "The court murmurs. Pharaoh frowns.\nYou hold your peace at last.",
    choices: [
      { text: "Wait quietly for his word", nextScene: "pharaoh_chooses", tag: "humble", feedback: "You yield to God's timing.", sentiment: "positive" },
    ],
  },
  pharaoh_chooses: {
    id: "pharaoh_chooses",
    title: "God's Spirit",
    text: "\"Can we find one with God's Spirit\nlike this man? You shall rule.\"",
    choices: [
      { text: "Refuse, you are unworthy", nextScene: "refuse2_consequence", tag: "fearful", feedback: "False humility is also pride.", sentiment: "negative" },
      { text: "Bow and accept God's call", nextScene: "ring_given", tag: "faithful", feedback: "You receive what God gives.", sentiment: "positive" },
    ],
  },
  refuse2_consequence: {
    id: "refuse2_consequence",
    title: "God's Hand",
    text: "Refusing the call is refusing God.\nThis door He has opened.",
    choices: [
      { text: "Bow and accept God's call", nextScene: "ring_given", tag: "faithful", feedback: "You bow and rise as servant.", sentiment: "positive" },
    ],
  },
  ring_given: {
    id: "ring_given",
    title: "The Signet Ring",
    text: "Pharaoh slides his ring on you.\n\"None shall lift hand without you.\"",
    choices: [
      { text: "Forget the God who lifted you", nextScene: "forget_consequence", tag: "unfaithful", feedback: "Never forget the Giver.", sentiment: "negative" },
      { text: "Give thanks to God in your heart", nextScene: "ride_out", tag: "faithful", feedback: "All glory to the Lord.", sentiment: "positive" },
    ],
  },
  forget_consequence: {
    id: "forget_consequence",
    title: "Remember Him",
    text: "The ring is heavy on your finger.\nThis honor is not your own.",
    choices: [
      { text: "Give thanks to God in your heart", nextScene: "ride_out", tag: "faithful", feedback: "You bow inwardly to Him.", sentiment: "positive" },
    ],
  },
  ride_out: {
    id: "ride_out",
    title: "Second Chariot",
    text: "You ride through Egypt's roads.\nMen bow as you pass.",
    choices: [
      { text: "Plan revenge on your brothers", nextScene: "revenge_consequence", tag: "bitter", feedback: "Forgiveness will come.", sentiment: "negative" },
      { text: "Plan to save God's people", nextScene: "ending", tag: "faithful", feedback: "You see God's larger purpose.", sentiment: "positive" },
      { text: "Boast to all you meet", nextScene: "boast2_consequence", tag: "proud", feedback: "Stay humble in honor.", sentiment: "negative" },
    ],
  },
  revenge_consequence: {
    id: "revenge_consequence",
    title: "Not Yet",
    text: "That story is not yet told.\nGod has bigger plans here.",
    choices: [
      { text: "Plan to save God's people", nextScene: "ending", tag: "faithful", feedback: "You set vengeance aside.", sentiment: "positive" },
    ],
  },
  boast2_consequence: {
    id: "boast2_consequence",
    title: "Stay Humble",
    text: "Pride could undo all of this.\nYou remember the prison floor.",
    choices: [
      { text: "Plan to save God's people", nextScene: "ending", tag: "humble", feedback: "You ride on in quiet faith.", sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "From Pit to Palace",
    text: "God remembered you in the dark.\nNow nations will be saved.",
    choices: [],
    isFinal: true,
  },
};
