describe('Para fixar Async/Await', () => {
  test('Testando com async/await', async () => {
    const listDogs = await findAnimalsByType('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });
})