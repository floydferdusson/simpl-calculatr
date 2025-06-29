export const OPERATORS = {
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: '×',
  DIVIDE: '÷',
  EQUALS: '=',
  DECIMAL: '.',
  CLEAR: 'CE',
  CLEAR_ALL: 'C',
  BACKSPACE: '⌫',
  PERCENTAGE: '%',
  TOGGLE_SIGN: '±',
} as const;

export type Operator = typeof OPERATORS[keyof typeof OPERATORS];

export type CalculatorInput = Operator | string | number;