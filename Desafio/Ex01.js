// Crie um sistema que permita cadastrar nomes. Antes de adicionar,
// verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se não estiver, adicione o usuário.

var prompt = require('prompt-sync')();
let lista = ["Laura"];

let nome;

do {
    nome = prompt("Por gentileza, digite seu nome (ou digite 'sair' para encerrar): ").trim();

    if (nome.toLowerCase() === "sair") {
        break;
    }
    const existe = lista.some(n => n.toLowerCase() === nome.toLowerCase());
    if (existe) {
        console.log("Sinto muito. Nome já utilizado no sistema.");
    } else {
        lista.push(nome);
        console.log("Nome adicionado ao sistema.");
    }

} while (true);

console.log("Lista final:", lista);