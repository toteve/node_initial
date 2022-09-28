console.log("first");

// observar que pasa con 2do console.log con 0 de tiempo y con 3000 de tiempo
setTimeout(() => {
  console.log("second");
}, 3000);

console.log("third");
