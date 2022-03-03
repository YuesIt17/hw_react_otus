const itemsRegExp = /\s*([-+*\(\)\/]+|\d+)\s*/g;

export function parserExpression(input: string) {
  const items = [];
  let symbol;

  if (input.match(itemsRegExp)) {
    while ((symbol = itemsRegExp.exec(input)) !== null) {
      items.push(symbol[1]);
    }
  }

  return items;
}
