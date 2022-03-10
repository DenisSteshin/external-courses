function arrayFindkMax (array) {
let max = 0;
let a = array.length;
for (let i = 0; i < a; i++) {
    if (array[i] > max)
    max = array[i];
}
 return max;
}
console.log(arrayFindkMax([1,2,3,33,5,6,30,8,9,10,11,3443,13]));