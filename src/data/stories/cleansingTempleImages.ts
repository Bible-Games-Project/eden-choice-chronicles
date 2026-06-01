import templeApproach from "@/assets/scenes/cleansing-temple/temple-approach.jpg";
import templeMarket from "@/assets/scenes/cleansing-temple/temple-market.jpg";
import templeTension from "@/assets/scenes/cleansing-temple/temple-tension.jpg";
import templeTables from "@/assets/scenes/cleansing-temple/temple-tables.jpg";
import templeGateway from "@/assets/scenes/cleansing-temple/temple-gateway.jpg";
import templePurity from "@/assets/scenes/cleansing-temple/temple-purity.jpg";
import templeWitness from "@/assets/scenes/cleansing-temple/temple-witness.jpg";
import templeRestored from "@/assets/scenes/cleansing-temple/temple-restored.jpg";

export const cleansingTempleImages: Record<string, string> = {
  start: templeApproach,
  wait_consequence: templeApproach,
  shout_consequence: templeApproach,
  see_market: templeMarket,
  shrug_consequence: templeMarket,
  buy_consequence: templeMarket,
  cord: templeTension,
  stop_consequence: templeTension,
  tables: templeTables,
  grab_consequence: templeTables,
  cover_consequence: templeTables,
  drive_out: templeGateway,
  mock_consequence: templeGateway,
  proclaim: templePurity,
  argue_consequence: templePurity,
  disciples: templeWitness,
  boast_consequence: templeWitness,
  restored: templeRestored,
  refill_consequence: templeRestored,
  ending: templeRestored,
};
