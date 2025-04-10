// Verificar se um número é par ou ímpar.

var prompt = require('prompt-sync')();

let numero = prompt("Digite um número:");

numero = Number(numero);

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}