import upperRoomEmpty from "@/assets/scenes/last-supper/upper-room-empty.jpg";
import upperRoomGathered from "@/assets/scenes/last-supper/upper-room-gathered.jpg";
import washingBasin from "@/assets/scenes/last-supper/washing-basin.jpg";
import breadBroken from "@/assets/scenes/last-supper/bread-broken.jpg";
import cupWine from "@/assets/scenes/last-supper/cup-wine.jpg";
import shadowRevelation from "@/assets/scenes/last-supper/shadow-revelation.jpg";
import doorwayNight from "@/assets/scenes/last-supper/doorway-night.jpg";
import roomFarewell from "@/assets/scenes/last-supper/room-farewell.jpg";

export const lastSupperImages: Record<string, string> = {
  start: upperRoomEmpty,
  send_consequence: upperRoomEmpty,
  glory_consequence: upperRoomEmpty,
  gathered: upperRoomGathered,
  order_consequence: upperRoomGathered,
  leave_consequence: upperRoomGathered,
  washing: washingBasin,
  agree_consequence: washingBasin,
  rebuke_consequence: washingBasin,
  bread_table: breadBroken,
  hide_consequence: breadBroken,
  alone_consequence: breadBroken,
  cup_lifted: cupWine,
  quiet_consequence: cupWine,
  pour_consequence: cupWine,
  remembrance: upperRoomGathered,
  forget_consequence: upperRoomGathered,
  demand_consequence: upperRoomGathered,
  betrayal_words: shadowRevelation,
  accuse_consequence: shadowRevelation,
  take_back_consequence: shadowRevelation,
  disciples_ask: shadowRevelation,
  point_consequence: shadowRevelation,
  laugh_consequence: shadowRevelation,
  farewell: roomFarewell,
  leave_silent_consequence: roomFarewell,
  warn_consequence: roomFarewell,
  ending: doorwayNight,
};
