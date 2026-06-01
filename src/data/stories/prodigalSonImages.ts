import hillside from "@/assets/scenes/prodigal-son/hillside-parable.jpg";
import courtyard from "@/assets/scenes/prodigal-son/fathers-courtyard.jpg";
import departure from "@/assets/scenes/prodigal-son/road-departure.jpg";
import farCountry from "@/assets/scenes/prodigal-son/far-country.jpg";
import pigPen from "@/assets/scenes/prodigal-son/pig-pen.jpg";
import roadReturn from "@/assets/scenes/prodigal-son/road-return.jpg";
import feastHall from "@/assets/scenes/prodigal-son/feast-hall.jpg";
import fieldDusk from "@/assets/scenes/prodigal-son/field-dusk.jpg";
import radiant from "@/assets/scenes/prodigal-son/hillside-radiant.jpg";

export const prodigalSonImages: Record<string, string> = {
  start: hillside,
  turn_consequence: hillside,
  inheritance: courtyard,
  praise_consequence: courtyard,
  demand_consequence: courtyard,
  leaving: departure,
  cheer_consequence: departure,
  revelry: farCountry,
  envy_consequence: farCountry,
  lookaway_consequence: farCountry,
  famine: farCountry,
  mock_consequence: farCountry,
  pigs: pigPen,
  pity_consequence: pigPen,
  repentance: pigPen,
  hidden_consequence: pigPen,
  doubt_consequence: pigPen,
  return: roadReturn,
  stern_consequence: roadReturn,
  feast: feastHall,
  prove_consequence: feastHall,
  brother: fieldDusk,
  agree_consequence: fieldDusk,
  hide_consequence: fieldDusk,
  ending: radiant,
};
