-- Exercicios dos tópicos extras sobre MySQL

-- usando db Pixar


DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Theater (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NULL
);

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL,
  theater_id INTEGER,
  FOREIGN KEY (theater_id) REFERENCES Theater (id)
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL

);

INSERT INTO Theater(name, location)
    VALUES ('Cinemark', 'São Paulo'),
            ('Brodway theater', 'Nova York'),
            ('Phoenix theater', 'Londres'),
            ('Le Champo', 'Paris'),
            ('TLC Chinese Theater', 'Los Angeles'),
            ('Regal Tikahtnu', 'Alaska');

INSERT INTO Movies(title, director, year, length_minutes, theater_id)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
         ('Vida de inseto', 'Andrew Staton', 1998, 95, 3),
         ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
         ('UP', 'Pete Docter', 2009, 101, 2),
         ('Carros', 'John Lasseter', 2006, 117, NULL),
         ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
         ('Valente', 'Brenda Chapman', 2012, 98, NULL),
         ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
         ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
         ('WALL-E', 'Pete Docter', 2008, 104, NULL);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000),
         (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (9, 6.8, 450000000, 370000000),
         (11, 9.9, 290000000, 280000000);
         
         
-- Exericios
-- Exercício 1: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
SELECT
    m.title
FROM Pixar.Movies AS m
WHERE m.id IN (
		SELECT
            bo.movie_id
        FROM Pixar.BoxOffice bo
        WHERE bo.international_sales >= 500000000
        ) 
        AND m.length_minutes > 110;


SELECT
    m.title
FROM Pixar.Movies AS m
INNER JOIN  BoxOffice bo ON bo.movie_id = m.id
WHERE bo.international_sales >= 500000000
AND m.length_minutes > 110;


-- Para realizar os exercícios a seguir, execute este script:
CREATE DATABASE IF NOT EXISTS BeeMovies;

USE BeeMovies;

CREATE TABLE movies(
    movie_id INT PRIMARY KEY auto_increment,
    ticket_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ticket_price_estimation VARCHAR(15),
    release_year YEAR
) engine = InnoDB;

CREATE TABLE movies_logs(
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    executed_action VARCHAR(15) NOT NULL,
    log_date DATE NOT NULL
) engine = InnoDB;


-- Exercício 2: Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs , informando o movie_id do filme que acaba de ser inserido na tabela movies , a executed_action como 'INSERT' e a log_date como a data atual.
DROP TRIGGER IF EXISTS trigger_insert_movie;
DROP TRIGGER IF EXISTS trigger_insert_log;

DELIMITER $$

CREATE TRIGGER trigger_insert_movie
    BEFORE INSERT ON BeeMovies.movies
    FOR EACH ROW
BEGIN
    SET NEW.release_year = YEAR(NOW());
END $$

CREATE TRIGGER trigger_insert_log
    AFTER INSERT ON BeeMovies.movies
    FOR EACH ROW
BEGIN
    INSERT INTO BeeMovies.movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;

-- para testar
SELECT * FROM BeeMovies.movies;
SELECT * FROM BeeMovies.movies_logs;

INSERT INTO BeeMovies.movies(ticket_price, ticket_price_estimation)
VALUES(10, 10);

TRUNCATE TABLE BeeMovies.movies;
TRUNCATE TABLE BeeMovies.movies_logs;

-- Exercício 3: Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies , deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing' . Caso contrário, insira o valor 'Decreasing' . Adicionalmente, insira um novo registro na tabela movies_logs , contendo informações sobre o registro alterado ( movie_id , executed_action e log_date ).
DROP TRIGGER IF EXISTS trigger_update_movie;

DELIMITER $$

CREATE TRIGGER trigger_update_movie
    BEFORE UPDATE ON BeeMovies.movies
    FOR EACH ROW
BEGIN
    SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
    INSERT INTO BeeMovies.movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'UPDATE', NOW());
END $$

DELIMITER ;

-- para testar
SELECT * FROM BeeMovies.movies;
SELECT * FROM BeeMovies.movies_logs;

UPDATE BeeMovies.movies
SET ticket_price = 5
WHERE movie_id = 1;

-- Exercício 4: Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação para a tabela movies_logs , onde devem ser guardados a data da exclusão, a executed_action 'DELETE' e o id do filme excluído.
DROP TRIGGER IF EXISTS trigger_delete_movie;

DELIMITER $$

CREATE TRIGGER trigger_delete_movie
    BEFORE DELETE ON BeeMovies.movies
    FOR EACH ROW
BEGIN
    INSERT INTO BeeMovies.movies_logs(movie_id, executed_action, log_date)
    VALUES(OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;

-- Para testar
SELECT * FROM BeeMovies.movies_logs;

DELETE FROM BeeMovies.movies WHERE movie_id = 1;