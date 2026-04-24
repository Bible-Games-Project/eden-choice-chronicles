import { StoryScene } from "@/data/stories/creation";

// JACOB WRESTLES WITH THE ANGEL — Genesis 32:22–32
// You are Jacob, the night before meeting Esau again.
// Branching paths converge on the wrestling at Peniel.
// Each scene: 1 biblical (positive) + 1–2 incorrect (negative). Max 3 options.
// Dialogue ≤100 chars, choices ≤40 chars.

export const jacobWrestlesScenes: Record<string, StoryScene> = {
  // ============ ACT I — RETURN AND FEAR ============
  start: {
    id: "start",
    title: "Returning Home",
    text: "You are Jacob. Esau marches with four hundred men.\nYour camp waits at the Jabbok ford.",
    choices: [
      { text: "Send gifts ahead to Esau", nextScene: "send_gifts", tag: "wise", feedback: "You prepare droves of livestock to soften his heart.", sentiment: "positive" },
      { text: "Attack first — strike before he does", nextScene: "attack_consequence", tag: "violent", feedback: "Bloodshed is not the path. Your hands tremble.", sentiment: "negative" },
      { text: "Flee back the way you came", nextScene: "flee_consequence", tag: "fearful", feedback: "Behind you is Laban. Ahead is the promise.", sentiment: "negative" },
    ],
  },
  attack_consequence: {
    id: "attack_consequence",
    title: "No Sword for This",
    text: "Your sons are few. Esau's men are many.\nThis is not a battle to win.",
    choices: [
      { text: "Send gifts ahead instead", nextScene: "send_gifts", tag: "wise", feedback: "Wisdom replaces fury. You call your servants.", sentiment: "positive" },
    ],
  },
  flee_consequence: {
    id: "flee_consequence",
    title: "Nowhere to Run",
    text: "The road behind is closed. The Lord said: return.\nYou must face what comes.",
    choices: [
      { text: "Turn and prepare gifts for Esau", nextScene: "send_gifts", tag: "wise", feedback: "You set your face toward your brother again.", sentiment: "positive" },
    ],
  },
  send_gifts: {
    id: "send_gifts",
    title: "Droves of Peace",
    text: "Goats, sheep, camels — sent in waves before you.\n\"A present for my lord Esau.\"",
    choices: [
      { text: "Pray to the God of your fathers", nextScene: "pray", tag: "faithful", feedback: "You bow your head. \"I am unworthy of all your kindness.\"", sentiment: "positive" },
      { text: "Boast — God owes you protection", nextScene: "boast_consequence", tag: "proud", feedback: "Pride is a thin shield. Your heart knows it.", sentiment: "negative" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "The Hollow Boast",
    text: "Your words ring empty in the dusk.\nYou kneel instead, ashamed.",
    choices: [
      { text: "Pray humbly for deliverance", nextScene: "pray", tag: "faithful", feedback: "\"Deliver me, I pray, from the hand of my brother.\"", sentiment: "positive" },
    ],
  },

  // ============ ACT II — THE NIGHT CROSSING ============
  pray: {
    id: "pray",
    title: "A Prayer at Dusk",
    text: "\"O God of Abraham, of Isaac — save me.\"\nThe Jabbok runs cold beside the camp.",
    choices: [
      { text: "Send your family across the ford", nextScene: "send_family", tag: "obedient", feedback: "Wives, sons, all possessions — across the dark water.", sentiment: "positive" },
      { text: "Stay together — safer in numbers", nextScene: "stay_consequence", tag: "uncertain", feedback: "Your soul needs the night alone. You know it.", sentiment: "negative" },
    ],
  },
  stay_consequence: {
    id: "stay_consequence",
    title: "Crowded Hearts",
    text: "Voices, children, bleating animals.\nThis night calls for silence.",
    choices: [
      { text: "Send them across — remain alone", nextScene: "send_family", tag: "obedient", feedback: "You wave them on. The water swallows their footsteps.", sentiment: "positive" },
    ],
  },
  send_family: {
    id: "send_family",
    title: "All Across the Jabbok",
    text: "The last torch fades on the far bank.\nYou stand alone. The river hushes.",
    choices: [
      { text: "Stay on this side — face the night", nextScene: "alone", tag: "courageous", feedback: "You sit on the cold stone. Stars burn above.", sentiment: "positive" },
      { text: "Cross over to your family now", nextScene: "cross_consequence", tag: "avoidant", feedback: "Something holds you back. The night is not finished.", sentiment: "negative" },
    ],
  },
  cross_consequence: {
    id: "cross_consequence",
    title: "Drawn Back",
    text: "You step into the water and stop.\nA presence waits behind you.",
    choices: [
      { text: "Return to the bank — stay alone", nextScene: "alone", tag: "courageous", feedback: "You climb back. The river quiets again.", sentiment: "positive" },
    ],
  },

  // ============ ACT III — THE STRUGGLE ============
  alone: {
    id: "alone",
    title: "Jacob Was Left Alone",
    text: "Footsteps. A figure in the dark.\nA man stands before you — silent, strong.",
    choices: [
      { text: "Stand your ground", nextScene: "the_struggle", tag: "brave", feedback: "He moves first. You meet him.", sentiment: "positive" },
      { text: "Run from him into the night", nextScene: "run_consequence", tag: "afraid", feedback: "He is faster. You cannot escape this.", sentiment: "negative" },
      { text: "Beg him to leave you in peace", nextScene: "beg_consequence", tag: "weak", feedback: "He does not answer. He waits for you.", sentiment: "negative" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "He Is Always There",
    text: "However far you turn, he is before you.\nThis fight cannot be avoided.",
    choices: [
      { text: "Turn and face him", nextScene: "the_struggle", tag: "brave", feedback: "You raise your arms. The night begins.", sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Silence in Reply",
    text: "He will not let you pass without struggle.\nThis is your night to wrestle.",
    choices: [
      { text: "Stand and grapple with him", nextScene: "the_struggle", tag: "brave", feedback: "Your hands close on his robe. The wrestling starts.", sentiment: "positive" },
    ],
  },
  the_struggle: {
    id: "the_struggle",
    title: "All Through the Night",
    text: "You wrestle. Hours pass. Neither yields.\nYour breath burns. He does not tire.",
    choices: [
      { text: "Hold on — do not let go", nextScene: "the_touch", tag: "tenacious", feedback: "Sweat and silence. Only the river hears.", sentiment: "positive" },
      { text: "Give up — he is too strong", nextScene: "give_up_consequence", tag: "yielding", feedback: "Something deeper in you refuses. You grip again.", sentiment: "negative" },
    ],
  },
  give_up_consequence: {
    id: "give_up_consequence",
    title: "Not Yet",
    text: "Your knees buckle, but your hands will not open.\nThis night must be finished.",
    choices: [
      { text: "Hold on through the dark", nextScene: "the_touch", tag: "tenacious", feedback: "You rise once more, and the struggle goes on.", sentiment: "positive" },
    ],
  },

  // ============ ACT IV — THE TOUCH AND THE BLESSING ============
  the_touch: {
    id: "the_touch",
    title: "A Touch at the Hip",
    text: "He reaches out — your hip turns out of joint.\nPain blooms. Yet you do not release him.",
    choices: [
      { text: "Cling tighter — demand a blessing", nextScene: "demand_blessing", tag: "faithful", feedback: "\"I will not let you go unless you bless me.\"", sentiment: "positive" },
      { text: "Collapse and curse the pain", nextScene: "curse_consequence", tag: "bitter", feedback: "Bitterness will not bless you. Reach again.", sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "Words That Wound You",
    text: "Your curses fall like stones in the river.\nBut his hand is still within reach.",
    choices: [
      { text: "Cling to him — ask for blessing", nextScene: "demand_blessing", tag: "faithful", feedback: "You grasp his robe. \"Bless me — I will not let go.\"", sentiment: "positive" },
    ],
  },
  demand_blessing: {
    id: "demand_blessing",
    title: "The Question",
    text: "He says: \"What is your name?\"\nThe river holds its breath.",
    choices: [
      { text: "Speak truly — \"Jacob\"", nextScene: "new_name", tag: "honest", feedback: "Your old name. Heel-grabber. Supplanter. You confess it.", sentiment: "positive" },
      { text: "Hide your name from him", nextScene: "hide_name_consequence", tag: "deceitful", feedback: "Deceit will not free you here. Speak truth.", sentiment: "negative" },
      { text: "Boast a noble title", nextScene: "boast_name_consequence", tag: "proud", feedback: "He sees through you. The name must come.", sentiment: "negative" },
    ],
  },
  hide_name_consequence: {
    id: "hide_name_consequence",
    title: "He Knows Already",
    text: "His gaze does not leave you.\nYou cannot lie to such eyes.",
    choices: [
      { text: "Whisper the truth — \"Jacob\"", nextScene: "new_name", tag: "honest", feedback: "The word breaks loose like a stone from your chest.", sentiment: "positive" },
    ],
  },
  boast_name_consequence: {
    id: "boast_name_consequence",
    title: "No Crown Will Do",
    text: "Titles fall away in this place.\nOnly your true name remains.",
    choices: [
      { text: "Speak it — \"I am Jacob\"", nextScene: "new_name", tag: "honest", feedback: "You bow your head. The name is laid down.", sentiment: "positive" },
    ],
  },
  new_name: {
    id: "new_name",
    title: "Israel",
    text: "\"No longer Jacob — but Israel.\nFor you have struggled with God and prevailed.\"",
    choices: [
      { text: "Receive the name in awe", nextScene: "name_him", tag: "humble", feedback: "Israel. The name settles over you like dawn.", sentiment: "positive" },
      { text: "Refuse — you do not deserve it", nextScene: "refuse_consequence", tag: "doubtful", feedback: "He gives. You do not earn. Receive.", sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "It Is Given",
    text: "The name is not yours to refuse.\nIt is His gift, freely given.",
    choices: [
      { text: "Bow your head — accept it", nextScene: "name_him", tag: "humble", feedback: "You whisper: \"Israel.\" The river answers softly.", sentiment: "positive" },
    ],
  },
  name_him: {
    id: "name_him",
    title: "Tell Me Your Name",
    text: "You ask: \"Tell me your name.\"\nHe answers only: \"Why do you ask?\"",
    choices: [
      { text: "Receive his blessing in silence", nextScene: "blessing", tag: "reverent", feedback: "He blesses you there. No more words are needed.", sentiment: "positive" },
      { text: "Demand his name again", nextScene: "demand_name_consequence", tag: "presumptuous", feedback: "Some names are not for men. Be still.", sentiment: "negative" },
    ],
  },
  demand_name_consequence: {
    id: "demand_name_consequence",
    title: "Holy Silence",
    text: "He will not speak it.\nThe blessing is what he gives.",
    choices: [
      { text: "Receive his blessing quietly", nextScene: "blessing", tag: "reverent", feedback: "You bow. His hand rests upon your head.", sentiment: "positive" },
    ],
  },

  // ============ ACT V — DAWN ============
  blessing: {
    id: "blessing",
    title: "He Blessed Him There",
    text: "The first light touches the eastern hills.\nHis blessing flows through you.",
    choices: [
      { text: "Name this place Peniel", nextScene: "peniel", tag: "remembering", feedback: "\"For I have seen God face to face — and lived.\"", sentiment: "positive" },
      { text: "Tell no one what happened", nextScene: "secret_consequence", tag: "hiding", feedback: "Such mercy must be remembered, not buried.", sentiment: "negative" },
    ],
  },
  secret_consequence: {
    id: "secret_consequence",
    title: "It Must Be Marked",
    text: "Hidden grace fades from memory.\nThis place must bear the witness.",
    choices: [
      { text: "Name it Peniel — God's face", nextScene: "peniel", tag: "remembering", feedback: "You set the name upon the ground. Peniel.", sentiment: "positive" },
    ],
  },
  peniel: {
    id: "peniel",
    title: "Peniel — The Face of God",
    text: "The sun rises over Peniel.\nYou rise too — and limp upon your hip.",
    choices: [
      { text: "Cross the Jabbok to meet Esau", nextScene: "to_esau", tag: "obedient", feedback: "You walk forward, marked, blessed, no longer the same.", sentiment: "positive", isFinal: true },
    ],
  },
  to_esau: {
    id: "to_esau",
    title: "Israel Goes Forward",
    text: "The river is behind you. Esau waits ahead.\nYou are Israel. The journey continues.",
    choices: [],
    isFinal: true,
  },
};
