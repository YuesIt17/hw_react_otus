import {omit} from './easy3';

describe('easy3 test cases for omit', () => {
  test('check omit', () => {
    type Order = {
      state: 'initial' | 'producing';
      sum: number;
    };

    const order = {
      state: 'initial',
      sum: 100,
    } as Order;

    expect(omit(order, 'sum')).toEqual({state: 'initial'});
  });
});
