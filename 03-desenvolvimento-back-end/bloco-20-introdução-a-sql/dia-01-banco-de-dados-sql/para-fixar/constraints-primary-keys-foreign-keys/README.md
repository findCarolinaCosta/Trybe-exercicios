# Exercícios de fixação
![sql-table](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table1-a6228d5cf09aea61d1e205b18663d256.png)

Sem ter acesso à estrutura interna de como essa tabela foi criada, tente responder ao seguinte:
1 - Quais constraints a coluna address_id poderia ter? Por quê?
- Constraint Primary Key, identificador único = número e não pode ser NULL

2 - A coluna city_id é um número. Consegue identificar que tipo de constraint foi aplicado a ela?
- Foreign Key

3 - A coluna address (endereço) possui uma constraint . Qual tipo de constraint seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?
- Restrição aplicada, valor default NULL.

## Observação sobre outra essa tabela:
![sql-table](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/IntroductionCityTable-647aaf2f2be1406e6dbd68e50d9e5f90.png)

1 - Que tipo de constraint a coluna city_id possui?
- Primary Key

2 -Qual é o motivo de a coluna country_id não possuir nomes de country (país)? Ela é algum tipo de chave primária ou estrangeira?
- Porque a coluna country_id está provavelmente "conectada" a outra tabela, chamado também de relacionamento em um banco de dados(tabelas). Deixando os dados ligados. Tipo Primary Key.
- 
## Nessa outra tabelas as observações são:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table3-dfbcb99a6654c108ca5f6258e7a3dcd1.png)

1 - Qual coluna possui uma primary key ?
- Coluna film_id

2 - Qual coluna possui uma foreign key ?
- Coluna category_id
