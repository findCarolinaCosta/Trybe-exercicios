const { encode, decode } = require('./ex4');

describe('Testa a função encode e decode', () => {
  it('1. Teste se encode é função', () => {
    expect(typeof encode).toEqual('function');
  })
  it('2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
  })
  it('4. Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('teste')).toEqual('t2st2');
  })
  it('5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('teste').length).toEqual(5);
  })

  it('1. Teste se decode é função', () => {
    expect(typeof decode).toEqual('function');
  })
  it('3. Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1')).toEqual('a');
  })
  it('4. Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('t2st2')).toEqual('teste');
  })
  it('5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('teste').length).toEqual(5);
  })
})