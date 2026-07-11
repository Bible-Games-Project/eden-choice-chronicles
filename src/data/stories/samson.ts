import { StoryScene } from "@/data/stories/creation";

// SAMSON — Judges 13-16
// You ARE Samson. Strength through vow, downfall through temptation, redemption in sacrifice.

export const samsonScenes: Record<string, StoryScene> = {
  // ACT I — THE NAZIRITE VOW
  start: {
    id: "start",
    title: "The Nazirite Promise",
    text: "An angel told your parents of you.\nNo razor must ever touch your hair.",
    choices: [
      { text: "Mock the old vow as foolish", nextScene: "mock_consequence", tag: "proud", feedback: "His promise gave you life.", isCorrect: false, sentiment: "negative" },
      { text: "Honor the vow set apart for God", nextScene: "vineyard", tag: "obedient", feedback: "Judges 13:5 — Samson was to be a Nazirite, set apart for God from birth, and no razor was to ever touch his head.", isCorrect: true, sentiment: "positive" },
      { text: "Hide the vow from everyone", nextScene: "hide_consequence", tag: "fearful", feedback: "What is set apart must be lived.", isCorrect: false, sentiment: "negative" },
    ],
  },
  mock_consequence: {
    id: "mock_consequence",
    title: "He Set You Apart",
    text: "The vow is not a chain but a calling.\nWalk in the gift He gave you.",
    choices: [
      { text: "Honor the vow set apart for God", nextScene: "vineyard", tag: "obedient", feedback: "You bow your head low.", isCorrect: true, sentiment: "positive" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "Live It Openly",
    text: "A hidden vow grows weak in shadow.\nLet the Lord be seen in you.",
    choices: [
      { text: "Honor the vow set apart for God", nextScene: "vineyard", tag: "obedient", feedback: "You step into the sun.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT II — FIRST CONFLICT
  vineyard: {
    id: "vineyard",
    title: "Lion on the Road",
    text: "A roar splits the vineyard air.\nThe Spirit rushes upon you.",
    choices: [
      { text: "Run and hide among the vines", nextScene: "run_consequence", tag: "fearful", feedback: "His Spirit gave you courage.", isCorrect: false, sentiment: "negative" },
      { text: "Beg the lion for mercy", nextScene: "beg_consequence", tag: "passive", feedback: "Stand in the strength He gave.", isCorrect: false, sentiment: "negative" },
      { text: "Stand and trust the Spirit's strength", nextScene: "philistine_clash", tag: "obedient", feedback: "Judges 14:6 — The Spirit of the Lord came powerfully upon Samson, and he tore the lion apart with his bare hands.", isCorrect: true, sentiment: "positive" },
    ],
  },
  run_consequence: {
    id: "run_consequence",
    title: "Stand in His Power",
    text: "The Spirit did not come for fleeing.\nTurn and face the beast.",
    choices: [
      { text: "Stand and trust the Spirit's strength", nextScene: "philistine_clash", tag: "obedient", feedback: "Power floods your arms.", isCorrect: true, sentiment: "positive" },
    ],
  },
  beg_consequence: {
    id: "beg_consequence",
    title: "Rise, Chosen One",
    text: "He chose you to deliver Israel.\nDo not bow to lion or fear.",
    choices: [
      { text: "Stand and trust the Spirit's strength", nextScene: "philistine_clash", tag: "obedient", feedback: "You rise to your full height.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT III — PHILISTINE CONFLICT
  philistine_clash: {
    id: "philistine_clash",
    title: "Philistines Press In",
    text: "They oppress your people daily.\nThe Spirit stirs again.",
    choices: [
      { text: "Make peace and bow to their gods", nextScene: "bow_consequence", tag: "compromise", feedback: "Never bow to Dagon.", isCorrect: false, sentiment: "negative" },
      { text: "Strike them down with God's strength", nextScene: "delilah_meet", tag: "obedient", feedback: "Judges 15:14-15 — The Spirit of the Lord came powerfully upon Samson, and he found a fresh jawbone of a donkey and struck down a thousand Philistines.", isCorrect: true, sentiment: "positive" },
      { text: "Boast and challenge them alone", nextScene: "boast_consequence", tag: "proud", feedback: "His arm wins, not your pride.", isCorrect: false, sentiment: "negative" },
    ],
  },
  bow_consequence: {
    id: "bow_consequence",
    title: "Serve the Lord Alone",
    text: "Their idols are wood and stone.\nFight only in His name.",
    choices: [
      { text: "Strike them down with God's strength", nextScene: "delilah_meet", tag: "obedient", feedback: "Strength returns to you.", isCorrect: true, sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "Give Him the Glory",
    text: "Boasting empties what He fills.\nFight humbly and let Him win.",
    choices: [
      { text: "Strike them down with God's strength", nextScene: "delilah_meet", tag: "obedient", feedback: "You charge in silent prayer.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT IV — DELILAH AND TEMPTATION
  delilah_meet: {
    id: "delilah_meet",
    title: "Delilah Whispers",
    text: "\"Tell me where your strength lies.\"\nHer voice is honey and snare.",
    choices: [
      { text: "Reveal the secret of your hair", nextScene: "betrayed", tag: "weak", feedback: "Your vow becomes a wound.", isCorrect: false, sentiment: "negative" },
      { text: "Guard the vow and walk away", nextScene: "guard_to_betrayed", tag: "obedient", feedback: "Judges 16:4-6 — The Philistine rulers asked Delilah to discover the source of Samson's great strength.", isCorrect: true, sentiment: "positive" },
      { text: "Lie again and stay in her arms", nextScene: "lie_consequence", tag: "compromise", feedback: "Lies cannot save your soul.", isCorrect: false, sentiment: "negative" },
    ],
  },
  lie_consequence: {
    id: "lie_consequence",
    title: "Flee Temptation",
    text: "Each lie pulls you closer to ruin.\nLeave her chamber for good.",
    choices: [
      { text: "Guard the vow and walk away", nextScene: "guard_to_betrayed", tag: "obedient", feedback: "You step toward the door.", isCorrect: true, sentiment: "positive" },
    ],
  },
  guard_to_betrayed: {
    id: "guard_to_betrayed",
    title: "Heart Worn Down",
    text: "Day after day she presses you.\nAt last your weary heart breaks.",
    choices: [
      { text: "Tell her the secret in weariness", nextScene: "betrayed", tag: "weak", feedback: "The vow falls with your words.", isCorrect: true, sentiment: "negative" },
    ],
  },

  // ACT V — BETRAYAL & PRISON
  betrayed: {
    id: "betrayed",
    title: "The Razor at Dawn",
    text: "You wake — your braids are gone.\nThe Spirit has departed from you.",
    choices: [
      { text: "Curse God for leaving you", nextScene: "curse_consequence", tag: "bitter", feedback: "Your sin opened this door.", isCorrect: false, sentiment: "negative" },
      { text: "Repent quietly in the dark mill", nextScene: "temple_summon", tag: "humble", feedback: "Judges 16:19-20 — Delilah had Samson's hair shaved off, and the Lord had left him.", isCorrect: true, sentiment: "positive" },
      { text: "Blame Delilah for everything", nextScene: "blame_consequence", tag: "proud", feedback: "You broke the vow yourself.", isCorrect: false, sentiment: "negative" },
    ],
  },
  curse_consequence: {
    id: "curse_consequence",
    title: "He Still Hears",
    text: "Even chained and blind, He listens.\nTurn your heart back to Him.",
    choices: [
      { text: "Repent quietly in the dark mill", nextScene: "temple_summon", tag: "humble", feedback: "Tears fall on the millstone.", isCorrect: true, sentiment: "positive" },
    ],
  },
  blame_consequence: {
    id: "blame_consequence",
    title: "Own Your Vow",
    text: "She tempted, but you chose to speak.\nConfession is the first strength.",
    choices: [
      { text: "Repent quietly in the dark mill", nextScene: "temple_summon", tag: "humble", feedback: "You bow your shaved head.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ACT VI — TEMPLE OF DAGON
  temple_summon: {
    id: "temple_summon",
    title: "Brought Before Dagon",
    text: "They mock you between the pillars.\nYour hair has grown back unseen.",
    choices: [
      { text: "Beg the crowd for your freedom", nextScene: "beg_crowd_consequence", tag: "fearful", feedback: "His glory, not your life.", isCorrect: false, sentiment: "negative" },
      { text: "Pray once more for the Lord's strength", nextScene: "ending_redeemed", tag: "obedient", feedback: "Judges 16:28 — Samson called to the Lord, asking for strength one last time to avenge his two eyes against the Philistines.", isCorrect: true, sentiment: "positive" },
      { text: "Stay silent and accept defeat", nextScene: "silent_consequence", tag: "passive", feedback: "Rise — finish what He began.", isCorrect: false, sentiment: "negative" },
    ],
  },
  beg_crowd_consequence: {
    id: "beg_crowd_consequence",
    title: "Cry to Heaven",
    text: "The crowd has no mercy in them.\nOnly One can answer now.",
    choices: [
      { text: "Pray once more for the Lord's strength", nextScene: "ending_redeemed", tag: "obedient", feedback: "Your lips form the prayer.", isCorrect: true, sentiment: "positive" },
    ],
  },
  silent_consequence: {
    id: "silent_consequence",
    title: "One Last Calling",
    text: "Israel still groans under Philistia.\nFinish your judgeship in faith.",
    choices: [
      { text: "Pray once more for the Lord's strength", nextScene: "ending_redeemed", tag: "obedient", feedback: "You grip the cold pillars.", isCorrect: true, sentiment: "positive" },
    ],
  },

  // ENDING
  ending_redeemed: {
    id: "ending_redeemed",
    title: "Let Me Die With Them",
    text: "The pillars groan, the temple falls.\nIn death you save more than in life.",
    choices: [],
    isFinal: true,
  },
};
