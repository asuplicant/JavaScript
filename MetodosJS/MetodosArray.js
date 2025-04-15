// LENGHT.
// 1. lenght() :> Tamanho.

// let frutas = ["Maça", "Banana", "Kiwi", "Morango", "Abacate", "Ameixa", "Jabuticaba", "Uva", "Carambola", "Amora"];
// console.log(frutas.lenght);

// let numeros = [20, 5, 10]

// console.log(numeros.length);

// -----------------------------------------------------------------------------------------------------------------

// REVERSE.
// 2. .reverse() :> Reverte o nosso Array.

// let numeros = [70, 100, 120, 1000];
// numeros.reverse();

// console.log(numeros);

// -----------------------------------------------------------------------------------------------------------------

// NOMES.
// let nomes = ["Laura", "Kauê", "Victoria", "Yumi"];

// .push() :> Adiciona no final do Array.
// nomes.push("Matheus")

// .splice :> 
// nomes.splice(1, 1);

// unshift() :> Adiciona no início do Array.
// nomes.unshift("Sophia");

// .shift() :> Remove no início do Array.
// nomes.shift();

// .pop() :> Remove SOMENTE o último elemento do Array.
// nomes.pop();
// console.log(nomes.pop()); // Remove o último elemento e imprime o nome do que foi deletado.

// console.log(nomes);

// -----------------------------------------------------------------------------------------------------------------

// NOMESANIMAIS.
// let nomesAnimais = ["Yumi", "Meg", "Mell", "Ami", "Angel", "Linnie"];

// .includes() :> Verificar se existe no Array. Se existir, ele retornará TRUE. Caso não, retornará FALSE.
// console.log(nomesAnimais.includes("Yumi"));

// -----------------------------------------------------------------------------------------------------------------

// VALORES.
// let valores = [30, 55, 90, 66];
// // Quero saber quais são os valores MENORES que 90..
// let maiores = valores.filter(num => num < 90);

// console.log(maiores)

// -----------------------------------------------------------------------------------------------------------------

// .map() :> Método usado em Arrays que permite transformar os elementos do Array original em novos valores
// criando um novo Array SEM modificar o original.

// LISTA DE NOMES DE ALUNOS E NOTAS.
let alunos = [ 
    {nome: "Laura", nota: 10},
    {nome: "Kauê", nota: 10}
];

// LISTA DE NOMES.
let alunoNomes = alunos.map(aluno => aluno.nome);

console.log(alunoNomes);
 