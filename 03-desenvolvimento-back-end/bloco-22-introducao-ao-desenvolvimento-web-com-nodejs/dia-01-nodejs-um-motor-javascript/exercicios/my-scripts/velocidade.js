const readline = require("readline-sync");

function calculateAverageSpeed() {
  const distance = readline.questionInt("Distância percorrida (m): ");
  const time = readline.questionInt("Tempo gasto (s): ");

  const averageSpeed = (distance / time).toFixed(2);

  console.log(`Velocidade média: ${averageSpeed} m/s`);
}

calculateAverageSpeed();
