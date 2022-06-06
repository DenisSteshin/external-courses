function CreateCalculator() {
  let result = 0;
  return {
    add: function add(value) {
      if (isNaN(value)) {
        return add;
      }
      result += value;
      return add;
    },
    subtract: function subtract(value) {
      if (isNaN(value)) {
        return subtract;
      }
      result -= value;
      return subtract;
    },
    multiply: function multiply(value) {
      if (isNaN(value)) {
        return multiply;
      }
      result *= value;
      return multiply;
    },
    divide: function divide(value) {
      if (isNaN(value) || value === 0 || value === Infinity) {
        console.error('Don"t divide to zero!!!');
        return divide;
      }
      result /= value;
      return divide;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      return result;
    },
  };
}

module.exports = CreateCalculator;
