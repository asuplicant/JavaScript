// Crie um array de objetos com produtos e preços. Exiba no console o
// nome e o preço com R$ formatado.

let produtos = [
    { nome: "Jujuba", preço: 5.99 },
    { nome: "Chocolate", preço: 7.49 },
    { nome: "Pão de forma", preço: 3.75 },
    { nome: "Óleo", preço: 6.20 }
];

console.log("Lista de produtos:");

produtos.forEach(produto => {
    console.log(`${produto.nome} - R$ ${produto.preco}`);
});