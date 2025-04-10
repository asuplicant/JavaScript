// Verificar se uma senha digitada está correta

var prompt = require('prompt-sync')();

let senhaCorreta = "12345";
let senhaDigitada = prompt("Digite sua senha:");

if (senhaDigitada == senhaCorreta) {
  console.log("Senha correta! Acesso permitido.");
} else {
  console.log("Senha incorreta! Acesso negado.");
}