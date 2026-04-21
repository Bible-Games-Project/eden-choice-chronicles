import { StoryScene } from "@/data/stories/creation";

export const sodomScenes: Record<string, StoryScene> = {
  // ============ ACT I — THE CITY ============
  start: {
    id: "start",
    title: "The Marketplace at Dusk",
    text: "You walk home through the marketplace of Sodom.\nA merchant cheats a blind beggar of his last coin. A child is struck for stumbling into a noble's path.\nNo one intervenes. This is the city you have made your home.",
    choices: [
      { text: "Quietly pay the beggar what he was cheated of", nextScene: "to_gate", tag: "merciful", feedback: "You press a coin into his hand. He weeps. A few citizens stare at you with cold hostility.", sentiment: "positive" },
      { text: "Look away — this is not your fight", nextScene: "complicit_consequence", tag: "complicit", feedback: "You quicken your pace. The child's cries follow you down the street.", sentiment: "negative" },
      { text: "Join the laughter — it is safer to belong", nextScene: "complicit_consequence", tag: "joining", feedback: "Your laugh comes out hollow. Something inside you withers.", sentiment: "negative" },
    ],
  },
  complicit_consequence: {
    id: "complicit_consequence",
    title: "The Weight of Silence",
    text: "By the time you reach the city gate, the beggar's cries echo in your skull.\nThis city is sick — and silence is a kind of sickness too.\nYou stop at the gate, ashamed.",
    choices: [
      { text: "Resolve to do better — sit at the gate as a judge for travelers", nextScene: "to_gate", tag: "resolving", feedback: "You take your place at the gate. Lord, give me one chance to do right tonight.", sentiment: "positive" },
    ],
  },
  to_gate: {
    id: "to_gate",
    title: "Strangers at the Gate",
    text: "Evening falls. You sit at the gate of Sodom as is your custom.\nTwo travelers approach — robes pale with road-dust, faces calm beyond reason.\nNo one in this city offers shelter to strangers. By morning, they will not survive the streets.",
    choices: [
      { text: "Walk past — it is not your concern", nextScene: "ignore_consequence", tag: "indifferent", feedback: "You take three steps. Then you stop. You cannot leave them here.", sentiment: "negative" },
      { text: "Rise, bow before them, and offer your home", nextScene: "invite", tag: "hospitable", feedback: "You bow low. \"My lords, please — turn aside to your servant's house.\"", sentiment: "positive" },
      { text: "Send them to the public square — the city should host them", nextScene: "square_consequence", tag: "naive", feedback: "You point them toward the square. They do not move. \"No,\" they say. \"We will spend the night in the square.\"", sentiment: "negative" },
    ],
  },
  square_consequence: {
    id: "square_consequence",
    title: "They Will Not Survive the Square",
    text: "You see in their faces that they know what awaits them there.\nYou know it too. The square is where Sodom does its worst.\nYou have one last chance.",
    choices: [
      { text: "Insist they come under your roof tonight", nextScene: "invite", tag: "insisting", feedback: "You press them, urgently. At last they yield and follow you home.", sentiment: "positive" },
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

  // ============ ACT II — UNDER THE ROOF ============
  invite: {
    id: "invite",
    title: "Under My Roof",
    text: "They follow you home in silence.\nYou wash their feet. You bake unleavened bread.\nThe lamp burns low. A peace you have not felt in years fills the room.",
    choices: [
      { text: "Ask who they truly are", nextScene: "guests_reveal", tag: "curious", feedback: "They only smile. \"Eat, friend. The night will speak for itself.\"", sentiment: "positive" },
      { text: "Boast about your standing in the city", nextScene: "boast_consequence", tag: "proud", feedback: "Your words sound hollow even to your own ears. They listen without comment.", sentiment: "negative" },
      { text: "Quietly bolt the doors and close the shutters", nextScene: "guests_reveal", tag: "prudent", feedback: "You slide the bolt home. One of them nods, almost approving.", sentiment: "positive" },
    ],
  },
  boast_consequence: {
    id: "boast_consequence",
    title: "A Hollow Pride",
    text: "Mid-sentence you stop.\nWho are you in this city, really?\nA man tolerated. A man whose voice nobody heeds.",
    choices: [
      { text: "Fall silent and bolt the doors instead", nextScene: "guests_reveal", tag: "humbled", feedback: "You rise quietly and bar the door. The strangers' eyes follow you with something like mercy.", sentiment: "positive" },
    ],
  },
  guests_reveal: {
    id: "guests_reveal",
    title: "The Lamp Flickers",
    text: "Outside, the streets have grown unnaturally still.\nThe lamp flickers though there is no draft.\nYou hear footsteps gathering — many footsteps.",
    choices: [
      { text: "Stay seated with your guests, calmly", nextScene: "mob", tag: "calm", feedback: "You fold your hands. Whatever comes, it will find you ready.", sentiment: "positive" },
      { text: "Run to the upper room and hide", nextScene: "hide_consequence", tag: "fleeing", feedback: "You half-rise — then catch the strangers' steady gaze. You sit back down, ashamed.", sentiment: "negative" },
    ],
  },
  hide_consequence: {
    id: "hide_consequence",
    title: "There Is Nowhere to Hide",
    text: "The pounding has begun. The whole house shakes.\nNo upper room will save you.\nYour guests are still seated calmly at the table.",
    choices: [
      { text: "Return to the table and face what comes", nextScene: "mob", tag: "returning", feedback: "You take your seat again. One stranger touches your wrist. \"Be at peace.\"", sentiment: "positive" },
    ],
  },

  // ============ ACT III — THE MOB ============
  mob: {
    id: "mob",
    title: "The Pounding at the Door",
    text: "A roar fills the street.\nMen of Sodom — young and old, every quarter of the city — surround the house.\n\"Bring them out!\" they shout. \"Bring out the men who came to you tonight!\"",
    choices: [
      { text: "Open the door and hand the strangers over", nextScene: "betray_consequence", tag: "betray", feedback: "Your hand touches the latch. Then it falls. You cannot do it.", sentiment: "negative" },
      { text: "Step outside, shut the door behind you, and plead with the crowd", nextScene: "blinded", tag: "shielding", feedback: "You slip out alone. The door clicks shut behind you. The crowd's eyes are not human anymore.", sentiment: "positive" },
      { text: "Hide in the back room and stay silent", nextScene: "betray_consequence", tag: "cowering", feedback: "The pounding grows. Silence will not save your guests.", sentiment: "negative" },
      { text: "Try to bargain — offer them gold to disperse", nextScene: "bargain_consequence", tag: "bargaining", feedback: "You shout your offer through the door. The crowd only laughs louder.", sentiment: "negative" },
    ],
  },
  bargain_consequence: {
    id: "bargain_consequence",
    title: "They Do Not Want Gold",
    text: "Their fists redouble against the wood.\n\"This fellow came in to sojourn,\" they jeer, \"and he plays the judge!\"\nGold will not buy mercy here.",
    choices: [
      { text: "Step outside alone and shut the door behind you", nextScene: "blinded", tag: "facing", feedback: "You unbar the door, slip through, and pull it shut behind you.", sentiment: "positive" },
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

  // ============ ACT IV — THE WARNING ============
  warning: {
    id: "warning",
    title: "Flee This Place",
    text: "The strangers' faces shine like the dawn now.\n\"Whoever you have here — sons, daughters, sons-in-law — get them out.\nThe outcry against this city has reached the Lord. We are sent to destroy it.\"",
    choices: [
      { text: "Argue — surely the city is not so bad", nextScene: "delay_consequence", tag: "denial", feedback: "Their eyes hold no anger. Only sorrow. The decree is set.", sentiment: "negative" },
      { text: "Run at once to warn your daughters' betrothed", nextScene: "sons_in_law", tag: "obedient", feedback: "You throw on your cloak and rush into the streets, shouting their names.", sentiment: "positive" },
      { text: "Demand to know why the righteous must suffer with the wicked", nextScene: "demand_consequence", tag: "demanding", feedback: "\"There are no other righteous here,\" they answer softly. \"Only you. Only your house.\"", sentiment: "negative" },
    ],
  },
  demand_consequence: {
    id: "demand_consequence",
    title: "Only You",
    text: "Their words land like a stone in your chest.\nNo other righteous in the whole city.\nNot one. The decree has been weighed and weighed again.",
    choices: [
      { text: "Run to warn your daughters' betrothed", nextScene: "sons_in_law", tag: "running", feedback: "You bow your head and run.", sentiment: "positive" },
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
      { text: "Stay and try to convince them by force", nextScene: "stay_consequence", tag: "lingering", feedback: "You shake them by the shoulders. They push you away, calling you mad.", sentiment: "negative" },
      { text: "Return to your wife and daughters — there is no more time", nextScene: "lingering", tag: "returning", feedback: "Your heart breaks as you turn away. But you cannot save those who refuse to come.", sentiment: "positive" },
      { text: "Beg one more time on your knees", nextScene: "stay_consequence", tag: "begging", feedback: "You drop to your knees in the doorway. They slam the door in your face.", sentiment: "negative" },
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

  // ============ ACT V — THE LINGERING ============
  lingering: {
    id: "lingering",
    title: "He Lingered",
    text: "You stand in your courtyard.\nYour wife clutches a chest of belongings. Your daughters weep.\nThe house. The vineyard. A whole life. Your feet will not move.",
    choices: [
      { text: "Insist on gathering more before leaving", nextScene: "delay_consequence_2", tag: "clinging", feedback: "You reach for one more thing. Then another. The light outside grows red.", sentiment: "negative" },
      { text: "Let the angels take you each by the hand and lead you out", nextScene: "out_of_city", tag: "yielding", feedback: "Strong hands close around your wrist. You are pulled, weeping, through the gate.", sentiment: "positive" },
      { text: "Try to warn one more neighbor as you leave", nextScene: "neighbor_consequence", tag: "warning", feedback: "You shout into a doorway. A drunken voice curses you back.", sentiment: "negative" },
    ],
  },
  neighbor_consequence: {
    id: "neighbor_consequence",
    title: "No One Will Listen",
    text: "Door after door. Curses. Laughter. A thrown jar shatters near your head.\nThe angels' voices behind you grow sharp.\n\"Enough. Come now, or perish.\"",
    choices: [
      { text: "Yield and let them lead you out", nextScene: "out_of_city", tag: "yielding", feedback: "You stop fighting them. Their grip closes on your wrist.", sentiment: "positive" },
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

  // ============ ACT VI — THE FLIGHT ============
  out_of_city: {
    id: "out_of_city",
    title: "Outside the Walls",
    text: "The pre-dawn road stretches pale before you.\nThe city walls of Sodom rise behind, dark against a bruised sky.\n\"Flee for your life!\" the angel says. \"Do not look behind you. Do not stop anywhere in the plain. Flee to the mountains, lest you be swept away.\"",
    choices: [
      { text: "Beg to flee to the small town of Zoar instead — the mountains feel too far", nextScene: "zoar", tag: "pleading", feedback: "\"Please, my lord — let me flee there. It is only a little one. Let my life be saved.\"", sentiment: "positive" },
      { text: "Argue that you should be allowed to return for your sons-in-law", nextScene: "argue_consequence", tag: "delaying", feedback: "\"There is no more time,\" the angel says. \"Choose where you will live.\"", sentiment: "negative" },
      { text: "Refuse to move — the mountains will surely kill your daughters", nextScene: "refuse_consequence", tag: "refusing", feedback: "Your feet plant themselves. The angel turns to you with terrible patience.", sentiment: "negative" },
    ],
  },
  refuse_consequence: {
    id: "refuse_consequence",
    title: "Then Ask",
    text: "\"If the mountain frightens you,\" the angel says, \"then ask.\nThe Lord has shown you favor. He will hear what you ask, even now.\nBut ask quickly.\"",
    choices: [
      { text: "Ask for the small town of Zoar as refuge", nextScene: "zoar", tag: "asking", feedback: "\"Let me flee to Zoar — it is a little one.\" \"Granted,\" the angel says. \"Now run.\"", sentiment: "positive" },
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
      { text: "Call out to your wife to stay close", nextScene: "wife_looks", tag: "calling", feedback: "\"Stay with me!\" you shout without turning. Her footfalls grow uneven behind you.", sentiment: "positive" },
    ],
  },

  // ============ ACT VII — THE PILLAR ============
  wife_looks: {
    id: "wife_looks",
    title: "She Looked Back",
    text: "A sound makes you turn — not behind, but to your side.\nYour wife has stopped.\nShe is looking back at the burning city. Her face is changing. Salt blooms across her skin like frost.",
    choices: [
      { text: "Run back to her and try to pull her free", nextScene: "back_consequence", tag: "back", feedback: "Your hand reaches out — but the angel's voice cuts through: \"Do not stop. She is already gone.\"", sentiment: "negative" },
      { text: "Take your daughters' hands and keep running toward Zoar", nextScene: "destruction", tag: "forward_again", feedback: "You tear your eyes from her and run. Your daughters scream. The road carries you on.", sentiment: "positive" },
      { text: "Stand frozen and stare at her", nextScene: "back_consequence", tag: "frozen", feedback: "You cannot move. Your daughters scream your name to make you run.", sentiment: "negative" },
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
