import { StoryScene } from "@/data/stories/creation";

export const abrahamLotScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "The Land Cannot Hold Us",
    text: "Your flocks have multiplied. So have Lot's.\nThe pastures are stripped bare. The wells run shallow.\nThe land can no longer carry you both.",
    choices: [
      { text: "Quietly observe — perhaps it will pass", nextScene: "quarrel", tag: "passive", feedback: "You wait. The grass does not grow back. The tension only thickens.", isCorrect: false, sentiment: "negative" },
      { text: "Walk among the herds and see for yourself", nextScene: "quarrel", tag: "watchful", feedback: "Sheep press shoulder to shoulder. There is not enough.", isCorrect: true, sentiment: "positive" },
    ],
  },
  quarrel: {
    id: "quarrel",
    title: "The Herdsmen Quarrel",
    text: "Your shepherds and Lot's shepherds shout at the well.\nFists clench. Staves are raised.\nThe Canaanites and Perizzites watch from the hills.",
    choices: [
      { text: "Order your men to seize the well by force", nextScene: "force_consequence", tag: "force", feedback: "Strength would silence them. But what would the nations say of you then?", isCorrect: false, sentiment: "negative" },
      { text: "Step between them and call for peace", nextScene: "decision", tag: "peacemaker", feedback: "The shouting falters. Eyes turn to you. You are the elder.", isCorrect: true, sentiment: "positive" },
      { text: "Let them sort it out themselves", nextScene: "force_consequence", tag: "absent", feedback: "You turn away. Behind you, a staff strikes flesh.", isCorrect: false, sentiment: "negative" },
    ],
  },
  force_consequence: {
    id: "force_consequence",
    title: "Strife Spreads",
    text: "The quarrel grows. Word travels through the camps.\nThe pagans whisper: \"See how the followers of their God devour each other.\"\nYou cannot let it stand.",
    choices: [
      { text: "Go now to Lot — speak as a brother", nextScene: "decision", tag: "reconcile", feedback: "Shame walks with you. But you go.", isCorrect: true, sentiment: "positive" },
    ],
  },
  decision: {
    id: "decision",
    title: "Brother to Brother",
    text: "You find Lot beneath the terebinth tree.\nHe will not meet your eyes.\n\"Let there be no strife between us,\" you say. \"For we are kin.\"",
    choices: [
      { text: "Demand the better land — you are the elder", nextScene: "demand_consequence", tag: "entitled", feedback: "By right it is yours. The promise was given to you, not him.", isCorrect: false, sentiment: "negative" },
      { text: "Offer Lot the first choice of the land", nextScene: "offering", tag: "generous", feedback: "You speak before you can change your mind. Lot finally lifts his head.", isCorrect: true, sentiment: "positive" },
      { text: "Suggest you cast lots to decide", nextScene: "demand_consequence", tag: "chance", feedback: "Lot frowns. \"Why leave it to chance? You are the elder. Decide.\"", isCorrect: false, sentiment: "negative" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "The Weight of Right",
    text: "Lot stiffens. The peace you came to make is slipping.\nA quiet voice within you says: this is not the way.\nThe promise was never about taking. It was about trusting.",
    choices: [
      { text: "Soften — offer him the first choice instead", nextScene: "offering", tag: "humbled", feedback: "You set down what was yours by right. Something inside you breathes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  offering: {
    id: "offering",
    title: "The Whole Land Before You",
    text: "You climb together to a high ridge.\nThe whole country opens beneath you —\nthe lush Jordan valley to the east, the rocky hills of Canaan to the west.",
    choices: [
      { text: "Quietly hope he chooses the harder land", nextScene: "lots_choice", tag: "calculating", feedback: "The thought passes through you. You let it go. A gift cannot be half-given.", isCorrect: false, sentiment: "negative" },
      { text: "\"If you go left, I will go right. If right, I will go left.\"", nextScene: "lots_choice", tag: "openhanded", feedback: "Your voice is steady. The choice is truly his.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lots_choice: {
    id: "lots_choice",
    title: "Lot Lifts His Eyes",
    text: "Lot looks long across the Jordan plain —\nwell-watered, green like the garden of the Lord, like the land of Egypt.\nIn the distance, the towers of Sodom shimmer.",
    choices: [
      { text: "Warn him about Sodom's wickedness", nextScene: "lot_departs", tag: "warning", feedback: "He waves you off. \"It is only a city. The land is good.\"", isCorrect: false, sentiment: "negative" },
      { text: "Bless his choice in silence", nextScene: "lot_departs", tag: "releasing", feedback: "You say nothing. You let him go where his eyes have led him.", isCorrect: true, sentiment: "positive" },
    ],
  },
  lot_departs: {
    id: "lot_departs",
    title: "They Part Ways",
    text: "Lot gathers his people, his tents, his flocks.\nThe caravan winds eastward toward the Jordan.\nDust rises. He does not look back.",
    choices: [
      { text: "Follow him a little way — try to call him back", nextScene: "stay_consequence", tag: "clinging", feedback: "Your feet move forward. But the wind carries his name away unanswered.", isCorrect: false, sentiment: "negative" },
      { text: "Stay where you are — accept what has been given", nextScene: "remaining", tag: "rooted", feedback: "You stand alone on the hill until the dust settles.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stay_consequence: {
    id: "stay_consequence",
    title: "The Path Back",
    text: "There is no calling him back. The choice has been made.\nThe land of Canaan waits behind you — quieter, drier, yours.\nYou turn around.",
    choices: [
      { text: "Return to your camp in Canaan", nextScene: "remaining", tag: "returning", feedback: "Each step home feels lighter than you expected.", isCorrect: true, sentiment: "positive" },
    ],
  },
  remaining: {
    id: "remaining",
    title: "Among the Oaks of Mamre",
    text: "You return to the high country.\nThe oaks of Mamre stand tall and ancient.\nYou pitch your tent. You build an altar of unhewn stone.",
    choices: [
      { text: "Mourn what you have lost", nextScene: "the_promise", tag: "grieving", feedback: "Lot was as a son to you. The silence is heavy.", isCorrect: false, sentiment: "negative" },
      { text: "Lift your eyes and worship", nextScene: "the_promise", tag: "worshipful", feedback: "You give thanks. For the land. For the peace. For the promise still kept.", isCorrect: true, sentiment: "positive" },
    ],
  },
  the_promise: {
    id: "the_promise",
    title: "The Promise Renewed",
    text: "That night, the voice returns:\n\"Lift up your eyes — north, south, east, west.\nAll the land you see, I give to you and your offspring forever.\nAs the dust of the earth — so shall they be.\"",
    isFinal: true,
    choices: [],
  },
};
