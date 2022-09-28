// modulo para crear un servidor http en NodeJs
const http = require("http");

// create el servidor y agrega rutas a revisar
const server = http.createServer((req, res) => {
  // ruta raiz
  if (req.url === "/") {
    // respuesta con write al navegador y luego finaliza con end() en res
    res.write("Welcome to the server");
    return res.end();
  }

  // ruta /about retorna un mensaje al front en el navegador y finaliza
  // usar metodo startsWith para diferenciar nombre similares
  if (req.url === "/about") {
    return res.end("About page");
  }

  if (req.url === "/above") {
    return res.end("Above page");
  }

  // sino es ninguna ruta genera hacia el front un mensaje en codigo html de no encontrado
  // cuando no coincida ninguna ruta
  res.end(`
    <h1>Not Found</h1>
    <p>The page you are looking for was not found.</p>
    <a href="/">Go back to the home page</a>
  `);
});

// donde escucha el servidor, defino el puerto
server.listen(3000);
console.log("Server is running on port 3000");