console.log("Module antes : ", module)
const mySecret = 'secret123xyz';

const myWebAddress = "myweb.com";
const myNumber = 300;
const myArray = [100, 20, true];
const user = {
  name: "Frank",
  age: 100,
};

// aqui no exportamos funciones, sino valores de constantes declaradas dentro del modulo a exportar
module.exports = {
  myWebAddress,
  myNumber,
  myArray,
  user,
};

console.log("Module.exports despues : ",module.exports)