import {getUserOrderStates, OrderState} from './easy1';

describe('test cases of order states', () => {
  test('check get order states', () => {
    const orderStates = [
      'buyingSupplies',
      'fullfilled',
      'inWork',
      'initial',
      'producing',
    ] as OrderState[];

    expect(getUserOrderStates(orderStates)).toEqual([
      'fullfilled',
      'inWork',
      'initial',
    ]);
  });
});
