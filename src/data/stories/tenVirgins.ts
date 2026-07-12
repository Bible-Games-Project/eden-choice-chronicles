import { StoryScene } from "@/data/stories/creation";

// TEN VIRGINS — Matthew 25:1-13
// You wait with the bridesmaids for the bridegroom who comes at midnight.

export const tenVirginsScenes: Record<string, StoryScene> = {
  // ACT I — JESUS BEGINS THE PARABLE
  start: {
    id: "start",
    title: "Be Watchful",
    text: "Jesus says softly,\n\"The kingdom is like ten waiting for a bridegroom.\"",
    choices: [
      { text: "Lean in and listen close", nextScene: "wait", tag: "faithful", feedback: "Matthew 25:1 — Jesus began the parable by saying the kingdom of heaven will be comparable to ten virgins.", isCorrect: true, sentiment: "positive" },
      { text: "Decide it does not matter", nextScene: "ignore_consequence", tag: "doubtful", feedback: "Every word of his matters.", isCorrect: false, sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Stay Awake",
    text: "What he teaches now will guard your heart later.\nListen well.",
    choices: [
      { text: "Lean in and listen close", nextScene: "wait", tag: "faithful", feedback: "You turn back to him.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — TEN WAITING AT THE GATE
  wait: {
    id: "wait",
    title: "Ten at the Gate",
    text: "Ten bridesmaids stand in the dusk,\nlamps in hand, eyes on the road.",
    choices: [
      { text: "Stand with them and wait", nextScene: "oil", tag: "faithful", feedback: "Matthew 25:1 — The virgins took their lamps and went out to meet the bridegroom.", isCorrect: true, sentiment: "positive" },
      { text: "Wander off until it starts", nextScene: "wander_consequence", tag: "doubtful", feedback: "Waiting is part of love.", isCorrect: false, sentiment: "negative" },
    ],
  },
  wander_consequence: {
    id: "wander_consequence",
    title: "Hold Your Place",
    text: "Those who wait well are the ones ready.\nStay with the lamps.",
    choices: [
      { text: "Stand with them and wait", nextScene: "oil", tag: "faithful", feedback: "You take your place.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — THE OIL CHOICE
  oil: {
    id: "oil",
    title: "Extra Oil",
    text: "Some carry a small flask of extra oil.\nOthers carry only a lamp.",
    choices: [
      { text: "Trust your lamp is enough", nextScene: "skip_consequence", tag: "fearful", feedback: "The night may be long.", isCorrect: false, sentiment: "negative" },
      { text: "Fill a flask with extra oil", nextScene: "delay", tag: "faithful", feedback: "Matthew 25:3-4 — The foolish virgins took their lamps but took no oil with them, but the wise took flasks of oil along with their lamps.", isCorrect: true, sentiment: "positive" },
      { text: "Borrow oil later if needed", nextScene: "borrow_consequence", tag: "doubtful", feedback: "Some things cannot be borrowed.", isCorrect: false, sentiment: "negative" },
    ],
  },
  skip_consequence: {
    id: "skip_consequence",
    title: "Be Prepared",
    text: "A wise heart plans for the long wait.\nFill the flask now.",
    choices: [
      { text: "Fill a flask with extra oil", nextScene: "delay", tag: "faithful", feedback: "You prepare quietly.", isCorrect: true, sentiment: "positive" },
    ],
  },
  borrow_consequence: {
    id: "borrow_consequence",
    title: "Your Own Flame",
    text: "Faith cannot be borrowed in the dark.\nCarry your own oil.",
    choices: [
      { text: "Fill a flask with extra oil", nextScene: "delay", tag: "faithful", feedback: "You learn the lesson.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — THE LONG DELAY
  delay: {
    id: "delay",
    title: "The Long Wait",
    text: "Stars wheel overhead, the bridegroom delays.\nLamps flicker low.",
    choices: [
      { text: "Curse the slow hours", nextScene: "curse_consequence", tag: "doubtful", feedback: "Trust the timing.", isCorrect: false, sentiment: "negative" },
      { text: "Keep watch through the night", nextScene: "midnight", tag: "faithful", feedback: "Matthew 25:5 — While the bridegroom was delaying, they all got drowsy and began to sleep.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "His Timing",
    text: "He comes in his own hour, not ours.\nKeep the watch.",
    choices: [
      { text: "Keep watch through the night", nextScene: "midnight", tag: "faithful", feedback: "You wait in peace.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — MIDNIGHT CRY
  midnight: {
    id: "midnight",
    title: "Midnight Cry",
    text: "A voice rings out at the dark hour,\n\"The bridegroom! Come out to meet him!\"",
    choices: [
      { text: "Trim your lamp and rise", nextScene: "run", tag: "faithful", feedback: "Matthew 25:6-7 — At midnight there was a shout, 'Behold, the bridegroom!' Then all those virgins rose and trimmed their lamps.", isCorrect: true, sentiment: "positive" },
      { text: "Sleep through the cry", nextScene: "sleep_consequence", tag: "fearful", feedback: "Now is the moment.", isCorrect: false, sentiment: "negative" },
    ],
  },
  sleep_consequence: {
    id: "sleep_consequence",
    title: "Rise Now",
    text: "The call has come. Do not miss it.\nLift your lamp.",
    choices: [
      { text: "Trim your lamp and rise", nextScene: "run", tag: "faithful", feedback: "You stand and wake.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — FOOLISH RUN FOR OIL
  run: {
    id: "run",
    title: "No Oil Left",
    text: "Five lamps sputter and die in the dark.\nThey run to find oil in time.",
    choices: [
      { text: "Mock those without oil", nextScene: "mock_consequence", tag: "doubtful", feedback: "Let your heart be humble.", isCorrect: false, sentiment: "negative" },
      { text: "Walk on with the wise five", nextScene: "door", tag: "faithful", feedback: "Matthew 25:8-9 — The foolish virgins asked the wise for oil, but the wise replied that there would not be enough for all, and told them to go buy oil for themselves.", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Be Humble",
    text: "Their loss is no joy to anyone.\nWalk on with care.",
    choices: [
      { text: "Walk on with the wise five", nextScene: "door", tag: "faithful", feedback: "Pride softens to sorrow.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — THE DOOR
  door: {
    id: "door",
    title: "The Door Shuts",
    text: "The bridegroom enters the feast.\nThe door swings closed behind him.",
    choices: [
      { text: "Pound and demand to enter", nextScene: "demand_consequence", tag: "doubtful", feedback: "Readiness cannot be demanded.", isCorrect: false, sentiment: "negative" },
      { text: "Stand in the warm light within", nextScene: "ending", tag: "faithful", feedback: "Matthew 25:10 — While the foolish virgins were gone, the bridegroom came, and those who were ready went in with him to the wedding feast, and the door was shut.", isCorrect: true, sentiment: "positive" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Be Ready First",
    text: "The hour to prepare was before.\nReadiness opens the door.",
    choices: [
      { text: "Stand in the warm light within", nextScene: "ending", tag: "faithful", feedback: "You enter at the right time.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending: {
    id: "ending",
    title: "Keep Watch",
    text: "Jesus turns to you in the soft dawn.\n\"Watch, for you know not the hour.\"",
    choices: [],
    isFinal: true,
  },
};
