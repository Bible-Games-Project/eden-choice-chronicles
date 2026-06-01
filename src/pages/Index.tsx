import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainMenu from "@/components/MainMenu";
import StoryMap from "@/components/StoryMap";
import GameScene from "@/components/GameScene";
import StoryEndScreen from "@/components/StoryEndScreen";
import SceneSelector from "@/components/SceneSelector";
import SpriteViewer from "@/components/SpriteViewer";
import { useGameProgress } from "@/hooks/useGameProgress";
import { shuffleChoices } from "@/lib/shuffleChoices";
import { useDevMode } from "@/hooks/useDevMode";
import { OLD_TESTAMENT_STORIES, ALL_NT_STORIES, StoryMeta } from "@/data/stories";
import { creationScenes, StoryChoice, StoryScene } from "@/data/stories/creation";
import { creationImages } from "@/data/stories/creationImages";
import { creationSprites, SpriteConfig } from "@/data/creationSprites";
import { creationEffects } from "@/data/creationEffects";
import { adamEveScenes } from "@/data/stories/adamEve";
import { adamEveImages } from "@/data/stories/adamEveImages";
import { adamEveSprites } from "@/data/stories/adamEveSprites";
import { adamEveEffects } from "@/data/stories/adamEveEffects";
import { cainAbelScenes } from "@/data/stories/cainAbel";
import { cainAbelImages } from "@/data/stories/cainAbelImages";
import { cainAbelSprites } from "@/data/stories/cainAbelSprites";
import { cainAbelEffects } from "@/data/stories/cainAbelEffects";
import { noahScenes } from "@/data/stories/noah";
import { noahImages } from "@/data/stories/noahImages";
import { noahSprites } from "@/data/stories/noahSprites";
import { noahEffects } from "@/data/stories/noahEffects";
import { babelScenes } from "@/data/stories/babel";
import { babelImages } from "@/data/stories/babelImages";
import { babelSprites } from "@/data/stories/babelSprites";
import { babelEffects } from "@/data/stories/babelEffects";
import { abrahamScenes } from "@/data/stories/abraham";
import { abrahamImages } from "@/data/stories/abrahamImages";
import { abrahamSprites } from "@/data/stories/abrahamSprites";
import { abrahamEffects } from "@/data/stories/abrahamEffects";
import { abrahamEgyptScenes } from "@/data/stories/abrahamEgypt";
import { abrahamEgyptImages } from "@/data/stories/abrahamEgyptImages";
import { abrahamEgyptSprites } from "@/data/stories/abrahamEgyptSprites";
import { abrahamEgyptEffects } from "@/data/stories/abrahamEgyptEffects";
import { abrahamLotScenes } from "@/data/stories/abrahamLot";
import { abrahamLotImages } from "@/data/stories/abrahamLotImages";
import { abrahamLotSprites } from "@/data/stories/abrahamLotSprites";
import { abrahamLotEffects } from "@/data/stories/abrahamLotEffects";
import { sodomScenes } from "@/data/stories/sodom";
import { sodomImages } from "@/data/stories/sodomImages";
import { sodomSprites } from "@/data/stories/sodomSprites";
import { sodomEffects } from "@/data/stories/sodomEffects";
import { sacrificeIsaacScenes } from "@/data/stories/sacrificeIsaac";
import { sacrificeIsaacImages } from "@/data/stories/sacrificeIsaacImages";
import { sacrificeIsaacSprites } from "@/data/stories/sacrificeIsaacSprites";
import { sacrificeIsaacEffects } from "@/data/stories/sacrificeIsaacEffects";
import { rebekahScenes } from "@/data/stories/rebekah";
import { rebekahImages } from "@/data/stories/rebekahImages";
import { rebekahSprites } from "@/data/stories/rebekahSprites";
import { rebekahEffects } from "@/data/stories/rebekahEffects";
import { jacobEsauScenes } from "@/data/stories/jacobEsau";
import { jacobEsauImages } from "@/data/stories/jacobEsauImages";
import { jacobEsauSprites } from "@/data/stories/jacobEsauSprites";
import { jacobEsauEffects } from "@/data/stories/jacobEsauEffects";
import { jacobsDreamScenes } from "@/data/stories/jacobsDream";
import { jacobsDreamImages } from "@/data/stories/jacobsDreamImages";
import { jacobsDreamSprites } from "@/data/stories/jacobsDreamSprites";
import { jacobsDreamEffects } from "@/data/stories/jacobsDreamEffects";
import { jacobWrestlesScenes } from "@/data/stories/jacobWrestles";
import { jacobWrestlesImages } from "@/data/stories/jacobWrestlesImages";
import { jacobWrestlesSprites } from "@/data/stories/jacobWrestlesSprites";
import { jacobWrestlesEffects } from "@/data/stories/jacobWrestlesEffects";
import { josephSoldScenes } from "@/data/stories/josephSold";
import { josephSoldImages } from "@/data/stories/josephSoldImages";
import { josephSoldSprites } from "@/data/stories/josephSoldSprites";
import { josephSoldEffects } from "@/data/stories/josephSoldEffects";
import { josephPotipharScenes } from "@/data/stories/josephPotiphar";
import { josephPotipharImages } from "@/data/stories/josephPotipharImages";
import { josephPotipharSprites } from "@/data/stories/josephPotipharSprites";
import { josephPotipharEffects } from "@/data/stories/josephPotipharEffects";
import { josephPrisonScenes } from "@/data/stories/josephPrison";
import { josephPrisonImages } from "@/data/stories/josephPrisonImages";
import { josephPrisonSprites } from "@/data/stories/josephPrisonSprites";
import { josephPrisonEffects } from "@/data/stories/josephPrisonEffects";
import { josephDreamsScenes } from "@/data/stories/josephDreams";
import { josephDreamsImages } from "@/data/stories/josephDreamsImages";
import { josephDreamsSprites } from "@/data/stories/josephDreamsSprites";
import { josephDreamsEffects } from "@/data/stories/josephDreamsEffects";
import { josephBrothersEgyptScenes } from "@/data/stories/josephBrothersEgypt";
import { josephBrothersEgyptImages } from "@/data/stories/josephBrothersEgyptImages";
import { josephBrothersEgyptSprites } from "@/data/stories/josephBrothersEgyptSprites";
import { josephBrothersEgyptEffects } from "@/data/stories/josephBrothersEgyptEffects";
import { josephReconcilesScenes } from "@/data/stories/josephReconciles";
import { josephReconcilesImages } from "@/data/stories/josephReconcilesImages";
import { josephReconcilesSprites } from "@/data/stories/josephReconcilesSprites";
import { josephReconcilesEffects } from "@/data/stories/josephReconcilesEffects";
import { birthMosesScenes } from "@/data/stories/birthMoses";
import { birthMosesImages } from "@/data/stories/birthMosesImages";
import { birthMosesSprites } from "@/data/stories/birthMosesSprites";
import { birthMosesEffects } from "@/data/stories/birthMosesEffects";
import { mosesFleesScenes } from "@/data/stories/mosesFlees";
import { mosesFleesImages } from "@/data/stories/mosesFleesImages";
import { mosesFleesSprites } from "@/data/stories/mosesFleesSprites";
import { mosesFleesEffects } from "@/data/stories/mosesFleesEffects";
import { burningBushScenes } from "@/data/stories/burningBush";
import { burningBushImages } from "@/data/stories/burningBushImages";
import { burningBushSprites } from "@/data/stories/burningBushSprites";
import { burningBushEffects } from "@/data/stories/burningBushEffects";
import { mosesPharaohScenes } from "@/data/stories/mosesPharaoh";
import { mosesPharaohImages } from "@/data/stories/mosesPharaohImages";
import { mosesPharaohSprites } from "@/data/stories/mosesPharaohSprites";
import { mosesPharaohEffects } from "@/data/stories/mosesPharaohEffects";
import { plaguesScenes } from "@/data/stories/plagues";
import { plaguesImages } from "@/data/stories/plaguesImages";
import { plaguesSprites } from "@/data/stories/plaguesSprites";
import { plaguesEffects } from "@/data/stories/plaguesEffects";
import { passoverScenes } from "@/data/stories/passover";
import { passoverImages } from "@/data/stories/passoverImages";
import { passoverSprites } from "@/data/stories/passoverSprites";
import { passoverEffects } from "@/data/stories/passoverEffects";
import { redSeaScenes } from "@/data/stories/redSea";
import { redSeaImages } from "@/data/stories/redSeaImages";
import { redSeaSprites } from "@/data/stories/redSeaSprites";
import { redSeaEffects } from "@/data/stories/redSeaEffects";
import { mannaScenes } from "@/data/stories/manna";
import { mannaImages } from "@/data/stories/mannaImages";
import { mannaSprites } from "@/data/stories/mannaSprites";
import { mannaEffects } from "@/data/stories/mannaEffects";
import { waterRockScenes } from "@/data/stories/waterRock";
import { waterRockImages } from "@/data/stories/waterRockImages";
import { waterRockSprites } from "@/data/stories/waterRockSprites";
import { waterRockEffects } from "@/data/stories/waterRockEffects";
import { tenCommandmentsScenes } from "@/data/stories/tenCommandments";
import { tenCommandmentsImages } from "@/data/stories/tenCommandmentsImages";
import { tenCommandmentsSprites } from "@/data/stories/tenCommandmentsSprites";
import { tenCommandmentsEffects } from "@/data/stories/tenCommandmentsEffects";
import { goldenCalfScenes } from "@/data/stories/goldenCalf";
import { goldenCalfImages } from "@/data/stories/goldenCalfImages";
import { goldenCalfSprites } from "@/data/stories/goldenCalfSprites";
import { goldenCalfEffects } from "@/data/stories/goldenCalfEffects";
import { spiesCanaanScenes } from "@/data/stories/spiesCanaan";
import { spiesCanaanImages } from "@/data/stories/spiesCanaanImages";
import { spiesCanaanSprites } from "@/data/stories/spiesCanaanSprites";
import { spiesCanaanEffects } from "@/data/stories/spiesCanaanEffects";
import { rebellionPeopleScenes } from "@/data/stories/rebellionPeople";
import { rebellionPeopleImages } from "@/data/stories/rebellionPeopleImages";
import { rebellionPeopleSprites } from "@/data/stories/rebellionPeopleSprites";
import { rebellionPeopleEffects } from "@/data/stories/rebellionPeopleEffects";
import { balaamScenes } from "@/data/stories/balaam";
import { balaamImages } from "@/data/stories/balaamImages";
import { balaamSprites } from "@/data/stories/balaamSprites";
import { balaamEffects } from "@/data/stories/balaamEffects";
import { deathMosesScenes } from "@/data/stories/deathMoses";
import { deathMosesImages } from "@/data/stories/deathMosesImages";
import { deathMosesSprites } from "@/data/stories/deathMosesSprites";
import { deathMosesEffects } from "@/data/stories/deathMosesEffects";
import { jerichoScenes } from "@/data/stories/jericho";
import { jerichoImages } from "@/data/stories/jerichoImages";
import { jerichoSprites } from "@/data/stories/jerichoSprites";
import { jerichoEffects } from "@/data/stories/jerichoEffects";
import { sinAchanScenes } from "@/data/stories/sinAchan";
import { sinAchanImages } from "@/data/stories/sinAchanImages";
import { sinAchanSprites } from "@/data/stories/sinAchanSprites";
import { sinAchanEffects } from "@/data/stories/sinAchanEffects";
import { deborahBarakScenes } from "@/data/stories/deborahBarak";
import { deborahBarakImages } from "@/data/stories/deborahBarakImages";
import { deborahBarakSprites } from "@/data/stories/deborahBarakSprites";
import { deborahBarakEffects } from "@/data/stories/deborahBarakEffects";
import { gideonScenes } from "@/data/stories/gideon";
import { gideonImages } from "@/data/stories/gideonImages";
import { gideonSprites } from "@/data/stories/gideonSprites";
import { gideonEffects } from "@/data/stories/gideonEffects";
import { samsonScenes } from "@/data/stories/samson";
import { samsonImages } from "@/data/stories/samsonImages";
import { samsonSprites } from "@/data/stories/samsonSprites";
import { samsonEffects } from "@/data/stories/samsonEffects";
import { ruthNaomiScenes } from "@/data/stories/ruthNaomi";
import { ruthNaomiImages } from "@/data/stories/ruthNaomiImages";
import { ruthNaomiSprites } from "@/data/stories/ruthNaomiSprites";
import { ruthNaomiEffects } from "@/data/stories/ruthNaomiEffects";
import { samuelCalledScenes } from "@/data/stories/samuelCalled";
import { samuelCalledImages } from "@/data/stories/samuelCalledImages";
import { samuelCalledSprites } from "@/data/stories/samuelCalledSprites";
import { samuelCalledEffects } from "@/data/stories/samuelCalledEffects";
import { saulKingScenes } from "@/data/stories/saulKing";
import { saulKingImages } from "@/data/stories/saulKingImages";
import { saulKingSprites } from "@/data/stories/saulKingSprites";
import { saulKingEffects } from "@/data/stories/saulKingEffects";
import { davidGoliathScenes } from "@/data/stories/davidGoliath";
import { davidGoliathImages } from "@/data/stories/davidGoliathImages";
import { davidGoliathSprites } from "@/data/stories/davidGoliathSprites";
import { davidGoliathEffects } from "@/data/stories/davidGoliathEffects";
import { davidSaulScenes } from "@/data/stories/davidSaul";
import { davidSaulImages } from "@/data/stories/davidSaulImages";
import { davidSaulSprites } from "@/data/stories/davidSaulSprites";
import { davidSaulEffects } from "@/data/stories/davidSaulEffects";
import { davidBathshebaScenes } from "@/data/stories/davidBathsheba";
import { davidBathshebaImages } from "@/data/stories/davidBathshebaImages";
import { davidBathshebaSprites } from "@/data/stories/davidBathshebaSprites";
import { davidBathshebaEffects } from "@/data/stories/davidBathshebaEffects";
import { solomonWisdomScenes } from "@/data/stories/solomonWisdom";
import { solomonWisdomImages } from "@/data/stories/solomonWisdomImages";
import { solomonWisdomSprites } from "@/data/stories/solomonWisdomSprites";
import { solomonWisdomEffects } from "@/data/stories/solomonWisdomEffects";
import { elijahBaalScenes } from "@/data/stories/elijahBaal";
import { elijahBaalImages } from "@/data/stories/elijahBaalImages";
import { elijahBaalSprites } from "@/data/stories/elijahBaalSprites";
import { elijahBaalEffects } from "@/data/stories/elijahBaalEffects";
import { elishaNaamanScenes } from "@/data/stories/elishaNaaman";
import { elishaNaamanImages } from "@/data/stories/elishaNaamanImages";
import { elishaNaamanSprites } from "@/data/stories/elishaNaamanSprites";
import { elishaNaamanEffects } from "@/data/stories/elishaNaamanEffects";
import { fallJerusalemScenes } from "@/data/stories/fallJerusalem";
import { fallJerusalemImages } from "@/data/stories/fallJerusalemImages";
import { fallJerusalemSprites } from "@/data/stories/fallJerusalemSprites";
import { fallJerusalemEffects } from "@/data/stories/fallJerusalemEffects";
import { annunciationScenes } from "@/data/stories/annunciation";
import { annunciationImages } from "@/data/stories/annunciationImages";
import { annunciationSprites } from "@/data/stories/annunciationSprites";
import { annunciationEffects } from "@/data/stories/annunciationEffects";
import { birthJesusScenes } from "@/data/stories/birthJesus";
import { birthJesusImages } from "@/data/stories/birthJesusImages";
import { birthJesusSprites } from "@/data/stories/birthJesusSprites";
import { birthJesusEffects } from "@/data/stories/birthJesusEffects";
import { shepherdsScenes } from "@/data/stories/shepherds";
import { shepherdsImages } from "@/data/stories/shepherdsImages";
import { shepherdsSprites } from "@/data/stories/shepherdsSprites";
import { shepherdsEffects } from "@/data/stories/shepherdsEffects";
import { wiseMenScenes } from "@/data/stories/wiseMen";
import { wiseMenImages } from "@/data/stories/wiseMenImages";
import { wiseMenSprites } from "@/data/stories/wiseMenSprites";
import { wiseMenEffects } from "@/data/stories/wiseMenEffects";
import { flightEgyptScenes } from "@/data/stories/flightEgypt";
import { flightEgyptImages } from "@/data/stories/flightEgyptImages";
import { flightEgyptSprites } from "@/data/stories/flightEgyptSprites";
import { flightEgyptEffects } from "@/data/stories/flightEgyptEffects";
import { jesusTempleScenes } from "@/data/stories/jesusTemple";
import { jesusTempleImages } from "@/data/stories/jesusTempleImages";
import { jesusTempleSprites } from "@/data/stories/jesusTempleSprites";
import { jesusTempleEffects } from "@/data/stories/jesusTempleEffects";
import { baptismJesusScenes } from "@/data/stories/baptismJesus";
import { baptismJesusImages } from "@/data/stories/baptismJesusImages";
import { baptismJesusSprites } from "@/data/stories/baptismJesusSprites";
import { baptismJesusEffects } from "@/data/stories/baptismJesusEffects";
import { temptationDesertScenes } from "@/data/stories/temptationDesert";
import { temptationDesertImages } from "@/data/stories/temptationDesertImages";
import { temptationDesertSprites } from "@/data/stories/temptationDesertSprites";
import { temptationDesertEffects } from "@/data/stories/temptationDesertEffects";
import { callingDisciplesScenes } from "@/data/stories/callingDisciples";
import { callingDisciplesImages } from "@/data/stories/callingDisciplesImages";
import { callingDisciplesSprites } from "@/data/stories/callingDisciplesSprites";
import { callingDisciplesEffects } from "@/data/stories/callingDisciplesEffects";
import { weddingCanaScenes } from "@/data/stories/weddingCana";
import { weddingCanaImages } from "@/data/stories/weddingCanaImages";
import { weddingCanaSprites } from "@/data/stories/weddingCanaSprites";
import { weddingCanaEffects } from "@/data/stories/weddingCanaEffects";
import { healingLeperScenes } from "@/data/stories/healingLeper";
import { healingLeperImages } from "@/data/stories/healingLeperImages";
import { healingLeperSprites } from "@/data/stories/healingLeperSprites";
import { healingLeperEffects } from "@/data/stories/healingLeperEffects";
import { centurionServantScenes } from "@/data/stories/centurionServant";
import { centurionServantImages } from "@/data/stories/centurionServantImages";
import { centurionServantSprites } from "@/data/stories/centurionServantSprites";
import { centurionServantEffects } from "@/data/stories/centurionServantEffects";
import { calmingStormScenes } from "@/data/stories/calmingStorm";
import { calmingStormImages } from "@/data/stories/calmingStormImages";
import { calmingStormSprites } from "@/data/stories/calmingStormSprites";
import { calmingStormEffects } from "@/data/stories/calmingStormEffects";
import { demonPossessedScenes } from "@/data/stories/demonPossessed";
import { demonPossessedImages } from "@/data/stories/demonPossessedImages";
import { demonPossessedSprites } from "@/data/stories/demonPossessedSprites";
import { demonPossessedEffects } from "@/data/stories/demonPossessedEffects";
import { womanBloodScenes } from "@/data/stories/womanBlood";
import { womanBloodImages } from "@/data/stories/womanBloodImages";
import { womanBloodSprites } from "@/data/stories/womanBloodSprites";
import { womanBloodEffects } from "@/data/stories/womanBloodEffects";
import { jairusDaughterScenes } from "@/data/stories/jairusDaughter";
import { jairusDaughterImages } from "@/data/stories/jairusDaughterImages";
import { jairusDaughterSprites } from "@/data/stories/jairusDaughterSprites";
import { jairusDaughterEffects } from "@/data/stories/jairusDaughterEffects";
import { feeding5000Scenes } from "@/data/stories/feeding5000";
import { feeding5000Images } from "@/data/stories/feeding5000Images";
import { feeding5000Sprites } from "@/data/stories/feeding5000Sprites";
import { feeding5000Effects } from "@/data/stories/feeding5000Effects";
import { walkingWaterScenes } from "@/data/stories/walkingWater";
import { walkingWaterImages } from "@/data/stories/walkingWaterImages";
import { walkingWaterSprites } from "@/data/stories/walkingWaterSprites";
import { walkingWaterEffects } from "@/data/stories/walkingWaterEffects";
import { blindManScenes } from "@/data/stories/blindMan";
import { blindManImages } from "@/data/stories/blindManImages";
import { blindManSprites } from "@/data/stories/blindManSprites";
import { blindManEffects } from "@/data/stories/blindManEffects";
import { lazarusScenes } from "@/data/stories/lazarus";
import { lazarusImages } from "@/data/stories/lazarusImages";
import { lazarusSprites } from "@/data/stories/lazarusSprites";
import { lazarusEffects } from "@/data/stories/lazarusEffects";
import { sermonMountScenes } from "@/data/stories/sermonMount";
import { sermonMountImages } from "@/data/stories/sermonMountImages";
import { sermonMountSprites } from "@/data/stories/sermonMountSprites";
import { sermonMountEffects } from "@/data/stories/sermonMountEffects";
import { lordsPrayerScenes } from "@/data/stories/lordsPrayer";
import { lordsPrayerImages } from "@/data/stories/lordsPrayerImages";
import { lordsPrayerSprites } from "@/data/stories/lordsPrayerSprites";
import { lordsPrayerEffects } from "@/data/stories/lordsPrayerEffects";
import { goodSamaritanScenes } from "@/data/stories/goodSamaritan";
import { goodSamaritanImages } from "@/data/stories/goodSamaritanImages";
import { goodSamaritanSprites } from "@/data/stories/goodSamaritanSprites";
import { goodSamaritanEffects } from "@/data/stories/goodSamaritanEffects";
import { prodigalSonScenes } from "@/data/stories/prodigalSon";
import { prodigalSonImages } from "@/data/stories/prodigalSonImages";
import { prodigalSonSprites } from "@/data/stories/prodigalSonSprites";
import { prodigalSonEffects } from "@/data/stories/prodigalSonEffects";
import { richLazarusScenes } from "@/data/stories/richLazarus";
import { richLazarusImages } from "@/data/stories/richLazarusImages";
import { richLazarusSprites } from "@/data/stories/richLazarusSprites";
import { richLazarusEffects } from "@/data/stories/richLazarusEffects";
import { parableSowerScenes } from "@/data/stories/parableSower";
import { parableSowerImages } from "@/data/stories/parableSowerImages";
import { parableSowerSprites } from "@/data/stories/parableSowerSprites";
import { parableSowerEffects } from "@/data/stories/parableSowerEffects";
import { parableTalentsScenes } from "@/data/stories/parableTalents";
import { parableTalentsImages } from "@/data/stories/parableTalentsImages";
import { parableTalentsSprites } from "@/data/stories/parableTalentsSprites";
import { parableTalentsEffects } from "@/data/stories/parableTalentsEffects";
import { lostSheepScenes } from "@/data/stories/lostSheep";
import { lostSheepImages } from "@/data/stories/lostSheepImages";
import { lostSheepSprites } from "@/data/stories/lostSheepSprites";
import { lostSheepEffects } from "@/data/stories/lostSheepEffects";
import { phariseeTaxScenes } from "@/data/stories/phariseeTax";
import { phariseeTaxImages } from "@/data/stories/phariseeTaxImages";
import { phariseeTaxSprites } from "@/data/stories/phariseeTaxSprites";
import { phariseeTaxEffects } from "@/data/stories/phariseeTaxEffects";
import { tenVirginsScenes } from "@/data/stories/tenVirgins";
import { tenVirginsImages } from "@/data/stories/tenVirginsImages";
import { tenVirginsSprites } from "@/data/stories/tenVirginsSprites";
import { tenVirginsEffects } from "@/data/stories/tenVirginsEffects";
import { nicodemusScenes } from "@/data/stories/nicodemus";
import { nicodemusImages } from "@/data/stories/nicodemusImages";
import { nicodemusSprites } from "@/data/stories/nicodemusSprites";
import { nicodemusEffects } from "@/data/stories/nicodemusEffects";
import { samaritanWomanScenes } from "@/data/stories/samaritanWoman";
import { samaritanWomanImages } from "@/data/stories/samaritanWomanImages";
import { samaritanWomanSprites } from "@/data/stories/samaritanWomanSprites";
import { samaritanWomanEffects } from "@/data/stories/samaritanWomanEffects";
import { womanAdulteryScenes } from "@/data/stories/womanAdultery";
import { womanAdulteryImages } from "@/data/stories/womanAdulteryImages";
import { womanAdulterySprites } from "@/data/stories/womanAdulterySprites";
import { womanAdulteryEffects } from "@/data/stories/womanAdulteryEffects";
import { zacchaeusScenes } from "@/data/stories/zacchaeus";
import { zacchaeusImages } from "@/data/stories/zacchaeusImages";
import { zacchaeusSprites } from "@/data/stories/zacchaeusSprites";
import { zacchaeusEffects } from "@/data/stories/zacchaeusEffects";
import { richYoungManScenes } from "@/data/stories/richYoungMan";
import { richYoungManImages } from "@/data/stories/richYoungManImages";
import { richYoungManSprites } from "@/data/stories/richYoungManSprites";
import { richYoungManEffects } from "@/data/stories/richYoungManEffects";
import { debatesPhariseesScenes } from "@/data/stories/debatesPharisees";
import { debatesPhariseesImages } from "@/data/stories/debatesPhariseesImages";
import { debatesPhariseesSprites } from "@/data/stories/debatesPhariseesSprites";
import { debatesPhariseesEffects } from "@/data/stories/debatesPhariseesEffects";
import { cleansingTempleScenes } from "@/data/stories/cleansingTemple";
import { cleansingTempleImages } from "@/data/stories/cleansingTempleImages";
import { cleansingTempleSprites } from "@/data/stories/cleansingTempleSprites";
import { cleansingTempleEffects } from "@/data/stories/cleansingTempleEffects";
import { preloadImages } from "@/lib/preloadImages";

