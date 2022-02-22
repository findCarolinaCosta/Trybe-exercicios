# Requisitos testes (Model)

1. A API deverá permitir a inserção de filmes no banco de dados :
  - Ela deve receber e registrar as seguintes informações do filme: Nome , Direção e Ano de lançamento ;
  - Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID ;
  - Como estamos falando a princípio de um banco de dados com essas informações. Podemos descrever o requisito pensando primeiramente o Model com as seguintes asserções/ afirmações:

1. Insere um novo filme no DB
  - quando é inserido com sucesso
    - retorna um array
    - o array está vazio
  - quando existir filmes criados
    - retorna um array
    - o array não está vazio
    - o array possui itens do tipo objeto
    - tais itens possuem as propriedades: "id", "title", "releaseYear" e "directedBy"