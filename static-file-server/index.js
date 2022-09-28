const http = require('http'),
  url = require('url'),
  fs = require('fs');

const server = http.createServer((req, res) => {
  const objURL = url.parse(req.url);
  console.log("Valor de objURL parseado: ",objURL);
  console.log("Valor pathname de objURL: ",objURL.pathname);

  let folderPath = __dirname + '/static' + objURL.pathname; //construye la ruta del index.html

  console.log("Valor de folderPath: ",folderPath); // valor de la ruta

  // si se accede a la raiz
  if(objURL.pathname === '/') {
    folderPath = __dirname + '/static/index.html'; //carga index.html de static}
    console.log("Valor de folderPath dentro del IF: ",folderPath); // valor de la ruta
  }


  fs.stat(folderPath, (err, stats) => {
    if(!err) {
      fs.readFile(folderPath, (err, content) => { //obtiene el archivo a ejecutar del folderPath
        console.log("Valor de CONTENT: ",content); // valor de la ruta
        if(err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.write('Error Interno');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(content); //ejecutar el index.html
          res.end();
        }
      });
    } else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('<h1>Page Not Found</h1>');
      res.end();
    }
  });
});

server.listen(3000, () => console.log('server is listening on port 3000')); 
