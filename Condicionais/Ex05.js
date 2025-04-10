// Verificar se um aluno foi aprovado.

var prompt = require('prompt-sync')();

let media = prompt("Digite, por gentileza, a nota do aluno:");

if (media >= 7) {
  console.log("O aluno foi aprovado.");
} else {
  console.log("O aluno não foi aprovado.");
}