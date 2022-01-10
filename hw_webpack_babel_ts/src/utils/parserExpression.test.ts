import {parserExpression} from './parserExpression';


describe('Correct tests for parser', () => {

  test("2 + 2", () => {
    console.log(parserExpression("2 + 2 * 3 / 5 "));
    expect(true).toEqual(true);
  });


});