let n = 5;
let linha = '';
for (let index = 1; index <= n; index += 1) {
    for (let i = 1; i <= n - index; i += 1) {
        linha += ' ';
    }
    for(let j = 1; j < 2 * index; j += 1) {
    linha += '*';
    }
    linha += '\n';
}
console.log(linha);
// https://www.guj.com.br/t/piramides-com-asteriscos/74360/5 o que me ajudou o comentário do Marcio.
