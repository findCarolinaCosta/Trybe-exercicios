-- STORED PROCEDURES
-- Stored procedures = blocos de código SQL reutilizáveis;

-- Pontos fortes quanto ao uso de Stored Procedures
	-- Centralizar o código SQL em um servidor de banco de dados. Possibilitando como por exemplo que queries de manutenção reflita imediatamente na aplicação.
    -- Evita a necessidade de reescrever algo específico
    -- Reduz a necessidade de refatorar o código em todos os ambientes

-- Pontos fracos quanto ao uso de Stored Procedures
	-- Viola um dos princípios de separation of concerns(separação de conceitos);
    -- Debugar esse código armazenado é mais difícil;
    -- Não há como versionar o código de uma stored procedure tão facilmente;
    
-- Sintaxe da estrura padrão stored procedure
USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário

-- Exemplo Procedure sem parâmetros: Normalmente é utilizada para realizar queries mais simples.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAllActors();

-- Desafios stored procedure
	-- db sakila
-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
DELIMITER $$

CREATE PROCEDURE ShowNumberFilms()
BEGIN
     SELECT
		actor_id AS id,
		COUNT(*) AS quantidade_filmes
	 FROM
		sakila.film_actor
	 WHERE
		actor_id = actor_id
	 GROUP BY
		actor_id
	 ORDER BY 
		quantidade_filmes DESC
	 LIMIT 10;
END $$

DELIMITER ;

CALL ShowNumberFilms();


-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
DELIMITER $$

CREATE PROCEDURE ShowInfoFilmByParameter(category VARCHAR(60))
BEGIN
     IF (category != '')
		THEN 
        SELECT 
			f.film_id, 
			f.title AS title_film, 
			c.category_id, 
			c.`name` AS name_category 
		FROM sakila.film AS f
		INNER JOIN sakila.film_category AS fc ON f.film_id = fc.film_id
		INNER JOIN sakila.category AS c ON fc.category_id = c.category_id
        WHERE c.`name`  = category
		ORDER BY f.film_id, f.title, c.category_id, c.`name`;
	 ELSE SELECT 'Forneça uma categoria válida' AS Msg;
	 END IF;
END $$

DELIMITER ;

CALL ShowInfoFilmByParameter('Drama');

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
DELIMITER $$

CREATE PROCEDURE ShowActiveClient(email VARCHAR(80))
BEGIN
     IF (SELECT EXISTS(SELECT * FROM sakila.staff AS s WHERE s.email = email))
		THEN 
        SELECT 'Cliente ativo' AS Msg;
	 ELSE SELECT 'Não ativo' AS Msg;
	 END IF;
END $$

DELIMITER ;

CALL ShowActiveClient('Mike.Hillyer@sakilastaff.com');