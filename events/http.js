// crear e inicializar un servidor
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.write("Hello World"); // respuesta que se vera en el navegador
  res.end();
});

server.listen(3000);
console.log("Server is running on port 3000");
