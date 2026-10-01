//5.  reduce()

//9. Calcule a quantidade total de itens em estoque, somando o estoque de todos os produtos.
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const redu = produtos.reduce((totais, produto) => {
  return totais + produto.estoque;
}, 0); 

console.log("A quantidade total de itens no estoque é: " + redu);

//10. Calcule o patrimônio total em estoque. Para isso, multiplique preco × estoque de cada produto e some os resultados.
{
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const redu = produtos.reduce((totalis, produto) => {
  return totalis + ( produto.preco * produto.estoque ) 
}, 0);

console.log(redu);
}