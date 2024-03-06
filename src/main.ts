import Ajv, { DefinedError } from "ajv";
import CheeseSchema from "./cheese-schema.json";
import { shouldIBuyThis } from "./chooser";
import { Cheese } from "./cheese";

// To use the "discriminator" option, we need to wrangle the schema
// into using "oneOf" instead of "anyOf".
const makeMutexSchema = (schema: typeof CheeseSchema) => {
  const { anyOf: oneOf, ...restOfSchema } = schema;
  return {
    type: "object",
    oneOf,
    ...restOfSchema,
    discriminator: {
      propertyName: "type",
    },
  };
};

const ajv = new Ajv({ discriminator: true });
const validateCheese = ajv.compile(makeMutexSchema(CheeseSchema));

export function main(message: string) {
  const cheese = JSON.parse(message) as Cheese;

  if (!validateCheese(cheese)) {
    const errors = validateCheese.errors as DefinedError[];
    for (const err of errors) {
      switch (err.keyword) {
        case "discriminator":
          throw new Error(
            `Invalid cheese: ${err.params.tag}=${err.params.tagValue}, message ${err.message}`
          );
      }
    }
    throw new Error(
      `Invalid cheese: ${errors.map((error) => error.message).join(", ")}`
    );
  }

  return shouldIBuyThis(cheese);
}
