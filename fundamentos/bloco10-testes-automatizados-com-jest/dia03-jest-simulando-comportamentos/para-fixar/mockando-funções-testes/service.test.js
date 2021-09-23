const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

// Erro de correspondência: o valor recebido deve ser uma função simulada ou espiã

// Esse erro acontece porque a propriedade toHaveBeenCalled , assim como outras que serão ensinadas a seguir, são exclusivas para funções simuladas. Ou seja: se você não simula uma função, a propriedade não funciona corretamente.