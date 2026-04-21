import { StoryScene } from "@/data/stories/creation";

export const sodomScenes: Record<string, StoryScene> = {
  start: {
    id: "start",
    title: "Strangers at the Gate",
    text: "Evening falls on Sodom.\nTwo travelers stand at the city gate — robes pale with road-dust, faces calm beyond reason.\nNo one in this city offers shelter to strangers.",
    choices: [
      { text: "Walk past — it is not your concern", nextScene: "ignore_consequence", tag: "indifferent", feedback: "You take three steps. Then you stop. You cannot leave them here.", sentiment: "negative" },
      { text: "Rise, bow before them, and offer your home", nextScene: "invite", tag: "hospitable", feedback: "You bow low. \"My lords, please — turn aside to your servant's house.\"", sentiment: "positive" },
      { text: "Send a servant to handle it", nextScene: "ignore_consequence", tag: "distant", feedback: "Your servant returns alone. The strangers wait still at the gate.", sentiment: "negative" },
    ],
  },
  ignore_consequence: {
    id: "ignore_consequence",
    title: "The Gate at Dusk",
    text: "You cannot pretend you did not see them.\nThis city devours strangers.\nIf no one shelters them, the night will.",
    choices: [
      { text: "Return and welcome them into your house", nextScene: "invite", tag: "returning", feedback: "You hurry back. They look at you as if they already knew you would.", sentiment: "positive" },
    ],
  },
  invite: {
    id: "invite",
    title: "Under My Roof",
    text: "They follow you home in silence.\nYou wash their feet. You bake unleavened bread.\nThe lamp burns low. A peace you have not felt in years fills the room.",
    choices: [
      { text: "Ask who they truly are", nextScene: "mob", tag: "curious", feedback: "They only smile. \"Eat, friend. The night will speak for itself.\"", sentiment: "positive" },
      { text: "Boast about your standing in the city", nextScene: "mob", tag: "proud", feedback: "Your words sound hollow even to your own ears. They listen without comment.", sentiment: "negative" },
    ],
  },
  mob: {
    id: "mob",
    title: "The Pounding at the Door",
    text: "A roar fills the street.\nMen of Sodom — young and old, every quarter of the city — surround the house.\n\"Bring them out!\" they shout. \"Bring out the men who came to you tonight!\"",
    choices: [
      { text: "Open the door and hand the strangers over", nextScene: "betray_consequence", tag: "betray", feedback: "Your hand touches the latch. Then it falls. You cannot do it.", sentiment: "negative" },
      { text: "Step outside, shut the door behind you, and plead with the crowd", nextScene: "blinded", tag: "shielding", feedback: "You slip out alone. The door clicks shut behind you. The crowd's eyes are not human anymore.", sentiment: "positive" },
      { text: "Hide in the back room and stay silent", nextScene: "betray_consequence", tag: "cowering", feedback: "The pounding grows. Silence will not save your guests.", sentiment: "negative" },
    ],
  },
  betray_consequence: {
    id: "betray_consequence",
    title: "There Is No Safe Choice",
    text: "Cowardice will not protect them.\nSilence will not protect you.\nThe guests under your roof are sacred. You must stand between them and the night.",
    choices: [
      { text: "Step outside and face the crowd", nextScene: "blinded", tag: "facing", feedback: "You open the door and step into the torchlight. The door shuts behind you.", sentiment: "positive" },
    ],
  },
  blinded: {
    id: "blinded",
    title: "A Light Too Bright",
    text: "The crowd surges forward to seize you.\nSuddenly the door behind you flies open. A blinding light pours into the street.\nMen claw at their eyes, stumbling, lost — they cannot find the door at all.",
    choices: [
      { text: "Stand frozen in the light", nextScene: "warning", tag: "stunned", feedback: "Hands reach out from the doorway and pull you back inside.", sentiment: "positive" },
    ],
  },
  warning: {
    id: "warning",
    title: "Flee This Place",
    text: "The strangers' faces shine like the dawn now.\n\"Whoever you have here — sons, daughters, sons-in-law — get them out.\nThe outcry against this city has reached the Lord. We are sent to destroy it.\"",
    choices: [
      { text: "Argue — surely the city is not so bad", nextScene: "delay_consequence", tag: "denial", feedback: "Their eyes hold no anger. Only sorrow. The decree is set.", sentiment: "negative" },
      { text: "Run at once to warn your daughters' betrothed", nextScene: "sons_in_law", tag: "obedient", feedback: "You throw on your cloak and rush into the streets, shouting their names.", sentiment: "positive" },
    ],
  },
  delay_consequence: {
    id: "delay_consequence",
    title: "Time Runs Thin",
    text: "Outside, the wind has stopped.\nThe stars look wrong. The whole valley holds its breath.\nThere is no more time to argue.",
    choices: [
      { text: "Run to warn the men betrothed to your daughters", nextScene: "sons_in_law", tag: "rushing", feedback: "You sprint into the empty streets. Every moment costs you.", sentiment: "positive" },
    ],
  },
  sons_in_law: {
    id: "sons_in_law",
    title: "He Seemed to Be Joking",
    text: "You pound on the doors of the men pledged to your daughters.\n\"Up! Get out of this place — the Lord is about to destroy the city!\"\nThey laugh. They roll over and go back to sleep.",
    choices: [
      { text: "Stay and try to convince them", nextScene: "stay_consequence", tag: "lingering", feedback: "You shake them by the shoulders. They push you away, calling you mad.", sentiment: "negative" },
      { text: "Return to your wife and daughters — there is no more time", nextScene: "lingering", tag: "returning", feedback: "Your heart breaks as you turn away. But you cannot save those who refuse to come.", sentiment: "positive" },
    ],
  },
  stay_consequence: {
    id: "stay_consequence",
    title: "The Sky Begins to Smoke",
    text: "The east is already turning orange where it should be black.\nA low rumble walks beneath your feet.\nYour daughters are still in the house. Your wife is still in the house.",
    choices: [
      { text: "Race back home", nextScene: "lingering", tag: "racing", feedback: "You run as you have not run in years. The streets are shifting.", sentiment: "positive" },
    ],
  },
  lingering: {
    id: "lingering",
    title: "He Lingered",
    text: "You stand in your courtyard.\nYour wife clutches a chest of belongings. Your daughters weep.\nThe house. The vineyard. A whole life. Your feet will not move.",
    choices: [
      { text: "Insist on gathering more before leaving", nextScene: "delay_consequence_2", tag: "clinging", feedback: "You reach for one more thing. Then another. The light outside grows red.", sentiment: "negative" },
      { text: "Let the angels take you each by the hand and lead you out", nextScene: "out_of_city", tag: "yielding", feedback: "Strong hands close around your wrist. You are pulled, weeping, through the gate.", sentiment: "positive" },
    ],
  },
  delay_consequence_2: {
    id: "delay_consequence_2",
    title: "Mercy Will Not Wait",
    text: "An angel seizes your hand.\nAnother takes your wife. Two more your daughters.\n\"The Lord is merciful to you,\" they say. \"Now run.\"",
    choices: [
      { text: "Be led out of the city without looking back", nextScene: "out_of_city", tag: "led", feedback: "Your feet stumble. Their grip does not let go until you are beyond the wall.", sentiment: "positive" },
    ],
  },
  out_of_city: {
    id: "out_of_city",
    title: "Outside the Walls",
    text: "The pre-dawn road stretches pale before you.\nThe city walls of Sodom rise behind, dark against a bruised sky.\n\"Flee for your life!\" the angel says. \"Do not look behind you. Do not stop anywhere in the plain. Flee to the mountains, lest you be swept away.\"",
    choices: [
      { text: "Beg to flee to the small town of Zoar instead — the mountains feel too far", nextScene: "zoar", tag: "pleading", feedback: "\"Please, my lord — let me flee there. It is only a little one. Let my life be saved.\"", sentiment: "positive" },
      { text: "Argue that you should be allowed to return for your sons-in-law", nextScene: "argue_consequence", tag: "delaying", feedback: "\"There is no more time,\" the angel says. \"Choose where you will live.\"", sentiment: "negative" },
    ],
  },
  argue_consequence: {
    id: "argue_consequence",
    title: "The Sun Rises",
    text: "The first ray of dawn touches the eastern hills.\nThe angel's voice is urgent now.\n\"Choose. The decree cannot be held back any longer.\"",
    choices: [
      { text: "Ask for the small town of Zoar", nextScene: "zoar", tag: "asking", feedback: "\"Go quickly,\" he says. \"For I can do nothing until you reach it.\"", sentiment: "positive" },
    ],
  },
  zoar: {
    id: "zoar",
    title: "Toward the Refuge",
    text: "Zoar shines pale in the cliffs ahead — small, untouched, waiting.\nYou run. Your daughters run. Your wife runs behind.\nBehind you, the air begins to hiss.",
    choices: [
      { text: "Glance back — surely one look cannot hurt", nextScene: "wife_looks", tag: "tempted", feedback: "Your wife's footsteps falter behind you. \"Do not look,\" you whisper without turning.", sentiment: "negative" },
      { text: "Keep your eyes fixed on Zoar and do not turn", nextScene: "wife_looks", tag: "forward", feedback: "You stare at the village ahead. You do not turn. But you do not know if she does the same.", sentiment: "positive" },
    ],
  },
  wife_looks: {
    id: "wife_looks",
    title: "She Looked Back",
    text: "A sound makes you turn — not behind, but to your side.\nYour wife has stopped.\nShe is looking back at the burning city. Her face is changing. Salt blooms across her skin like frost.",
    choices: [
      { text: "Run back to her and try to pull her free", nextScene: "back_consequence", tag: "back", feedback: "Your hand reaches out — but the angel's voice cuts through: \"Do not stop. She is already gone.\"", sentiment: "negative" },
      { text: "Take your daughters' hands and keep running toward Zoar", nextScene: "destruction", tag: "forward_again", feedback: "You tear your eyes from her and run. Your daughters scream. The road carries you on.", sentiment: "positive" },
    ],
  },
  back_consequence: {
    id: "back_consequence",
    title: "She Is Already Gone",
    text: "The pillar that was your wife stands silent on the road.\nYour daughters cling to you, wailing.\nThe sky behind you splits open with light.",
    choices: [
      { text: "Take your daughters and run on to Zoar", nextScene: "destruction", tag: "running", feedback: "You turn from the pillar. You will mourn her later — if you live.", sentiment: "positive" },
    ],
  },
  destruction: {
    id: "destruction",
    title: "Fire from the Lord",
    text: "You reach the gate of Zoar as the sun fully rises.\nBehind you, fire and burning sulfur fall from the sky upon Sodom and Gomorrah —\nthe whole valley, the cities, the people, the very plants of the ground.",
    choices: [
      { text: "Watch the destruction in horror", nextScene: "aftermath", tag: "watching", feedback: "Smoke rises like the smoke of a furnace. You sink to your knees.", sentiment: "positive" },
    ],
  },
  aftermath: {
    id: "aftermath",
    title: "Where a City Once Stood",
    text: "When the smoke thins, the valley is unrecognizable —\na vast plain of grey ash and crusted salt.\nNothing moves there. Nothing will move there again.\n\nGod remembered Abraham, and sent you out from the midst of the overthrow.",
    isFinal: true,
    choices: [],
  },
};
