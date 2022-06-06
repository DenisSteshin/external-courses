function joinWord(string, newString, index) {
  let result = string.split(' ');

  result.splice(index + 1, 0, newString);

  return result.join(' ');
}

module.exports = joinWord;
