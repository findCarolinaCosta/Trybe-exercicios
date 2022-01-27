# SELECT conceitos:
Na janela de query rodei:
```
SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';
```
Obs:

* Obeservei que é possível gerar e calcular valores usando apenas SELECT valor_a_ser_calculado_ou_exibido ;
* Percebi que a palavra-chave AS permite que você dê nome às suas colunas para que elas façam mais sentido quando estiver lendo os resultados. E que caso o nome tenha mais de uma palavra, devemos usar aspas simples para nomear as colunas;
* Notei que sempre finalizamos uma query usando o ponto e vírgula ( ; );
* Observei também que as palavras-chave (reservadas) estão em maiúsculo. Isso é uma convenção para facilitar a leitura da query . Sendo assim o mais recomendado.

#### Praticar com exercicio de fixação
1. Monte uma query que exiba seu nome na tela;
```
SELECT  'carolina'
```

2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
```
SELECT 'carolina', 'pereira da costa', 'São Paulo capital', 24;
```

3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
```
SELECT 'carolina' AS Nome, ''pereira da costa' AS Sobrenome, 'São Paulo capital' AS 'Cidade Natal', 24 AS Idade;
```

4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
```
SELECT 13 * 8;
```

5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
```
SELECT now() as 'Data Atual';
```

#### Praticar com exercicio de fixação 2- banco de dados sakila
Encontrando as seguintes informações, montando uma query para cada uma.

1. Escreva uma query que selecione todas as colunas da tabela city ;
```
USE sakila;
SELECT * FROM city;
```

2. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
```
USE sakila;
SELECT first_name, last_name FROM customer;
```

3. Escreva uma query que exiba todas as colunas da tabela rental ;
```
USE sakila;
SELECT * FROM rental;
```

4. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
```
USE sakila;
SELECT title, description, release_year FROM film;
```

5. Utilize o SELECT para explorar todas as tabelas do banco de dados.
```
USE sakila;
SELECT * FROM actor;
SELECT * FROM address;
SELECT * FROM category;
SELECT * FROM city;
SELECT * FROM country;
SELECT * FROM customer;
SELECT * FROM film
SELECT * FROM film_actor;
SELECT * FROM film_category;
SELECT * FROM film_text;
SELECT * FROM inventory;
SELECT * FROM language;
SELECT * FROM payment;
SELECT * FROM rental;
SELECT * FROM staff;
SELECT * FROM store;
```