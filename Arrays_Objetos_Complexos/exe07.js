/**
 * 7. Mapeamento e Ordenação Dado um array produtos = [{ nome, preco }, …],
 *  crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.
 */

const produtos = [
  { nome: "Monitor", preco: 515.90 },
  { nome: "Cadeira Gamer", preco: 1000.00 },
  { nome: "Mouse", preco: 40.20 },
  { nome: "Teclado", preco: 20.00 },
  { nome: "Caixa de Som ", preco: 135.80 },
  { nome: "Gabinete", preco: 80.00 },
];
/**
 * 
 * @param {*} arr array de objetos
 * @returns       array  ordenados
 * Recebe um array de objetos ordena pelo preço 
 * 
 */
function listaOrdenada(arr){

  let nomes  = arr.slice()

   nomes.sort((a , b)=> b.preco - a.preco)

   let listaOrdenada = nomes.map(function(nomes){return nomes.nome })
   return listaOrdenada
}

// let retornaMap = produtos.map(function name(produto){
//   return produto.nome
// })

//console.log(listaOrdenada(produtos))

console.log(listaOrdenada(produtos))