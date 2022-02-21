-- Fixando DELETE

-- 1. Exclua do banco de dados o ator com o nome de "KARL".
SELECT actor_id, first_name FROM sakila.actor
WHERE first_name = 'KARL'; -- verifica ids

DELETE FROM sakila.film_actor
WHERE actor_id = 12; -- apaga ligação pelo id com a tabela film_actor;

DELETE FROM sakila.actor
WHERE first_name = 'KARL'; -- apaga pelo nome

-- 2. Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT actor_id, first_name FROM sakila.actor
WHERE first_name = 'MATTHEW'; -- verifica ids

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181, 523); -- apaga ligação pelo id com a tabela film_actor;

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW'; -- apaga dados pelo nome da tabela actor;

-- 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
SELECT COUNT(*) FROM sakila.film_text; -- de 1000 para 923

DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';

-- 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
SELECT 	COUNT(*) FROM film_actor; -- de 5342 para 0
SELECT COUNT(*) FROM film_category; -- de 1000 para 0

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

-- 5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- ✅ feito

-- 6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).
-- ✅ feito
