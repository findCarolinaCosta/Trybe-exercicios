let n =12;
let resultado = 0;
for (let index = 2; index <= n / 2; index += 1) {
    if (n % index === 0) {
        resultado += n[index];
        break;
    }
}

if (resultado === 0) {
    console.log(n,'é um número primo');
} else {
    console.log(n, 'não é um número primo');
}