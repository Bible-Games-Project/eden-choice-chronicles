import { StoryScene } from "@/data/stories/creation";

// TRIUMPHAL ENTRY — Matt 21, Mark 11, Luke 19, John 12
// You walk with Jesus into Jerusalem on the day prophecy is fulfilled.

export const triumphalEntryScenes: Record<string, StoryScene> = {
  // ACT I — APPROACHING JERUSALEM
  start: {
    id: "start",
    title: "The Holy City",
    text: "Jerusalem shines in golden light.\nJesus walks toward her gates.",
    choices: [
      { text: "Push ahead to claim a place", nextScene: "push_consequence", tag: "doubtful", feedback: "Walk beside him, not ahead.", isCorrect: false, sentiment: "negative" },
      { text: "Walk quietly beside him", nextScene: "donkey", tag: "faithful", feedback: "Luke 19:28 — Jesus went on ahead, going up to Jerusalem.", isCorrect: true, sentiment: "positive" },
      { text: "Hang back, afraid to be seen", nextScene: "hang_consequence", tag: "fearful", feedback: "Do not hide from joy.", isCorrect: false, sentiment: "negative" },
    ],
  },
  push_consequence: {
    id: "push_consequence",
    title: "Be Still",
    text: "His coming needs no rushing.\nFall back into his step.",
    choices: [
      { text: "Walk quietly beside him", nextScene: "donkey", tag: "faithful", feedback: "You slow your pace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hang_consequence: {
    id: "hang_consequence",
    title: "Come Closer",
    text: "Today is for being near him.\nDraw close.",
    choices: [
      { text: "Walk quietly beside him", nextScene: "donkey", tag: "faithful", feedback: "You walk at his side.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — THE DONKEY
  donkey: {
    id: "donkey",
    title: "Bring the Colt",
    text: "Two disciples return with a young donkey.\n\"The Lord has need of it.\"",
    choices: [
      { text: "Offer a fine horse instead", nextScene: "horse_consequence", tag: "doubtful", feedback: "Kings of peace ride humbly.", isCorrect: false, sentiment: "negative" },
      { text: "Lay your cloak on its back", nextScene: "ride", tag: "faithful", feedback: "Matthew 21:7 — The disciples brought the donkey and the colt and placed their cloaks on them for Jesus to sit on.", isCorrect: true, sentiment: "positive" },
    ],
  },
  horse_consequence: {
    id: "horse_consequence",
    title: "Not a War King",
    text: "He chose the colt to fulfill the word.\nHonor his choice.",
    choices: [
      { text: "Lay your cloak on its back", nextScene: "ride", tag: "faithful", feedback: "You bow and place it down.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — RIDING DOWN
  ride: {
    id: "ride",
    title: "The Prophecy",
    text: "He rides as Zechariah foretold.\n\"Your king comes, humble and gentle.\"",
    choices: [
      { text: "Mock the small donkey", nextScene: "mock_consequence", tag: "doubtful", feedback: "What is humble is what is holy.", isCorrect: false, sentiment: "negative" },
      { text: "Recognize the word fulfilled", nextScene: "cloaks", tag: "faithful", feedback: "Zechariah 9:9 and Matthew 21:4-5 — Jesus' entry on a donkey fulfilled the prophecy that Zion's king would come, gentle and riding on a donkey.", isCorrect: true, sentiment: "positive" },
      { text: "Worry about Roman soldiers", nextScene: "worry_consequence", tag: "fearful", feedback: "Fear is not the road today.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Do Not Mock",
    text: "Humility is the throne of God.\nReceive what you see.",
    choices: [
      { text: "Recognize the word fulfilled", nextScene: "cloaks", tag: "faithful", feedback: "You lower your eyes.", isCorrect: true, sentiment: "positive" },
    ],
  },
  worry_consequence: {
    id: "worry_consequence",
    title: "Be Not Afraid",
    text: "Today is for joy, not fear.\nLift your head.",
    choices: [
      { text: "Recognize the word fulfilled", nextScene: "cloaks", tag: "faithful", feedback: "You breathe peace.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — CLOAKS ON THE ROAD
  cloaks: {
    id: "cloaks",
    title: "A Royal Road",
    text: "Villagers spread their cloaks for him.\nThe ground becomes a carpet.",
    choices: [
      { text: "Keep your cloak for yourself", nextScene: "keep_consequence", tag: "fearful", feedback: "Give what honors him.", isCorrect: false, sentiment: "negative" },
      { text: "Lay your cloak on the road", nextScene: "palms", tag: "faithful", feedback: "Matthew 21:8 — A very large crowd spread their cloaks on the road.", isCorrect: true, sentiment: "positive" },
    ],
  },
  keep_consequence: {
    id: "keep_consequence",
    title: "Give Freely",
    text: "What you keep cannot honor him.\nOpen your hands.",
    choices: [
      { text: "Lay your cloak on the road", nextScene: "palms", tag: "faithful", feedback: "You let it fall.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — PALM BRANCHES
  palms: {
    id: "palms",
    title: "Branches Lifted",
    text: "Palm branches sway like green flames.\nThe air is bright with welcome.",
    choices: [
      { text: "Snap branches to sell later", nextScene: "sell_consequence", tag: "doubtful", feedback: "Worship is not a market.", isCorrect: false, sentiment: "negative" },
      { text: "Wave a branch with joy", nextScene: "hosanna", tag: "faithful", feedback: "John 12:13 — The people took palm branches and went out to meet Jesus.", isCorrect: true, sentiment: "positive" },
      { text: "Stand stiff and unmoved", nextScene: "stiff_consequence", tag: "fearful", feedback: "Even stones would cry out.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sell_consequence: {
    id: "sell_consequence",
    title: "Not For Sale",
    text: "This is praise, not profit.\nLift the branch in love.",
    choices: [
      { text: "Wave a branch with joy", nextScene: "hosanna", tag: "faithful", feedback: "You lift it high.", isCorrect: true, sentiment: "positive" },
    ],
  },
  stiff_consequence: {
    id: "stiff_consequence",
    title: "Let Joy Move You",
    text: "If you are silent, the stones will sing.\nJoin the song.",
    choices: [
      { text: "Wave a branch with joy", nextScene: "hosanna", tag: "faithful", feedback: "Your hands rise.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — HOSANNA
  hosanna: {
    id: "hosanna",
    title: "Hosanna in the Highest",
    text: "\"Blessed is he who comes\nin the name of the Lord!\"",
    choices: [
      { text: "Shout for a political king", nextScene: "political_consequence", tag: "doubtful", feedback: "He is a king of peace.", isCorrect: false, sentiment: "negative" },
      { text: "Sing Hosanna with the crowd", nextScene: "pharisees", tag: "faithful", feedback: "Matthew 21:9 — The crowds shouted, \"Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest heaven!\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  political_consequence: {
    id: "political_consequence",
    title: "A Different Crown",
    text: "He brings a kingdom not of swords.\nSing of peace instead.",
    choices: [
      { text: "Sing Hosanna with the crowd", nextScene: "pharisees", tag: "faithful", feedback: "You sing the holy name.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — THE PHARISEES
  pharisees: {
    id: "pharisees",
    title: "Quiet Your Disciples",
    text: "Pharisees frown at the song.\n\"Teacher, silence your people.\"",
    choices: [
      { text: "Hush the singing in fear", nextScene: "hush_consequence", tag: "fearful", feedback: "Do not quiet what God stirs.", isCorrect: false, sentiment: "negative" },
      { text: "Trust him — \"Even stones would cry.\"", nextScene: "enter", tag: "faithful", feedback: "Luke 19:40 — Jesus replied to the Pharisees that if his disciples were silent, the stones would cry out.", isCorrect: true, sentiment: "positive" },
      { text: "Argue loudly with the Pharisees", nextScene: "argue_consequence", tag: "doubtful", feedback: "Praise is louder than arguing.", isCorrect: false, sentiment: "negative" },
    ],
  },
  hush_consequence: {
    id: "hush_consequence",
    title: "Do Not Silence Joy",
    text: "What God has opened, do not close.\nSing on.",
    choices: [
      { text: "Trust him — \"Even stones would cry.\"", nextScene: "enter", tag: "faithful", feedback: "You sing again.", isCorrect: true, sentiment: "positive" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "Praise, Not Quarrel",
    text: "Let his presence answer them.\nReturn to the song.",
    choices: [
      { text: "Trust him — \"Even stones would cry.\"", nextScene: "enter", tag: "faithful", feedback: "You let praise speak.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — INTO THE CITY
  enter: {
    id: "enter",
    title: "The King Enters",
    text: "He passes through the gate in peace.\nThe city receives her humble King.",
    choices: [
      { text: "Slip away into the crowd", nextScene: "slip_consequence", tag: "fearful", feedback: "Stay where he goes.", isCorrect: false, sentiment: "negative" },
      { text: "Follow him into the city", nextScene: "ending", tag: "faithful", feedback: "Matthew 21:10 — When Jesus entered Jerusalem, the whole city was stirred and asked, \"Who is this?\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  slip_consequence: {
    id: "slip_consequence",
    title: "Stay With Him",
    text: "Today is the day to follow.\nReturn to his side.",
    choices: [
      { text: "Follow him into the city", nextScene: "ending", tag: "faithful", feedback: "You step in behind him.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "Blessed Is He",
    text: "A humble King has entered.\nProphecy walks through the gate.",
    choices: [],
    isFinal: true,
  },
};
