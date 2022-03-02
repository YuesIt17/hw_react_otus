import {parserExpression} from './parserExpression';

describe('Correct tests for parser', () => {
  test('(2 + 2) * 3 / 5 - 10', () => {
    expect(parserExpression('(2 + 2) * 3 / 5 - 10')).toEqual([
      '(',
      '2',
      '+',
      '2',
      ')',
      '*',
      '3',
      '/',
      '5',
      '-',
      '10',
    ]);
  });
});
