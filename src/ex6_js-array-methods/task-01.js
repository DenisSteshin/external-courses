function slice(array, begin = 0, end = array.length - 1) {
  const result = [];
  const size = array.length;

  if (begin < 0 && end < 0) {
    if (size + begin < size + end) {
      for (let i = size + begin; i < size + end; i++) {
        result.push(array[i]);
      }

      return result;
    }
    for (let i = size + end; i < size + begin; i++) {
      result.push(array[i]);
    }

    return result;
  }

  if (begin < 0 && end > 0) {
    if (size + begin < end) {
      for (let i = size + begin; i < end; i++) {
        result.push(array[i]);
      }
      return result;
    }
    for (let i = end; i < size + begin; i++) {
      result.push(array[i]);
    }

    return result;
  }

  if (begin > 0 && end < 0) {
    if (begin < size + end) {
      for (let i = begin; i < size + end; i++) {
        result.push(array[i]);
      }

      return result;
    }
    for (let i = size + end; i < begin; i++) {
      result.push(array[i]);
    }

    return result;
  }

  for (let i = begin; i < end; i++) {
    result.push(array[i]);
  }

  return result;
}
module.exports = slice;
