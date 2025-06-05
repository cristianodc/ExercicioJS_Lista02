/**
 *   8. Agrupamento por Propriedade Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave
 *  é um cliente e o valor é a soma de todos os seus total.
 */

const vendas = 
[
    {cliente:"Maria", total:100},
    {cliente:"Joao", total:500},
    {cliente:"Maria", total:350.50},
    {cliente:"Joao", total:12.10},
    {cliente:"Joao", total:80},
    {cliente:"Pedro", total:250.60},
    {cliente:"Maria", total:100},
    {cliente:"Pedro", total:100},
]
/**
 * O reduce percorre o array vendas 
 */
const total = vendas.reduce((total,clienteAtual)=>{

     
    if(!total[clienteAtual.cliente]){   //Verifica se tem algum total é vazio para o cliente atual na falta 
        total[clienteAtual.cliente] = 0 // inicia com 0
    }
    total[clienteAtual.cliente] += clienteAtual.total  // realiza a soma total para usando o cliente com chave
   
    return total

},{})



    console.log(total)