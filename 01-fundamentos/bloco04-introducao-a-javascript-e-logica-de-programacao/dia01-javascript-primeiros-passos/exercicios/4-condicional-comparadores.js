let angulo1 = 30;
let angulo2 = 70;
let angulo3 = -5;
let soma = angulo1 + angulo2 + angulo3;
if (soma === 180) {
    console.log("True")
} else if (soma < 180 || soma > 180) {
    console.log("False")
} else if (angulo1 === typeof(Number) || angulo1 < 0 || angulo2 <= typeof(Number) || angulo2 < 0 || angulo3 < 0 || angulo3 <= typeof(Number)) {
    console.log("Error: ângulo inválido")
}