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

//Bom jeito de fixar, não sabia que os Setup e Teardown funcionaria antes e depois do teste seguinte também, fiquei com dúvida por causa que estava dentro de um outro describe. Mas de qualquer forma identifica como um próximo teste

// console.log
//     1 - beforeEach (acertei)

//       at Object.<anonymous> (ex5.test.js:3:28)

//   console.log
//     1 - test (acertei)

//       at Object.<anonymous> (ex5.test.js:6:257)

//   console.log
//     1 - afterEach  (acertei)

//       at Object.<anonymous> (ex5.test.js:4:27)

//   console.log
//     1 - beforeEach  (Não sabia rs)

//       at Object.<anonymous> (ex5.test.js:3:28)

//   console.log
//     2 - beforeEach (acertei)

//       at Object.<anonymous> (ex5.test.js:9:30)

//   console.log
//     2 - test  (acertei)

//       at Object.<anonymous> (ex5.test.js:12:100)

//   console.log
//     2 - afterEach  (acertei)

//       at Object.<anonymous> (ex5.test.js:10:29)

//   console.log
//     1 - afterEach  (Não sabia, foi um bom aprendizado)

//       at Object.<anonymous> (ex5.test.js:4:27)