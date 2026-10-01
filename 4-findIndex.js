//4.  findIndex()

//7. Encontre a posição (índice) do produto chamado "Monitor".
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const indice = produtos.findIndex((i) => i.nome === "Monitor");
console.log("O indice do produto monitor é:" + indice);

//8. Encontre o índice do primeiro produto inativo para que ele possa ser arquivado.
{
const produtos1 = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const inativo = produtos.findIndex((i) => !i.ativo);
console.log("O indice inativo é:" + inativo);
}