let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumber = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        oddNumber = oddNumber + 1;
    }
}

if (oddNumber > 0) {
    console.log(oddNumber);
} else {
    console.log('Nenhum valor ímpar encontrado');
}
