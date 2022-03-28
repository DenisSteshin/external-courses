function Calculator() {
  this.result = 0;
  this.add = (value) => {
    if (isNaN(value)) {
      return add;
    }
    this.result += value;
    return this.add;
  };

  this.subtract = (value) => {
    if (isNaN(value)) {
      return this.subtract;
    }
    this.result -= value;
    return this.subtract;
  };

  this.multiply = (value) => {
    if (isNaN(value)) {
      return this.multiply;
    }
    this.result *= value;
    return this.multiply;
  };

  this.divide = (value) => {
    if (isNaN(value) || value === 0 || value === Infinity) {
      console.error('Don"t divide to zero!!!');
      return this.divide;
    }
    this.result /= value;
    return this.divide;
  };
  this.getResult = () => {
    return this.result;
  };
  this.reset = () => {
    return (this.result = 0);
  };
}
const calculator = new Calculator();

module.exports = calculator;
