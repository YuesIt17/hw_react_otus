const orderStates = [
  'initial',
  'inWork',
  'buyingSupplies',
  'producing',
  'fullfilled',
] as const;

export type OrderState = typeof orderStates[number];

type FIXME = Omit<OrderState, 'buyingSupplies' | 'producing'>[];

export const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
  const filteredStates = [] as FIXME;
  orderStates.forEach((element) => {
    if (element !== 'buyingSupplies' && element !== 'producing') {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};
