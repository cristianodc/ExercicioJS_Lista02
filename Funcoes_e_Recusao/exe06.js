/**
 * 6. Memoization Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos),
 *  retornando resultados instantâneos em repetidas invocações
 */

function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args); 
    if (cache[key]) {
     
      return cache[key];
    } else {
     
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function fibo(n){
    if(n <=1) return 1
    return fibo(n - 1) + fibo(n - 2)
}

const fiboRapido = memoize(fibo)

console.time('fibo')
console.log(fibo(40))
console.timeEnd('fibo')


console.time('fiboRapido')
console.log(fiboRapido(40))
console.timeEnd('fiboRapido')


