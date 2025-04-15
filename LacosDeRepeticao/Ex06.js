//Solicitar idade até uma válida (&gt;= 0) (Use o do...While)

let prompt = require(`prompt-sync`)();
let idade;

do {
  idade = prompt("Digite sua idade (maior ou igual a 0):");
} while (idade < 0 || idade === "");

console.log("Idade válida: " + idade);
