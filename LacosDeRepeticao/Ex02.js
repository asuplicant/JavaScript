// Somar números até que o usuário digite 0 (Use o While).

var prompt = require('prompt-sync')();

let soma = 0;
let num = Number(prompt("Digite um número, por favor:"));

while(num !== 0){
   // Soma.
   soma += num;
   num = Number(prompt("Digite um número, por gentileza: (Caso queira sair, digite 0)"));
}

console.log(soma);


