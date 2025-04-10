// Mostrar tabuada de um número (Use o FOR).

var prompt = require('prompt-sync')();

let numero = (prompt("Por gentileza, digite um número para ver a tabuada:"));

for (let i = 1; i <= 10; i++) {
  console.log(numero, " x ", i, " = ", (numero * i));
}