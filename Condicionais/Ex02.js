// Verificar se o usuário pode tirar carteira de motorista.
// Pessoas maiores de idade (>= 18).

// Qual é a sua idade?
// SE você é maior de idade, pode tirar a carteira. SE NÂO, não poderá.

var prompt = require('prompt-sync')();

let idade = Number(prompt("Olá, digite sua idade:"));

if(idade >= 18){
    console.log("Você poderá tirar a carteira.");
}else if(idade < 18){
    console.log("Você não poderá tirar a carteira.")
}else{
    console.log("Essa informação não é válida.")
}
