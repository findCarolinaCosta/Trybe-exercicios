const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
  service.randomRgbColor = jest.fn();

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

test("#randomRgbColor2", () => {
  // testando se a função foi chamada e qual seu retorno
  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
}); // "No contexto deste teste, quando essa função for chamada, ela retornará o valor que eu defini, ao invés de um valor aleatório!"

// Na terceira linha do exemplo acima, estamos manualmente chamando a função service.randomRgbColor(); . Caso isso não seja feito, o teste expect(service.randomRgbColor).toHaveBeenCalled() irá falhar. Isso acontece porque mockar uma função redefine seu comportamento, mas não a executa. A propriedade toHaveBeenCalled() espera que a função dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste.