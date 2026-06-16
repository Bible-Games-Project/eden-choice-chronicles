import { StoryScene } from "@/data/stories/creation";

export const babelScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "The Plain of Shinar",
    text: "A wide green plain stretches ahead.\nAll mankind has gathered here — one people, one tongue.",
    choices: [
      { text: "Settle and build a home", nextScene: "unity", tag: "humble", feedback: "You sink roots into the earth. It feels right.", isCorrect: false, sentiment: "positive" },
      { text: "Dream of something greater", nextScene: "unity", tag: "ambitious", feedback: "The horizon is not enough. You want the sky.", isCorrect: true, sentiment: "negative" },
    ],
  },
  unity: {
    id: "unity",
    title: "One Tongue",
    text: "Voices blend. Laughter rises.\nThere is no word you cannot understand.",
    choices: [
      { text: "Praise God for the gift of unity", nextScene: "proposal", tag: "grateful", feedback: "You lift your voice in thanks. Others bow their heads.", isCorrect: false, sentiment: "positive" },
      { text: "Boast of what we could achieve", nextScene: "proposal", tag: "boastful", feedback: "Pride sparks in the crowd. Eyes turn upward.", isCorrect: true, sentiment: "negative" },
      { text: "Stay silent — listen to the elders", nextScene: "proposal", tag: "watchful", feedback: "Wise voices speak softly. Others shout louder.", isCorrect: false, sentiment: "negative" },
    ],
  },
  proposal: {
    id: "proposal",
    title: "The Great Idea",
    text: "An elder rises. \"Let us build a tower — its top in the heavens.\"\n\"Let us make a name for ourselves.\"",
    choices: [
      { text: "Cheer — join the great work", nextScene: "bricks", tag: "eager", feedback: "Your voice is one of thousands. The crowd roars.", isCorrect: true, sentiment: "negative" },
      { text: "Speak against it — this is pride", nextScene: "bricks", tag: "faithful", feedback: "Few hear you. But the words are spoken.", isCorrect: false, sentiment: "positive" },
      { text: "Wait — let others decide", nextScene: "bricks", tag: "passive", feedback: "Silence is its own answer. The vote passes.", isCorrect: false, sentiment: "negative" },
    ],
  },
  bricks: {
    id: "bricks",
    title: "Bricks and Tar",
    text: "You mold wet clay into bricks.\nThey are stronger than stone. They will reach the sky.",
    choices: [
      { text: "Work for the love of craft", nextScene: "construction", tag: "honest", feedback: "Your hands move with care. The work itself is good.", isCorrect: true, sentiment: "positive" },
      { text: "Race the others — outshine them", nextScene: "construction", tag: "prideful", feedback: "Your speed turns to recklessness. Bricks crack.", isCorrect: false, sentiment: "negative" },
    ],
  },
  construction: {
    id: "construction",
    title: "The First Floors",
    text: "Walls rise. The tower casts a long shadow.\nMen sing as they lift each beam.",
    choices: [
      { text: "Boast — \"We need no God now\"", nextScene: "rising", tag: "blasphemous", feedback: "Workers cheer. Above, the silence deepens.", isCorrect: true, sentiment: "negative" },
      { text: "Work quietly — say a prayer", nextScene: "rising", tag: "reverent", feedback: "No one hears. But the prayer is heard above.", isCorrect: false, sentiment: "positive" },
    ],
  },
  rising: {
    id: "rising",
    title: "Higher",
    text: "Year after year. Stone upon stone.\nThe tower pierces the clouds.",
    choices: [
      { text: "Doubt — should we stop?", nextScene: "summit", tag: "doubting", feedback: "You whisper it. The wind carries the words away.", isCorrect: false, sentiment: "positive" },
      { text: "Climb higher — there is no limit", nextScene: "summit", tag: "ambitious", feedback: "The ladder feels endless. Your pride is fuel.", isCorrect: true, sentiment: "negative" },
      { text: "Demand the workers go faster", nextScene: "summit", tag: "harsh", feedback: "Tempers fray. Hands bleed. The tower climbs.", isCorrect: false, sentiment: "negative" },
    ],
  },
  summit: {
    id: "summit",
    title: "Touching the Sky",
    text: "You stand at the top. The earth is small below.\nThe heavens feel close — almost within reach.",
    choices: [
      { text: "Reach upward — claim the sky", nextScene: "gods_gaze", tag: "prideful", feedback: "Your fingers find only wind. Yet you feel watched.", isCorrect: true, sentiment: "negative" },
      { text: "Kneel — feel suddenly small", nextScene: "gods_gaze", tag: "humble", feedback: "The vastness above swallows your pride.", isCorrect: false, sentiment: "positive" },
    ],
  },
  gods_gaze: {
    id: "gods_gaze",
    title: "He Comes Down",
    text: "A voice fills the air, calm as thunder.\n\"They are one people. Nothing will be impossible for them.\"",
    choices: [
      { text: "Stand defiant before the voice", nextScene: "confusion", tag: "defiant", feedback: "Your courage withers. The air grows heavy.", isCorrect: true, sentiment: "negative" },
      { text: "Bow your head in fear and awe", nextScene: "confusion", tag: "reverent", feedback: "Your knees buckle. The presence is everywhere.", isCorrect: false, sentiment: "positive" },
    ],
  },
  confusion: {
    id: "confusion",
    title: "Strange Words",
    text: "You shout to your friend. He stares.\nHis mouth opens — but the sounds make no sense.",
    choices: [
      { text: "Force him to understand — shout louder", nextScene: "scattering", tag: "angry", feedback: "Anger only deepens the void between you.", isCorrect: false, sentiment: "negative" },
      { text: "Step back — accept what God has done", nextScene: "scattering", tag: "accepting", feedback: "Tears fall. The wall between you is unbreakable.", isCorrect: true, sentiment: "positive" },
      { text: "Blame the elders — start a fight", nextScene: "scattering", tag: "violent", feedback: "Fists fly. The tower bleeds men instead of mortar.", isCorrect: false, sentiment: "negative" },
    ],
  },
  scattering: {
    id: "scattering",
    title: "Going Out",
    text: "Families gather what they can.\nEach group walks toward a different horizon.",
    choices: [
      { text: "Curse the heavens as you leave", nextScene: "reflection", tag: "bitter", feedback: "Bitterness is a heavy load to carry.", isCorrect: false, sentiment: "negative" },
      { text: "Walk in silence, lesson in heart", nextScene: "reflection", tag: "humble", feedback: "Each step is a small confession.", isCorrect: true, sentiment: "positive" },
    ],
  },
  reflection: {
    id: "reflection",
    title: "A New Land",
    text: "You stop on a quiet ridge.\nThe tower is far behind — a memory of pride.",
    choices: [],
    isFinal: true,
  },
};
