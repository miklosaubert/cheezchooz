import { main } from "./main";

describe("main", () => {
  it("should throw an error if the cheese is invalid", () => {
    const message = JSON.stringify({
      type: "Brie",
      weight: 0.5,
    });

    expect(() => main(message)).toThrow("Invalid cheese: <message>");
  });
});
