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

// MAPEAMENTO.
// .map() :> Método usado em Arrays que permite transformar os elementos do Array original em novos valores]
// criando um novo Array SEM modificar o original.

// LISTA DE NOMES DE ALUNOS E NOTAS.
// let alunos = [ 
//     {nome: "Laura", nota: 10},
//     {nome: "Kauê", nota: 10}
// ];

// LISTA DE NOMES.
// let alunoNomes = alunos.map(aluno => aluno.nome);

// FUNÇÃO.
// let alunoNomesDois = alunos.map(function(aluno){
//     return aluno.nome;
// })

// let alunoNota = alunos.map(aluno => aluno.nota);

// console.log(alunoNomes);

// -----------------------------------------------------------------------------------------------------------------

// 2. Criar um Array com mensagens personalizadas.
// let nomes = ["Laura", "Kauê", "Yumi"];

// Olá, Laura!
// Olá, Kauê!
// Olá, Yumi!

// let mensagem = nomes.map(itemDoArrayNomes => 'Olá, ${itemDoArrayNomes}');
// Ou, como outra opção:
// let mensagem2 = nomes.map(itemDoArrayNomes => "Olá," + itemDoarrayNomes);

// console.log(mensagem);

// 3. Pegar apenas os primeiros caracteres de nomes.
// let nomes = ["Laura", "Kauê", "Yumi"];

// let inicialNomes = nomes.map(itemNomes => element[0]);

// console.log(inicialNomes);

// 4. Criação de Emails.
// let emails = [
//     "laurinhapamaral@gmail.com", "kaueantonio@gmail.com"
// ];

// let dominios = emails.map(element => element.split("@")[1]);

// console.log(dominios);