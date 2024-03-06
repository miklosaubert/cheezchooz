import { Cheese } from "./cheese";

export function shouldIBuyThis(cheese: Cheese) {
  switch (cheese.type) {
    case "Roquefort": {
      return cheese.certifiedAOP && cheese.price < 12;
    }
    case "Comté": {
      return cheese.ageInMonths >= 18 && cheese.price < 8;
    }
    case "Picodon": {
      return cheese.origin === "Drôme" && cheese.price < 3;
    }
  }
}
