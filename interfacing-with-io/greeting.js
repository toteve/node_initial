// PARA obtener datos desde externo, en este caso por teclado llegara el valor de entrada
process.stdin.on("data", (data) => {
  const name = data.toString().trim().toUpperCase();

  if (name !== "") {
    process.stdout.write(`Hello ${name}`);
  } else {
    process.stderr.write("Input is empty");
  }
});
