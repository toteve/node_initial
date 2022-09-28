// hacemos uso de path
const path = require("path");

// visualizamos el metodo sep
console.log("path separador: ", path.sep);

// construimos una ruta con el metodo join de path y el separador
const filePath = path.join("/public", "dist", "/styles/", "main.css");

// mostramos las rutas
console.log("filePath construido: ", filePath);

// just the name of the file jugando con varios metodos de path
console.log("Nombre base completo del filepath: ", path.basename(filePath));

console.log("Extension del filepath: ", path.extname(filePath));

console.log("Ruta del directorio del filePath: ", path.dirname(filePath));

console.log("Conversion del filePath a objeto: ", path.parse(filePath));

console.log("Nombre del filepath: ", path.parse(filePath).name);

console.log("Aplicando format al parse a string: ", path.format(path.parse(filePath)));

console.log("Creando otras uniones con subidas de nivel: ", path.join("../../dist", "styles", "main.css"));

console.log("Ruta absoluta donde va la solucion a subir: ", path.resolve("../../dist"));
