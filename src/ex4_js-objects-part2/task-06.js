function upperCaseFirtsSymbolInEveryWord(string) {
  return `${string
    .split(' ')
    .map((word) => (word === '' ? word : word[0].toUpperCase() + word.slice(1)))
    .join(' ')}`;
}
module.exports = upperCaseFirtsSymbolInEveryWord;
