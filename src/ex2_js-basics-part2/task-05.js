function arrayFindkMax(array) {
  let max = 0;
  const a = array.length;
  for (let i = 0; i < a; i++) {
    if (array[i] > max) { max = array[i]; }
  }
  return max;
}
module.exports = arrayFindkMax;
