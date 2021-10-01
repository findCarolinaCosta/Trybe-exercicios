describe('5 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .', () => {

  beforeEach(() => console.log('1 - beforeEach'));
  afterEach(() => console.log('1 - afterEach'));

  test('Imagino que será impresso o log do before, depois o log desse teste 1 e por fim o log do afterEach, mas sobre o after eu não tenho certeza se o que o describe conta como um teste, se não conta então não será impresso o do afterEach', () => console.log('1 - test'));

  describe('Scoped / Nested block', () => {
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));

    test('Imagino que primeiro o log do beforeEach depois o log desse teste 2 e só', () => console.log('2 - test'));
  });
})