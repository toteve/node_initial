// con destructuring requiero estos componentes o partes del modulo ./myModule.js
const { myArray, myNumber, myWebAddress, user } = require("./myModule");

// imprimo respuesta de la importancion o requerimiento
console.log(require('./myModule'))

// imprimo unas variables o constantes que se requieren o importan del modulo requerido al inicio
console.log("Impresion desde main.js:");
console.log("========================");
console.log(myArray);
console.log(myNumber);
console.log(myWebAddress);
console.log(user);
