/**
 * 6. Memoization Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos),
 *  retornando resultados instantâneos em repetidas invocações
 */

function memoize(n) {
  const memo = [0, 1]; // {1}
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n]; // {2}
    memo[n] = fibonacci(n - 1,memo) + fibonacci(n - 2,memo); // {3}
    
    return memo[n];
   
  };
   return fibonacci(n); // 
}
function fibonacci(n){
if (n < 1) return 0; // {1}
if (n <= 2) return 1; // {2}
return fibonacci(n - 1) + fibonacci(n - 2); // {3}
}


// console.time('memoize')
// console.log(memoize(10));
// console.timeEnd('memoize')
console.time('fibonacci')
console.log(fibonacci(10));
console.timeEnd('fibonacci')
