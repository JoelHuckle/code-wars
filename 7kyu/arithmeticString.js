function arithmetic(a, b, operator) {
  const operators = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };
  return operators[operator];
}
