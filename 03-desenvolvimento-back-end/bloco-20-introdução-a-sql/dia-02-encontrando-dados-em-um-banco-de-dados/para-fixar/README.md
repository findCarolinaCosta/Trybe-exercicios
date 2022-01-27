# Vamos montar o bolo com todos os ingredientes que vimos hoje
* Usando o banco de dados sakila.

Para os exercícios a seguir, vamos usar a tabela sakila.film

- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
```
SELECT * FROM sakila.film;
```

- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .
```
SELECT title, release_year, rating FROM sakila.film;
```

- Quantos filmes temos cadastrados?
```
SELECT COUNT(*) FROM sakila.film;
```

- Para os exercícios a seguir, vamos usar a tabela sakila.actor
```
SELECT DISTINCT last_name FROM sakila.actor;
```

- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
```
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
```

- Quantos sobrenomes únicos temos na tabela?
```
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
```

- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
```
SELECT * FROM sakila.actor
ORDER BY last_name, first_name DESC;
```

- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english .
```
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
```

 Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
```
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;
```