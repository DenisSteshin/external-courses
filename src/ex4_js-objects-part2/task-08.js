function lowerCamelCaseString(string) {
  return string
    .trim()
    .toLowerCase()
    .split(' ')
    .filter((word) => word !== '')
    .map((word, index) =>
      index !== 0
        ? word[0].toUpperCase() + word.slice(1)
        : word[0].toLowerCase() + word.slice(1)
    )
    .join('');
}
module.exports = lowerCamelCaseString;
