
type TMathPriority = 'first' | 'second';
export type TMathOperatorKey = '+' | '-' | '/' | '*';

type TMathOperator = {
  priority: TMathPriority;
  operation: (first: number, second: number) => number;
}

export const mathOperators: Record<TMathOperatorKey, TMathOperator> = {
  '*': {priority: 'first', operation: (first: number, second: number) => first * second},
  '/': {priority: 'first', operation: (first: number, second: number) => first / second},
  '+': {priority: 'second', operation: (first: number, second: number) => first + second},
  '-': {priority: 'second', operation: (first: number, second: number) => first - second},
}