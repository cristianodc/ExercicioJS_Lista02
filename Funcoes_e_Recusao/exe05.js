/**
 * 5. Debounce Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova
 *  função que só executa fn se não for chamada novamente dentro do intervalo
 */

function debounce(fn, delay) {
  let tempo;

  return function (...args) {
    
     clearTimeout(tempo)
    
     tempo = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  };
}
/*Função executada dentro do tempo determinado na funçao*/
function mostraMens(){

    console.log('Entramos na function')
}


const debounceFunction = debounce(mostraMens,2000)

debounceFunction()

