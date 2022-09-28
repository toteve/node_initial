const PI = 3.14;

// diferentes funciones que componen a math.js, con return la funcion retorna un resultado

function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function division(x, y) {
  // condicional
  if (y == 0) {
    // llamado a una funcion interna del modulo math.js
    showMessage("You cannot divide by 0");
  } else {
    return x / y;
  }
}

function multiply(x, y) {
  return x * y;
}

function showMessage(message) {
  console.log(message); //esta funcion no retrorna nada solo muestra un mensaje
}

// module antes de exportar
console.log("Module: ", module)

// exportamos las funciones que deseamos sean exportadas
/* exports.add = add;
exports.substract = substract;
exports.division = division;
exports.multiply = multiply; */

module.exports = {add, substract, division, multiply}

// module despues de exportar
console.log("Module.exports: ",module.exports)