import { StoryScene } from "@/data/stories/creation";

// JOSEPH IN POTIPHAR'S HOUSE — Genesis 39
// You are Joseph, sold as a slave into Potiphar's household in Egypt.
// Each scene: 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars. Choice order varied randomly.

export const josephPotipharScenes: Record<string, StoryScene> = {
  // ============ ACT I — A SLAVE IN EGYPT ============
  start: {
    id: "start",
    title: "A New House",
    text: "You stand in a stranger's courtyard.\nPotiphar, captain of Pharaoh, watches you.",
    choices: [
      { text: "Run from this house", nextScene: "run_consequence", tag: "fearful", feedback: "You would be hunted as a runaway.", sentiment: "negative" },
      { text: "Bow and serve with all your heart", nextScene: "serve_well", tag: "humble", feedback: "You bow low. The Lord is with you.", sentiment: "positive" },
      { text: "Demand to be sent home", nextScene: "demand_consequence", tag: "proud", feedback: "Potiphar laughs coldly. You are a slave.", sentiment: "negative" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "Nowhere to Go",
    text: "The gate is guarded. The desert is wide.\nYou turn back inside.",
    choices: [
      { text: "Bow and serve faithfully", nextScene: "serve_well", tag: "humble", feedback: "You will trust God where He has placed you.", sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Silence the Pride",
    text: "A guard's hand falls hard on your shoulder.\nPride will not free you.",
    choices: [
      { text: "Kneel and offer your service", nextScene: "serve_well", tag: "humble", feedback: "Your knee touches the cool stone.", sentiment: "positive" },
    ],
  },
  serve_well: {
    id: "serve_well",
    title: "The Lord Is With You",
    text: "Each task you touch prospers.\nPotiphar begins to notice.",
    choices: [
      { text: "Steal grain to keep for yourself", nextScene: "steal_consequence", tag: "greedy", feedback: "A slave's hand must be clean.", sentiment: "negative" },
      { text: "Give God the glory in silence", nextScene: "trusted", tag: "faithful", feedback: "You whisper thanks. Heaven hears.", sentiment: "positive" },
      { text: "Boast of your skill to others", nextScene: "boast_consequence", tag: "proud", feedback: "Boasting will draw envy, not favor.", sentiment: "negative" },
    ],
  },
  steal_consequence: {
    id: "steal_consequence",
    title: "Your Hand Stops",
    text: "The grain is heavy in your palm.\nYou cannot betray such trust.",
    choices: [
      { text: "Return it and thank God", nextScene: "trusted", tag: "faithful", feedback: "You set it back. Peace returns.", sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Cold Glances",
    text: "The other servants turn from you.\nYour words have made enemies.",
    choices: [
      { text: "Kneel and give God the glory", nextScene: "trusted", tag: "faithful", feedback: "Humility softens what pride broke.", sentiment: "positive" },
    ],
  },

  // ============ ACT II — STEWARD OF THE HOUSE ============
  trusted: {
    id: "trusted",
    title: "Set Over All",
    text: "\"All I have is in your hand,\" Potiphar says.\nHe makes you steward of his house.",
    choices: [
      { text: "Use the wealth for your comfort", nextScene: "wealth_consequence", tag: "greedy", feedback: "His trust is not yours to spend.", sentiment: "negative" },
      { text: "Manage every gift with honor", nextScene: "diligent", tag: "faithful", feedback: "You take up the scrolls with care.", sentiment: "positive" },
    ],
  },
  wealth_consequence: {
    id: "wealth_consequence",
    title: "A Quiet Warning",
    text: "You feel the weight of his eyes.\nGreed will undo you.",
    choices: [
      { text: "Manage everything with honor", nextScene: "diligent", tag: "faithful", feedback: "You return to your duties.", sentiment: "positive" },
    ],
  },
  diligent: {
    id: "diligent",
    title: "Blessing in the House",
    text: "The fields, the storehouse, the table — all flourish.\nThe Lord blesses for your sake.",
    choices: [
      { text: "Pray and thank God each day", nextScene: "noticed", tag: "faithful", feedback: "Your prayers rise like incense.", sentiment: "positive" },
      { text: "Take credit before the household", nextScene: "credit_consequence", tag: "proud", feedback: "The blessing is not yours to claim.", sentiment: "negative" },
    ],
  },
  credit_consequence: {
    id: "credit_consequence",
    title: "A Hollow Praise",
    text: "Their praise tastes like dust.\nGod alone deserves the glory.",
    choices: [
      { text: "Pray and give thanks to God", nextScene: "noticed", tag: "faithful", feedback: "You bow your head in private.", sentiment: "positive" },
    ],
  },

  // ============ ACT III — THE TEMPTATION ============
  noticed: {
    id: "noticed",
    title: "Her Eyes Linger",
    text: "Potiphar's wife watches you each day.\nHer smile is warm, too warm.",
    choices: [
      { text: "Smile back to please her", nextScene: "smile_consequence", tag: "weak", feedback: "A small flame can burn a house.", sentiment: "negative" },
      { text: "Keep your eyes lowered, work on", nextScene: "first_advance", tag: "faithful", feedback: "You bow your head and pass.", sentiment: "positive" },
    ],
  },
  smile_consequence: {
    id: "smile_consequence",
    title: "She Steps Closer",
    text: "Your kindness has been read as want.\nThis is not the path.",
    choices: [
      { text: "Withdraw and keep your eyes low", nextScene: "first_advance", tag: "faithful", feedback: "You step back from the fire.", sentiment: "positive" },
    ],
  },
  first_advance: {
    id: "first_advance",
    title: "\"Lie With Me\"",
    text: "She whispers it openly. Her hand finds yours.\nThe room grows still.",
    choices: [
      { text: "Refuse — \"How can I sin against God?\"", nextScene: "she_persists", tag: "righteous", feedback: "Your voice is firm and quiet.", sentiment: "positive" },
      { text: "Stay and weigh her offer", nextScene: "weigh_consequence", tag: "weak", feedback: "To weigh sin is to invite it.", sentiment: "negative" },
      { text: "Yield — no one will know", nextScene: "yield_consequence", tag: "fallen", feedback: "God sees what no man sees.", sentiment: "negative" },
    ],
  },
  weigh_consequence: {
    id: "weigh_consequence",
    title: "Her Grip Tightens",
    text: "Hesitation is half a yes.\nYou must speak the truth now.",
    choices: [
      { text: "Refuse her — sin against God", nextScene: "she_persists", tag: "righteous", feedback: "You pull your hand away.", sentiment: "positive" },
    ],
  },
  yield_consequence: {
    id: "yield_consequence",
    title: "A Voice Inside",
    text: "Before her lips meet yours, conscience cries out.\nYou pull back.",
    choices: [
      { text: "Refuse and name the sin", nextScene: "she_persists", tag: "righteous", feedback: "\"I cannot sin against God.\"", sentiment: "positive" },
    ],
  },
  she_persists: {
    id: "she_persists",
    title: "Day After Day",
    text: "She speaks to you each morning.\nEach evening she waits in the hall.",
    choices: [
      { text: "Avoid being alone with her", nextScene: "the_empty_house", tag: "wise", feedback: "Wisdom keeps the door shut.", sentiment: "positive" },
      { text: "Confront her with harsh words", nextScene: "confront_consequence", tag: "rash", feedback: "Anger may shame her into hatred.", sentiment: "negative" },
      { text: "Tell Potiphar about her", nextScene: "tell_consequence", tag: "rash", feedback: "Who would believe a slave?", sentiment: "negative" },
    ],
  },
  confront_consequence: {
    id: "confront_consequence",
    title: "Her Face Hardens",
    text: "Pride wounded turns to spite.\nYou must walk softly now.",
    choices: [
      { text: "Avoid being alone with her", nextScene: "the_empty_house", tag: "wise", feedback: "You change your paths in the house.", sentiment: "positive" },
    ],
  },
  tell_consequence: {
    id: "tell_consequence",
    title: "He Cannot Hear It",
    text: "Potiphar waves you away, troubled.\nA slave's word is small.",
    choices: [
      { text: "Avoid her presence from now on", nextScene: "the_empty_house", tag: "wise", feedback: "You will simply not be near her.", sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE EMPTY HOUSE ============
  the_empty_house: {
    id: "the_empty_house",
    title: "No One Within",
    text: "The servants are gone for the feast.\nYou enter the hall to do your work.",
    choices: [
      { text: "Finish quickly and leave", nextScene: "she_grabs", tag: "wise", feedback: "Be swift. The house is too quiet.", sentiment: "positive" },
      { text: "Linger — enjoy the silence", nextScene: "linger_consequence", tag: "careless", feedback: "Quiet houses are not always safe.", sentiment: "negative" },
    ],
  },
  linger_consequence: {
    id: "linger_consequence",
    title: "A Door Opens",
    text: "Soft footsteps in the corridor.\nYou should have gone.",
    choices: [
      { text: "Move to leave at once", nextScene: "she_grabs", tag: "wise", feedback: "You turn for the door.", sentiment: "positive" },
    ],
  },
  she_grabs: {
    id: "she_grabs",
    title: "She Catches Your Garment",
    text: "Her hand closes on your cloak.\n\"Lie with me!\" she demands.",
    choices: [
      { text: "Leave the garment and flee", nextScene: "fled", tag: "righteous", feedback: "You slip out of the cloth and run.", sentiment: "positive" },
      { text: "Wrestle the cloak back", nextScene: "wrestle_consequence", tag: "rash", feedback: "She will tear it and call it proof.", sentiment: "negative" },
      { text: "Yield this once to keep peace", nextScene: "yield2_consequence", tag: "fallen", feedback: "There is no peace in such a sin.", sentiment: "negative" },
    ],
  },
  wrestle_consequence: {
    id: "wrestle_consequence",
    title: "The Cloth Tears",
    text: "She holds the torn piece, eyes bright.\nDo not stay to argue.",
    choices: [
      { text: "Leave the garment and flee", nextScene: "fled", tag: "righteous", feedback: "You let go and run for the door.", sentiment: "positive" },
    ],
  },
  yield2_consequence: {
    id: "yield2_consequence",
    title: "God Sees",
    text: "His eyes are upon you in this room.\nYou cannot do this thing.",
    choices: [
      { text: "Leave the garment and flee", nextScene: "fled", tag: "righteous", feedback: "You break free and run.", sentiment: "positive" },
    ],
  },

  // ============ ACT V — THE FALSE ACCUSATION ============
  fled: {
    id: "fled",
    title: "Out Into the Sun",
    text: "You stand outside, breathing hard.\nYour cloak is in her hand.",
    choices: [
      { text: "Hide and wait for the truth", nextScene: "hide2_consequence", tag: "fearful", feedback: "Hiding only looks like guilt.", sentiment: "negative" },
      { text: "Return to your duties in faith", nextScene: "her_cry", tag: "faithful", feedback: "God knows. You will trust Him.", sentiment: "positive" },
    ],
  },
  hide2_consequence: {
    id: "hide2_consequence",
    title: "They Will Find You",
    text: "A slave cannot hide for long.\nBetter to walk in the open.",
    choices: [
      { text: "Return to your duties in faith", nextScene: "her_cry", tag: "faithful", feedback: "You square your shoulders and go.", sentiment: "positive" },
    ],
  },
  her_cry: {
    id: "her_cry",
    title: "She Cries Out",
    text: "She calls the servants, holding your cloak.\n\"The Hebrew tried to shame me!\"",
    choices: [
      { text: "Stand silent before God", nextScene: "before_potiphar", tag: "humble", feedback: "Your peace will be your defense.", sentiment: "positive" },
      { text: "Shout her lie before all", nextScene: "shout_consequence", tag: "rash", feedback: "Anger will only feed her story.", sentiment: "negative" },
      { text: "Run away from the house", nextScene: "flee_consequence", tag: "fearful", feedback: "Flight is a confession.", sentiment: "negative" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Their Faces Turn",
    text: "Loud denial seems like guilt.\nBe still. Trust God.",
    choices: [
      { text: "Stand silent before God", nextScene: "before_potiphar", tag: "humble", feedback: "You close your mouth in peace.", sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Soldiers at the Gate",
    text: "You will not outrun Potiphar's guard.\nFace this with faith.",
    choices: [
      { text: "Return and stand silent", nextScene: "before_potiphar", tag: "humble", feedback: "You walk back, head bowed.", sentiment: "positive" },
    ],
  },

  // ============ ACT VI — JUDGMENT AND PRISON ============
  before_potiphar: {
    id: "before_potiphar",
    title: "His Wrath Burns",
    text: "Potiphar holds the torn cloak.\nHis eyes are dark with anger.",
    choices: [
      { text: "Bow and accept his judgment", nextScene: "to_prison", tag: "humble", feedback: "You kneel without a word.", sentiment: "positive" },
      { text: "Beg loudly for your life", nextScene: "beg_consequence", tag: "fearful", feedback: "His mind is set. Words will not turn it.", sentiment: "negative" },
      { text: "Curse his wife in fury", nextScene: "curse_consequence", tag: "rash", feedback: "Such words could cost your head.", sentiment: "negative" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "He Will Not Hear",
    text: "Your pleading falls on stone.\nOnly silence will keep your life.",
    choices: [
      { text: "Bow and accept his judgment", nextScene: "to_prison", tag: "humble", feedback: "You lower yourself to the floor.", sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "The Guards Step Forward",
    text: "Steel rings half from the sheath.\nClose your mouth before it costs all.",
    choices: [
      { text: "Bow and accept his judgment", nextScene: "to_prison", tag: "humble", feedback: "You drop to your knees in silence.", sentiment: "positive" },
    ],
  },
  to_prison: {
    id: "to_prison",
    title: "Bound for the Prison",
    text: "Ropes bind your wrists.\nThey lead you toward the king's prison.",
    choices: [
      { text: "Walk in faith — God is with you", nextScene: "ending", tag: "faithful", feedback: "You lift your eyes to heaven.", sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "The Lord Was With Him",
    text: "The gates close behind you.\nYet even here, the Lord shows you mercy.",
    choices: [],
    isFinal: true,
  },
};
