/**
 * 9. Conversão Entre Formatos Escreva duas funções:
   ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
    ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.
 */

const pares = 
  [
     ["Produto", "Monitor"],["Preco",600]
  ]

   /**
    * 
    * @param {*} pares lista chave valor
    * @returns Objeto
    * Referencia https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
    */
   function paresParaObjeto(pares){
    return Object.fromEntries(pares) // O metodo do Object.fromEntries trasforma a lista chave valor em Objeto
   }

   const obj = { a: 1, b: 2, c: 3 };

   /**
    * 
    * @param {*} obj 
    * @returns  array de pares
    * Referencia https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
    */
   function objetoParaPares(obj){
    return Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, val]),);

   /* Object.entries(obj).forEach(([key, value]) => {
     console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
     });*/
   }
  
   console.log( objetoParaPares(obj))