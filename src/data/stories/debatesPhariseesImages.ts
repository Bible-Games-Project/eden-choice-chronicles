import templeApproach from "@/assets/scenes/debates-pharisees/temple-approach.jpg";
import templeConfrontation from "@/assets/scenes/debates-pharisees/temple-confrontation.jpg";
import templeCoin from "@/assets/scenes/debates-pharisees/temple-coin.jpg";
import templeCourtyard from "@/assets/scenes/debates-pharisees/temple-courtyard.jpg";
import templeTeaching from "@/assets/scenes/debates-pharisees/temple-teaching.jpg";
import templeRebuke from "@/assets/scenes/debates-pharisees/temple-rebuke.jpg";
import templeCrowd from "@/assets/scenes/debates-pharisees/temple-crowd.jpg";
import templeRadiant from "@/assets/scenes/debates-pharisees/temple-radiant.jpg";

export const debatesPhariseesImages: Record<string, string> = {
  start: templeApproach,
  hide_consequence: templeApproach,
  insult_consequence: templeApproach,
  trap_question: templeConfrontation,
  shout_consequence: templeConfrontation,
  coin: templeCoin,
  refuse_consequence: templeCoin,
  lie_consequence: templeCoin,
  authority: templeCourtyard,
  mock_consequence: templeCourtyard,
  greatest_commandment: templeTeaching,
  guess_consequence: templeTeaching,
  deaf_consequence: templeTeaching,
  hypocrisy: templeRebuke,
  defend_consequence: templeRebuke,
  crowd_amazed: templeCrowd,
  boast_consequence: templeCrowd,
  truth_remains: templeRadiant,
  forget_consequence: templeRadiant,
  ending: templeRadiant,
};