type Screen = "menu" | "map_ot" | "map_nt" | "playing" | "sprites";

const storySceneRegistry: Record<string, Record<string, StoryScene>> = {
  creation: creationScenes,
  "adam-eve": adamEveScenes,
  "cain-abel": cainAbelScenes,
  "noah-flood": noahScenes,
  "tower-babel": babelScenes,
  "call-abraham": abrahamScenes,
  "abraham-egypt": abrahamEgyptScenes,
  "abraham-lot": abrahamLotScenes,
  "sodom-gomorrah": sodomScenes,
  "sacrifice-isaac": sacrificeIsaacScenes,
  "rebekah-servant": rebekahScenes,
  "jacob-esau": jacobEsauScenes,
  "jacobs-dream": jacobsDreamScenes,
  "jacob-wrestles": jacobWrestlesScenes,
  "joseph-sold": josephSoldScenes,
  "joseph-potiphar": josephPotipharScenes,
  "joseph-prison": josephPrisonScenes,
  "joseph-dreams": josephDreamsScenes,
  "joseph-brothers-egypt": josephBrothersEgyptScenes,
  "joseph-reconciles": josephReconcilesScenes,
  "birth-moses": birthMosesScenes,
  "moses-flees": mosesFleesScenes,
  "burning-bush": burningBushScenes,
  "moses-pharaoh": mosesPharaohScenes,
  "plagues-egypt": plaguesScenes,
  passover: passoverScenes,
  "crossing-red-sea": redSeaScenes,
  "manna-desert": mannaScenes,
  "water-rock": waterRockScenes,
  "ten-commandments": tenCommandmentsScenes,
  "golden-calf": goldenCalfScenes,
  "spies-canaan": spiesCanaanScenes,
  "rebellion-people": rebellionPeopleScenes,
  "balaam-donkey": balaamScenes,
  "death-moses": deathMosesScenes,
  "fall-jericho": jerichoScenes,
  "sin-achan": sinAchanScenes,
  "deborah-barak": deborahBarakScenes,
  gideon: gideonScenes,
  samson: samsonScenes,
  "ruth-naomi": ruthNaomiScenes,
  "samuel-called": samuelCalledScenes,
  "saul-king": saulKingScenes,
  "david-goliath": davidGoliathScenes,
  "david-saul": davidSaulScenes,
  "david-bathsheba": davidBathshebaScenes,
  "solomon-wisdom": solomonWisdomScenes,
  "elijah-baal": elijahBaalScenes,
  "elisha-naaman": elishaNaamanScenes,
  "fall-jerusalem": fallJerusalemScenes,
  annunciation: annunciationScenes,
  "birth-jesus": birthJesusScenes,
  shepherds: shepherdsScenes,
  "wise-men": wiseMenScenes,
  "flight-egypt": flightEgyptScenes,
  "jesus-temple": jesusTempleScenes,
  "baptism-jesus": baptismJesusScenes,
  "temptation-desert": temptationDesertScenes,
  "calling-disciples": callingDisciplesScenes,
  "wedding-cana": weddingCanaScenes,
  "healing-leper": healingLeperScenes,
  "centurion-servant": centurionServantScenes,
  "calming-storm": calmingStormScenes,
  "demon-possessed": demonPossessedScenes,
  "woman-blood": womanBloodScenes,
  "jairus-daughter": jairusDaughterScenes,
  "feeding-5000": feeding5000Scenes,
  "walking-water": walkingWaterScenes,
  "blind-man": blindManScenes,
  "raising-lazarus": lazarusScenes,
  "sermon-mount": sermonMountScenes,
  "lords-prayer": lordsPrayerScenes,
  "good-samaritan": goodSamaritanScenes,
  "prodigal-son": prodigalSonScenes,
  "rich-man-lazarus": richLazarusScenes,
  "parable-sower": parableSowerScenes,
  "parable-talents": parableTalentsScenes,
  "lost-sheep": lostSheepScenes,
  "pharisee-tax": phariseeTaxScenes,
  "ten-virgins": tenVirginsScenes,
  nicodemus: nicodemusScenes,
  "samaritan-woman": samaritanWomanScenes,
  "woman-adultery": womanAdulteryScenes,
  zacchaeus: zacchaeusScenes,
  "rich-young-man": richYoungManScenes,
  "debates-pharisees": debatesPhariseesScenes,
  "cleansing-temple": cleansingTempleScenes,
};
const storyImageRegistry: Record<string, Record<string, string>> = {
  creation: creationImages,
  "adam-eve": adamEveImages,
  "cain-abel": cainAbelImages,
  "noah-flood": noahImages,
  "tower-babel": babelImages,
  "call-abraham": abrahamImages,
  "abraham-egypt": abrahamEgyptImages,
  "abraham-lot": abrahamLotImages,
  "sodom-gomorrah": sodomImages,
  "sacrifice-isaac": sacrificeIsaacImages,
  "rebekah-servant": rebekahImages,
  "jacob-esau": jacobEsauImages,
  "jacobs-dream": jacobsDreamImages,
  "jacob-wrestles": jacobWrestlesImages,
  "joseph-sold": josephSoldImages,
  "joseph-potiphar": josephPotipharImages,
  "joseph-prison": josephPrisonImages,
  "joseph-dreams": josephDreamsImages,
  "joseph-brothers-egypt": josephBrothersEgyptImages,
  "joseph-reconciles": josephReconcilesImages,
  "birth-moses": birthMosesImages,
  "moses-flees": mosesFleesImages,
  "burning-bush": burningBushImages,
  "moses-pharaoh": mosesPharaohImages,
  "plagues-egypt": plaguesImages,
  passover: passoverImages,
  "crossing-red-sea": redSeaImages,
  "manna-desert": mannaImages,
  "water-rock": waterRockImages,
  "ten-commandments": tenCommandmentsImages,
  "golden-calf": goldenCalfImages,
  "spies-canaan": spiesCanaanImages,
  "rebellion-people": rebellionPeopleImages,
  "balaam-donkey": balaamImages,
  "death-moses": deathMosesImages,
  "fall-jericho": jerichoImages,
  "sin-achan": sinAchanImages,
  "deborah-barak": deborahBarakImages,
  gideon: gideonImages,
  samson: samsonImages,
  "ruth-naomi": ruthNaomiImages,
  "samuel-called": samuelCalledImages,
  "saul-king": saulKingImages,
  "david-goliath": davidGoliathImages,
  "david-saul": davidSaulImages,
  "david-bathsheba": davidBathshebaImages,
  "solomon-wisdom": solomonWisdomImages,
  "elijah-baal": elijahBaalImages,
  "elisha-naaman": elishaNaamanImages,
  "fall-jerusalem": fallJerusalemImages,
  annunciation: annunciationImages,
  "birth-jesus": birthJesusImages,
  shepherds: shepherdsImages,
  "wise-men": wiseMenImages,
  "flight-egypt": flightEgyptImages,
  "jesus-temple": jesusTempleImages,
  "baptism-jesus": baptismJesusImages,
  "temptation-desert": temptationDesertImages,
  "calling-disciples": callingDisciplesImages,
  "wedding-cana": weddingCanaImages,
  "healing-leper": healingLeperImages,
  "centurion-servant": centurionServantImages,
  "calming-storm": calmingStormImages,
  "demon-possessed": demonPossessedImages,
  "woman-blood": womanBloodImages,
  "jairus-daughter": jairusDaughterImages,
  "feeding-5000": feeding5000Images,
  "walking-water": walkingWaterImages,
  "blind-man": blindManImages,
  "raising-lazarus": lazarusImages,
  "sermon-mount": sermonMountImages,
  "lords-prayer": lordsPrayerImages,
  "good-samaritan": goodSamaritanImages,
  "prodigal-son": prodigalSonImages,
  "rich-man-lazarus": richLazarusImages,
  "parable-sower": parableSowerImages,
  "parable-talents": parableTalentsImages,
  "lost-sheep": lostSheepImages,
  "pharisee-tax": phariseeTaxImages,
  "ten-virgins": tenVirginsImages,
  nicodemus: nicodemusImages,
  "samaritan-woman": samaritanWomanImages,
  "woman-adultery": womanAdulteryImages,
  zacchaeus: zacchaeusImages,
  "rich-young-man": richYoungManImages,
  "debates-pharisees": debatesPhariseesImages,
  "cleansing-temple": cleansingTempleImages,
};
const storySpriteRegistry: Record<string, Record<string, SpriteConfig>> = {
  creation: creationSprites,
  "adam-eve": adamEveSprites,
  "cain-abel": cainAbelSprites,
  "noah-flood": noahSprites,
  "tower-babel": babelSprites,
  "call-abraham": abrahamSprites,
  "abraham-egypt": abrahamEgyptSprites,
  "abraham-lot": abrahamLotSprites,
  "sodom-gomorrah": sodomSprites,
  "sacrifice-isaac": sacrificeIsaacSprites,
  "rebekah-servant": rebekahSprites,
  "jacob-esau": jacobEsauSprites,
  "jacobs-dream": jacobsDreamSprites,
  "jacob-wrestles": jacobWrestlesSprites,
  "joseph-sold": josephSoldSprites,
  "joseph-potiphar": josephPotipharSprites,
  "joseph-prison": josephPrisonSprites,
  "joseph-dreams": josephDreamsSprites,
  "joseph-brothers-egypt": josephBrothersEgyptSprites,
  "joseph-reconciles": josephReconcilesSprites,
  "birth-moses": birthMosesSprites,
  "moses-flees": mosesFleesSprites,
  "burning-bush": burningBushSprites,
  "moses-pharaoh": mosesPharaohSprites,
  "plagues-egypt": plaguesSprites,
  passover: passoverSprites,
  "crossing-red-sea": redSeaSprites,
  "manna-desert": mannaSprites,
  "water-rock": waterRockSprites,
  "ten-commandments": tenCommandmentsSprites,
  "golden-calf": goldenCalfSprites,
  "spies-canaan": spiesCanaanSprites,
  "rebellion-people": rebellionPeopleSprites,
  "balaam-donkey": balaamSprites,
  "death-moses": deathMosesSprites,
  "fall-jericho": jerichoSprites,
  "sin-achan": sinAchanSprites,
  "deborah-barak": deborahBarakSprites,
  gideon: gideonSprites,
  samson: samsonSprites,
  "ruth-naomi": ruthNaomiSprites,
  "samuel-called": samuelCalledSprites,
  "saul-king": saulKingSprites,
  "david-goliath": davidGoliathSprites,
  "david-saul": davidSaulSprites,
  "david-bathsheba": davidBathshebaSprites,
  "solomon-wisdom": solomonWisdomSprites,
  "elijah-baal": elijahBaalSprites,
  "elisha-naaman": elishaNaamanSprites,
  "fall-jerusalem": fallJerusalemSprites,
  annunciation: annunciationSprites,
  "birth-jesus": birthJesusSprites,
  shepherds: shepherdsSprites,
  "wise-men": wiseMenSprites,
  "flight-egypt": flightEgyptSprites,
  "jesus-temple": jesusTempleSprites,
  "baptism-jesus": baptismJesusSprites,
  "temptation-desert": temptationDesertSprites,
  "calling-disciples": callingDisciplesSprites,
  "wedding-cana": weddingCanaSprites,
  "healing-leper": healingLeperSprites,
  "centurion-servant": centurionServantSprites,
  "calming-storm": calmingStormSprites,
  "demon-possessed": demonPossessedSprites,
  "woman-blood": womanBloodSprites,
  "jairus-daughter": jairusDaughterSprites,
  "feeding-5000": feeding5000Sprites,
  "walking-water": walkingWaterSprites,
  "blind-man": blindManSprites,
  "raising-lazarus": lazarusSprites,
  "sermon-mount": sermonMountSprites,
  "lords-prayer": lordsPrayerSprites,
  "good-samaritan": goodSamaritanSprites,
  "prodigal-son": prodigalSonSprites,
  "rich-man-lazarus": richLazarusSprites,
  "parable-sower": parableSowerSprites,
  "parable-talents": parableTalentsSprites,
  "lost-sheep": lostSheepSprites,
  "pharisee-tax": phariseeTaxSprites,
  "ten-virgins": tenVirginsSprites,
  nicodemus: nicodemusSprites,
  "samaritan-woman": samaritanWomanSprites,
  "woman-adultery": womanAdulterySprites,
  zacchaeus: zacchaeusSprites,
  "rich-young-man": richYoungManSprites,
  "debates-pharisees": debatesPhariseesSprites,
  "cleansing-temple": cleansingTempleSprites,
};
const storyEffectRegistry: Record<string, Record<string, string>> = {
  creation: creationEffects,
  "adam-eve": adamEveEffects,
  "cain-abel": cainAbelEffects,
  "noah-flood": noahEffects,
  "tower-babel": babelEffects,
  "call-abraham": abrahamEffects,
  "abraham-egypt": abrahamEgyptEffects,
  "abraham-lot": abrahamLotEffects,
  "sodom-gomorrah": sodomEffects,
  "sacrifice-isaac": sacrificeIsaacEffects,
  "rebekah-servant": rebekahEffects,
  "jacob-esau": jacobEsauEffects,
  "jacobs-dream": jacobsDreamEffects,
  "jacob-wrestles": jacobWrestlesEffects,
  "joseph-sold": josephSoldEffects,
  "joseph-potiphar": josephPotipharEffects,
  "joseph-prison": josephPrisonEffects,
  "joseph-dreams": josephDreamsEffects,
  "joseph-brothers-egypt": josephBrothersEgyptEffects,
  "joseph-reconciles": josephReconcilesEffects,
  "birth-moses": birthMosesEffects,
  "moses-flees": mosesFleesEffects,
  "burning-bush": burningBushEffects,
  "moses-pharaoh": mosesPharaohEffects,
  "plagues-egypt": plaguesEffects,
  passover: passoverEffects,
  "crossing-red-sea": redSeaEffects,
  "manna-desert": mannaEffects,
  "water-rock": waterRockEffects,
  "ten-commandments": tenCommandmentsEffects,
  "golden-calf": goldenCalfEffects,
  "spies-canaan": spiesCanaanEffects,
  "rebellion-people": rebellionPeopleEffects,
  "balaam-donkey": balaamEffects,
  "death-moses": deathMosesEffects,
  "fall-jericho": jerichoEffects,
  "sin-achan": sinAchanEffects,
  "deborah-barak": deborahBarakEffects,
  gideon: gideonEffects,
  samson: samsonEffects,
  "ruth-naomi": ruthNaomiEffects,
  "samuel-called": samuelCalledEffects,
  "saul-king": saulKingEffects,
  "david-goliath": davidGoliathEffects,
  "david-saul": davidSaulEffects,
  "david-bathsheba": davidBathshebaEffects,
  "solomon-wisdom": solomonWisdomEffects,
  "elijah-baal": elijahBaalEffects,
  "elisha-naaman": elishaNaamanEffects,
  "fall-jerusalem": fallJerusalemEffects,
  annunciation: annunciationEffects,
  "birth-jesus": birthJesusEffects,
  shepherds: shepherdsEffects,
  "wise-men": wiseMenEffects,
  "flight-egypt": flightEgyptEffects,
  "jesus-temple": jesusTempleEffects,
  "baptism-jesus": baptismJesusEffects,
  "temptation-desert": temptationDesertEffects,
  "calling-disciples": callingDisciplesEffects,
  "wedding-cana": weddingCanaEffects,
  "healing-leper": healingLeperEffects,
  "centurion-servant": centurionServantEffects,
  "calming-storm": calmingStormEffects,
  "demon-possessed": demonPossessedEffects,
  "woman-blood": womanBloodEffects,
  "jairus-daughter": jairusDaughterEffects,
  "feeding-5000": feeding5000Effects,
  "walking-water": walkingWaterEffects,
  "blind-man": blindManEffects,
  "raising-lazarus": lazarusEffects,
  "sermon-mount": sermonMountEffects,
  "lords-prayer": lordsPrayerEffects,
  "good-samaritan": goodSamaritanEffects,
  "prodigal-son": prodigalSonEffects,
  "rich-man-lazarus": richLazarusEffects,
  "parable-sower": parableSowerEffects,
  "parable-talents": parableTalentsEffects,
  "lost-sheep": lostSheepEffects,
  "pharisee-tax": phariseeTaxEffects,
  "ten-virgins": tenVirginsEffects,
  nicodemus: nicodemusEffects,
  "samaritan-woman": samaritanWomanEffects,
  "woman-adultery": womanAdulteryEffects,
  zacchaeus: zacchaeusEffects,
  "rich-young-man": richYoungManEffects,
  "debates-pharisees": debatesPhariseesEffects,
  "cleansing-temple": cleansingTempleEffects,
};

