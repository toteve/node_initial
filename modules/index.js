// indicamos que vamos a requerir un modulo .js que indicaremos su ruta, y haremos uso de el
const math = require("./math");

// todas estas salidas usan las funciones que estan en el modulo ./math.js y estas funciones son 
// exportadas por math.js y usadas o importadas por index.js
console.log(math.add(1, 2));
console.log(math.substract(1, 2));
console.log(math.division(1, 2));
console.log(math.division(1, 0));
console.log(math.multiply(1, 2));
