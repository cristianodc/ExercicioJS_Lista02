/**
 * 5. Debounce Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova
 *  função que só executa fn se não for chamada novamente dentro do intervalo
 */

function debounce(fn , delay){

    let tempo
    return function(...args){
        clearTimeout(tempo)
        tempo = setTimeout(()=> fn.apply(this,args),delay)
    }
}

function percorArray(arr){

    console.log('Funçao com atraso: ',arr)
}

const  arr = [1,2,3,4,5,6,7,8,9,10]

const debounceFunction = debounce(percorArray,1000)

for(let i=0; i < arr.length; i++){
    
    debounceFunction(arr[i])
}