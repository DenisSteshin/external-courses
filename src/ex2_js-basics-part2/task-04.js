function arrayCheckSimilar(array) {
    for (let i = 0; i < array.length; i++) 
    if (typeof array[i]==='number') {
        for (let j = i+1; j < array.length; j++) {
if (array[i]===array[j]) {
    return true;
        }
    
    }
}
return false;
}
module.exports = arrayCheckSimilar;
