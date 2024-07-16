import { expect, test, describe } from "vitest";
import { capitalize } from "./strings";

describe("Helpers", () => {
  describe("String helpers", () => {
    const lowecased = "memorix";
    const capitalized = "Memorix";
    test("capitilize word correctelly", () => {
      expect(capitalize(lowecased)).toEqual(capitalized);
    });
  });
});
