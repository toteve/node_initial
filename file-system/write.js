const fs = require('fs');

fs.writeFile('./fileOne.txt', 'line one\nline two', error => {
  if(error) {
    console.log(error);
  }
  else {
    console.log('Mensaje de creacion: the file was created');
  }
});

console.log('Mensaje de finalizacion: last line of the program');
