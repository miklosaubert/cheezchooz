interface CheesyProduct {
  milk: "cow" | "goat" | "sheep";
  price: number;
}

interface Roquefort extends CheesyProduct {
  type: "Roquefort";
  milk: "sheep";
  certifiedAOP: boolean;
}

export interface Comté extends CheesyProduct {
  type: "Comté";
  milk: "cow";
  ageInMonths: number;
}

export interface Picodon extends CheesyProduct {
  type: "Picodon";
  milk: "goat";
  origin: "Ardèche" | "Drôme";
}

export type Cheese = Roquefort | Comté | Picodon;

// Naïve implementation
// interface Cheese {
//   milk: "cow" | "goat" | "sheep";
//   price: number;
//   origin?: string;
//   spreadable?: boolean;
//   ageInMonths?: number;
//   certifiedAOP?: boolean;
// }
