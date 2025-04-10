// Verificar senha com tentativa até acertar (Use o While).

var prompt = require('prompt-sync')();

let senhaCorreta = 123;
let senhaDigitada = prompt("Digite, por gentileza, a senha:");

while (senhaDigitada != senhaCorreta) {
  console.log("Senha incorreta. Por favor, tente novamente.");
  senhaDigitada = prompt("Digite, por gentileza, a senha:");
}

console.log("Senha correta! Acesso permitido.", senhaCorreta);
console.log("Senha incorreta! Acesso negado.", senhaDigitada);
