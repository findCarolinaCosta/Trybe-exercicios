describe('Testa a função searchEmployee', () => {
  it('Testa se a função existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se searchEmployee(id, "firstName"), retorna o esperado', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  it('Testa se searchEmployee(id, "lastName"), retorna o esperado', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
  });
  it('Testa se searchEmployee(id, "specialities"), retorna o esperado', () => {
    expect(searchEmployee('8579-6', 'specialities')).toBe('UX', 'Design');
  });
  it('Testa erro "ID não identificada", para caso o id não constar no quadro de funcionários', () => {
    expect(searchEmployee('2333-1', 'specialities')).toThrow();
  });
  it('Testa se retorna se retorna o erro "Informação indisponível", caso a informação não existir', () => {
    expect(() => { searchEmployee('2333-1', 'specialities') }).toThrowError(new Error("Informação indisponível"));
  });
});