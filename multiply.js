/**
 * 2 * 5 = 10
 * 2 + 2 + 2 + 2 + 2 = 10
 *
 */

// let result = 0;

function multiply(operand, multiplier, result = 0) {
  if (multiplier < 1) {
    return result;
  }
  result += operand;

  return multiply(operand, multiplier - 1, result);
}

console.log(multiply(9, 7));

function multiplyR(operand, multiplier) {
  if (multiplier < 1) {
    return 0;
  }

  return operand + multiplyR(operand, multiplier - 1);
}

console.log(multiplyR(2, 5));
