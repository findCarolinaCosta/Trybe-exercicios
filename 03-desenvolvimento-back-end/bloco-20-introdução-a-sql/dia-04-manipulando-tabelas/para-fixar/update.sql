-- Fixando UPDATE
SET SQL_SAFE_UPDATES = 0; -- desabilita safe-updates para fins didáticos

-- 1. Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
SELECT first_name FROM sakila.actor WHERE first_name = 'JULES'; -- verfifica
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'Julia';

-- 2. Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
SELECT name FROM sakila.category WHERE name = 'Science Fiction'; -- verfifica
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';


-- 3. Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
SELECT title, length, rental_rate FROM sakila.film
WHERE length > 100 
	AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') 
	AND replacement_cost > 20; -- verfifica
    
UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100 
	AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') 
	AND replacement_cost > 20;

-- 4.Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.
SELECT title, length, rental_rate FROM sakila.film
WHERE length BETWEEN 1 AND 100 OR length > 100; -- verfifica

UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);
