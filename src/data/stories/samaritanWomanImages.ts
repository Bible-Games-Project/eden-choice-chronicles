import wellNoon from "@/assets/scenes/samaritan-woman/well-noon.jpg";
import wellConversation from "@/assets/scenes/samaritan-woman/well-conversation.jpg";
import wellLight from "@/assets/scenes/samaritan-woman/well-light.jpg";
import wellRevelation from "@/assets/scenes/samaritan-woman/well-revelation.jpg";
import wellWorship from "@/assets/scenes/samaritan-woman/well-worship.jpg";
import villagePath from "@/assets/scenes/samaritan-woman/village-path.jpg";
import villageRadiant from "@/assets/scenes/samaritan-woman/village-radiant.jpg";

export const samaritanWomanImages: Record<string, string> = {
  start: wellNoon,
  avoid_consequence: wellNoon,
  drink_request: wellConversation,
  refuse_consequence: wellConversation,
  living_water: wellLight,
  mock_consequence: wellLight,
  demand_consequence: wellLight,
  thirst: wellLight,
  well_consequence: wellLight,
  husband: wellRevelation,
  flee_consequence: wellRevelation,
  worship: wellWorship,
  argue_consequence: wellWorship,
  messiah: wellWorship,
  doubt_consequence: wellWorship,
  village: villagePath,
  hide_consequence: villagePath,
  ending: villageRadiant,
};
