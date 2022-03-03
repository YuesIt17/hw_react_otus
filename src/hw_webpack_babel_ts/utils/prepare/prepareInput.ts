import {mathOperators, TMathOperatorKey} from '../operators/mathOperators';
import {parserExpression} from '../parser/parserExpression';

const isNumber = (item: string | number): boolean => !isNaN(Number(item));

export function prepareInput(input: string) {
  const items = parserExpression(input);
  const secondItems: (string | number)[] = [];
  const isLastItem = (key: number) => key === items.length - 1;

  items.reduce((result, currentItem, key) => {
    const isPrevFirstOperator =
      items[key - 2] &&
      mathOperators[items[key - 2] as TMathOperatorKey]?.priority === 'first';
    const prevItem =
      key === 0 || !isPrevFirstOperator ? Number(items[key - 1]) : result;
    const nextItem = !isLastItem(key) ? Number(items[key + 1]) : 0;

    if (!isNumber(currentItem)) {
      const firstMathOperator = mathOperators[currentItem as TMathOperatorKey];
      if (firstMathOperator.priority === 'first') {
        result = firstMathOperator.operation(
          Number(prevItem),
          Number(nextItem)
        );

        if (isLastItem(key + 1)) {
          secondItems.push(result);
        }
      } else {
        secondItems.push(prevItem, currentItem);

        if (isLastItem(key + 1)) {
          secondItems.push(nextItem);
        }
      }
    }

    return result;
  }, 0);

  const calcResult = Number(
    secondItems.reduce((resultSecond, currenSecond, secondKey) => {
      if (!isNumber(currenSecond)) {
        const secondMathOperator =
          mathOperators[currenSecond as TMathOperatorKey];
        resultSecond = secondMathOperator.operation(
          Number(resultSecond),
          Number(secondItems[secondKey + 1])
        );
      }
      return resultSecond;
    })
  );

  return calcResult;
}
