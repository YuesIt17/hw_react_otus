import { mathOperators } from "./mathOperators";


describe("math operators test cases", () => {
  test("operation 2 * 2 to equal 4", () => {
    expect(mathOperators['*'].operation(1, 2)).toBe(2);
  });

  test("operation 4 / 2 to equal 2", () => {
    expect(mathOperators['/'].operation(4, 2)).toBe(2);
  });

  test("operation 5 + 2 to equal 7", () => {
    expect(mathOperators['+'].operation(5, 2)).toBe(7);
  });

  test("operation 7 - 2 to equal 5", () => {
    expect(mathOperators['-'].operation(7, 2)).toBe(5);
  });
})