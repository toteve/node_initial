// requerimos events y probamos llamadas sincronicas a eventos
const EventEmitter = require('events');
// creo una instancia de lo requerido
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  // este no recibe ningun parametro
  console.log('Helloooo! first listener');
});

// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  // este recibe dos parametros
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});

// Third listener
myEmitter.on('event', function thirdListener(...args) {
  // con spread operator se reciben todos los parametros y separados por coma y espacio con join
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log("Impresion de array con todos los eventos llamados: ", myEmitter.listeners('event'));

// llamada a todos los eventos con 5 argumentos
myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener







// uso de libreria events y defino una constante
/* const EventEmitter = require("events"); */

// constante se crea una instancia del events importado o requerido
/* const customEmitter = new EventEmitter(); */

/* console.log("Custom Emitter primer valor: ",customEmitter)


customEmitter.emit("response", "Hello World");
console.log("Emitter 2do valor: ",customEmitter.response); */
/* customEmitter.emit("response", "Hello World 2");
customEmitter.emit("response", "Hello World 3", 30);
customEmitter.emit("response", "Hello World 4", [1, 2, 3]);
customEmitter.on("response", (data, secondParameter) => {
  console.log(data, secondParameter);
}); */