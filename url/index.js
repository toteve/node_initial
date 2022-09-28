const http = require('http');
const url = require('url');

// ver uso de metodos asociados a url
const server = http.createServer((req, res) => {
  console.log("url inicial como objeto: ",url);
  const objectUrl = url.parse(req.url);
  console.log("url despues de parse: ", objectUrl);
  console.log('Pathname de la ruta sin query:', objectUrl.pathname);
  console.log('Path de la ruta con query:', objectUrl.path);
  console.log('Query de la ruta:', objectUrl.query);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Request Received</h1>');
  res.end();
});

server.listen(3000, () => {
  console.log('server is listening on port 3000');
});
