-- Exerício 3: Monte uma query que:
	-- Crie um banco de dados chamado normalization ;
	-- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
	-- Popule todas as tabelas com os dados fornecidos nos exercícios.


-- -----------------------------------------------------
-- CREATE normalization DATABASE
-- -----------------------------------------------------    
CREATE DATABASE IF NOT EXISTS normalization;
    
-- -----------------------------------------------------
-- Table  normalization.`setor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS normalization.`setor` ;

CREATE TABLE  normalization.`setor` (
  `setor_id` INT NOT NULL AUTO_INCREMENT,
  `setor` VARCHAR(45) NULL,
  PRIMARY KEY (`setor_id`)
) ENGINE = InnoDB;


INSERT INTO normalization.`setor` (`setor`)
VALUES ('Administração'),
	   ('Vendas'),
	   ('Operacional'),
	   ('Estratégico'),
	   ('Vendas'),
	   ('Marketing');

-- -----------------------------------------------------
-- Table normalization.`funcionario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS normalization.`funcionario` ;

CREATE TABLE normalization.`funcionario` (
  `funcionario_id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL, 
  `telefone` VARCHAR(45) NOT NULL,
  `data_cadastro` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Funcionario_id`)
) ENGINE = InnoDB; 

INSERT INTO normalization.`funcionario` (`funcionario_id`, `nome`, `sobrenome`, `email`, `telefone`, `data_cadastro`) 
VALUES (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
	   (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '5 de Fevereiro de 2020'),
	   (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
	   (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com	', '(33)99200-1556', '2020-05-05 11:45:40');


-- -----------------------------------------------------
-- Table normalization.`funcionario_setor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS normalization.`funcionario_setor` ;

CREATE TABLE normalization.`funcionario_setor` (
  `id_funcionario` INT NOT NULL,
  `id_setor` INT NOT NULL,
  FOREIGN KEY (`id_funcionario`)
    REFERENCES normalization.`funcionario` (`funcionario_id`),
  FOREIGN KEY (`id_setor`)
    REFERENCES normalization.`setor` (`setor_id`),
  CONSTRAINT PRIMARY KEY(`id_funcionario`, `id_setor`)
) ENGINE = InnoDB;

INSERT INTO  normalization.`funcionario_setor`(`id_funcionario`, `id_setor`)
VALUES (12, 1),
	   (12, 2),
	   (13, 3),
	   (14, 4),
	   (14, 2),
	   (15, 5);