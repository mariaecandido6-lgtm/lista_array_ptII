//7.  every()

//13. Verifique se todos os produtos possuem preço maior que R$ 50.

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];
const todos = produtos.every((todo) => todo.preco > 50);
console.log(`Todos os preços são superiores a R$ 50 ?`);
console.log(`Todos os produtos possuem preço maior que R$50? = ${todos}.`);

//14. Verifique se todos os produtos possuem estoque disponível (estoque > 0).

{
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const todos = produtos.every((tudo) => tudo.estoque > 0);

console.log(`Todos os produtos possuem estoque disponivel? `);
console.log(`Resposta = ${todos}.`)
}
