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
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
  });
  it('Testa erro "ID não identificado", para caso o id não constar no quadro de funcionários', () => {
    expect(() => { searchEmployee('2333-1', 'specialities') }).toThrow();
  });
  it('esta a mensagem do erro para ID inexistente', () => {
    expect(() => { searchEmployee('2333-1', 'specialities') }).toThrowError(new Error("ID não identificado"));
  });
  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error("Informação indisponível"));
  });
});