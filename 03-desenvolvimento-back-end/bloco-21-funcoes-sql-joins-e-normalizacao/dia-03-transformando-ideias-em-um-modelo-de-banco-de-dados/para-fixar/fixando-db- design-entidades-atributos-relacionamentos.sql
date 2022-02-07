-- Hora de mexer os dedos

-- Observando e criando banco de dados albuns

-- 1. Identificar as entidades, atributos e relacionamentos.
-- Entidades:
	-- Álbum ;
	-- Artista ;
	-- Estilo Musical ;
	-- Canção ;

-- Atributos
	-- Álbum: album_id, artista_id, titulo, preco, estilo_id;
	-- Artista: artista_id e nome ;
	-- Estilo Musical: estilo_id e nome ;
	-- Canção: cancao_id, nome, album_id;

-- Relacionamentos:
	-- 1:N - 1 artista : N álbuns
    -- 1:N - estilo musical : N álbuns
    -- 1:N - 1 álbum : N canções

-- 2. Criar o diagrama e o banco novamente por conta própria, sem olhar as respostas, que estão encapsuladas.
-- Arquivo do diagrama = diagrama-album-db.png
-- Arquivo do diagrama relacional da entidades = relacionamento-entidades-album-db.png


-- -----------------------------------------------------
-- CREATE albuns DATABASE
-- -----------------------------------------------------

DROP SCHEMA IF EXISTS albuns;
CREATE SCHEMA albuns;
USE albuns;

CREATE TABLE artista(
	artista_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL
);

CREATE TABLE estilo_musical(
	estilo_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL
);

CREATE TABLE album(
	album_id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(45) NOT NULL,
	preço INT NOT NULL,
	estilo_id INT NOT NULL,
	artista_id INT NOT NULL,
	FOREIGN KEY (estilo_id) 
		REFERENCES estilo_musical (estilo_id),
	FOREIGN KEY (artista_id) 
		REFERENCES artista (artista_id)
);

CREATE TABLE cancao(
	cancao_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL,
	album_id INT NOT NULL,
	FOREIGN KEY (album_id) 
		REFERENCES album (album_id)
);