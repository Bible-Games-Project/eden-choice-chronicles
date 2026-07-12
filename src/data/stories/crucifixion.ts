import { StoryScene } from "@/data/stories/creation";

// CRUCIFIXION — Matthew 27, Mark 15, Luke 23, John 19
// You ARE Jesus. Focus: sacrifice, forgiveness, meaning.
// Stops BEFORE resurrection. Dialogue ≤100 chars, choices ≤40 chars.

export const crucifixionScenes: Record<string, StoryScene> = {
  // ACT I — CONDEMNED
  start: {
    id: "start",
    title: "The Verdict",
    text: "Pilate washes his hands of you.\nThe crowd roars: \"Crucify him!\"",
    choices: [
      { text: "Curse the crowd in anger", nextScene: "curse_consequence", tag: "rash", feedback: "Not curses. The cup is yours.", isCorrect: false, sentiment: "negative" },
      { text: "Receive the verdict in silence", nextScene: "carrying", tag: "obedient", feedback: "Matthew 27:27-31 — Jesus was led away to be crucified after Pilate washed his hands and released Barabbas.", isCorrect: true, sentiment: "positive" },
      { text: "Plead with Pilate for mercy", nextScene: "plead_consequence", tag: "fearful", feedback: "The Father's will is the verdict.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "No Curse, Only Cup",
    text: "Even now, love is your answer.\nReceive what the Father gives.",
    choices: [
      { text: "Receive the verdict in silence", nextScene: "carrying", tag: "obedient", feedback: "You bow your head in peace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  plead_consequence: {
    id: "plead_consequence",
    title: "The Cup Is Mine",
    text: "You came for this hour.\nDo not turn from it now.",
    choices: [
      { text: "Receive the verdict in silence", nextScene: "carrying", tag: "obedient", feedback: "You set your face like flint.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — CARRYING THE CROSS
  carrying: {
    id: "carrying",
    title: "The Weight of the Beam",
    text: "Rough wood bites your shoulder.\nThe road to Golgotha rises ahead.",
    choices: [
      { text: "Drop the beam and refuse", nextScene: "drop_consequence", tag: "fearful", feedback: "One step. Then another.", isCorrect: false, sentiment: "negative" },
      { text: "Carry it step by trembling step", nextScene: "simon_scene", tag: "obedient", feedback: "John 19:17 — Jesus went out, bearing his own cross, to the place called The Place of a Skull.", isCorrect: true, sentiment: "positive" },
      { text: "Rage at the soldiers around you", nextScene: "rage_consequence", tag: "rash", feedback: "Strength is in surrender now.", isCorrect: false, sentiment: "negative" },
    ],
  },
  drop_consequence: {
    id: "drop_consequence",
    title: "One Step More",
    text: "Every step is a gift you give.\nLift the wood and walk.",
    choices: [
      { text: "Carry it step by trembling step", nextScene: "simon_scene", tag: "obedient", feedback: "Your feet press into the dust.", isCorrect: true, sentiment: "positive" },
    ],
  },
  rage_consequence: {
    id: "rage_consequence",
    title: "Strength in Surrender",
    text: "Wrath would shatter the sacrifice.\nWalk in quiet power instead.",
    choices: [
      { text: "Carry it step by trembling step", nextScene: "simon_scene", tag: "obedient", feedback: "You breathe and step forward.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — SIMON OF CYRENE
  simon_scene: {
    id: "simon_scene",
    title: "A Stranger's Shoulder",
    text: "You stumble. Soldiers seize Simon.\nThey force him to share the beam.",
    choices: [
      { text: "Shame him for being chosen", nextScene: "shame_consequence", tag: "prideful", feedback: "Receive his help with grace.", isCorrect: false, sentiment: "negative" },
      { text: "Wave him off and walk alone", nextScene: "alone_consequence", tag: "prideful", feedback: "Love does not refuse help.", isCorrect: false, sentiment: "negative" },
      { text: "Meet his eyes with quiet thanks", nextScene: "golgotha", tag: "humble", feedback: "Matthew 27:32 — As they went out, they found a man of Cyrene, Simon by name; him they compelled to carry Jesus' cross.", isCorrect: true, sentiment: "positive" },
    ],
  },
  shame_consequence: {
    id: "shame_consequence",
    title: "Receive the Help",
    text: "Even the Savior leans on kindness.\nLet him bear the wood with you.",
    choices: [
      { text: "Meet his eyes with quiet thanks", nextScene: "golgotha", tag: "humble", feedback: "Simon nods and walks beside you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  alone_consequence: {
    id: "alone_consequence",
    title: "No One Walks Alone",
    text: "Pride hides under solitary pain.\nAccept the hand the Father sends.",
    choices: [
      { text: "Meet his eyes with quiet thanks", nextScene: "golgotha", tag: "humble", feedback: "The weight lifts a little.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — GOLGOTHA
  golgotha: {
    id: "golgotha",
    title: "The Place of the Skull",
    text: "The hill rises grey and bare.\nSoldiers lay the cross at your feet.",
    choices: [
      { text: "Refuse the bitter wine they offer", nextScene: "nailed", tag: "obedient", feedback: "Mark 15:23 — They offered Jesus wine mixed with myrrh, but he did not take it.", isCorrect: true, sentiment: "positive" },
      { text: "Drink to dull the pain to come", nextScene: "drink_consequence", tag: "fearful", feedback: "The cup must be drunk awake.", isCorrect: false, sentiment: "negative" },
      { text: "Turn back down the hill", nextScene: "turn_back_consequence", tag: "fearful", feedback: "This hill is your throne.", isCorrect: false, sentiment: "negative" },
    ],
  },
  drink_consequence: {
    id: "drink_consequence",
    title: "Awake to the End",
    text: "Love refuses the easier path.\nDrink only the Father's cup.",
    choices: [
      { text: "Refuse the bitter wine they offer", nextScene: "nailed", tag: "obedient", feedback: "You shake your head and rise.", isCorrect: true, sentiment: "positive" },
    ],
  },
  turn_back_consequence: {
    id: "turn_back_consequence",
    title: "This Is the Throne",
    text: "The hill is where mercy is made.\nClimb the last steps.",
    choices: [
      { text: "Refuse the bitter wine they offer", nextScene: "nailed", tag: "obedient", feedback: "You walk to the wood waiting.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT V — NAILED
  nailed: {
    id: "nailed",
    title: "Father, Forgive Them",
    text: "Iron drives through wrist and foot.\nSoldiers gamble for your robe.",
    choices: [
      { text: "Cry out a curse upon them", nextScene: "nail_curse_consequence", tag: "rash", feedback: "Mercy speaks louder than wrath.", isCorrect: false, sentiment: "negative" },
      { text: "\"Forgive them; they do not know.\"", nextScene: "criminals", tag: "loving", feedback: "Luke 23:34 — Jesus said, \"Father, forgive them, for they know not what they do.\"", isCorrect: true, sentiment: "positive" },
      { text: "Plead one last time for freedom", nextScene: "plead_free_consequence", tag: "fearful", feedback: "Stay. The work is being done.", isCorrect: false, sentiment: "negative" },
    ],
  },
  nail_curse_consequence: {
    id: "nail_curse_consequence",
    title: "Mercy, Not Wrath",
    text: "From the cross, only love.\nSpeak forgiveness, even now.",
    choices: [
      { text: "\"Forgive them; they do not know.\"", nextScene: "criminals", tag: "loving", feedback: "The soldiers fall silent below.", isCorrect: true, sentiment: "positive" },
    ],
  },
  plead_free_consequence: {
    id: "plead_free_consequence",
    title: "The Work Is Being Done",
    text: "Freedom for the world is here.\nNot in escape, but in this hour.",
    choices: [
      { text: "\"Forgive them; they do not know.\"", nextScene: "criminals", tag: "loving", feedback: "Your voice carries down the hill.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — TWO CRIMINALS
  criminals: {
    id: "criminals",
    title: "Two on Either Side",
    text: "One thief mocks you in his pain.\nThe other whispers, \"Remember me.\"",
    choices: [
      { text: "Mock the mocker in return", nextScene: "mock_consequence", tag: "rash", feedback: "Answer hatred with grace.", isCorrect: false, sentiment: "negative" },
      { text: "Ignore both and stay silent", nextScene: "ignore_consequence", tag: "evasive", feedback: "A penitent heart deserves answer.", isCorrect: false, sentiment: "negative" },
      { text: "\"Today, you are with me.\"", nextScene: "mary_below", tag: "loving", feedback: "Luke 23:43 — Jesus said to the penitent thief, \"Truly, I say to you, today you will be with me in Paradise.\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "Grace, Not Scorn",
    text: "The cross is no place for mockery.\nLet mercy be your only voice.",
    choices: [
      { text: "\"Today, you are with me.\"", nextScene: "mary_below", tag: "loving", feedback: "The thief weeps and breathes deep.", isCorrect: true, sentiment: "positive" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "Answer the Penitent",
    text: "A whispered faith must be met.\nSpeak the promise of paradise.",
    choices: [
      { text: "\"Today, you are with me.\"", nextScene: "mary_below", tag: "loving", feedback: "Hope blooms beside your cross.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VII — MARY AND JOHN
  mary_below: {
    id: "mary_below",
    title: "Mother and Beloved",
    text: "Your mother stands below in tears.\nJohn holds her trembling shoulder.",
    choices: [
      { text: "Look away from their grief", nextScene: "look_away_consequence", tag: "fearful", feedback: "Their pain deserves your gaze.", isCorrect: false, sentiment: "negative" },
      { text: "Curse the day you were born", nextScene: "curse_birth_consequence", tag: "prideful", feedback: "Bless, do not curse, even now.", isCorrect: false, sentiment: "negative" },
      { text: "\"Woman, behold your son.\"", nextScene: "final_breath", tag: "loving", feedback: "John 19:26 — When Jesus saw his mother and the disciple whom he loved standing nearby, he said to his mother, \"Woman, behold your son!\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  look_away_consequence: {
    id: "look_away_consequence",
    title: "See Them",
    text: "Even on the cross, you give.\nGive them to each other.",
    choices: [
      { text: "\"Woman, behold your son.\"", nextScene: "final_breath", tag: "loving", feedback: "Their tears soften into love.", isCorrect: true, sentiment: "positive" },
    ],
  },
  curse_birth_consequence: {
    id: "curse_birth_consequence",
    title: "Bless, Not Curse",
    text: "You were born for this hour.\nBless the ones still standing.",
    choices: [
      { text: "\"Woman, behold your son.\"", nextScene: "final_breath", tag: "loving", feedback: "Mary lifts her eyes to you.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VIII — FINAL BREATH
  final_breath: {
    id: "final_breath",
    title: "It Is Finished",
    text: "The sky darkens. Your strength fails.\nOne last breath waits inside you.",
    choices: [
      { text: "Scream against the silence", nextScene: "scream_consequence", tag: "rash", feedback: "End in trust, not in fury.", isCorrect: false, sentiment: "negative" },
      { text: "Beg the Father to undo it", nextScene: "undo_consequence", tag: "fearful", feedback: "The yes was spoken in the garden.", isCorrect: false, sentiment: "negative" },
      { text: "\"Father, into your hands.\"", nextScene: "ending", tag: "obedient", feedback: "Luke 23:46 — Jesus cried with a loud voice, \"Father, into your hands I commit my spirit!\"", isCorrect: true, sentiment: "positive" },
    ],
  },
  scream_consequence: {
    id: "scream_consequence",
    title: "End in Trust",
    text: "Wrath cannot finish the work.\nOnly surrender can.",
    choices: [
      { text: "\"Father, into your hands.\"", nextScene: "ending", tag: "obedient", feedback: "Your breath softens into peace.", isCorrect: true, sentiment: "positive" },
    ],
  },
  undo_consequence: {
    id: "undo_consequence",
    title: "Already Yes",
    text: "The garden's yes still holds.\nLet the body follow the heart.",
    choices: [
      { text: "\"Father, into your hands.\"", nextScene: "ending", tag: "obedient", feedback: "Quiet floods the hill.", isCorrect: true, sentiment: "positive" },
    ],
  },

  ending: {
    id: "ending",
    title: "It Is Finished",
    text: "The veil tears. The earth trembles.\nYour breath gives way to love itself.",
    choices: [],
    isFinal: true,
  },
};
