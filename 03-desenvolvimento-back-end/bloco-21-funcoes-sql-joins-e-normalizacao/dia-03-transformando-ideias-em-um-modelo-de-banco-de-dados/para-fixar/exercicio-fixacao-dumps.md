Exercícios de fixação - DUMPs

 Selecionado banco de dados hotel
Definição: backup do esquema do banco de dados (estrutura de tabelas, banco de dados e suas restrições) e, opcionalmente, também os dados de cada uma dessas tabelas, salvas um arquivo geralmente na forma de instruções SQL.

 1. Exporte a estrutura e os dados (tabelas, triggers, procedures, functions e o schema ) para um dump em formato de arquivo SQL, como foi exibido nas instruções anteriores. Faça o dump através da linha de comando e usando o MySQL Workbench.
`mysqldump -u root -p hotel > hotelBackup.sql`

 2. Após ter feito isso, abra o arquivo usando algum editor de texto e altere as duas linhas iniciais, mudando o nome do banco a ser criado e do banco a ser usado. Assim seu script vai restaurar um banco novo e não sobrescrever o atual. No exemplo abaixo, foi feito o backup do banco de dados hotel . Após ser gerado o backup, o arquivo foi aberto, e o nome do banco a ser criado foi alterado para hotel2 . A linha USE `hotel` também foi alterada para USE `hotel2`.
![dump1](https://course.betrybe.com//back-end/sql/projects/images/dump1.png)

 3. Restaure o backup do banco de dados criado por você.
`mysqldump -u root -p hotel2 < hotelBackup.sql`

 4. Confira que, ao executar os comandos para restaurar o dump , um novo banco de dados foi criado, como na imagem abaixo.
![dump2](https://course.betrybe.com//real-life-engineer/mysql-extra/images/dump2.png)