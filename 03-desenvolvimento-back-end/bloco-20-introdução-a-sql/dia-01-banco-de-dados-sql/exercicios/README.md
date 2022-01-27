# Agora a prática
Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila , que já deve estar instalado, caso você tenha feito a instalação do MySql Workbench de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila e siga as instruções listadas. Com esse banco disponível na sua instalação do Workbench , sua missão agora é tentar finalizar os exercícios a seguir!

##### Exercício 1 : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench .
- Para fazer a pesquisa Workbench sem usar código, é só dar um clique com botão direito na tabela e selecionar select rows - limit 1000(limite pode ser modificado). O comando ainda é executado e é mostrado, mas é uma atalho para pesquisa.

##### Exercício 2 : Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench .
-  Clicar com o botão direito em Tables e selecionar Create table

##### Exercício 3 : Feito isso, crie uma tabela com as seguintes restrições:
Nome da tabela: Filme
Colunas:
FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
Descricao - não permite nulos, tipo texto (varchar(100));
AnoLancamento - não permite nulos, tipo int;
Nota - permite nulos, tipo int;
✅  Concluído, consegui criar as colunas.

##### Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
- Faz referência à tabela country, ligadas pela coluna country_id.

##### Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?
- Regra de negócio N:1(muitos para um)

##### Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?
- Regra de negócio 1:N(um para muitos)

##### Exercício 7 : Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
- address -> city - N:1
- film -> film_category - 1:N
- film -> language - N:N
- 