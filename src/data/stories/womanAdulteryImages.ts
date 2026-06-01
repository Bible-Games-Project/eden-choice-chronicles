import templeDawn from "@/assets/scenes/woman-adultery/temple-dawn.jpg";
import templeAccusation from "@/assets/scenes/woman-adultery/temple-accusation.jpg";
import templeTension from "@/assets/scenes/woman-adultery/temple-tension.jpg";
import templeDust from "@/assets/scenes/woman-adultery/temple-dust.jpg";
import templeQuestion from "@/assets/scenes/woman-adultery/temple-question.jpg";
import templeLeaving from "@/assets/scenes/woman-adultery/temple-leaving.jpg";
import templeMercy from "@/assets/scenes/woman-adultery/temple-mercy.jpg";
import templeRadiant from "@/assets/scenes/woman-adultery/temple-radiant.jpg";

export const womanAdulteryImages: Record<string, string> = {
  start: templeDawn,
  join_consequence: templeDawn,
  accusation: templeAccusation,
  scorn_consequence: templeAccusation,
  trap: templeTension,
  demand_consequence: templeTension,
  side_consequence: templeTension,
  writing: templeDust,
  mock_consequence: templeDust,
  without_sin: templeQuestion,
  stone_consequence: templeQuestion,
  fool_consequence: templeQuestion,
  accusers_leave: templeLeaving,
  leave_consequence: templeLeaving,
  mercy: templeMercy,
  doubt_consequence: templeMercy,
  ending: templeRadiant,
};
