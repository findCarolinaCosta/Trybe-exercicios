-- Exercício 1: Normalize a tabela exemplo para a 1ª Forma Normal.

-- 1ª Forma Normal da example_table
 -- Características
     -- Colunas devem possuir apenas um valor
     -- Valores em uma coluna devem ser do mesmo tipo de dados
     -- Cada coluna deve possuir um nome único
     -- A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados
     
     
-- -----------------------------------------------------
-- Table `exercicio-de-fixacao`.`funcionario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `exercicio-de-fixacao`.`funcionario` ;

CREATE TABLE `exercicio-de-fixacao`.`funcionario` (
  `funcionario_id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL, 
  `telefone` VARCHAR(45) NOT NULL,
  `data_cadastro` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Funcionario_id`)
) ENGINE = InnoDB; 

INSERT INTO `exercicio-de-fixacao`.`funcionario` (`funcionario_id`, `nome`, `sobrenome`, `email`, `telefone`, `data_cadastro`) 
VALUES (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
	   (13, 'André', 'Freeman', 'andre1990@gmail.com	', '(47)99522-4996', '5 de Fevereiro de 2020'),
	   (14, 'Cíntia', 'Duval', 'cindy@outlook.com	', '(33)99855-4669', '2020-05-05 10:55:35', 'Estratégico'),
	   (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com	', '(33)99200-1556', '2020-05-05 11:45:40');

-- -----------------------------------------------------
-- Table `exercicio-de-fixacao`.`setor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `exercicio-de-fixacao`.`setor` ;

CREATE TABLE  `exercicio-de-fixacao`.`setor` (
  `setor_id` INT NOT NULL AUTO_INCREMENT,
  `funcionario_id` INT NOT NULL,
  `setor` VARCHAR(45) NULL,
  PRIMARY KEY (`setor_id`)
) ENGINE = InnoDB;


INSERT INTO `exercicio-de-fixacao`.`setor` (`Funcionario_id`, `setor`)
VALUES (12, 'Administração'),
	   (12, 'Vendas'),
	   (13, 'Operacional'),
	   (14, 'Estratégico'),
	   (14, 'Vendas'),
	   (15, 'Marketing');
