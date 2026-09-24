//1. map()- transforme os dados e gere um novo array.

//1. Crie um novo array contendo apenas os nomes dos produtos em letras maiúsculas.
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const nomeProdutos = produtos.map((produtos) => {
    return {
        nome: produtos.nome.toUpperCase()
    };
});

console.log(nomeProdutos);
console.log("\n");

//2. Crie um novo array de produtos em que cada item tenha o preço reajustado com 10% de desconto.
const produtosBanco = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];


const desconto = produtos.map((produtos => produtos.preco * 0.9));
console.log(desconto);



