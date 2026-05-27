import gathering from "@/assets/scenes/sermon-mount/mountainside-gathering.jpg";
import summit from "@/assets/scenes/sermon-mount/mount-summit.jpg";
import overlook from "@/assets/scenes/sermon-mount/mount-overlook.jpg";
import grove from "@/assets/scenes/sermon-mount/mount-grove.jpg";
import stones from "@/assets/scenes/sermon-mount/mount-stones.jpg";
import lilies from "@/assets/scenes/sermon-mount/mount-lilies.jpg";
import rock from "@/assets/scenes/sermon-mount/mount-rock-foundation.jpg";

export const sermonMountImages: Record<string, string> = {
  start: gathering,
  hurry_consequence: gathering,
  mock_consequence: gathering,
  beatitudes: summit,
  boast_consequence: summit,
  mercy: grove,
  grudge_consequence: grove,
  judge_consequence: grove,
  salt_light: overlook,
  hide_consequence: overlook,
  enemies: stones,
  curse_consequence: stones,
  repay_consequence: stones,
  worry: lilies,
  worry_consequence: lilies,
  foundation: rock,
  sand_consequence: rock,
  ending: rock,
};
