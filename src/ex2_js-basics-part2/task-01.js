function checkType(primitive) {
    if (isNaN(primitive))  {
        return undefined;
    }

if (typeof primitive === "string"|"number") {
   return typeof primitive 
}
}
console.log(checkType("Den"))




