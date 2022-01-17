import { mathOperators, TMathOperatorKey } from "../operators/mathOperators";
import { parserExpression } from "../parser/parserExpression";

const isNumber = (item: string | number): boolean => !isNaN(Number(item));

export function prepareInput(input: string){
  const items = parserExpression(input);
  let secondItems: (string | number)[] = [];
  const isLastItem = (key: number) => key === items.length - 1;

  items.reduce((result, currentItem, key) => {
    const prevItem = result === 0 && isNumber(items[key - 1]) ? Number(items[key - 1]) : result;
    const nextItem = !isLastItem(key) && isNumber(items[key + 1]) ? Number(items[key + 1]) : 0;

    if (!isNumber(currentItem)) {
      const mathOperator = mathOperators[currentItem as TMathOperatorKey];
      if(mathOperator.priority === 'first') {
        result = mathOperator.operation(Number(prevItem), Number(nextItem));

        if(isLastItem(key + 1)) {
          result = mathOperator.operation(Number(items[key - 1]), Number(nextItem));
          secondItems.push(result);
        } else {
          result = mathOperator.operation(Number(prevItem), Number(nextItem));
        }
      } else {
        secondItems.push(prevItem, currentItem);

        if(isLastItem(key + 1)) {
          secondItems.push(nextItem);
        }
      }
    } 

    return result;

  }, 0);

  const calcResult = Number(secondItems.reduce((resultSecond, currenSecond, secondKey) => {
    if (!isNumber(currenSecond)) {
      const secondMathOperator = mathOperators[currenSecond as TMathOperatorKey];
      resultSecond = secondMathOperator.operation(Number(resultSecond), Number(secondItems[secondKey + 1]));
    }
    return resultSecond;
  }));

  return calcResult;
}