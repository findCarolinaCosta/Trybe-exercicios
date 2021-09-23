const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

// Erro de correspondência: o valor recebido deve ser uma função simulada ou espiã