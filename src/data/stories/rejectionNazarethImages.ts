import villageDawn from "@/assets/scenes/rejection-nazareth/village-dawn.jpg";
import synagogueLight from "@/assets/scenes/rejection-nazareth/synagogue-light.jpg";
import synagogueScroll from "@/assets/scenes/rejection-nazareth/synagogue-scroll.jpg";
import synagogueDoubt from "@/assets/scenes/rejection-nazareth/synagogue-doubt.jpg";
import villageCarpenter from "@/assets/scenes/rejection-nazareth/village-carpenter.jpg";
import synagogueRejection from "@/assets/scenes/rejection-nazareth/synagogue-rejection.jpg";
import villageEdge from "@/assets/scenes/rejection-nazareth/village-edge.jpg";
import roadLeaving from "@/assets/scenes/rejection-nazareth/road-leaving.jpg";

export const rejectionNazarethImages: Record<string, string> = {
  start: villageDawn,
  boast_consequence: villageDawn,
  ashamed_consequence: villageDawn,
  synagogue: synagogueLight,
  whisper_consequence: synagogueLight,
  scroll: synagogueScroll,
  test_consequence: synagogueScroll,
  walkout_consequence: synagogueScroll,
  doubt: synagogueDoubt,
  join_consequence: synagogueDoubt,
  carpenter: villageCarpenter,
  agree_consequence: villageCarpenter,
  mock_consequence: villageCarpenter,
  rejection: synagogueRejection,
  slip_consequence: synagogueRejection,
  explain: villageEdge,
  argue_consequence: villageEdge,
  leaving: roadLeaving,
  stay_consequence: roadLeaving,
  ending: roadLeaving,
};
