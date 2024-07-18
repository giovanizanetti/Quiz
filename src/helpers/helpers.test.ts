import { expect, test, describe } from "vitest";
import { capitalize } from "./strings";

describe("Helpers", () => {
  describe("String helpers", () => {
    const lowecased = "memorix";
    const capitalized = "Memorix";
    test("capitalize word correctly", () => {
      expect(capitalize(lowecased)).toEqual(capitalized);
    });
  });
});
