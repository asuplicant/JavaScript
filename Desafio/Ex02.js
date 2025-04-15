// Crie um array de objetos com produtos e preços. Exiba no console o
// nome e o preço com R$ formatado.

let produtos = [
  { nome: "Mesa", preco: 70.98 },
  { nome: "Blusa", preco: 48.90 },
  { nome: "Caderno", preco: 30.75 },
  { nome: "Caneta", preco: 5.20 }
];

console.log("Lista de produtos:");

produtos.map(produto => {
  console.log(`${produto.nome} - R$ ${produto.preco}`);
});