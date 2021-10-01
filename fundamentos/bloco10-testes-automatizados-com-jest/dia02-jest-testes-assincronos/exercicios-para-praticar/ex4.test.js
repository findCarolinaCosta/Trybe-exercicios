const getRepos = require('./ex4');

describe('Verifica repositórios', () => {
  it('Verifica se contém o esperado', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  })
});