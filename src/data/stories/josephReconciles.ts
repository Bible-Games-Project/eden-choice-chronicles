import { StoryScene } from "@/data/stories/creation";

// JOSEPH RECONCILES WITH HIS BROTHERS — Genesis 43–46
// You are Joseph, vizier of Egypt. Your brothers return — with Benjamin.
// SCOPE: second arrival → silver cup test → Judah's plea → reveal →
//        forgiveness and reunion with Jacob.
// Each scene: 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars. Choice order randomized.

export const josephReconcilesScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE SECOND ARRIVAL ============
  start: {
    id: "start",
    title: "They Return",
    text: "Eleven brothers stand below.\nBenjamin is among them. Your heart burns.",
    choices: [
      { text: "Order the steward to greet them", nextScene: "greet", tag: "wise", feedback: "You move with control.", isCorrect: true, sentiment: "positive" },
      { text: "Strike them down for old wrongs", nextScene: "strike_consequence", tag: "bitter", feedback: "Vengeance is not God's path.", isCorrect: false, sentiment: "negative" },
      { text: "Hide and let them leave", nextScene: "hide_consequence", tag: "fearful", feedback: "Father waits for word.", isCorrect: false, sentiment: "negative" },
    ],
  },
  strike_consequence: {
    id: "strike_consequence",
    title: "Hold Your Hand",
    text: "God did not raise you to crush them.\nThere is a higher purpose.",
    choices: [
      { text: "Order the steward to greet them", nextScene: "greet", tag: "wise", feedback: "You breathe deeply.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "No Hiding Now",
    text: "Father needs his sons home with grain.\nYou must act with care.",
    choices: [
      { text: "Order the steward to greet them", nextScene: "greet", tag: "wise", feedback: "You step into the hall.", isCorrect: true, sentiment: "positive" },
    ],
  },
  greet: {
    id: "greet",
    title: "Bring Them In",
    text: "\"Bring these men into my house.\nPrepare a feast at noon.\"",
    choices: [
      { text: "Have them led to your home", nextScene: "summon_meal", tag: "kind", feedback: "The steward bows and obeys.", isCorrect: true, sentiment: "positive" },
      { text: "Demand the silver first", nextScene: "demand_silver_consequence", tag: "harsh", feedback: "First show them mercy.", isCorrect: false, sentiment: "negative" },
    ],
  },
  demand_silver_consequence: {
    id: "demand_silver_consequence",
    title: "Mercy First",
    text: "They are afraid of the returned silver.\nReassure them gently.",
    choices: [
      { text: "Have them led to your home", nextScene: "summon_meal", tag: "kind", feedback: "The steward leads them in.", isCorrect: true, sentiment: "positive" },
    ],
  },
  summon_meal: {
    id: "summon_meal",
    title: "At Your Door",
    text: "They tremble at your threshold.\n\"It is about the silver,\" they whisper.",
    choices: [
      { text: "Speak peace through the steward", nextScene: "weep1", tag: "merciful", feedback: "\"Peace be with you. Fear not.\"", isCorrect: true, sentiment: "positive" },
      { text: "Let them sweat in fear", nextScene: "fear_consequence", tag: "cruel", feedback: "Mercy serves God's plan.", isCorrect: false, sentiment: "negative" },
    ],
  },
  fear_consequence: {
    id: "fear_consequence",
    title: "Calm Their Hearts",
    text: "Fear closes hearts. You need them open.\nSpeak peace through the steward.",
    choices: [
      { text: "Speak peace through them", nextScene: "weep1", tag: "merciful", feedback: "Their shoulders ease.", isCorrect: true, sentiment: "positive" },
    ],
  },
  weep1: {
    id: "weep1",
    title: "First Sight of Benjamin",
    text: "You see your mother's son.\nA flood rises in your chest.",
    choices: [
      { text: "Excuse yourself to weep alone", nextScene: "recover", tag: "tender", feedback: "You hide your tears in your chamber.", isCorrect: true, sentiment: "positive" },
      { text: "Embrace him in front of all", nextScene: "embrace_too_soon_consequence", tag: "rash", feedback: "Not yet. The test is not done.", isCorrect: false, sentiment: "negative" },
    ],
  },
  embrace_too_soon_consequence: {
    id: "embrace_too_soon_consequence",
    title: "Too Soon",
    text: "Their hearts are not yet proven.\nWithdraw and weep alone.",
    choices: [
      { text: "Excuse yourself to weep alone", nextScene: "recover", tag: "tender", feedback: "You step away just in time.", isCorrect: true, sentiment: "positive" },
    ],
  },
  recover: {
    id: "recover",
    title: "Wash Your Face",
    text: "You return composed.\nThe meal is set, brothers seated by age.",
    choices: [
      { text: "Sit with them and break bread", nextScene: "dine", tag: "gracious", feedback: "Benjamin's portion is five times more.", isCorrect: true, sentiment: "positive" },
      { text: "Eat apart, stay aloof", nextScene: "aloof_consequence", tag: "cold", feedback: "Honor them this hour.", isCorrect: false, sentiment: "negative" },
    ],
  },
  aloof_consequence: {
    id: "aloof_consequence",
    title: "Honor the Table",
    text: "A shared meal opens hearts.\nSit, and bless their bread.",
    choices: [
      { text: "Sit with them and break bread", nextScene: "dine", tag: "gracious", feedback: "They eat and marvel.", isCorrect: true, sentiment: "positive" },
    ],
  },
  dine: {
    id: "dine",
    title: "A Strange Wonder",
    text: "They marvel they sit by birth order.\nBenjamin's plate is heaped highest.",
    choices: [
      { text: "Plan one final test tonight", nextScene: "cup_plan", tag: "wise", feedback: "You must know their hearts toward Benjamin.", isCorrect: true, sentiment: "positive" },
      { text: "Send them home content", nextScene: "send_home_consequence", tag: "fearful", feedback: "First test their love for Benjamin.", isCorrect: false, sentiment: "negative" },
    ],
  },
  send_home_consequence: {
    id: "send_home_consequence",
    title: "One Test Remains",
    text: "Will they abandon Benjamin as they\nabandoned you? You must know.",
    choices: [
      { text: "Plan one final test tonight", nextScene: "cup_plan", tag: "wise", feedback: "You call the steward in secret.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE SILVER CUP ============
  cup_plan: {
    id: "cup_plan",
    title: "The Silver Cup",
    text: "\"Hide my cup in Benjamin's sack.\nReturn their silver too.\"",
    choices: [
      { text: "Place the cup in his sack", nextScene: "send_off2", tag: "test", feedback: "The steward obeys in silence.", isCorrect: true, sentiment: "positive" },
      { text: "Cancel — too cruel a test", nextScene: "cancel_consequence", tag: "fearful", feedback: "Their hearts must be revealed.", isCorrect: false, sentiment: "negative" },
      { text: "Hide it in Reuben's sack", nextScene: "wrong_sack_consequence", tag: "unwise", feedback: "Only Benjamin tests their love.", isCorrect: false, sentiment: "negative" },
    ],
  },
  cancel_consequence: {
    id: "cancel_consequence",
    title: "See It Through",
    text: "Without this test you will never know.\nGod has prepared the moment.",
    choices: [
      { text: "Place the cup in his sack", nextScene: "send_off2", tag: "test", feedback: "The steward bows and obeys.", isCorrect: true, sentiment: "positive" },
    ],
  },
  wrong_sack_consequence: {
    id: "wrong_sack_consequence",
    title: "Benjamin Alone",
    text: "Only Benjamin's danger reveals\nwhether they have changed.",
    choices: [
      { text: "Place the cup in Benjamin's sack", nextScene: "send_off2", tag: "wise", feedback: "The steward changes course.", isCorrect: true, sentiment: "positive" },
    ],
  },
  send_off2: {
    id: "send_off2",
    title: "Dawn Departure",
    text: "Donkeys laden, they ride out at dawn,\nlight in their step.",
    choices: [
      { text: "Send the steward to overtake them", nextScene: "overtake", tag: "test", feedback: "Hooves thunder after them.", isCorrect: true, sentiment: "positive" },
      { text: "Let them ride home in peace", nextScene: "let_go_consequence", tag: "fearful", feedback: "The test must finish.", isCorrect: false, sentiment: "negative" },
    ],
  },
  let_go_consequence: {
    id: "let_go_consequence",
    title: "Finish the Test",
    text: "If they leave now, you learn nothing.\nSend the steward at once.",
    choices: [
      { text: "Send the steward to overtake them", nextScene: "overtake", tag: "test", feedback: "He rides hard and catches them.", isCorrect: true, sentiment: "positive" },
    ],
  },
  overtake: {
    id: "overtake",
    title: "Halted on the Road",
    text: "\"Why have you repaid good with evil?\nWhere is my master's silver cup?\"",
    choices: [
      { text: "Have him search every sack", nextScene: "search_sacks", tag: "test", feedback: "They unload, certain of innocence.", isCorrect: true, sentiment: "positive" },
      { text: "Have him accuse Reuben outright", nextScene: "accuse_one_consequence", tag: "unjust", feedback: "Search them all, fairly.", isCorrect: false, sentiment: "negative" },
    ],
  },
  accuse_one_consequence: {
    id: "accuse_one_consequence",
    title: "Search All Fairly",
    text: "An unjust accusation breaks the test.\nLet the cup speak for itself.",
    choices: [
      { text: "Have him search every sack", nextScene: "search_sacks", tag: "test", feedback: "Sacks open one by one.", isCorrect: true, sentiment: "positive" },
    ],
  },
  search_sacks: {
    id: "search_sacks",
    title: "Eldest to Youngest",
    text: "Sack after sack — clean, clean, clean.\nBenjamin's is opened last.",
    choices: [
      { text: "Watch the truth come out", nextScene: "found_in_benjamin", tag: "patient", feedback: "The cup gleams in the grain.", isCorrect: true, sentiment: "positive" },
      { text: "Stop the search now", nextScene: "stop_consequence", tag: "fearful", feedback: "The truth must surface.", isCorrect: false, sentiment: "negative" },
    ],
  },
  stop_consequence: {
    id: "stop_consequence",
    title: "Let It Surface",
    text: "Stopping now buries the truth.\nGod is at work in this moment.",
    choices: [
      { text: "Watch the truth come out", nextScene: "found_in_benjamin", tag: "patient", feedback: "Benjamin's sack is opened.", isCorrect: true, sentiment: "positive" },
    ],
  },
  found_in_benjamin: {
    id: "found_in_benjamin",
    title: "The Cup Found",
    text: "Silver glints in Benjamin's sack.\nThe brothers tear their robes.",
    choices: [
      { text: "Bring all eleven back to you", nextScene: "return_to_palace", tag: "test", feedback: "They turn their donkeys around.", isCorrect: true, sentiment: "positive" },
      { text: "Take only Benjamin captive", nextScene: "take_one_consequence", tag: "unwise", feedback: "Will they all stand for him?", isCorrect: false, sentiment: "negative" },
    ],
  },
  take_one_consequence: {
    id: "take_one_consequence",
    title: "Bring Them All",
    text: "You must see if they stand by Benjamin.\nLet them all return.",
    choices: [
      { text: "Bring all eleven back to you", nextScene: "return_to_palace", tag: "test", feedback: "They all turn back together.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT III — RETURN TO THE VIZIER ============
  return_to_palace: {
    id: "return_to_palace",
    title: "Back Before You",
    text: "Eleven men fall to the ground.\nDust on their faces, hearts broken.",
    choices: [
      { text: "Speak harsh: \"What have you done?\"", nextScene: "fall_down", tag: "test", feedback: "The room goes silent.", isCorrect: true, sentiment: "positive" },
      { text: "Forgive instantly with no test", nextScene: "no_test_consequence", tag: "rash", feedback: "Hear Judah first.", isCorrect: false, sentiment: "negative" },
    ],
  },
  no_test_consequence: {
    id: "no_test_consequence",
    title: "Wait for Judah",
    text: "Their words now will reveal everything.\nLet them speak.",
    choices: [
      { text: "Speak harsh: \"What have you done?\"", nextScene: "fall_down", tag: "test", feedback: "You square your shoulders.", isCorrect: true, sentiment: "positive" },
    ],
  },
  fall_down: {
    id: "fall_down",
    title: "On Their Knees",
    text: "\"God has uncovered our guilt,\" they cry.\n\"We are all your servants.\"",
    choices: [
      { text: "\"Only the guilty stays. Go free.\"", nextScene: "judah_steps", tag: "test", feedback: "You watch their faces closely.", isCorrect: true, sentiment: "positive" },
      { text: "\"All of you to prison now.\"", nextScene: "all_prison_consequence", tag: "unjust", feedback: "Test only Benjamin.", isCorrect: false, sentiment: "negative" },
      { text: "Send Benjamin to die", nextScene: "death_consequence", tag: "cruel", feedback: "You would never harm him.", isCorrect: false, sentiment: "negative" },
    ],
  },
  all_prison_consequence: {
    id: "all_prison_consequence",
    title: "Only Benjamin",
    text: "The test must isolate Benjamin alone.\nWill the others abandon him?",
    choices: [
      { text: "\"Only the guilty stays. Go free.\"", nextScene: "judah_steps", tag: "test", feedback: "You retract the order.", isCorrect: true, sentiment: "positive" },
    ],
  },
  death_consequence: {
    id: "death_consequence",
    title: "Never",
    text: "Benjamin is your blood. The test is\nfor the brothers, not for him.",
    choices: [
      { text: "\"Only the guilty stays. Go free.\"", nextScene: "judah_steps", tag: "test", feedback: "You hold steady.", isCorrect: true, sentiment: "positive" },
    ],
  },
  judah_steps: {
    id: "judah_steps",
    title: "Judah Steps Forward",
    text: "Judah lifts his head from the dust.\n\"My lord, hear your servant speak.\"",
    choices: [
      { text: "Allow Judah to speak fully", nextScene: "plea", tag: "wise", feedback: "You wait in silence.", isCorrect: true, sentiment: "positive" },
      { text: "Silence him immediately", nextScene: "silence_consequence", tag: "fearful", feedback: "Hear his heart.", isCorrect: false, sentiment: "negative" },
    ],
  },
  silence_consequence: {
    id: "silence_consequence",
    title: "Hear Him",
    text: "Judah's words are the test's true answer.\nLet him speak.",
    choices: [
      { text: "Allow Judah to speak fully", nextScene: "plea", tag: "wise", feedback: "You nod once.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT IV — JUDAH'S PLEA & THE REVEAL ============
  plea: {
    id: "plea",
    title: "\"Take Me Instead\"",
    text: "\"My father's life is bound to the boy.\nLet me stay. Let Benjamin go home.\"",
    choices: [
      { text: "Send all attendants out at once", nextScene: "send_attendants_out", tag: "tender", feedback: "You can hold back no longer.", isCorrect: true, sentiment: "positive" },
      { text: "Mock his offer coldly", nextScene: "mock_consequence", tag: "cruel", feedback: "His pledge is the test's answer.", isCorrect: false, sentiment: "negative" },
      { text: "Accept Judah, send Benjamin off", nextScene: "accept_consequence", tag: "harsh", feedback: "The time has come to reveal.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "He Has Changed",
    text: "Judah, who once sold you, now offers\nhimself for his brother. Reveal yourself.",
    choices: [
      { text: "Send all attendants out at once", nextScene: "send_attendants_out", tag: "tender", feedback: "Tears blur your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  accept_consequence: {
    id: "accept_consequence",
    title: "No More Hiding",
    text: "The test is finished. Their hearts\nare proven. It is time.",
    choices: [
      { text: "Send all attendants out at once", nextScene: "send_attendants_out", tag: "tender", feedback: "Your voice trembles.", isCorrect: true, sentiment: "positive" },
    ],
  },
  send_attendants_out: {
    id: "send_attendants_out",
    title: "\"Go Out from Me!\"",
    text: "The hall empties of Egyptians.\nOnly eleven brothers remain.",
    choices: [
      { text: "Weep aloud and tell them", nextScene: "reveal", tag: "tender", feedback: "Sobs shake your whole body.", isCorrect: true, sentiment: "positive" },
      { text: "Frighten them once more", nextScene: "frighten_consequence", tag: "cruel", feedback: "The waiting is over.", isCorrect: false, sentiment: "negative" },
    ],
  },
  frighten_consequence: {
    id: "frighten_consequence",
    title: "Enough",
    text: "The waiting is finished. Speak.\nLet love break the silence.",
    choices: [
      { text: "Weep aloud and tell them", nextScene: "reveal", tag: "tender", feedback: "You cannot hold it in.", isCorrect: true, sentiment: "positive" },
    ],
  },
  reveal: {
    id: "reveal",
    title: "\"I Am Joseph\"",
    text: "\"I am Joseph your brother.\nIs my father still alive?\"",
    choices: [
      { text: "Wait as they stand stunned", nextScene: "brothers_silent", tag: "patient", feedback: "Not one of them can answer.", isCorrect: true, sentiment: "positive" },
      { text: "Roar in triumph at them", nextScene: "roar_consequence", tag: "harsh", feedback: "Be gentle now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  roar_consequence: {
    id: "roar_consequence",
    title: "Gentleness",
    text: "They are terrified. This is not\nthe moment for triumph.",
    choices: [
      { text: "Wait as they stand stunned", nextScene: "brothers_silent", tag: "patient", feedback: "You soften your voice.", isCorrect: true, sentiment: "positive" },
    ],
  },
  brothers_silent: {
    id: "brothers_silent",
    title: "Stunned to Silence",
    text: "They cannot speak. They cannot move.\nTerror and shame fill their eyes.",
    choices: [
      { text: "\"Come near to me, I beg you.\"", nextScene: "comfort", tag: "tender", feedback: "Your arms open wide.", isCorrect: true, sentiment: "positive" },
      { text: "Demand they confess all", nextScene: "demand_confess_consequence", tag: "harsh", feedback: "Comfort them first.", isCorrect: false, sentiment: "negative" },
    ],
  },
  demand_confess_consequence: {
    id: "demand_confess_consequence",
    title: "Comfort First",
    text: "Forgiveness is given before it is asked.\nDraw them close.",
    choices: [
      { text: "\"Come near to me, I beg you.\"", nextScene: "comfort", tag: "tender", feedback: "They take one trembling step.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ============ ACT V — FORGIVENESS & REUNION ============
  comfort: {
    id: "comfort",
    title: "\"Do Not Be Grieved\"",
    text: "\"I am Joseph, whom you sold.\nDo not be angry with yourselves.\"",
    choices: [
      { text: "\"God sent me here before you\"", nextScene: "it_was_god", tag: "faithful", feedback: "Their tears begin to fall.", isCorrect: true, sentiment: "positive" },
      { text: "\"You will pay for what you did\"", nextScene: "condemn_consequence", tag: "bitter", feedback: "God has turned it to good.", isCorrect: false, sentiment: "negative" },
    ],
  },
  condemn_consequence: {
    id: "condemn_consequence",
    title: "God's Hand",
    text: "It was God's plan, not their cruelty,\nthat brought you here. Tell them.",
    choices: [
      { text: "\"God sent me here before you\"", nextScene: "it_was_god", tag: "faithful", feedback: "You speak the truth gently.", isCorrect: true, sentiment: "positive" },
    ],
  },
  it_was_god: {
    id: "it_was_god",
    title: "To Save Many Lives",
    text: "\"To preserve a remnant for you,\nto save many lives — God did this.\"",
    choices: [
      { text: "Embrace Benjamin first", nextScene: "kiss_benjamin", tag: "loving", feedback: "You fall on his neck weeping.", isCorrect: true, sentiment: "positive" },
      { text: "Send them away in shame", nextScene: "shame_consequence", tag: "cold", feedback: "Embrace your brother.", isCorrect: false, sentiment: "negative" },
    ],
  },
  shame_consequence: {
    id: "shame_consequence",
    title: "Embrace",
    text: "Forgiveness without embrace is empty.\nGo to Benjamin first.",
    choices: [
      { text: "Embrace Benjamin first", nextScene: "kiss_benjamin", tag: "loving", feedback: "You hold him tight.", isCorrect: true, sentiment: "positive" },
    ],
  },
  kiss_benjamin: {
    id: "kiss_benjamin",
    title: "Brother on Brother",
    text: "Benjamin weeps on your neck.\nThen you kiss every brother and weep.",
    choices: [
      { text: "Tell them to bring Father here", nextScene: "send_for_jacob", tag: "loving", feedback: "\"Hurry — bring my father down.\"", isCorrect: true, sentiment: "positive" },
      { text: "Hide all this from Father", nextScene: "hide_jacob_consequence", tag: "fearful", feedback: "Father must know. Quickly.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hide_jacob_consequence: {
    id: "hide_jacob_consequence",
    title: "Tell Father",
    text: "Jacob has mourned you for years.\nDo not steal one more day from him.",
    choices: [
      { text: "Tell them to bring Father here", nextScene: "send_for_jacob", tag: "loving", feedback: "You give them wagons and gifts.", isCorrect: true, sentiment: "positive" },
    ],
  },
  send_for_jacob: {
    id: "send_for_jacob",
    title: "Wagons for the Journey",
    text: "Pharaoh hears and rejoices.\n\"Give them the best of all Egypt.\"",
    choices: [
      { text: "Send them off with peace", nextScene: "jacob_hears", tag: "wise", feedback: "\"Do not quarrel on the road.\"", isCorrect: true, sentiment: "positive" },
      { text: "Send guards to watch them", nextScene: "guards_consequence", tag: "fearful", feedback: "Trust them now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  guards_consequence: {
    id: "guards_consequence",
    title: "Trust Restored",
    text: "Mistrust now wounds the new bond.\nLet them go in peace.",
    choices: [
      { text: "Send them off with peace", nextScene: "jacob_hears", tag: "wise", feedback: "They ride away rejoicing.", isCorrect: true, sentiment: "positive" },
    ],
  },
  jacob_hears: {
    id: "jacob_hears",
    title: "In Canaan",
    text: "\"Joseph is alive — and ruler of Egypt!\"\nJacob's heart faints — then revives.",
    choices: [
      { text: "Bring Father down to Egypt", nextScene: "journey_egypt", tag: "loving", feedback: "\"I will go and see him before I die.\"", isCorrect: true, sentiment: "positive" },
      { text: "Leave Father in Canaan alone", nextScene: "abandon_consequence", tag: "cold", feedback: "Bring him to Egypt.", isCorrect: false, sentiment: "negative" },
    ],
  },
  abandon_consequence: {
    id: "abandon_consequence",
    title: "Together Again",
    text: "Father must see his son.\nTake him with you to Egypt.",
    choices: [
      { text: "Bring Father down to Egypt", nextScene: "journey_egypt", tag: "loving", feedback: "He rises with new strength.", isCorrect: true, sentiment: "positive" },
    ],
  },
  journey_egypt: {
    id: "journey_egypt",
    title: "Toward Goshen",
    text: "Wagons cross the desert.\nFather is coming. The family is whole.",
    choices: [
      { text: "Ride out to meet him in Goshen", nextScene: "ending", tag: "loving", feedback: "You fall on his neck a long time.", isCorrect: true, sentiment: "positive" },
      { text: "Let servants greet him first", nextScene: "servants_consequence", tag: "cold", feedback: "Go yourself.", isCorrect: false, sentiment: "negative" },
    ],
  },
  servants_consequence: {
    id: "servants_consequence",
    title: "Go Yourself",
    text: "After all these years — go to him\nwith your own arms open.",
    choices: [
      { text: "Ride out to meet him in Goshen", nextScene: "ending", tag: "loving", feedback: "You spur the chariot fast.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "Father and Son",
    text: "Jacob holds you. \"Now I can die,\nfor I have seen your face again.\"",
    choices: [],
    isFinal: true,
  },
};
