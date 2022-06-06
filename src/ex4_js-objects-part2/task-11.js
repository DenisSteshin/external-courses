function calcSymbols(string) {
  let symbolCounter = {};

  for (let i = 0; i < string.length; i++) {
    let nameSymbol = string[i];

    if (!symbolCounter[nameSymbol]) {
      symbolCounter[nameSymbol] = 0;
    }
    symbolCounter[nameSymbol] += 1;
  }
  for (let key in symbolCounter) {
    if (symbolCounter.hasOwnProperty(key)) {
      console.log(Object.entries(symbolCounter));
    }
  }
}

module.exports = calcSymbols;
