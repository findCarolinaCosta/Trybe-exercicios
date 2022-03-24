import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(10, 25)}cm²`);

console.log(`Losango tem a área a diagonal maior 32 cm e a diagonal menor 18cm: ${Exercise.rhombus({ D: 32, d: 18})}cm²`);
console.log(`Losango tem a área a diagonal maior 200 cm e a diagonal menor 50 cm: ${Exercise.rhombus({ D: 200, d: 50})}cm²`);
console.log(`Losango tem a área a diagonal maior 75 cm e a diagonal menor 25cm: ${Exercise.rhombus({ D: 75, d: 25})}cm²`);


console.log(`O trapézio tem a altura(h) de 50 cm, base maior(B) 100 cm e base menor(b) 70cm: ${Exercise.rapezoid({ B: 100, b: 70, h: 50 })}cm²`);
console.log(`O trapézio tem a altura(h) 35cm, base maior(B) 75 cm e base menor(b) 50cm: ${Exercise.rapezoid({ B: 75, b: 50, h: 35 })}cm²`);
console.log(`O trapézio tem a altura(h) 80 cm, base maior(B) 150 cm e base menor(b) 120cm: ${Exercise.rapezoid({ B: 150, b: 120, h: 80 })}cm²`);


console.log(`Calculo a área do círculo com raio igual 25cm: ${Exercise.circle('25')}cm²`);
console.log(`Calculo a área do círculo com raio igual 100cm: ${Exercise.circle('100')}cm²`);
console.log(`Calculo a área do círculo com raio igual 12,5cm ${Exercise.circle('12,5')}cm²`);