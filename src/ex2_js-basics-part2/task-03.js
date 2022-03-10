function isNumber(number) {
  if (typeof number === 'number') {
    return true;
  }
  return false;
}

function arrayCheckIsEven(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNumber(array[i]) && array[i] !== 0) {
      if (array[i] % 2 === 0) {
        counter += 1;
      }
    }
  }
  return counter;
}

function arrayCheckIsOdd(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNumber(array[i]) && array[i] !== 0) {
      if (array[i] % 2 === 1 || array[i] === 1) {
        counter += 1;
      }
    }
  }
  return counter;
}

function arrayCheckIsZero(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNumber(array[i])) {
      if (array[i] === 0) {
        counter += 1;
      }
    }
  }
  return counter;
}

function arrayCheckParity(array) {
  const result = [arrayCheckIsEven(array), arrayCheckIsOdd(array), arrayCheckIsZero(array)];

  return result;
}

console.log(arrayCheckParity([1, 2, 3, 0]));
