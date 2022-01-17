import { prepareInput } from "./prepareInput";


describe('Correct tests for prepare', () => {

  test("4 + 2 * 3 / 2 - 1", () => {
    //console.log(prepareInput("4 + 2 * 3 / 2 - 1"));
    expect(prepareInput("4 + 2 * 3 / 2 - 1")).toBe(6);
  });

  test("40 - 10 * 3 + 12 / 3", () => {
    //console.log(prepareInput("4 + 2 * 3 / 2 - 1"));
    expect(prepareInput("40 - 10 * 3 + 12 / 3")).toBe(14);
  });
});