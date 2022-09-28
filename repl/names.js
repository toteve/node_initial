// defino un arreglo
const names = ['joe', 'john', 'maria']

// se reccorre el array y se imprime cada componente con un saludo
names.map(name => console.log(`Hola ${name}`));

// creo un nuevo arreglo mapeado en hellonames
const hellonames= names.map(name => `Hola ${name}`);

// imprimo nuevo arreglo
console.log("======================")
console.log(hellonames);