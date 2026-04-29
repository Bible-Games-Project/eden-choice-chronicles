import { StoryScene } from "@/data/stories/creation";

// BIRTH OF MOSES — Exodus 1:22 – 2:10
// You are Jochebed, mother of a newborn Hebrew son under Pharaoh's decree.
// Each scene: 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars. Choice order randomized per scene.
// Single sprite per scene (left only).

export const birthMosesScenes: Record<string, StoryScene> = {
  // ============ ACT I — A FORBIDDEN BIRTH ============
  start: {
    id: "start",
    title: "Pharaoh's Decree",
    text: "Soldiers shout in the streets.\n\"Every Hebrew son must die.\"",
    choices: [
      { text: "Hand the baby to a soldier", nextScene: "hand_consequence", tag: "fearful", feedback: "Never. He is God's gift.", sentiment: "negative" },
      { text: "Hide your newborn son", nextScene: "hide_home", tag: "brave", feedback: "Faith stronger than fear.", sentiment: "positive" },
      { text: "Run into the desert tonight", nextScene: "flee_consequence", tag: "rash", feedback: "The night swallows the weak.", sentiment: "negative" },
    ],
  },
  hand_consequence: {
    id: "hand_consequence",
    title: "No, Never",
    text: "Your arms tighten around him.\nGod did not give him to be killed.",
    choices: [
      { text: "Hide him in your home", nextScene: "hide_home", tag: "brave", feedback: "You bolt the door.", sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Too Dangerous",
    text: "The desert by night is no place\nfor a newborn. Stay. Hide him.",
    choices: [
      { text: "Hide him in your home", nextScene: "hide_home", tag: "brave", feedback: "You return to the cradle.", sentiment: "positive" },
    ],
  },
  hide_home: {
    id: "hide_home",
    title: "Three Months Hidden",
    text: "You nurse him in silence.\nEvery cry could end his life.",
    choices: [
      { text: "Trust God and keep hiding", nextScene: "growing_baby", tag: "faithful", feedback: "Each day is a small miracle.", sentiment: "positive" },
      { text: "Show him proudly to neighbors", nextScene: "show_consequence", tag: "reckless", feedback: "Pride could betray him.", sentiment: "negative" },
    ],
  },
  show_consequence: {
    id: "show_consequence",
    title: "Silence Saves Him",
    text: "A loud word could reach the guards.\nGuard him in quiet.",
    choices: [
      { text: "Keep hiding him in silence", nextScene: "growing_baby", tag: "faithful", feedback: "You return to the shadows.", sentiment: "positive" },
    ],
  },
  growing_baby: {
    id: "growing_baby",
    title: "He Grows",
    text: "He is too big to hide much longer.\nHis cries fill the small room.",
    choices: [
      { text: "Bury him in the floor", nextScene: "bury_consequence", tag: "desperate", feedback: "He needs air, not a grave.", sentiment: "negative" },
      { text: "Pray and seek God's plan", nextScene: "prayer", tag: "faithful", feedback: "An idea begins to rise.", sentiment: "positive" },
    ],
  },
  bury_consequence: {
    id: "bury_consequence",
    title: "Not That Way",
    text: "Despair cannot save him.\nKneel and ask the God of your fathers.",
    choices: [
      { text: "Pray for guidance", nextScene: "prayer", tag: "faithful", feedback: "Peace settles in your chest.", sentiment: "positive" },
    ],
  },
  prayer: {
    id: "prayer",
    title: "A Quiet Plea",
    text: "\"God of Abraham, save my son.\"\nA thought stirs: the river. The reeds.",
    choices: [
      { text: "Ignore it and keep hiding", nextScene: "ignore_consequence", tag: "fearful", feedback: "Hiding will not last.", sentiment: "negative" },
      { text: "Trust the thought from God", nextScene: "weave_basket", tag: "faithful", feedback: "You reach for the papyrus.", sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Trust the Whisper",
    text: "God speaks softly to faithful hearts.\nDo not silence Him now.",
    choices: [
      { text: "Begin weaving a basket", nextScene: "weave_basket", tag: "faithful", feedback: "Your hands move with purpose.", sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE BASKET ============
  weave_basket: {
    id: "weave_basket",
    title: "Papyrus and Pitch",
    text: "You weave through the night.\nTar and pitch will keep him dry.",
    choices: [
      { text: "Use a fragile clay pot", nextScene: "clay_consequence", tag: "foolish", feedback: "Clay would crack and sink.", sentiment: "negative" },
      { text: "Coat the basket with pitch", nextScene: "miriam_called", tag: "wise", feedback: "It will float and stay sealed.", sentiment: "positive" },
    ],
  },
  clay_consequence: {
    id: "clay_consequence",
    title: "Not Clay",
    text: "Only pitch can keep the river out.\nSeal it carefully.",
    choices: [
      { text: "Coat it with pitch", nextScene: "miriam_called", tag: "wise", feedback: "The seams hold tight.", sentiment: "positive" },
    ],
  },
  miriam_called: {
    id: "miriam_called",
    title: "Miriam, Your Daughter",
    text: "Your daughter watches you wide-eyed.\n\"Mother, what are you doing?\"",
    choices: [
      { text: "Send her away in anger", nextScene: "anger_consequence", tag: "harsh", feedback: "She is your ally, not enemy.", sentiment: "negative" },
      { text: "Tell her to come with you", nextScene: "to_river", tag: "wise", feedback: "She nods, brave like her mother.", sentiment: "positive" },
      { text: "Lie to keep her safe", nextScene: "lie_consequence", tag: "fearful", feedback: "She must understand the truth.", sentiment: "negative" },
    ],
  },
  anger_consequence: {
    id: "anger_consequence",
    title: "Not Now",
    text: "She is small but faithful.\nYou will need her at the river.",
    choices: [
      { text: "Take her with you", nextScene: "to_river", tag: "wise", feedback: "She slips her hand into yours.", sentiment: "positive" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "Truth, Gently",
    text: "A lie cannot guard her brother.\nTell her plainly. Trust her.",
    choices: [
      { text: "Tell her the truth", nextScene: "to_river", tag: "wise", feedback: "Her chin lifts. She is ready.", sentiment: "positive" },
    ],
  },
  to_river: {
    id: "to_river",
    title: "To the Reeds",
    text: "Before dawn, you slip out the door.\nThe Nile breathes mist ahead.",
    choices: [
      { text: "Throw him into the open river", nextScene: "throw_consequence", tag: "rash", feedback: "The current would take him.", sentiment: "negative" },
      { text: "Hide the basket in the reeds", nextScene: "place_basket", tag: "wise", feedback: "Calm water. Sheltered. Safe.", sentiment: "positive" },
    ],
  },
  throw_consequence: {
    id: "throw_consequence",
    title: "Among the Reeds",
    text: "He must rest where the water is still.\nGod chose this place for a reason.",
    choices: [
      { text: "Place him gently in the reeds", nextScene: "place_basket", tag: "wise", feedback: "The basket bobs softly.", sentiment: "positive" },
    ],
  },
  place_basket: {
    id: "place_basket",
    title: "The Hardest Goodbye",
    text: "You lower the basket into the reeds.\nHis tiny breath rises and falls.",
    choices: [
      { text: "Snatch him back and run home", nextScene: "snatch_consequence", tag: "fearful", feedback: "Faith means letting go.", sentiment: "negative" },
      { text: "Whisper a blessing and step back", nextScene: "miriam_watch", tag: "faithful", feedback: "\"The Lord keep you, my son.\"", sentiment: "positive" },
    ],
  },
  snatch_consequence: {
    id: "snatch_consequence",
    title: "Trust God Now",
    text: "If you take him home, he will die.\nThe river is his only path.",
    choices: [
      { text: "Bless him and let him go", nextScene: "miriam_watch", tag: "faithful", feedback: "Tears fall on the reeds.", sentiment: "positive" },
    ],
  },

  // ============ ACT III — MIRIAM AT WATCH ============
  miriam_watch: {
    id: "miriam_watch",
    title: "Miriam Stays",
    text: "You leave Miriam to keep watch.\n\"Stay hidden. See what becomes of him.\"",
    choices: [
      { text: "Order her to swim with the basket", nextScene: "swim_consequence", tag: "rash", feedback: "She would drown in the current.", sentiment: "negative" },
      { text: "Tell her to hide and watch", nextScene: "princess_arrives", tag: "wise", feedback: "She kneels behind tall reeds.", sentiment: "positive" },
    ],
  },
  swim_consequence: {
    id: "swim_consequence",
    title: "Watch From Shore",
    text: "She is a child. She must hide and pray.\nGod will move others.",
    choices: [
      { text: "Tell her to watch from the reeds", nextScene: "princess_arrives", tag: "wise", feedback: "She crouches, silent and still.", sentiment: "positive" },
    ],
  },
  princess_arrives: {
    id: "princess_arrives",
    title: "Royal Footsteps",
    text: "Sandals on stone. Silk on the wind.\nPharaoh's daughter comes to bathe.",
    choices: [
      { text: "Throw a stone to scare her off", nextScene: "stone_consequence", tag: "foolish", feedback: "She is the answer, not the threat.", sentiment: "negative" },
      { text: "Wait and watch in silence", nextScene: "she_sees", tag: "faithful", feedback: "Miriam holds her breath.", sentiment: "positive" },
    ],
  },
  stone_consequence: {
    id: "stone_consequence",
    title: "Do Not Interfere",
    text: "God is opening a door no one expected.\nDo not slam it shut.",
    choices: [
      { text: "Wait and trust God", nextScene: "she_sees", tag: "faithful", feedback: "The princess steps closer.", sentiment: "positive" },
    ],
  },
  she_sees: {
    id: "she_sees",
    title: "She Sees the Basket",
    text: "She points among the reeds.\n\"Bring me that basket.\"",
    choices: [
      { text: "Pray she opens it gently", nextScene: "she_opens", tag: "faithful", feedback: "Your heart pounds in the reeds.", sentiment: "positive" },
      { text: "Have Miriam shout a warning", nextScene: "shout_consequence", tag: "rash", feedback: "Silence now, child. Trust God.", sentiment: "negative" },
    ],
  },
  shout_consequence: {
    id: "shout_consequence",
    title: "Silence is Wiser",
    text: "A shout would expose everything.\nLet the moment unfold.",
    choices: [
      { text: "Stay hidden and pray", nextScene: "she_opens", tag: "faithful", feedback: "The basket rises slowly.", sentiment: "positive" },
    ],
  },

  // ============ ACT IV — COMPASSION OF THE PRINCESS ============
  she_opens: {
    id: "she_opens",
    title: "A Hebrew Child",
    text: "She lifts the lid. He cries.\n\"He is one of the Hebrew babies.\"",
    choices: [
      { text: "Whisper a blessing for her heart", nextScene: "compassion", tag: "faithful", feedback: "Her face softens.", sentiment: "positive" },
      { text: "Have Miriam beg her loudly", nextScene: "beg_consequence", tag: "rash", feedback: "Wait. The right moment will come.", sentiment: "negative" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Wait For It",
    text: "Compassion is rising in her heart.\nDo not rush God's work.",
    choices: [
      { text: "Pray quietly and watch", nextScene: "compassion", tag: "faithful", feedback: "She cradles the baby.", sentiment: "positive" },
    ],
  },
  compassion: {
    id: "compassion",
    title: "Pity Moves Her",
    text: "She holds him close, tears in her eyes.\n\"I will keep him for my own.\"",
    choices: [
      { text: "Send Miriam to offer a nurse", nextScene: "miriam_offers", tag: "wise", feedback: "Now is the moment, child.", sentiment: "positive" },
      { text: "Let Miriam keep silent forever", nextScene: "silent_consequence", tag: "fearful", feedback: "God placed her here for this.", sentiment: "negative" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "Speak Now, Daughter",
    text: "This is why she was put here.\nLet her step forward in faith.",
    choices: [
      { text: "Let Miriam approach the princess", nextScene: "miriam_offers", tag: "wise", feedback: "She rises from the reeds.", sentiment: "positive" },
    ],
  },
  miriam_offers: {
    id: "miriam_offers",
    title: "A Brave Little Voice",
    text: "Miriam steps out. \"Shall I find\na Hebrew nurse for the child?\"",
    choices: [
      { text: "Suggest an Egyptian wet nurse", nextScene: "egyptian_consequence", tag: "fearful", feedback: "He must come back to you.", sentiment: "negative" },
      { text: "Wait for the princess's answer", nextScene: "yes_go", tag: "faithful", feedback: "\"Go,\" she says.", sentiment: "positive" },
    ],
  },
  egyptian_consequence: {
    id: "egyptian_consequence",
    title: "He Belongs With You",
    text: "God arranged his return to your arms.\nDo not turn from the gift.",
    choices: [
      { text: "Wait for the princess to answer", nextScene: "yes_go", tag: "faithful", feedback: "\"Go and bring her,\" she says.", sentiment: "positive" },
    ],
  },

  // ============ ACT V — RETURNED TO YOUR ARMS ============
  yes_go: {
    id: "yes_go",
    title: "Run, Miriam",
    text: "Miriam runs through the reeds.\nShe finds you trembling and waiting.",
    choices: [
      { text: "Refuse to come, hiding in fear", nextScene: "refuse_consequence", tag: "fearful", feedback: "God is giving him back. Go.", sentiment: "negative" },
      { text: "Come at once to the princess", nextScene: "before_princess", tag: "faithful", feedback: "You wipe your eyes and run.", sentiment: "positive" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Step Forward",
    text: "Faith now means meeting her face to face.\nGod has gone before you.",
    choices: [
      { text: "Go to the princess", nextScene: "before_princess", tag: "faithful", feedback: "Your sandals slap the path.", sentiment: "positive" },
    ],
  },
  before_princess: {
    id: "before_princess",
    title: "Before the Princess",
    text: "You bow low at the river's edge.\nShe places your son in your arms.",
    choices: [
      { text: "Confess that you are his mother", nextScene: "confess_consequence", tag: "rash", feedback: "Silence now serves God's plan.", sentiment: "negative" },
      { text: "Accept the wages and the child", nextScene: "wages", tag: "wise", feedback: "\"Take him. Nurse him for me.\"", sentiment: "positive" },
    ],
  },
  confess_consequence: {
    id: "confess_consequence",
    title: "Hold Your Tongue",
    text: "Telling now could end it all.\nReceive the gift God prepared.",
    choices: [
      { text: "Bow and accept the child", nextScene: "wages", tag: "wise", feedback: "She smiles, none the wiser.", sentiment: "positive" },
    ],
  },
  wages: {
    id: "wages",
    title: "Paid to Mother Him",
    text: "She pays you to nurse your own son.\nGod has done the impossible.",
    choices: [
      { text: "Refuse the wages out of pride", nextScene: "pride_consequence", tag: "foolish", feedback: "Receive what God provides.", sentiment: "negative" },
      { text: "Take him home and raise him", nextScene: "home_again", tag: "faithful", feedback: "He sleeps against your chest.", sentiment: "positive" },
    ],
  },
  pride_consequence: {
    id: "pride_consequence",
    title: "Receive the Blessing",
    text: "God's provision is not to be refused.\nTake the silver and your son.",
    choices: [
      { text: "Take him home", nextScene: "home_again", tag: "faithful", feedback: "You walk home weeping with joy.", sentiment: "positive" },
    ],
  },
  home_again: {
    id: "home_again",
    title: "Years of Whispered Songs",
    text: "You sing the songs of Abraham,\nof Isaac, of Jacob — into his ear.",
    choices: [
      { text: "Hide him forever from the palace", nextScene: "hide_forever_consequence", tag: "fearful", feedback: "He has a calling beyond home.", sentiment: "negative" },
      { text: "Prepare him to return to her", nextScene: "return_palace", tag: "faithful", feedback: "You teach him who he truly is.", sentiment: "positive" },
    ],
  },
  hide_forever_consequence: {
    id: "hide_forever_consequence",
    title: "He Belongs to God",
    text: "He was given to you for a season.\nNow give him back to His purpose.",
    choices: [
      { text: "Prepare him for the palace", nextScene: "return_palace", tag: "faithful", feedback: "You braid his hair with prayers.", sentiment: "positive" },
    ],
  },
  return_palace: {
    id: "return_palace",
    title: "Back to the Princess",
    text: "He is weaned. The day has come.\nYou walk him to the palace gates.",
    choices: [
      { text: "Run away with him at the last", nextScene: "runaway_consequence", tag: "fearful", feedback: "Trust the God who saved him.", sentiment: "negative" },
      { text: "Place him in her arms", nextScene: "named_moses", tag: "faithful", feedback: "She receives him as her son.", sentiment: "positive" },
    ],
  },
  runaway_consequence: {
    id: "runaway_consequence",
    title: "Let Him Go",
    text: "God has a great work for him.\nDo not hold him back from it.",
    choices: [
      { text: "Place him in her arms", nextScene: "named_moses", tag: "faithful", feedback: "Her eyes shine with love.", sentiment: "positive" },
    ],
  },
  named_moses: {
    id: "named_moses",
    title: "She Names Him Moses",
    text: "\"I drew him out of the water.\"\nMoses. The drawn-out one.",
    choices: [
      { text: "Walk away in faith", nextScene: "ending", tag: "faithful", feedback: "God's plan has only begun.", sentiment: "positive" },
    ],
  },
  ending: {
    id: "ending",
    title: "A Saved Deliverer",
    text: "You saved a baby from the river.\nGod is raising a deliverer for His people.",
    choices: [],
    isFinal: true,
  },
};