const SCENE_TRANSITION_FADE_MS = 500;
const SCENE_TRANSITION_HOLD_MS = 100;
const SCENE_FEEDBACK_DELAY_MS = 900;
const isChoiceCorrect = (choice: StoryChoice) => choice.isCorrect === true;

const Index = () => {
  const [screen, setScreen] = useState<Screen>("menu");
  const [currentStory, setCurrentStory] = useState<StoryMeta | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState("start");
  const [stepCount, setStepCount] = useState(1);
  const [isSceneTransitioning, setIsSceneTransitioning] = useState(false);
  const [transitionOverlayOpacity, setTransitionOverlayOpacity] = useState(0);
  const [showSceneSelector, setShowSceneSelector] = useState(false);
  const [wrongChoices, setWrongChoices] = useState(0);
  const [totalChoices, setTotalChoices] = useState(0);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const { devMode, toggleDevMode } = useDevMode();
  const progress = useGameProgress(devMode);
  const transitionLock = useRef(false);
  const transitionTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTransitionTimers = useCallback(() => {
    transitionTimers.current.forEach((timer) => clearTimeout(timer));
    transitionTimers.current = [];
  }, []);

  useEffect(() => clearTransitionTimers, [clearTransitionTimers]);

  const wait = useCallback((ms: number) => {
    return new Promise<void>((resolve) => {
      const timer = setTimeout(() => {
        transitionTimers.current = transitionTimers.current.filter((t) => t !== timer);
        resolve();
      }, ms);
      transitionTimers.current.push(timer);
    });
  }, []);

  const getSceneAssetUrls = useCallback((storyId: string, sceneId: string) => {
    const storyImages = storyImageRegistry[storyId];
    const sceneSprites = storySpriteRegistry[storyId]?.[sceneId];
    return [storyImages?.[sceneId], sceneSprites?.left, sceneSprites?.right];
  }, []);

  const handleSelectStory = useCallback((story: StoryMeta) => {
    clearTransitionTimers();
    transitionLock.current = false;
    setIsSceneTransitioning(false);
    setTransitionOverlayOpacity(0);
    setCurrentStory(story);
    setCurrentSceneId("start");
    setStepCount(1);
    setWrongChoices(0);
    setTotalChoices(0);
    setShowEndScreen(false);
    setScreen("playing");
  }, [clearTransitionTimers]);

  const handleRestart = useCallback(() => {
    if (!currentStory) return;
    clearTransitionTimers();
    transitionLock.current = false;
    setIsSceneTransitioning(false);
    setTransitionOverlayOpacity(0);
    setCurrentSceneId("start");
    setStepCount(1);
    setWrongChoices(0);
    setTotalChoices(0);
    setShowEndScreen(false);
  }, [currentStory, clearTransitionTimers]);

  const handleJumpToScene = useCallback((sceneId: string) => {
    if (!currentStory || transitionLock.current) return;
    clearTransitionTimers();
    transitionLock.current = false;
    setIsSceneTransitioning(false);
    setTransitionOverlayOpacity(0);
    setCurrentSceneId(sceneId);
    setStepCount((s) => s + 1);
    setShowEndScreen(false);
  }, [currentStory, clearTransitionTimers]);

  const handleChoice = useCallback((choice: StoryChoice) => {
    if (!currentStory || transitionLock.current || choice.nextScene === currentSceneId) return;
    transitionLock.current = true;
    setIsSceneTransitioning(true);

    // Track correctness from the explicit answer flag only.
    setTotalChoices((c) => c + 1);
    if (!isChoiceCorrect(choice)) setWrongChoices((w) => w + 1);

    void (async () => {
      await wait(SCENE_FEEDBACK_DELAY_MS);
      setTransitionOverlayOpacity(1);
      await wait(SCENE_TRANSITION_FADE_MS);
      await preloadImages(getSceneAssetUrls(currentStory.id, choice.nextScene));
      setCurrentSceneId(choice.nextScene);
      setStepCount((s) => s + 1);
      await wait(SCENE_TRANSITION_HOLD_MS);
      setTransitionOverlayOpacity(0);
      await wait(SCENE_TRANSITION_FADE_MS);
      setIsSceneTransitioning(false);
      transitionLock.current = false;
    })();
  }, [currentSceneId, currentStory, getSceneAssetUrls, wait]);

  const computedStars = useMemo(
    () => Math.max(0, 5 - wrongChoices),
    [wrongChoices]
  );

  const handleReachEnd = useCallback(() => {
    setShowEndScreen(true);
  }, []);

  const handleContinueAfterEnd = useCallback(() => {
    if (currentStory) progress.completeStory(currentStory.id, computedStars);
    setScreen(currentStory?.section === "old_testament" ? "map_ot" : "map_nt");
    setCurrentStory(null);
    setShowEndScreen(false);
  }, [currentStory, progress, computedStars]);

  const fadeTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" as const },
  };

  const renderScreen = () => {
    if (screen === "menu") {
      return (
        <motion.div key="menu" className="fixed inset-0" {...fadeTransition}>
          <MainMenu
            onSelectTestament={(t) => setScreen(t === "old" ? "map_ot" : "map_nt")}
            isNTUnlocked={progress.isNTUnlocked()}
            otProgress={progress.otProgress}
            ntProgress={progress.ntProgress}
            devMode={devMode}
            onToggleDevMode={toggleDevMode}
            onOpenSpriteViewer={() => setScreen("sprites")}
          />
        </motion.div>
      );
    }

    if (screen === "sprites") {
      return (
        <motion.div key="sprites" className="fixed inset-0" {...fadeTransition}>
          <SpriteViewer onBack={() => setScreen("menu")} />
        </motion.div>
      );
    }

    if (screen === "map_ot") {
      return (
        <motion.div key="map_ot" className="fixed inset-0" {...fadeTransition}>
          <StoryMap
            title="Old Testament"
            stories={OLD_TESTAMENT_STORIES}
            isStoryCompleted={progress.isStoryCompleted}
            isStoryUnlocked={(s, l) => progress.isStoryUnlocked(s, l)}
            getBestStars={progress.getBestStars}
            onSelectStory={handleSelectStory}
            onBack={() => setScreen("menu")}
            devMode={devMode}
          />
        </motion.div>
      );
    }

    if (screen === "map_nt") {
      return (
        <motion.div key="map_nt" className="fixed inset-0" {...fadeTransition}>
          <StoryMap
            title="New Testament"
            stories={ALL_NT_STORIES}
            isStoryCompleted={progress.isStoryCompleted}
            isStoryUnlocked={(s, l) => progress.isStoryUnlocked(s, l)}
            getBestStars={progress.getBestStars}
            onSelectStory={handleSelectStory}
            onBack={() => setScreen("menu")}
            devMode={devMode}
          />
        </motion.div>
      );
    }

    if (!currentStory) return null;
    const scenes = storySceneRegistry[currentStory.id];
    if (!scenes) return null;
    const scene = scenes[currentSceneId];
    if (!scene) return null;

    const images = storyImageRegistry[currentStory.id];
    const sprites = storySpriteRegistry[currentStory.id]?.[currentSceneId];
    const sceneEffect = storyEffectRegistry[currentStory.id]?.[currentSceneId] as any;
    const shuffledChoices = shuffleChoices(
      scene.choices,
      `${currentStory.id}:${currentSceneId}:${stepCount}`,
    );

    return (
      <motion.div
        key="playing"
        className="fixed inset-0"
        style={{ backgroundColor: "hsl(var(--scene-base))" }}
        {...fadeTransition}
      >
        <GameScene
          title={scene.title}
          text={scene.text}
          choices={shuffledChoices}
          isFinal={scene.isFinal}
          onChoice={handleChoice}
          onComplete={handleReachEnd}
          stepCount={stepCount}
          backgroundImage={images?.[currentSceneId]}
          sprites={sprites}
          sceneEffect={sceneEffect}
          isTransitioning={isSceneTransitioning}
        />

        {/* End of story screen overlay */}
        {showEndScreen && (
          <StoryEndScreen
            stars={computedStars}
            totalChoices={totalChoices}
            wrongChoices={wrongChoices}
            backgroundImage={images?.[currentSceneId]}
            onReplay={handleRestart}
            onContinue={handleContinueAfterEnd}
          />
        )}
        {/* Dev mode HUD */}
        {devMode && (
          <div className="absolute top-3 right-3 z-[65] flex gap-2">
            <button
              onClick={handleRestart}
              className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[10px] font-display tracking-wider uppercase cursor-pointer hover:bg-amber-500/30 transition-all"
            >
              Restart
            </button>
            <button
              onClick={() => setShowSceneSelector(true)}
              className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[10px] font-display tracking-wider uppercase cursor-pointer hover:bg-amber-500/30 transition-all"
            >
              Scenes
            </button>
          </div>
        )}

        {/* Scene selector modal */}
        {showSceneSelector && scenes && (
          <SceneSelector
            scenes={scenes}
            currentSceneId={currentSceneId}
            onSelectScene={handleJumpToScene}
            onClose={() => setShowSceneSelector(false)}
          />
        )}

        <div
          className={`absolute inset-0 z-[60] ${isSceneTransitioning || transitionOverlayOpacity > 0 ? "pointer-events-auto" : "pointer-events-none"}`}
          style={{
            opacity: transitionOverlayOpacity,
            transition: `opacity ${SCENE_TRANSITION_FADE_MS}ms ease-in-out`,
            backgroundColor: "hsl(var(--scene-base))",
          }}
        />
      </motion.div>
    );
  };

  return <AnimatePresence mode="wait">{renderScreen()}</AnimatePresence>;
};

export default Index;
