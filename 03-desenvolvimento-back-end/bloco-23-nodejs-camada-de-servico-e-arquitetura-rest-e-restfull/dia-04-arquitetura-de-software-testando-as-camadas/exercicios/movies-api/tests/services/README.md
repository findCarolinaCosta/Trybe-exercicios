# Testando service

Seguindo nossa sequência iremos testar a camada de services.
- Relembrando o papel dessa camada, podemos definí-la como responsável pela lógica de negócio, sendo acessada pelo controller e acessando o model , ou seja, ficando situada entre as duas camadas.
- Relembrando nossos requisitos vamos identificar quais comportamentos precisaremos garantir:

1. A API deverá permitir a inserção de filmes no banco de dados:
    * Ela deve receber e registrar as seguintes informações do filme: Nome , Direção e Ano de lançamento ;
    * Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID 