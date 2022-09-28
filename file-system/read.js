const fs = require('fs');

fs.readFile('./fileOne.txt', (err, data) => {
  if (err) {
    console.log(err);
    console.log("El archivo "+" "+data+" no existe");
  } else {
    console.log(data.toString());
  }
});

console.log('Mensaje de Finalizacion: The last line of the program');
