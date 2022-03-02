import {getOrderState, Order} from './easy2';

describe('easy2 test cases of order states', () => {
  test('check get order state', () => {
    const order = {
      state: 'initial',
      sum: 100
    } as Order;

    expect(getOrderState(order)).toEqual(order.state);
  });
});
