let num1 = 80;
let num2 = 50;
let num3 = 15;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else if (num3 > num1 && num3 > num2) {
    console.log(num3);
} else {
    console.log('Não é um número, condição não aplicada!')
}