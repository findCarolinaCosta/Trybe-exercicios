-- Stored function

-- Indicados para evitar repetição de código

-- Sintaxe
USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;

-- Execicio para fixar stored function

-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
DELIMITER $$

CREATE FUNCTION GetTotalPayments(id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
    DECLARE total_payments VARCHAR(50);
    SELECT 
        SUM(amount)
	FROM sakila.payment 
    WHERE customer_id = id
    INTO  total_payments;
    RETURN total_payments;
END $$

DELIMITER ;

SELECT GetTotalPayments(1) AS total;


-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
DELIMITER $$

CREATE FUNCTION GetFilmTitle(id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
    DECLARE film_title VARCHAR(50);
    SELECT 
		f.title 
	FROM sakila.inventory AS i
	INNER JOIN sakila.film AS f ON f.film_id = i.film_id
	WHERE i.film_id = id
	GROUP BY f.film_id, f.title
    INTO  film_title;
    RETURN film_title;
END $$

DELIMITER ;

SELECT GetFilmTitle(1) AS Title;


-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
DELIMITER $$

CREATE FUNCTION GetTotalMoviesByCategory(category VARCHAR(60))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE film_title VARCHAR(50);
    SELECT 
		COUNT(*)
	FROM sakila.film AS f
	INNER JOIN sakila.film_category AS fc ON f.film_id = fc.film_id
	INNER JOIN sakila.category AS c ON fc.category_id = c.category_id
	WHERE c.`name`  = category
	ORDER BY f.film_id, f.title, c.category_id, c.`name`
    INTO  film_title;
    RETURN film_title;
END $$

DELIMITER ;

SELECT GetTotalMoviesByCategory('Horror') AS Quantidade;