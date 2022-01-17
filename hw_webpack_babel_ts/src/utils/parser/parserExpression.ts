
//const checkExp = /^(\(?\d+)(\s*([-+*\/])\s*(\d+\)?))+$/g;
const execItemsExp = /\s*([-+*\(\)\/]+|\d+)\s*/g;

export function parserExpression(input: string){
  let items = [];
  let symbol;
  
  //if(input.match(checkExp)){
  while ((symbol = execItemsExp.exec(input)) !== null) {
    items.push(symbol[1]);
  }
  // } else {
  //   throw new TypeError("Invalid expression");
  // }

  return items;
}