describe('Para fixar Async/Await', () => {
  test('Testando com async/await', async () => {
    const listDogs = await findAnimalsByType('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });
})
//A diferença entre elas é o async . Como existe uma promise a ser testada, é necessário o uso do await , para que o teste espere a finalização da promise e, em seguida, execute o teste.