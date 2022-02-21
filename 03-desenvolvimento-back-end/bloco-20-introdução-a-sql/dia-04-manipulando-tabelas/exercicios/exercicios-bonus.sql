-- Bônus
-- Para realizar os exercícios 8 a 10, faça os exercícios anteriores (1 a 7) e utilize o banco de dados Pixar .

-- Exercício 8 : Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
SELECT movie_id, rating, domestic_sales FROM Pixar.BoxOffice
WHERE domestic_sales > 400000000;

UPDATE Pixar.BoxOffice
SET rating = (
CASE
	WHEN domestic_sales > 400000000 THEN 9.0
END )
WHERE movie_id IN (6, 10);

-- Exercício 9 : Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
SELECT movie_id, rating, domestic_sales, international_sales FROM Pixar.BoxOffice
WHERE domestic_sales > 200000000 AND international_sales < 300000000;

UPDATE Pixar.BoxOffice
SET rating = (
CASE
	WHEN domestic_sales > 200000000 AND international_sales < 300000000 THEN 6.0
END )
WHERE movie_id IN (3, 7, 8);


-- Exercício 10 : Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
SELECT id FROM Pixar.Movies
WHERE length_minutes < 100; -- id da condição length_minutes < 100

 DELETE FROM BoxOffice
 WHERE movie_id IN (1, 6, 7, 8); -- apaga ligação pelo id com a tabela BoxOffice;
 
 DELETE FROM Movies
WHERE id IN (1, 6, 7, 8); -- Exclui da tabela Movies todos os filmes com menos de 100 minutos pelo ids; safe mode = true :)
