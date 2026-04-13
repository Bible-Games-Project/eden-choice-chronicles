import famineLand from "@/assets/scenes/abraham-egypt/famine-land.jpg";
import egyptBorder from "@/assets/scenes/abraham-egypt/egypt-border.jpg";
import egyptCity from "@/assets/scenes/abraham-egypt/egypt-city.jpg";
import palaceExterior from "@/assets/scenes/abraham-egypt/palace-exterior.jpg";
import palaceInterior from "@/assets/scenes/abraham-egypt/palace-interior.jpg";
import plagues from "@/assets/scenes/abraham-egypt/plagues.jpg";
import throneRoom from "@/assets/scenes/abraham-egypt/throne-room.jpg";
import desertReturn from "@/assets/scenes/abraham-egypt/desert-return.jpg";
import altarHills from "@/assets/scenes/abraham-egypt/altar-hills.jpg";

export const abrahamEgyptImages: Record<string, string> = {
  start: famineLand,
  prayer: famineLand,
  egypt_temptation: famineLand,
  the_road_south: egyptBorder,
  approaching_egypt: egyptBorder,
  the_fear: egyptBorder,
  entering_egypt: egyptCity,
  the_lie: egyptCity,
  pharaoh_hears: palaceExterior,
  sarah_taken: palaceInterior,
  consequences_wealth: palaceInterior,
  gods_intervention: plagues,
  pharaoh_confronts: throneRoom,
  sent_away: egyptBorder,
  the_return: desertReturn,
  the_altar: altarHills,
};
