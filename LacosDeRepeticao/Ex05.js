// Menu simples até o usuário sair com Do While.

var prompt = require('prompt-sync')();

console.log("Veja a tabela e digite 0 caso queira sair dela. Muito obrigado!");
let num = 0;

do {
    console.log("+----------------+")    
    console.log("|                |")    
    console.log("| 1) Musica      |")    
    console.log("| 2) Jogo        |")    
    console.log("| 3) Sair        |")    
    console.log("|                |")    
    console.log("+----------------+")    
    num = Number(prompt(""))
} while (num !== 0);

console.log("Você escolheu a opção de sair.");
console.log("Muito obrigado por acessar!");