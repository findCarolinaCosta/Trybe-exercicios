let n = 5;
let linha = '';
for (let index = 0; index <= n; index += 1 ) {
    for (let i = 0; i <= n; i += 1 ) {
        linha +='*';
    }
    linha += '\n';
} 
console.log(linha); 
console. log();

// for (let index = 0; index < n; index += 1) {
//   console.log('*'.repeat(n)); //opção que encontrei que dá certo porém "não convencional"
// }